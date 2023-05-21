import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head';

const Profile = () => {
    const router = useRouter() ;
    const { username } = router.query ;

  return (

    <div>
        <Head>
            <title>Hello {username} !!</title>
        </Head>
       <p> Hello {username} !!</p>
    </div>
  )
}

export default Profile