import React, { useEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import ThreeGlobe from 'three-globe'

// Minimal world polygons (India + few boxes as placeholders). Replace with a real world.json for full countries
const defaultCountries = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { name: 'India' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [ [68.1766, 7.9655], [97.4026, 7.9655], [97.4026, 35.4940], [68.1766, 35.4940], [68.1766, 7.9655] ]
        ]
      }
    }
  ]
}

function GlobeObject({ arcs = [], countries = defaultCountries, globeConfig = {} }) {
  const groupRef = useRef()
  const globeRef = useRef()
  const rotationSpeed = globeConfig.autoRotateSpeed ?? 0.004

  const options = useMemo(() => ({
    globeColor: '#062056',
    emissive: '#0a1629',
    emissiveIntensity: 0.2,
    shininess: 0.8,
    atmosphereColor: '#5db1ff',
    atmosphereAltitude: 0.12,
    polygonColor: 'rgba(80,120,255,0.35)',
    showAtmosphere: true,
    ...globeConfig
  }), [globeConfig])

  useEffect(() => {
    const g = new ThreeGlobe()
      .showAtmosphere(options.showAtmosphere)
      .atmosphereColor(options.atmosphereColor)
      .atmosphereAltitude(options.atmosphereAltitude)
      .globeImageUrl(null)

    // material
    const mat = g.globeMaterial()
    mat.color = new THREE.Color(options.globeColor)
    mat.emissive = new THREE.Color(options.emissive)
    mat.emissiveIntensity = options.emissiveIntensity
    mat.shininess = options.shininess

    // polygons
    g.hexPolygonsData(countries.features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.7)
      .hexPolygonColor(() => options.polygonColor)

    // arcs
    g.arcsData(arcs)
      .arcStartLat((d) => d.startLat)
      .arcStartLng((d) => d.startLng)
      .arcEndLat((d) => d.endLat)
      .arcEndLng((d) => d.endLng)
      .arcColor((d) => d.color || '#2f5bff')
      .arcAltitude((d) => d.arcAlt ?? 0.25)
      .arcStroke(() => 0.35)
      .arcDashLength(0.9)
      .arcDashGap(0.15)
      .arcDashAnimateTime(1200)

    globeRef.current = g
    groupRef.current.add(g)

    return () => {
      if (groupRef.current && g) {
        groupRef.current.remove(g)
      }
      globeRef.current = null
    }
  }, [countries, options, arcs])

  useFrame(() => {
    if (groupRef.current && (globeConfig.autoRotate ?? true)) {
      groupRef.current.rotation.y += rotationSpeed
    }
  })

  return (
    <group ref={groupRef} />
  )
}

export default function Globe3D({
  arcs = [],
  globeConfig = {},
  countries = defaultCountries,
  style = {},
}) {
  const cameraZ = globeConfig.cameraZ ?? 260
  return (
    <Canvas
      camera={{ position: [0, 0, cameraZ], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      frameloop="always"
      style={style}
    >
      <ambientLight intensity={0.5} />
      <directionalLight color={'#ffffff'} position={[200, 100, 200]} intensity={0.6} />
      <directionalLight color={'#ffffff'} position={[-200, -60, -200]} intensity={0.45} />
      <GlobeObject arcs={arcs} countries={countries} globeConfig={globeConfig} />
      <OrbitControls enablePan={false} enableZoom={false} autoRotate={false} />
      <fog attach="fog" args={[0xffffff, 420, 1200]} />
    </Canvas>
  )
}
