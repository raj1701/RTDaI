import React, { useState } from 'react'

import { Jutsu } from 'react-jutsu'

const App3 = () => {
  const [room, setRoom] = useState('')
  const [name, setName] = useState('')
  const [call, setCall] = useState(false)

  const [room1, setRoom1] = useState('')
  const [name1, setName1] = useState('')
  const [call1, setCall1] = useState(false)

  const [room2, setRoom2] = useState('')
  const [name2, setName2] = useState('')
  const [call2, setCall2] = useState(false)

  const [room3, setRoom3] = useState('')
  const [name3, setName3] = useState('')
  const [call3, setCall3] = useState(false)

  const [room4, setRoom4] = useState('')
  const [name4, setName4] = useState('')
  const [call4, setCall4] = useState(false)

  const [room5, setRoom5] = useState('')
  const [name5, setName5] = useState('')
  const [call5, setCall5] = useState(false)

  

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
              setName('swapy'),
              setCall(true)
          )}
      </div>
      <div>
        {call1 ? (<Jutsu
          roomName={room1}
          displayName={name1}
          onMeetingEnd={() => console.log('Meeting has ended')}
          loadingComponent={<p>ʕ •ᴥ•ʔ jitsi is loading ...</p>} />)
          : (
              setRoom1(localStorage.getItem('course')+"-1"),
              setName1('swapy'),
              setCall1(true)
          )}

        <small><i>Note: works only on a desktop browser for now, checkout <a href='https://github.com/jitsi/jitsi-meet/pull/3518'>this PR</a> for more information</i></small>
      </div>

      <div>
        {call2 ? (<Jutsu
          roomName={room2}
          displayName={name2}
          onMeetingEnd={() => console.log('Meeting has ended')}
          loadingComponent={<p>ʕ •ᴥ•ʔ jitsi is loading ...</p>} />)
          : (
              setRoom2(localStorage.getItem('course')+"-2"),
              setName2('swapy'),
              setCall2(true)
          )}

        <small><i>Note: works only on a desktop browser for now, checkout <a href='https://github.com/jitsi/jitsi-meet/pull/3518'>this PR</a> for more information</i></small>
      </div>

      <div>
        {call3 ? (<Jutsu
          roomName={room3}
          displayName={name3}
          onMeetingEnd={() => console.log('Meeting has ended')}
          loadingComponent={<p>ʕ •ᴥ•ʔ jitsi is loading ...</p>} />)
          : (
              setRoom3(localStorage.getItem('course')+"-3"),
              setName3('swapy'),
              setCall3(true)
          )}

        <small><i>Note: works only on a desktop browser for now, checkout <a href='https://github.com/jitsi/jitsi-meet/pull/3518'>this PR</a> for more information</i></small>
      </div>

      <div>
        {call4 ? (<Jutsu
          roomName={room4}
          displayName={name4}
          onMeetingEnd={() => console.log('Meeting has ended')}
          loadingComponent={<p>ʕ •ᴥ•ʔ jitsi is loading ...</p>} />)
          : (
              setRoom4(localStorage.getItem('course')+"-4"),
              setName4('swapy'),
              setCall4(true)
          )}

        <small><i>Note: works only on a desktop browser for now, checkout <a href='https://github.com/jitsi/jitsi-meet/pull/3518'>this PR</a> for more information</i></small>
      </div>
    </>
  )
}

export default App3
