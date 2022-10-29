import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
// import { graphql } from 'gatsby'
import ExpTitle from '../components/resume/ExpTitle'
import WorkExp from '../components/resume/WorkExp'
import EduExp from '../components/resume/EduExp'
// import PdfBtn from '../components/resume/PdfBtn'
import Profile from '../components/resume/Profile'
import { media } from '../utils/media'

const CommonStyle = createGlobalStyle`
body{
  background:#fff;
  font-family:"Microsoft Yahei", "Helvetica";
}
p{
  color:#666;
}
h3{
  margin-bottom:0 !important;
}
h4{
  margin-top:0;
}
`
const Container = styled.div`
  padding: 2rem;
  margin: 2rem auto;
  /* border: 1px solid #999; */
  /* border-radius: 0.6rem; */
  box-shadow: 7px 5px 20px 0px #101010;
  max-width: 100%;
  @media ${media.tablet} {
    max-width: 90%;
  }
  @media ${media.desktop} {
    max-width: 76%;
  }
  @media print {
    margin: 0;
    max-width: 100%;
    box-shadow: none;
    break-before: always;
    break-inside: avoid;
  }
  .skills {
    display: flex;
    flex-wrap: wrap;
    .skill {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-right: 0.6rem;
      margin-bottom: 0;
      /* border: 1px solid #eee; */
      padding: 0.3rem;
      h3 {
        margin: 0.2rem 0;
        margin-bottom: 0.5rem !important;
        color: #666;
        padding-bottom: 0.2rem;
        border-bottom: 1px solid #eee;
        /* text-transform: none; */
      }
      em,
      p {
        font-size: 0.8rem;
        margin-bottom: 0;
        margin-top: 0;
      }
      em {
        font-style: normal;
        font-weight: 800;
        color: #000;
      }
      p {
        margin-bottom: 0.2rem;
        padding-bottom: 0;
        white-space: pre;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .social {
    display: flex;
    .ico {
      flex: 1;
    }
  }
`
class ResumeEn extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const profile = {
      name: 'Dark Soul',
      info: {
        title: 'I like anime "love is war"',
        basic: 'He / Him',
        github: 'https://github.com/zerosoul',
      
      }
    }

    return (
      <>
        <CommonStyle />
        <Container>
          <Profile {...profile} en={true} />
          <ExpTitle title="SKILLS" />
          <section className="skills">
            <div className="skill">
              <h3>Languages</h3>
              <em>Javascript</em>
              <p>Node.js/</p>
              <p>HTML | CSS </p>
            </div>
            
          </section>
          <ExpTitle title="EDUCATION" />
          <EduExp {...edu} />
          <ExpTitle title="WORKING EXPERIENCE" />
          {jobs.map((job) => (
            <WorkExp key={job.title} {...job} />
          ))}
          <ExpTitle title="PROJECT EXPERIENCE" />
          {projects.map((project) => (
            <WorkExp key={project.title} {...project} />
          ))}

          <ExpTitle title="ADDITIONAL INFORMATION" />
          <WorkExp
            duties={[
              'Pass in English reading and writing, weak in listening and speaking',
              'Liking to create, UX and logic, preferring simplicity and aesthetics.',
              `Author of <em>Chinese Color (Github Star:1.6k+)</em>: <a target="_blank" href="http://colors.ichuantong.cn/">colors.ichuantong.cn</a> and <em>rc-bullets (Github Star:400+)</em>: <a target="_blank" href="https://github.com/zerosoul/rc-bullets">github.com/zerosoul/rc-bullets</a>, more works: <a target="_blank" href="https://works.yangerxiao.com">works.yangerxiao.com</a>`,
              'Rode long distance (2345km+/single person a month), from Guiyang, Guizhou to Liaocheng, Shandong, half of China: <em>probably the longest single person ride in writing code, and the best in writing code among cyclists.</em>'
            ]}
          />
        </Container>
        {/* <PdfBtn /> */}
      </>
    )
  }
}

export default ResumeEn


export function Head() {
  return (
    <>
      <title>About Dark Soul</title>
      <meta name="description" content={"About Dark Soul"} />
    </>
  )
}
