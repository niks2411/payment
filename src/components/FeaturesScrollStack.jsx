import React from 'react'
import ScrollStack, { ScrollStackItem } from './ScrollStack'

export default function FeaturesScrollStack() {
  return (
    <section className="section-y bg-gradient-to-b from-white via-primary-50/20 to-white">
      <div className="container-x px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Why <span className="text-primary-700">ShigramPay?</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Experience the future of payments with facial recognition technology
          </p>
        </div>

        <ScrollStack
          useWindowScroll={true}
          itemDistance={100}
          itemScale={0.04}
          itemStackDistance={30}
          stackPosition="25%"
          scaleEndPosition="15%"
          baseScale={0.88}
          rotationAmount={1.5}
          blurAmount={2}
        >
          <ScrollStackItem itemClassName="bg-white">
            <div className="h-full flex flex-col justify-center">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                Lightning Fast Payments
              </h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Complete your transactions in seconds with just a face scan. No need to fumble with cards or phones.
              </p>
            </div>
          </ScrollStackItem>

          <ScrollStackItem itemClassName="bg-gradient-to-br from-primary-50 to-white">
            <div className="h-full flex flex-col justify-center">
              <div className="text-4xl mb-3">🔒</div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                Bank-Level Security
              </h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Your face is your password. Our biometric authentication uses advanced AI and encryption to protect 
                your financial data. More secure than traditional PINs or passwords.
              </p>
            </div>
          </ScrollStackItem>

          <ScrollStackItem itemClassName="bg-white">
            <div className="h-full flex flex-col justify-center">
              <div className="text-4xl mb-3">💳</div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                Universal Acceptance
              </h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Use ShigramPay at thousands of merchants across India. From coffee shops to restaurants, 
                retail stores to gas stations - pay everywhere with just your face.
              </p>
            </div>
          </ScrollStackItem>

          <ScrollStackItem itemClassName="bg-gradient-to-br from-primary-50 to-white">
            <div className="h-full flex flex-col justify-center">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                Zero Transaction Fees
              </h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Add money once to your ShigramPay wallet and use it everywhere without any additional charges. 
                No hidden fees, no transaction costs.
              </p>
            </div>
          </ScrollStackItem>

          <ScrollStackItem itemClassName="bg-white">
            <div className="h-full flex flex-col justify-center">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                Easy Setup & Management
              </h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Get started in minutes. Simply download the app, add your face, and load your wallet. 
                Track all transactions in real-time and manage your balance effortlessly.
              </p>
            </div>
          </ScrollStackItem>

          <ScrollStackItem itemClassName="bg-gradient-to-br from-primary-50 to-white">
            <div className="h-full flex flex-col justify-center">
              <div className="text-4xl mb-3">🌍</div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                India's First Facial Recognition Payment App
              </h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Be part of the payment revolution. ShigramPay is pioneering the future of contactless payments 
                with cutting-edge facial recognition technology.
              </p>
            </div>
          </ScrollStackItem>
        </ScrollStack>
      </div>
    </section>
  )
}

