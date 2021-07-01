import React, {useState} from "react";
import './IngredientForm.css';
import Card from '../UI/Card';

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
        <section className="ingredient-form">
            <Card>
            <form onSubmit={submitHandler}>
                <div className="form-control">
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
                <div className="form-control">
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
                <div className="ingredient-form__actions">
                    <button type="submit">Tambah</button>
                </div>
            </form>
            </Card>
        </section>
    )
}

export default IngredientForm
