import React from 'react'
import { useState } from 'react'
import { Content } from '../components/Content';
import { Box, Tab, Tabs } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useRef } from 'react';


export const SearchPage = () => {
  const [search, setSearch] = useState('')
  const [type, setType] = useState('movie')
  const input = useRef()
  
  const urlSearch = `https://api.themoviedb.org/3/search/${type}?api_key=${import.meta.env.VITE_API_KEY}&include_adult=false&query=${search}&page=${1}`

  return (
    <>
    <div style={{backgroundColor:"#1e293b", color:'white' , minHeight:'100vh' }}>
      <div className='flex items-center p-4 text-xl flex-col'>
        <div className='flex border-2 border-blue-500 rounded-md px-4 p-2'>
          <input style={{color:'black', padding:"5px", borderRadius:'10px'}} type="text" ref={input} className='outline-none max-w-72 w-full' />
          <button onClick={() => setSearch(input.current.value)} ><Search /></button>
        </div>
        <div className='flex gap-4'>
          <button className={`${type == "movie" ? "border-b-2" : "border-b-0"} border-blue-500 transition-all duration-100`} onClick={() => setType('movie')}>Movies</button>
          <button className={`${type == "tv" ? "border-b-2" : "border-b-0"} border-blue-500 transition-all duration-100`} onClick={() => setType('tv')}>TV Serise</button>
        </div>
      </div>
      {
        search == '' ?
        <div className='h-full w-full text-xl font-bold flex justify-center items-center'>
          <p>
            Search for a {type == "movie" ? "Movie" : "Series"}
          </p>
        </div> 
          :
        <Content url={urlSearch} type={type} />
      }
    </div>
    </>
  )
}

