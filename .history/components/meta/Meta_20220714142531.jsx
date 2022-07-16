import Head from 'next/head'
import React from 'react'

export default function Meta ({ title }) {
  return (
    <div>
     <Head>
        <title>{ title }</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
  </div>
  )
}
