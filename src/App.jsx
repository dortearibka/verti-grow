import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beranda from "./Pages/Beranda";
import Tentang from "./Pages/Tentang";
import Layanan from "./Pages/Layanan";
import Masuk from "./Pages/Masuk";
import Daftar from "./Pages/Daftar";
import "bootstrap/dist/css/bootstrap.min.css";
import Edukasi from "./Pages/Edukasi";
import Limbah from "./Pages/Limbah";
import Chatbot from "./Pages/Chatbot";
import EdukasiPakcoy from "./Pages/EdukasiPakcoy"
import EdukasiTomat from "./Pages/EdukasiTomat";
import EdukasiWortel from "./Pages/EdukasiWortel";
import EdukasiCabai from "./Pages/EdukasiCabai";
import EdukasiTerong from "./Pages/EdukasiTerong";
import EdukasiTimun from "./Pages/EdukasiTimun";
import EdukasiBrokoli from "./Pages/EdukasiBrokoli";
import EdukasiBuncis from "./Pages/EdukasiBuncis";
import LimbahBiocharOrganik from "./Pages/LimbahBiocharOrganik";
import LimbahFermentasiBokashi from "./Pages/LimbahFermentasiBokashi";
import LimbahKomposDaun from "./Pages/LimbahKomposDaun";
import LimbahPupukKompos from "./Pages/LimbahPupukKompos";
import LimbahPakanTernak from "./Pages/LimbahPakanTernak";
import LimbahPupukCair from "./Pages/LimbahPupukCair";
import LimbahPupukHijau from "./Pages/LimbahPupukHijau";
import LimbahUpcyclingWadah from "./Pages/LimbahUpcyclingWadah";





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/daftar" element={<Daftar />} />
        <Route path="/masuk" element={<Masuk />} />
        <Route path="/tentang-kami" element={<Tentang/>} />
        <Route path="/layanan-kami" element={<Layanan />} />
        <Route path="/verti-guide" element={<Edukasi />} />
        <Route path="/pakcoy" element={<EdukasiPakcoy />} />
        <Route path="/tomat" element={<EdukasiTomat/>} />
        <Route path="/wortel" element={<EdukasiWortel/>} />
        <Route path="/cabai" element={<EdukasiCabai/>} />
        <Route path="/terong" element={<EdukasiTerong/>} />
        <Route path="/timun" element={<EdukasiTimun/>} />
        <Route path="/brokoli" element={<EdukasiBrokoli/>} />
        <Route path="/buncis" element={<EdukasiBuncis/>} />
        <Route path="/eco-limbah" element={<Limbah />} />
        <Route path="/biochar-organik" element={<LimbahBiocharOrganik/>} />
        <Route path="/fermentasi-bokashi" element={<LimbahFermentasiBokashi/>} />
        <Route path="/kompos-daun" element={<LimbahKomposDaun/>} />
        <Route path="/pupuk-kompos" element={<LimbahPupukKompos/>} />
        <Route path="/pakan-ternak" element={<LimbahPakanTernak/>} />
        <Route path="/pupuk-cair" element={<LimbahPupukCair/>} />
        <Route path="/pupuk-hijau" element={<LimbahPupukHijau/>} />
        <Route path="/upcycling-wadah" element={<LimbahUpcyclingWadah/>} />
        <Route path="/chatbot-mr-grow" element={<Chatbot />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
