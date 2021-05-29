import React from 'react'

const SkillsCard = (props) => {
  const {
    name,
    imgSrc,
  } = props

  return (
    <div className='skills-card'>
      <img src={imgSrc} alt='' />
      <span>{name}</span>
    </div>
  )
}

export default SkillsCard