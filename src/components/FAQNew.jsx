import React, { useState } from 'react';

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Staggervity?",
      answer: "Staggervity our payment application company. Staggervity offers the key ideas to the companies through payment gateways. We also offer free payment gateway and zero credit and deduction for financial transactions."
    },
    {
      question: "How do I Register for Staggervity services?",
      answer: "Staggervity our payment application company. Staggervity offers the key ideas to the companies through payment gateways. We also offer free payment gateway and zero credit and deduction for financial transactions."
    },
    {
      question: "Where do I register for Staggervity membership?",
      answer: "Staggervity our payment application company. Staggervity offers the key ideas to the companies through payment gateways. We also offer free payment gateway and zero credit and deduction for financial transactions."
    },
    {
      question: "Can I transfer my voucher to someone else?",
      answer: "Staggervity our payment application company. Staggervity offers the key ideas to the companies through payment gateways. We also offer free payment gateway and zero credit and deduction for financial transactions."
    },
    {
      question: "Are there any fees or charges?",
      answer: "Staggervity our payment application company. Staggervity offers the key ideas to the companies through payment gateways. We also offer free payment gateway and zero credit and deduction for financial transactions."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'white',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif'
    }}>
      {/* Left Circle */}
      <div style={{
        position: 'absolute',
        width: '300px',
        height: '300px',
        border: '20px solid #0066FF',
        borderRadius: '50%',
        left: '-150px',
        top: '70%',
        transform: 'translateY(-50%)'
      }}></div>
      
      {/* Right Circle */}
      <div style={{
        position: 'absolute',
        width: '300px',
        height: '300px',
        border: '20px solid #0066FF',
        borderRadius: '50%',
        right: '-200px',
        top: '80px'
      }}></div>

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '640px',
        margin: '0 auto',
        padding: '64px 20px'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: '#0066FF',
          textAlign: 'center',
          marginBottom: '48px'
        }}>FAQ's</h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                background: '#F8F9FA',
                borderRadius: '8px',
                overflow: 'hidden'
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '20px 24px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#EEEFF1'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                <span style={{
                  color: '#333',
                  fontWeight: '500',
                  paddingRight: '16px',
                  fontSize: '1rem'
                }}>{faq.question}</span>
                
                <div style={{
                  position: 'relative',
                  width: '24px',
                  height: '24px',
                  flexShrink: 0
                }}>
                  <span style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '16px',
                    height: '2px',
                    background: '#666'
                  }}></span>
                  <span style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '2px',
                    height: '16px',
                    background: '#666',
                    transform: activeIndex === index ? 'translate(-50%, -50%) rotate(90deg)' : 'translate(-50%, -50%)',
                    opacity: activeIndex === index ? 0 : 1,
                    transition: 'all 0.3s ease'
                  }}></span>
                </div>
              </button>
              
              <div style={{
                maxHeight: activeIndex === index ? '500px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.3s ease'
              }}>
                <div style={{
                  padding: '0 24px 20px 24px',
                  color: '#666',
                  lineHeight: '1.6',
                  fontSize: '0.95rem'
                }}>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQSection;