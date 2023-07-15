import * as React from 'react'
import { Scene, Storyboard } from 'utopia-api'
import { App } from '/src/app.js'
import { Card } from '/src/card.js'

export var storyboard = (
  <>
    <Storyboard>
      <Scene
        style={{
          position: 'absolute',
          left: 2,
          top: 32,
          width: 375,
          height: 759,
          display: 'flex',
          flexDirection: 'column',
        }}
        data-label='Beaches'
      >
        <App style={{}} />
      </Scene>
      <Scene
        style={{
          position: 'absolute',
          left: 450,
          top: 30,
          width: 375,
          height: 759,
          display: 'flex',
          flexDirection: 'column',
        }}
        data-label='Page 2'
      >
        <App style={{}} />
      </Scene>
    </Storyboard>
  </>
)
