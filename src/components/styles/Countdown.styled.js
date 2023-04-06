import styled from 'styled-components'

export const StyledCard = styled.div`
margin-inline: clamp(.5rem, 1vw, 1rem);

.card {
    position: relative;
    width: clamp(4rem, 19vw, 9rem);
    aspect-ratio: 1;
  margin-bottom: 1.4rem;
}

.top-of-card {
position: absolute;
background-color: hsl(236, 21%, 26%);;
height: 50%;
width: 100%;
top: 0;
border-radius: 7.5%;


&::after {
    position: absolute;
    content: '';
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: hsla(235, 16%, 14%, 25%);
    z-index: 2;
}
}

.bottom-of-card {
position: absolute;
bottom: 0;
height: 50%;
width: 100%;
background-color: hsl(236, 21%, 26%);
border-radius: 7.5%;
box-shadow:
  0px 9px 0px hsl(234, 17%, 12%); 

  &::after {
  content: '';
  position: absolute;
  z-index: 3;
  top: -8%;
  left: -4%;
  height: 15%;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: hsl(234, 17%, 12%);
}

&::before {
  content: '';
  position: absolute;
  z-index: 2;
  top: -8%;
  right: -4%;
  height: 15%;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: hsl(234, 17%, 12%);
} 

}

.num-container {
    position: absolute;
    z-index: 1;
    display: grid;
    place-content: center;
    height: 100%;
    width: 100%;
    color: hsl(345, 95%, 68%);
    font-size: clamp(2.25rem, 11vw, 5rem);
}

.text {
    letter-spacing: .36em;
    text-align: center;
    color: hsl(237, 18%, 59%);
    font-size: clamp(.65em, 2vw, .95rem);
}
`


