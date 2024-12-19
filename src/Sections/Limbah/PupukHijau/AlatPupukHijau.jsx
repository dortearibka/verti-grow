import React, { useState } from 'react';
import Hijau1 from '../../../assets/EcoLimbah/Langkah/langkah-hijau-1.jpg'
import Hijau2 from '../../../assets/EcoLimbah/Langkah/langkah-hijau-2.jpg'
import Hijau3 from '../../../assets/EcoLimbah/Langkah/langkah-hijau-3.jpg'
import Hijau6 from '../../../assets/EcoLimbah/Langkah/langkah-hijau-6.jpg'

const data = [
  {
    title: 'Campurkan Larutan',
    description: 'Larutkan 5 ml EM4 ke dalam 2,5 gram molase dan 250 ml oksigen. Pastikan larutan tercampur rata agar mikroorganisme dari EM4 dapat aktif dengan baik.',
    img: Hijau1,
  },
  {
    title: 'Potong Daun',
    description: 'Cacah daun-daunan hingga lembut. Semakin halus cacahan daun, semakin cepat proses pengomposan akan berlangsung. Kelembutan daun membantu mikroorganisme untuk bekerja lebih cepat dalam menguraikan bahan organik.',
    img: Hijau2,
  },
  {
    title: 'Campurkan Bahan',
    description: 'Semprotkan campuran tersebut secara merata ke atas cacahan daun. Penyemprotan yang merata akan membantu mikroorganisme bekerja lebih efektif dalam menguraikan bahan organik.',
    img: Hijau3,
  },
  {
    title: 'Aduk Campuran',
    description: 'Setelah penyemprotan, aduk cacahan daun menggunakan alat pengaduk. Tujuan dari pengadukan ini adalah memastikan lingkungan EM4 tercampur rata dengan daun.',
    img: Hijau6,
  },
  {
    title: 'Diamkan Campuran',
    description: 'Setelah semua bahan tercampur dengan baik, biarkan tumpukan daun dalam alat pengaduk selama 30 hingga 40 hari. Proses ini penting untuk fermentasi, di mana mikroorganisme akan menguraikan bahan organik menjadi kompos.',
    img: Hijau6,
  },
  {
    title: 'Proses Aerasi',
    description: 'Setiap 10 hari sekali, lakukan pengadukan kompos untuk memastikan proses aerasi berjalan dengan baik. Aerasi menjadi faktor penting dalam pengomposan karena membantu sirkulasi udara dan mencegah timbulnya bau tidak sedap.',
    img: Hijau6,
  },
  {
    title: 'Pupuk Siap Digunakan',
    description: 'Setelah melalui proses pendiaman selama 40 hari, pupuk siap digunakan.',
    img: Hijau6,
  },
];

const AlatPupukHijau = () => {
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
        Langkah Pengolahan Limbah Organik Menjadi Pupuk Hijau
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

export default AlatPupukHijau;