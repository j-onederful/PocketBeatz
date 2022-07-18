import { useState } from 'react'
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
    sound: '/sounds/bass.wav'
  },
  {
    type: 'clap',
    sound: '/sounds/clap.wav'
  },
  {
    type: 'clap2',
    sound: '/sounds/clap2.wav'
  },
  {
    type: 'conga',
    sound: '/sounds/conga.wav'
  },
  {
    type: 'cowbell',
    sound: '/sounds/cowbell.wav'
  },
  {
    type: 'cymbal',
    sound: '/sounds/cymbal.wav'
  },
  {
    type: 'drum',
    sound: '/sounds/drum.wav'
  },
  {
    type: 'highcong',
    sound: '/sounds/highcong.wav'
  },
  {
    type: 'highsound',
    sound: '/sounds/highsound.wav'
  },
  {
    type: 'low-bass',
    sound: '/sounds/low-bass.wav'
  },
  {
    type: 'lowcong',
    sound: '/sounds/lowcong.wav'
  },
  {
    type: 'lowdrum',
    sound: '/sounds/lowdrum.wav'
  },
  {
    type: 'lowerbass',
    sound: '/sounds/lowerbass.wav'
  },
  {
    type: 'metalthing',
    sound: '/sounds/metalthing.wav'
  },
  {
    type: 'morebass',
    sound: '/sounds/morebass.wav'
  },
  {
    type: 'salt',
    sound: '/sounds/salt.wav'
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
              onClick={() => handlePlayDrum(drum.sound)}
            />
          ))}
        </PadsWrapper>
      </Wrapper>
    </div>
  )
}
export default Home