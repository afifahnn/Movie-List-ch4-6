import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetMovie } from '../redux/actions/authMovie'

export const Movie = () => {
    const dispatch = useDispatch()

    const getMovie = () => {
        dispatch(GetMovie())
    }

    useEffect(() => {
        getMovie()
    }, [] )

    const {movies} = useSelector((store) => store.movie)
    console.log(movies)

  return (
    <div>mmm
        {movies && movies.map((value) => (
            <span key={value.id}>{value.original_title}</span>
        ))}
    </div>
  )
}
