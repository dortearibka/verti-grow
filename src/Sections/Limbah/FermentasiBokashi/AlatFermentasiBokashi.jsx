import React, { useState } from 'react';
import Bokashi1 from '../../../assets/EcoLimbah/Langkah/langkah-bokasih-1.jpg'
import Bokashi2 from '../../../assets/EcoLimbah/Langkah/langkah-bokasih-2.jpg'
import Bokashi3 from '../../../assets/EcoLimbah/Langkah/langkah-bokasih-3.jpg'
import Bokashi4 from '../../../assets/EcoLimbah/Langkah/langkah-bokasih-4.jpg'
import Bokashi6 from '../../../assets/EcoLimbah/Langkah/langkah-bokasih-6.jpg'
import Bokashi7 from '../../../assets/EcoLimbah/Langkah/langkah-bokasih-7.jpg'

const data = [
  {
    title: 'Siapkan Tong Plastik',
    description: 'Buat lubang bagian bawah tong plastik untuk mengeluarkan cairan hasil pengomposan, cairan ini berguna sebagai pupuk organik cair.',
    img: Bokashi1,
  },
  {
    title: 'Potong Material Organik',
    description: 'Potong atau rajang material organik menjadi potongan kecil.',
    img: Bokashi2,
  },
  {
    title: 'Campurkan Bahan',
    description: 'Campurkan potongan daun dengan dedak atau serbuk gergaji dan arang sekam.',
    img: Bokashi3,
  },
  {
    title: 'Campurkan Larutan',
    description: 'Encerkan 10 ml larutan EM4 dengan 1 liter air, tambahkan dua sendok gula pasir. Kemudian siramkan pada campuran bahan baku tadi.',
    img: Bokashi4,
  },
  {
    title: 'Diamkan Campuran',
    description: 'Tutup rapat tong plastik, apabila suhu melebihi 45 derajat celcius. Diamkan selama kurang lebih 5-7 hari.',
    img: Bokashi6,
  },
  {
    title: 'Bokashi Siap Dipakai',
    description: 'Apabila warna dan teksturnya sudah seperti tanah, itu tandanya pupuk bokashi sudah terbentuk. ',
    img: Bokashi7,
  },
];

const AlatFermentasiBokashi = () => {
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
        Langkah Fermentasi Bokashi
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

export default AlatFermentasiBokashi;