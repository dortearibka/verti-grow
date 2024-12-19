import React, { useState } from 'react';
import Cycling1 from '../../../assets/EcoLimbah/Langkah/langkah-cycling-1.jpg'
import Cycling2 from '../../../assets/EcoLimbah/Langkah/langkah-cycling-2.jpg'
import Cycling3 from '../../../assets/EcoLimbah/Langkah/langkah-cycling-3.jpeg'
import Cycling4 from '../../../assets/EcoLimbah/Langkah/langkah-cycling-4.jpg'
import Cycling5 from '../../../assets/EcoLimbah/Langkah/langkah-cycling-5.jpg'
import Cycling6 from '../../../assets/EcoLimbah/Langkah/langkah-cycling-6.jpg'
import Cycling7 from '../../../assets/EcoLimbah/Langkah/langkah-cycling-7.jpg'

const data = [
  {
    title: 'Buat Lubang',
    description: 'Buat lubang di bagian bawah botol plastik untuk mengalirkan kelebihan air, lubang ini berfungsi sebagai sistem drainase agar tanaman tidak tergenang.',
    img: Cycling1,
  },
  {
    title: 'Potong Botol',
    description: 'Potong bagian atas botol menggunakan gunting atau cutter hingga membentuk wadah terbuka.',
    img: Cycling2,
  },
  {
    title: 'Masukkan Kerikil',
    description: 'Tambahkan lapisan kerikil kecil atau pasir setebal 2-3 cm di dasar botol untuk membantu drainase air.',
    img: Cycling3,
  },
  {
    title: 'Tambahkan Tanah',
    description: 'Masukkan tanah subur atau campuran tanah dengan kompos ke dalam botol hingga hampir penuh.',
    img: Cycling4,
  },
  {
    title: 'Buat Lubang',
    description: 'Buat lubang kecil di tengah tanah dan masukkan bibit tanaman yang telah disiapkan. Tekan ringan agar bibit kokoh.',
    img: Cycling5,
  },
  {
    title: 'Siram Tanah',
    description: 'Siram tanah dengan air secukupnya hingga lembab, namun tidak terlalu basah.',
    img: Cycling6,
  },
  {
    title: 'Siram Tanah',
    description: 'Letakkan wadah botol plastik di tempat yang mendapat sinar matahari sesuai kebutuhan tanaman. Jika ingin digantung, buat dua lubang di sisi botol, tambahkan tali, dan gantungkan pada tempat yang diinginkan.',
    img: Cycling7,
  },
];

const AlatUpcyclingWadah = () => {
  const itemsPerPage = 1;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <section className="container flex flex-col items-center py-16">
      <h3 className="text-3xl font-semibold mb-12">
        Langkah Upcycling Wadah Botol Plastik Bekas
      </h3>

      <div className="w-full flex flex-col items-center gap-8">
        {paginatedData.map((item, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden bg-white text-white shadow-xl w-3/4"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-end text-center bg-black bg-opacity-50 p-8">
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-lg">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4 mt-10">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`px-6 py-3 text-lg bg-green-700 text-white rounded-md ${
            currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-800'
          }`}
        >
          Sebelumnya
        </button>
        <span className="text-lg font-medium text-gray-700">
          Halaman {currentPage} dari {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-6 py-3 text-lg bg-green-700 text-white rounded-md ${
            currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-800'
          }`}
        >
          Selanjutnya
        </button>
      </div>
    </section>
  );
};

export default AlatUpcyclingWadah;