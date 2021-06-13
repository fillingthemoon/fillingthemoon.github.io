import React from 'react'

import SkillsCard from './SkillsCard'

import img_001 from './imgs/skills/img_001.png'
import img_002 from './imgs/skills/img_002.png'
import img_003 from './imgs/skills/img_003.png'
import img_004 from './imgs/skills/img_004.png'
import img_005 from './imgs/skills/img_005.png'
import img_006 from './imgs/skills/img_006.png'
import img_007 from './imgs/skills/img_007.png'
import img_008 from './imgs/skills/img_008.png'
import img_009 from './imgs/skills/img_009.png'
import img_010 from './imgs/skills/img_010.png'
import img_011 from './imgs/skills/img_011.png'
import img_012 from './imgs/skills/img_012.png'
import img_013 from './imgs/skills/img_013.png'
import img_014 from './imgs/skills/img_014.png'
import img_015 from './imgs/skills/img_015.png'
import img_016 from './imgs/skills/img_016.png'
import img_017 from './imgs/skills/img_017.png'
import img_018 from './imgs/skills/img_018.png'
import img_019 from './imgs/skills/img_019.png'
import img_020 from './imgs/skills/img_020.png'
import img_021 from './imgs/skills/img_021.png'
import img_022 from './imgs/skills/img_022.png'
import img_023 from './imgs/skills/img_023.png'
import img_024 from './imgs/skills/img_024.png'
import img_025 from './imgs/skills/img_025.png'
import img_026 from './imgs/skills/img_026.png'
import img_027 from './imgs/skills/img_027.png'
import img_028 from './imgs/skills/img_028.png'
import img_029 from './imgs/skills/img_029.png'

const languagesData = [
  {
    name: 'JavaScript',
    imgSrc: img_001,
    category: 'main',
  },
  {
    name: 'HTML',
    imgSrc: img_002,
    category: 'main',
  },
  {
    name: 'CSS',
    imgSrc: img_003,
    category: 'main',
  },
  {
    name: 'Python',
    imgSrc: img_004,
    category: 'main',
  },
  {
    name: 'C++',
    imgSrc: img_005,
    category: 'others',
  },
  {
    name: 'SQL',
    imgSrc: img_006,
    category: 'others',
  },
]

const frameworksAndLibrariesData = [
  {
    name: 'React',
    imgSrc: img_007,
    category: 'main',
  },
  {
    name: 'Vue',
    imgSrc: img_028,
    category: 'main',
  },
  {
    name: 'Redux',
    imgSrc: img_008,
    category: 'main',
  },
  {
    name: 'Node',
    imgSrc: img_009,
    category: 'main',
  },
  {
    name: 'Express',
    imgSrc: img_010,
    category: 'main',
  },
  {
    name: 'Tailwind CSS',
    imgSrc: img_029,
    category: 'main',
  },
  {
    name: 'AntDesign',
    imgSrc: img_011,
    category: 'main',
  },
]

const toolsData = [
  {
    name: 'Git',
    imgSrc: img_012,
    category: 'main',
  },
  {
    name: 'Github',
    imgSrc: img_013,
    category: 'main',
  },
  {
    name: 'VSCode',
    imgSrc: img_014,
    category: 'main',
  },
  {
    name: 'Vim',
    imgSrc: img_015,
    category: 'main',
  },
  {
    name: 'CLI',
    imgSrc: img_016,
    category: 'main',
  },
  {
    name: 'Heroku',
    imgSrc: img_017,
    category: 'main',
  },
  {
    name: 'JupyterLab',
    imgSrc: img_018,
    category: 'others',
  },
]

const gisToolsData = [
  {
    name: 'QGIS',
    imgSrc: img_019,
    category: 'main',
  },
  {
    name: 'ArcGIS',
    imgSrc: img_020,
    category: 'others',
  },
  {
    name: 'OSM',
    imgSrc: img_021,
    category: 'others',
  },
  {
    name: 'pandas',
    imgSrc: img_022,
    category: 'others',
  },
  {
    name: 'GeoPandas',
    imgSrc: img_023,
    category: 'others',
  },
  {
    name: 'GeoJSON',
    imgSrc: img_024,
    category: 'others',
  },
]

const databaseToolsData = [
  {
    name: 'MongoDB',
    imgSrc: img_025,
    category: 'main',
  },
  {
    name: 'Mongoose',
    imgSrc: img_026,
    category: 'main',
  },
  {
    name: 'Postgres',
    imgSrc: img_027,
    category: 'others',
  },
]

const skillsDivs = [
  {
    id: 'skills-languages',
    title: 'Languages',
    data: languagesData,
  },
  {
    id: 'skills-frameworks-and-libraries',
    title: 'Frameworks and Libraries',
    data: frameworksAndLibrariesData,
  },
  {
    id: 'skills-tools',
    title: 'Tools',
    data: toolsData,
  },
  {
    id: 'skills-gis-tools',
    title: 'GIS Tools',
    data: gisToolsData,
  },
  {
    id: 'skills-database-tools',
    title: 'Database Tools',
    data: databaseToolsData,
  },
]

const Skills = () => {

  return (
    <div>
      <div id='content-container'>
        <h2 id='content-title'>skills</h2>
        <div id='skills'>
          {skillsDivs.map((skillsDiv, i) =>
            <div id={skillsDiv.id} className='skills-div' key={i}>
              <h2>{skillsDiv.title}</h2>
              <div className='skills-div-items'>
                {skillsDiv.data.map((language, j) =>
                  <SkillsCard
                    key={j}
                    name={language.name}
                    imgSrc={language.imgSrc}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div >
  )
}

export default Skills