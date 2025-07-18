import {create} from 'zustand'
import {immer} from 'zustand/middleware/immer'
import {devtools} from 'zustand/middleware'
import axios from 'axios'

const categoryStore = create(devtools(immer((set)=>{
    return{
        categories: [],
        getCategories: () =>{
            axios('https://fakestoreapi.com/products/categories')
            .then(({data}) => set(state => {
                state.categories = data
            })) 
        }
    }
})))

export default categoryStore