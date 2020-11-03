import React from 'react'
import { FaStar } from 'react-icons/fa'

export default function StarRating({totalStars = 5, selectedStars= 0}){
	const Star = ({ selected = false}) =>(
		<FaStar color={selected ? "maroon" : "grey"}/>
	)
	const createArray = length => [...Array(length)]
	return(
		<>
		{createArray(totalStars).map((n,i)=>(
			<Star
				key={i}
				selected = {selectedStars > i}
			/>
		))}
		
		</>
	)
}