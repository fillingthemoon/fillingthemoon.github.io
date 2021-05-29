import React from 'react'

const aboutMeData = [
  {
    description: `Since I was a kid, I've loved building and putting things together; from experimenting with small toy sets to assembling IKEA furniture and now, to building websites. Beginning my journey, delving into environmental studies in university has really showed me the pressing need for further efforts in environmental sustainability around the world. Geographical Information Systems (GIS) proved to be valuable for this such as using remote sensing to detect LULC change over time and investigating the UHI effect and water/electricity consumption in Singapore. With more experience, GIS opened the doors for me into the world of tech. 

    Taking a handful of computer science modules in university and online courses allowed me to, very early on, contribute to an open-source web application, through working in a team, developing handy features, and automating parts of my workflow. This experience also tremendously improved my skills in QGIS, PyQGIS, JavaScript, Python, JSON, and SVG. I then took on a task where I was exposed to APIs and web-scraping. Using the OneMap API and Python, I consolidated tens of thousands of residential records in Singapore including HDBs, condominiums, and landed property and mapped and digitised them in QGIS.
    
    More recently, I have been creating a few full stack end-to-end web applications and seek to further explore the field of full stack web-development and GIS and how these technologies can be used to positively impact others' lives and aid in environmental sustainability.
    
    Check out my website and Github page for more info and minor coding projects! :) 
    
    https://philemonheng.com
    http://fillingthemoon.github.io`
  }
]

const AboutMe = () => {

  return (
    <div>
      <div id="content-container">
        <h2 id="content-title">about me</h2>
        <br />
        <div id="about-me">
          <p>
            {aboutMeData[0].description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe