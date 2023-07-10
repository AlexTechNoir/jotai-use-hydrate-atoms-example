import { useEffect } from 'react'

export default function Layout({ children }) {

  useEffect(() => {
    console.log('useEffect in Layout component just laucnhed. It should not launch on route change, only on Layout\'s mount')
  },[])

  return (
    <>
      <div style={{ padding: '1em', fontFamily: 'Roboto, sans-serif', width: '1000px', lineHeight: 1.5 }}>
        This is a reproduction example for Jotai's useHydrationAtoms. This app has global Layout component, that has useEffect. With empty arr of deps, useEffect should launch only on Layout's mount, but because of useHydrationAtoms, Layout remounts on every route change, causing useEffect to relaunch as well. To see it, open console and click on links
      </div>
      {children}
    </>
  )
}
