import React from 'react'
import NavbarUser from '../Components/NavbarUser'
import DefinisiWortel from '../Sections/Edukasi/Wortel/DefinisiWortel'
import AlatWortel from '../Sections/Edukasi/Wortel/AlatWortel'
import LangkahWortel from '../Sections/Edukasi/Wortel/LangkahWortel'
import VideoWortel from '../Sections/Edukasi/Wortel/VideoWortel'
import Footer from '../Components/Footer'

export default function EdukasiWortel() {
  return (
    <>
        <NavbarUser/>
        <DefinisiWortel/>
        <AlatWortel/>
        <LangkahWortel/>
        <VideoWortel/>
        <Footer/>
    </>
  )
}
