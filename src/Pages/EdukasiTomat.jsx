import React from 'react'
import NavbarUser from '../Components/NavbarUser'
import DefinisiTomat from '../Sections/Edukasi/Tomat/DefinisiTomat'
import AlatTomat from '../Sections/Edukasi/Tomat/AlatTomat'
import LangkahTomat from '../Sections/Edukasi/Tomat/LangkahTomat'
import VideoTomat from '../Sections/Edukasi/Tomat/VideoTomat'
import Footer from '../Components/Footer'

export default function EdukasiTomat() {
  return (
    <>
        <NavbarUser/>
        <DefinisiTomat/>
        <AlatTomat/>
        <LangkahTomat/>
        <VideoTomat/>
        <Footer/>
    </>
  )
}
