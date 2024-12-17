import React from 'react'
import NavbarUser from '../Components/NavbarUser'
import DefinisiTerong from '../Sections/Edukasi/Terong/DefinisiTerong'
import AlatTerong from '../Sections/Edukasi/Terong/AlatTerong'
import LangkahTerong from '../Sections/Edukasi/Terong/LangkahTerong'
import VideoTerong from '../Sections/Edukasi/Terong/VideoTerong'
import Footer from '../Components/Footer'

export default function EdukasiTerong() {
  return (
    <>
        <NavbarUser/>
        <DefinisiTerong/>
        <AlatTerong/>
        <LangkahTerong/>
        <VideoTerong/>
        <Footer/>
    </>
  )
}
