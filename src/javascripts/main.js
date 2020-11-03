// Required by Webpack - do not touch
// require.context('../', true, /\.(html|json|txt|dat)$/i)
require('../favicon.ico')
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// TODO
import React from 'react'
import ReactDOM from 'react-dom'

import App  from './components/App'
import ContactForm from './components/contactForm'




if(document.getElementById('main')){
	ReactDOM.render(<App/>, document.getElementById('main'))
}else if(document.getElementById('contact')){
	ReactDOM.render(<ContactForm/>, document.getElementById('contact'))
}