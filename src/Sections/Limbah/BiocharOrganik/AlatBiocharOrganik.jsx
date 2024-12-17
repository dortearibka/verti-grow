import React, { useState } from 'react';

const data = [
  {
    title: 'Siapkan Lubang',
    description: 'Buatlah lubang di tanah dengan diameter sekitar 1 meter dan kedalaman sekitar 30 cm.',
    img: 'https://bibitbunga.com/wp-content/uploads/2016/08/menyemai-biji-pakcoy.jpg',
  },
  {
    title: 'Bakar Kayu',
    description: 'Masukkan kayu bakar atau sampah yang mudah dibakar ke dalam lubang tersebut dan nyalakan api.',
    img: 'https://bibitbunga.com/wp-content/uploads/2016/08/menyemai-biji-pakcoy.jpg',
  },
  {
    title: 'Campurkan Sekam Padi',
    description: 'Kemudian masukkan sekam padi ke dalam lubang secara bertahap sambil diaduk-aduk agar tercampur rata dengan api.',
    img: 'https://bibitbunga.com/wp-content/uploads/2016/08/menyemai-biji-pakcoy.jpg',
  },
  {
    title: 'Tutup Lubang',
    description: 'Tutup lubang tersebut dengan tanah atau daun kering agar api tidak terlihat dan pembakaran berlangsung secara parsial.',
    img: 'https://picsum.photos/500/300',
  },
  {
    title: 'Diamkan Proses Pembakaran',
    description: 'Biarkan proses pembakaran berlangsung selama kurang lebih 2 jam atau sampai sekam padi berubah warna menjadi hitam.',
    img: 'https://picsum.photos/500/300',
  },
  {
    title: 'Angkat Sekam',
    description: 'Setelah itu, buka kembali lubang tersebut lalu angkat sekam bakar yang sudah jadi dengan menggunakan sekop.',
    img: 'https://picsum.photos/500/300',
  },
  {
    title: 'Saring Sekam',
    description: 'Ayak sekam bakar dengan menggunakan kawat ayakan untuk memisahkan abu dan kotoran yang tidak diinginkan.',
    img: 'https://picsum.photos/500/300',
  },
  {
    title: 'Siram Sekam',
    description: 'Basahi sekam bakar dengan menggunakan selang air agar tidak terbakar lagi dan suhunya turun.',
    img: 'https://picsum.photos/500/300',
  },
  {
    title: 'Keringkan Sekam',
    description: 'Keringkan sekam bakar di bawah sinar matahari atau di tempat yang teduh sampai benar-benar kering.',
    img: 'https://picsum.photos/500/300',
  },
  {
    title: 'Sekam Siap Digunakan',
    description: 'Simpan sekam bakar dalam karung atau wadah tertutup agar tidak lembab dan terkontaminasi.',
    img: 'https://picsum.photos/500/300',
  },
];

const AlatBiocharOrganik = () => {
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
        Langkah Pengolahan Limbah Organik Menjadi Biochar
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
            <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-end text-center bg-black bg-opacity-60 p-8">
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

export default AlatBiocharOrganik;