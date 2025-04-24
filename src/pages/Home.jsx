import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-secondary-100 bg-primary-1000">
      <div className="flex flex-col">
        <section className="hero-block mb-4 lg:mb-8 w-full h-full lg:h-[600px] overflow-hidden">
          <img
            src="https://gdconf.com/sites/default/files/styles/200x200/public/IGF%20juries%202%20image.png"
            className="w-full h-auto object-cover object-center"
          />
        </section>

        {/* <!-- Recommended --> */}
        <section className="recommended-block flex flex-col mx-2 lg:mx-10">
          <div className="recommended-container flex justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="hidden lg:block w-20 h-20 my-auto text-primary-200"
            >
              <path
                fill-rule="evenodd"
                d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                clip-rule="evenodd"
              />
            </svg>
            <div className="recommended-content flex space-x-2 lg:space-x-4 lg:px-0 overflow-hidden">
              <div className="recommended-hightlight min-w-5/6 lg:min-w-2/3 h-full">
                <img
                  src="https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/466740/header.jpg?t=1572763987"
                  className="h-full object-cover"
                />
              </div>
              <div className="recommended-items flex flex-col space-y-4 w-1/3 lg:w-full">
                <div className="w-full h-full overflow-hidden">
                  <img
                    src="https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/617160/header.jpg?t=1544779603"
                    className="h-full object-cover object-left"
                  />
                </div>
                <div className="w-full h-full overflow-hidden">
                  <img
                    src="https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1307890/header.jpg?t=1710049664"
                    className="h-full object-cover object-left"
                  />
                </div>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="hidden lg:block w-20 h-20 my-auto text-primary-200"
            >
              <path
                fill-rule="evenodd"
                d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="pagination hidden lg:flex justify-center space-x-2 lg:space-x-4 mt-2 mb-4 lg:mt-4 lg:mb-8">
            <img
              src="https://placehold.co/16x16/3E2F64/3E2F64"
              className="w-3 h-3 rounded-full"
            />
            <img
              src="https://placehold.co/16x16/674EA7/674EA7"
              className="w-3 h-3 rounded-full"
            />
            <img
              src="https://placehold.co/16x16/674EA7/674EA7"
              className="w-3 h-3 rounded-full"
            />
          </div>
        </section>

        {/* <!-- Offers --> */}
        <section className="offers-section bg-primary-800 py-4 rounded-md text-secondary-100">
          <h2 className="offers-heading text-2xl lg:text-4xl text-secondary-600 mb-4 font-bold font-orbitron uppercase mx-4 lg:max-w-[80%] lg:mx-auto">
            Offers
          </h2>
          <div className="offers-container grid lg:grid-cols-3 gap-4 lg:gap-10 mx-4 lg:max-w-[80%] lg:mx-auto">
            <a href="./game_detail.html" className="game-card">
              <div className="game-header relative flex-col">
                <img
                  src="https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1378370/header.jpg?t=1741787588"
                  alt="Fallen Knight"
                  className="rounded-t-2xl w-full object-cover"
                />
                <div className="sale-highlight absolute top-2 left-2 bg-accent-600 font-bold font-roboto text-2xl rounded-md text-primary-800 px-1">
                  50%
                </div>
                <div className="price-tag absolute bg-primary-600 text-secondary-600 bottom-0 left-4 rounded-t-lg font-roboto text-2xl px-2">
                  <span className="line-through text-xl font-light">
                    THB400
                  </span>{" "}
                  THB175
                </div>
              </div>
              <div className="game-info flex justify-around  bg-primary-600 py-6  rounded-b-2xl ">
                <div className="developer-info flex gap-2 m-0">
                  <img
                    src="https://avatars.cloudflare.steamstatic.com/0334b9e9b4d7fcd1fc03fd88cdd7b6c625a1a17f_full.jpg"
                    alt="FairPlay Studios"
                    className="w-13 h-13 rounded-full object-cover"
                  />
                  <p className="text-white mt-2">FairPlay Studios</p>
                </div>
                <div className="likes-count flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 lg:size-8 text-primary-100"
                  >
                    <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                  </svg>
                  <p className="hidden lg:block text-sm font-roboto">20,000</p>
                  <p className="lg:hidden text-sm font-roboto">20k</p>
                </div>
                <div className="likes-count flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 lg:size-8 text-primary-100"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <p className="hidden lg:block text-sm font-roboto">30,000</p>
                  <p className="lg:hidden text-sm font-roboto">30k</p>
                </div>
              </div>
            </a>
            <a href="./game_detail.html" className="game-card">
              <div className="game-header relative flex-col">
                <img
                  src="https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2701870/header.jpg?t=1728978574"
                  alt=""
                  className="rounded-t-2xl w-full object-cover"
                />
                <div className="sale-highlight absolute top-2 left-2 bg-accent-600 font-bold font-roboto text-2xl rounded-md text-primary-800 px-1">
                  50%
                </div>
                <div className="price-tag absolute bg-primary-600 text-secondary-600 bottom-0 left-4 rounded-t-lg font-roboto text-2xl px-2">
                  <span className="line-through text-xl font-light">
                    THB1,190
                  </span>{" "}
                  THB750
                </div>
              </div>
              <div className="game-info flex justify-around  bg-primary-600 py-6  rounded-b-2xl ">
                <div className="developer-info flex gap-2">
                  <img
                    src="https://pbs.twimg.com/media/GPUtoHvaIAMiHUS?format=png"
                    alt="BinaryStella"
                    className="w-13 h-13 rounded-full object-cover"
                  />
                  <p className="text-white mt-2">BinaryStella</p>
                </div>
                <div className="likes-count flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 lg:size-8 text-primary-100"
                  >
                    <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                  </svg>
                  <p className="hidden lg:block text-sm font-roboto">20,000</p>
                  <p className="lg:hidden text-sm font-roboto">20k</p>
                </div>
                <div className="likes-count flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 lg:size-8 text-primary-100"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <p className="hidden lg:block text-sm font-roboto">30,000</p>
                  <p className="lg:hidden text-sm font-roboto">30k</p>
                </div>
              </div>
            </a>
            <a href="./game_detail.html" className="game-card">
              <div className="game-header relative flex-col">
                <img
                  src="https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/3038790/header.jpg?t=1721704136"
                  alt="Scrap Down"
                  className="rounded-t-2xl w-full object-cover"
                />
                <div className="sale-highlight absolute top-2 left-2 bg-accent-600 font-bold font-roboto text-2xl rounded-md text-primary-800 px-1">
                  50%
                </div>
                <div className="price-tag absolute bg-primary-600 text-secondary-600 bottom-0 left-4 rounded-t-lg font-roboto text-2xl px-2">
                  <span className="line-through text-xl font-light">
                    THB800
                  </span>{" "}
                  THB380
                </div>
              </div>
              <div className="game-info flex justify-around  bg-primary-600 py-6  rounded-b-2xl ">
                <div className="developer-info flex gap-2 m-0">
                  <img
                    src="https://scontent.futp1-2.fna.fbcdn.net/v/t39.30808-6/279974443_108733178499435_8274315846239706512_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=MEEooSWrwJUQ7kNvgGP_WXf&_nc_oc=AdlGp28OpnmMq9CLUcGOB81KYkPVBf8LI-wDmv30BvAH5Rc8U12t__LdayDTQYwKqJg&_nc_zt=23&_nc_ht=scontent.futp1-2.fna&_nc_gid=dZ_r07WyFVSD_2tA5J7cSw&oh=00_AYGbQJdAJZLRiYh9CpxuW2xVc54JXzOEp33liiPITivcuQ&oe=67EAAAF5"
                    alt="Ichigames"
                    className="w-13 h-13 rounded-full object-cover"
                  />
                  <p className="text-white mt-2">Ichigames</p>
                </div>
                <div className="likes-count flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 lg:size-8 text-primary-100"
                  >
                    <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                  </svg>
                  <p className="hidden lg:block text-sm font-roboto">20,000</p>
                  <p className="lg:hidden text-sm font-roboto">20k</p>
                </div>
                <div className="likes-count flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 lg:size-8 text-primary-100"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <p className="hidden lg:block text-sm font-roboto">30,000</p>
                  <p className="lg:hidden text-sm font-roboto">30k</p>
                </div>
              </div>
            </a>
          </div>
          <div className="pagination hidden lg:flex justify-center space-x-2 lg:space-x-4 mt-2 mb-4 lg:mt-4 lg:mb-8">
            <img
              src="https://placehold.co/16x16/3E2F64/3E2F64"
              className="w-3 h-3 rounded-full"
            />
            <img
              src="https://placehold.co/16x16/674EA7/674EA7"
              className="w-3 h-3 rounded-full"
            />
            <img
              src="https://placehold.co/16x16/674EA7/674EA7"
              className="w-3 h-3 rounded-full"
            />
          </div>
        </section>

        {/* <!-- For you --> */}
        <section className="for-you-section py-4 rounded-md text-secondary-100">
          <h2 className="for-you-heading text-2xl lg:text-4xl text-secondary-600 mb-4 font-bold font-orbitron uppercase mx-4 lg:max-w-[80%] lg:mx-auto">
            For You
          </h2>
          <div className="for-you-container grid lg:grid-cols-3 gap-4 lg:gap-10 mx-4 lg:max-w-[80%] lg:mx-auto">
            <a href="./game_detail.html" className="game-card">
              <div className="game-header relative flex-col">
                <img
                  src="https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2131010/header.jpg?t=1736181690"
                  alt="The Land Beneath Us"
                  className="rounded-t-2xl w-full object-cover"
                />
                <div className="price-tag absolute bg-primary-600 text-secondary-600 bottom-0 left-4 rounded-t-lg font-roboto text-2xl px-2">
                  THB1,999
                </div>
              </div>
              <div className="game-info flex justify-around  bg-primary-600 py-6  rounded-b-2xl ">
                <div className="developer-info flex gap-2 m-0">
                  <img
                    src="https://avatars.cloudflare.steamstatic.com/0334b9e9b4d7fcd1fc03fd88cdd7b6c625a1a17f_full.jpg"
                    alt="FairPlay Studios"
                    className="w-13 h-13 rounded-full object-cover"
                  />
                  <p className="text-white mt-2">FairPlay Studios</p>
                </div>
                <div className="likes-count flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 lg:size-8 text-primary-100"
                  >
                    <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                  </svg>
                  <p className="hidden lg:block text-sm font-roboto">20,000</p>
                  <p className="lg:hidden text-sm font-roboto">20k</p>
                </div>
                <div className="likes-count flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 lg:size-8 text-primary-100"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <p className="hidden lg:block text-sm font-roboto">30,000</p>
                  <p className="lg:hidden text-sm font-roboto">30k</p>
                </div>
              </div>
            </a>
            <a href="./game_detail.html" className="game-card">
              <div className="game-header relative flex-col">
                <img
                  src="https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1150950/header.jpg?t=1669958187"
                  alt="Timelie"
                  className="rounded-t-2xl w-full object-cover"
                />
                <div className="price-tag absolute bg-primary-600 text-secondary-600 bottom-0 left-4 rounded-t-lg font-roboto text-2xl px-2">
                  THB699
                </div>
              </div>
              <div className="game-info flex justify-around  bg-primary-600 py-6  rounded-b-2xl ">
                <div className="developer-info flex gap-2 m-0">
                  <img
                    src="https://avatars.cloudflare.steamstatic.com/e059fcedfc0df9ff7d74df6c655b74a5cd15d13d_full.jpg"
                    alt="Urnique Studio"
                    className="w-13 h-13 rounded-full object-cover"
                  />
                  <p className="text-white mt-2">Urnique Studio</p>
                </div>
                <div className="likes-count flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 lg:size-8 text-primary-100"
                  >
                    <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                  </svg>
                  <p className="hidden lg:block text-sm font-roboto">20,000</p>
                  <p className="lg:hidden text-sm font-roboto">20k</p>
                </div>
                <div className="likes-count flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 lg:size-8 text-primary-100"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <p className="hidden lg:block text-sm font-roboto">30,000</p>
                  <p className="lg:hidden text-sm font-roboto">30k</p>
                </div>
              </div>
            </a>
            <a href="./game_detail.html" className="game-card">
              <div className="game-header relative flex-col">
                <img
                  src="https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2901660/header.jpg?t=1730962075"
                  alt="Abyssal Blood"
                  className="rounded-t-2xl w-full object-cover"
                />
                <div className="price-tag absolute bg-primary-600 text-secondary-600 bottom-0 left-4 rounded-t-lg font-roboto text-2xl px-2">
                  THB1,990
                </div>
              </div>
              <div className="game-info flex justify-around  bg-primary-600 py-6  rounded-b-2xl ">
                <div className="developer-info flex gap-2 m-0">
                  <img
                    src="https://scontent.futp1-2.fna.fbcdn.net/v/t39.30808-6/279974443_108733178499435_8274315846239706512_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=MEEooSWrwJUQ7kNvgGP_WXf&_nc_oc=AdlGp28OpnmMq9CLUcGOB81KYkPVBf8LI-wDmv30BvAH5Rc8U12t__LdayDTQYwKqJg&_nc_zt=23&_nc_ht=scontent.futp1-2.fna&_nc_gid=dZ_r07WyFVSD_2tA5J7cSw&oh=00_AYGbQJdAJZLRiYh9CpxuW2xVc54JXzOEp33liiPITivcuQ&oe=67EAAAF5"
                    alt="Xilosopher"
                    className="w-13 h-13 rounded-full object-cover"
                  />
                  <p className="text-white mt-2">Xilosopher</p>
                </div>
                <div className="likes-count flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 lg:size-8 text-primary-100"
                  >
                    <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                  </svg>
                  <p className="hidden lg:block text-sm font-roboto">20,000</p>
                  <p className="lg:hidden text-sm font-roboto">20k</p>
                </div>
                <div className="likes-count flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 lg:size-8 text-primary-100"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <p className="hidden lg:block text-sm font-roboto">30,000</p>
                  <p className="lg:hidden text-sm font-roboto">30k</p>
                </div>
              </div>
            </a>
          </div>
          <div className="pagination hidden lg:flex justify-center space-x-2 lg:space-x-4 mt-2 mb-4 lg:mt-4 lg:mb-8">
            <img
              src="https://placehold.co/16x16/3E2F64/3E2F64"
              className="w-3 h-3 rounded-full"
            />
            <img
              src="https://placehold.co/16x16/674EA7/674EA7"
              className="w-3 h-3 rounded-full"
            />
            <img
              src="https://placehold.co/16x16/674EA7/674EA7"
              className="w-3 h-3 rounded-full"
            />
          </div>
        </section>

        {/* <!-- New games --> */}
        <section className="new-games-section bg-primary-800 py-4 rounded-md text-secondary-100">
          <h2 className="new-games-heading text-2xl lg:text-4xl text-secondary-600 mb-4 font-bold font-orbitron uppercase mx-4 lg:max-w-[80%] lg:mx-auto">
            New Games
          </h2>
          <div className="mx-4 lg:mx-4 overflow-hidden">
            <img
              src="https://scontent.futp1-1.fna.fbcdn.net/v/t39.30808-6/471634648_1394689348480047_3150804720894360331_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=UhN2h58s0F4Q7kNvgFE575d&_nc_oc=AdkWVryMUsTuVh7XSQ9FZa2GwbWQKldG5AKt8aw749fFjgL2EdiZdC_0fbqd98NCpmM&_nc_zt=23&_nc_ht=scontent.futp1-1.fna&_nc_gid=VkNf8tnMihAxsdHGbFxPsw&oh=00_AYF8uKS-Cl1XZyAlsCcvRJTVFSfRIWqPdiHbv58-Fq5WbQ&oe=67F087AB"
              alt="Bounty Brawl"
              className="w-full h-auto object-cover object-center"
            />
          </div>
          <div className="pagination flex justify-center space-x-2 lg:space-x-4 mt-2 mb-4 lg:mt-4 lg:mb-8">
            <img
              src="https://placehold.co/16x16/3E2F64/3E2F64"
              className="w-3 h-3 rounded-full"
            />
            <img
              src="https://placehold.co/16x16/674EA7/674EA7"
              className="w-3 h-3 rounded-full"
            />
            <img
              src="https://placehold.co/16x16/674EA7/674EA7"
              className="w-3 h-3 rounded-full"
            />
          </div>
        </section>

        {/* <!-- News --> */}
        <section className="news-section bg-primary-800 py-4 rounded-md text-secondary-100">
          <h2 className="news-heading text-2xl lg:text-4xl text-secondary-600 mb-4 font-bold font-orbitron uppercase mx-4 lg:max-w-[80%] lg:mx-auto">
            News
          </h2>
          <div className="news-ribbon bg-accent-600 text-primary-900 p-4">
            <div className="h-4 lg:h-6 flex justify-between items-center font-roboto text-sm lg:text-lg overflow-hidden lg:max-w-[80%] lg:mx-auto">
              <div className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 hidden lg:block"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="font-bold uppercase hidden lg:block">
                  28th March
                </span>
              </div>{" "}
              <span className="font-bold lg:hidden text-nowrap">28/03 </span>{" "}
              <span className="font-bold text-nowrap">
                TOKYO GAME SHOW 2025 Oversea Sessions
              </span>{" "}
              <span className="text-nowrap uppercase">
                10am Justco Amarin Plaza
              </span>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 mt-4 gap-4 mx-4 lg:max-w-[80%] lg:mx-auto">
            <div className="flex flex-col rounded-lg bg-primary-100 text-primary-600 font-roboto">
              <img
                className="rounded-t-lg"
                src="https://gdconf.com/sites/default/files/IGF%20GDCA%20costream.png"
                alt="IGF & Choice Awards"
              />
              <div className="bg-primary-700 h-6 lg:h-8 text-center text-secondary-100">
                <small>Last updated 3 mins ago</small>
              </div>
              <div className="p-6">
                <h5 className="mb-2 text-lg lg:text-2xl font-medium text-primary-800">
                  IGF & Choice Awards
                </h5>
                <p className="mb-4 text-mg lg:text-xl text-primary-800">
                  The IGF competition awards winners in eight categories during
                  GDC. Join thousands of attendees to honor innovative and
                  independently created video games from around the world with
                  any GDC pass before the Game Developers Choice Awards.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex bg-primary-600 max-w-full h-full rounded-xl gap-4">
                <img
                  className="rounded-xl max-w-1/3"
                  src="https://img.itch.zone/aW1nLzE5MjY2NTI2LmpwZw==/original/jk0o3d.jpg"
                  alt="Pizza Doggy's Ham-Jam"
                />
                <div className="p-4">
                  <h5 className="mb-2 text-lg lg:text-xl lg:font-medium">
                    Kick off 2025 with these game jams!
                  </h5>
                  <p className="hidden lg:block mb-2 text-base font-roboto">
                    the goons squad is coming. let see first 12 may 2025 rosan
                    rdroookvkkvkaxcac kopk
                  </p>
                </div>
              </div>

              <div className="flex bg-primary-600 max-w-full h-full rounded-xl gap-4">
                <img
                  className="rounded-xl max-w-1/3"
                  src="https://gdconf.com/sites/default/files/ss_0277c27cc3a4c7ace2d33fe0c036bd35d60a1ad1.1920x1080.jpg"
                  alt="Consume Me"
                />
                <div className="p-4">
                  <h5 className="mb-2 text-lg lg:text-xl lg:font-medium">
                    'Consume Me' Wins Grand Prize, Nuovo Award at the 2025 IGF
                    Awards
                  </h5>
                  <p className="hidden lg:block mb-2 text-base font-roboto">
                    the goons squad is coming. let see first 12 may 2025 rosan
                    rdroookvkkvkaxcac kopk
                  </p>
                </div>
              </div>

              <div className="flex bg-primary-600 max-w-full h-full rounded-xl gap-4">
                <img
                  className="rounded-xl max-w-1/3"
                  src="https://assetsio.gnwcdn.com/Ori-and-the-Will-of-the-Wisps1-scaled-4035452908.jpg?width=720&quality=70&format=jpg&auto=webp"
                  alt="Ori series"
                />
                <div className="p-4">
                  <h5 className="mb-2 text-lg lg:text-xl lg:font-medium">
                    Moon Studios' Ori series tops 15m sales
                  </h5>
                  <p className="hidden lg:block mb-2 text-base font-roboto">
                    the goons squad is coming. let see first 12 may 2025 rosan
                    rdroookvkkvkaxcac kopk
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pagination flex justify-center space-x-2 lg:space-x-4 mt-2 mb-4 lg:mt-4 lg:mb-8">
            <img
              src="https://placehold.co/16x16/3E2F64/3E2F64"
              className="w-3 h-3 rounded-full"
            />
            <img
              src="https://placehold.co/16x16/674EA7/674EA7"
              className="w-3 h-3 rounded-full"
            />
            <img
              src="https://placehold.co/16x16/674EA7/674EA7"
              className="w-3 h-3 rounded-full"
            />
          </div>
        </section>

        {/* <!-- Games --> */}
        <section className="games-section py-4 rounded-md text-secondary-100">
          <h2 className="games-heading text-2xl lg:text-4xl text-secondary-600 mb-4 font-bold font-orbitron uppercase mx-4 lg:max-w-[80%] lg:mx-auto">
            More Games
          </h2>
          <div className="games-container grid lg:grid-cols-3 gap-4 lg:gap-10 mx-4 lg:max-w-[80%] lg:mx-auto">
            <a href="./game_detail.html" className="game-card">
              <div className="game-header relative flex-col">
                <img
                  src="https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/3115410/header.jpg?t=1736347030"
                  alt="Eonheart"
                  className="rounded-t-2xl w-full object-cover"
                />
                <div className="price-tag absolute bg-primary-600 text-secondary-600 bottom-0 left-4 rounded-t-lg font-roboto text-2xl px-2">
                  THB699
                </div>
              </div>
              <div className="game-info flex justify-around  bg-primary-600 py-6  rounded-b-2xl ">
                <div className="developer-info flex gap-2 m-0">
                  <img
                    src="https://yt3.googleusercontent.com/ytc/AIdro_kF-OU3zk2byNpbSYqN-bFTcMFxT0hWCB2rHVbfC5LOaw=s160-c-k-c0x00ffffff-no-rj"
                    alt="AeraDev"
                    className="w-13 h-13 rounded-full object-cover"
                  />
                  <p className="text-white mt-2">AeraDev</p>
                </div>
                <div className="likes-count flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 lg:size-8 text-primary-100"
                  >
                    <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                  </svg>
                  <p className="hidden lg:block text-sm font-roboto">20,000</p>
                  <p className="lg:hidden text-sm font-roboto">20k</p>
                </div>
                <div className="likes-count flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 lg:size-8 text-primary-100"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <p className="hidden lg:block text-sm font-roboto">30,000</p>
                  <p className="lg:hidden text-sm font-roboto">30k</p>
                </div>
              </div>
            </a>
            <a href="./game_detail.html" className="game-card">
              <div className="game-header relative flex-col">
                <img
                  src="https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1234120/header.jpg?t=1660792502"
                  alt="Aeterno Blade"
                  className="rounded-t-2xl w-full object-cover"
                />
                <div className="price-tag absolute bg-primary-600 text-secondary-600 bottom-0 left-4 rounded-t-lg font-roboto text-2xl px-2">
                  THB1,999
                </div>
              </div>
              <div className="game-info flex justify-around  bg-primary-600 py-6  rounded-b-2xl ">
                <div className="developer-info flex gap-2 m-0">
                  <img
                    src="https://avatars.cloudflare.steamstatic.com/8adbccd0d43af8a9d4c793e739e75ce6a627a6ae_full.jpg"
                    alt="Corecell Technology"
                    className="w-13 h-13 rounded-full object-cover"
                  />
                  <p className="text-white mt-2">Corecell Technology</p>
                </div>
                <div className="likes-count flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 lg:size-8 text-primary-100"
                  >
                    <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                  </svg>
                  <p className="hidden lg:block text-sm font-roboto">20,000</p>
                  <p className="lg:hidden text-sm font-roboto">20k</p>
                </div>
                <div className="likes-count flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 lg:size-8 text-primary-100"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <p className="hidden lg:block text-sm font-roboto">30,000</p>
                  <p className="lg:hidden text-sm font-roboto">30k</p>
                </div>
              </div>
            </a>
            <a href="./game_detail.html" className="game-card">
              <div className="game-header relative flex-col">
                <img
                  src="https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/3227900/header.jpg?t=1742288583"
                  alt="Nightmare Circus"
                  className="rounded-t-2xl w-full object-cover"
                />
                <div className="price-tag absolute bg-primary-600 text-secondary-600 bottom-0 left-4 rounded-t-lg font-roboto text-2xl px-2">
                  THB1,990
                </div>
              </div>
              <div className="game-info flex justify-around  bg-primary-600 py-6  rounded-b-2xl ">
                <div className="developer-info flex gap-2 m-0">
                  <img
                    src="https://avatars.cloudflare.steamstatic.com/0334b9e9b4d7fcd1fc03fd88cdd7b6c625a1a17f_full.jpg"
                    alt="FairPlay Studios"
                    className="w-13 h-13 rounded-full object-cover"
                  />
                  <p className="text-white mt-2">FairPlay Studios</p>
                </div>
                <div className="likes-count flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 lg:size-8 text-primary-100"
                  >
                    <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                  </svg>
                  <p className="hidden lg:block text-sm font-roboto">20,000</p>
                  <p className="lg:hidden text-sm font-roboto">20k</p>
                </div>
                <div className="likes-count flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 lg:size-8 text-primary-100"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <p className="hidden lg:block text-sm font-roboto">30,000</p>
                  <p className="lg:hidden text-sm font-roboto">30k</p>
                </div>
              </div>
            </a>
            <a href="./game_detail.html" className="game-card">
              <div className="game-header relative flex-col">
                <img
                  src="https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2598020/header.jpg?t=1734856445"
                  alt="Spire Horizon"
                  className="rounded-t-2xl w-full object-cover"
                />
                <div className="price-tag absolute bg-primary-600 text-secondary-600 bottom-0 left-4 rounded-t-lg font-roboto text-2xl px-2">
                  THB1,999
                </div>
              </div>
              <div className="game-info flex justify-around  bg-primary-600 py-6  rounded-b-2xl ">
                <div className="developer-info flex gap-2 m-0">
                  <img
                    src="https://cdna.artstation.com/p/assets/covers/images/077/784/256/smaller_square/mendoka-mendoka-screenshot-2024-07-07-204323.jpg?1720359897"
                    alt="Mendoka"
                    className="w-13 ml-3 rounded-full"
                  />
                  <p className="text-white mt-2">Mendoka</p>
                </div>
                <div className="likes-count flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 lg:size-8 text-primary-100"
                  >
                    <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                  </svg>
                  <p className="hidden lg:block text-sm font-roboto">20,000</p>
                  <p className="lg:hidden text-sm font-roboto">20k</p>
                </div>
                <div className="likes-count flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 lg:size-8 text-primary-100"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <p className="hidden lg:block text-sm font-roboto">30,000</p>
                  <p className="lg:hidden text-sm font-roboto">30k</p>
                </div>
              </div>
            </a>
            <a href="./game_detail.html" className="game-card">
              <div className="game-header relative flex-col">
                <img
                  src="https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/3025540/header.jpg?t=1721059883"
                  alt="The Quarantine"
                  className="rounded-t-2xl w-full object-cover"
                />
                <div className="price-tag absolute bg-primary-600 text-secondary-600 bottom-0 left-4 rounded-t-lg font-roboto text-2xl px-2">
                  THB699
                </div>
              </div>
              <div className="game-info flex justify-around  bg-primary-600 py-6  rounded-b-2xl ">
                <div className="developer-info flex gap-2 m-0">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYsuutE_q5fDxQX07Isr5NNHPGK7sRCQnf3g&s"
                    alt="B-Giant Studio"
                    className="w-13 h-13 rounded-full object-cover"
                  />
                  <p className="text-white mt-2">B-Giant Studio</p>
                </div>
                <div className="likes-count flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 lg:size-8 text-primary-100"
                  >
                    <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                  </svg>
                  <p className="hidden lg:block text-sm font-roboto">20,000</p>
                  <p className="lg:hidden text-sm font-roboto">20k</p>
                </div>
                <div className="likes-count flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 lg:size-8 text-primary-100"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <p className="hidden lg:block text-sm font-roboto">30,000</p>
                  <p className="lg:hidden text-sm font-roboto">30k</p>
                </div>
              </div>
            </a>
            <a href="./game_detail.html" className="game-card">
              <div className="game-header relative flex-col">
                <img
                  src="https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/3024170/header.jpg?t=1717524406"
                  alt="The Wishing Well"
                  className="rounded-t-2xl w-full object-cover"
                />
                <div className="price-tag absolute bg-primary-600 text-secondary-600 bottom-0 left-4 rounded-t-lg font-roboto text-2xl px-2">
                  THB1,990
                </div>
              </div>
              <div className="game-info flex justify-around  bg-primary-600 py-6  rounded-b-2xl ">
                <div className="developer-info flex gap-2 m-0">
                  <img
                    src="https://nakadev.com/images/TheWishingWell_Cover.png"
                    alt="NakaDev"
                    className="w-13 h-13 rounded-full object-cover"
                  />
                  <p className="text-white mt-2">NakaDev</p>
                </div>
                <div className="likes-count flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 lg:size-8 text-primary-100"
                  >
                    <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                  </svg>
                  <p className="hidden lg:block text-sm font-roboto">20,000</p>
                  <p className="lg:hidden text-sm font-roboto">20k</p>
                </div>
                <div className="likes-count flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 lg:size-8 text-primary-100"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <p className="hidden lg:block text-sm font-roboto">30,000</p>
                  <p className="lg:hidden text-sm font-roboto">30k</p>
                </div>
              </div>
            </a>
          </div>
          <div className="flex justify-center mt-2 mb-4 lg:mt-4 lg:mb-8">
            <a
              href="./game_categories.html"
              className="px-2 py-1 text-xl text-nowrap font-semibold text-primary-800 uppercase bg-primary-100 rounded-2xl cursor-pointer"
            >
              Discover More
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
