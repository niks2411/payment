import React, { useEffect, useRef, useState } from 'react'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import ThreeGlobe from 'three-globe'
import {
  AmbientLight,
  Color,
  DirectionalLight,
  PerspectiveCamera,
  PointLight,
  Scene,
  WebGLRenderer,
} from 'three'
import { cn } from '../../../utils'

// Types
const defaultGlobeConfig = {
  pointSize: 1,
  atmosphereColor: '#ffffff',
  showAtmosphere: true,
  atmosphereAltitude: 0.1,
  polygonColor: 'rgba(255,255,255,0.7)',
  globeColor: '#1d072e',
  emissive: '#000000',
  emissiveIntensity: 0.1,
  shininess: 0.9,
  arcTime: 2000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
}

function GithubGlobe({ globeConfig = {}, data = [], className = '' }) {
  const canvasRef = useRef(null)
  const [globeData, setGlobeData] = useState([])
  const [countriesData, setCountriesData] = useState(null)
  
  const config = { ...defaultGlobeConfig, ...globeConfig }

  // Load world countries GeoJSON with caching
  useEffect(() => {
    // Use cached data if available
    const cachedData = sessionStorage.getItem('world-countries-data')
    if (cachedData) {
      try {
        setCountriesData(JSON.parse(cachedData))
        return
      } catch (e) {
        console.error('Failed to parse cached data:', e)
      }
    }

    // Fetch data
    fetch('/data/world-countries.json')
      .then(res => res.json())
      .then(data => {
        setCountriesData(data)
        // Cache the data
        try {
          sessionStorage.setItem('world-countries-data', JSON.stringify(data))
        } catch (e) {
          console.warn('Failed to cache data:', e)
        }
      })
      .catch(err => {
        console.error('Failed to load world-countries.json, trying globe.json:', err)
        // Fallback to globe.json
        return fetch('/data/globe.json')
          .then(res => res.json())
          .then(data => setCountriesData(data))
          .catch(err2 => {
            console.error('Failed to load globe.json:', err2)
            setCountriesData({
              type: 'FeatureCollection',
              features: []
            })
          })
      })
  }, [])
  
  let numberOfRings = []
  let renderer = null
  let scene = null
  let camera = null
  let controls = null
  let globe = null
  let animationFrameId = null

  useEffect(() => {
    if (!canvasRef.current || !countriesData) return

    setupScene()
    initGlobe()
    animate()

    const handleResize = () => {
      if (!canvasRef.current || !camera || !renderer) return
      const width = canvasRef.current.clientWidth
      const height = canvasRef.current.clientHeight

      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
      if (renderer) {
        renderer.dispose()
      }
    }
  }, [countriesData, data])

  function setupScene() {
    if (!canvasRef.current) {
      throw new Error('Canvas not initialized')
    }

    const width = canvasRef.current.clientWidth
    const height = canvasRef.current.clientHeight

    renderer = new WebGLRenderer({ canvas: canvasRef.current, antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(width, height)
    renderer.setClearColor(new Color('#ffffff'), 1)
    renderer.autoClear = true

    scene = new Scene()
    scene.background = new Color('#ffffff')

    camera = new PerspectiveCamera(75, width / height, 0.1, 2000)
    camera.aspect = width / height
    camera.position.setX(0)
    camera.position.setY(0)
    camera.position.setZ(300)

    const ambientLight = new AmbientLight(config.ambientLight || '#ffffff', 0.7)
    scene.add(ambientLight)

    const dLight1 = new DirectionalLight(config.directionalLeftLight || '#ffffff', 0.8)
    dLight1.position.set(-400, 100, 400)
    scene.add(dLight1)

    const dLight2 = new DirectionalLight(config.directionalTopLight || '#ffffff', 0.6)
    dLight2.position.set(-200, 500, 200)
    scene.add(dLight2)

    const pLight = new PointLight(config.pointLight || '#ffffff', 0.5)
    pLight.position.set(200, -200, 200)
    scene.add(pLight)

    camera.updateProjectionMatrix()

    controls = new OrbitControls(camera, renderer.domElement)
    controls.enableZoom = false
    controls.enablePan = false
    controls.enableDamping = true
    controls.dampingFactor = 0.01
    controls.minDistance = 200
    controls.maxDistance = 500
    controls.rotateSpeed = config.autoRotateSpeed || 0.8
    controls.zoomSpeed = 1
    controls.autoRotate = config.autoRotate || false

    controls.minPolarAngle = Math.PI / 3.5
    controls.maxPolarAngle = Math.PI - Math.PI / 3
  }

  function initGlobe() {
    const builtData = buildData()

    globe = new ThreeGlobe({
      waitForGlobeReady: true,
      animateIn: true,
    })
      .hexPolygonsData(countriesData.features || [])
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.62)
      .showAtmosphere(config.showAtmosphere)
      .atmosphereColor(config.atmosphereColor)
      .atmosphereAltitude(config.atmosphereAltitude)
      .hexPolygonColor(() => config.polygonColor)

    // Initial rotation to show a good view
    globe.rotateY(-Math.PI / 6)
    globe.rotateX(-Math.PI / 6)

    const globeMaterial = globe.globeMaterial()

    if (globeMaterial) {
      globeMaterial.color = new Color(config.globeColor)
      globeMaterial.emissive = new Color(config.emissive)
      globeMaterial.emissiveIntensity = config.emissiveIntensity || 0.1
      globeMaterial.shininess = config.shininess || 0.9
    }

    scene.add(globe)

    // Start animation with built data
    if (builtData && builtData.length > 0) {
      startAnimation(builtData)
    }
  }

  function startAnimation(builtData) {
    if (!globe || !data.length) return

    globe
      .arcsData(data)
      .arcStartLat((d) => d.startLat * 1)
      .arcStartLng((d) => d.startLng * 1)
      .arcEndLat((d) => d.endLat * 1)
      .arcEndLng((d) => d.endLng * 1)
      .arcColor((e) => e.color)
      .arcAltitude((e) => e.arcAlt * 1)
      .arcStroke(() => [0.32, 0.28, 0.3][Math.round(Math.random() * 4)])
      .arcDashLength(config.arcLength)
      .arcDashInitialGap((e) => e.order * 1)
      .arcDashGap(15)
      .arcDashAnimateTime(config.arcTime)

      .pointsData(data)
      .pointColor((e) => e.color)
      .pointsMerge(true)
      .pointAltitude(0.0)
      .pointRadius(2)

      .ringsData([])
      .ringColor((e) => (t) => e.color(t))
      .ringMaxRadius(config.maxRings)
      .ringPropagationSpeed(3)
      .ringRepeatPeriod((config.arcTime * config.arcLength) / config.rings)

    // Update rings if we have built data
    if (builtData && builtData.length > 0) {
      numberOfRings = genRandomNumbers(0, builtData.length, Math.floor((builtData.length * 4) / 5))
      globe.ringsData(builtData.filter((d, i) => numberOfRings.includes(i)))
    }
  }

  function animate() {
    if (!globe || !renderer || !scene || !camera) return

    // Only auto-rotate if enabled
    if (config.autoRotate && globe) {
      globe.rotation.y += 0.002
    }

    if (controls) {
      controls.update()
    }
    renderer.render(scene, camera)

    animationFrameId = requestAnimationFrame(animate)
  }

  function buildData() {
    if (!data || data.length === 0) return []
    
    const arcs = data
    let points = []
    for (let i = 0; i < arcs.length; i++) {
      const arc = arcs[i]
      const rgb = hexToRgb(arc.color)
      points.push({
        size: config.pointSize,
        order: arc.order,
        color: (t) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
        lat: arc.startLat,
        lng: arc.startLng,
      })
      points.push({
        size: config.pointSize,
        order: arc.order,
        color: (t) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
        lat: arc.endLat,
        lng: arc.endLng,
      })
    }

    // remove duplicates for same lat and lng
    const filteredPoints = points.filter(
      (v, i, a) =>
        a.findIndex((v2) =>
          ['lat', 'lng'].every((k) => v2[k] === v[k])
        ) === i
    )

    setGlobeData(filteredPoints)
    return filteredPoints
  }

  function hexToRgb(color) {
    let hex = color.replace(/^#/, '')

    // If the hex code is 3 characters, expand it to 6 characters
    if (hex.length === 3) {
      hex = hex
        .split('')
        .map((char) => char + char)
        .join('')
    }

    // Parse the r, g, b values from the hex string
    const bigint = parseInt(hex, 16)
    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255

    return { r, g, b }
  }

  function genRandomNumbers(min, max, count) {
    const arr = []
    while (arr.length < count) {
      const r = Math.floor(Math.random() * (max - min)) + min
      if (arr.indexOf(r) === -1) arr.push(r)
    }
    return arr
  }

  return (
    <div className={cn('w-full h-full flex items-center justify-center', className)}>
      <canvas 
        ref={canvasRef} 
        className="w-full h-full max-w-full max-h-full" 
        style={{ display: 'block' }}
      />
    </div>
  )
}

export default GithubGlobe

