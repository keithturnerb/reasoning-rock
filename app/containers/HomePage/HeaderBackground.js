import styled from 'styled-components'
import img from '../../images/Wavergrower_dots.jpg'

const HeaderBackground = styled.div`
  background-image: radial-gradient(
      farthest-corner at 125% 31%,
      #00000033 12%,
      #00000077 54%,
      #000000aa 62%,
      #000000ff 63%,
      #ccaa00ff 63%,
      #ccaa00cc 64%,
      #ccaa0066 67%,
      #00000044 69%,
      #00000077 72%,
      #000000aa 76%,
      #000000cc 81%,
      #000000ff 89%
    ),
    linear-gradient(
      to top left,
      #000000ff 11%,
      #000000aa 16%,
      #00000033 30%,
      #00000011 90%
    ),
    url(${img});

  background-repeat: no-repeat;
  background-size: cover;
  background-color: black;
  width: 100%;
  height: 55vw;
  max-height: 600px;
  min-height: 400px;
  padding: 1em 0;
  border-radius: 1px;
`

export default HeaderBackground
