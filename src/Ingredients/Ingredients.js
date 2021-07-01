import React, { useEffect, useState, useReducer } from "react";
import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";

const Ingredients = () => {


    const ingredientReducer = (currentIngredient, action) => {

        switch (action.type) {
            case 'ADD':
                return { ...currentIngredient, ingredients: action.ingredients }
            default:
                return currentIngredient;
        }
    }

    const [ dataIngredient, dispatch] = useReducer(ingredientReducer, {ingredients: []});

    const fetchData = () => {
        // mengambil data dari firebase
        fetch("https://react-db-cc11e-default-rtdb.asia-southeast1.firebasedatabase.app/hargaMakanan.json")
        .then(response => response.json())
        .then(responseData => {
            const loadedIngredient = []
            // input data ke dalam array
            for(const key in responseData) {
                loadedIngredient.push({
                    id: key,
                    harga: responseData[key].harga,
                    nama: responseData[key].nama
                })
            }
            dispatch({type: 'ADD', ingredients: loadedIngredient})
        })
    }

    console.log(JSON.stringify(dataIngredient))
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="App">
            <IngredientForm />
            <section>
                <IngredientList/>
            </section>
        </div>
    )
}
export default Ingredients
