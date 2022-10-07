import { useState, useEffect } from 'react'
import CharactersCard from './CharactersCard';
import './Characters.css'

const API_URL = 'https://www.breakingbadapi.com/api/characters';

const Characters = () => {

    const [dataFromApi, setdataFromApi] = useState([]);
    const [searchFor, setSearchFor] = useState('');
    // const[countr , setCountr] = useState(5);
    // console.log(countr);
    // setCountr(7);
    useEffect(() => {
        getBreakingBad();
        console.log('useeffect');
    }, []);


    const getBreakingBad = async () => {
        const response = await fetch(`${API_URL}?name=${searchFor}`);
        const data = await response.json();
        setdataFromApi(data);
    }

    // true && console.log('first')
    // if(true){
    //     console.log('first')
    // }
    return (
        <>
            <div className='container nh-container'>
                <input
                    type='text'
                    className='form-control my-3'
                    placeholder='Search a Character'
                    value={searchFor}
                    onChange={(e) => {
                        setSearchFor(e.target.value);
                        // e.target.value === '' && getBreakingBad('')
                    }}
                    onKeyDown={(e) => {
                        if(e.key === 'Enter') {
                            getBreakingBad();
                            console.log('i presses enter')
                        }
                    }}
                />
                {
                    dataFromApi.length > 0
                        ? (
                            dataFromApi.map(character =>{
                                console.log(character);

                                <CharactersCard key={character.char_id} character={character} />
                            })
                        )
                        : (
                            <h1>There is no {searchFor} here</h1>
                        )
                }                
            </div>

        </>
    )
}

export default Characters