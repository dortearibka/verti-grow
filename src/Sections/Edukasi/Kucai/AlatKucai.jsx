import React, { useState } from 'react';
import PipaPVC from '../../../assets/VertiGuide/Langkah/Media PVC.jpg'
import SiramBenih from '../../../assets/VertiGuide/Langkah/Penyiraman Benih.jpg'
import Semai from '../../../assets/VertiGuide/Langkah/Penyemaian.jpg'
import SiramKucai from '../../../assets/VertiGuide/Langkah/Penyiraman Kucai.jpg'
import JarangKucai from '../../../assets/VertiGuide/Langkah/Penjarangan Kucai.jpg'
import PupukNPK from '../../../assets/VertiGuide/Langkah/Pemupukan NPK.jpg'
import PanenKucai from '../../../assets/VertiGuide/Langkah/Kucai.jpg'
import PindahKucai from '../../../assets/VertiGuide/Langkah/Kucai Mini.jpg'

const data = [
  {
    title: 'Semai Bibit',
    description: 'Semai bibit yang telah disiapkan di media tanam dari campuran tanah dan kompos.',
    img: Semai,
  },
  {
    title: 'Penyiraman Bibit',
    description: 'Lakukan penyiraman secara rutin agar benih tumbuh menjadi bibit atau tanaman muda yang sehat',
    img: SiramBenih,
  },
  {
    title: 'Pindahkan Tanaman',
    description: 'Setelah bibit memiliki dua hingga tiga helai daun, baru dipindahkan ke media tanam vertikultur.',
    img: PindahKucai,
  },
  {
    title: 'Siapkan Media Vertikultur',
    description: 'Masukkan campuran media tanam yang sebelumnya dibuat ke lubang pada pipa PVC.',
    img: PipaPVC,
  },
  {
    title: 'Siram Tanaman',
    description: 'Lakukan penyiraman sebanyak dua kali sehari atau saat media tanam terlihat kering.',
    img: SiramKucai,
  },
  {
    title: 'Penjarangan',
    description: 'Lakukan penjarangan saat tanaman memiliki panjang 3 cm.',
    img: JarangKucai,
  },
  {
    title: 'Pemupukan',
    description: 'Lakukan juga pemupukan secara rutin setiap dua hingga tiga minggu sekali menggunakan pupuk kompos atau bokashi.',
    img: PupukNPK,
  },
  {
    title: 'Kucai Siap Dianen',
    description: 'Tanaman kucai mulai bisa dipanen setelah berumur dua sampai tiga bulan setelah tanam.',
    img: PanenKucai,
  },
];

const AlatKucai = () => {
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
        Langkah Penanaman Tanaman Kucai
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

export default AlatKucai;