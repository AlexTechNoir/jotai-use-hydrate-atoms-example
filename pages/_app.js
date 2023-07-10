import '@/styles/globals.css'
import { Provider } from 'jotai'
import { stringAtom } from '../store'
import { useHydrateAtoms } from 'jotai/utils'

import Layout from '../components/Layout'

export default function App({ Component, pageProps }) {

  const { initialState } = pageProps

  const HydrateAtoms = ({ stringAtom, initialState, children }) => {
    useHydrateAtoms(initialState ? [ stringAtom, initialState ] : [])
    return children
  }

  return (
    <Provider>
      <HydrateAtoms initialValues={initialState && [[ stringAtom, initialState ]]}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </HydrateAtoms>
    </Provider>
  )
}
