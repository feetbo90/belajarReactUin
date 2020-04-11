import React, { useState } from 'react';
import './App.css';
import InputNamaDanAlamat from './Input/InputNamaDanAlamat'


function App() {

  // nama merupakan nilai
  // setNama merupakan pengesetan nilai
  const [nama, setNama] = useState("Iqbal");
  const [alamat, setAlamat] = useState("Medan");
  

  // fungsi untuk mengambil nilai yang berubah

  const perubahanNilaiNama = (event) => {
    setNama(event.target.value);
    console.log("ini nama : " + event.target.value);
  }

  const perubahanAlamat = (event) => {
    setAlamat(event.target.value);
    console.log("ini alamat : " + event.target.value);
  }

  return (
    <div className="App">
      <p>My First Application</p>
      
      <p>Ini dari file InputNamaDanAlamat.js</p>
      <InputNamaDanAlamat 
        namaLengkap={nama}
        alamatLengkap = {alamat}
      />

      <p>Masukkan Nama : </p>
      
        <input 
          type="text"
          onChange={perubahanNilaiNama}
        >
        </input>
        <p>Masukkan Alamat : </p>
        <input type="text"
          onChange={perubahanAlamat} >
        </input>
        <p>Ini dari App.js</p>
        <p>Nama : {nama}</p>
        <p>Alamat : {alamat}</p>
      
    </div>
  );
}

export default App;
