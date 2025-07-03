

import {useConnect} from 'wagmi'

const Wallet = () => {

    const { connectors, connect } = useConnect()
    console.log('connectors:', connectors)
  return (
    <div> {
        connectors.map((connector) => (
      <button key={connector.uid} onClick={() => connect({ connector })}>
      {connector.name}
      </button>
    ))}
    </div>
  )
}

export default Wallet