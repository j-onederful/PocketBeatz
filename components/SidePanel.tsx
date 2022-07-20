import styled from 'styled-components'
import Image from "next/image"

const VolumeKnobPic = <Image
src='/volume-knob.png'
alt='volume knob'
width={80}
height={80}
/>

const LogoPic = <Image
src='/pocketbeatzlogo.png'
alt='pocketbeatz logo'
width={70}
height={70}
/>

const StyledSidePanel = styled.div`
   display: grid;
   grid-template-columns: 1fr;
`
const VolumeKnobsDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.5rem;
    padding-bottom: 3rem;

    @media (max-width: 700px) {
        margin-right: 3rem;
        margin-bottom: 2rem;
        transform: scale(1.2);
        grid-gap: 10px;
      }
    
`
const LogoDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 1.5rem;

    @media (max-width: 700px) {
        display: none
      }
    
`

const SidePanel: React.FC = () => (
    <StyledSidePanel>
        
        <VolumeKnobsDiv>
            {VolumeKnobPic}
            {VolumeKnobPic}
        </VolumeKnobsDiv>

        <VolumeKnobsDiv>
            {VolumeKnobPic}
            {VolumeKnobPic}
        </VolumeKnobsDiv>

        <VolumeKnobsDiv>
            {VolumeKnobPic}
            {VolumeKnobPic}
        </VolumeKnobsDiv>

        <LogoDiv>
            {LogoPic}
        </LogoDiv>
    </StyledSidePanel>
)
export default SidePanel