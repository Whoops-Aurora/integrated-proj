import React from "react"

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>
              <span>Welcome to </span> Literature Section.
            </h1>
            <h3>KLE TECH</h3>
          </div>
          <div className='right row'>
            <div className='img'>
              <img src='./public/images/home1.jpg' alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
