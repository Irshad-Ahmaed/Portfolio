import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>
            Like my experience? <br className='sm:block hidden' />
            Wanna reach out to me!
        </p>

        <Link to="/contact" className='btn'>
            Contact
        </Link>
    </section>
  )
}

export default CTA