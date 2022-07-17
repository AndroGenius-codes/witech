import React from 'react'
import './Footer.css'

const Footer = () => {
    const locations = [
        {city: 'belvedere square', address: 'shop 20, belvedere square cnr. keurboom & belvedere rd claremont', phone: '(021) 674-0040', email: 'belvedere@colcacchio.co.za', time: 'sun - thurs 08H30 - 22H00'},
        {city: 'blouberg', address: 'shop 15, seaside village', area: 'cnr otto du plessis & cormorant drive', phone: '(021) 554-2725/4835', email: 'blouberg@colcacchio.co.za', time: 'mon - sun 11H30 - 23H00'},
        {city: 'camps bay', address: 'shop 57, issacs corner', area: 'cnr. victoria rd & the meadway', phone: '(021) 438-2171/0', email: 'campsbay@colcacchio.co.za', time: 'mon - sun 11H00 - 23H00'},
        {city: 'canal walk', address: 'shop 167, entrance 3, lower level canal walk shopping centre', area: 'century boulevard, century city', phone: '(021) 551-1658', email: 'canalwalk@colcacchio.co.za', time: 'mon - sun 11H00 - 23H00'},
        {city: 'cape town', address: 'shop 2, redefine north, wharf', area: '42 hans strijdom avenue, foreshore', phone: '(021) 419-4848', email: 'capetown@colcacchio.co.za', time: 'mon - sun 11H30 - 23H00'},
        {city: 'cavendish', address: 'shop l67, lower ground', area: 'cnr vineyard & dreyer rd. cavendish square, claremont', phone: '(021) 674-6387', email: 'cavendish@colcacchio.co.za', time: 'mon - sun 11H30 - 23H00'}
    ]

  return (
    <div className='footer'>
        <div className='footer-content'>
            <h2 className='footer-title'>western cape</h2>
            <div className='locations'>
                <div className='location'>
                    {
                        locations && locations.map((location) =>
                            <div className='location-content'>
                                <h3 className='location-city'>{location.city}</h3>
                                <div className='location-details'>
                                    <p>{location.address}</p>
                                    <p>{location.area}</p>
                                    <p>{location.phone}</p>
                                    <p>{location.email}</p>
                                    <p>{location.time}</p>
                                </div>
                            </div>
                        )
                    }
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer