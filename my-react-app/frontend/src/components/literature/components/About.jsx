import React from "react"

const About = () => {
  const data = [
    {
      cover: "./images/university.jpg",
      catgeory: "Literature Details",
      title: "Explore the benefits of Literature Section",
      desc: "A dynamic platform where students can submit their achievements to be featured in the yearly department magazine. Our user-friendly Department magazine management interface provides an easy and engaging experience for every department. Explore the wealth of student accomplishments and easily navigate through the Departments annual magazines.",
    },
  ]
  return (
    <>
      <section className='about'>
        <div className='container flex'>
          {data.map((value) => {
            return (
              <>
                <div className='left row'>
                  <img src={value.cover} alt='' />
                </div>
                <div className='right row'>
                  <span className='baget'>{value.catgeory}</span>
                  <h2>{value.title}</h2>
                  <p>{value.desc}</p>
                   <button className='primary-btn'>SEND NOW</button>
                </div>
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default About
