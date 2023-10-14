import { useMetaMask } from '~/hooks/useMetaMask'
import { formatAddress } from '~/utils'
import styles from './Navigation.module.css'
import { useNavigate } from 'react-router-dom'

export const Navigation = () => {

  const { wallet, hasProvider, isConnecting, connectMetaMask } = useMetaMask()
  const navigate = useNavigate();
  
  const handleNavigation = () => {
    navigate('/');
  };

  return (
    <div className={styles.navigation}>
      <div className={styles.flexContainer}>
        <div className={styles.leftNav} onClick={handleNavigation}>Pocket</div>
        <div className={styles.rightNav}>
          {!hasProvider &&
            <a href="https://metamask.io" target="_blank">
              Install MetaMask
            </a>
          }
          {window.ethereum?.isMetaMask && wallet.accounts.length < 1 &&
            <button disabled={isConnecting} onClick={connectMetaMask}>
              Connect MetaMask
            </button>
          }
          {hasProvider && wallet.accounts.length > 0 &&
            <a
              className="text_link tooltip-bottom"
              href={`https://etherscan.io/address/${wallet.accounts[0]}`} // Error corrected
              target="_blank"
              data-tooltip="Open in Block Explorer"
            >
              {formatAddress(wallet.accounts[0])}

            </a>
          }
        </div>
      </div>
    </div>
  )
}