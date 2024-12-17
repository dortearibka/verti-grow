import React from 'react'
import { useState } from 'react';

export default function AlatWortel() {
    const data = [
        {
          title: 'Media Tanam',
          description: 'Gunakan campuran tanah, kompos, dan sekam bakar atau cocopeat. Media ini harus memiliki drainase yang baik.',
          img: 'https://assets-a1.kompasiana.com/items/album/2017/10/11/fa4eb39b-fcfe-47a2-b60f-d778a1297192-59dda141bde5757bb35671f5.jpeg',
        },
        {
          title: 'Wadah Vertikultur',
          description: 'Gunakan pipa PVC, paralon, atau rak vertikal yang berlubang untuk tempat menanam pakcoy.',
          img: 'https://picsum.photos/500/300',
        },
        {
          title: 'Bibit Pakcoy',
          description: 'Pilih bibit pakcoy yang unggul, sehat, dan bebas dari penyakit.',
          img: 'https://bibitbunga.com/wp-content/uploads/2016/08/menyemai-biji-pakcoy.jpg',
        },
        {
          title: 'Pupuk dan Air',
          description: 'Gunakan pupuk organik atau pupuk cair sesuai kebutuhan tanaman. Pastikan penyiraman dilakukan dengan efisien, misalnya menggunakan selang atau sprayer.',
          img: 'https://picsum.photos/500/300',
        },
      ];
    
      const itemsPerPage = 1; // Jumlah item per halaman
      const [currentPage, setCurrentPage] = useState(1);
    
      // total pages untuk pagination
      const totalPages = Math.ceil(data.length / itemsPerPage);
      const paginatedData = data.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      );
    
      // handle previous untuk pagination
      const handlePrevious = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
      };
    
      // handle next untuk pagination
      const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
      };

  return (
    <section className="container flex flex-col items-center py-16">
      <h3 className="text-3xl font-semibold mb-12">Alat dan Bahan</h3>

      {/* Konten */}
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
            <div className="absolute bottom-0 left-0 right-0 h-full flex flex-col justify-end text-center bg-black bg-opacity-60 p-8">
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-lg">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
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
  )
}
