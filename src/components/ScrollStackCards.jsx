import React, { useEffect, useState } from 'react';

export default function ScrollStackCards() {
  const [scrollY, setScrollY] = useState(0);

  const cards = [
    {
      id: 1,
      title: 'Secure Face Recognition',
      description:
        'Make contactless, verified payments using your face. Our AI-powered recognition ensures accuracy and security at checkout.',
      image: '👤',
      imageSrc: '/image8.webp',
      features: ['3D Face Mapping', 'Liveness Detection', 'Bank-Grade Security'],
    },
    {
      id: 2,
      title: 'Instant Payments',
      description:
        'Blink. Pay. Go. No cards or phones needed—your face is your wallet for lightning‑fast checkout.',
      image: '⚡',
      imageSrc: '/image7.webp',
      features: ['Lightning Fast', 'Contactless', 'Queue-Free Checkout'],
    },
    {
      id: 3,
      title: 'Multi‑Platform Acceptance',
      description:
        'Add money once, use everywhere. Pay across retail, dining, fuel and online partners in our network.',
      image: '🌐',
      imageSrc: '/image9.webp',
      features: ['Retail Stores', 'Online Shopping', 'Restaurant Dining'],
    },
    {
      id: 4,
      title: 'Privacy Protected',
      description:
        'Your biometrics never leave your device context. We encrypt and safeguard your data—always.',
      image: '🔒',
      imageSrc: '/image10.webp',
      features: ['End-to-End Encryption', 'GDPR Compliant', 'No Data Sharing'],
    },
    
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white">
      <div className="min-h-[70vh] flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-b from-blue-700 to-blue-500 bg-clip-text text-transparent">ShigramPay</h1>
          <p className="text-xl text-slate-600">The Future of Face Recognition Payments</p>
          <p className="text-lg text-slate-500 mt-2">Scroll down to explore ↓</p>
        </div>
      </div>

      <div className="relative">
        {cards.map((card, index) => {
          const cardStart = index * 400;
          const progress = Math.max(0, Math.min(1, (scrollY - cardStart) / 400));
          const scale = 0.9 + progress * 0.1;

          return (
            <div
              key={card.id}
              className="sticky h-[85vh] flex items-center justify-center"
              style={{ top: `${index * 14}px`, zIndex: index + 1 }}
            >
              <div
                className="w-full max-w-5xl mx-4 bg-gradient-to-b from-white to-blue-50 rounded-3xl shadow-2xl overflow-hidden transition-transform duration-300 border border-blue-100"
                style={{ transform: `scale(${scale})` }}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="flex-1 p-10 md:p-12 flex flex-col justify-center">
                    <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold mb-4 w-fit">
                      Feature {card.id}
                    </div>
                    <h2 className="text-4xl font-bold mb-4 text-slate-800">{card.title}</h2>
                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">{card.description}</p>

                    <div className="space-y-3 mb-8">
                      {card.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          <span className="text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all w-fit shadow-blue-300/40 shadow-lg">
                      Learn More
                    </button>
                  </div>

                  <div className="flex-1 bg-blue-50/60 flex items-center justify-center p-8 md:p-12">
                    {card.imageSrc ? (
                      <img
                        src={card.imageSrc}
                        alt={card.title}
                        className="max-h-72 md:max-h-80 w-auto object-contain drop-shadow-[0_10px_20px_rgba(30,64,175,0.25)]"
                      />
                    ) : (
                      <div className="text-9xl">{card.image}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="min-h-[70vh] flex items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4 text-slate-800">Ready to get started?</h2>
          <p className="text-lg text-slate-600 mb-6">Join thousands of users paying with their face</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all shadow-xl">
            Download ShigramPay
          </button>
        </div>
      </div>
    </div>
  );
}


