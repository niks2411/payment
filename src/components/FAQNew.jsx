import React, { useState } from 'react';

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is ShigramPay?",
      answer: "ShigramPay is a facial‑recognition payment platform. Add money once to your ShigramPay balance and pay at partner stores, restaurants, fuel stations, and online merchants using just your face."
    },
    {
      question: "How does face payment work?",
      answer: "At checkout, look at the camera for a quick liveness check. We verify your identity using AI‑powered face recognition and deduct the amount from your ShigramPay balance instantly—no phone or card needed."
    },
    {
      question: "Is my biometric data safe?",
      answer: "Yes. We use bank‑grade encryption and strict privacy controls. Biometric templates are protected and never shared with third parties. Transactions are secure and auditable in the app."
    },
    {
      question: "Where can I use ShigramPay?",
      answer: "Across our partner network—retail stores, restaurants, fuel stations and online merchants that accept ShigramPay. We’re expanding rapidly and will be available in more locations soon."
    },
    {
      question: "What if my face isn’t recognized?",
      answer: "You can retry the scan (ensure good lighting and remove masks/caps). If it still fails, pay using an alternate method and contact support; we’ll help update your face profile."
    },
    {
      question: "Can I get a refund for unused balance?",
      answer: "Yes. If your balance is unused, you may request a refund as per our refund policy in the app. Refunds are processed to your original payment method."
    },
    {
      question: "Are there any fees?",
      answer: "Creating an account is free. Standard transaction policies apply; any promotional or network‑specific fees will be shown clearly before you pay."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="faq" style={{
      background: 'white',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
      scrollMarginTop: '80px'
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
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '64px 20px 80px'
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