import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Grid, Hidden } from "@mui/material";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import clsx from "clsx";
import "pure-react-carousel/dist/react-carousel.es.css";
// reactstrap components
import style from "../styles/Home.module.css";
import { ClassNames } from "@emotion/react";
import Script from 'next/script';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [enterPage, setEnterPage] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [audio, setAudio] = useState(false);

  useEffect(() => {
    setAudio(new Audio("/images/song.mp3"));
    setTimeout(() => setLoading(false), 3000);
  }, []);

  const playPause = (v) => {
    // Get state of song
    if (v == "play") {
      // Play the song if it is paused
      audio.play();
      audio.loop = true;
      setPlaying(true);
    } else {
      // Pause the song if it is playing
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta charset="UTF-8"></meta>
        <title>Scooter Bitch</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      </Head>


      <main className={style.mainCnt}>
        {!loading && (
          <img
            src="/images/logo.png"
            className={clsx({
              [style.logo]: !enterPage,
              [style.logoEnter]: enterPage,
            })}
          />
        )}
        {loading ? (
          <div className={style.loadingCnt}>
            <video
              autoplay="autoplay"
              muted="muted"
              loop="loop"
              playsinline="playsinline"
              preload="metadata"
              data-aos="fade-up"
              ondblclick="toggleFullScreen()"
              id="video"
              className="video"
              src="/images/loadingBitch.mp4"
            ></video>
          </div>
        ) : (
          <>
            <Script
              strategy="afterInteractive"
              src="https://code.jquery.com/jquery-3.6.0.js"
              onLoad={() => console.log("jQuery is Loaded...")}
            />
            <Script
              strategy="afterInteractive"
              src="https://unpkg.com/web3@latest/dist/web3.min.js"
              onLoad={() => console.log("WEB3.js is Loaded...")}
            />
            <Script
              strategy="afterInteractive"
              src="https://unpkg.com/web3modal"
              onLoad={() => console.log("WEB3Modal is Loaded...")}
            />

            <Script
              strategy="afterInteractive"
              src="https://unpkg.com/@walletconnect/web3-provider"
              onLoad={() => console.log("WEB3Provider is Loaded...")}
            />
            <div
              className={clsx({
                [style.awak]: !enterPage,
                [style.awaked]: enterPage,
              })}
            >
              <img src="/images/mainBg.jpg" className={style.bgImg} />
              <button
                className={clsx({
                  [style.enterBtnLoading]: !enterPage,
                  [style.enterBtn]: enterPage,
                })}
                onClick={() => {
                  playPause("play");
                  setEnterPage(true);
                }}
              >
                ENTER BITCHES
              </button>
              <button
                id="mint_btn"
                style={{'display':'none'}}
                className={clsx({
                  [style.mintBtnLoading]: !enterPage,
                  [style.mintBtn]: enterPage,
                })}
              >
                MINT HERE BITCHES
              </button>

              {enterPage && (
                <>

                  <Script
                    src="/js/integration.js"
                    strategy="lazyOnload"
                    onLoad={() => console.log("integration.js is Loaded...")}
                  />
                  <div className={style.navbarIcons}>
                    <div
                      style={{
                        width: 80,
                        height: 80,
                        display: "flex",
                        alignItems: "center",
                        borderRadius: 50,
                        backgroundColor: "#c9f5d5",
                        border: "5px solid",
                        zIndex: 10,
                      }}
                    >
                      <a href="https://twitter.com/BBscooterNFT?t=jh_3C55aLUYC-knxNY7iXA&s=09">
                        <img
                          width="100%"
                          style={{ zIndex: 100 }}
                          src="/images/Twitter.png"
                        />
                      </a>
                    </div>
                    <div style={{ zIndex: 10, margin: "0 10px" }}>
                      <a href="https://discord.gg/scootergang">
                        <img
                          style={{ borderRadius: 50 }}
                          className={style.navbarImg}
                          src="/images/Opensea.jpeg"
                        />
                      </a>
                    </div>
                    <div style={{ zIndex: 111 }}>
                      {playing ? (
                        <span
                          onClick={() => {
                            playPause("pause");
                          }}
                        >
                          <img
                            id="Volume"
                            className={style.navbarImg}
                            src="/images/play.png"
                          />
                        </span>
                      ) : (
                        <span
                          onClick={() => {
                            playPause("play");
                          }}
                        >
                          <img
                            id="Muted"
                            className={style.navbarImg}
                            src="/images/pause.png"
                          />
                        </span>
                      )}
                    </div>
                  </div>
                  <div className={style.mainContent} id="Site-Container">
                    <div className={style.mainContentCnt}>
                      <main id="Mintery">
                        <div id="Actions">
                          <div className="note">
                            <header>
                              <p className={style.actionsNote}>
                                <strong style={{ color: "#e65100" }}>
                                  1st 1000 FREE MINT
                                </strong>{" "}
                                and The Rest You mint or we will bitch slap you!
                              </p>
                            </header>
                            <img
                              className="divide"
                              src="/images/GT-phone-header-border.png"
                            />
                            <main>
                              {/* <img src="/images/mint.jpeg" width="100px" /> */}
                              <p className={style.actionsNote}>
                                No hype no bs no roadmap All CCO just all
                                bitches n scooters.
                              </p>
                            </main>
                            <img
                              className="divide"
                              src="/images/GT-phone-header-border.png"
                            />
                            <footer>
                              <p className={style.actionsNote}>
                                Mint on Eth and get a free airdrop on SOL.
                                Ohhhhh and if u mint you mgt just get a scooter
                                bitch!
                              </p>
                            </footer>
                            <div id="Follow">
                              <span>#bitchfollowbitch</span>
                            </div>
                          </div>
                        </div>
                      </main>
                      <aside id="MobileSide">
                        <header>
                          <div className="avatars">
                            <div className="garf">
                              <div className="pfp">
                                <div className="bitches">
                                  <video
                                    autoplay="autoplay"
                                    muted="muted"
                                    loop="loop"
                                    playsinline="playsinline"
                                    preload="metadata"
                                    data-aos="fade-up"
                                    ondblclick="toggleFullScreen()"
                                    id="video"
                                    className="video"
                                    src="/images/chat1.mp4"
                                    width="30px"
                                  ></video>
                                  <div className="bitches__head"></div>
                                </div>
                              </div>
                            </div>
                            <div className="urki">
                              <div className="pfp">
                                <div className="bitches">
                                  <video
                                    autoplay="autoplay"
                                    muted="muted"
                                    loop="loop"
                                    playsinline="playsinline"
                                    preload="metadata"
                                    data-aos="fade-up"
                                    ondblclick="toggleFullScreen()"
                                    id="video"
                                    className="video"
                                    src="/images/chat5.mp4"
                                    width="30px"
                                  ></video>
                                  <div className="bitches__head"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h2>Bitches N Scooters</h2>
                        </header>
                        <main>
                          <div className="container">
                            <div className="message garf">
                              <div className="pfp">
                                <video
                                  autoplay="autoplay"
                                  muted="muted"
                                  loop="loop"
                                  playsinline="playsinline"
                                  preload="metadata"
                                  data-aos="fade-up"
                                  ondblclick="toggleFullScreen()"
                                  id="video"
                                  className="video2"
                                  src="/images/chat2.mp4"
                                  width="50px"
                                ></video>
                              </div>
                              <div className="content loud">
                                <div className="bitches__name">Bitches</div>
                                <p>BitchSlap!</p>
                              </div>
                            </div>
                            <div className="message urki">
                              <div className="pfp">
                                <video
                                  autoplay="autoplay"
                                  muted="muted"
                                  loop="loop"
                                  playsinline="playsinline"
                                  preload="metadata"
                                  data-aos="fade-up"
                                  ondblclick="toggleFullScreen()"
                                  id="video"
                                  className="video2"
                                  src="/images/chat2.mp4"
                                  width="50px"
                                ></video>
                              </div>
                              <div className="content">
                                <div className="bitches__name">bitches</div>
                                <p>BitchSlap?</p>
                              </div>
                            </div>
                            <div className="message garf">
                              <div className="pfp">
                                <video
                                  autoplay="autoplay"
                                  muted="muted"
                                  loop="loop"
                                  playsinline="playsinline"
                                  preload="metadata"
                                  data-aos="fade-up"
                                  ondblclick="toggleFullScreen()"
                                  id="video"
                                  className="video2"
                                  src="/images/chat3.mp4"
                                  width="50px"
                                ></video>
                              </div>
                              <div className="content">
                                <div className="bitches__name">bitches</div>
                                <p>#scootergang!</p>
                              </div>
                            </div>
                            <div className="message urki">
                              <div className="pfp">
                                <video
                                  autoplay="autoplay"
                                  muted="muted"
                                  loop="loop"
                                  playsinline="playsinline"
                                  preload="metadata"
                                  data-aos="fade-up"
                                  ondblclick="toggleFullScreen()"
                                  id="video"
                                  className="video2"
                                  src="/images/chat4.mp4"
                                  width="50px"
                                ></video>
                              </div>
                              <div className="content">
                                <div className="bitches__name">bitches</div>
                                <p>#bitchslap!</p>
                              </div>
                            </div>
                          </div>
                        </main>
                      </aside>
                    </div>
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Home;
