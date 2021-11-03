import clsx from 'clsx'
import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import VerysSVG from '../assets/images/svg/verys.svg'
import EvisionsSVG from '../assets/images/svg/evisions.svg'
import JsqSVG from '../assets/images/svg/jsq.svg'
import { breakpoints } from '../styles/theme'

const ExpedienceStyles = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  padding: 0px 25px;
  margin: 50px auto;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  ${props => props.theme.breakpoints.up('md')} {
    margin: 100px auto;
    padding: 0;
  }
  ${props => props.theme.breakpoints.up('lg')} {
    max-width: 1100px;
  }
`

const ExperienceHeaderStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  ul {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    list-style-type: none;
    ${props => props.theme.breakpoints.up('md')} {
      justify-content: normal;
    }
    li {
      height: 24px;
      width: 25%;
      text-align: center;
      cursor: pointer;
      background-color: ${props => props.theme.palette.primary.contrast};
      padding: 10px;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
      color: ${props => props.theme.palette.text.dark};
      &:not(:last-child) {
        margin-right: 5px;
      }
      &.active {
        color: ${props => props.theme.palette.text.primary};
        background-color: ${props => props.theme.palette.primary.main};
      }
      :hover {
        span {
          position: relative;
          bottom: 5px;
        }
      }
      ${props => props.theme.breakpoints.up('md')} {
        width: 150px;
      }
    }
  }
  ${props => props.theme.breakpoints.up('md')} {
    grid-template-columns: 1fr auto;
  }
`

const Title = styled.h1`
  display: none;
  padding: 15px;
  ${props => props.theme.breakpoints.up('md')} {
    display: block;
  }
`

const MobileTitle = styled.h1`
  margin-bottom: 20px;
  display: block;
  text-align: center;
  ${props => props.theme.breakpoints.up('md')} {
    display: none;
  }
`

const ExperienceContent = styled.div`
  background-color: ${props => props.theme.palette.primary.main};
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-top-right-radius: 0;
  ${props => props.theme.breakpoints.up('sm')} {
    padding: 30px;
  }
  ${props => props.theme.breakpoints.up('md')} {
    border-top-right-radius: 15px;
  }
`

const TabContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  min-height: 400px;
  a {
    b {
      color: ${props => props.theme.palette.primary.contrast};
    }
  }
  ul {
    list-style-type: none;
    padding: 0;
    li {
      position: relative;
      padding-left: 15px;
      &:before {
        content: '▹';
        position: absolute;
        left: 0px;
      }
      margin-bottom: 15px;
    }
  }
  h2 {
    margin-bottom: 10px;
  }
  h3 {
    color: ${props => props.theme.palette.primary.contrast};
  }
  b {
    color: ${props => props.theme.palette.primary.dark};
    :hover {
      opacity: 0.7;
    }
  }
  svg,
  img {
    width: 100px;
    padding-top: 15px;
    justify-self: center;
    ${props => props.theme.breakpoints.up('md')} {
      justify-self: auto;
    }
  }
  ${props => props.theme.breakpoints.up('md')} {
    grid-template-columns: auto 1fr;
  }
`

const JsqTab: React.FC = () => (
  <TabContainer>
    <JsqSVG />
    <div>
      <h2>
        Senior Software Engineer @{' '}
        <a target="_blank" rel="noreferrer" href="https://junipersquare.com">
          <b>Juniper Square</b>
        </a>
      </h2>
      <h3>July 2021 - Present</h3>
      <ul>
        <li>
          Juniper Square&apos;s mission is to mission is to make the world’s
          private capital markets more efficient, transparent, and accessible.
        </li>
        <li>Extended the JSQ Outlook add-in to enable meeting integration.</li>
        <li>
          Build reusable and extendable React components, contributing to the
          design system.
        </li>
        <li>
          Worked with various technologies including React, TypeScript, Apollo
          GraphQL, Styled-Components, React Testing Library, and AWS.
        </li>
        <li>
          Collaborated and communicated with multi-disciplinary teams of
          engineers, designers, producers on a daily basis.
        </li>
      </ul>
    </div>
  </TabContainer>
)

const VerysTab: React.FC = () => (
  <TabContainer>
    <VerysSVG />
    <div>
      <h2>
        Senior Software Engineer @{' '}
        <a target="_blank" rel="noreferrer" href="https://verys.com">
          <b>Verys</b>
        </a>
      </h2>
      <h3>July 2016 - June 2021</h3>
      <ul>
        <li>
          Crafted digital marketing experiences, UI’s for user generated
          content, and store web UI’s for the{' '}
          <a target="_blank" rel="noreferrer" href="https://bethesda.net">
            <b>Bethesda.net</b>
          </a>{' '}
          digital platform and gaming brands such as Fallout, Elder Scrolls,
          DOOM, and Wolfenstein.
        </li>
        <li>
          Engineered React web apps and reusable component libraries to serve
          5,000,000+ monthly users in 12 different languages.
        </li>
        <li>
          Worked with various technologies including React, RiotJS, TypeScript,
          Apollo GraphQL, Redux, Styled-Components, NodeJS, Koa, Webpack,
          Puppeteer, Jest, AWS, and SQL and NoSQL databases.
        </li>
        <li>
          Mentored and trained other team members on design techniques and
          coding standards.
        </li>
        <li>
          Collaborated and communicated with multi-disciplinary teams of
          engineers, designers, producers on a daily basis.
        </li>
      </ul>
    </div>
  </TabContainer>
)
const EvisionsTab: React.FC = () => (
  <TabContainer>
    <EvisionsSVG />
    <div>
      <h2>
        Software Support Analyst @{' '}
        <a target="_blank" rel="noreferrer" href="https://evisions.com">
          <b>Evisions</b>
        </a>
      </h2>
      <h3>Sept 2013 - Feb 2016</h3>
      <ul>
        <li>
          Attained an expert level in assisting over 800 Higher Education
          Institutions with the Evisions Software Suite. Clients ranged from end
          users to product managers and database administrators.
        </li>
        <li>
          Programmed software solutions that interacted with Ellucian Banner
          Database to retrieve customized data and created templates in Oracle
          Pro*C.
        </li>
        <li>
          Retained 99% client satisfaction as well as renewal rates and led live
          monthly training sessions for new clients to familiarize them with our
          software.
        </li>
        <li>
          Led internal product support meetings, wrote internal training
          documents and over thirty public knowledge articles. Created reports
          of bugs through Atlassian JIRA software and communicated with software
          engineers to resolve them.
        </li>
      </ul>
    </div>
  </TabContainer>
)
const IRWDTab: React.FC = () => (
  <TabContainer>
    <img src="/irwd.png" alt="IRWD Logo" />
    <div>
      <h2>
        Water Quality Scientist @{' '}
        <a target="_blank" rel="noreferrer" href="https://irwd.com">
          <b>Irvine Ranch Water District</b>
        </a>
      </h2>
      <h3>2012 - 2013</h3>
      <ul>
        <li>
          Analyzed water samples and worked with both the Chemistry and
          Microbiology department to investigate issues with water quality.
        </li>
        <li>
          Ran quality control on experiments and safely prepared chemical
          reagents, dilutions, and growth mediums.
        </li>
        <li>
          Prepared samples for testing according to SOPs using proper aseptic
          technique.
        </li>
      </ul>
    </div>
  </TabContainer>
)

const companyMap = [
  {
    name: 'Juniper Square',
    mobileName: 'JSQ',
    component: <JsqTab />,
  },
  {
    name: 'Verys',
    mobileName: 'Verys',
    component: <VerysTab />,
  },
  {
    name: 'Evisions',
    mobileName: 'Evisions',
    component: <EvisionsTab />,
  },
  {
    name: 'IRWD',
    mobileName: 'IRWD',
    component: <IRWDTab />,
  },
]

const Experience: React.FC = () => {
  const [tab, setTab] = useState(0)
  // Doesn't resize with a window resize but that's fine, could add a listener.
  const isMobile = window.innerWidth < breakpoints.md
  const tabHeaders = useMemo(
    () =>
      companyMap.map((company, index) => (
        <li
          key={company.name}
          className={clsx(tab === index && 'active')}
          onClick={() => setTab(index)}
        >
          <span>{isMobile ? company.mobileName : company.name}</span>
        </li>
      )),
    [companyMap, tab, isMobile]
  )

  return (
    <ExpedienceStyles id="experience">
      <MobileTitle>Experience</MobileTitle>
      <ExperienceHeaderStyles>
        <ul>{tabHeaders}</ul>
        <Title>Experience</Title>
      </ExperienceHeaderStyles>
      <ExperienceContent>{companyMap[tab].component}</ExperienceContent>
    </ExpedienceStyles>
  )
}

export default Experience
