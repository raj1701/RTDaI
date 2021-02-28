import React, { useState } from 'react'

import { Jutsu } from 'react-jutsu'

const App2 = () => {
  const [room, setRoom] = useState('')
  const [name, setName] = useState('')
  const [call, setCall] = useState(false)

  const [room2, setRoom2] = useState('')
  const [name2, setName2] = useState('')
  const [call2, setCall2] = useState(false)

  

  return (
    <>
      <div>
        
        {call ? (<Jutsu
          roomName={room}
          displayName={name}
          configOverwrite={{
            enableWelcomePage: true,
            enableClosePage: false,
            startAudioOnly: true
          }}
          interfaceConfigOverwrite={{
            SHOW_CHROME_EXTENSION_BANNER: false,
            SHOW_PROMOTIONAL_CLOSE_PAGE: false,
          }}
          onMeetingEnd={() => console.log('Meeting has ended')}
          loadingComponent={<p>ʕ •ᴥ•ʔ jitsi is loading ...</p>} />)
          : (

              setRoom(localStorage.getItem('course')),
              setName(localStorage.getItem('email')),
              setCall(true)
          )}
      </div>
      <div>
        {call2 ? (<Jutsu
          roomName={room2}
          displayName={name2}
          onMeetingEnd={() => console.log('Meeting has ended')}
          loadingComponent={<p>ʕ •ᴥ•ʔ jitsi is loading ...</p>} />)
          : (
              setRoom2(localStorage.getItem('course')+"-"+localStorage.getItem('bench')),
              setName2(localStorage.getItem('email')),
              setCall2(true)
          )}

        <small><i>Note: works only on a desktop browser for now, checkout <a href='https://github.com/jitsi/jitsi-meet/pull/3518'>this PR</a> for more information</i></small>
      </div>
    </>
  )
}

export default App2