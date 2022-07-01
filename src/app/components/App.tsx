import * as React from 'react'
import * as fs from 'fs'

export default function App() {

  const componentIsMounted = React.useRef(true)

  React.useEffect(() => {

    const cb = (event: any, args: any) => {
      try {
        if (componentIsMounted.current) {
          console.log("args: ", args)
        }
      } catch (err) {
        console.log("err: ", err)
      }
    }

    return () => { // clean-up function
    }
  }, [])

  let ip_01: IInfopiece = {
    id: 0,
    infotext: "Today has been raining. It's June ...." ,
  }

  const sendMsgToDbFunct = () => {
    window.api.send("insert-infopiece-intodb", ip_01)
  }

  return (
    <div className='container'>
      <h1 className='heading'>
          Hello World!
      </h1>

      <button onClick={() => sendMsgToDbFunct()}>SendToDb</button>

    </div>
  );
}
