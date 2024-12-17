import React from 'react'
import NavbarUser from '../Components/NavbarUser'
import DefinisTimun from '../Sections/Edukasi/Timun/DefinisTimun'
import AlatTimun from '../Sections/Edukasi/Timun/AlatTimun'
import LangkahTimun from '../Sections/Edukasi/Timun/LangkahTimun'
import VideoTimun from '../Sections/Edukasi/Timun/VideoTimun'
import Footer from '../Components/Footer'

export default function EdukasiTimun() {
  return (
    <>
        <NavbarUser/>
        <DefinisTimun/>
        <AlatTimun/>
        <LangkahTimun/>
        <VideoTimun/>
        <Footer/>
    </>
  )
}
