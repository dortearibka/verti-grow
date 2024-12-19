import React from 'react'
import BiocharPadi from '../../../assets/EcoLimbah/AlatBahan/Biochar Padi.jpg'
import GulaPasir from '../../../assets/EcoLimbah/AlatBahan/Gula.jpg'
import EM4 from '../../../assets/EcoLimbah/AlatBahan/Larutan EM4.jpg'
import SampahDapur from '../../../assets/EcoLimbah/AlatBahan/Sampah Dapur.jpg'
import Dedak from '../../../assets/EcoLimbah/AlatBahan/Sekam Padi.jpg'
import TongPlastik from '../../../assets/EcoLimbah/AlatBahan/Tong Plastik.jpg'

export default function LangkahFermentasiBokashi() {
  return (
    <section className='container flex flex-col gap-10 items-center py-10'>
        <h3 className='text-3xl font-semibold'>
            Alat dan Bahan
        </h3>

        {/* konten */}
        <div className='flex flex-col gap-10 items-center'>

            {/* baris 1 */}
            <div className='flex gap-10'>
                {/* card 1 */}
                <div className='relative rounded-lg overflow-hidden bg-white text-white'>
                    <img 
                    src={SampahDapur} 
                    alt="Sampah Organik Berupa Sisa Makanan"
                    className='w-60 h-60 object-cover' />

                    {/* teks media tanam */}
                    <div className='flex flex-col absolute bottom-0 left-0 right-0 h-60 justify-center items-center text-center bg-black bg-opacity-50 p-5'>
                        <h3 className='text-xl font-semibold'>
                            Sampah Organik Berupa Sisa Makanan
                        </h3>
                        
                    </div>
                </div>

                {/* card 2 */}
                <div className='relative rounded-lg overflow-hidden bg-white text-white'>
                    <img 
                    src={Dedak} 
                    alt="1 kg Dedak"
                    className='w-60 h-60 object-cover' />

                    {/* teks media tanam */}
                    <div className='flex flex-col absolute bottom-0 left-0 right-0 h-60 justify-center items-center text-center bg-black bg-opacity-50 p-5'>
                        <h3 className='text-xl font-semibold'>
                            1 kg Dedak
                        </h3>
                        
                    </div>
                </div>

                {/* card 3 */}
                <div className='relative rounded-lg overflow-hidden bg-white text-white'>
                    <img 
                    src={BiocharPadi} 
                    alt="5 kg Arang Sekam"
                    className='w-60 h-60 object-cover' />

                    {/* teks media tanam */}
                    <div className='flex flex-col absolute bottom-0 left-0 right-0 h-60 justify-center items-center text-center bg-black bg-opacity-50 p-5'>
                        <h3 className='text-xl font-semibold'>
                            5 kg Arang Sekam
                        </h3>
                        
                    </div>
                </div>
            </div>

            {/* baris 2 */}
            <div className='flex gap-10'>
                {/* card 1 */}
                <div className='relative rounded-lg overflow-hidden bg-white text-white'>
                    <img 
                    src={EM4} 
                    alt="10 ml Larutan EM4"
                    className='w-60 h-60 object-cover' />

                    {/* teks media tanam */}
                    <div className='flex flex-col absolute bottom-0 left-0 right-0 h-60 justify-center items-center text-center bg-black bg-opacity-50 p-5'>
                        <h3 className='text-xl font-semibold'>
                            10 ml Larutan EM4
                        </h3>
                        
                    </div>
                </div>

                {/* card 2 */}
                <div className='relative rounded-lg overflow-hidden bg-white text-white'>
                    <img 
                    src={GulaPasir} 
                    alt="2 sdm Gula Pasir"
                    className='w-60 h-60 object-cover' />

                    {/* teks media tanam */}
                    <div className='flex flex-col absolute bottom-0 left-0 right-0 h-60 justify-center items-center text-center bg-black bg-opacity-50 p-5'>
                        <h3 className='text-xl font-semibold'>
                            2 sdm Gula Pasir
                        </h3>
                        
                    </div>
                </div>

                {/* card 3 */}
                <div className='relative rounded-lg overflow-hidden bg-white text-white'>
                    <img 
                    src={TongPlastik} 
                    alt="Tong Plastik" 
                    className='w-60 h-60 object-cover' />

                    {/* Teks */}
                    <div className='flex flex-col absolute bottom-0 left-0 right-0 h-60 justify-center items-center text-center bg-black bg-opacity-50 p-5'>
                        <h3 className='text-xl font-semibold'>
                            Tong Plastik 200 Liter
                        </h3>
                        
                    </div>
                </div>
            </div>

        </div>
        
    </section>
  )
}
