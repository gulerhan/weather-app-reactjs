import React from 'react'

const City = ({city}) => {
    console.log(city)
  return ( 
  <div>
      <div className="pt-6">
        <h1 className='text-5xl font-bold'>{city.main.temp} °C</h1>
        <h1 className='text-3xl font-medium'>{city.name}</h1>
        <h1 className='text-2xl '>{city.weather[0].main}</h1>
      </div>
  </div>
  )
}

export default City