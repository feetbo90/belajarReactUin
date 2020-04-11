import React from 'react';

function NamaAlamat (props) {
    return (
        <div>
            <p>Maka Nama : {props.nama}</p>
            <p>Maka Alamat : {props.alamat}</p>
        </div>

    );
}

export default NamaAlamat;