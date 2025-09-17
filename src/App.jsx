import { TonConnectUIProvider } from '@tonconnect/ui-react';


function App() {

  return (
    <>
      <TonConnectUIProvider manifestUrl="https://<YOUR_APP_URL>/tonconnect-manifest.json">
            { /* Your app */ }
        </TonConnectUIProvider>
    </>
  )
}

export default App
