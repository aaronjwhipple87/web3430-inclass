export const indexPage = (req, res, next) => {
	res.render('layout', {content: 'index', title: 'Top 10 Movies: Aaron Whipple'})
}

export const aboutPage = (req, res, next) => {
	res.render('layout', {content: 'about', title: 'Top 10 Movies: Aaron Whipple'})
}

export const contactPage = (req, res, next) => {
	res.render('layout', {content: 'contact', title: 'Top 10 Movies: Aaron Whipple'})
}
