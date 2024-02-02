import '../css/index.css'

import { useEffect, useState } from 'react'

function App() {

    if (window.innerWidth <= 400) {return}


    const [color, setColor] = useState(0)
    const colorPalettes = {
        1: ['#222831', '#393E46', '#00ADB5', '#EEEEEE'],
        2: ['#E3FDFD', '#CBF1F5', '#A6E3E9', '#71C9CE'],
        3: ['#FFC7C7', '#FFE2E2', '#F6F6F6', '#8785A2'],
        4: ['#F9F7F7', '#DBE2EF', '#3F72AF', '#112D4E'],
        5: ['#FFF5E4', '#FFE3E1', '#FFD1D1', '#FF9494'],
        6: ['#AD8B73', '#CEAB93', '#E3CAA5', '#FFFBE9'],
        7: ['#F4EEFF', '#DCD6F7', '#A6B1E1', '#424874'],
        8: ['#2C3333', '#395B64', '#A5C9CA', '#E7F6F2'],
        9: ['#F8EDE3', '#BDD2B6', '#A2B29F', '#798777'],
        10: ['#F67280', '#C06C84', '#6C5B7B', '#355C7D'],
    }

    const getColor = () => {
        if (color === 0) {
            setColor(1)    
            return colorPalettes[1]
        }

        if (color === 10) {
            setColor(1)
            return colorPalettes[1]
        }

        else {
            setColor(color + 1)
            return colorPalettes[color + 1]
        }

    }

    const manageColorPalettes = () => {
        const colors = getColor()
        document.querySelector('body').style.backgroundColor = `${colors[0]}`;
        document.getElementById('hbday').style.color = `${colors[2]}`;
        document.getElementById('name').style.color = `${colors[2]}`;
        document.getElementById('wish-btn').style.backgroundColor = `${colors[1]}`;
        document.getElementById('wish-btn').style.borderColor = `${colors[2]}`;
        document.getElementById('wish-btn').style.color = `${colors[2]}`;
    }   

    useEffect(() => {
        setTimeout(() => {manageColorPalettes();}, 1000);
    }, [color])


    return (
        <div id='bg-div' className='flex flex-col w-full !min-h-screen items-center justify-center'>
            <p id='hbday' className='relative bottom-20 text-white text-center font-ubuntu text-5xl'>Happy Birthday</p>
            <p id='name' className='relative bottom-[70px] text-white text-center font-ubuntu text-7xl'>Aswin Senpai!</p>
            <button id='wish-btn' className='bg-zinc-600 border border-stone-200 rounded-lg p-3 px-5 mt-5 text-stone-200 font-ubuntu active:opacity-80'>Wish</button>
        </div>
    )
}

export default App
