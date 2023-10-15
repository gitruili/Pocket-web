import { useMetaMask } from '~/hooks/useMetaMask'
import { formatChainAsNum } from '~/utils'
import styles from './Display.module.css'
import { Link } from "react-router-dom"
import { IconsFlatInstagram1 } from '~/icons/IconsFlatInstagram1/IconsFlatInstagram1'
import cutepng from '~/assets/cute2.png'
import cutepng2 from '~/assets/cute3.png'
// import { IconsFlatInstagram1 } from "../../icons/IconsFlatInstagram1";

export const Display = () => {

  const { wallet } = useMetaMask()

  return (
    // <div className={styles.display}>
    //   {wallet.accounts.length > 0 &&
    //     <>
    //       <div>Wallet Accounts: {wallet.accounts[0]}</div>
    //       <div>Wallet Balance: {wallet.balance}</div>
    //       <div>Hex ChainId: {wallet.chainId}</div>
    //       <div>Numeric ChainId: {formatChainAsNum(wallet.chainId)}</div>
    //     </>
    //   }
    //   <Link to="/test">Go to testpage</Link>
    // </div>
    <div className={styles['frame']}>
      <div className={styles['overlap-wrapper']}>
        <div className={styles['overlap']}>
          <div className={styles['rectangle']} />
          <div className={styles['div']} />
          <div className={styles['rectangle-2']} />
          <div className={styles['rectangle-3']} />
          <div className={styles['text-wrapper']}>Get Your NFT Pocket</div>
          <p className={styles['p']}>Mint Your NFT By One Step</p>
          <p className={styles['text-wrapper-2']}>Manage your NFT in one pocket</p>
          <p className={styles['text-wrapper-3']}>Mint Your NFT By One Step</p>
          <p className={styles['text-wrapper-4']}>Manage your NFT in one pocket</p>
          {/* <div className={styles['group']}>
            <div className={styles['overlap-group']}>
              <div className={styles['text-wrapper-5']}>Connect Wallet</div>
            </div>
          </div> */}
          <img className={styles['img']} alt="Rectangle" src="https://c.animaapp.com/n6RxYxic/img/rectangle-1827-2@2x.png" />
          <img
            className={styles['rectangle-4']}
            alt="Rectangle"
            src="https://c.animaapp.com/n6RxYxic/img/rectangle-1827-1@2x.png"
          />
          <img
            className={styles['rectangle-5']}
            alt="Rectangle"
            src="https://c.animaapp.com/n6RxYxic/img/rectangle-1830@2x.png"
          />
          <img
            className={styles['rectangle-6']}
            alt="Rectangle"
            src="https://c.animaapp.com/n6RxYxic/img/rectangle-1828@2x.png"
          />
          <img
            className={styles['rectangle-7']}
            alt="Rectangle"
            src="https://c.animaapp.com/n6RxYxic/img/rectangle-1829@2x.png"
          />
          <img
            className={styles['rectangle-8']}
            alt="Rectangle"
            src="https://c.animaapp.com/n6RxYxic/img/rectangle-1827@2x.png"
          />
          <div className={styles['group-2']}>
            <div className={styles['overlap-2']}>
              <div className={styles['rectangle-9']} />
              <Link to="/test"><div className={styles['text-wrapper-6']}>Event Organizer</div></Link> 
            </div>
            <div className={styles['group-wrapper']}>
              <div className={styles['overlap-group-wrapper']}>
                <div className={styles['overlap-3']}>
                  <div className={styles['group-3']}>
                    <div className={styles['div-wrapper']}>
                      <div className={styles['overlap-4']}>
                        <div className={styles['group-4']}>
                          <div className={styles['overlap-5']}>
                          <img
                            className={styles['group-18-2']}
                            alt="Group"
                            src={cutepng2}
                          />
                            {/* <img
                              className={styles['group-5']}
                              alt="Group"
                              src="https://c.animaapp.com/n6RxYxic/img/group-1430103859@2x.png"
                            /> */}
                            {/* <div className={styles['group-6']}>
                              <div className={styles['group-7']}>
                                <div className={styles['overlap-group-2']}>
                                  <img
                                    className={styles['vector']}
                                    alt="Vector"
                                    src="https://c.animaapp.com/n6RxYxic/img/vector-14.svg"
                                  />
                                  <img
                                    className={styles['vector-2']}
                                    alt="Vector"
                                    src="https://c.animaapp.com/n6RxYxic/img/vector-13.svg"
                                  />
                                  <img
                                    className={styles['intersect']}
                                    alt="Intersect"
                                    src="https://c.animaapp.com/n6RxYxic/img/intersect-6.svg"
                                  />
                                  <img
                                    className={styles['subtract']}
                                    alt="Subtract"
                                    src="https://c.animaapp.com/n6RxYxic/img/subtract-1.svg"
                                  />
                                </div>
                              </div>
                            </div> */}
                            {/* <div className={styles['group-8']}>
                              <div className={styles['group-9']}>
                                <div className={styles['group-10']}>
                                  <div className={styles['overlap-group-3']}>
                                    <img
                                      className={styles['vector-3']}
                                      alt="Vector"
                                      src="https://c.animaapp.com/n6RxYxic/img/vector-12.svg"
                                    />
                                    <img
                                      className={styles['vector-4']}
                                      alt="Vector"
                                      src="https://c.animaapp.com/n6RxYxic/img/vector-11.svg"
                                    />
                                    <img
                                      className={styles['intersect-2']}
                                      alt="Intersect"
                                      src="https://c.animaapp.com/n6RxYxic/img/intersect-5.svg"
                                    />
                                    <img
                                      className={styles['subtract-2']}
                                      alt="Subtract"
                                      src="https://c.animaapp.com/n6RxYxic/img/subtract.svg"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div> */}
                            {/* <img
                              className={styles['group-11']}
                              alt="Group"
                              src="https://c.animaapp.com/n6RxYxic/img/group-1430103857@2x.png"
                            />
                            <img
                              className={styles['group-12']}
                              alt="Group"
                              src="https://c.animaapp.com/n6RxYxic/img/group-1430103858@2x.png"
                            /> */}
                          </div>
                        </div>
                        {/* <img
                          className={styles['group-13']}
                          alt="Group"
                          src="https://c.animaapp.com/n6RxYxic/img/group-1430104059@2x.png"
                        /> */}
                        {/* <img
                          className={styles['group-14']}
                          alt="Group"
                          src="https://c.animaapp.com/n6RxYxic/img/group-1430104062@2x.png"
                        /> */}
                      </div>
                    </div>
                  </div>
                  <div className={styles['group-15']}>
                    <div className={styles['overlap-6']}>
                      {/* <img className={styles['vector-5']} alt="Vector" src="https://c.animaapp.com/n6RxYxic/img/vector-10.svg" /> */}
                      {/* <img
                        className={styles['intersect-3']}
                        alt="Intersect"
                        src="https://c.animaapp.com/n6RxYxic/img/intersect-4.svg"
                      /> */}
                      {/* <img className={styles['vector-6']} alt="Vector" src="https://c.animaapp.com/n6RxYxic/img/vector-9.svg" />
                      <img className={styles['vector-7']} alt="Vector" src="https://c.animaapp.com/n6RxYxic/img/vector-8.svg" /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['group-16']}>
            <div className={styles['overlap-7']}>
              <div className={styles['rectangle-9']} />
              <Link to="/user"><div className={styles['text-wrapper-7']}>User</div></Link> 
              
            </div>
            <img className={styles['image']} alt="Image" src="https://c.animaapp.com/n6RxYxic/img/image-8@2x.png" />
          </div>
          {/* <div className={styles['text-wrapper-8']}>Mint NFT</div>
          <div className={styles['text-wrapper-9']}>About Us</div> */}
          <div className={styles['ellipse']} />
          <div className={styles['group-wrapper-2']}>
            <div className={styles['group-17']}>
              <img
                className={styles['group-18']}
                alt="Group"
                src={cutepng}
              />
            </div>
          </div>
          <div className={styles['div-2']}>
            <img className={styles['logos']} alt="Logos" src="https://c.animaapp.com/n6RxYxic/img/logos.svg" />
            <div className={styles['div-3']}>
              <img className={styles['img-3']} alt="Medium logo" src="https://c.animaapp.com/n6RxYxic/img/medium-logo.svg" />
              <img className={styles['img-3']} alt="Github logo" src="https://c.animaapp.com/n6RxYxic/img/github-logo.svg" />
              <img className={styles['img-3']} alt="Youtube logo" src="https://c.animaapp.com/n6RxYxic/img/youtube-logo.svg" />
              <IconsFlatInstagram1 className={styles['img-3']} color="#707076" />
              <img className={styles['img-3']} alt="Facebook logo" src="https://c.animaapp.com/n6RxYxic/img/facebook-logo.svg" />
            </div>
          </div>
          <div className={styles['div-4']}>
            <div className={styles['text-wrapper-10']}>简体中文</div>
            <div className={styles['icon-triangle']}>
              <img className={styles['polygon']} alt="Polygon" src="https://c.animaapp.com/n6RxYxic/img/polygon-1.svg" />
            </div>
          </div>
          <img className={styles['image-2']} alt="Image" src="https://c.animaapp.com/n6RxYxic/img/image-19@2x.png" />
          {/* <img className={styles['img-4']} alt="Frame" src="https://c.animaapp.com/n6RxYxic/img/frame.svg" />
          <div className={styles['text-wrapper-11']}>Pocket</div> */}
        </div>
      </div>
    </div>
  )
}