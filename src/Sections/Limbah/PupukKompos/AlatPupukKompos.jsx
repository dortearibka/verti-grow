import React, { useState } from 'react';
import Kompos1 from '../../../assets/EcoLimbah/Langkah/langkah-kompos-1.jpg'
import Kompos2 from '../../../assets/EcoLimbah/Langkah/langkah-kompos-2.jpg'
import Kompos3 from '../../../assets/EcoLimbah/Langkah/langkah-kompos-3.jpg'
import Kompos4 from '../../../assets/EcoLimbah/Langkah/langkah-kompos-4.jpg'
import Kompos5 from '../../../assets/EcoLimbah/Langkah/langkah-kompos-5.jpg'
import Kompos6 from '../../../assets/EcoLimbah/Langkah/langkah-kompos-6.jpg'

const data = [
  {
    title: 'Potong Sampah Organik',
    description: 'Cacah sampah organik hingga berukuran kecil-kecil.',
    img: Kompos1,
  },
  {
    title: 'Tambahkan Bahan',
    description: 'Tambahkan kompos jadi, tanah, pupuk kandang atau serbuk gergaji sebagai inokulan.',
    img: Kompos2,
  },
  {
    title: 'Tambahkan Larutan EM4',
    description: ' Larutkan EM4 dengan air, kemudian tuangkan pada campuran bahan kompos sebelumnya, aduk rata.',
    img: Kompos3,
  },
  {
    title: 'Diamkan Campuran',
    description: 'Masukkan semua bahan ke dalam wadah pengomposan, tutup rapat.',
    img: Kompos4,
  },
  {
    title: 'Aduk Campuran',
    description: 'Aduk seminggu sekali agar aerasi dalam wadah berjalan baik. Nantinya selama pengomposan suhu akan naik, ini merupakan tanda bahwa mikroorganisme tengah bekerja.',
    img: Kompos5,
  },
  {
    title: 'Kompos Siap Dipakai',
    description: 'Selanjutnya, di minggu ke-7 atau 8 saat pengomposan selesai, suhu akan normal kembali dan kompos siap dipakai.',
    img: Kompos6,
  },
];

const AlatPupukKompos = () => {
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
        Langkah Pengolahan Limbah Menjadi Pupuk Kompos
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

export default AlatPupukKompos;