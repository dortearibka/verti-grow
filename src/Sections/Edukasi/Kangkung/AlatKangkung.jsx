import React, { useState } from 'react';
import MediaTanam from '../../../assets/VertiGuide/Langkah/Campuran Media.jpg'
import PipaPVC from '../../../assets/VertiGuide/Langkah/Media PVC.jpg'
import Lubang from '../../../assets/VertiGuide/Langkah/Pembuatan Lubang.jpg'
import TanamBenih from '../../../assets/VertiGuide/Langkah/Penanaman Benih.jpg'
import SiramBenih from '../../../assets/VertiGuide/Langkah/Penyiraman Benih.jpg'
import PupukTanaman from '../../../assets/VertiGuide/Langkah/Pemupukan.jpg'
import Bayam from '../../../assets/VertiGuide/Langkah/Panen Bayam.jpg'
import PanenBayam from '../../../assets/VertiGuide/Langkah/Pemanenan Bayam.jpg'
import Semai from '../../../assets/VertiGuide/Langkah/Penyemaian.jpg'
import TanamVertikal from '../../../assets/VertiGuide/Langkah/Penanaman Vertikal.jpg'
import PupukCair from '../../../assets/VertiGuide/Langkah/Penyiraman Pupuk.jpg'
import PanenCaisim from '../../../assets/VertiGuide/Langkah/Pemanenan Caisim.jpg'
import PilihTanaman from '../../../assets/VertiGuide/Langkah/Bawang.jpg'
import PotongTanaman from '../../../assets/VertiGuide/Langkah/Pemotongan Bawang.jpg'
import TanamBawang from '../../../assets/VertiGuide/Langkah/Tanam Bawang.jpeg'
import SiramBawang from '../../../assets/VertiGuide/Langkah/Penyiraman Bawang.jpg'
import PanenBawang from '../../../assets/VertiGuide/Langkah/Pemanenan Bawang.jpg'
import PupukTanah from '../../../assets/VertiGuide/Langkah/Pemupukan Tanah.png'
import SiramKangkung from '../../../assets/VertiGuide/Langkah/Penyiraman bayam.jpg'
import JarangKangkung from '../../../assets/VertiGuide/Langkah/Penjarangan.jpg'
import SiangKangkung from '../../../assets/VertiGuide/Langkah/Penyiangan.jpg'
import PanenKangkung from '../../../assets/VertiGuide/Langkah/Kangkung.jpg'
import PanenUlangKangkung from '../../../assets/VertiGuide/Langkah/Pemanenan Kembali Kangkung.jpg'

const data = [
  {
    title: 'Siapkan Media Tanam',
    description: 'Masukkan tanah pada lubang pipa PVC.',
    img: PipaPVC,
  },
  {
    title: 'Pemupukan Tanah',
    description: 'Berikan pupuk kandang pada media tanam 4 hari sebelum penanaman.',
    img: PupukTanah,
  },
  {
    title: 'Penanaman',
    description: 'Buatlah lubang pada media tanam, masukkan benih kangkung dan tutup tipis dengan tanah.',
    img: TanamVertikal,
  },
  {
    title: 'Penyiraman',
    description: 'Tanaman kangkung darat sebaiknya disiram secara rutin pada pagi dan sore hari.',
    img: SiramKangkung,
  },
  {
    title: 'Pemupukan',
    description: 'Lakukan pemupukan setelah tanaman mencapai usia 14 hari.',
    img: PupukTanaman,
  },
  {
    title: 'Penjarangan',
    description: 'Lakukan penjarangan jika dalam satu lubang tanam terdapat lebih dari 4 batang tanaman.',
    img: JarangKangkung,
  },
  {
    title: 'Penyiangan',
    description: 'Lakukan penyiangan setiap 2 minggu sekali dengan cara mencabut gulma satu per satu.',
    img: SiangKangkung,
  },
  {
    title: 'Kangkung Siap Dianen',
    description: 'Setelah berumur 30 sampai 40 hari, tanaman dapat dipanen sebanyak tiga kali.',
    img: PanenKangkung,
  },
  {
    title: 'Panen Ulang',
    description: 'Panen kembali tanaman kangkung setelah 5 sampai 7 hari.',
    img: PanenUlangKangkung,
  },
];

const AlatKangkung = () => {
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
        Langkah Penanaman Tanaman Kangkung Darat
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

export default AlatKangkung;