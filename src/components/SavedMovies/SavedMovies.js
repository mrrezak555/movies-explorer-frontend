import React from 'react'
import Popup from '../Popup/Popup'
import Navigation from '../Navigation/Navigation'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import MoreMovies from '../MoreMovies/MoreMovies'
import Footer from '../Footer/Footer'
import { data } from '../../utils/testData'
import DeleteButton from '../Ui/DeleteButton'
import './SavedMovies.css'


export default function SavedMovies() {
  return (
    <>
      <Popup />
      <section className='saved-movies'>
        <Navigation />
        <main>
          <SearchForm />
          <MoviesCardList data={data.filmArraySaved}
            element={DeleteButton} />
          <MoreMovies isMore={false} />
        </main>
        <Footer />
      </section>
    </>
  )
}
