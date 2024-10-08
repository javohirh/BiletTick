import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    languages: {
        en: {
            home: 'HOME1',
            name_uz: 'UZBEK'
        },
        uz: {
            home: 'UY2',
            name_uz: "O'zbek"
        },
        ru: {
            home: 'Dom2',
            name_uz: 'Uzbek'
        },
    },
}

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        getAllLanguages: (state, action) => {
            state.languages = {...action.payload}
        }
    },
})

export const {getAllLanguages} = settingsSlice.actions

export default settingsSlice
