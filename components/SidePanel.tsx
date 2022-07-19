import styled from 'styled-components'
import Image from "next/image"

// // show instructions
// const showInstructions = () => {
//     instructionsContainer.classList.remove("hidden")
//   };
  
//   // hide instructions
//   const hideInstructions = () => {
//     instructionsContainer.classList.add("hidden")
//   };
//   //Event listeners for instructions
//   instructions.addEventListener("click", showInstructions)
//   hideInstructionsButton.addEventListener("click", hideInstructions)

const VolumeKnobPic = <Image
// '/' assumes you are in the public folder
src='/volume-knob.png'
alt='volume knob'
width={80}
height={80}
/>

const LogoPic = <Image
// '/' assumes you are in the public folder
src='/pocketbeatzlogo.png'
alt='pocketbeatz logo'
width={70}
height={70}
/>

const StyledSidePanel = styled.div`
   display: grid;
   grid-template-columns: 1fr;
//    align-items: center;

`
const VolumeKnobsDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.5rem;
    // margin-top: 2rem;
    padding-bottom: 3rem;

    @media (max-width: 700px) {
        align-items: center;
        // justify-content: center;
        position: static;
        margin-right: 1rem;
        width: 390px;
        height: 40rem;
        flex-direction: row;
        margin-top: 2rem;
      }
    
`
const LogoDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    // grid-template-columns: 1fr;
    // grid-gap: 1.5rem;
    // margin-top: 2rem;
    padding-bottom: 1.5rem;
    
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