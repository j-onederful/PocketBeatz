import { useState } from 'react'
import Head from 'next/head'
import styled from 'styled-components'

type DrumObject = {
  [kery: string]: string
}

const sounds: DrumObject[] = [
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

export default function Home() {
  return (
    <div>
      <Head>
        <title>PocketBeatz</title>
        <meta name="pocketbeatz" content="beatz for your pocket" />
        <link rel="icon" href="/pocketbeatzlogo.png" />
      </Head>

      <h1>app</h1>
    </div>
  )
}
