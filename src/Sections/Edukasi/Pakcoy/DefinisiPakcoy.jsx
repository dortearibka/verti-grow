import React from 'react';

export default function DefinisiPakcoy() {
  return (
    <section className="bg-[#387F39] py-20 mt-40">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          {/* Gambar */}
          <div className="relative lg:w-1/2">
            <img
              src="https://picsum.photos/600/400"
              alt="Pakcoy"
              className="rounded-xl h-auto w-full object-cover shadow-lg transform hover:scale-105 transition-transform duration-500"
            />
            {/* Elemen dekoratif */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-[#2C5232] rounded-full transform -translate-x-4 -translate-y-4 z-[-1]"></div>
          </div>

          {/* Teks */}
          <div className="lg:w-1/2 text-white space-y-6">
            <h1 className="text-5xl font-extrabold leading-tight tracking-wide">
              Tanaman Pakcoy
            </h1>
            <p className="text-lg leading-relaxed">
              Pakcoy atau bok choy (<i>Brassica rapa</i> Kelompok Chinensis; suku sawi-sawian atau Brassicaceae) merupakan jenis sayuran yang populer. 
              Sayuran yang dikenal pula sebagai sawi sendok ini mudah dibudidayakan dan dapat dimakan segar (biasanya dilayukan dengan air panas) 
              atau diolah menjadi asinan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
