import React, { useState } from 'react';
import Maggot1 from '../../../assets/EcoLimbah/Langkah/langkah-maggot-1.jpg'
import Maggot2 from '../../../assets/EcoLimbah/Langkah/langkah-manggot-2.jpg'
import Maggot3 from '../../../assets/EcoLimbah/Langkah/langkah-manggot-3.jpg'
import Maggot4 from '../../../assets/EcoLimbah/Langkah/langkah-manggot-4.jpg'
import Maggot5 from '../../../assets/EcoLimbah/Langkah/langkah-manggot-5.jpeg'
import Maggot7 from '../../../assets/EcoLimbah/Langkah/langkah-manggot-7.jpg'
import Maggot8 from '../../../assets/EcoLimbah/Langkah/langkah-manggot-8.jpg'

const data = [
  {
    title: 'Siapkan Tempat Penetasan',
    description: 'Siapkan media penetasan telur dari box kardus yang telah disiapkan.',
    img: Maggot4,
  },
  {
    title: 'Kandang Larva',
    description: 'Buat kandang pembesaran larva menggunakan triplek dengan ukuran 2,5 x 4 x 5 m.',
    img: Maggot5,
  },
  {
    title: 'Pencampuran Bahan',
    description: 'Campur EM4, penyedap masakan, gula pasir di dalam ember. Lalu berikan air secukupnya.',
    img: Maggot1,
  },
  {
    title: 'Pindahkan Campuran',
    description: 'Ikat bahan yang telah tercampur dengan plastik yang telah diberi beberapa lubang kecil.',
    img: Maggot2,
  },
  {
    title: 'Tambahkan Dedak',
    description: 'Berikan dedak di sekitar wadah untuk menarik perhatian lalat.',
    img: Maggot3,
  },
  {
    title: 'Pindahkan Telur Larva',
    description: 'Pindahkan larva ke box kardus kecil.',
    img: Maggot4,
  },
  {
    title: 'Pembesaran Larva',
    description: 'Pisahkan telur larva yang telah menetas ke wadah pembesaran agar telur yang belum menetas tidak pecah.',
    img: Maggot5,
  },
  {
    title: 'Perawatan Larva',
    description: 'Gunakan sampah organik sebagai pakan larva.',
    img: Maggot7,
  },
  {
    title: 'Larva Siap Dipanen',
    description: 'Larva siap dipanen dan digunakan sebagai pakan ternak seperti ayam, burung, dan ikan.',
    img: Maggot8,
  },
];

const AlatPakanTernak = () => {
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
        Langkah Pengolahan Limbah untuk Pakan Ternak
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

export default AlatPakanTernak;