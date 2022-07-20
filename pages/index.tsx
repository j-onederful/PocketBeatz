import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import Drumpad from '../components/Drumpad'
import SidePanel from '../components/SidePanel'
import Image from "next/image"


type DrumObject = {
  [key: string]: string;
}

const drumTypes: DrumObject[] = [
  {
    type: 'bass',
    sound: '/sounds/bass.wav',
    key: "q"
  },
  {
    type: 'clap',
    sound: '/sounds/clap.wav',
    key: "a"
  },
  {
    type: 'clap2',
    sound: '/sounds/clap2.wav',
    key: "w"
  },
  {
    type: 'conga',
    sound: '/sounds/conga.wav',
    key: "s"
  },
  {
    type: 'cowbell',
    sound: '/sounds/cowbell.wav',
    key: "e"
  },
  {
    type: 'cymbal',
    sound: '/sounds/cymbal.wav',
    key: "d"
  },
  {
    type: 'drum',
    sound: '/sounds/drum.wav',
    key: "r"
  },
  {
    type: 'highcong',
    sound: '/sounds/highcong.wav',
    key: "f"
  },
  {
    type: 'highsound',
    sound: '/sounds/highsound.wav',
    key: "u"
  },
  {
    type: 'low-bass',
    sound: '/sounds/low-bass.wav',
    key: "j"
  },
  {
    type: 'lowcong',
    sound: '/sounds/lowcong.wav',
    key: "i"
  },
  {
    type: 'lowdrum',
    sound: '/sounds/lowdrum.wav',
    key: "k"
  },
  {
    type: 'lowerbass',
    sound: '/sounds/lowerbass.wav',
    key: "o"
  },
  {
    type: 'metalthing',
    sound: '/sounds/metalthing.wav',
    key: "l"
  },
  {
    type: 'morebass',
    sound: '/sounds/morebass.wav',
    key: "p"
  },
  {
    type: 'salt',
    sound: '/sounds/salt.wav',
    key: ";"
  }
]

const DrumMachine = styled.div`
  min-height: 40vh;
  width: 85vh;
  margin-top: 10rem;
  
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  background-color: #2C2929;
  border-radius: 10px;
  filter: drop-shadow(15px 15px 15px black);

  @media (max-width: 700px) {
    margin-left: 2rem;
    width: 390px;
    height: 45rem;
    margin-top: 6rem;
  }
`
const DrumPadsWrapper = styled.main`
  padding: 2rem 2rem;
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 5px;
  border-radius: 10px;
  
  @media (max-width: 700px) {
    position: fixed;
    padding-left: 1rem;
    padding-top: 1.5rem;
    align-self: start
  }
`
const SidePanelWrapper = styled.main`
  margin-left: 3rem;
  margin-bottom: 3rem;
  display: flex;
  border-radius: 10px;
  
  @media (max-width: 700px) {
    transform: rotate(90deg);
    width: 70%;
    padding-left: 2.1rem;
    z-index: 1;
    align-items: start;
    margin-right: 10rem;
    margin-bottom: 2rem;
  }
`
const LogoPic = <Image
// '/' assumes you are in the public folder
src='/pocketbeatzlogo.png'
alt='pocketbeatz logo'
width={70}
height={70}
/>

const MobileLogoDiv = styled.div`
  display: none;

  @media (max-width: 700px) {
    display: flex;
    position: fixed;
    justify-self: center;
    margin-bottom: 4rem;
    border-style: solid;
    border-color: red;
    border-radius: 50%;
  }
    
`
const Home: React.FC = () => {
  const [drums] = useState(drumTypes)

  // makes new audio to play sound of corresponding drumType
  const handlePlayDrum = (sound: string): void => {
    const audio = new Audio(sound)
    audio.play()
  }

  // plays sound for corresponding drumType when corresponding key is pressed on computer
  useEffect(() => {
    const keydownHandler = (e) => {
      console.log(e.key)
      // filters out which sound is connected with corresponding key that is pressed
      const keyIndex = drumTypes.filter(drumType => drumType.key === e.key)
      console.log(keyIndex)
      // accounts for if an unlinked key is pressed
      if (keyIndex.length > 0) {
        handlePlayDrum(keyIndex[0].sound)
      }
    }
    document.addEventListener("keydown", keydownHandler)
    return () => document.removeEventListener("keydown", keydownHandler) 
  }, [])

  return (
    <div>
      <Head>
        <title>PocketBeatz</title>
        <meta name="pocketbeatz" content="beatz for your pocket" />
        <link rel="icon" href="/pocketbeatzlogo.png" />
      </Head>

      <DrumMachine>
        <SidePanelWrapper>
          <SidePanel></SidePanel>
        </SidePanelWrapper>
        <DrumPadsWrapper>
          {drums.map(drum => (
            <Drumpad 
              key={drum.type}
              onClick={() => handlePlayDrum(drum.sound)}
            />
          ))}
        </DrumPadsWrapper>
        <MobileLogoDiv>
            {LogoPic}
        </MobileLogoDiv>
      </DrumMachine>
    </div>
  )
}
export default Home