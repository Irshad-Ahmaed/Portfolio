import React from 'react'
import { Link } from 'react-router-dom'
import { linkedin, github } from '../assets/icons'

const CTA = () => {
  return (
    <section>
        <div className='cta'>
          <p className='cta-text'>
              Like my experience? <br className='sm:block hidden' />
              Wanna reach out to me!
          </p>

          <Link to="/contact" className='btn'>
              Contact
          </Link>
        </div>

        {/* <div className='flex justify-end items-center'>
          <Link to="https://github.com/Irshad-Ahmaed" target='_blanck'>
            <img className='w-[50%]' src={github} alt='my_linkedin_profile' />
          </Link>
          <Link to="https://linkedin.com/in/irshad-ahmad-63497924a/" target='_blanck'>
            <img className='w-[100%]' src={linkedin} alt='my_linkedin_profile' />
          </Link>
        </div> */}
    </section>
  )
}

export default CTA