import express from 'express'

import {contactPage, indexPage, aboutPage} from '../controllers/index'
import {contactAPI} from '../controllers/contacts'
import {allMoviesAPI, oneMovieAPI, createMovieAPI,updateMovieAPI, deleteMovieAPI} from '../controllers/movies'
let router = express.Router()

export function configureRoutes(app){
	router.get('/', indexPage)
	router.get('/movies*', indexPage)
	router.get('/about', aboutPage)
	router.get('/contact', contactPage)

	// Movies API Endpoints
	router.get('/api/movies', allMoviesAPI )
	router.get('/api/movies/:id', oneMovieAPI )
	router.post('/api/movies', createMovieAPI )
	router.put('/api/movies/:id', updateMovieAPI )
	router.delete('/api/movies/:id', deleteMovieAPI )
	router.post('/api/contact', contactAPI )

	app.use('/', router)
}