import React, {useState} from "react";

const IngredientForm = () => {
// axios
    const submitHandler = event => {
        event.preventDefault()
        // https://react-db-cc11e-default-rtdb.asia-southeast1.firebasedatabase.app/
        fetch("https://react-db-cc11e-default-rtdb.asia-southeast1.firebasedatabase.app/hargaMakanan.json",{
            method: 'POST',
            body: JSON.stringify(inputState),
            headers: {'Content-Type': 'application/json'}
        }).then(response => {
            console.log(response.json())
        })
    }

    const [inputState, setInputState] = useState({
        nama: '',
        harga: ''
    })
    console.log(inputState)
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor={"title"}>Nama :</label>
                    <input
                        type="text"
                        id="title"
                        value={inputState.nama}
                        onChange={
                            event => {
                                const newNama = event.target.value
                                setInputState(prevInputState => ({
                                    nama: newNama,
                                    harga: prevInputState.harga
                                }))
                            }
                        }
                    />
                </div>
                <div>
                    <label htmlFor={"harga"}>Harga :</label>
                    <input
                        type="number"
                        id="harga"
                        value={inputState.harga}
                        onChange={
                            event => {
                                const newHarga = event.target.value
                                setInputState(prevInputState => ({
                                    harga: newHarga,
                                    nama: prevInputState.nama
                                }))
                            }
                        }
                    />
                </div>
                <div>
                    <button type="submit">Tambah</button>
                </div>
            </form>
        </div>
    )
}

export default IngredientForm
