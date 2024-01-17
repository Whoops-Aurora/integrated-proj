import React from "react"

const Blog = () => {
  const data = [
    {
      id: 1,
      cover: "./images/blog1.png",
      title: "Two International Conferences ,ICTIEE & IASF inaugurated",
      date: "Jan 02 2024",
      name: "BY MSB",
    },
    {
      id: 2,
      cover: "./images/blog2.jpg",
      title: "REES-2024 Symposium on Engineering Education Inaugurated at KLE Tech, Hubballi",
      date: "Jan 04 2024",
      name: "BY MSB",
    },
    {
      id: 3,
      cover: "./images/blog3.jpg",
      title: "KLE Tech and Dassault Systemes collaborate for Centre of Excellence",
      date: "Jan 05 2024",
      name: "BY MSB",
    },
  ]
  return (
    <>
      <section className='blog'>
        <div className='container'>
          <span className='baget'>Articles</span>
          <h1>Latest Articles</h1>
          <div className='content grid mtop'>
            {data.map((val) => {
              return (
                <div className='box'>
                  <div className='box'>
                    <img src={val.cover} alt='' />
                    <h2>{val.title}</h2>
                    <span>
                      {val.name} / {val.date}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
