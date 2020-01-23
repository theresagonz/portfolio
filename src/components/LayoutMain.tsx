import * as React from 'react'
import styled from '@emotion/styled'
import { colors } from '../styles/variables'

const StyledLayoutMain = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: center;
`

const AnimatedGradient = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(120deg, ${colors.rainbow.yellow}, ${colors.rainbow.pink}, ${colors.rainbow.blue});
  background-size: 500% 500%;

  -webkit-animation: colorchange 30s ease infinite;
  -moz-animation: colorchange 30s ease infinite;
  animation: colorchange 30s ease infinite;

  @-webkit-keyframes colorchange {
    0% {
      background-position: 0% 91%;
    }
    50% {
      background-position: 100% 10%;
    }
    100% {
      background-position: 0% 91%;
    }
  }
  @-moz-keyframes colorchange {
    0% {
      background-position: 0% 91%;
    }
    50% {
      background-position: 100% 10%;
    }
    100% {
      background-position: 0% 91%;
    }
  }
  @keyframes colorchange {
    0% {
      background-position: 0% 91%;quer
    }
    50% {
      background-position: 100% 10%;
    }
    100% {
      background-position: 0% 91%;
    }
  }
`

interface LayoutMainProps {
  className?: string
}

const LayoutMain: React.FC<LayoutMainProps> = ({ children, className }) => (
  <AnimatedGradient>
    <StyledLayoutMain className={className}>{children}</StyledLayoutMain>
  </AnimatedGradient>
)

export default LayoutMain
