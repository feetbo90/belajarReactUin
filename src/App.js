import React, { useState}  from 'react';
import './App.css';
import NamaAlamat from './Input/NamaAlamat';

function App() {

    const [nama, setNama]= useState("");
    const [alamat, setAlamat] = useState("");
    const rubahNama = (event) => {
        setNama(event.target.value);
    }
    const rubahAlamat = (event) => {
        setAlamat(event.target.value);
    }

    console.log(nama)
    return (
        <div className="App">
            <p>Hello World</p>

            <p> Masukkan Nama : </p>
            <input type="text"
                onChange={rubahNama}>
            </input>
            <p> Masukkan ALamat : </p>
            <input type="text"
                onChange={rubahAlamat}>
            </input>
            <NamaAlamat nama ={nama} alamat={alamat}/>
        </div>
    );

}

export default App;