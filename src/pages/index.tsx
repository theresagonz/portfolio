import * as React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import githubIcon from '../images/github-11-64.png'
import linkedinIcon from '../images/linkedin-4-64.png'

import Page from '../components/Page'
import IndexLayout from '../layouts'
// import '../styles/index'

const FlexRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 100px;
`

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <div className="centerpiece-text">
        <h1 className="nameDisplay">Theresa Morelli</h1>
        <FlexRow className="social-media-container">
          <a href="https://github.com/theresamorelli" target="_blank">
            <img src={githubIcon} />
          </a>
          <a href="https://www.linkedin.com/in/theresa-morelli/" target="_blank">
            <img src={linkedinIcon} />
          </a>
        </FlexRow>
        {/* <Link to="/page-2/">Go to page 2</Link> */}
      </div>
    </Page>
  </IndexLayout>
)

export default IndexPage
