import React from 'react';
import Navbar from './Navbar';
import { redirectToStore } from '../utils';



export default function ShigramPayHero() {

  return (

    <div className="min-h-[620px] md:min-h-[80vh] bg-gradient-to-b from-white via-blue-50 to-blue-600">

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}

      <div className="grid md:grid-cols-2 items-center gap-8 md:gap-10 px-6 md:px-16 pt-10 md:pt-20 pb-12 md:pb-20">

        {/* Left Content */}

        <div className="md:pr-12">

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-600 leading-tight mb-6 md:mb-8">

            Blink. Pay. Go.

          </h1>

          

          <p className="text-gray-600 text-base leading-relaxed mb-10 max-w-lg">

            ShigramPay Is A Next-Gen Digital Payment Platform That Enables Fast, 

            Contactless, And Secure Transactions Using Advanced Facial Recognition 

            Technology. With ShigramPay, Users Can Make Instant And Verified 

            Payments .

          </p>

          

          <button onClick={redirectToStore} className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition">

            Get Started

          </button>

        </div>

        {/* Right Image Area */}

        <div className="flex items-center justify-center">

          <div className="relative w-full max-w-xl h-64 md:h-96 flex items-center justify-center">

            {/* Hero illustration from public/image1.png */}

            <img
              src="/image1.png"
              alt="ShigramPay hero illustration"
              className="absolute inset-0 m-auto h-full w-full object-contain rounded-lg drop-shadow-xl"
            />

          </div>

        </div>

      </div>

    </div>

  );

}

