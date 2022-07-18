import { useState, useEffect } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import Drumpad from '../components/Drumpad'

type DrumObject = {
  [key: string]: string;
}

// sounds=drumTypes
const drumTypes: DrumObject[] = [
  {
    type: 'bass',
    sound: '/sounds/bass.wav',
    key: "Q"
  },
  {
    type: 'clap',
    sound: '/sounds/clap.wav',
    key: "A"
  },
  {
    type: 'clap2',
    sound: '/sounds/clap2.wav',
    key: "W"
  },
  {
    type: 'conga',
    sound: '/sounds/conga.wav',
    key: "S"
  },
  {
    type: 'cowbell',
    sound: '/sounds/cowbell.wav',
    key: "E"
  },
  {
    type: 'cymbal',
    sound: '/sounds/cymbal.wav',
    key: "D"
  },
  {
    type: 'drum',
    sound: '/sounds/drum.wav',
    key: "R"
  },
  {
    type: 'highcong',
    sound: '/sounds/highcong.wav',
    key: "F"
  },
  {
    type: 'highsound',
    sound: '/sounds/highsound.wav',
    key: "U"
  },
  {
    type: 'low-bass',
    sound: '/sounds/low-bass.wav',
    key: "J"
  },
  {
    type: 'lowcong',
    sound: '/sounds/lowcong.wav',
    key: "I"
  },
  {
    type: 'lowdrum',
    sound: '/sounds/lowdrum.wav',
    key: "K"
  },
  {
    type: 'lowerbass',
    sound: '/sounds/lowerbass.wav',
    key: "O"
  },
  {
    type: 'metalthing',
    sound: '/sounds/metalthing.wav',
    key: "L"
  },
  {
    type: 'morebass',
    sound: '/sounds/morebass.wav',
    key: "P"
  },
  {
    type: 'salt',
    sound: '/sounds/salt.wav',
    key: ";"
  }
]

const Wrapper = styled.div`
  min-height: 40vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const PadsWrapper = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 5px;
  
  @media (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
`

const Home: React.FC = () => {
  const [drums] = useState(drumTypes)

  // useEffect(() => {
  //   document.addEventListener("keydown", (e) => {
  //     if (e.key.toLowerCase() === drumTypes.key.toLowerCase()) {
  //       audio.play()
  //     }
  //   })
  // }, [])

  const handlePlayDrum = (sound: string): void => {
    const audio = new Audio(sound)
    audio.play()
  }

  return (
    <div>
      <Head>
        <title>PocketBeatz</title>
        <meta name="pocketbeatz" content="beatz for your pocket" />
        <link rel="icon" href="/pocketbeatzlogo.png" />
      </Head>

      <Wrapper>
        <PadsWrapper>
          {drums.map(drum => (
            <Drumpad 
              key={drum.type}
              drumType={drum.type}
              // letter={drum.key}
              onClick={() => handlePlayDrum(drum.sound)}
              onKeyDown={() => handlePlayDrum(drum.sound)}
            />
          ))}
        </PadsWrapper>
      </Wrapper>
    </div>
  )
}
export default Home