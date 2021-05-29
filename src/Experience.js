import React from 'react'

const experienceData = [
  {
    position: 'Full Stack Developer Intern',
    company: 'Urban Redevelopment Authority (URA)',
    duration: 'Jan 2021 - May 2021',
  },
  {
    position: 'Student Associate',
    company: 'Yale-NUS College, Division of Science',
    duration: 'Feb 2020 - May 2021',
  },
  {
    position: 'Graduate Student Researcher',
    company: 'Singapore-ETH Centre (Natural Capital Singapore)',
    duration: 'Jun 2020 - Mar 2021',
  },
  {
    position: 'SRP Researcher',
    company: 'Yale-NUS College, Summer Research Programme (SRP)',
    duration: 'May 2020 - Jul 2020',
  },
  {
    position: 'Research Assistant (GIS)',
    company: 'NUS Faculty of Arts and Social Sciences',
    duration: 'Mar 2020 - Apr 2020',
  },
  {
    position: 'Streetscape Intern',
    company: 'National Parks Board (NParks)',
    duration: 'May 2019 - Aug 2019',
  },
]

const Experience = () => {
  return (
    <div>
      <div id="content-container">
        <h2 id="content-title">experience</h2>
        {experienceData.map((experience, i) =>
          <div id='experience' key={i}>
            <h2>{experience.position}</h2>
            <h3>{experience.company}</h3>
            <h4>{experience.duration}</h4>
            <br />
          </div>
        )}
      </div>
    </div>
  )
}

export default Experience
