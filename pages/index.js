import Image from "next/image";

export default function Home() {
  return (
    <div dir="rtl" className="antialiased">
      {/* above-the-fold section */}
      <section>
        <div className="bg-[#FBFBFB] relative z-0 pb-24 overflow-hidden">
          {/* nav */}
          <nav className="w-full flex justify-between max-w-screen-[1792px] mx-auto px-12 xl:px-24 py-4 xl:py-10">
            <svg
              className="w-12 xl:w-24"
              viewBox="0 0 112 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M102.669 18.6629C107.823 18.6629 112.001 14.4851 112.001 9.33147C112.001 4.17784 107.823 0 102.669 0C97.5157 0 93.3379 4.17784 93.3379 9.33147C93.3379 14.4851 97.5157 18.6629 102.669 18.6629Z"
                fill="#3FB0E0"
              />
              <path
                d="M57.5317 18.6629C62.6853 18.6629 66.8631 14.4851 66.8631 9.33147C66.8631 4.17784 62.6853 0 57.5317 0C52.378 0 48.2002 4.17784 48.2002 9.33147C48.2002 14.4851 52.378 18.6629 57.5317 18.6629Z"
                fill="#E01A65"
              />
              <path
                d="M79.9672 18.6629C85.1208 18.6629 89.2987 14.4851 89.2987 9.33147C89.2987 4.17784 85.1208 0 79.9672 0C74.8136 0 70.6357 4.17784 70.6357 9.33147C70.6357 14.4851 74.8136 18.6629 79.9672 18.6629Z"
                fill="#8E86FF"
              />
              <path
                d="M33.615 54.3189V61.8568H2.69938V54.3189H20.7802V49.1239C20.7802 46.5433 19.7615 44.574 17.7243 43.2158C15.687 41.8576 13.0895 41.1785 9.93169 41.1785C8.57351 41.1785 7.11347 41.3143 5.55156 41.586C5.34784 40.3636 5.24597 39.328 5.24597 38.4791C5.24597 36.8833 5.56854 35.7628 6.21368 35.1176C6.89277 34.4385 7.94535 34.0311 9.37144 33.8953C10.5259 33.8274 11.3748 33.7934 11.918 33.7934C15.2795 33.7934 18.1996 34.4046 20.6783 35.627C23.1909 36.8493 25.1094 38.615 26.4336 40.9239C27.7918 43.2328 28.4709 45.9661 28.4709 49.1239V54.3189H33.615ZM39.9894 41.9934C39.9894 40.3297 40.3459 39.1073 41.059 38.3263C41.772 37.5114 42.9774 37.104 44.6751 37.104C45.524 37.104 46.5256 37.2058 47.6801 37.4096V61.8568H33.6229C32.4685 61.8568 31.5008 61.4833 30.7198 60.7363C29.9389 59.9893 29.5484 59.0725 29.5484 57.986C29.5484 56.8995 29.9219 56.0166 30.6689 55.3375C31.4159 54.6585 32.4006 54.3189 33.6229 54.3189H39.9894V41.9934ZM38.6652 74.9972C37.4768 74.9972 36.4581 74.5728 35.6093 73.7239C34.7604 72.875 34.336 71.8564 34.336 70.668C34.336 69.4796 34.7604 68.461 35.6093 67.6121C36.4581 66.7632 37.4768 66.3388 38.6652 66.3388C39.8536 66.3388 40.8722 66.7632 41.7211 67.6121C42.5699 68.461 42.9944 69.4796 42.9944 70.668C42.9944 71.8564 42.5699 72.875 41.7211 73.7239C40.8722 74.5728 39.8536 74.9972 38.6652 74.9972ZM48.8006 74.9972C47.6122 74.9972 46.5935 74.5728 45.7447 73.7239C44.8958 72.875 44.4714 71.8564 44.4714 70.668C44.4714 69.4796 44.8958 68.461 45.7447 67.6121C46.5935 66.7632 47.6122 66.3388 48.8006 66.3388C49.989 66.3388 51.0076 66.7632 51.8565 67.6121C52.7054 68.461 53.1298 69.4796 53.1298 70.668C53.1298 71.8564 52.7054 72.875 51.8565 73.7239C51.0076 74.5728 49.989 74.9972 48.8006 74.9972ZM76.8433 54.3189V61.8568H71.5464C71.5464 65.4899 70.7315 68.2403 69.1017 70.1078C67.4718 71.9753 65.146 72.909 62.124 72.909C60.1207 72.909 57.9816 72.5355 55.7066 71.7885L57.1836 65.1674C58.7455 65.5409 59.9679 65.7276 60.8507 65.7276C61.9033 65.7276 62.6673 65.439 63.1426 64.8618C63.618 64.2846 63.8557 63.2829 63.8557 61.8568V41.9934C63.8557 40.3297 64.2122 39.1073 64.9253 38.3263C65.6383 37.5114 66.8437 37.104 68.5414 37.104C69.3903 37.104 70.3919 37.2058 71.5464 37.4096V54.3189H76.8433ZM67.5737 32.9276C66.3853 32.9276 65.3667 32.5031 64.5178 31.6543C63.6689 30.8054 63.2445 29.7868 63.2445 28.5984C63.2445 27.41 63.6689 26.3913 64.5178 25.5425C65.3667 24.6936 66.3853 24.2692 67.5737 24.2692C68.7621 24.2692 69.7808 24.6936 70.6296 25.5425C71.4785 26.3913 71.9029 27.41 71.9029 28.5984C71.9029 29.7868 71.4785 30.8054 70.6296 31.6543C69.7808 32.5031 68.7621 32.9276 67.5737 32.9276ZM95.3844 33.8953C97.9989 33.8953 100.342 34.5404 102.413 35.8307C104.518 37.121 106.165 38.8866 107.353 41.1276C108.576 43.3346 109.187 45.7794 109.187 48.4618C109.187 51.246 108.593 53.6568 107.404 55.6941C106.216 57.6974 104.637 59.2253 102.668 60.2779C100.698 61.3305 98.5422 61.8568 96.1993 61.8568C94.3658 61.8568 92.5492 61.5342 90.7496 60.8891C88.984 60.244 87.3372 59.2763 85.8093 57.986C84.7906 59.2423 83.5004 60.21 81.9385 60.8891C80.4105 61.5342 78.7128 61.8568 76.8453 61.8568C75.6908 61.8568 74.7231 61.4833 73.9422 60.7363C73.1612 59.9893 72.7707 59.0725 72.7707 57.986C72.7707 56.8995 73.1442 56.0166 73.8912 55.3375C74.6382 54.6585 75.6229 54.3189 76.8453 54.3189C77.9318 54.3189 78.7637 54.1322 79.3409 53.7587C79.9182 53.3512 80.3256 52.8079 80.5633 52.1288C80.8349 51.4498 81.1405 50.3972 81.4801 48.9711C81.8196 47.511 82.0573 46.5603 82.1931 46.1189C83.2457 42.2481 84.8925 39.2431 87.1335 37.104C89.4084 34.9648 92.1588 33.8953 95.3844 33.8953ZM95.0279 54.8282C96.8954 54.8282 98.4403 54.285 99.6627 53.1984C100.885 52.0779 101.496 50.499 101.496 48.4618C101.496 46.4924 100.936 44.8626 99.8155 43.5723C98.695 42.2481 97.218 41.586 95.3844 41.586C93.9923 41.586 92.8548 42.0613 91.972 43.0121C91.1231 43.9288 90.3592 45.4059 89.6801 47.4431C89.3405 48.4278 89.0859 49.4634 88.9161 50.55C88.8482 50.7876 88.7803 51.0763 88.7124 51.4158C88.6784 51.7214 88.5935 52.0779 88.4577 52.4854C89.4424 53.2663 90.512 53.8605 91.6664 54.268C92.8209 54.6415 93.9414 54.8282 95.0279 54.8282Z"
                fill="#802BE7"
              />
            </svg>
            <a
              href="https://web.zid.sa/mazeed/activation"
              className="rounded-full font-ibm font-medium xl:text-lg bg-white px-4 xl:px-12 py-1 xl:py-4 text-[#802BE7]"
            >
              اربط متجرك مجانًا
            </a>
          </nav>
          {/* CTA */}
          <div className="mt-12 xl:mt-0 flex flex-col items-center justify-center px-4 xl:px-0">
            <h1 className="font-shamel font-bold text-4xl xl:text-5xl text-center bg-clip-text text-transparent py-2 bg-gradient-to-l from-[#3FB8E8] via-[#7462F4] via-[#802BE7] to-[#E81A65]">
              قناة بيع إضافية لمتجرك
            </h1>
            <p className="mt-10 font-ibm xl:text-lg text-center text-[#9C9C9C]">
              توسّع في تجارتك مع مزيد، وأظهر منتجاتك لعملاء جدد بدون رسوم تأسيس
              أو رسوم شهرية
            </p>
            <a
              href="https://web.zid.sa/mazeed/activation"
              className="mt-8 font-ibm font-medium text-lg text-white bg-[#802BE7] rounded-full px-12 py-4"
            >
              اربط متجرك مجانًا
            </a>
            {/* video box */}
            <div className="mt-20 rounded-2xl aspect-[16/9] w-full max-w-4xl bg-black relative">
              <div className="h-full w-full overflow-clip rounded-2xl">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/J73KbWa8QZY"
                ></iframe>
              </div>
              <Image
                className="rounded-full w-24 absolute right-0 bottom-0 -mr-52 mt-8 border-4 border-white shadow-md"
                src="/p-1.png"
                width={255}
                height={255}
              />
              <Image
                className="rounded-full w-20 absolute right-0 -mr-12 mt-24 border-4 border-white shadow-lg backdrop-blur-sm"
                src="/p-3.png"
                width={255}
                height={255}
              />
              <Image
                className="rounded-full w-24 absolute right-0 top-0 -mr-32 mt-52 border-4 border-white shadow-2xl"
                src="/p-2.png"
                width={255}
                height={255}
              />
              <Image
                className="rounded-full w-28 absolute left-0 top-0 -ml-32 mt-44 border-4 border-white shadow-lg"
                src="/p-4.png"
                width={255}
                height={255}
              />
              <Image
                className="rounded-full w-20 absolute left-0 bottom-0 -ml-10 mb-12 border-4 border-white shadow-lg backdrop-blur-sm"
                src="/p-5.png"
                width={255}
                height={255}
              />
              <Image
                className="rounded-full w-24 absolute left-0 bottom-0 -ml-40 mb-2 border-4 border-white shadow-lg"
                src="/p-6.png"
                width={255}
                height={255}
              />
              <div className="bg-[#3FB8E8] backdrop-blur-sm z-10 bg-opacity-80 absolute right-0 bottom-0 -mr-20  mb-4 w-28 h-28 rounded-full"></div>
              <div className="bg-[#E81A65CC] backdrop-blur-md z-10 bg-opacity-80 absolute left-0 top-0 -ml-20  mt-10 w-32 h-32 rounded-full"></div>
            </div>
          </div>
          {/* pattern */}
          <div className="absolute top-0 left-0 right-0 -ml-32 mt-24 -z-10">
            <svg
              width="1728"
              height="1155"
              viewBox="0 0 1728 1155"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1332.43 944.341L1331.91 925.281C1327.84 773.942 1070.74 701.77 801.661 776.435L766.812 786.105C514.213 856.199 273.305 787.693 271.604 645.286L271.209 612.175C269.934 505.434 109.336 444.419 -84.7552 476.935V476.935"
                stroke="url(#paint0_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1344.84 933.853L1344.33 914.793C1340.26 763.453 1083.15 691.281 814.075 765.947L779.226 775.617C526.627 845.71 285.719 777.205 284.018 634.798L283.623 601.687C282.348 494.946 121.75 433.93 -72.3411 466.447V466.447"
                stroke="url(#paint1_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1358 923.751L1357.49 904.691C1353.42 753.352 1096.31 681.18 827.238 755.845L792.389 765.515C539.79 835.609 298.882 767.103 297.181 624.696L296.786 591.585C295.511 484.844 134.913 423.829 -59.1781 456.345V456.345"
                stroke="url(#paint2_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1370.41 913.261L1369.9 894.201C1365.83 742.862 1108.72 670.689 839.644 745.355L804.795 755.025C552.197 825.119 311.289 756.613 309.588 614.205L309.193 581.095C307.918 474.354 147.32 413.338 -46.7712 445.854V445.854"
                stroke="url(#paint3_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1382.8 902.77L1382.29 883.711C1378.22 732.371 1121.11 660.199 852.037 734.865L817.188 744.535C564.589 814.628 323.681 746.123 321.98 603.716L321.585 570.605C320.31 463.864 159.712 402.848 -34.3791 435.365V435.365"
                stroke="url(#paint4_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1395.2 892.278L1394.69 873.219C1390.62 721.879 1133.51 649.707 864.434 724.373L829.585 734.043C576.987 804.136 336.079 735.63 334.378 593.223L333.983 560.112C332.708 453.371 172.11 392.356 -21.9813 424.872V424.872"
                stroke="url(#paint5_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1407.6 881.79L1407.09 862.73C1403.02 711.391 1145.92 639.219 876.839 713.884L841.99 723.555C589.392 793.648 348.483 725.142 346.783 582.735L346.388 549.624C345.113 442.883 184.515 381.868 -9.57651 414.384V414.384"
                stroke="url(#paint6_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1420 871.3L1419.49 852.24C1415.42 700.9 1158.31 628.728 889.233 703.394L854.384 713.064C601.785 783.158 360.877 714.652 359.176 572.245L358.781 539.134C357.506 432.393 196.908 371.377 2.81654 403.894V403.894"
                stroke="url(#paint7_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1432.41 860.813L1431.9 841.754C1427.83 690.414 1170.72 618.242 901.648 692.908L866.799 702.578C614.2 772.671 373.292 704.165 371.591 561.758L371.196 528.647C369.921 421.906 209.323 360.891 15.2318 393.407V393.407"
                stroke="url(#paint8_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1444.79 850.319L1444.28 831.26C1440.21 679.92 1183.1 607.748 914.023 682.414L879.174 692.084C626.575 762.177 385.667 693.671 383.966 551.264L383.571 518.153C382.296 411.412 221.698 350.397 27.6068 382.913V382.913"
                stroke="url(#paint9_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1457.18 839.827L1456.67 820.767C1452.6 669.428 1195.49 597.256 926.412 671.921L891.564 681.592C638.965 751.685 398.056 683.179 396.356 540.772L395.961 507.661C394.686 400.92 234.088 339.905 39.9964 372.421V372.421"
                stroke="url(#paint10_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1469.59 829.339L1469.08 810.279C1465.01 658.94 1207.9 586.767 938.828 661.433L903.98 671.103C651.381 741.197 410.472 672.691 408.772 530.284L408.377 497.173C407.102 390.432 246.504 329.416 52.4124 361.933V361.933"
                stroke="url(#paint11_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1481.98 818.847L1481.47 799.787C1477.4 648.448 1220.29 576.275 951.219 650.941L916.37 660.611C663.772 730.704 422.863 662.199 421.163 519.791L420.767 486.68C419.493 379.94 258.894 318.924 64.803 351.44V351.44"
                stroke="url(#paint12_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1494.39 808.358L1493.88 789.299C1489.81 637.959 1232.7 565.787 963.627 640.453L928.778 650.123C676.18 720.216 435.271 651.71 433.571 509.303L433.175 476.192C431.901 369.451 271.302 308.436 77.2111 340.952V340.952"
                stroke="url(#paint13_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1506.78 797.864L1506.27 778.804C1502.2 627.465 1245.09 555.293 976.016 629.958L941.167 639.629C688.569 709.722 447.66 641.216 445.96 498.809L445.564 465.698C444.29 358.957 283.691 297.942 89.6 330.458V330.458"
                stroke="url(#paint14_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1518.9 787.624L1518.39 768.564C1514.32 617.225 1257.21 545.053 988.133 619.718L953.284 629.388C700.686 699.482 459.777 630.976 458.077 488.569L457.681 455.458C456.407 348.717 295.808 287.702 101.717 320.218V320.218"
                stroke="url(#paint15_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1531 777.384L1530.49 758.324C1526.42 606.984 1269.31 534.812 1000.23 609.478L965.384 619.148C712.785 689.242 471.877 620.736 470.176 478.329L469.781 445.218C468.506 338.477 307.908 277.461 113.817 309.978V309.978"
                stroke="url(#paint16_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1543.09 767.14L1542.58 748.08C1538.51 596.74 1281.4 524.568 1012.33 599.234L977.48 608.904C724.881 678.997 483.972 610.491 482.272 468.084L481.876 434.973C480.602 328.233 320.003 267.217 125.912 299.733V299.733"
                stroke="url(#paint17_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1555.19 756.899L1554.68 737.84C1550.61 586.5 1293.5 514.328 1024.43 588.994L989.578 598.664C736.98 668.757 496.072 600.251 494.371 457.844L493.976 424.733C492.702 317.992 332.103 256.977 138.012 289.493V289.493"
                stroke="url(#paint18_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1567.31 746.657L1566.79 727.598C1562.72 576.258 1305.62 504.086 1036.54 578.752L1001.69 588.422C749.094 658.515 508.186 590.009 506.485 447.602L506.09 414.491C504.815 307.75 344.217 246.735 150.126 279.251V279.251"
                stroke="url(#paint19_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1579.41 736.415L1578.9 717.355C1574.83 566.016 1317.72 493.844 1048.64 568.509L1013.79 578.18C761.195 648.273 520.287 579.767 518.586 437.36L518.191 404.249C516.916 297.508 356.318 236.492 162.227 269.009V269.009"
                stroke="url(#paint20_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1591.51 726.171L1590.99 707.111C1586.92 555.772 1329.82 483.599 1060.74 558.265L1025.89 567.935C773.293 638.029 532.385 569.523 530.684 427.116L530.289 394.005C529.014 287.264 368.416 226.248 174.325 258.765V258.765"
                stroke="url(#paint21_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1603.63 715.933L1603.12 696.873C1599.05 545.533 1341.94 473.361 1072.87 548.027L1038.02 557.697C785.42 627.79 544.512 559.285 542.811 416.877L542.416 383.766C541.141 277.026 380.543 216.01 186.452 248.526V248.526"
                stroke="url(#paint22_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1615.74 705.692L1615.23 686.633C1611.16 535.293 1354.05 463.121 1084.97 537.787L1050.12 547.457C797.525 617.55 556.617 549.044 554.916 406.637L554.521 373.526C553.246 266.785 392.648 205.77 198.557 238.286V238.286"
                stroke="url(#paint23_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1627.83 695.444L1627.31 676.385C1623.24 525.045 1366.14 452.873 1097.06 527.539L1062.21 537.209C809.614 607.302 568.705 538.796 567.005 396.389L566.609 363.278C565.335 256.537 404.736 195.522 210.645 228.038V228.038"
                stroke="url(#paint24_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1639.96 685.208L1639.44 666.148C1635.37 514.809 1378.27 442.637 1109.19 517.302L1074.34 526.972C821.742 597.066 580.834 528.56 579.133 386.153L578.738 353.042C577.464 246.301 416.865 185.285 222.774 217.802V217.802"
                stroke="url(#paint25_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1652.03 674.96L1651.52 655.9C1647.45 504.561 1390.34 432.389 1121.26 507.054L1086.41 516.725C833.816 586.818 592.908 518.312 591.207 375.905L590.812 342.794C589.537 236.053 428.939 175.037 234.848 207.554V207.554"
                stroke="url(#paint26_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1664.15 664.723L1663.64 645.664C1659.57 494.324 1402.46 422.152 1133.38 496.818L1098.53 506.488C845.935 576.582 605.027 508.075 603.327 365.668L602.931 332.557C601.657 225.816 441.058 164.801 246.967 197.317V197.317"
                stroke="url(#paint27_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1676.26 654.481L1675.75 635.422C1671.68 484.082 1414.57 411.91 1145.49 486.576L1110.65 496.246C858.047 566.339 617.139 497.834 615.438 355.426L615.043 322.315C613.768 215.575 453.17 154.559 259.079 187.075V187.075"
                stroke="url(#paint28_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_483_50481"
                  x1="1267.57"
                  y1="914.139"
                  x2="231.94"
                  y2="134.067"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_483_50481"
                  x1="1279.99"
                  y1="903.651"
                  x2="244.354"
                  y2="123.579"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_483_50481"
                  x1="1293.15"
                  y1="893.55"
                  x2="257.517"
                  y2="113.477"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_483_50481"
                  x1="1305.56"
                  y1="883.059"
                  x2="269.924"
                  y2="102.987"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_483_50481"
                  x1="1317.95"
                  y1="872.569"
                  x2="282.316"
                  y2="92.4969"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_483_50481"
                  x1="1330.35"
                  y1="862.077"
                  x2="294.714"
                  y2="82.0042"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear_483_50481"
                  x1="1342.75"
                  y1="851.589"
                  x2="307.119"
                  y2="71.5164"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint7_linear_483_50481"
                  x1="1355.15"
                  y1="841.098"
                  x2="319.512"
                  y2="61.026"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint8_linear_483_50481"
                  x1="1367.56"
                  y1="830.612"
                  x2="331.927"
                  y2="50.5397"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint9_linear_483_50481"
                  x1="1379.94"
                  y1="820.118"
                  x2="344.302"
                  y2="40.0456"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint10_linear_483_50481"
                  x1="1392.33"
                  y1="809.626"
                  x2="356.692"
                  y2="29.5534"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint11_linear_483_50481"
                  x1="1404.74"
                  y1="799.137"
                  x2="369.108"
                  y2="19.0651"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint12_linear_483_50481"
                  x1="1417.13"
                  y1="788.645"
                  x2="381.498"
                  y2="8.57288"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint13_linear_483_50481"
                  x1="1429.54"
                  y1="778.157"
                  x2="393.906"
                  y2="-1.91541"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint14_linear_483_50481"
                  x1="1441.93"
                  y1="767.663"
                  x2="406.295"
                  y2="-12.4096"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint15_linear_483_50481"
                  x1="1454.05"
                  y1="757.423"
                  x2="418.412"
                  y2="-22.6496"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint16_linear_483_50481"
                  x1="1466.15"
                  y1="747.182"
                  x2="430.512"
                  y2="-32.89"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint17_linear_483_50481"
                  x1="1478.24"
                  y1="736.938"
                  x2="442.607"
                  y2="-43.1342"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint18_linear_483_50481"
                  x1="1490.34"
                  y1="726.698"
                  x2="454.707"
                  y2="-53.3747"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint19_linear_483_50481"
                  x1="1502.45"
                  y1="716.456"
                  x2="466.821"
                  y2="-63.6165"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint20_linear_483_50481"
                  x1="1514.56"
                  y1="706.214"
                  x2="478.922"
                  y2="-73.859"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint21_linear_483_50481"
                  x1="1526.65"
                  y1="695.969"
                  x2="491.02"
                  y2="-84.1031"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint22_linear_483_50481"
                  x1="1538.78"
                  y1="685.731"
                  x2="503.147"
                  y2="-94.3411"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint23_linear_483_50481"
                  x1="1550.89"
                  y1="675.491"
                  x2="515.252"
                  y2="-104.582"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint24_linear_483_50481"
                  x1="1562.97"
                  y1="665.243"
                  x2="527.34"
                  y2="-114.829"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint25_linear_483_50481"
                  x1="1575.1"
                  y1="655.007"
                  x2="539.469"
                  y2="-125.066"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint26_linear_483_50481"
                  x1="1587.18"
                  y1="644.758"
                  x2="551.543"
                  y2="-135.314"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint27_linear_483_50481"
                  x1="1599.3"
                  y1="634.522"
                  x2="563.662"
                  y2="-145.55"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint28_linear_483_50481"
                  x1="1611.41"
                  y1="624.28"
                  x2="575.774"
                  y2="-155.792"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </section>
      {/* features section */}
      <section>
        <div className="pt-32 text-center px-4 xl:px-0">
          <h2 className="inline-block font-shamel font-bold text-3xl text-center bg-clip-text text-transparent py-2 bg-gradient-to-l from-[#3FB8E8] via-[#7462F4] via-[#802BE7] to-[#E81A65]">
            مع مزيد نموك يزيد
          </h2>
          <p className="mt-6 font-ibm  text-center text-[#9C9C9C]">
            فيه مبيعات، وفيه
            <span className="inline-block font-shamel font-semibold mx-2  text-center bg-clip-text text-transparent py-2 bg-gradient-to-l from-[#3FB8E8] via-[#7462F4] via-[#802BE7] to-[#E81A65]">
              مزيـــــــــــــد
            </span>
            من المبيعات
          </p>
          <div className="flex flex-col xl:flex-row items-center gap-12 xl:gap-24 justify-between w-full max-w-screen-lg mx-auto mt-10 xl:mt-16 group">
            <div>
              <div className="flex items-center">
                <div className="bg-[#7462F424] bg-opacity-[14%] p-4 rounded-full">
                  <svg
                    width="51"
                    height="50"
                    viewBox="0 0 51 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M43.4395 0.25H7.43945C5.64924 0.25 3.93235 0.961159 2.66648 2.22703C1.40061 3.4929 0.689453 5.20979 0.689453 7V43C0.689453 44.7902 1.40061 46.5071 2.66648 47.773C3.93235 49.0388 5.64924 49.75 7.43945 49.75H43.4395C45.2297 49.75 46.9466 49.0388 48.2124 47.773C49.4783 46.5071 50.1895 44.7902 50.1895 43V7C50.1895 5.20979 49.4783 3.4929 48.2124 2.22703C46.9466 0.961159 45.2297 0.25 43.4395 0.25ZM16.4395 45.25H7.43945C6.84272 45.25 6.27042 45.013 5.84846 44.591C5.42651 44.169 5.18945 43.5967 5.18945 43V40.345C5.91097 40.607 6.67188 40.7439 7.43945 40.75H16.4395V45.25ZM16.4395 36.25H7.43945C6.84272 36.25 6.27042 36.013 5.84846 35.591C5.42651 35.169 5.18945 34.5967 5.18945 34V31.345C5.91097 31.607 6.67188 31.7439 7.43945 31.75H16.4395V36.25ZM16.4395 27.25H7.43945C6.84272 27.25 6.27042 27.0129 5.84846 26.591C5.42651 26.169 5.18945 25.5967 5.18945 25V7C5.18945 6.40326 5.42651 5.83097 5.84846 5.40901C6.27042 4.98705 6.84272 4.75 7.43945 4.75H16.4395V27.25ZM29.9395 45.25H20.9395V31.75H29.9395V45.25ZM29.9395 27.25H20.9395V4.75H29.9395V27.25ZM45.6895 43C45.6895 43.5967 45.4524 44.169 45.0304 44.591C44.6085 45.013 44.0362 45.25 43.4395 45.25H34.4395V40.75H43.4395C44.207 40.7439 44.9679 40.607 45.6895 40.345V43ZM45.6895 34C45.6895 34.5967 45.4524 35.169 45.0304 35.591C44.6085 36.013 44.0362 36.25 43.4395 36.25H34.4395V31.75H43.4395C44.207 31.7439 44.9679 31.607 45.6895 31.345V34ZM45.6895 25C45.6895 25.5967 45.4524 26.169 45.0304 26.591C44.6085 27.0129 44.0362 27.25 43.4395 27.25H34.4395V4.75H43.4395C44.0362 4.75 44.6085 4.98705 45.0304 5.40901C45.4524 5.83097 45.6895 6.40326 45.6895 7V25ZM38.9395 13.75C38.4944 13.75 38.0594 13.882 37.6894 14.1292C37.3194 14.3764 37.031 14.7278 36.8607 15.139C36.6904 15.5501 36.6459 16.0025 36.7327 16.439C36.8195 16.8754 37.0338 17.2763 37.3485 17.591C37.6631 17.9057 38.064 18.12 38.5005 18.2068C38.937 18.2936 39.3894 18.249 39.8005 18.0787C40.2116 17.9084 40.563 17.62 40.8103 17.25C41.0575 16.88 41.1895 16.445 41.1895 16C41.1895 15.4033 40.9524 14.831 40.5304 14.409C40.1085 13.9871 39.5362 13.75 38.9395 13.75ZM11.9395 18.25C12.3845 18.25 12.8195 18.118 13.1895 17.8708C13.5595 17.6236 13.8479 17.2722 14.0182 16.861C14.1885 16.4499 14.233 15.9975 14.1462 15.561C14.0594 15.1246 13.8451 14.7237 13.5304 14.409C13.2158 14.0943 12.8149 13.8801 12.3784 13.7932C11.9419 13.7064 11.4896 13.751 11.0784 13.9213C10.6673 14.0916 10.3159 14.38 10.0686 14.75C9.82141 15.12 9.68945 15.555 9.68945 16C9.68945 16.5967 9.92651 17.169 10.3485 17.591C10.7704 18.0129 11.3427 18.25 11.9395 18.25Z"
                      fill="#7462F4"
                    />
                  </svg>
                </div>
                <p className="text-[#2E2E2E] font-bold text-3xl font-shamel -mr-2">
                  مبيعات أكثر
                </p>
              </div>
              <p className="mt-6 font-ibm text-[#787878] text-lg max-w-[35ch] text-right">
                ربط منتجاتك مع مزيد يعزز فرص ظهورها لأكثر من7 مليون عميل
                وبالتالي مبيعات أكثر، بدون مجهود منك
              </p>
            </div>
            <div className="flex-grow">
              <Image
                className="transition-all duration-700 ease-in-out opacity-100 group-hover:opacity-0 group-hover:invisible group-hover:h-0"
                src="/mazeed-hero-image.png"
                width={1021}
                height={934}
              />
              <Image
                className="transition-all duration-700 ease-in-out h-0 invisible opacity-0 group-hover:opacity-100 group-hover:visible group-hover:h-auto"
                src="/mazeed-hero-image-2.png"
                width={1021}
                height={934}
              />
            </div>
          </div>

          <div className="flex flex-col xl:flex-row items-center gap-12 xl:gap-24 justify-between w-full max-w-screen-lg mx-auto mt-20 xl:mt-32 group">
            <div className="hidden xl:flex relative flex-grow min-h-[28rem]">
              <Image
                className="absolute inset-0 transition-[opacity] duration-700 ease-in-out opacity-100 group-hover:opacity-0 group-hover:invisible"
                src="/mazeed-marketing.png"
                width={987}
                height={792}
              />
              <Image
                className="absolute inset-0 transition-[opacity] duration-700 ease-in-out  invisible opacity-0 group-hover:opacity-100 group-hover:visible "
                src="/mazeed-marketing-2.png"
                width={987}
                height={792}
              />
            </div>

            <div>
              <div className="flex items-center">
                <div className="bg-[#E81A6524] bg-opacity-[14%] p-4 rounded-full">
                  <svg
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.25 42.75C20.544 42.7464 20.8345 42.6853 21.105 42.57C21.3777 42.4561 21.6288 42.2962 21.8475 42.0975C21.9493 41.9868 22.0398 41.8662 22.1175 41.7375C22.2066 41.6226 22.2751 41.4932 22.32 41.355C22.4005 41.2301 22.4613 41.0935 22.5 40.95C22.511 40.8002 22.511 40.6498 22.5 40.5C22.4964 40.206 22.4353 39.9155 22.32 39.645C22.2189 39.3658 22.0577 39.1122 21.8478 38.9022C21.6378 38.6923 21.3842 38.5311 21.105 38.43C20.6977 38.2411 20.2432 38.1785 19.8 38.25L19.395 38.385C19.2568 38.4299 19.1274 38.4984 19.0125 38.5875C18.8838 38.6652 18.7632 38.7557 18.6525 38.8575C18.4477 39.0715 18.2871 39.3238 18.18 39.6C18.0588 39.8844 17.9975 40.1908 18 40.5C18 41.0967 18.2371 41.669 18.659 42.091C19.081 42.5129 19.6533 42.75 20.25 42.75ZM11.9025 42.0975C12.1212 42.2962 12.3723 42.4561 12.645 42.57C12.9155 42.6853 13.206 42.7464 13.5 42.75H13.9275C14.0765 42.7291 14.221 42.6835 14.355 42.615C14.4984 42.5658 14.6346 42.4977 14.76 42.4125L15.0975 42.1425C15.2962 41.9238 15.4561 41.6727 15.57 41.4C15.703 41.1193 15.7649 40.8102 15.75 40.5C15.761 40.3502 15.761 40.1998 15.75 40.05C15.7254 39.909 15.6799 39.7725 15.615 39.645C15.5701 39.5068 15.5016 39.3774 15.4125 39.2625C15.3348 39.1338 15.2443 39.0132 15.1425 38.9025C14.8261 38.5903 14.4243 38.3788 13.9878 38.2947C13.5514 38.2106 13.0997 38.2577 12.69 38.43C12.4138 38.5371 12.1615 38.6977 11.9475 38.9025C11.8457 39.0132 11.7552 39.1338 11.6775 39.2625C11.5884 39.3774 11.5199 39.5068 11.475 39.645C11.3786 39.767 11.3026 39.9037 11.25 40.05C11.239 40.1998 11.239 40.3502 11.25 40.5C11.2536 40.794 11.3147 41.0845 11.43 41.355C11.5439 41.6277 11.7038 41.8788 11.9025 42.0975ZM42.75 4.5H11.25C9.45979 4.5 7.7429 5.21116 6.47703 6.47703C5.21116 7.7429 4.5 9.45979 4.5 11.25V42.75C4.5 44.5402 5.21116 46.2571 6.47703 47.523C7.7429 48.7888 9.45979 49.5 11.25 49.5H42.75C44.5402 49.5 46.2571 48.7888 47.523 47.523C48.7888 46.2571 49.5 44.5402 49.5 42.75V11.25C49.5 9.45979 48.7888 7.7429 47.523 6.47703C46.2571 5.21116 44.5402 4.5 42.75 4.5ZM45 42.75C45 43.3467 44.7629 43.919 44.341 44.341C43.919 44.7629 43.3467 45 42.75 45H11.25C10.6533 45 10.081 44.7629 9.65901 44.341C9.23705 43.919 9 43.3467 9 42.75V36H45V42.75ZM45 31.5H9V22.5H18C18.2961 22.5017 18.5897 22.445 18.8638 22.333C19.1379 22.221 19.3873 22.056 19.5975 21.8475L22.5 19.035L28.8 26.235C29.0032 26.4667 29.2519 26.6541 29.5306 26.7857C29.8092 26.9173 30.112 26.9902 30.42 27C30.7161 27.0017 31.0097 26.945 31.2838 26.833C31.5579 26.721 31.8073 26.556 32.0175 26.3475L35.7975 22.5H45V31.5ZM45 18H34.875C34.5789 17.9983 34.2853 18.055 34.0112 18.167C33.7371 18.279 33.4877 18.444 33.2775 18.6525L30.4875 21.465L24.1875 14.265C23.977 14.0402 23.7227 13.861 23.4401 13.7385C23.1576 13.616 22.8529 13.5528 22.545 13.5528C22.2371 13.5528 21.9324 13.616 21.6499 13.7385C21.3673 13.861 21.113 14.0402 20.9025 14.265L17.0775 18H9V11.25C9 10.6533 9.23705 10.081 9.65901 9.65901C10.081 9.23705 10.6533 9 11.25 9H42.75C43.3467 9 43.919 9.23705 44.341 9.65901C44.7629 10.081 45 10.6533 45 11.25V18Z"
                      fill="#E81A65"
                    />
                  </svg>
                </div>
                <p className="text-[#2E2E2E] font-bold text-3xl font-shamel -mr-2 whitespace-nowrap">
                  تسويق مبتكر لمنتجاتك
                </p>
              </div>
              <p className="mt-6 font-ibm text-[#787878] text-lg max-w-[40ch] text-right">
                أطلق حملات إعلانية مشتركة مع مزيد لإظهار منتجاتك في مواقع
                التواصل الاجتماعي و داخل التطبيق
              </p>
            </div>
            <div className="flex xl:hidden">
              <Image
                className=""
                src="/mazeed-marketing-2.png"
                width={987}
                height={792}
              />
            </div>
          </div>

          <div className="flex flex-col xl:flex-row items-center gap-24 justify-between w-full max-w-screen-lg mx-auto mt-32">
            <div>
              <div className="flex items-center">
                <div className="bg-[#802BE724] bg-opacity-[14%] p-4 rounded-full">
                  <svg
                    width="46"
                    height="46"
                    viewBox="0 0 46 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M38.75 0.5H7.25C5.45979 0.5 3.7429 1.21116 2.47703 2.47703C1.21116 3.7429 0.5 5.45979 0.5 7.25V29.75C0.5 31.5402 1.21116 33.2571 2.47703 34.523C3.7429 35.7888 5.45979 36.5 7.25 36.5H13.19L11.885 38.75C11.49 39.4341 11.2821 40.2101 11.2821 41C11.2821 41.7899 11.49 42.5659 11.885 43.25C12.2834 43.9401 12.8578 44.512 13.5496 44.9073C14.2414 45.3026 15.0258 45.5071 15.8225 45.5H30.3575C31.1466 45.4992 31.9217 45.2909 32.6049 44.896C33.2881 44.501 33.8554 43.9334 34.25 43.25C34.645 42.5659 34.8529 41.7899 34.8529 41C34.8529 40.2101 34.645 39.4341 34.25 38.75L32.9225 36.5H38.75C40.5402 36.5 42.2571 35.7888 43.523 34.523C44.7888 33.2571 45.5 31.5402 45.5 29.75V7.25C45.5 5.45979 44.7888 3.7429 43.523 2.47703C42.2571 1.21116 40.5402 0.5 38.75 0.5ZM15.7325 41L18.5 36.5H27.5L30.2 41H15.7325ZM41 29.75C41 30.3467 40.7629 30.919 40.341 31.341C39.919 31.7629 39.3467 32 38.75 32H7.25C6.65326 32 6.08097 31.7629 5.65901 31.341C5.23705 30.919 5 30.3467 5 29.75V27.5H41V29.75ZM41 23H5V7.25C5 6.65326 5.23705 6.08097 5.65901 5.65901C6.08097 5.23705 6.65326 5 7.25 5H38.75C39.3467 5 39.919 5.23705 40.341 5.65901C40.7629 6.08097 41 6.65326 41 7.25V23Z"
                      fill="#802BE7"
                    />
                  </svg>
                </div>
                <p className="text-[#2E2E2E] font-bold text-3xl font-shamel -mr-2 text-right">
                  مخزون واحد ولوحة تحكم واحدة
                </p>
              </div>
              <p className="mt-6 font-ibm text-[#787878] text-lg max-w-[35ch] text-right">
                أربط منتجاتك مع مزيد، وتابع كل مبيعاتك من نفس لوحة تحكم متجرك
              </p>
            </div>
            <div className="flex-grow">
              <Image
                className=""
                src="/mazeed-dashboard.png"
                width={858}
                height={771}
              />
            </div>
          </div>

          <div className="mt-32 relative z-0 bg-[#802BE7] w-full max-w-screen-xl mx-auto rounded-[32px] flex flex-col xl:flex-row items-center justify-evenly py-12  xl:py-32 overflow-clip gap-16">
            <div className="bg-[#E81A65CC] absolute top-0 left-0 w-[20rem] h-[20rem] blur-[100px]  rounded-full -z-10 -ml-20 -mt-40"></div>
            <div className="bg-[#3FB8E8CC] absolute bottom-0 right-0 w-[20rem] h-[20rem] blur-[100px] rounded-full -z-10 -mr-20 -mb-40"></div>

            <div>
              <p className="font-shamel text-4xl text-white font-bold">
                +5 مليون
              </p>
              <p className="font-ibm mt-4 text-white text-opacity-70 backdrop-blur-md">
                ريال سعودي إجمالي المبيعات
              </p>
            </div>
            <div>
              <p className="font-shamel text-4xl text-white font-bold">
                +300 ألف
              </p>
              <p className="font-ibm mt-4 text-white text-opacity-70 backdrop-blur-md">
                تحميل من متجر التطبيقات
              </p>
            </div>
            <div>
              <p className="font-shamel text-4xl text-white font-bold">
                +100 ألف
              </p>
              <p className="font-ibm mt-4 text-white text-opacity-70 backdrop-blur-md">
                زائر للتطبيق شهريًا
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* easy integration section */}
      <section>
        <div className="hidden xl:block text-center pt-32">
          <h2 className="inline-block font-shamel font-bold text-3xl text-center bg-clip-text text-transparent py-2 bg-gradient-to-l from-[#3FB8E8] via-[#7462F4] via-[#802BE7] to-[#E81A65]">
            ربط سهل بدون تعقيد
          </h2>
          <p className="mt-6 font-ibm  text-center text-[#9C9C9C]">
            ربط متجرك مع
            <span className="inline-block font-shamel font-semibold mx-2  text-center bg-clip-text text-transparent py-2 bg-gradient-to-l from-[#3FB8E8] via-[#7462F4] via-[#802BE7] to-[#E81A65]">
              مزيـــــــــــــد
            </span>
            لا يتطلب مستندات إضافية ولا تعقيدات تقنية
          </p>

          <div className="flex items-center mt-24 gap-12 w-full max-w-screen-xl mx-auto pb-32">
            <div className="flex items-stretch gap-6">
              <div className="flex flex-col gap-8">
                <div className="rounded-[32px] border border-[#F8F4FE] bg-[#F9F9F9] bg-opacity-40 px-8 py-4">
                  <div className="p-3 rounded-full bg-[#8E86FF1A] w-fit">
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.333 11.6666H7.99967C7.77866 11.6666 7.5667 11.7544 7.41042 11.9107C7.25414 12.067 7.16634 12.2789 7.16634 12.5C7.16634 12.721 7.25414 12.9329 7.41042 13.0892C7.5667 13.2455 7.77866 13.3333 7.99967 13.3333H11.333C11.554 13.3333 11.766 13.2455 11.9223 13.0892C12.0785 12.9329 12.1663 12.721 12.1663 12.5C12.1663 12.2789 12.0785 12.067 11.9223 11.9107C11.766 11.7544 11.554 11.6666 11.333 11.6666ZM14.6663 3.33329H13.683C13.5111 2.847 13.1929 2.42579 12.7722 2.12741C12.3515 1.82902 11.8488 1.66808 11.333 1.66663H9.66634C9.15055 1.66808 8.64784 1.82902 8.22712 2.12741C7.8064 2.42579 7.48827 2.847 7.31634 3.33329H6.33301C5.66997 3.33329 5.03408 3.59668 4.56524 4.06553C4.0964 4.53437 3.83301 5.17025 3.83301 5.83329V15.8333C3.83301 16.4963 4.0964 17.1322 4.56524 17.6011C5.03408 18.0699 5.66997 18.3333 6.33301 18.3333H14.6663C15.3294 18.3333 15.9653 18.0699 16.4341 17.6011C16.9029 17.1322 17.1663 16.4963 17.1663 15.8333V5.83329C17.1663 5.17025 16.9029 4.53437 16.4341 4.06553C15.9653 3.59668 15.3294 3.33329 14.6663 3.33329ZM8.83301 4.16663C8.83301 3.94561 8.92081 3.73365 9.07709 3.57737C9.23337 3.42109 9.44533 3.33329 9.66634 3.33329H11.333C11.554 3.33329 11.766 3.42109 11.9223 3.57737C12.0785 3.73365 12.1663 3.94561 12.1663 4.16663V4.99996H8.83301V4.16663ZM15.4997 15.8333C15.4997 16.0543 15.4119 16.2663 15.2556 16.4225C15.0993 16.5788 14.8874 16.6666 14.6663 16.6666H6.33301C6.11199 16.6666 5.90003 16.5788 5.74375 16.4225C5.58747 16.2663 5.49967 16.0543 5.49967 15.8333V5.83329C5.49967 5.61228 5.58747 5.40032 5.74375 5.24404C5.90003 5.08776 6.11199 4.99996 6.33301 4.99996H7.16634V5.83329C7.16634 6.05431 7.25414 6.26627 7.41042 6.42255C7.5667 6.57883 7.77866 6.66663 7.99967 6.66663H12.9997C13.2207 6.66663 13.4326 6.57883 13.5889 6.42255C13.7452 6.26627 13.833 6.05431 13.833 5.83329V4.99996H14.6663C14.8874 4.99996 15.0993 5.08776 15.2556 5.24404C15.4119 5.40032 15.4997 5.61228 15.4997 5.83329V15.8333ZM12.9997 8.33329H7.99967C7.77866 8.33329 7.5667 8.42109 7.41042 8.57737C7.25414 8.73365 7.16634 8.94561 7.16634 9.16663C7.16634 9.38764 7.25414 9.5996 7.41042 9.75588C7.5667 9.91216 7.77866 9.99996 7.99967 9.99996H12.9997C13.2207 9.99996 13.4326 9.91216 13.5889 9.75588C13.7452 9.5996 13.833 9.38764 13.833 9.16663C13.833 8.94561 13.7452 8.73365 13.5889 8.57737C13.4326 8.42109 13.2207 8.33329 12.9997 8.33329Z"
                        fill="#8E86FF"
                      />
                    </svg>
                  </div>
                  <p className="mt-3 text-right font-bold text-lg font-shamel text-[#545454]">
                    مراجعة بيانات متجرك
                  </p>
                  <p className="text-right mt-2 text-[#787878] font-ibm">
                    بيانات متجرك وطرق التواصل كلها محفوظة مطلوب انك تراجعها
                  </p>
                </div>
                <div className="rounded-[32px] opacity-[15%] border border-[#F8F4FE] bg-[#F9F9F9] bg-opacity-40 px-8 py-4">
                  <div className="p-3 rounded-full bg-[#8E86FF1A] w-fit">
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.333 11.6666H7.99967C7.77866 11.6666 7.5667 11.7544 7.41042 11.9107C7.25414 12.067 7.16634 12.2789 7.16634 12.5C7.16634 12.721 7.25414 12.9329 7.41042 13.0892C7.5667 13.2455 7.77866 13.3333 7.99967 13.3333H11.333C11.554 13.3333 11.766 13.2455 11.9223 13.0892C12.0785 12.9329 12.1663 12.721 12.1663 12.5C12.1663 12.2789 12.0785 12.067 11.9223 11.9107C11.766 11.7544 11.554 11.6666 11.333 11.6666ZM14.6663 3.33329H13.683C13.5111 2.847 13.1929 2.42579 12.7722 2.12741C12.3515 1.82902 11.8488 1.66808 11.333 1.66663H9.66634C9.15055 1.66808 8.64784 1.82902 8.22712 2.12741C7.8064 2.42579 7.48827 2.847 7.31634 3.33329H6.33301C5.66997 3.33329 5.03408 3.59668 4.56524 4.06553C4.0964 4.53437 3.83301 5.17025 3.83301 5.83329V15.8333C3.83301 16.4963 4.0964 17.1322 4.56524 17.6011C5.03408 18.0699 5.66997 18.3333 6.33301 18.3333H14.6663C15.3294 18.3333 15.9653 18.0699 16.4341 17.6011C16.9029 17.1322 17.1663 16.4963 17.1663 15.8333V5.83329C17.1663 5.17025 16.9029 4.53437 16.4341 4.06553C15.9653 3.59668 15.3294 3.33329 14.6663 3.33329ZM8.83301 4.16663C8.83301 3.94561 8.92081 3.73365 9.07709 3.57737C9.23337 3.42109 9.44533 3.33329 9.66634 3.33329H11.333C11.554 3.33329 11.766 3.42109 11.9223 3.57737C12.0785 3.73365 12.1663 3.94561 12.1663 4.16663V4.99996H8.83301V4.16663ZM15.4997 15.8333C15.4997 16.0543 15.4119 16.2663 15.2556 16.4225C15.0993 16.5788 14.8874 16.6666 14.6663 16.6666H6.33301C6.11199 16.6666 5.90003 16.5788 5.74375 16.4225C5.58747 16.2663 5.49967 16.0543 5.49967 15.8333V5.83329C5.49967 5.61228 5.58747 5.40032 5.74375 5.24404C5.90003 5.08776 6.11199 4.99996 6.33301 4.99996H7.16634V5.83329C7.16634 6.05431 7.25414 6.26627 7.41042 6.42255C7.5667 6.57883 7.77866 6.66663 7.99967 6.66663H12.9997C13.2207 6.66663 13.4326 6.57883 13.5889 6.42255C13.7452 6.26627 13.833 6.05431 13.833 5.83329V4.99996H14.6663C14.8874 4.99996 15.0993 5.08776 15.2556 5.24404C15.4119 5.40032 15.4997 5.61228 15.4997 5.83329V15.8333ZM12.9997 8.33329H7.99967C7.77866 8.33329 7.5667 8.42109 7.41042 8.57737C7.25414 8.73365 7.16634 8.94561 7.16634 9.16663C7.16634 9.38764 7.25414 9.5996 7.41042 9.75588C7.5667 9.91216 7.77866 9.99996 7.99967 9.99996H12.9997C13.2207 9.99996 13.4326 9.91216 13.5889 9.75588C13.7452 9.5996 13.833 9.38764 13.833 9.16663C13.833 8.94561 13.7452 8.73365 13.5889 8.57737C13.4326 8.42109 13.2207 8.33329 12.9997 8.33329Z"
                        fill="#8E86FF"
                      />
                    </svg>
                  </div>
                  <p className="mt-3 text-right font-bold text-lg font-shamel text-[#545454]">
                    مراجعة بيانات متجرك
                  </p>
                  <p className="text-right mt-2 text-[#787878] font-ibm">
                    بيانات متجرك وطرق التواصل كلها محفوظة مطلوب انك تراجعها
                  </p>
                </div>
                <div className="rounded-[32px] opacity-[15%] border border-[#F8F4FE] bg-[#F9F9F9] bg-opacity-40 px-8 py-4">
                  <div className="p-3 rounded-full bg-[#8E86FF1A] w-fit">
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.333 11.6666H7.99967C7.77866 11.6666 7.5667 11.7544 7.41042 11.9107C7.25414 12.067 7.16634 12.2789 7.16634 12.5C7.16634 12.721 7.25414 12.9329 7.41042 13.0892C7.5667 13.2455 7.77866 13.3333 7.99967 13.3333H11.333C11.554 13.3333 11.766 13.2455 11.9223 13.0892C12.0785 12.9329 12.1663 12.721 12.1663 12.5C12.1663 12.2789 12.0785 12.067 11.9223 11.9107C11.766 11.7544 11.554 11.6666 11.333 11.6666ZM14.6663 3.33329H13.683C13.5111 2.847 13.1929 2.42579 12.7722 2.12741C12.3515 1.82902 11.8488 1.66808 11.333 1.66663H9.66634C9.15055 1.66808 8.64784 1.82902 8.22712 2.12741C7.8064 2.42579 7.48827 2.847 7.31634 3.33329H6.33301C5.66997 3.33329 5.03408 3.59668 4.56524 4.06553C4.0964 4.53437 3.83301 5.17025 3.83301 5.83329V15.8333C3.83301 16.4963 4.0964 17.1322 4.56524 17.6011C5.03408 18.0699 5.66997 18.3333 6.33301 18.3333H14.6663C15.3294 18.3333 15.9653 18.0699 16.4341 17.6011C16.9029 17.1322 17.1663 16.4963 17.1663 15.8333V5.83329C17.1663 5.17025 16.9029 4.53437 16.4341 4.06553C15.9653 3.59668 15.3294 3.33329 14.6663 3.33329ZM8.83301 4.16663C8.83301 3.94561 8.92081 3.73365 9.07709 3.57737C9.23337 3.42109 9.44533 3.33329 9.66634 3.33329H11.333C11.554 3.33329 11.766 3.42109 11.9223 3.57737C12.0785 3.73365 12.1663 3.94561 12.1663 4.16663V4.99996H8.83301V4.16663ZM15.4997 15.8333C15.4997 16.0543 15.4119 16.2663 15.2556 16.4225C15.0993 16.5788 14.8874 16.6666 14.6663 16.6666H6.33301C6.11199 16.6666 5.90003 16.5788 5.74375 16.4225C5.58747 16.2663 5.49967 16.0543 5.49967 15.8333V5.83329C5.49967 5.61228 5.58747 5.40032 5.74375 5.24404C5.90003 5.08776 6.11199 4.99996 6.33301 4.99996H7.16634V5.83329C7.16634 6.05431 7.25414 6.26627 7.41042 6.42255C7.5667 6.57883 7.77866 6.66663 7.99967 6.66663H12.9997C13.2207 6.66663 13.4326 6.57883 13.5889 6.42255C13.7452 6.26627 13.833 6.05431 13.833 5.83329V4.99996H14.6663C14.8874 4.99996 15.0993 5.08776 15.2556 5.24404C15.4119 5.40032 15.4997 5.61228 15.4997 5.83329V15.8333ZM12.9997 8.33329H7.99967C7.77866 8.33329 7.5667 8.42109 7.41042 8.57737C7.25414 8.73365 7.16634 8.94561 7.16634 9.16663C7.16634 9.38764 7.25414 9.5996 7.41042 9.75588C7.5667 9.91216 7.77866 9.99996 7.99967 9.99996H12.9997C13.2207 9.99996 13.4326 9.91216 13.5889 9.75588C13.7452 9.5996 13.833 9.38764 13.833 9.16663C13.833 8.94561 13.7452 8.73365 13.5889 8.57737C13.4326 8.42109 13.2207 8.33329 12.9997 8.33329Z"
                        fill="#8E86FF"
                      />
                    </svg>
                  </div>
                  <p className="mt-3 text-right font-bold text-lg font-shamel text-[#545454]">
                    مراجعة بيانات متجرك
                  </p>
                  <p className="text-right mt-2 text-[#787878] font-ibm">
                    بيانات متجرك وطرق التواصل كلها محفوظة مطلوب انك تراجعها
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center py-20 gap-3">
                <p className=" flex justify-center items-center p-1 w-10 h-10 bg-[#8E86FF] text-white font-bold rounded-full">
                  1
                </p>
                <div className="grow gradient-border"></div>
                <p className="opacity-20 flex justify-center items-center p-1 w-10 h-10 bg-[#8E86FF] text-white font-bold rounded-full">
                  2
                </p>
                <div className="grow gradient-border"></div>
                <p className=" opacity-20 flex justify-center items-center p-1 w-10 h-10 bg-[#8E86FF] text-white font-bold rounded-full">
                  3
                </p>
              </div>
            </div>
            <div>
              <Image className="" src="/step-1.png" width={987} height={792} />
            </div>
          </div>

          <div className="w-full justify-center flex items-center">
            <a
              href="#"
              className="font-ibm font-medium text-lg text-white bg-[#802BE7] rounded-full px-12 py-4"
            >
              اربط متجرك مجانًا
            </a>
          </div>
        </div>

        <div className="block xl:hidden text-center pt-32">
          <h2 className="inline-block font-shamel font-bold text-3xl text-center bg-clip-text text-transparent py-2 bg-gradient-to-l from-[#3FB8E8] via-[#7462F4] via-[#802BE7] to-[#E81A65]">
            ربط سهل بدون تعقيد
          </h2>
          <p className="mt-6 font-ibm  text-center text-[#9C9C9C]">
            ربط متجرك مع
            <span className="inline-block font-shamel font-semibold mx-2  text-center bg-clip-text text-transparent py-2 bg-gradient-to-l from-[#3FB8E8] via-[#7462F4] via-[#802BE7] to-[#E81A65]">
              مزيـــــــــــــد
            </span>
            لا يتطلب مستندات إضافية ولا تعقيدات تقنية
          </p>

          <div className="flex flex-col gap-12 w-full mt-12 px-12">
            <div className="w-full rounded-[32px] border border-[#F8F4FE] bg-[#F9F9F9] bg-opacity-40 px-8 py-4">
              <div className="p-3 rounded-full bg-[#8E86FF1A] w-fit">
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.333 11.6666H7.99967C7.77866 11.6666 7.5667 11.7544 7.41042 11.9107C7.25414 12.067 7.16634 12.2789 7.16634 12.5C7.16634 12.721 7.25414 12.9329 7.41042 13.0892C7.5667 13.2455 7.77866 13.3333 7.99967 13.3333H11.333C11.554 13.3333 11.766 13.2455 11.9223 13.0892C12.0785 12.9329 12.1663 12.721 12.1663 12.5C12.1663 12.2789 12.0785 12.067 11.9223 11.9107C11.766 11.7544 11.554 11.6666 11.333 11.6666ZM14.6663 3.33329H13.683C13.5111 2.847 13.1929 2.42579 12.7722 2.12741C12.3515 1.82902 11.8488 1.66808 11.333 1.66663H9.66634C9.15055 1.66808 8.64784 1.82902 8.22712 2.12741C7.8064 2.42579 7.48827 2.847 7.31634 3.33329H6.33301C5.66997 3.33329 5.03408 3.59668 4.56524 4.06553C4.0964 4.53437 3.83301 5.17025 3.83301 5.83329V15.8333C3.83301 16.4963 4.0964 17.1322 4.56524 17.6011C5.03408 18.0699 5.66997 18.3333 6.33301 18.3333H14.6663C15.3294 18.3333 15.9653 18.0699 16.4341 17.6011C16.9029 17.1322 17.1663 16.4963 17.1663 15.8333V5.83329C17.1663 5.17025 16.9029 4.53437 16.4341 4.06553C15.9653 3.59668 15.3294 3.33329 14.6663 3.33329ZM8.83301 4.16663C8.83301 3.94561 8.92081 3.73365 9.07709 3.57737C9.23337 3.42109 9.44533 3.33329 9.66634 3.33329H11.333C11.554 3.33329 11.766 3.42109 11.9223 3.57737C12.0785 3.73365 12.1663 3.94561 12.1663 4.16663V4.99996H8.83301V4.16663ZM15.4997 15.8333C15.4997 16.0543 15.4119 16.2663 15.2556 16.4225C15.0993 16.5788 14.8874 16.6666 14.6663 16.6666H6.33301C6.11199 16.6666 5.90003 16.5788 5.74375 16.4225C5.58747 16.2663 5.49967 16.0543 5.49967 15.8333V5.83329C5.49967 5.61228 5.58747 5.40032 5.74375 5.24404C5.90003 5.08776 6.11199 4.99996 6.33301 4.99996H7.16634V5.83329C7.16634 6.05431 7.25414 6.26627 7.41042 6.42255C7.5667 6.57883 7.77866 6.66663 7.99967 6.66663H12.9997C13.2207 6.66663 13.4326 6.57883 13.5889 6.42255C13.7452 6.26627 13.833 6.05431 13.833 5.83329V4.99996H14.6663C14.8874 4.99996 15.0993 5.08776 15.2556 5.24404C15.4119 5.40032 15.4997 5.61228 15.4997 5.83329V15.8333ZM12.9997 8.33329H7.99967C7.77866 8.33329 7.5667 8.42109 7.41042 8.57737C7.25414 8.73365 7.16634 8.94561 7.16634 9.16663C7.16634 9.38764 7.25414 9.5996 7.41042 9.75588C7.5667 9.91216 7.77866 9.99996 7.99967 9.99996H12.9997C13.2207 9.99996 13.4326 9.91216 13.5889 9.75588C13.7452 9.5996 13.833 9.38764 13.833 9.16663C13.833 8.94561 13.7452 8.73365 13.5889 8.57737C13.4326 8.42109 13.2207 8.33329 12.9997 8.33329Z"
                    fill="#8E86FF"
                  />
                </svg>
              </div>
              <p className="mt-3 text-right font-bold text-lg font-shamel text-[#545454]">
                ١- مراجعة بيانات متجرك
              </p>
              <p className="text-right mt-2 text-[#787878] font-ibm">
                بيانات متجرك وطرق التواصل كلها محفوظة مطلوب انك تراجعها
              </p>
              <Image
                className="mt-4"
                src="/step-1.png"
                width={987}
                height={792}
              />
            </div>
            <div className="w-full rounded-[32px]  border border-[#F8F4FE] bg-[#F9F9F9] bg-opacity-40 px-8 py-4">
              <div className="p-3 rounded-full bg-[#8E86FF1A] w-fit">
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.333 11.6666H7.99967C7.77866 11.6666 7.5667 11.7544 7.41042 11.9107C7.25414 12.067 7.16634 12.2789 7.16634 12.5C7.16634 12.721 7.25414 12.9329 7.41042 13.0892C7.5667 13.2455 7.77866 13.3333 7.99967 13.3333H11.333C11.554 13.3333 11.766 13.2455 11.9223 13.0892C12.0785 12.9329 12.1663 12.721 12.1663 12.5C12.1663 12.2789 12.0785 12.067 11.9223 11.9107C11.766 11.7544 11.554 11.6666 11.333 11.6666ZM14.6663 3.33329H13.683C13.5111 2.847 13.1929 2.42579 12.7722 2.12741C12.3515 1.82902 11.8488 1.66808 11.333 1.66663H9.66634C9.15055 1.66808 8.64784 1.82902 8.22712 2.12741C7.8064 2.42579 7.48827 2.847 7.31634 3.33329H6.33301C5.66997 3.33329 5.03408 3.59668 4.56524 4.06553C4.0964 4.53437 3.83301 5.17025 3.83301 5.83329V15.8333C3.83301 16.4963 4.0964 17.1322 4.56524 17.6011C5.03408 18.0699 5.66997 18.3333 6.33301 18.3333H14.6663C15.3294 18.3333 15.9653 18.0699 16.4341 17.6011C16.9029 17.1322 17.1663 16.4963 17.1663 15.8333V5.83329C17.1663 5.17025 16.9029 4.53437 16.4341 4.06553C15.9653 3.59668 15.3294 3.33329 14.6663 3.33329ZM8.83301 4.16663C8.83301 3.94561 8.92081 3.73365 9.07709 3.57737C9.23337 3.42109 9.44533 3.33329 9.66634 3.33329H11.333C11.554 3.33329 11.766 3.42109 11.9223 3.57737C12.0785 3.73365 12.1663 3.94561 12.1663 4.16663V4.99996H8.83301V4.16663ZM15.4997 15.8333C15.4997 16.0543 15.4119 16.2663 15.2556 16.4225C15.0993 16.5788 14.8874 16.6666 14.6663 16.6666H6.33301C6.11199 16.6666 5.90003 16.5788 5.74375 16.4225C5.58747 16.2663 5.49967 16.0543 5.49967 15.8333V5.83329C5.49967 5.61228 5.58747 5.40032 5.74375 5.24404C5.90003 5.08776 6.11199 4.99996 6.33301 4.99996H7.16634V5.83329C7.16634 6.05431 7.25414 6.26627 7.41042 6.42255C7.5667 6.57883 7.77866 6.66663 7.99967 6.66663H12.9997C13.2207 6.66663 13.4326 6.57883 13.5889 6.42255C13.7452 6.26627 13.833 6.05431 13.833 5.83329V4.99996H14.6663C14.8874 4.99996 15.0993 5.08776 15.2556 5.24404C15.4119 5.40032 15.4997 5.61228 15.4997 5.83329V15.8333ZM12.9997 8.33329H7.99967C7.77866 8.33329 7.5667 8.42109 7.41042 8.57737C7.25414 8.73365 7.16634 8.94561 7.16634 9.16663C7.16634 9.38764 7.25414 9.5996 7.41042 9.75588C7.5667 9.91216 7.77866 9.99996 7.99967 9.99996H12.9997C13.2207 9.99996 13.4326 9.91216 13.5889 9.75588C13.7452 9.5996 13.833 9.38764 13.833 9.16663C13.833 8.94561 13.7452 8.73365 13.5889 8.57737C13.4326 8.42109 13.2207 8.33329 12.9997 8.33329Z"
                    fill="#8E86FF"
                  />
                </svg>
              </div>
              <p className="mt-3 text-right font-bold text-lg font-shamel text-[#545454]">
                ٢- اختيار المنتجات من متجرك{" "}
              </p>
              <p className="text-right mt-2 text-[#787878] font-ibm">
                بيانات متجرك وطرق التواصل كلها محفوظة مطلوب انك تراجعها
              </p>
              <Image
                className="mt-4"
                src="/step-2.png"
                width={987}
                height={792}
              />
            </div>
            <div className="w-full rounded-[32px]  border border-[#F8F4FE] bg-[#F9F9F9] bg-opacity-40 px-8 py-4">
              <div className="p-3 rounded-full bg-[#8E86FF1A] w-fit">
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.333 11.6666H7.99967C7.77866 11.6666 7.5667 11.7544 7.41042 11.9107C7.25414 12.067 7.16634 12.2789 7.16634 12.5C7.16634 12.721 7.25414 12.9329 7.41042 13.0892C7.5667 13.2455 7.77866 13.3333 7.99967 13.3333H11.333C11.554 13.3333 11.766 13.2455 11.9223 13.0892C12.0785 12.9329 12.1663 12.721 12.1663 12.5C12.1663 12.2789 12.0785 12.067 11.9223 11.9107C11.766 11.7544 11.554 11.6666 11.333 11.6666ZM14.6663 3.33329H13.683C13.5111 2.847 13.1929 2.42579 12.7722 2.12741C12.3515 1.82902 11.8488 1.66808 11.333 1.66663H9.66634C9.15055 1.66808 8.64784 1.82902 8.22712 2.12741C7.8064 2.42579 7.48827 2.847 7.31634 3.33329H6.33301C5.66997 3.33329 5.03408 3.59668 4.56524 4.06553C4.0964 4.53437 3.83301 5.17025 3.83301 5.83329V15.8333C3.83301 16.4963 4.0964 17.1322 4.56524 17.6011C5.03408 18.0699 5.66997 18.3333 6.33301 18.3333H14.6663C15.3294 18.3333 15.9653 18.0699 16.4341 17.6011C16.9029 17.1322 17.1663 16.4963 17.1663 15.8333V5.83329C17.1663 5.17025 16.9029 4.53437 16.4341 4.06553C15.9653 3.59668 15.3294 3.33329 14.6663 3.33329ZM8.83301 4.16663C8.83301 3.94561 8.92081 3.73365 9.07709 3.57737C9.23337 3.42109 9.44533 3.33329 9.66634 3.33329H11.333C11.554 3.33329 11.766 3.42109 11.9223 3.57737C12.0785 3.73365 12.1663 3.94561 12.1663 4.16663V4.99996H8.83301V4.16663ZM15.4997 15.8333C15.4997 16.0543 15.4119 16.2663 15.2556 16.4225C15.0993 16.5788 14.8874 16.6666 14.6663 16.6666H6.33301C6.11199 16.6666 5.90003 16.5788 5.74375 16.4225C5.58747 16.2663 5.49967 16.0543 5.49967 15.8333V5.83329C5.49967 5.61228 5.58747 5.40032 5.74375 5.24404C5.90003 5.08776 6.11199 4.99996 6.33301 4.99996H7.16634V5.83329C7.16634 6.05431 7.25414 6.26627 7.41042 6.42255C7.5667 6.57883 7.77866 6.66663 7.99967 6.66663H12.9997C13.2207 6.66663 13.4326 6.57883 13.5889 6.42255C13.7452 6.26627 13.833 6.05431 13.833 5.83329V4.99996H14.6663C14.8874 4.99996 15.0993 5.08776 15.2556 5.24404C15.4119 5.40032 15.4997 5.61228 15.4997 5.83329V15.8333ZM12.9997 8.33329H7.99967C7.77866 8.33329 7.5667 8.42109 7.41042 8.57737C7.25414 8.73365 7.16634 8.94561 7.16634 9.16663C7.16634 9.38764 7.25414 9.5996 7.41042 9.75588C7.5667 9.91216 7.77866 9.99996 7.99967 9.99996H12.9997C13.2207 9.99996 13.4326 9.91216 13.5889 9.75588C13.7452 9.5996 13.833 9.38764 13.833 9.16663C13.833 8.94561 13.7452 8.73365 13.5889 8.57737C13.4326 8.42109 13.2207 8.33329 12.9997 8.33329Z"
                    fill="#8E86FF"
                  />
                </svg>
              </div>
              <p className="mt-3 text-right font-bold text-lg font-shamel text-[#545454]">
                ٣- اعتماد الطلب من فريق مزيد
              </p>
              <p className="text-right mt-2 text-[#787878] font-ibm">
                بيانات متجرك وطرق التواصل كلها محفوظة مطلوب انك تراجعها
              </p>
              <Image
                className="mt-4"
                src="/step-3.png"
                width={987}
                height={792}
              />
            </div>
          </div>

          <div className="w-full mt-12 justify-center flex items-center">
            <a
              href="#"
              className="font-ibm font-medium text-lg text-white bg-[#802BE7] rounded-full px-12 py-4"
            >
              اربط متجرك مجانًا
            </a>
          </div>
        </div>
      </section>

      {/* trust section */}
      <section>
        <div className="pt-32 pb-64 text-center relative z-0 overflow-hidden">
          <h2 className="inline-block font-shamel font-bold text-2xl text-center bg-clip-text text-[#2E2E2E] py-2">
            موثوق من اشهر العلامات التجارية
          </h2>
          <div className="mt-24 group">
            <div className="flex items-center gap-4 ltr  transform group-hover:-translate-x-[15%] transition-all duration-[2300ms] ease-in-out">
              <div className="flex-shrink-0 w-[15%] ml-[5%]">
                <Image
                  className=""
                  src="/store-1.png"
                  width={550}
                  height={550}
                />
              </div>
              <div className="flex-shrink-0 w-[15%]">
                <Image
                  className=""
                  src="/store-2.png"
                  width={550}
                  height={550}
                />
              </div>
              <div className="flex-shrink-0 w-1/4 group-hover:w-[15%] transition-all duration-[2300ms]">
                <Image
                  className=""
                  src="/store-3.png"
                  width={550}
                  height={550}
                />
              </div>
              <div className="flex-shrink-0 w-[15%] group-hover:w-1/4 transition-all duration-[2300ms]">
                <Image
                  className=""
                  src="/store-4.png"
                  width={550}
                  height={550}
                />
              </div>
              <div className="flex-shrink-0 w-[15%]">
                <Image
                  className=""
                  src="/store-5.png"
                  width={550}
                  height={550}
                />
              </div>
              <div className="flex-shrink-0 w-[15%]">
                <Image
                  className=""
                  src="/store-6.png"
                  width={550}
                  height={550}
                />
              </div>
              <div className="flex-shrink-0 w-[15%]">
                <Image
                  className=""
                  src="/store-7.png"
                  width={550}
                  height={550}
                />
              </div>
            </div>
          </div>
          {/* pattern */}
          <div className="absolute inset-0 -z-10">
            <svg
              width="1728"
              height="1155"
              viewBox="0 0 1728 1155"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1332.43 944.341L1331.91 925.281C1327.84 773.942 1070.74 701.77 801.661 776.435L766.812 786.105C514.213 856.199 273.305 787.693 271.604 645.286L271.209 612.175C269.934 505.434 109.336 444.419 -84.7552 476.935V476.935"
                stroke="url(#paint0_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1344.84 933.853L1344.33 914.793C1340.26 763.453 1083.15 691.281 814.075 765.947L779.226 775.617C526.627 845.71 285.719 777.205 284.018 634.798L283.623 601.687C282.348 494.946 121.75 433.93 -72.3411 466.447V466.447"
                stroke="url(#paint1_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1358 923.751L1357.49 904.691C1353.42 753.352 1096.31 681.18 827.238 755.845L792.389 765.515C539.79 835.609 298.882 767.103 297.181 624.696L296.786 591.585C295.511 484.844 134.913 423.829 -59.1781 456.345V456.345"
                stroke="url(#paint2_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1370.41 913.261L1369.9 894.201C1365.83 742.862 1108.72 670.689 839.644 745.355L804.795 755.025C552.197 825.119 311.289 756.613 309.588 614.205L309.193 581.095C307.918 474.354 147.32 413.338 -46.7712 445.854V445.854"
                stroke="url(#paint3_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1382.8 902.77L1382.29 883.711C1378.22 732.371 1121.11 660.199 852.037 734.865L817.188 744.535C564.589 814.628 323.681 746.123 321.98 603.716L321.585 570.605C320.31 463.864 159.712 402.848 -34.3791 435.365V435.365"
                stroke="url(#paint4_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1395.2 892.278L1394.69 873.219C1390.62 721.879 1133.51 649.707 864.434 724.373L829.585 734.043C576.987 804.136 336.079 735.63 334.378 593.223L333.983 560.112C332.708 453.371 172.11 392.356 -21.9813 424.872V424.872"
                stroke="url(#paint5_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1407.6 881.79L1407.09 862.73C1403.02 711.391 1145.92 639.219 876.839 713.884L841.99 723.555C589.392 793.648 348.483 725.142 346.783 582.735L346.388 549.624C345.113 442.883 184.515 381.868 -9.57651 414.384V414.384"
                stroke="url(#paint6_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1420 871.3L1419.49 852.24C1415.42 700.9 1158.31 628.728 889.233 703.394L854.384 713.064C601.785 783.158 360.877 714.652 359.176 572.245L358.781 539.134C357.506 432.393 196.908 371.377 2.81654 403.894V403.894"
                stroke="url(#paint7_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1432.41 860.813L1431.9 841.754C1427.83 690.414 1170.72 618.242 901.648 692.908L866.799 702.578C614.2 772.671 373.292 704.165 371.591 561.758L371.196 528.647C369.921 421.906 209.323 360.891 15.2318 393.407V393.407"
                stroke="url(#paint8_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1444.79 850.319L1444.28 831.26C1440.21 679.92 1183.1 607.748 914.023 682.414L879.174 692.084C626.575 762.177 385.667 693.671 383.966 551.264L383.571 518.153C382.296 411.412 221.698 350.397 27.6068 382.913V382.913"
                stroke="url(#paint9_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1457.18 839.827L1456.67 820.767C1452.6 669.428 1195.49 597.256 926.412 671.921L891.564 681.592C638.965 751.685 398.056 683.179 396.356 540.772L395.961 507.661C394.686 400.92 234.088 339.905 39.9964 372.421V372.421"
                stroke="url(#paint10_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1469.59 829.339L1469.08 810.279C1465.01 658.94 1207.9 586.767 938.828 661.433L903.98 671.103C651.381 741.197 410.472 672.691 408.772 530.284L408.377 497.173C407.102 390.432 246.504 329.416 52.4124 361.933V361.933"
                stroke="url(#paint11_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1481.98 818.847L1481.47 799.787C1477.4 648.448 1220.29 576.275 951.219 650.941L916.37 660.611C663.772 730.704 422.863 662.199 421.163 519.791L420.767 486.68C419.493 379.94 258.894 318.924 64.803 351.44V351.44"
                stroke="url(#paint12_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1494.39 808.358L1493.88 789.299C1489.81 637.959 1232.7 565.787 963.627 640.453L928.778 650.123C676.18 720.216 435.271 651.71 433.571 509.303L433.175 476.192C431.901 369.451 271.302 308.436 77.2111 340.952V340.952"
                stroke="url(#paint13_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1506.78 797.864L1506.27 778.804C1502.2 627.465 1245.09 555.293 976.016 629.958L941.167 639.629C688.569 709.722 447.66 641.216 445.96 498.809L445.564 465.698C444.29 358.957 283.691 297.942 89.6 330.458V330.458"
                stroke="url(#paint14_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1518.9 787.624L1518.39 768.564C1514.32 617.225 1257.21 545.053 988.133 619.718L953.284 629.388C700.686 699.482 459.777 630.976 458.077 488.569L457.681 455.458C456.407 348.717 295.808 287.702 101.717 320.218V320.218"
                stroke="url(#paint15_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1531 777.384L1530.49 758.324C1526.42 606.984 1269.31 534.812 1000.23 609.478L965.384 619.148C712.785 689.242 471.877 620.736 470.176 478.329L469.781 445.218C468.506 338.477 307.908 277.461 113.817 309.978V309.978"
                stroke="url(#paint16_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1543.09 767.14L1542.58 748.08C1538.51 596.74 1281.4 524.568 1012.33 599.234L977.48 608.904C724.881 678.997 483.972 610.491 482.272 468.084L481.876 434.973C480.602 328.233 320.003 267.217 125.912 299.733V299.733"
                stroke="url(#paint17_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1555.19 756.899L1554.68 737.84C1550.61 586.5 1293.5 514.328 1024.43 588.994L989.578 598.664C736.98 668.757 496.072 600.251 494.371 457.844L493.976 424.733C492.702 317.992 332.103 256.977 138.012 289.493V289.493"
                stroke="url(#paint18_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1567.31 746.657L1566.79 727.598C1562.72 576.258 1305.62 504.086 1036.54 578.752L1001.69 588.422C749.094 658.515 508.186 590.009 506.485 447.602L506.09 414.491C504.815 307.75 344.217 246.735 150.126 279.251V279.251"
                stroke="url(#paint19_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1579.41 736.415L1578.9 717.355C1574.83 566.016 1317.72 493.844 1048.64 568.509L1013.79 578.18C761.195 648.273 520.287 579.767 518.586 437.36L518.191 404.249C516.916 297.508 356.318 236.492 162.227 269.009V269.009"
                stroke="url(#paint20_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1591.51 726.171L1590.99 707.111C1586.92 555.772 1329.82 483.599 1060.74 558.265L1025.89 567.935C773.293 638.029 532.385 569.523 530.684 427.116L530.289 394.005C529.014 287.264 368.416 226.248 174.325 258.765V258.765"
                stroke="url(#paint21_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1603.63 715.933L1603.12 696.873C1599.05 545.533 1341.94 473.361 1072.87 548.027L1038.02 557.697C785.42 627.79 544.512 559.285 542.811 416.877L542.416 383.766C541.141 277.026 380.543 216.01 186.452 248.526V248.526"
                stroke="url(#paint22_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1615.74 705.692L1615.23 686.633C1611.16 535.293 1354.05 463.121 1084.97 537.787L1050.12 547.457C797.525 617.55 556.617 549.044 554.916 406.637L554.521 373.526C553.246 266.785 392.648 205.77 198.557 238.286V238.286"
                stroke="url(#paint23_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1627.83 695.444L1627.31 676.385C1623.24 525.045 1366.14 452.873 1097.06 527.539L1062.21 537.209C809.614 607.302 568.705 538.796 567.005 396.389L566.609 363.278C565.335 256.537 404.736 195.522 210.645 228.038V228.038"
                stroke="url(#paint24_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1639.96 685.208L1639.44 666.148C1635.37 514.809 1378.27 442.637 1109.19 517.302L1074.34 526.972C821.742 597.066 580.834 528.56 579.133 386.153L578.738 353.042C577.464 246.301 416.865 185.285 222.774 217.802V217.802"
                stroke="url(#paint25_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1652.03 674.96L1651.52 655.9C1647.45 504.561 1390.34 432.389 1121.26 507.054L1086.41 516.725C833.816 586.818 592.908 518.312 591.207 375.905L590.812 342.794C589.537 236.053 428.939 175.037 234.848 207.554V207.554"
                stroke="url(#paint26_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1664.15 664.723L1663.64 645.664C1659.57 494.324 1402.46 422.152 1133.38 496.818L1098.53 506.488C845.935 576.582 605.027 508.075 603.327 365.668L602.931 332.557C601.657 225.816 441.058 164.801 246.967 197.317V197.317"
                stroke="url(#paint27_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <path
                d="M1676.26 654.481L1675.75 635.422C1671.68 484.082 1414.57 411.91 1145.49 486.576L1110.65 496.246C858.047 566.339 617.139 497.834 615.438 355.426L615.043 322.315C613.768 215.575 453.17 154.559 259.079 187.075V187.075"
                stroke="url(#paint28_linear_483_50481)"
                stroke-opacity="0.3"
                stroke-linecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_483_50481"
                  x1="1267.57"
                  y1="914.139"
                  x2="231.94"
                  y2="134.067"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_483_50481"
                  x1="1279.99"
                  y1="903.651"
                  x2="244.354"
                  y2="123.579"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_483_50481"
                  x1="1293.15"
                  y1="893.55"
                  x2="257.517"
                  y2="113.477"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_483_50481"
                  x1="1305.56"
                  y1="883.059"
                  x2="269.924"
                  y2="102.987"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_483_50481"
                  x1="1317.95"
                  y1="872.569"
                  x2="282.316"
                  y2="92.4969"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_483_50481"
                  x1="1330.35"
                  y1="862.077"
                  x2="294.714"
                  y2="82.0042"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear_483_50481"
                  x1="1342.75"
                  y1="851.589"
                  x2="307.119"
                  y2="71.5164"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint7_linear_483_50481"
                  x1="1355.15"
                  y1="841.098"
                  x2="319.512"
                  y2="61.026"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint8_linear_483_50481"
                  x1="1367.56"
                  y1="830.612"
                  x2="331.927"
                  y2="50.5397"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint9_linear_483_50481"
                  x1="1379.94"
                  y1="820.118"
                  x2="344.302"
                  y2="40.0456"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint10_linear_483_50481"
                  x1="1392.33"
                  y1="809.626"
                  x2="356.692"
                  y2="29.5534"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint11_linear_483_50481"
                  x1="1404.74"
                  y1="799.137"
                  x2="369.108"
                  y2="19.0651"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint12_linear_483_50481"
                  x1="1417.13"
                  y1="788.645"
                  x2="381.498"
                  y2="8.57288"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint13_linear_483_50481"
                  x1="1429.54"
                  y1="778.157"
                  x2="393.906"
                  y2="-1.91541"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint14_linear_483_50481"
                  x1="1441.93"
                  y1="767.663"
                  x2="406.295"
                  y2="-12.4096"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint15_linear_483_50481"
                  x1="1454.05"
                  y1="757.423"
                  x2="418.412"
                  y2="-22.6496"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint16_linear_483_50481"
                  x1="1466.15"
                  y1="747.182"
                  x2="430.512"
                  y2="-32.89"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint17_linear_483_50481"
                  x1="1478.24"
                  y1="736.938"
                  x2="442.607"
                  y2="-43.1342"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint18_linear_483_50481"
                  x1="1490.34"
                  y1="726.698"
                  x2="454.707"
                  y2="-53.3747"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint19_linear_483_50481"
                  x1="1502.45"
                  y1="716.456"
                  x2="466.821"
                  y2="-63.6165"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint20_linear_483_50481"
                  x1="1514.56"
                  y1="706.214"
                  x2="478.922"
                  y2="-73.859"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint21_linear_483_50481"
                  x1="1526.65"
                  y1="695.969"
                  x2="491.02"
                  y2="-84.1031"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint22_linear_483_50481"
                  x1="1538.78"
                  y1="685.731"
                  x2="503.147"
                  y2="-94.3411"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint23_linear_483_50481"
                  x1="1550.89"
                  y1="675.491"
                  x2="515.252"
                  y2="-104.582"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint24_linear_483_50481"
                  x1="1562.97"
                  y1="665.243"
                  x2="527.34"
                  y2="-114.829"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint25_linear_483_50481"
                  x1="1575.1"
                  y1="655.007"
                  x2="539.469"
                  y2="-125.066"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint26_linear_483_50481"
                  x1="1587.18"
                  y1="644.758"
                  x2="551.543"
                  y2="-135.314"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint27_linear_483_50481"
                  x1="1599.3"
                  y1="634.522"
                  x2="563.662"
                  y2="-145.55"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint28_linear_483_50481"
                  x1="1611.41"
                  y1="624.28"
                  x2="575.774"
                  y2="-155.792"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.264756"
                    stop-color="#3FB8E8"
                    stop-opacity="0.46"
                  />
                  <stop
                    offset="0.467882"
                    stop-color="#802BE7"
                    stop-opacity="0.63"
                  />
                  <stop
                    offset="0.6658"
                    stop-color="#E81A65"
                    stop-opacity="0.36"
                  />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="mt-24 text-center">
          <h2 className="inline-block font-shamel font-bold text-2xl text-center bg-clip-text text-[#2E2E2E] py-2">
            تجار مزيد
          </h2>
          <p className="mt-2 font-ibm  text-center text-[#9C9C9C]">
            مبيعاتهم زادت، ومبيعاتك بعد
            <span className="inline-block font-shamel font-semibold mx-2  text-center bg-clip-text text-transparent py-2 bg-gradient-to-l from-[#3FB8E8] via-[#7462F4] via-[#802BE7] to-[#E81A65]">
              مزيـــــــــــــد
            </span>
          </p>
          <div className="flex justify-center gap-12 flex-wrap mt-12 px-12">
            <div className="flex flex-col items-start bg-[#F9F9F966] bg-opacity-40 px-6 py-2 rounded-[32px] border-[#F8F4FE] border">
              <Image className="w-16" src="/shift.png" width={64} height={64} />
              <p className="mt-2 font-shamel font-bold text-lg text-[#2E2E2E]">
                مشاري
              </p>
              <p className="mt-1 text-[#2E2E2E] font-ibm font-light">
                شريك مؤسس في شفت
              </p>
              <p className="w-[45ch] text-[#787878] mt-4 text-right font-ibm ">
                مؤخراً ظهر لنا بعض التحديات في معدل النمو والتوسع وبدأنا نبحث عن
                أي فرصة تساهم في زيادة عدد الطلبات وبالتأكيد فكرة كفكرة مزيد
                لفتت انتباهنا ، خلال فترة بسيطة وفي مرحلة تجربة التطبيق وصلنا
                عشرات الطلبات من خلال حجز مساحة إعلانية في التطبيق (بانر)
                ومنشورات مشتركة في حسابات شفت و مزيد في الانستجرام مما أدى إلى
                زيادة التفاعل و عدد المتابعين
              </p>
            </div>
            <div className="flex flex-col items-start bg-[#F9F9F966] bg-opacity-40 px-6 py-2 rounded-[32px] border-[#F8F4FE] border">
              <Image className="w-16" src="/afkar.png" width={64} height={64} />
              <p className="mt-2 font-shamel font-bold text-lg text-[#2E2E2E]">
                عمار العليو
              </p>
              <p className="mt-1 text-[#2E2E2E] font-ibm font-light">
                مؤسس متجر أفكار{" "}
              </p>
              <p className="w-[45ch] text-[#787878] mt-4 text-right font-ibm ">
                في متجر أفكار، نحن سعيدين بإضافة منتجاتنا على مزيد حيث ساهم في
                زيادة مبيعاتنا و بالوصول لعدد عملاء أكثر في أنحاء المملكة.مزيد
                يعتبر فكرة رائعة جدًا تصب في مصلحة العملاء النهائيين والتجار
              </p>
            </div>
            <div className="flex flex-col items-start bg-[#F9F9F966] bg-opacity-40 px-6 py-2 rounded-[32px] border-[#F8F4FE] border">
              <Image
                className="w-16"
                src="/sulinda.png"
                width={64}
                height={64}
              />
              <p className="mt-2 font-shamel font-bold text-lg text-[#2E2E2E]">
                د.عبدالرحمن القحطاني
              </p>
              <p className="mt-1 text-[#2E2E2E] font-ibm font-light">
                مالك ومؤسس شركة سوليندا{" "}
              </p>
              <p className="w-[45ch] text-[#787878] mt-4 text-right font-ibm ">
                لأننا نؤمن أن الانتشار الناجح يكون عبر قنوات البيع ذات الجودة
                والمصداقية التي تجذب العملاء لأفضل المتاجر والمنتجات وتكسب
                ثقتهم، أسعدنا الانضمام لـ مزيد كي نكون جزء من هذه الثقة والتي
                انعكست بزيادة العملاء والطلبات وحققت رضا العميل منذ اللحظة
                الأولى من انضمامنا
              </p>
            </div>
            <div className="flex flex-col items-start bg-[#F9F9F966] bg-opacity-40 px-6 py-2 rounded-[32px] border-[#F8F4FE] border">
              <Image
                className="w-16"
                src="/tea-yara.png"
                width={64}
                height={64}
              />
              <p className="mt-2 font-shamel font-bold text-lg text-[#2E2E2E]">
                عبدالملك المغلوث{" "}
              </p>
              <p className="mt-1 text-[#2E2E2E] font-ibm font-light">
                مؤسس شاي يارا{" "}
              </p>
              <p className="w-[45ch] text-[#787878] mt-4 text-right font-ibm ">
                مزيد فتح لنا بابا كبيرا لعرض منتجاتنا بشكل يتماشى مع احتياج
                العميل المحلي الذي يرغب في التسوق والحصول على افضل المنتجات من
                مكان واحد. بالإضافه إلى ذلك، ساعدنا في الوصول لشريحة أكبر من
                العملاء مما أثر إيجاباً على معرفة الناس بنا
              </p>
            </div>
            <div className="flex flex-col items-start bg-[#F9F9F966] bg-opacity-40 px-6 py-2 rounded-[32px] border-[#F8F4FE] border">
              <Image className="w-16" src="/afkar.png" width={64} height={64} />
              <p className="mt-2 font-shamel font-bold text-lg text-[#2E2E2E]">
                عمار العليو{" "}
              </p>
              <p className="mt-1 text-[#2E2E2E] font-ibm font-light">
                شريك مؤسس في شفت{" "}
              </p>
              <p className="w-[45ch] text-[#787878] mt-4 text-right font-ibm ">
                 على مزيد حيث ساهم في زيادة مبيعاتنا و بالوصول لعدد عملاء أكثر
                في أنحاء المملكة. مزيد يعتبر فكرة رائعة جدًا تصب في مصلحة
                العملاء النهائيين والتجار
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* faq */}
      <section>
        <div className="bg-[#FBFBFB] mt-32 text-center py-12 px-24 max-w-screen-2xl mx-auto rounded-[64px]">
          <h2 className="text-[#2E2E2E] font-bold font-shamel text-2xl">
            الاسئلة الشائعة
          </h2>
          <div className="mt-24 flex items-center justify-between gap-12">
            <div className="w-1/2">
              <ul className="flex flex-col gap-2">
                <li className="rounded-lg border border-[#f4f2f2] px-6 py-4 flex items-center font-ibm text-[#545454]">
                  <p className="grow text-right font-medium">
                    كم تكاليف نقل متجري من منصة اخرى إلى زد؟
                  </p>
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.667 7.33268H8.66699V3.33268C8.66699 3.15587 8.59675 2.9863 8.47173 2.86128C8.34671 2.73625 8.17714 2.66602 8.00033 2.66602C7.82351 2.66602 7.65394 2.73625 7.52892 2.86128C7.4039 2.9863 7.33366 3.15587 7.33366 3.33268V7.33268H3.33366C3.15685 7.33268 2.98728 7.40292 2.86225 7.52794C2.73723 7.65297 2.66699 7.82254 2.66699 7.99935C2.66699 8.17616 2.73723 8.34573 2.86225 8.47075C2.98728 8.59578 3.15685 8.66602 3.33366 8.66602H7.33366V12.666C7.33366 12.8428 7.4039 13.0124 7.52892 13.1374C7.65394 13.2624 7.82351 13.3327 8.00033 13.3327C8.17714 13.3327 8.34671 13.2624 8.47173 13.1374C8.59675 13.0124 8.66699 12.8428 8.66699 12.666V8.66602H12.667C12.8438 8.66602 13.0134 8.59578 13.1384 8.47075C13.2634 8.34573 13.3337 8.17616 13.3337 7.99935C13.3337 7.82254 13.2634 7.65297 13.1384 7.52794C13.0134 7.40292 12.8438 7.33268 12.667 7.33268Z"
                      fill="#545454"
                    />
                  </svg>
                </li>
                <li className="rounded-lg border border-[#f4f2f2] px-6 py-4 flex items-center font-ibm text-[#545454]">
                  <p className="grow text-right font-medium">
                    كم تكاليف نقل متجري من منصة اخرى إلى زد؟
                  </p>
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.667 7.33268H8.66699V3.33268C8.66699 3.15587 8.59675 2.9863 8.47173 2.86128C8.34671 2.73625 8.17714 2.66602 8.00033 2.66602C7.82351 2.66602 7.65394 2.73625 7.52892 2.86128C7.4039 2.9863 7.33366 3.15587 7.33366 3.33268V7.33268H3.33366C3.15685 7.33268 2.98728 7.40292 2.86225 7.52794C2.73723 7.65297 2.66699 7.82254 2.66699 7.99935C2.66699 8.17616 2.73723 8.34573 2.86225 8.47075C2.98728 8.59578 3.15685 8.66602 3.33366 8.66602H7.33366V12.666C7.33366 12.8428 7.4039 13.0124 7.52892 13.1374C7.65394 13.2624 7.82351 13.3327 8.00033 13.3327C8.17714 13.3327 8.34671 13.2624 8.47173 13.1374C8.59675 13.0124 8.66699 12.8428 8.66699 12.666V8.66602H12.667C12.8438 8.66602 13.0134 8.59578 13.1384 8.47075C13.2634 8.34573 13.3337 8.17616 13.3337 7.99935C13.3337 7.82254 13.2634 7.65297 13.1384 7.52794C13.0134 7.40292 12.8438 7.33268 12.667 7.33268Z"
                      fill="#545454"
                    />
                  </svg>
                </li>
                <li className="rounded-lg border border-[#f4f2f2] px-6 py-4 flex items-center font-ibm text-[#545454]">
                  <p className="grow text-right font-medium">
                    إيش تطبيق مزيد للعملاء؟{" "}
                  </p>
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.667 7.33268H8.66699V3.33268C8.66699 3.15587 8.59675 2.9863 8.47173 2.86128C8.34671 2.73625 8.17714 2.66602 8.00033 2.66602C7.82351 2.66602 7.65394 2.73625 7.52892 2.86128C7.4039 2.9863 7.33366 3.15587 7.33366 3.33268V7.33268H3.33366C3.15685 7.33268 2.98728 7.40292 2.86225 7.52794C2.73723 7.65297 2.66699 7.82254 2.66699 7.99935C2.66699 8.17616 2.73723 8.34573 2.86225 8.47075C2.98728 8.59578 3.15685 8.66602 3.33366 8.66602H7.33366V12.666C7.33366 12.8428 7.4039 13.0124 7.52892 13.1374C7.65394 13.2624 7.82351 13.3327 8.00033 13.3327C8.17714 13.3327 8.34671 13.2624 8.47173 13.1374C8.59675 13.0124 8.66699 12.8428 8.66699 12.666V8.66602H12.667C12.8438 8.66602 13.0134 8.59578 13.1384 8.47075C13.2634 8.34573 13.3337 8.17616 13.3337 7.99935C13.3337 7.82254 13.2634 7.65297 13.1384 7.52794C13.0134 7.40292 12.8438 7.33268 12.667 7.33268Z"
                      fill="#545454"
                    />
                  </svg>
                </li>
                <li className="rounded-lg border border-[#f4f2f2] px-6 py-4 flex items-center font-ibm text-[#545454]">
                  <p className="grow text-right font-medium">
                    هل يتطلب حساب مختلف عن زد لإضافة منتجاتي في مزيد؟{" "}
                  </p>
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.667 7.33268H8.66699V3.33268C8.66699 3.15587 8.59675 2.9863 8.47173 2.86128C8.34671 2.73625 8.17714 2.66602 8.00033 2.66602C7.82351 2.66602 7.65394 2.73625 7.52892 2.86128C7.4039 2.9863 7.33366 3.15587 7.33366 3.33268V7.33268H3.33366C3.15685 7.33268 2.98728 7.40292 2.86225 7.52794C2.73723 7.65297 2.66699 7.82254 2.66699 7.99935C2.66699 8.17616 2.73723 8.34573 2.86225 8.47075C2.98728 8.59578 3.15685 8.66602 3.33366 8.66602H7.33366V12.666C7.33366 12.8428 7.4039 13.0124 7.52892 13.1374C7.65394 13.2624 7.82351 13.3327 8.00033 13.3327C8.17714 13.3327 8.34671 13.2624 8.47173 13.1374C8.59675 13.0124 8.66699 12.8428 8.66699 12.666V8.66602H12.667C12.8438 8.66602 13.0134 8.59578 13.1384 8.47075C13.2634 8.34573 13.3337 8.17616 13.3337 7.99935C13.3337 7.82254 13.2634 7.65297 13.1384 7.52794C13.0134 7.40292 12.8438 7.33268 12.667 7.33268Z"
                      fill="#545454"
                    />
                  </svg>
                </li>
                <li className="rounded-lg border border-[#f4f2f2] px-6 py-4 flex items-center font-ibm text-[#545454]">
                  <p className="grow text-right font-medium">
                    هل ستظهر كل منتجاتي في مزيد بشكل تلقائي؟{" "}
                  </p>
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.667 7.33268H8.66699V3.33268C8.66699 3.15587 8.59675 2.9863 8.47173 2.86128C8.34671 2.73625 8.17714 2.66602 8.00033 2.66602C7.82351 2.66602 7.65394 2.73625 7.52892 2.86128C7.4039 2.9863 7.33366 3.15587 7.33366 3.33268V7.33268H3.33366C3.15685 7.33268 2.98728 7.40292 2.86225 7.52794C2.73723 7.65297 2.66699 7.82254 2.66699 7.99935C2.66699 8.17616 2.73723 8.34573 2.86225 8.47075C2.98728 8.59578 3.15685 8.66602 3.33366 8.66602H7.33366V12.666C7.33366 12.8428 7.4039 13.0124 7.52892 13.1374C7.65394 13.2624 7.82351 13.3327 8.00033 13.3327C8.17714 13.3327 8.34671 13.2624 8.47173 13.1374C8.59675 13.0124 8.66699 12.8428 8.66699 12.666V8.66602H12.667C12.8438 8.66602 13.0134 8.59578 13.1384 8.47075C13.2634 8.34573 13.3337 8.17616 13.3337 7.99935C13.3337 7.82254 13.2634 7.65297 13.1384 7.52794C13.0134 7.40292 12.8438 7.33268 12.667 7.33268Z"
                      fill="#545454"
                    />
                  </svg>
                </li>
                <li className="rounded-lg border border-[#f4f2f2] px-6 py-4 flex items-center font-ibm text-[#545454]">
                  <p className="grow text-right font-medium">
                    هل هناك رسوم لعرض منتجاتي في مزيد؟{" "}
                  </p>
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.667 7.33268H8.66699V3.33268C8.66699 3.15587 8.59675 2.9863 8.47173 2.86128C8.34671 2.73625 8.17714 2.66602 8.00033 2.66602C7.82351 2.66602 7.65394 2.73625 7.52892 2.86128C7.4039 2.9863 7.33366 3.15587 7.33366 3.33268V7.33268H3.33366C3.15685 7.33268 2.98728 7.40292 2.86225 7.52794C2.73723 7.65297 2.66699 7.82254 2.66699 7.99935C2.66699 8.17616 2.73723 8.34573 2.86225 8.47075C2.98728 8.59578 3.15685 8.66602 3.33366 8.66602H7.33366V12.666C7.33366 12.8428 7.4039 13.0124 7.52892 13.1374C7.65394 13.2624 7.82351 13.3327 8.00033 13.3327C8.17714 13.3327 8.34671 13.2624 8.47173 13.1374C8.59675 13.0124 8.66699 12.8428 8.66699 12.666V8.66602H12.667C12.8438 8.66602 13.0134 8.59578 13.1384 8.47075C13.2634 8.34573 13.3337 8.17616 13.3337 7.99935C13.3337 7.82254 13.2634 7.65297 13.1384 7.52794C13.0134 7.40292 12.8438 7.33268 12.667 7.33268Z"
                      fill="#545454"
                    />
                  </svg>
                </li>
                <li className="rounded-lg border border-[#f4f2f2] px-6 py-4 flex items-center font-ibm text-[#545454]">
                  <p className="grow text-right font-medium">
                    كيف أقوم بإضافة منتجاتي لمنصة مزيد؟{" "}
                  </p>
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.667 7.33268H8.66699V3.33268C8.66699 3.15587 8.59675 2.9863 8.47173 2.86128C8.34671 2.73625 8.17714 2.66602 8.00033 2.66602C7.82351 2.66602 7.65394 2.73625 7.52892 2.86128C7.4039 2.9863 7.33366 3.15587 7.33366 3.33268V7.33268H3.33366C3.15685 7.33268 2.98728 7.40292 2.86225 7.52794C2.73723 7.65297 2.66699 7.82254 2.66699 7.99935C2.66699 8.17616 2.73723 8.34573 2.86225 8.47075C2.98728 8.59578 3.15685 8.66602 3.33366 8.66602H7.33366V12.666C7.33366 12.8428 7.4039 13.0124 7.52892 13.1374C7.65394 13.2624 7.82351 13.3327 8.00033 13.3327C8.17714 13.3327 8.34671 13.2624 8.47173 13.1374C8.59675 13.0124 8.66699 12.8428 8.66699 12.666V8.66602H12.667C12.8438 8.66602 13.0134 8.59578 13.1384 8.47075C13.2634 8.34573 13.3337 8.17616 13.3337 7.99935C13.3337 7.82254 13.2634 7.65297 13.1384 7.52794C13.0134 7.40292 12.8438 7.33268 12.667 7.33268Z"
                      fill="#545454"
                    />
                  </svg>
                </li>{" "}
                <li className="rounded-lg border border-[#f4f2f2] px-6 py-4 flex items-center font-ibm text-[#545454]">
                  <p className="grow text-right font-medium">
                    هل يظهر للعملاء تقييمي كبائع؟{" "}
                  </p>
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.667 7.33268H8.66699V3.33268C8.66699 3.15587 8.59675 2.9863 8.47173 2.86128C8.34671 2.73625 8.17714 2.66602 8.00033 2.66602C7.82351 2.66602 7.65394 2.73625 7.52892 2.86128C7.4039 2.9863 7.33366 3.15587 7.33366 3.33268V7.33268H3.33366C3.15685 7.33268 2.98728 7.40292 2.86225 7.52794C2.73723 7.65297 2.66699 7.82254 2.66699 7.99935C2.66699 8.17616 2.73723 8.34573 2.86225 8.47075C2.98728 8.59578 3.15685 8.66602 3.33366 8.66602H7.33366V12.666C7.33366 12.8428 7.4039 13.0124 7.52892 13.1374C7.65394 13.2624 7.82351 13.3327 8.00033 13.3327C8.17714 13.3327 8.34671 13.2624 8.47173 13.1374C8.59675 13.0124 8.66699 12.8428 8.66699 12.666V8.66602H12.667C12.8438 8.66602 13.0134 8.59578 13.1384 8.47075C13.2634 8.34573 13.3337 8.17616 13.3337 7.99935C13.3337 7.82254 13.2634 7.65297 13.1384 7.52794C13.0134 7.40292 12.8438 7.33268 12.667 7.33268Z"
                      fill="#545454"
                    />
                  </svg>
                </li>
              </ul>
            </div>
            <div className="w-1/2 p-12">
              <Image src="/faq.png" width={1475} height={1397} />
            </div>
          </div>
        </div>

        <div className="py-24 mt-12 flex gap-1.5 justify-center items-center">
          <div className="rounded-full w-12 h-12 bg-[#3FB8E8]"></div>
          <div className="rounded-full w-12 h-12 bg-[#7462F4]"></div>
          <div className="rounded-full w-12 h-12 bg-[#E81A65]"></div>
        </div>
      </section>

      {/* footer */}
      <footer>
        <div className="bg-[#802BE7] px-20 py-16 flex justify-between items-center">
          <div>
            <svg
              width="222"
              height="140"
              viewBox="0 0 222 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_483_50458)">
                <path
                  d="M18.8038 56.6522C18.2284 56.6522 17.6363 56.2579 17.6185 55.5118C17.5911 54.5195 17.8629 53.5417 18.3992 52.7031C18.1751 52.4157 17.9156 52.1571 17.6266 51.9336C16.7765 52.4592 15.7873 52.7216 14.7858 52.6871C14.0316 52.6631 13.6404 52.074 13.6426 51.504C13.6447 50.934 14.0407 50.3481 14.7939 50.3299C15.7957 50.3025 16.7829 50.5717 17.6293 51.1032C17.7744 50.9926 17.9122 50.873 18.042 50.7451C18.1719 50.6174 18.2938 50.4817 18.4067 50.339C17.8761 49.4969 17.6112 48.5171 17.646 47.525C17.6697 46.7779 18.2645 46.391 18.8399 46.3926C19.4153 46.3942 20.0073 46.787 20.0251 47.533C20.0526 48.5253 19.7808 49.5032 19.2445 50.3417C19.3563 50.4852 19.4771 50.6217 19.606 50.7505C19.7351 50.8791 19.872 50.9997 20.016 51.1118C20.8661 50.5862 21.8552 50.3238 22.8568 50.3582C23.611 50.3817 24.0022 50.9709 24 51.5408C23.9978 52.1108 23.6019 52.6973 22.8487 52.7149C21.8469 52.7426 20.8596 52.4733 20.0133 51.9416C19.7233 52.1638 19.4621 52.4206 19.2359 52.7063C19.7668 53.5484 20.0318 54.5282 19.9971 55.5203C19.9734 56.2675 19.3786 56.6544 18.8032 56.6522M18.8151 53.3473C18.4603 54.0075 18.2845 54.7476 18.3049 55.4953C18.3141 55.8448 18.5802 55.9702 18.8059 55.9708C19.0317 55.9713 19.2984 55.8485 19.3097 55.4985C19.3354 54.7511 19.165 54.0099 18.8151 53.3473ZM18.2036 51.52C18.3146 51.6129 18.4218 51.7116 18.5269 51.8146C18.6319 51.9176 18.7284 52.0243 18.8216 52.1348C18.9153 52.0254 19.0144 51.9187 19.1184 51.8146C19.2224 51.7105 19.3307 51.6145 19.4417 51.5221C19.3307 51.4293 19.2229 51.3313 19.1184 51.2281C19.0155 51.1251 18.9169 51.0178 18.8237 50.9079C18.73 51.0171 18.6308 51.1239 18.5263 51.2281C18.4218 51.3323 18.3141 51.4296 18.2031 51.52M14.9383 51.0093H14.8106C14.4577 51.0178 14.3316 51.2815 14.3306 51.5051C14.3295 51.7287 14.4539 51.9928 14.8074 52.004C15.5621 52.0307 16.3109 51.8624 16.9801 51.5157C16.3519 51.1842 15.6512 51.0103 14.9394 51.0093M20.6652 51.5285C21.3314 51.8803 22.0784 52.0544 22.8331 52.0339C23.1865 52.0254 23.3126 51.7612 23.3136 51.5382C23.3147 51.3151 23.1903 51.0499 22.8368 51.0386C22.0824 51.0133 21.3341 51.1821 20.6652 51.5285ZM18.8383 47.0735C18.6131 47.0735 18.3458 47.1963 18.3345 47.5458C18.3086 48.2932 18.479 49.0345 18.8291 49.697C19.1838 49.037 19.3596 48.297 19.3393 47.5496C19.3301 47.1995 19.064 47.0746 18.8383 47.0735Z"
                  fill="white"
                />
                <path
                  d="M0.78125 60.1753H5.83362V58.7371C5.83362 58.0231 5.54898 57.478 4.97971 57.102C4.41043 56.7259 3.68456 56.5379 2.80209 56.5379C2.39156 56.5408 1.98204 56.5786 1.57806 56.651C1.52656 56.367 1.49809 56.0793 1.49294 55.7908C1.49294 55.3492 1.58542 55.0369 1.77039 54.8536C1.95536 54.6704 2.247 54.5607 2.64532 54.5244C2.96856 54.5059 3.20579 54.4964 3.357 54.4961C4.29657 54.4961 5.11493 54.6653 5.81207 55.0036C6.48527 55.3202 7.04592 55.8313 7.42023 56.4696C7.79484 57.11 7.98214 57.8665 7.98214 58.7392V62.2614H0.78125V60.1753Z"
                  fill="white"
                />
                <path
                  d="M9.46277 63.334C9.75692 63.334 9.97045 63.2541 10.1033 63.0944C10.2362 62.9346 10.3027 62.6573 10.3027 62.2624V56.7667C10.3027 56.3064 10.4023 55.9657 10.6017 55.7448C10.801 55.5238 11.1377 55.4134 11.6118 55.4134C11.8946 55.4169 12.1765 55.4445 12.4544 55.4961V62.2635C12.4544 63.2689 12.2267 64.0301 11.7713 64.547C11.3159 65.0639 10.6651 65.322 9.81888 65.3213C9.20824 65.3127 8.60287 65.2081 8.02539 65.0113L8.43807 63.1787C8.87446 63.2822 9.21566 63.334 9.46169 63.334M10.5295 53.9031C10.3337 53.7076 10.2123 53.4509 10.186 53.1768C10.1598 52.9026 10.2302 52.6279 10.3853 52.3994C10.5405 52.1709 10.7708 52.0027 11.037 51.9235C11.3033 51.8442 11.589 51.8588 11.8456 51.9647C12.1022 52.0706 12.3139 52.2613 12.4445 52.5044C12.5752 52.7475 12.6168 53.0279 12.5622 53.2979C12.5077 53.5679 12.3604 53.8109 12.1453 53.9855C11.9303 54.16 11.6609 54.2554 11.3829 54.2553C11.2239 54.2575 11.0661 54.2273 10.9194 54.1668C10.7726 54.1062 10.6399 54.0164 10.5295 53.9031Z"
                  fill="white"
                />
              </g>
              <path
                d="M33.0277 60.0014C32.1877 60.0014 31.4797 59.9574 30.9037 59.8694C30.3357 59.7814 29.8757 59.6414 29.5237 59.4494C29.1717 59.2574 28.9157 59.0054 28.7557 58.6934C28.6037 58.3734 28.5277 57.9854 28.5277 57.5294C28.5277 57.2094 28.5677 56.8814 28.6477 56.5454C28.7357 56.2094 28.8677 55.8374 29.0437 55.4294L29.7877 55.6574C29.4597 56.3374 29.2957 56.9214 29.2957 57.4094C29.2957 57.8974 29.5277 58.2574 29.9917 58.4894C30.4557 58.7134 31.1877 58.8254 32.1877 58.8254H33.8677C34.4357 58.8254 34.9037 58.8094 35.2717 58.7774C35.6397 58.7454 35.9317 58.6894 36.1477 58.6094C36.3637 58.5294 36.5117 58.4214 36.5917 58.2854C36.6797 58.1414 36.7237 57.9614 36.7237 57.7454C36.7237 57.6094 36.7157 57.4414 36.6997 57.2414C36.6837 57.0334 36.6437 56.7614 36.5797 56.4254L36.3997 55.4294L37.2397 55.2974L37.3957 56.2934C37.4517 56.6534 37.4877 56.9494 37.5037 57.1814C37.5277 57.4054 37.5397 57.5934 37.5397 57.7454C37.5397 58.1614 37.4597 58.5134 37.2997 58.8014C37.1477 59.0894 36.8917 59.3214 36.5317 59.4974C36.1797 59.6734 35.7157 59.8014 35.1397 59.8814C34.5717 59.9614 33.8677 60.0014 33.0277 60.0014ZM33.6997 55.4294C33.5397 55.4294 33.4117 55.3854 33.3157 55.2974C33.2197 55.2014 33.1717 55.0494 33.1717 54.8414C33.1717 54.6334 33.2197 54.4854 33.3157 54.3974C33.4117 54.3014 33.5397 54.2534 33.6997 54.2534H33.8317C33.9917 54.2534 34.1197 54.3014 34.2157 54.3974C34.3117 54.4854 34.3597 54.6334 34.3597 54.8414C34.3597 55.0494 34.3117 55.2014 34.2157 55.2974C34.1197 55.3854 33.9917 55.4294 33.8317 55.4294H33.6997ZM32.1517 55.4294C31.9917 55.4294 31.8637 55.3854 31.7677 55.2974C31.6717 55.2014 31.6237 55.0494 31.6237 54.8414C31.6237 54.6334 31.6717 54.4854 31.7677 54.3974C31.8637 54.3014 31.9917 54.2534 32.1517 54.2534H32.2837C32.4437 54.2534 32.5717 54.3014 32.6677 54.3974C32.7637 54.4854 32.8117 54.6334 32.8117 54.8414C32.8117 55.0494 32.7637 55.2014 32.6677 55.2974C32.5717 55.3854 32.4437 55.4294 32.2837 55.4294H32.1517ZM41.0661 59.8574C40.6821 59.8574 40.3541 59.8254 40.0821 59.7614C39.8181 59.6974 39.6021 59.5934 39.4341 59.4494C39.2741 59.2974 39.1581 59.1014 39.0861 58.8614C39.0141 58.6214 38.9781 58.3294 38.9781 57.9854V50.9774H39.8661V57.9854C39.8661 58.2894 39.9501 58.5054 40.1181 58.6334C40.2861 58.7614 40.5461 58.8254 40.8981 58.8254H41.3181V59.6174L41.0781 59.8574H41.0661ZM41.0725 59.0654L41.3125 58.8254H41.7205C42.0725 58.8254 42.3965 58.8134 42.6925 58.7894C42.9965 58.7654 43.3045 58.7214 43.6165 58.6574C43.9285 58.5854 44.2565 58.4854 44.6005 58.3574C44.9525 58.2294 45.3485 58.0614 45.7885 57.8534L46.8925 57.3254V57.2774L45.1165 56.8814L42.6325 56.2694V57.3014H41.7925V56.3774C41.7925 56.0414 41.8845 55.7894 42.0685 55.6214C42.2605 55.4454 42.5005 55.3574 42.7885 55.3574C42.8765 55.3574 42.9805 55.3694 43.1005 55.3934C43.2285 55.4094 43.4245 55.4494 43.6885 55.5134L46.6165 56.2694C47.0565 56.3814 47.4245 56.4614 47.7205 56.5094C48.0165 56.5494 48.2725 56.5694 48.4885 56.5694H48.6805V57.6014H47.7685V57.7454C47.7685 58.1454 47.8565 58.4254 48.0325 58.5854C48.2085 58.7454 48.4805 58.8254 48.8485 58.8254H49.2685V59.6174L49.0285 59.8574C48.6765 59.8574 48.3765 59.8254 48.1285 59.7614C47.8805 59.6974 47.6765 59.5934 47.5165 59.4494C47.3645 59.2974 47.2485 59.1054 47.1685 58.8734C47.0965 58.6414 47.0565 58.3574 47.0485 58.0214L46.1125 58.5854C45.6165 58.8814 45.1765 59.1174 44.7925 59.2934C44.4085 59.4614 44.0485 59.5894 43.7125 59.6774C43.3765 59.7574 43.0485 59.8094 42.7285 59.8334C42.4165 59.8494 42.0805 59.8574 41.7205 59.8574H41.0725V59.0654ZM44.9005 62.2574C44.7405 62.2574 44.6125 62.2094 44.5165 62.1134C44.4205 62.0254 44.3725 61.8774 44.3725 61.6694C44.3725 61.4614 44.4205 61.3094 44.5165 61.2134C44.6125 61.1254 44.7405 61.0814 44.9005 61.0814H45.0325C45.1925 61.0814 45.3205 61.1254 45.4165 61.2134C45.5125 61.3094 45.5605 61.4614 45.5605 61.6694C45.5605 61.8774 45.5125 62.0254 45.4165 62.1134C45.3205 62.2094 45.1925 62.2574 45.0325 62.2574H44.9005ZM49.0295 59.0654L49.2695 58.8254H49.6895C50.3695 58.8254 50.7095 58.4854 50.7095 57.8054V55.9094H51.5495V57.8054C51.5495 58.4854 51.8895 58.8254 52.5695 58.8254H52.9895V59.6174L52.7495 59.8574C51.6455 59.8574 50.9975 59.4654 50.8055 58.6814H50.7455C50.6575 59.1214 50.4855 59.4294 50.2295 59.6054C49.9735 59.7734 49.5735 59.8574 49.0295 59.8574V59.0654ZM51.8015 54.4694C51.6415 54.4694 51.5135 54.4254 51.4175 54.3374C51.3215 54.2414 51.2735 54.0894 51.2735 53.8814C51.2735 53.6734 51.3215 53.5254 51.4175 53.4374C51.5135 53.3414 51.6415 53.2934 51.8015 53.2934H51.9335C52.0935 53.2934 52.2215 53.3414 52.3175 53.4374C52.4135 53.5254 52.4615 53.6734 52.4615 53.8814C52.4615 54.0894 52.4135 54.2414 52.3175 54.3374C52.2215 54.4254 52.0935 54.4694 51.9335 54.4694H51.8015ZM50.2535 54.4694C50.0935 54.4694 49.9655 54.4254 49.8695 54.3374C49.7735 54.2414 49.7255 54.0894 49.7255 53.8814C49.7255 53.6734 49.7735 53.5254 49.8695 53.4374C49.9655 53.3414 50.0935 53.2934 50.2535 53.2934H50.3855C50.5455 53.2934 50.6735 53.3414 50.7695 53.4374C50.8655 53.5254 50.9135 53.6734 50.9135 53.8814C50.9135 54.0894 50.8655 54.2414 50.7695 54.3374C50.6735 54.4254 50.5455 54.4694 50.3855 54.4694H50.2535ZM52.7444 59.0654L52.9844 58.8254H53.4044C54.0844 58.8254 54.4244 58.4854 54.4244 57.8054V55.9094H55.2644V57.8054C55.2644 58.4854 55.6044 58.8254 56.2844 58.8254H56.7044V59.6174L56.4644 59.8574C55.3604 59.8574 54.7124 59.4654 54.5204 58.6814H54.4604C54.3724 59.1214 54.2004 59.4294 53.9444 59.6054C53.6884 59.7734 53.2884 59.8574 52.7444 59.8574V59.0654ZM54.7724 54.4694C54.6124 54.4694 54.4844 54.4254 54.3884 54.3374C54.2924 54.2414 54.2444 54.0894 54.2444 53.8814C54.2444 53.6734 54.2924 53.5254 54.3884 53.4374C54.4844 53.3414 54.6124 53.2934 54.7724 53.2934H54.9044C55.0644 53.2934 55.1924 53.3414 55.2884 53.4374C55.3844 53.5254 55.4324 53.6734 55.4324 53.8814C55.4324 54.0894 55.3844 54.2414 55.2884 54.3374C55.1924 54.4254 55.0644 54.4694 54.9044 54.4694H54.7724ZM58.0312 59.1614C57.8472 59.4094 57.6312 59.5894 57.3832 59.7014C57.1432 59.8054 56.8352 59.8574 56.4592 59.8574V59.0654L56.6992 58.8254C56.8512 58.8254 56.9792 58.8054 57.0832 58.7654C57.1952 58.7254 57.2912 58.6654 57.3712 58.5854C57.4592 58.4974 57.5352 58.3854 57.5992 58.2494C57.6712 58.1054 57.7432 57.9374 57.8152 57.7454L58.1512 56.8574C58.3352 56.3774 58.5792 56.0094 58.8832 55.7534C59.1872 55.4894 59.5912 55.3574 60.0952 55.3574C60.6872 55.3574 61.1432 55.6254 61.4632 56.1614C61.7912 56.6974 61.9552 57.4414 61.9552 58.3934V58.9574L61.2472 60.0014L58.0312 59.1614ZM58.5112 58.2134L61.1152 58.9094V58.3934C61.1152 57.7694 61.0112 57.2814 60.8032 56.9294C60.6032 56.5694 60.3192 56.3894 59.9512 56.3894C59.6472 56.3894 59.4112 56.4814 59.2432 56.6654C59.0832 56.8494 58.9472 57.0814 58.8352 57.3614L58.5112 58.2134ZM66.6919 59.8574C66.4039 59.8574 66.1639 59.7734 65.9719 59.6054C65.7879 59.4294 65.6959 59.1734 65.6959 58.8374V57.9134H66.5359V58.8254H68.1559C68.4279 58.8254 68.6519 58.8174 68.8279 58.8014C69.0039 58.7854 69.1439 58.7614 69.2479 58.7294C69.3519 58.6894 69.4239 58.6374 69.4639 58.5734C69.5039 58.5094 69.5239 58.4254 69.5239 58.3214C69.5239 58.2254 69.5039 58.1094 69.4639 57.9734C69.4239 57.8374 69.3519 57.6294 69.2479 57.3494L68.0959 54.1814L68.9479 53.8694L70.1719 57.2294C70.2919 57.5494 70.3959 57.8134 70.4839 58.0214C70.5799 58.2214 70.6759 58.3814 70.7719 58.5014C70.8679 58.6214 70.9639 58.7054 71.0599 58.7534C71.1639 58.8014 71.2799 58.8254 71.4079 58.8254H71.7079V59.6174L71.4679 59.8574C71.2519 59.8574 71.0599 59.8374 70.8919 59.7974C70.7319 59.7574 70.5879 59.6974 70.4599 59.6174C70.3319 59.5294 70.2159 59.4174 70.1119 59.2814C70.0079 59.1454 69.9079 58.9774 69.8119 58.7774H69.7519C69.7039 59.1694 69.5519 59.4494 69.2959 59.6174C69.0399 59.7774 68.6599 59.8574 68.1559 59.8574H66.6919ZM71.4709 59.0654L71.7109 58.8254H72.1189C72.4709 58.8254 72.7949 58.8134 73.0909 58.7894C73.3949 58.7654 73.7029 58.7214 74.0149 58.6574C74.3269 58.5854 74.6549 58.4854 74.9989 58.3574C75.3509 58.2294 75.7469 58.0614 76.1869 57.8534L77.2909 57.3254V57.2774L75.5149 56.8814L73.0309 56.2694V57.3014H72.1909V56.3774C72.1909 56.0414 72.2829 55.7894 72.4669 55.6214C72.6589 55.4454 72.8989 55.3574 73.1869 55.3574C73.2749 55.3574 73.3789 55.3694 73.4989 55.3934C73.6269 55.4094 73.8229 55.4494 74.0869 55.5134L77.0149 56.2694C77.4549 56.3814 77.8229 56.4614 78.1189 56.5094C78.4149 56.5494 78.6709 56.5694 78.8869 56.5694H79.0789V57.6014H78.1429L76.5109 58.5854C76.0149 58.8814 75.5749 59.1174 75.1909 59.2934C74.8069 59.4614 74.4469 59.5894 74.1109 59.6774C73.7749 59.7574 73.4469 59.8094 73.1269 59.8334C72.8149 59.8494 72.4789 59.8574 72.1189 59.8574H71.4709V59.0654ZM80.2164 52.4414H81.1044V59.8574H80.2164V52.4414ZM79.4364 50.7614H79.8684L79.8804 50.7134C79.8164 50.6334 79.7644 50.5414 79.7244 50.4374C79.6844 50.3254 79.6644 50.2134 79.6644 50.1014C79.6644 49.7894 79.7684 49.5294 79.9764 49.3214C80.1844 49.1134 80.4484 49.0094 80.7684 49.0094C80.9524 49.0094 81.1404 49.0574 81.3324 49.1534C81.5244 49.2414 81.6684 49.3614 81.7644 49.5134L81.3204 50.0534C81.1604 49.8694 80.9764 49.7774 80.7684 49.7774C80.6244 49.7774 80.5044 49.8174 80.4084 49.8974C80.3124 49.9694 80.2644 50.0614 80.2644 50.1734C80.2644 50.3414 80.3404 50.4734 80.4924 50.5694C80.6444 50.6654 80.8564 50.7134 81.1284 50.7134H81.8964V51.4814H79.4364V50.7614Z"
                fill="white"
              />
              <path
                d="M196.667 18.6629C201.821 18.6629 205.999 14.4851 205.999 9.33147C205.999 4.17784 201.821 0 196.667 0C191.514 0 187.336 4.17784 187.336 9.33147C187.336 14.4851 191.514 18.6629 196.667 18.6629Z"
                fill="white"
              />
              <path
                d="M151.531 18.6629C156.684 18.6629 160.862 14.4851 160.862 9.33147C160.862 4.17784 156.684 0 151.531 0C146.377 0 142.199 4.17784 142.199 9.33147C142.199 14.4851 146.377 18.6629 151.531 18.6629Z"
                fill="white"
              />
              <path
                d="M173.966 18.6629C179.12 18.6629 183.298 14.4851 183.298 9.33147C183.298 4.17784 179.12 0 173.966 0C168.813 0 164.635 4.17784 164.635 9.33147C164.635 14.4851 168.813 18.6629 173.966 18.6629Z"
                fill="white"
              />
              <path
                d="M127.615 54.3195V61.8574H96.6994V54.3195H114.78V49.1245C114.78 46.5439 113.762 44.5746 111.724 43.2164C109.687 41.8582 107.089 41.1791 103.932 41.1791C102.574 41.1791 101.113 41.3149 99.5516 41.5866C99.3478 40.3642 99.246 39.3286 99.246 38.4797C99.246 36.8839 99.5685 35.7634 100.214 35.1182C100.893 34.4392 101.945 34.0317 103.371 33.8959C104.526 33.828 105.375 33.794 105.918 33.794C109.28 33.794 112.2 34.4052 114.678 35.6276C117.191 36.8499 119.109 38.6156 120.434 40.9245C121.792 43.2334 122.471 45.9667 122.471 49.1245V54.3195H127.615ZM133.989 41.994C133.989 40.3303 134.346 39.1079 135.059 38.3269C135.772 37.512 136.977 37.1046 138.675 37.1046C139.524 37.1046 140.526 37.2064 141.68 37.4102V61.8574H127.623C126.468 61.8574 125.501 61.4839 124.72 60.7369C123.939 59.9899 123.548 59.0732 123.548 57.9866C123.548 56.9001 123.922 56.0172 124.669 55.3382C125.416 54.6591 126.401 54.3195 127.623 54.3195H133.989V41.994ZM132.665 74.9978C131.477 74.9978 130.458 74.5734 129.609 73.7245C128.76 72.8757 128.336 71.857 128.336 70.6686C128.336 69.4802 128.76 68.4616 129.609 67.6127C130.458 66.7638 131.477 66.3394 132.665 66.3394C133.854 66.3394 134.872 66.7638 135.721 67.6127C136.57 68.4616 136.994 69.4802 136.994 70.6686C136.994 71.857 136.57 72.8757 135.721 73.7245C134.872 74.5734 133.854 74.9978 132.665 74.9978ZM142.801 74.9978C141.612 74.9978 140.594 74.5734 139.745 73.7245C138.896 72.8757 138.471 71.857 138.471 70.6686C138.471 69.4802 138.896 68.4616 139.745 67.6127C140.594 66.7638 141.612 66.3394 142.801 66.3394C143.989 66.3394 145.008 66.7638 145.856 67.6127C146.705 68.4616 147.13 69.4802 147.13 70.6686C147.13 71.857 146.705 72.8757 145.856 73.7245C145.008 74.5734 143.989 74.9978 142.801 74.9978ZM170.843 54.3195V61.8574H165.546C165.546 65.4906 164.731 68.2409 163.102 70.1084C161.472 71.9759 159.146 72.9096 156.124 72.9096C154.121 72.9096 151.982 72.5361 149.707 71.7891L151.184 65.168C152.746 65.5415 153.968 65.7282 154.851 65.7282C155.903 65.7282 156.667 65.4396 157.143 64.8624C157.618 64.2852 157.856 63.2835 157.856 61.8574V41.994C157.856 40.3303 158.212 39.1079 158.925 38.3269C159.638 37.512 160.844 37.1046 162.541 37.1046C163.39 37.1046 164.392 37.2064 165.546 37.4102V54.3195H170.843ZM161.574 32.9282C160.385 32.9282 159.367 32.5037 158.518 31.6549C157.669 30.806 157.245 29.7874 157.245 28.599C157.245 27.4106 157.669 26.3919 158.518 25.5431C159.367 24.6942 160.385 24.2698 161.574 24.2698C162.762 24.2698 163.781 24.6942 164.63 25.5431C165.478 26.3919 165.903 27.4106 165.903 28.599C165.903 29.7874 165.478 30.806 164.63 31.6549C163.781 32.5037 162.762 32.9282 161.574 32.9282ZM189.384 33.8959C191.999 33.8959 194.342 34.541 196.413 35.8313C198.518 37.1216 200.165 38.8872 201.353 41.1282C202.576 43.3352 203.187 45.78 203.187 48.4624C203.187 51.2466 202.593 53.6574 201.404 55.6947C200.216 57.698 198.637 59.2259 196.668 60.2785C194.698 61.3311 192.542 61.8574 190.199 61.8574C188.366 61.8574 186.549 61.5349 184.75 60.8897C182.984 60.2446 181.337 59.2769 179.809 57.9866C178.791 59.2429 177.5 60.2106 175.938 60.8897C174.41 61.5349 172.713 61.8574 170.845 61.8574C169.691 61.8574 168.723 61.4839 167.942 60.7369C167.161 59.9899 166.771 59.0732 166.771 57.9866C166.771 56.9001 167.144 56.0172 167.891 55.3382C168.638 54.6591 169.623 54.3195 170.845 54.3195C171.932 54.3195 172.764 54.1328 173.341 53.7593C173.918 53.3518 174.326 52.8085 174.563 52.1295C174.835 51.4504 175.141 50.3978 175.48 48.9717C175.82 47.5116 176.057 46.5609 176.193 46.1195C177.246 42.2487 178.892 39.2437 181.133 37.1046C183.408 34.9655 186.159 33.8959 189.384 33.8959ZM189.028 54.8288C190.895 54.8288 192.44 54.2856 193.663 53.199C194.885 52.0785 195.496 50.4996 195.496 48.4624C195.496 46.493 194.936 44.8632 193.816 43.5729C192.695 42.2487 191.218 41.5866 189.384 41.5866C187.992 41.5866 186.855 42.0619 185.972 43.0127C185.123 43.9294 184.359 45.4065 183.68 47.4437C183.341 48.4284 183.086 49.464 182.916 50.5506C182.848 50.7883 182.78 51.0769 182.712 51.4164C182.678 51.722 182.594 52.0785 182.458 52.486C183.442 53.2669 184.512 53.8611 185.666 54.2686C186.821 54.6421 187.941 54.8288 189.028 54.8288Z"
                fill="white"
              />
              <g filter="url(#filter0_d_483_50458)">
                <path
                  d="M113.321 118C111.986 118 111.026 117.729 110.439 117.186C109.867 116.629 109.581 115.771 109.581 114.612V114.348H109.471C109.251 115.169 108.906 115.763 108.437 116.13C107.968 116.482 107.352 116.658 106.589 116.658C105.577 116.658 104.8 116.387 104.257 115.844C103.714 115.301 103.443 114.539 103.443 113.556C103.443 113.057 103.516 112.603 103.663 112.192C103.81 111.767 104.037 111.371 104.345 111.004C104.653 110.637 105.034 110.293 105.489 109.97C105.958 109.633 106.508 109.295 107.139 108.958L109.471 107.726V106.56H111.473V114.128C111.473 114.656 111.605 115.023 111.869 115.228C112.133 115.419 112.551 115.514 113.123 115.514H113.849V117.472L113.321 118ZM107.073 114.172C107.953 114.172 108.569 114.062 108.921 113.842C109.288 113.622 109.471 113.233 109.471 112.676V109.706L107.491 110.718C106.699 111.129 106.127 111.495 105.775 111.818C105.423 112.126 105.247 112.507 105.247 112.962C105.247 113.387 105.379 113.695 105.643 113.886C105.922 114.077 106.398 114.172 107.073 114.172ZM110.351 104.778C110.014 104.778 109.742 104.675 109.537 104.47C109.346 104.265 109.251 103.949 109.251 103.524C109.251 103.084 109.346 102.769 109.537 102.578C109.742 102.373 110.014 102.27 110.351 102.27H110.681C111.018 102.27 111.29 102.373 111.495 102.578C111.7 102.769 111.803 103.084 111.803 103.524C111.803 103.949 111.7 104.265 111.495 104.47C111.29 104.675 111.018 104.778 110.681 104.778H110.351ZM107.249 104.778C106.912 104.778 106.64 104.675 106.435 104.47C106.244 104.265 106.149 103.949 106.149 103.524C106.149 103.084 106.244 102.769 106.435 102.578C106.64 102.373 106.912 102.27 107.249 102.27H107.579C107.916 102.27 108.188 102.373 108.393 102.578C108.598 102.769 108.701 103.084 108.701 103.524C108.701 103.949 108.598 104.265 108.393 104.47C108.188 104.675 107.916 104.778 107.579 104.778H107.249ZM113.322 116.042L113.85 115.514H117.414L117.436 115.426L114.752 112.104V109.552C115.426 109.215 116.152 108.958 116.93 108.782C117.707 108.591 118.47 108.496 119.218 108.496C120.728 108.496 121.858 108.782 122.606 109.354C123.368 109.926 123.75 110.762 123.75 111.862C123.75 112.258 123.706 112.603 123.618 112.896C123.53 113.189 123.39 113.468 123.2 113.732C123.009 113.996 122.76 114.267 122.452 114.546C122.158 114.81 121.792 115.118 121.352 115.47L121.374 115.514H124.652V117.472L124.124 118H123.2C122.525 118 121.85 117.919 121.176 117.758C120.501 117.582 119.885 117.303 119.328 116.922C118.77 117.303 118.169 117.582 117.524 117.758C116.893 117.919 116.248 118 115.588 118H113.322V116.042ZM116.49 111.466L119.504 115.052L120.208 114.458C120.78 113.974 121.212 113.593 121.506 113.314C121.799 113.035 121.946 112.705 121.946 112.324C121.946 111.444 121.029 111.004 119.196 111.004C118.301 111.004 117.399 111.129 116.49 111.378V111.466ZM124.128 116.042L124.656 115.514H125.382C126.6 115.514 127.208 114.935 127.208 113.776V110.432H129.122V113.776C129.122 114.935 129.694 115.514 130.838 115.514H131.674V117.472L131.124 118C130.039 118 129.196 117.802 128.594 117.406C128.008 116.995 127.619 116.357 127.428 115.492H127.296C127.12 116.401 126.79 117.047 126.306 117.428C125.837 117.809 125.111 118 124.128 118V116.042ZM129.496 108.188C129.159 108.188 128.888 108.085 128.682 107.88C128.492 107.675 128.396 107.359 128.396 106.934C128.396 106.494 128.492 106.179 128.682 105.988C128.888 105.783 129.159 105.68 129.496 105.68H129.826C130.164 105.68 130.435 105.783 130.64 105.988C130.846 106.179 130.948 106.494 130.948 106.934C130.948 107.359 130.846 107.675 130.64 107.88C130.435 108.085 130.164 108.188 129.826 108.188H129.496ZM126.394 108.188C126.057 108.188 125.786 108.085 125.58 107.88C125.39 107.675 125.294 107.359 125.294 106.934C125.294 106.494 125.39 106.179 125.58 105.988C125.786 105.783 126.057 105.68 126.394 105.68H126.724C127.062 105.68 127.333 105.783 127.538 105.988C127.744 106.179 127.846 106.494 127.846 106.934C127.846 107.359 127.744 107.675 127.538 107.88C127.333 108.085 127.062 108.188 126.724 108.188H126.394ZM131.154 116.042L131.682 115.514C132.136 115.514 132.496 115.499 132.76 115.47C133.038 115.441 133.28 115.375 133.486 115.272C133.442 115.037 133.42 114.781 133.42 114.502C133.42 113.681 133.676 112.925 134.19 112.236C134.718 111.547 135.502 110.872 136.544 110.212L137.754 109.464H139.976L141.626 113.886C141.743 114.209 141.86 114.48 141.978 114.7C142.095 114.905 142.22 115.067 142.352 115.184C142.498 115.301 142.66 115.389 142.836 115.448C143.012 115.492 143.224 115.514 143.474 115.514H144.002V117.472L143.474 118C142.667 118 142.029 117.883 141.56 117.648C141.09 117.399 140.68 116.973 140.328 116.372L140.196 116.394V118H137.49C136.507 118 135.7 117.839 135.07 117.516C134.454 117.179 134.006 116.702 133.728 116.086H133.596C133.39 116.746 133.097 117.23 132.716 117.538C132.334 117.846 131.814 118 131.154 118V116.042ZM135.114 114.26C135.114 114.7 135.29 115.023 135.642 115.228C135.994 115.419 136.5 115.514 137.16 115.514H139.91C139.851 115.397 139.8 115.272 139.756 115.14C139.712 115.008 139.66 114.869 139.602 114.722L138.436 111.598L137.116 112.258C136.529 112.551 136.045 112.867 135.664 113.204C135.297 113.527 135.114 113.879 135.114 114.26ZM143.464 116.042L143.992 115.514H144.454C145.452 115.514 146.156 115.404 146.566 115.184C146.977 114.949 147.182 114.531 147.182 113.93C147.182 113.681 147.16 113.365 147.116 112.984C147.087 112.603 147.021 112.097 146.918 111.466L146.566 109.552L148.48 109.244L148.766 111.158C148.942 112.331 149.03 113.255 149.03 113.93C149.03 115.309 148.656 116.335 147.908 117.01C147.16 117.67 146.009 118 144.454 118H143.464V116.042ZM147.006 122.554C146.669 122.554 146.398 122.451 146.192 122.246C146.002 122.041 145.906 121.725 145.906 121.3C145.906 120.86 146.002 120.537 146.192 120.332C146.398 120.141 146.669 120.046 147.006 120.046H147.336C147.674 120.046 147.945 120.141 148.15 120.332C148.356 120.537 148.458 120.86 148.458 121.3C148.458 121.725 148.356 122.041 148.15 122.246C147.945 122.451 147.674 122.554 147.336 122.554H147.006ZM162.8 123.192C160.571 123.192 158.862 122.686 157.674 121.674C156.501 120.677 155.914 119.269 155.914 117.45C155.914 116.79 156.002 116.064 156.178 115.272C156.369 114.48 156.625 113.703 156.948 112.94L158.62 113.446C158.341 114.047 158.114 114.671 157.938 115.316C157.762 115.947 157.674 116.519 157.674 117.032C157.674 118.132 158.055 118.99 158.818 119.606C159.595 120.222 160.673 120.53 162.052 120.53H163.548C165.293 120.53 166.547 120.266 167.31 119.738C168.073 119.21 168.454 118.352 168.454 117.164V116.196H168.344C167.889 117.413 166.951 118.022 165.528 118.022C164.34 118.022 163.423 117.699 162.778 117.054C162.133 116.394 161.81 115.47 161.81 114.282C161.81 113.578 161.913 112.918 162.118 112.302C162.338 111.686 162.631 111.158 162.998 110.718C163.379 110.263 163.827 109.904 164.34 109.64C164.853 109.376 165.411 109.244 166.012 109.244C167.361 109.244 168.41 109.845 169.158 111.048C169.906 112.251 170.28 113.937 170.28 116.108C170.28 117.369 170.133 118.447 169.84 119.342C169.561 120.237 169.114 120.97 168.498 121.542C167.897 122.114 167.127 122.532 166.188 122.796C165.249 123.06 164.12 123.192 162.8 123.192ZM166.078 115.514C166.694 115.514 167.185 115.47 167.552 115.382C167.933 115.294 168.234 115.155 168.454 114.964C168.41 113.981 168.146 113.204 167.662 112.632C167.193 112.045 166.577 111.752 165.814 111.752C165.139 111.752 164.604 111.957 164.208 112.368C163.812 112.779 163.614 113.314 163.614 113.974C163.614 114.517 163.783 114.913 164.12 115.162C164.472 115.397 164.978 115.514 165.638 115.514H166.078ZM167.354 107C167.017 107 166.745 106.897 166.54 106.692C166.349 106.487 166.254 106.171 166.254 105.746C166.254 105.306 166.349 104.991 166.54 104.8C166.745 104.595 167.017 104.492 167.354 104.492H167.684C168.021 104.492 168.293 104.595 168.498 104.8C168.703 104.991 168.806 105.306 168.806 105.746C168.806 106.171 168.703 106.487 168.498 106.692C168.293 106.897 168.021 107 167.684 107H167.354ZM164.252 107C163.915 107 163.643 106.897 163.438 106.692C163.247 106.487 163.152 106.171 163.152 105.746C163.152 105.306 163.247 104.991 163.438 104.8C163.643 104.595 163.915 104.492 164.252 104.492H164.582C164.919 104.492 165.191 104.595 165.396 104.8C165.601 104.991 165.704 105.306 165.704 105.746C165.704 106.171 165.601 106.487 165.396 106.692C165.191 106.897 164.919 107 164.582 107H164.252ZM174.45 107.146C174.025 107.146 173.695 106.999 173.46 106.706C173.24 106.398 173.13 105.973 173.13 105.43V103.846H174.406V104.99C174.406 105.342 174.56 105.518 174.868 105.518C175.249 105.518 175.44 105.217 175.44 104.616V103.208H176.716V104.066C176.716 104.535 176.885 104.77 177.222 104.77C177.398 104.77 177.537 104.711 177.64 104.594C177.743 104.477 177.794 104.315 177.794 104.11C177.794 103.743 177.691 103.267 177.486 102.68L178.74 102.306C178.857 102.629 178.938 102.944 178.982 103.252C179.026 103.545 179.048 103.817 179.048 104.066C179.048 104.799 178.887 105.371 178.564 105.782C178.241 106.178 177.787 106.376 177.2 106.376C176.877 106.376 176.599 106.281 176.364 106.09C176.144 105.899 175.997 105.635 175.924 105.298H175.836C175.748 106.53 175.286 107.146 174.45 107.146ZM171.874 120.794H173.15C174.69 120.794 175.893 120.545 176.758 120.046C177.623 119.562 178.195 118.88 178.474 118H175.834C174.646 118 173.722 117.677 173.062 117.032C172.417 116.387 172.094 115.47 172.094 114.282C172.094 113.578 172.197 112.918 172.402 112.302C172.622 111.686 172.915 111.158 173.282 110.718C173.663 110.263 174.111 109.904 174.624 109.64C175.137 109.376 175.702 109.244 176.318 109.244C177.609 109.244 178.613 109.794 179.332 110.894C180.065 111.994 180.447 113.534 180.476 115.514H181.51V117.472L180.982 118H180.234C179.867 119.687 179.097 120.985 177.924 121.894C176.765 122.818 175.203 123.28 173.238 123.28H171.874V120.794ZM173.92 113.974C173.92 114.517 174.089 114.913 174.426 115.162C174.763 115.397 175.262 115.514 175.922 115.514H178.65V115.096C178.65 114.084 178.415 113.277 177.946 112.676C177.477 112.06 176.868 111.752 176.12 111.752C175.445 111.752 174.91 111.957 174.514 112.368C174.118 112.779 173.92 113.314 173.92 113.974ZM180.976 116.042L181.504 115.514H181.944C182.252 115.514 182.523 115.492 182.758 115.448C182.993 115.404 183.198 115.323 183.374 115.206C183.55 115.089 183.711 114.935 183.858 114.744C184.005 114.553 184.151 114.311 184.298 114.018L185.2 112.192L186.85 113.028L185.86 114.986L186.014 115.074C186.454 115.323 186.872 115.507 187.268 115.624C187.679 115.741 188.097 115.8 188.522 115.8C189.182 115.8 189.666 115.653 189.974 115.36C190.282 115.052 190.436 114.524 190.436 113.776V112.192H192.35V113.776C192.35 114.495 192.445 115.008 192.636 115.316C192.841 115.609 193.193 115.756 193.692 115.756H194.088C194.557 115.756 194.895 115.609 195.1 115.316C195.32 115.008 195.43 114.495 195.43 113.776V111.312H197.344V113.776C197.344 114.935 197.916 115.514 199.06 115.514H199.896V117.472L199.346 118C198.319 118 197.52 117.817 196.948 117.45C196.391 117.069 196.009 116.482 195.804 115.69H195.694C195.606 116.614 195.364 117.274 194.968 117.67C194.587 118.066 194.044 118.264 193.34 118.264C191.844 118.264 190.957 117.406 190.678 115.69H190.546C190.297 117.406 189.483 118.264 188.104 118.264C187.679 118.264 187.239 118.183 186.784 118.022C186.344 117.861 185.816 117.597 185.2 117.23L184.606 116.878C184.166 117.333 183.667 117.633 183.11 117.78C182.553 117.927 181.841 118 180.976 118V116.042ZM199.367 116.042L199.895 115.514H200.357C201.354 115.514 202.058 115.404 202.469 115.184C202.879 114.949 203.085 114.531 203.085 113.93C203.085 113.681 203.063 113.365 203.019 112.984C202.989 112.603 202.923 112.097 202.821 111.466L202.469 109.552L204.383 109.244L204.669 111.158C204.845 112.331 204.933 113.255 204.933 113.93C204.933 115.309 204.559 116.335 203.811 117.01C203.063 117.67 201.911 118 200.357 118H199.367V116.042ZM204.493 107C204.155 107 203.884 106.897 203.679 106.692C203.488 106.487 203.393 106.171 203.393 105.746C203.393 105.306 203.488 104.991 203.679 104.8C203.884 104.595 204.155 104.492 204.493 104.492H204.823C205.16 104.492 205.431 104.595 205.637 104.8C205.842 104.991 205.945 105.306 205.945 105.746C205.945 106.171 205.842 106.487 205.637 106.692C205.431 106.897 205.16 107 204.823 107H204.493ZM201.391 107C201.053 107 200.782 106.897 200.577 106.692C200.386 106.487 200.291 106.171 200.291 105.746C200.291 105.306 200.386 104.991 200.577 104.8C200.782 104.595 201.053 104.492 201.391 104.492H201.721C202.058 104.492 202.329 104.595 202.535 104.8C202.74 104.991 202.843 105.306 202.843 105.746C202.843 106.171 202.74 106.487 202.535 106.692C202.329 106.897 202.058 107 201.721 107H201.391Z"
                  fill="#D1D1D1"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_483_50458"
                  x="87.4434"
                  y="86.2695"
                  width="134.502"
                  height="53.0098"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="8" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.845996 0 0 0 0 0.845996 0 0 0 0 0.845996 0 0 0 0.35 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_483_50458"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_483_50458"
                    result="shape"
                  />
                </filter>
                <clipPath id="clip0_483_50458">
                  <rect
                    width="23.2189"
                    height="18.9285"
                    fill="white"
                    transform="translate(0.78125 46.3926)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="font-shamel font-semibold text-white">
            <ul className="flex items-center gap-16">
              <li>الشروط والأحكام</li>
              <li>سياسة الخصوصية</li>
              <li>عن مزيد</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6 items-center">
            <p className="font-shamel font-semibold text-lg text-white">
              حمّل التطبيق الان
            </p>
            <div className="flex items-center gap-4">
              <svg
                width="150"
                height="51"
                viewBox="0 0 150 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_483_50443)">
                  <path
                    d="M138.055 0.500163H11.9518C11.4921 0.500163 11.038 0.500163 10.5796 0.502663C10.1958 0.505163 9.81509 0.512425 9.42764 0.518537C8.58593 0.528415 7.74619 0.602258 6.91573 0.739425C6.08644 0.879578 5.28313 1.14381 4.53296 1.52317C3.78372 1.90575 3.09911 2.40287 2.50397 2.9965C1.90571 3.58846 1.40702 4.27268 1.02706 5.02286C0.646059 5.77155 0.38187 6.57384 0.243619 7.40201C0.104055 8.22914 0.028954 9.06581 0.0189907 9.90451C0.0073581 10.2878 0.00612966 10.6723 0 11.0556V39.9484C0.00612966 40.3365 0.0073581 40.7125 0.0189907 41.1008C0.0289571 41.9394 0.104058 42.7761 0.243619 43.6032C0.381488 44.4318 0.645693 45.2346 1.02706 45.9835C1.40685 46.7313 1.90561 47.4127 2.50397 48.0014C3.09685 48.5977 3.7819 49.0951 4.53296 49.4748C5.28312 49.8552 6.08635 50.121 6.91573 50.2633C7.74633 50.3994 8.58598 50.4732 9.42764 50.4843C9.81509 50.4928 10.1958 50.4977 10.5796 50.4977C11.038 50.5002 11.4922 50.5002 11.9518 50.5002H138.055C138.505 50.5002 138.963 50.5002 139.414 50.4977C139.796 50.4977 140.187 50.4928 140.569 50.4843C141.409 50.4738 142.247 50.3999 143.076 50.2633C143.908 50.12 144.715 49.8542 145.468 49.4748C146.219 49.0949 146.903 48.5975 147.495 48.0014C148.092 47.4104 148.592 46.7295 148.977 45.9835C149.355 45.234 149.617 44.4313 149.753 43.6032C149.892 42.776 149.97 41.9395 149.985 41.1008C149.99 40.7125 149.99 40.3365 149.99 39.9484C150 39.4943 150 39.0427 150 38.5812V12.4203C150 11.9626 150 11.5085 149.99 11.0556C149.99 10.6723 149.99 10.2878 149.985 9.90446C149.97 9.06569 149.892 8.22921 149.753 7.40196C149.616 6.57426 149.355 5.77204 148.977 5.02281C148.203 3.51916 146.976 2.29519 145.468 1.52306C144.715 1.14462 143.908 0.880463 143.076 0.739312C142.248 0.601541 141.409 0.527672 140.569 0.518362C140.187 0.512262 139.796 0.504938 139.414 0.5025C138.963 0.5 138.505 0.5 138.055 0.5V0.500163Z"
                    fill="#A6A6A6"
                  />
                  <path
                    d="M10.5861 49.4062C10.2042 49.4062 9.83146 49.4014 9.45254 49.3929C8.66757 49.3827 7.88443 49.3145 7.10955 49.189C6.38702 49.0649 5.68708 48.8341 5.03281 48.5041C4.38455 48.1769 3.79328 47.7478 3.28166 47.2334C2.76263 46.725 2.33052 46.1353 2.00244 45.4878C1.67075 44.836 1.4412 44.1374 1.32179 43.4163C1.19283 42.6414 1.12306 41.8579 1.11308 41.0725C1.10513 40.8089 1.09473 39.9311 1.09473 39.9311V11.0554C1.09473 11.0554 1.10581 10.1912 1.11314 9.93725C1.1227 9.1531 1.19206 8.37082 1.32063 7.59716C1.44027 6.87406 1.67 6.17344 2.00187 5.51954C2.32874 4.87243 2.75845 4.28233 3.27435 3.7721C3.78967 3.25703 4.38283 2.82576 5.0322 2.49401C5.68496 2.16512 6.38358 1.93592 7.10465 1.81409C7.88207 1.6873 8.66793 1.61875 9.45562 1.60901L10.5867 1.59375H139.408L140.553 1.60963C141.333 1.61887 142.112 1.68681 142.882 1.81286C143.61 1.93622 144.316 2.16702 144.977 2.49768C146.278 3.16623 147.336 4.22395 148.004 5.52259C148.33 6.17197 148.557 6.86688 148.675 7.58374C148.805 8.36374 148.878 9.15217 148.893 9.94275C148.896 10.2968 148.896 10.677 148.896 11.0554C148.906 11.5242 148.906 11.9703 148.906 12.4202V38.581C148.906 39.0351 148.906 39.4783 148.896 39.925C148.896 40.3315 148.896 40.7039 148.891 41.0871C148.877 41.8636 148.805 42.638 148.677 43.404C148.56 44.1303 148.332 44.8344 148 45.4915C147.67 46.132 147.24 46.7166 146.727 47.2236C146.215 47.7409 145.623 48.1724 144.973 48.5018C144.315 48.8342 143.61 49.0659 142.882 49.189C142.107 49.3152 141.324 49.3833 140.539 49.3929C140.172 49.4014 139.787 49.4062 139.414 49.4062L138.055 49.4087L10.5861 49.4062Z"
                    fill="black"
                  />
                  <path
                    d="M31.0476 25.8744C31.0611 24.8311 31.339 23.8081 31.8555 22.9007C32.3719 21.9933 33.1102 21.2308 34.0016 20.6844C33.4353 19.8779 32.6883 19.2142 31.8198 18.746C30.9514 18.2779 29.9854 18.018 28.9986 17.9873C26.8937 17.7669 24.853 19.2433 23.7804 19.2433C22.687 19.2433 21.0355 18.0091 19.2571 18.0456C18.1068 18.0827 16.9857 18.4162 16.0031 19.0138C15.0205 19.6114 14.2099 20.4526 13.6502 21.4555C11.226 25.641 13.0342 31.7923 15.3565 35.1756C16.5184 36.8322 17.8763 38.6828 19.6531 38.6172C21.3918 38.5453 22.0411 37.5116 24.1399 37.5116C26.2192 37.5116 26.8284 38.6172 28.6412 38.5755C30.5069 38.5453 31.6824 36.9114 32.8035 35.239C33.6383 34.0586 34.2807 32.7539 34.7069 31.3734C33.623 30.9162 32.698 30.151 32.0473 29.1731C31.3965 28.1953 31.0489 27.048 31.0476 25.8744V25.8744Z"
                    fill="white"
                  />
                  <path
                    d="M27.6233 15.7637C28.6406 14.5459 29.1417 12.9807 29.0204 11.4004C27.4662 11.5632 26.0306 12.3039 24.9996 13.4749C24.4955 14.047 24.1095 14.7125 23.8635 15.4335C23.6175 16.1545 23.5164 16.9167 23.566 17.6766C24.3433 17.6846 25.1124 17.5166 25.8152 17.1852C26.518 16.8539 27.1362 16.3678 27.6233 15.7637Z"
                    fill="white"
                  />
                  <path
                    d="M53.0257 34.4246H47.0923L45.6674 38.6202H43.1543L48.7743 23.0977H51.3853L57.0053 38.6202H54.4493L53.0257 34.4246ZM47.7068 32.4886H52.41L50.0915 25.6795H50.0266L47.7068 32.4886Z"
                    fill="white"
                  />
                  <path
                    d="M69.1425 32.9613C69.1425 36.4782 67.2549 38.7377 64.4064 38.7377C63.6848 38.7753 62.9671 38.6096 62.3356 38.2594C61.7041 37.9092 61.1843 37.3888 60.8356 36.7577H60.7817V42.3632H58.4521V27.3021H60.707V29.1845H60.7499C61.1146 28.5564 61.6432 28.0386 62.2796 27.6863C62.9159 27.334 63.6361 27.1603 64.3635 27.1837C67.2438 27.1837 69.1425 29.4542 69.1425 32.9613ZM66.7481 32.9613C66.7481 30.6701 65.5607 29.1637 63.749 29.1637C61.9691 29.1637 60.7719 30.7018 60.7719 32.9613C60.7719 35.2416 61.9691 36.7687 63.749 36.7687C65.5607 36.7687 66.7481 35.2733 66.7481 32.9613Z"
                    fill="white"
                  />
                  <path
                    d="M81.6337 32.9613C81.6337 36.4782 79.7461 38.7377 76.8976 38.7377C76.176 38.7753 75.4583 38.6096 74.8268 38.2594C74.1953 37.9092 73.6755 37.3888 73.3268 36.7577H73.2729V42.3632H70.9434V27.3021H73.1982V29.1845H73.241C73.6058 28.5564 74.1344 28.0386 74.7707 27.6863C75.407 27.334 76.1272 27.1603 76.8547 27.1837C79.7351 27.1837 81.6337 29.4542 81.6337 32.9613ZM79.2393 32.9613C79.2393 30.6701 78.0519 29.1637 76.2402 29.1637C74.4603 29.1637 73.2631 30.7018 73.2631 32.9613C73.2631 35.2416 74.4603 36.7687 76.2402 36.7687C78.0519 36.7687 79.2393 35.2733 79.2393 32.9613H79.2393Z"
                    fill="white"
                  />
                  <path
                    d="M89.8895 34.2943C90.0621 35.8336 91.5617 36.8443 93.6109 36.8443C95.5744 36.8443 96.987 35.8335 96.987 34.4456C96.987 33.2407 96.135 32.5193 94.1177 32.0249L92.1003 31.5403C89.242 30.8518 87.915 29.5188 87.915 27.3557C87.915 24.6775 90.2555 22.8379 93.5791 22.8379C96.8683 22.8379 99.1231 24.6775 99.199 27.3557H96.8475C96.7067 25.8066 95.4226 24.8716 93.546 24.8716C91.6694 24.8716 90.3853 25.8176 90.3853 27.1946C90.3853 28.292 91.2054 28.9378 93.2118 29.4321L94.9268 29.852C98.1205 30.6052 99.4475 31.8845 99.4475 34.155C99.4475 37.059 97.1278 38.8779 93.4382 38.8779C89.9862 38.8779 87.6555 37.1018 87.5049 34.2941L89.8895 34.2943Z"
                    fill="white"
                  />
                  <path
                    d="M104.475 24.625V27.3032H106.633V29.1428H104.475V35.3818C104.475 36.3511 104.907 36.8027 105.856 36.8027C106.112 36.7983 106.368 36.7803 106.622 36.749V38.5776C106.196 38.6571 105.762 38.6931 105.328 38.685C103.031 38.685 102.134 37.8244 102.134 35.6296V29.1428H100.484V27.3032H102.134V24.625H104.475Z"
                    fill="white"
                  />
                  <path
                    d="M107.883 32.9624C107.883 29.4016 109.986 27.1641 113.265 27.1641C116.556 27.1641 118.649 29.4016 118.649 32.9624C118.649 36.533 116.567 38.7607 113.265 38.7607C109.965 38.7607 107.883 36.533 107.883 32.9624ZM116.275 32.9624C116.275 30.5198 115.153 29.0781 113.265 29.0781C111.378 29.0781 110.256 30.5308 110.256 32.9624C110.256 35.4148 111.378 36.8455 113.265 36.8455C115.153 36.8455 116.275 35.4148 116.275 32.9624H116.275Z"
                    fill="white"
                  />
                  <path
                    d="M120.569 27.302H122.791V29.2283H122.845C122.995 28.6267 123.349 28.095 123.846 27.7227C124.343 27.3503 124.954 27.16 125.575 27.1836C125.843 27.1827 126.111 27.2117 126.373 27.2703V29.4431C126.034 29.3399 125.681 29.2924 125.326 29.3028C124.988 29.2891 124.651 29.3486 124.337 29.4772C124.024 29.6058 123.743 29.8005 123.512 30.0478C123.281 30.2952 123.107 30.5894 123.001 30.9102C122.895 31.2311 122.861 31.5709 122.899 31.9065V38.6192H120.569L120.569 27.302Z"
                    fill="white"
                  />
                  <path
                    d="M137.113 35.2964C136.8 37.3508 134.794 38.7607 132.227 38.7607C128.925 38.7607 126.876 36.5549 126.876 33.0161C126.876 29.4663 128.936 27.1641 132.129 27.1641C135.269 27.1641 137.243 29.3149 137.243 32.7463V33.5422H129.228V33.6826C129.191 34.0991 129.243 34.5187 129.381 34.9135C129.519 35.3083 129.74 35.6693 130.029 35.9725C130.317 36.2756 130.667 36.5141 131.056 36.672C131.444 36.8299 131.861 36.9036 132.281 36.8882C132.831 36.9396 133.383 36.8125 133.856 36.5257C134.328 36.2389 134.695 35.8077 134.901 35.2964L137.113 35.2964ZM129.239 31.9187H134.912C134.933 31.5442 134.876 31.1694 134.745 30.8179C134.614 30.4664 134.411 30.1457 134.15 29.876C133.889 29.6063 133.574 29.3934 133.226 29.2506C132.878 29.1079 132.505 29.0383 132.129 29.0464C131.749 29.0441 131.373 29.1168 131.022 29.2602C130.671 29.4037 130.352 29.615 130.083 29.882C129.815 30.1491 129.602 30.4665 129.457 30.8161C129.312 31.1657 129.238 31.5404 129.239 31.9187V31.9187Z"
                    fill="white"
                  />
                  <path
                    d="M47.4155 11.4147C47.9039 11.3798 48.394 11.4533 48.8504 11.6301C49.3068 11.8069 49.7182 12.0825 50.0549 12.4371C50.3915 12.7916 50.6451 13.2162 50.7973 13.6803C50.9495 14.1444 50.9965 14.6364 50.9349 15.1208C50.9349 17.5036 49.6434 18.8733 47.4155 18.8733H44.7139V11.4147H47.4155ZM45.8756 17.8185H47.2858C47.6347 17.8393 47.984 17.7822 48.3081 17.6514C48.6321 17.5207 48.9229 17.3195 49.1592 17.0625C49.3955 16.8056 49.5713 16.4993 49.6739 16.166C49.7765 15.8328 49.8033 15.4809 49.7524 15.136C49.7996 14.7924 49.7701 14.4427 49.6659 14.1119C49.5617 13.781 49.3855 13.4773 49.1497 13.2224C48.914 12.9675 48.6246 12.7677 48.3024 12.6374C47.9801 12.5071 47.633 12.4495 47.2858 12.4687H45.8756V17.8185Z"
                    fill="white"
                  />
                  <path
                    d="M52.247 16.0572C52.2115 15.6873 52.2539 15.3141 52.3715 14.9615C52.4892 14.6089 52.6794 14.2847 52.93 14.0098C53.1807 13.7348 53.4862 13.5151 53.8269 13.3647C54.1677 13.2144 54.5362 13.1367 54.9088 13.1367C55.2815 13.1367 55.65 13.2144 55.9908 13.3647C56.3315 13.5151 56.637 13.7348 56.8876 14.0098C57.1383 14.2847 57.3285 14.6089 57.4461 14.9615C57.5638 15.3141 57.6062 15.6873 57.5707 16.0572C57.6069 16.4275 57.5649 16.8012 57.4476 17.1544C57.3303 17.5075 57.1402 17.8323 56.8895 18.1078C56.6388 18.3833 56.3331 18.6035 55.992 18.7542C55.6509 18.9048 55.2819 18.9827 54.9088 18.9827C54.5358 18.9827 54.1668 18.9048 53.8257 18.7542C53.4846 18.6035 53.1789 18.3833 52.9282 18.1078C52.6775 17.8323 52.4874 17.5075 52.3701 17.1544C52.2527 16.8012 52.2108 16.4275 52.247 16.0572V16.0572ZM56.4249 16.0572C56.4249 14.8371 55.8753 14.1236 54.9107 14.1236C53.9424 14.1236 53.3977 14.8371 53.3977 16.0572C53.3977 17.2871 53.9424 17.9951 54.9107 17.9951C55.8753 17.9951 56.4249 17.2822 56.4249 16.0572H56.4249Z"
                    fill="white"
                  />
                  <path
                    d="M64.6474 18.8728H63.4919L62.3253 14.7273H62.2371L61.0754 18.8728H59.9309L58.375 13.2441H59.5049L60.516 17.5391H60.5993L61.7597 13.2441H62.8284L63.9889 17.5391H64.077L65.0832 13.2441H66.1972L64.6474 18.8728Z"
                    fill="white"
                  />
                  <path
                    d="M67.5059 13.2431H68.5782V14.1373H68.6614C68.8027 13.8161 69.0408 13.5469 69.3428 13.3671C69.6447 13.1874 69.9953 13.106 70.3458 13.1344C70.6205 13.1139 70.8963 13.1552 71.1527 13.2553C71.4092 13.3554 71.6398 13.5118 71.8274 13.7128C72.015 13.9139 72.1549 14.1545 72.2366 14.4167C72.3184 14.679 72.3399 14.9563 72.2995 15.2279V18.8717H71.1856V15.5069C71.1856 14.6024 70.7914 14.1525 69.9676 14.1525C69.7811 14.1439 69.595 14.1755 69.4219 14.2453C69.2489 14.3151 69.093 14.4214 68.965 14.5568C68.837 14.6923 68.7398 14.8538 68.6803 15.0302C68.6207 15.2066 68.6001 15.3938 68.6198 15.5789V18.8718H67.5059L67.5059 13.2431Z"
                    fill="white"
                  />
                  <path
                    d="M74.0742 11.0469H75.1882V18.8728H74.0742V11.0469Z"
                    fill="white"
                  />
                  <path
                    d="M76.7372 16.0553C76.7017 15.6854 76.7442 15.3122 76.8618 14.9596C76.9795 14.607 77.1697 14.2828 77.4204 14.0078C77.6711 13.7328 77.9766 13.5131 78.3174 13.3628C78.6582 13.2124 79.0267 13.1348 79.3993 13.1348C79.772 13.1348 80.1405 13.2124 80.4813 13.3628C80.8221 13.5131 81.1276 13.7328 81.3783 14.0078C81.6289 14.2828 81.8192 14.607 81.9369 14.9596C82.0545 15.3122 82.097 15.6854 82.0615 16.0553C82.0976 16.4256 82.0557 16.7994 81.9383 17.1525C81.821 17.5057 81.6308 17.8304 81.3801 18.106C81.1294 18.3815 80.8236 18.6016 80.4825 18.7523C80.1414 18.9029 79.7724 18.9808 79.3993 18.9808C79.0263 18.9808 78.6573 18.9029 78.3162 18.7523C77.9751 18.6016 77.6693 18.3815 77.4186 18.106C77.1679 17.8304 76.9777 17.5057 76.8604 17.1525C76.743 16.7994 76.7011 16.4256 76.7372 16.0553V16.0553ZM80.9151 16.0553C80.9151 14.8353 80.3655 14.1218 79.4009 14.1218C78.4326 14.1218 77.8879 14.8353 77.8879 16.0554C77.8879 17.2852 78.4326 17.9932 79.4009 17.9932C80.3655 17.9932 80.9151 17.2803 80.9151 16.0553H80.9151Z"
                    fill="white"
                  />
                  <path
                    d="M83.2344 17.2822C83.2344 16.269 83.9909 15.6849 85.3338 15.6019L86.8627 15.514V15.0282C86.8627 14.4337 86.4685 14.098 85.7071 14.098C85.0853 14.098 84.6544 14.3257 84.5307 14.7236H83.4523C83.5661 13.7568 84.4781 13.1367 85.7585 13.1367C87.1736 13.1367 87.9718 13.8392 87.9718 15.0282V18.874H86.8994V18.083H86.8113C86.6324 18.3667 86.3812 18.5981 86.0833 18.7533C85.7855 18.9086 85.4516 18.9822 85.1159 18.9668C84.8789 18.9913 84.6394 18.9661 84.4128 18.8928C84.1862 18.8194 83.9776 18.6995 83.8003 18.5408C83.6231 18.382 83.4811 18.1881 83.3836 17.9713C83.2862 17.7545 83.2353 17.5198 83.2344 17.2822V17.2822ZM86.8627 16.8013V16.3307L85.4843 16.4186C84.707 16.4704 84.3544 16.7341 84.3544 17.2303C84.3544 17.7369 84.7951 18.0317 85.4011 18.0317C85.5787 18.0496 85.758 18.0318 85.9285 17.9792C86.099 17.9265 86.2571 17.8403 86.3935 17.7255C86.5299 17.6107 86.6417 17.4697 86.7223 17.3109C86.8029 17.1521 86.8506 16.9788 86.8627 16.8013V16.8013Z"
                    fill="white"
                  />
                  <path
                    d="M89.4355 16.056C89.4355 14.2775 90.3524 13.1508 91.7785 13.1508C92.1313 13.1346 92.4814 13.2188 92.7879 13.3937C93.0944 13.5686 93.3447 13.8268 93.5095 14.1383H93.5927V11.0469H94.7067V18.8728H93.6392V17.9835H93.5511C93.3736 18.2929 93.1146 18.5479 92.8022 18.721C92.4897 18.8941 92.1357 18.9787 91.7785 18.9656C90.3426 18.9656 89.4355 17.8389 89.4355 16.056ZM90.5863 16.056C90.5863 17.2499 91.1506 17.9683 92.0944 17.9683C93.0333 17.9683 93.6136 17.2395 93.6136 16.0609C93.6136 14.8878 93.0272 14.1487 92.0944 14.1487C91.1567 14.1487 90.5862 14.872 90.5862 16.056H90.5863Z"
                    fill="white"
                  />
                  <path
                    d="M99.3153 16.0572C99.2798 15.6873 99.3223 15.3141 99.4399 14.9615C99.5575 14.6089 99.7478 14.2847 99.9984 14.0098C100.249 13.7348 100.555 13.5151 100.895 13.3647C101.236 13.2144 101.605 13.1367 101.977 13.1367C102.35 13.1367 102.718 13.2144 103.059 13.3647C103.4 13.5151 103.705 13.7348 103.956 14.0098C104.207 14.2847 104.397 14.6089 104.514 14.9615C104.632 15.3141 104.675 15.6873 104.639 16.0572C104.675 16.4275 104.633 16.8012 104.516 17.1544C104.399 17.5075 104.209 17.8323 103.958 18.1078C103.707 18.3833 103.401 18.6035 103.06 18.7542C102.719 18.9048 102.35 18.9827 101.977 18.9827C101.604 18.9827 101.235 18.9048 100.894 18.7542C100.553 18.6035 100.247 18.3833 99.9965 18.1078C99.7458 17.8323 99.5557 17.5075 99.4384 17.1544C99.3211 16.8012 99.2792 16.4275 99.3153 16.0572V16.0572ZM103.493 16.0572C103.493 14.8371 102.944 14.1236 101.979 14.1236C101.011 14.1236 100.466 14.8371 100.466 16.0572C100.466 17.2871 101.011 17.9951 101.979 17.9951C102.944 17.9951 103.493 17.2822 103.493 16.0572Z"
                    fill="white"
                  />
                  <path
                    d="M106.134 13.2431H107.206V14.1373H107.289C107.431 13.8161 107.669 13.5469 107.971 13.3671C108.273 13.1874 108.623 13.106 108.974 13.1344C109.248 13.1139 109.524 13.1552 109.781 13.2553C110.037 13.3554 110.268 13.5118 110.455 13.7128C110.643 13.9139 110.783 14.1545 110.865 14.4167C110.946 14.679 110.968 14.9563 110.927 15.2279V18.8717H109.814V15.5069C109.814 14.6024 109.419 14.1525 108.596 14.1525C108.409 14.1439 108.223 14.1755 108.05 14.2453C107.877 14.3151 107.721 14.4214 107.593 14.5568C107.465 14.6923 107.368 14.8538 107.308 15.0302C107.249 15.2066 107.228 15.3938 107.248 15.5789V18.8718H106.134V13.2431Z"
                    fill="white"
                  />
                  <path
                    d="M117.222 11.8438V13.2707H118.445V14.2064H117.222V17.1007C117.222 17.6903 117.466 17.9485 118.02 17.9485C118.162 17.948 118.304 17.9395 118.445 17.9228V18.8481C118.245 18.8838 118.042 18.9028 117.839 18.9049C116.6 18.9049 116.107 18.4703 116.107 17.3851V14.2064H115.211V13.2707H116.107V11.8438H117.222Z"
                    fill="white"
                  />
                  <path
                    d="M119.967 11.0469H121.071V14.1487H121.159C121.307 13.8245 121.552 13.5538 121.86 13.3734C122.168 13.1929 122.524 13.1116 122.88 13.1404C123.153 13.1256 123.427 13.171 123.68 13.2736C123.934 13.3762 124.161 13.5332 124.347 13.7337C124.533 13.9341 124.672 14.1729 124.754 14.4331C124.837 14.6932 124.861 14.9683 124.824 15.2388V18.8728H123.709V15.5128C123.709 14.6138 123.289 14.1584 122.502 14.1584C122.311 14.1428 122.118 14.169 121.938 14.2353C121.758 14.3017 121.594 14.4064 121.459 14.5424C121.323 14.6783 121.219 14.8421 121.154 15.0222C121.089 15.2024 121.064 15.3946 121.081 15.5854V18.8728H119.967L119.967 11.0469Z"
                    fill="white"
                  />
                  <path
                    d="M131.319 17.3524C131.168 17.8668 130.84 18.3118 130.393 18.6095C129.946 18.9072 129.408 19.0386 128.874 18.9808C128.502 18.9906 128.132 18.9196 127.791 18.7726C127.449 18.6257 127.144 18.4065 126.896 18.13C126.647 17.8536 126.463 17.5267 126.354 17.1719C126.245 16.8171 126.215 16.443 126.266 16.0755C126.217 15.7069 126.247 15.332 126.356 14.9762C126.464 14.6203 126.648 14.2919 126.895 14.013C127.141 13.7342 127.445 13.5115 127.786 13.36C128.127 13.2085 128.496 13.1317 128.869 13.1349C130.439 13.1349 131.387 14.2049 131.387 15.9724V16.36H127.401V16.4222C127.384 16.6288 127.41 16.8367 127.477 17.0326C127.545 17.2286 127.653 17.4082 127.795 17.56C127.937 17.7118 128.108 17.8325 128.299 17.9142C128.49 17.996 128.696 18.037 128.904 18.0347C129.171 18.0666 129.441 18.0188 129.68 17.8973C129.919 17.7758 130.116 17.5861 130.247 17.3523L131.319 17.3524ZM127.401 15.5384H130.252C130.266 15.3495 130.24 15.1598 130.176 14.9814C130.113 14.803 130.012 14.6399 129.881 14.5025C129.75 14.3652 129.592 14.2567 129.417 14.184C129.241 14.1113 129.053 14.076 128.863 14.0803C128.67 14.0779 128.479 14.114 128.3 14.1864C128.122 14.2588 127.96 14.3661 127.823 14.502C127.687 14.6379 127.58 14.7996 127.507 14.9776C127.435 15.1556 127.399 15.3463 127.401 15.5384H127.401Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_483_50443">
                    <rect
                      width="150"
                      height="50"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="169"
                height="51"
                viewBox="0 0 169 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_483_50444)">
                  <g clip-path="url(#clip1_483_50444)">
                    <path
                      d="M162.398 50.25H6.26769C2.83281 50.25 0.0224609 47.4516 0.0224609 44.0312V6.71875C0.0224609 3.29844 2.83281 0.5 6.26769 0.5H162.398C165.833 0.5 168.644 3.29844 168.644 6.71875V44.0312C168.644 47.4516 165.833 50.25 162.398 50.25Z"
                      fill="#100F0D"
                    />
                    <path
                      d="M162.398 0.5H6.26769C2.83281 0.5 0.0224609 3.29844 0.0224609 6.71875V44.0312C0.0224609 47.4516 2.83281 50.25 6.26769 50.25H162.398C165.833 50.25 168.644 47.4516 168.644 44.0312V6.71875C168.644 3.29844 165.833 0.5 162.398 0.5ZM162.398 1.4945C165.291 1.4945 167.644 3.83823 167.644 6.71875V44.0312C167.644 46.9118 165.291 49.2555 162.398 49.2555H6.26769C3.37487 49.2555 1.02219 46.9118 1.02219 44.0312V6.71875C1.02219 3.83823 3.37487 1.4945 6.26769 1.4945H162.398Z"
                      fill="#A2A2A1"
                    />
                    <path
                      d="M25.8985 24.6587L12.6006 38.7131C12.6011 38.716 12.6021 38.7184 12.6026 38.7213C13.0104 40.2473 14.4102 41.3711 16.0716 41.3711C16.7357 41.3711 17.3592 41.1923 17.8939 40.8784L17.9364 40.8537L32.9049 32.2529L25.8985 24.6587Z"
                      fill="#EB3131"
                    />
                    <path
                      d="M39.3523 22.266L39.3395 22.2573L32.8772 18.5269L25.5967 24.978L32.9026 32.252L39.3308 28.5586C40.4578 27.9528 41.2229 26.7698 41.2229 25.4055C41.2229 24.051 40.4681 22.8738 39.3523 22.266Z"
                      fill="#F6B60B"
                    />
                    <path
                      d="M12.6005 12.0383C12.5205 12.3318 12.4785 12.6393 12.4785 12.9585V37.7932C12.4785 38.1119 12.52 38.4204 12.601 38.7129L26.3566 25.0181L12.6005 12.0383Z"
                      fill="#5778C5"
                    />
                    <path
                      d="M25.9971 25.375L32.8801 18.5232L17.9285 9.89131C17.3851 9.56719 16.7508 9.38013 16.0721 9.38013C14.4107 9.38013 13.009 10.5058 12.6011 12.0338C12.6006 12.0353 12.6006 12.0363 12.6006 12.0376L25.9971 25.375Z"
                      fill="#3BAD49"
                    />
                  </g>
                  <path
                    d="M59.3547 13.3657C59.3547 14.4077 59.0448 15.2376 58.4242 15.8566C57.7192 16.5927 56.8004 16.9609 55.6708 16.9609C54.5891 16.9609 53.6694 16.5878 52.9131 15.8405C52.1554 15.0938 51.7773 14.1678 51.7773 13.0629C51.7773 11.9576 52.1554 11.0321 52.9131 10.2848C53.6694 9.53805 54.5891 9.16442 55.6708 9.16442C56.2076 9.16442 56.7214 9.26889 57.2093 9.47735C57.6972 9.68631 58.0885 9.96367 58.3813 10.3111L57.7226 10.9674C57.2264 10.3771 56.5433 10.0822 55.6708 10.0822C54.8819 10.0822 54.1998 10.3582 53.6241 10.9106C53.0483 11.4635 52.7605 12.1806 52.7605 13.0629C52.7605 13.9453 53.0483 14.6623 53.6241 15.2153C54.1998 15.7677 54.8819 16.0436 55.6708 16.0436C56.5077 16.0436 57.2054 15.7662 57.764 15.2104C58.1266 14.8484 58.3364 14.3451 58.3924 13.6989H55.6708V12.8025H59.3025C59.3376 12.9974 59.3547 13.1844 59.3547 13.3657Z"
                    fill="white"
                  />
                  <path
                    d="M59.3547 13.3643H59.2297C59.2287 14.3826 58.9301 15.1735 58.3358 15.7673L58.3344 15.7683L58.3339 15.7693C57.6513 16.48 56.7739 16.8337 55.6707 16.8352C54.6179 16.8337 53.7367 16.4761 53.0008 15.7513C52.2666 15.0249 51.9035 14.1382 51.9022 13.0616C51.9035 11.9845 52.2666 11.0983 53.0008 10.3724C53.7367 9.64704 54.6179 9.28896 55.6707 9.28747C56.1914 9.28747 56.6871 9.38859 57.1599 9.5902C57.6332 9.79331 58.007 10.0595 58.2856 10.39L58.3812 10.3097L58.2929 10.2218L57.6342 10.8786L57.7225 10.9661L57.8187 10.8865C57.2994 10.2669 56.5706 9.95463 55.6707 9.9565C54.8526 9.9555 54.1329 10.2465 53.5376 10.8199C52.9365 11.3952 52.6345 12.1525 52.6355 13.0616C52.6345 13.9707 52.9365 14.728 53.5376 15.3033C54.1329 15.8766 54.8526 16.1677 55.6707 16.1667C56.5354 16.1682 57.2722 15.8761 57.8523 15.297C58.2397 14.9102 58.4593 14.3744 58.5169 13.7082L58.5285 13.5732H55.7957V12.9255H59.3024V12.8011L59.1794 12.823C59.2136 13.0116 59.2297 13.1908 59.2297 13.3643H59.3547H59.4796C59.4796 13.1753 59.4619 12.981 59.4253 12.7789L59.4069 12.6768H55.5458V13.6975V13.8219H58.3924V13.6975L58.268 13.6868C58.2129 14.3127 58.0128 14.784 57.6756 15.1212C57.1389 15.6536 56.4803 15.9164 55.6707 15.9179C54.9111 15.9169 54.2665 15.6565 53.7108 15.1245C53.1605 14.5944 52.8867 13.9177 52.8853 13.0616C52.8867 12.2055 53.1605 11.5288 53.7108 10.9987C54.2665 10.4667 54.9111 10.2062 55.6707 10.2053C56.5154 10.2072 57.1532 10.4851 57.6269 11.0463L57.7147 11.1503L58.4696 10.3977L58.5505 10.3171L58.4768 10.23C58.1699 9.8657 57.7611 9.57652 57.2584 9.36184C56.7549 9.14655 56.2236 9.03871 55.6707 9.03871C54.5603 9.03772 53.602 9.4264 52.8247 10.1956C52.0446 10.9632 51.6513 11.9281 51.6523 13.0616C51.6513 14.1946 52.0445 15.16 52.8252 15.9281C53.602 16.6968 54.5603 17.085 55.6707 17.084C56.8271 17.085 57.7864 16.7025 58.5144 15.9412L58.4241 15.8553L58.5124 15.9432C59.1594 15.2994 59.4804 14.4298 59.4796 13.3643H59.3547Z"
                    fill="white"
                  />
                  <path
                    d="M65.1115 10.2471H61.6985V12.6132H64.7763V13.51H61.6985V15.8762H65.1115V16.793H60.7363V9.33028H65.1115V10.2471Z"
                    fill="white"
                  />
                  <path
                    d="M65.1124 10.2477V10.1233H61.5745V12.7382H64.6523V13.3859L61.5745 13.3863V16.0012H64.9874V16.6692H60.8621V9.45528H64.9874V10.2477H65.1124V10.1233V10.2477H65.2373V9.3309V9.20653H60.6123V16.918H65.2373V15.8768V15.7524H61.8243V13.635H64.9021V12.6139V12.4895H61.8243V10.3721H65.2373V10.2477H65.1124Z"
                    fill="white"
                  />
                  <path
                    d="M69.1731 16.793H68.2094V10.2471H66.1162V9.33028H71.2663V10.2471H69.1731V16.793Z"
                    fill="white"
                  />
                  <path
                    d="M69.173 16.7936V16.6692H68.3342V10.1233H66.241V9.45528H71.1413V10.1233H69.0481V16.7936H69.173V16.6692V16.7936H69.2979V10.3721H71.3911V9.3309V9.20653H65.9912V10.2477V10.3721H68.0844V16.918H69.173H69.2979V16.7936H69.173Z"
                    fill="white"
                  />
                  <path
                    d="M74.9922 16.793V9.33028H75.9548V16.793H74.9922Z"
                    fill="white"
                  />
                  <path
                    d="M74.9921 16.7936H75.117V9.45528H75.8298V16.6692H74.9921V16.7936H75.117H74.9921V16.918H75.9548H76.0797V9.20653H74.9921H74.8672V16.918H74.9921V16.7936Z"
                    fill="white"
                  />
                  <path
                    d="M80.2267 16.793H79.263V10.2471H77.1699V9.33028H82.3199V10.2471H80.2267V16.793Z"
                    fill="white"
                  />
                  <path
                    d="M80.2266 16.7936V16.6692H79.3878V10.1233H77.2947V9.45528H82.1949V10.1233H80.1017V16.7936H80.2266V16.6692V16.7936H80.3515V10.3721H82.4447V9.3309V9.20653H77.0449V10.2477V10.3721H79.138V16.918H80.2266H80.3515V16.7936H80.2266Z"
                    fill="white"
                  />
                  <path
                    d="M87.2848 15.2051C87.8395 15.7643 88.5182 16.0436 89.3209 16.0436C90.1235 16.0436 90.8026 15.7643 91.3565 15.2051C91.9117 14.6459 92.1899 13.9311 92.1899 13.0629C92.1899 12.1948 91.9117 11.48 91.3565 10.9208C90.8026 10.3616 90.1235 10.0822 89.3209 10.0822C88.5182 10.0822 87.8395 10.3616 87.2848 10.9208C86.7309 11.48 86.4529 12.1948 86.4529 13.0629C86.4529 13.9311 86.7309 14.6459 87.2848 15.2051ZM92.0688 15.8298C91.332 16.5843 90.4157 16.9609 89.3209 16.9609C88.2249 16.9609 87.3091 16.5843 86.5739 15.8298C85.8366 15.0762 85.4697 14.1537 85.4697 13.0629C85.4697 11.9721 85.8366 11.0495 86.5739 10.296C87.3091 9.54141 88.2249 9.16442 89.3209 9.16442C90.4099 9.16442 91.3238 9.5434 92.064 10.3009C92.8032 11.0583 93.173 11.979 93.173 13.0629C93.173 14.1537 92.804 15.0762 92.0688 15.8298Z"
                    fill="white"
                  />
                  <path
                    d="M87.2847 15.2038L87.1959 15.2912C87.7712 15.8728 88.4889 16.1682 89.3208 16.1667C90.1522 16.1682 90.8709 15.8728 91.4452 15.2912C92.0243 14.7091 92.3156 13.956 92.3147 13.0616C92.3156 12.1672 92.0243 11.4141 91.4452 10.832C90.8709 10.2504 90.1522 9.955 89.3208 9.9565C88.4889 9.955 87.7712 10.2504 87.1959 10.832C86.6182 11.4141 86.3264 12.1672 86.3279 13.0616C86.3264 13.956 86.6182 14.7091 87.1959 15.2912L87.2847 15.2038L87.3735 15.1163C86.8436 14.5794 86.5787 13.904 86.5777 13.0616C86.5787 12.2192 86.8436 11.5438 87.3735 11.0069C87.9082 10.4701 88.5469 10.2067 89.3208 10.2053C90.0941 10.2067 90.7342 10.4701 91.2676 11.0069C91.7985 11.5438 92.0634 12.2192 92.0644 13.0616C92.0634 13.904 91.7985 14.5794 91.2676 15.1163C90.7342 15.6531 90.0941 15.9164 89.3208 15.9179C88.5469 15.9164 87.9082 15.6531 87.3735 15.1163L87.2847 15.2038ZM92.0688 15.8285L91.9795 15.7421C91.2632 16.4728 90.3874 16.8337 89.3208 16.8352C88.2537 16.8337 87.3778 16.4728 86.663 15.7421L86.6596 15.7382L86.663 15.7421C85.9483 15.0089 85.5955 14.1247 85.5945 13.0616C85.5955 11.9985 85.9483 11.1143 86.663 10.3811C87.3778 9.6504 88.2537 9.28896 89.3208 9.28747C90.3805 9.28896 91.2544 9.65189 91.9746 10.3865C92.6918 11.123 93.0465 12.0059 93.048 13.0616C93.0465 14.1247 92.6928 15.0089 91.9795 15.7421L92.0688 15.8285L92.1586 15.915C92.9158 15.1406 93.2987 14.18 93.2979 13.0616C93.2987 11.9495 92.9143 10.9909 92.1536 10.2131C91.3925 9.43224 90.4391 9.03734 89.3208 9.03871C88.1966 9.03734 87.2403 9.43037 86.484 10.2082V10.2077C85.7253 10.9826 85.3437 11.9432 85.3447 13.0616C85.3437 14.18 85.7253 15.1406 86.484 15.9155L86.4874 15.9189L86.484 15.915C87.2403 16.6928 88.1966 17.085 89.3208 17.084C90.4445 17.085 91.4007 16.6928 92.1586 15.915L92.0688 15.8285Z"
                    fill="white"
                  />
                  <path
                    d="M94.5244 16.793V9.33028H95.6964L99.3387 15.1358H99.3802L99.3387 13.6976V9.33028H100.302V16.793H99.2973L95.4866 10.7062H95.4451L95.4866 12.1448V16.793H94.5244Z"
                    fill="white"
                  />
                  <path
                    d="M94.5243 16.7936H94.6492V9.45528H95.627L99.2693 15.2608H99.3801H99.5084L99.4635 13.6963V9.45528H100.177V16.6692H99.3665L95.5558 10.5824H95.445H95.3167L95.3616 12.1474V16.6692H94.5243V16.7936H94.6492H94.5243V16.918H95.4865H95.6114V12.1435L95.5699 10.7034L95.445 10.7068V10.8312H95.4865V10.7068L95.3806 10.7729L99.2278 16.918H100.302H100.427V9.20653H99.3386H99.2137V13.6997L99.2552 15.1397L99.3801 15.1364V15.012H99.3386V15.1364L99.4446 15.0703L95.7655 9.20653H94.5243H94.3994V16.918H94.5243V16.7936Z"
                    fill="white"
                  />
                  <path
                    d="M133.697 37.9379H136.027V22.3892H133.697V37.9379ZM154.69 27.9901L152.018 34.7313H151.938L149.165 27.9901H146.654L150.813 37.4122L148.442 42.6531H150.874L157.282 27.9901H154.69ZM141.472 36.1719C140.708 36.1719 139.643 35.7919 139.643 34.8513C139.643 33.6512 140.97 33.1911 142.114 33.1911C143.14 33.1911 143.62 33.4112 144.244 33.7115C144.063 35.1516 142.817 36.1719 141.472 36.1719ZM141.753 27.65C140.066 27.65 138.318 28.3904 137.595 30.0307L139.663 30.8906C140.106 30.0307 140.929 29.7503 141.793 29.7503C142.998 29.7503 144.224 30.4709 144.244 31.7511V31.9109C143.822 31.6709 142.918 31.3109 141.813 31.3109C139.583 31.3109 137.313 32.5308 137.313 34.8114C137.313 36.8919 139.141 38.2323 141.19 38.2323C142.757 38.2323 143.62 37.5322 144.164 36.7122H144.244V37.9122H146.493V31.9507C146.493 29.1906 144.425 27.65 141.753 27.65ZM127.349 29.8829H124.034V24.5532H127.349C129.091 24.5532 130.08 25.9898 130.08 27.218C130.08 28.423 129.091 29.8829 127.349 29.8829ZM127.289 22.3892H121.704V37.9379H124.034V32.047H127.289C129.872 32.047 132.411 30.1847 132.411 27.218C132.411 24.2515 129.872 22.3892 127.289 22.3892ZM96.835 36.1747C95.2249 36.1747 93.8767 34.8323 93.8767 32.9885C93.8767 31.1253 95.2249 29.7625 96.835 29.7625C98.4247 29.7625 99.6723 31.1253 99.6723 32.9885C99.6723 34.8323 98.4247 36.1747 96.835 36.1747ZM99.5113 28.8608H99.4307C98.9078 28.2398 97.9011 27.6787 96.6336 27.6787C93.9773 27.6787 91.5426 30.003 91.5426 32.9885C91.5426 35.9542 93.9773 38.2586 96.6336 38.2586C97.9011 38.2586 98.9078 37.6974 99.4307 37.0566H99.5113V37.8179C99.5113 39.842 98.4247 40.924 96.674 40.924C95.2453 40.924 94.3599 39.9017 93.9973 39.0403L91.9651 39.8818C92.5487 41.2844 94.0983 43.0078 96.674 43.0078C99.4108 43.0078 101.725 41.4045 101.725 37.4972V27.9994H99.5113V28.8608ZM103.335 37.9379H105.669V22.3887H103.335V37.9379ZM109.11 32.8083C109.05 30.7643 110.7 29.7226 111.887 29.7226C112.813 29.7226 113.598 30.1832 113.859 30.845L109.11 32.8083ZM116.354 31.0451C115.912 29.8625 114.563 27.6787 111.806 27.6787C109.07 27.6787 106.796 29.8227 106.796 32.9686C106.796 35.9343 109.05 38.2586 112.068 38.2586C114.503 38.2586 115.912 36.7757 116.496 35.9143L114.684 34.7118C114.081 35.5936 113.255 36.1747 112.068 36.1747C110.881 36.1747 110.036 35.6336 109.492 34.5719L116.595 31.6461L116.354 31.0451ZM59.761 29.3018V31.546H65.1538C64.9928 32.8083 64.5703 33.73 63.9262 34.3712C63.1417 35.153 61.9141 36.0144 59.761 36.0144C56.4405 36.0144 53.8448 33.3495 53.8448 30.0433C53.8448 26.737 56.4405 24.0717 59.761 24.0717C61.552 24.0717 62.8597 24.7732 63.8257 25.675L65.4154 24.0921C64.0673 22.8094 62.2761 21.8276 59.761 21.8276C55.2129 21.8276 51.3896 25.5147 51.3896 30.0433C51.3896 34.5719 55.2129 38.2586 59.761 38.2586C62.2161 38.2586 64.0673 37.4574 65.516 35.9542C67.0051 34.4714 67.4681 32.3875 67.4681 30.7046C67.4681 30.1832 67.428 29.7027 67.3471 29.3018H59.761ZM73.5993 36.1747C71.9892 36.1747 70.6006 34.8522 70.6006 32.9686C70.6006 31.065 71.9892 29.7625 73.5993 29.7625C75.2089 29.7625 76.5975 31.065 76.5975 32.9686C76.5975 34.8522 75.2089 36.1747 73.5993 36.1747ZM73.5993 27.6787C70.661 27.6787 68.2663 29.9028 68.2663 32.9686C68.2663 36.0144 70.661 38.2586 73.5993 38.2586C76.5371 38.2586 78.9318 36.0144 78.9318 32.9686C78.9318 29.9028 76.5371 27.6787 73.5993 27.6787ZM85.2322 36.1747C83.6227 36.1747 82.234 34.8522 82.234 32.9686C82.234 31.065 83.6227 29.7625 85.2322 29.7625C86.8419 29.7625 88.2305 31.065 88.2305 32.9686C88.2305 34.8522 86.8419 36.1747 85.2322 36.1747ZM85.2322 27.6787C82.294 27.6787 79.8998 29.9028 79.8998 32.9686C79.8998 36.0144 82.294 38.2586 85.2322 38.2586C88.1701 38.2586 90.5648 36.0144 90.5648 32.9686C90.5648 29.9028 88.1701 27.6787 85.2322 27.6787Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_483_50444">
                    <rect
                      width="169"
                      height="50"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                  <clipPath id="clip1_483_50444">
                    <rect
                      width="169"
                      height="50"
                      fill="white"
                      transform="translate(0.0224609 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className="w-full">
              <ul className="flex items-center justify-between">
                <li>
                  <div className="rounded-full p-3 bg-[#D6CAE41A] bg-opacity-10">
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.5004 2.5C10.9665 2.49993 9.45315 2.85274 8.0774 3.53113C6.70165 4.20952 5.5004 5.19531 4.56659 6.41222C3.63278 7.62914 2.99143 9.04457 2.69216 10.549C2.3929 12.0535 2.44374 13.6066 2.84075 15.0882C3.23776 16.5699 3.9703 17.9403 4.9817 19.0936C5.9931 20.2468 7.25625 21.1519 8.67342 21.7389C10.0906 22.3259 11.6238 22.5789 13.1544 22.4786C14.685 22.3782 16.1721 21.927 17.5004 21.16C17.6199 21.0975 17.7256 21.0114 17.811 20.907C17.8963 20.8027 17.9597 20.6821 17.9973 20.5525C18.0349 20.423 18.0459 20.2872 18.0296 20.1533C18.0134 20.0194 17.9702 19.8902 17.9027 19.7735C17.8352 19.6567 17.7448 19.5548 17.6369 19.4739C17.529 19.393 17.4058 19.3347 17.2748 19.3026C17.1438 19.2705 17.0077 19.2653 16.8746 19.2872C16.7415 19.3091 16.6143 19.3576 16.5004 19.43C14.9754 20.3105 13.2024 20.6632 11.4565 20.4334C9.71051 20.2036 8.08919 19.4041 6.8439 18.159C5.59862 16.9138 4.79897 15.2926 4.56897 13.5467C4.33897 11.8008 4.69146 10.0277 5.57179 8.50257C6.45212 6.97741 7.81108 5.78532 9.43794 5.11119C11.0648 4.43706 12.8686 4.31855 14.5697 4.77404C16.2708 5.22953 17.774 6.23358 18.8463 7.63046C19.9186 9.02734 20.5 10.739 20.5004 12.5V13.25C20.5004 13.7141 20.3161 14.1592 19.9879 14.4874C19.6597 14.8156 19.2146 15 18.7504 15C18.2863 15 17.8412 14.8156 17.513 14.4874C17.1848 14.1592 17.0004 13.7141 17.0004 13.25V9C17.0004 8.73478 16.8951 8.48043 16.7075 8.29289C16.52 8.10536 16.2657 8 16.0004 8C15.7679 7.99483 15.5408 8.07088 15.3583 8.21507C15.1758 8.35926 15.0492 8.56257 15.0004 8.79C14.2654 8.28158 13.3942 8.0063 12.5004 8C11.7476 7.991 11.0045 8.17102 10.3393 8.5236C9.67408 8.87617 9.10794 9.39001 8.69275 10.0181C8.27755 10.6461 8.02657 11.3683 7.9628 12.1185C7.89902 12.8687 8.02449 13.6229 8.32771 14.312C8.63093 15.0011 9.1022 15.6032 9.69837 16.063C10.2945 16.5228 10.9965 16.8257 11.7401 16.9439C12.4836 17.0621 13.245 16.9918 13.9543 16.7396C14.6637 16.4873 15.2985 16.0611 15.8004 15.5C16.2756 16.1153 16.9307 16.5673 17.6746 16.793C18.4185 17.0188 19.2143 17.0071 19.9512 16.7596C20.6882 16.5121 21.3297 16.0411 21.7866 15.4121C22.2435 14.7831 22.493 14.0274 22.5004 13.25V12.5C22.5004 11.1868 22.2418 9.88642 21.7392 8.67317C21.2367 7.45991 20.5001 6.35752 19.5715 5.42893C18.6429 4.50035 17.5405 3.76375 16.3273 3.2612C15.114 2.75866 13.8137 2.5 12.5004 2.5ZM12.5004 15C12.006 15 11.5226 14.8534 11.1115 14.5787C10.7004 14.304 10.38 13.9135 10.1907 13.4567C10.0015 12.9999 9.95201 12.4972 10.0485 12.0123C10.1449 11.5273 10.383 11.0819 10.7327 10.7322C11.0823 10.3826 11.5278 10.1445 12.0127 10.048C12.4977 9.95157 13.0003 10.0011 13.4571 10.1903C13.914 10.3795 14.3044 10.7 14.5791 11.1111C14.8538 11.5222 15.0004 12.0055 15.0004 12.5C15.0004 13.163 14.737 13.7989 14.2682 14.2678C13.7994 14.7366 13.1635 15 12.5004 15Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </li>
                <li>
                  <div className="rounded-full p-3 bg-[#D6CAE41A] bg-opacity-10">
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_483_50451)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16.833 3.5C19.5944 3.5 21.833 5.73858 21.833 8.5V16.5C21.833 19.2614 19.5944 21.5 16.833 21.5H8.83301C6.07159 21.5 3.83301 19.2614 3.83301 16.5V8.5C3.83301 5.73858 6.07159 3.5 8.83301 3.5H16.833ZM16.833 5.5H8.83301C7.17616 5.5 5.83301 6.84315 5.83301 8.5V16.5C5.83301 18.1569 7.17616 19.5 8.83301 19.5H16.833C18.4899 19.5 19.833 18.1569 19.833 16.5V8.5C19.833 6.84315 18.4899 5.5 16.833 5.5ZM12.833 8.5C15.0421 8.5 16.833 10.2909 16.833 12.5C16.833 14.7091 15.0421 16.5 12.833 16.5C10.6239 16.5 8.83301 14.7091 8.83301 12.5C8.83301 10.2909 10.6239 8.5 12.833 8.5ZM12.833 10.5C11.7284 10.5 10.833 11.3954 10.833 12.5C10.833 13.6046 11.7284 14.5 12.833 14.5C13.9376 14.5 14.833 13.6046 14.833 12.5C14.833 11.3954 13.9376 10.5 12.833 10.5ZM17.333 7C17.8853 7 18.333 7.44772 18.333 8C18.333 8.55228 17.8853 9 17.333 9C16.7807 9 16.333 8.55228 16.333 8C16.333 7.44772 16.7807 7 17.333 7Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_483_50451">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(0.833008 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </li>
                <li>
                  <div className="rounded-full p-3 bg-[#D6CAE41A] bg-opacity-10">
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_483_50449)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M14.167 3.5C14.7193 3.5 15.167 3.94772 15.167 4.5C15.167 6.43245 16.5413 8.04898 18.3662 8.41988C18.9074 8.52988 19.257 9.0578 19.147 9.59902C19.037 10.1402 18.509 10.4898 17.9678 10.3798C16.9056 10.1639 15.945 9.66742 15.167 8.97103V17.5C15.167 20.2614 12.9284 22.5 10.167 22.5C7.40557 22.5 5.16699 20.2614 5.16699 17.5C5.16699 14.7386 7.40557 12.5 10.167 12.5C10.7193 12.5 11.167 12.9477 11.167 13.5C11.167 14.0523 10.7193 14.5 10.167 14.5C8.51014 14.5 7.16699 15.8431 7.16699 17.5C7.16699 19.1569 8.51014 20.5 10.167 20.5C11.8239 20.5 13.167 19.1569 13.167 17.5V4.5C13.167 3.94772 13.6147 3.5 14.167 3.5Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_483_50449">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(0.166992 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </li>{" "}
                <li>
                  <div className="rounded-full p-3 bg-[#D6CAE41A] bg-opacity-10">
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_483_50447)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M18.3171 7.48948C17.9641 6.98123 17.0202 6.26792 15.491 6.57507C14.5994 6.75417 14.0659 7.1962 13.7269 7.77774C13.3657 8.39717 13.1912 9.24021 13.1912 10.2216C13.1912 10.7739 12.7435 11.2216 12.1912 11.2216C9.82512 11.2216 7.57321 10.519 5.67819 8.61741C5.55529 9.30147 5.46954 10.1143 5.51021 10.9571C5.56261 12.0431 5.8223 13.1327 6.43722 14.0657C7.04164 14.9828 8.03719 15.8229 9.70065 16.3502C10.0323 16.4553 10.2855 16.7253 10.3692 17.063C10.4528 17.4007 10.3549 17.7577 10.1106 18.0055C9.51965 18.6049 8.92529 19.0545 8.31459 19.4104C9.37536 19.5201 10.3971 19.5281 11.3447 19.4424C13.2643 19.2688 14.7936 18.7194 15.75 17.9433C17.7626 16.3101 18.8404 13.8764 18.6394 9.79874C18.6064 9.12772 19.2526 8.40527 19.5647 7.85665C19.0938 7.9447 18.6218 7.92821 18.3171 7.48948ZM5.09375 5.48428C5.4629 5.44125 5.82546 5.60648 6.03516 5.91331C7.51054 8.07212 9.28262 8.97018 11.2489 9.1745C11.3454 8.33331 11.5724 7.50216 11.9991 6.7704C12.625 5.69675 13.643 4.90631 15.0972 4.61423C17.1066 4.21063 18.6366 4.93833 19.5244 5.82954L21.3162 5.49458C21.699 5.42304 22.0884 5.58014 22.3144 5.89722C22.5403 6.2143 22.5617 6.6337 22.3691 6.97211L20.6496 9.99419C20.8064 14.3556 19.5944 17.3993 17.0103 19.4963C15.6395 20.6086 13.678 21.2395 11.5249 21.4343C9.35497 21.6306 6.90214 21.3932 4.46382 20.6812C4.03604 20.5563 3.74254 20.1634 3.74412 19.7178C3.74569 19.2721 4.04195 18.8813 4.4706 18.7594C5.69682 18.4107 6.63012 18.1092 7.47377 17.5827C6.27531 16.9464 5.39225 16.1146 4.76726 15.1663C3.89859 13.8482 3.57648 12.3788 3.51253 11.0535C3.44859 9.72833 3.64009 8.50097 3.84178 7.61514C3.95659 7.11088 4.09069 6.60427 4.27553 6.12032C4.40978 5.77152 4.72461 5.52732 5.09375 5.48428Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_483_50447">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(0.5 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
