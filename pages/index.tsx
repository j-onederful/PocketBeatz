import React, { useState, useEffect } from 'react'
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

// TODO - finish styling mobile
const Wrapper = styled.div`
  min-height: 40vh;
  width: 90vh;
  // padding: 0 0.5rem;
  margin-top: 10rem;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  background-color: gray;
  border-radius: 10px;
  filter: drop-shadow(10px 10px 10px black);

  @media (max-width: 700px) {
    align-items: center;
    position: static;
    // margin-left: 55px;
    width: 380px;
    height: 40rem;
    flex-direction: row
    margin-bottom: 10rem;
  }
`
// TODO - finish styling mobile
const PadsWrapper = styled.main`
  padding: 2rem 2rem;
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 5px;
  
  @media (max-width: 700px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    position: fixed;
    padding: 0;
  }
`

const Home: React.FC = () => {
  const [drums] = useState(drumTypes)

  
  const handlePlayDrum = (sound: string): void => {
    const audio = new Audio(sound)
    audio.play()
  }

  useEffect(() => {
    const keydown = (key: string): void => document.addEventListener("keydown", (e) => {
      if (e.key === key) {
        handlePlayDrum(e.key)
      }
    })
  }, [])
 // function that logs which key is pressed
  // const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
  //   event.preventDefault()
  //   console.log(event.key)
  //   console.log(event.target.value)
  // }

 // try 2 for function that logs which key is pressed
  // const handleKeyDown = () => {
  // const logKey = (e: React.KeyboardEvent): void => {
  //   console.log(e.key)
  // }
  // }

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
              // drumType={drum.type}
              letter={drum.key}
              onClick={() => handlePlayDrum(drum.sound)}
              onKeyDown{() => keydown()}
              // TODO - get this shit workin
              // onKeyDown={logKey}
            />
          ))}
        </PadsWrapper>
      </Wrapper>
    </div>
  )
}
export default Home