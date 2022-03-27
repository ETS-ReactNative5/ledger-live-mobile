// @flow
import React from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
  height: number,
  width: number,
};

export default function Maestro({ height = 12, width = 21 }: Props) {
  return (
    <Svg viewBox="0 0 21 12" width={width} height={height}>
      <Path
        d="M10.7428 10.4467C11.9561 9.34883 12.7145 7.76212 12.7145 5.99863C12.7145 4.23529 11.9561 2.64986 10.7428 1.5518C9.68115 0.586617 8.26259 -0.000732422 6.71916 -0.000732422C3.40025 -0.000732422 0.714844 2.68515 0.714844 5.99863C0.714844 9.31338 3.40025 11.9993 6.71916 11.9993C8.26243 11.9994 9.68099 11.4108 10.7428 10.4467Z"
        fill="#0066CB"
      />
      <Path
        d="M10.7424 10.4469C11.9558 9.34903 12.7142 7.76232 12.7142 5.99883C12.7142 4.23549 11.9558 2.65005 10.7424 1.552"
        fill="#0066CB"
      />
      <Path
        d="M10.7424 10.4469C11.9558 9.34903 12.7142 7.76232 12.7142 5.99883C12.7142 4.23549 11.9558 2.65005 10.7424 1.552"
        stroke="#0066CB"
        stroke-width="0.3097"
      />
      <Path
        d="M14.775 -0.00012207C13.2226 -0.00012207 11.8041 0.587228 10.7425 1.55241C10.5283 1.7498 10.3231 1.96187 10.1358 2.18848H11.3491C11.5187 2.38953 11.6704 2.6016 11.8043 2.82341H9.68081C9.55593 3.02686 9.43999 3.23894 9.33284 3.45836H12.1521C12.2501 3.66436 12.3304 3.87628 12.4018 4.09442H9.08291C9.01153 4.30042 8.9491 4.51249 8.90454 4.72935H12.5804C12.6696 5.13881 12.7142 5.56407 12.7142 5.99924C12.7142 6.66564 12.607 7.30681 12.4018 7.90518H9.08308C9.15446 8.12316 9.23478 8.33523 9.33284 8.54108H12.1521C12.0449 8.76066 11.9379 8.97257 11.8041 9.17618H9.68065C9.81448 9.39799 9.97512 9.61006 10.1358 9.81128H11.3491C11.1618 10.0377 10.9566 10.2498 10.7425 10.4472C11.8041 11.4113 13.2226 11.9999 14.775 11.9999C18.085 11.9999 20.7704 9.31399 20.7704 5.99924C20.7704 2.68576 18.0848 -0.00012207 14.775 -0.00012207Z"
        fill="#CC0001"
      />
      <Path
        d="M20.137 9.33196H20.1638C20.1729 9.33196 20.1815 9.33324 20.1815 9.3294C20.1906 9.32461 20.1994 9.31727 20.1994 9.31008C20.1994 9.30258 20.1905 9.29539 20.1815 9.29172C20.1815 9.28805 20.1638 9.28917 20.1638 9.28917H20.137V9.33196ZM20.137 9.42938H20.1014V9.25883H20.1727C20.1905 9.25883 20.1994 9.25882 20.2173 9.26744C20.2262 9.27718 20.235 9.29299 20.235 9.31024C20.235 9.32956 20.2261 9.34681 20.2082 9.35384L20.235 9.42953H20.1905L20.1727 9.36134H20.1368V9.42938H20.137ZM20.1638 9.49165C20.2441 9.49165 20.3155 9.42586 20.3155 9.3441C20.3155 9.26234 20.2441 9.19654 20.1638 9.19654C20.0836 9.19654 20.021 9.26234 20.021 9.3441C20.021 9.42586 20.0836 9.49165 20.1638 9.49165ZM19.9675 9.3441C19.9675 9.23679 20.0568 9.15039 20.1638 9.15039C20.2709 9.15039 20.3601 9.23679 20.3601 9.3441C20.3601 9.45142 20.2708 9.5378 20.1638 9.5378C20.0568 9.5378 19.9675 9.45142 19.9675 9.3441Z"
        fill="#231F20"
      />
      <Path
        d="M5.78192 7.66863H5.02354L5.46956 5.32992L4.44353 7.66863H3.81897L3.69409 5.34333L3.19457 7.66863H2.50757L3.08742 4.62695H4.2741L4.29182 6.50973L5.11264 4.62695H6.37055L5.78192 7.66863Z"
        fill="#231F20"
      />
      <Path
        d="M14.1238 7.63805C13.9185 7.69426 13.7579 7.71853 13.5885 7.71853C13.2049 7.71853 12.9995 7.52722 12.9995 7.1751C12.9995 7.10563 12.9995 7.03137 13.0172 6.95312L13.0618 6.7107L13.0976 6.51572L13.4455 4.62671H14.186L14.079 5.19457H14.4626L14.3556 5.79534H13.972L13.7758 6.8276C13.7668 6.87375 13.7668 6.90681 13.7668 6.92996C13.7668 7.05788 13.8382 7.11393 14.0166 7.11393C14.1059 7.11393 14.1681 7.10675 14.2218 7.09078L14.1238 7.63805Z"
        fill="#231F20"
      />
      <Path
        d="M11.1617 5.97613C11.1617 6.28929 11.3313 6.50392 11.7327 6.66585C12.0361 6.79025 12.0894 6.82681 12.0894 6.93892C12.0894 7.09382 11.9556 7.16297 11.6525 7.16297C11.4294 7.16297 11.2152 7.13279 10.9744 7.06444L10.8762 7.63582L10.903 7.64078L11.0458 7.66633C11.0904 7.67368 11.153 7.68102 11.2421 7.6882C11.4204 7.70162 11.5632 7.70913 11.6613 7.70913C12.4554 7.70913 12.8213 7.44707 12.8213 6.88287C12.8213 6.54401 12.6696 6.34423 12.2948 6.19412C11.9736 6.0686 11.938 6.04177 11.938 5.92615C11.938 5.792 12.0629 5.72382 12.3039 5.72382C12.4554 5.72382 12.6606 5.73851 12.848 5.76167L12.9551 5.18884C12.7588 5.16201 12.4644 5.14014 12.2948 5.14014C11.4473 5.14014 11.1528 5.52036 11.1617 5.97613Z"
        fill="#231F20"
      />
      <Path
        d="M7.69127 6.56697C7.61111 6.55835 7.57534 6.55611 7.52168 6.55611C7.10249 6.55611 6.88834 6.68275 6.88834 6.93251C6.88834 7.08598 6.99533 7.18482 7.15598 7.18482C7.45924 7.18498 7.68233 6.93267 7.69127 6.56697ZM8.19974 7.6687H7.57518L7.59306 7.41159C7.3968 7.61504 7.14704 7.71133 6.80785 7.71133C6.39744 7.71133 6.12085 7.43586 6.12085 7.03615C6.12085 6.43299 6.60265 6.08198 7.43225 6.08198C7.52152 6.08198 7.62852 6.08789 7.73567 6.10131C7.76234 6.0197 7.77128 5.98441 7.77128 5.94049C7.77128 5.77601 7.63746 5.71501 7.28949 5.71501C7.07534 5.71501 6.83452 5.74183 6.66492 5.78447L6.56671 5.81002L6.49533 5.82583L6.60232 5.27026C6.97696 5.17508 7.21778 5.13867 7.49437 5.13867C8.13666 5.13867 8.47585 5.38971 8.47585 5.86495C8.47585 5.9868 8.46691 6.07943 8.41341 6.3549L8.2617 7.23225L8.23503 7.38939L8.21714 7.51491L8.19926 7.60146V7.6687"
        fill="#231F20"
      />
      <Path
        d="M10.2876 6.1428C10.2876 6.09169 10.2966 6.04905 10.2966 6.01728C10.2966 5.81622 10.1627 5.69789 9.93965 5.69789C9.69883 5.69789 9.52924 5.8563 9.4668 6.14135L10.2876 6.1428ZM10.6533 7.61501C10.3946 7.68336 10.1447 7.71609 9.88599 7.71482C9.04744 7.71482 8.61914 7.33458 8.61914 6.60718C8.61914 5.75777 9.17232 5.13257 9.92176 5.13257C10.5372 5.13257 10.9299 5.4823 10.9299 6.03181C10.9299 6.21482 10.9031 6.39128 10.8317 6.64232H9.3507C9.34176 6.68 9.34176 6.69725 9.34176 6.72024C9.34176 7.00657 9.56485 7.15285 10.0019 7.15285C10.2696 7.15285 10.5105 7.10542 10.7782 6.99683L10.6533 7.61501Z"
        fill="#231F20"
      />
      <Path
        d="M17.862 6.25167C17.862 5.99329 17.7551 5.74831 17.4518 5.74831C17.0682 5.74831 16.8363 6.19929 16.8363 6.59645C16.8363 6.93164 16.9968 7.15713 17.2646 7.15202C17.4251 7.15202 17.7731 6.93148 17.8355 6.5463C17.8531 6.45751 17.862 6.35898 17.862 6.25167ZM18.6204 6.54758C18.5133 7.37016 17.9334 7.73474 17.1663 7.73474C16.3276 7.73474 15.9885 7.22292 15.9885 6.59533C15.9885 5.71781 16.5596 5.12439 17.4518 5.12439C18.2279 5.12439 18.6385 5.61306 18.6385 6.24081C18.6383 6.393 18.6383 6.40385 18.6204 6.54758Z"
        fill="#231F20"
      />
      <Path
        d="M18.8701 7.28862H18.8968C18.8968 7.28862 18.9059 7.28863 18.9147 7.28496C18.9235 7.28128 18.9236 7.27282 18.9236 7.26547C18.9236 7.2594 18.9236 7.25205 18.9147 7.24854C18.9147 7.24487 18.8968 7.24487 18.888 7.24487H18.8701V7.28862ZM18.8701 7.38492H18.8343V7.21437H18.9057C18.9147 7.21437 18.9326 7.21565 18.9503 7.22427C18.9592 7.23274 18.968 7.24982 18.968 7.2669C18.968 7.28511 18.9591 7.30347 18.9413 7.31066L18.968 7.38508H18.9235L18.8966 7.31801H18.8701V7.38492ZM18.8968 7.44704C18.9773 7.44704 19.0397 7.38125 19.0397 7.29949C19.0397 7.219 18.9773 7.15321 18.8968 7.15321C18.8166 7.15321 18.7452 7.219 18.7452 7.29949C18.7452 7.38125 18.8166 7.44704 18.8968 7.44704ZM18.7007 7.29949C18.7007 7.19345 18.79 7.10706 18.8969 7.10706C19.0041 7.10706 19.0932 7.19345 19.0932 7.29949C19.0932 7.4068 19.0039 7.49319 18.8969 7.49319C18.7898 7.49319 18.7007 7.4068 18.7007 7.29949Z"
        fill="white"
      />
      <Path
        d="M5.96936 7.49322H5.21992L5.66594 5.15467L4.63991 7.49322H3.96185L3.83697 5.16936L3.39095 7.49322H2.71289L3.29273 4.45154H4.46137L4.51487 6.33561L5.34464 4.45154H6.55799L5.96936 7.49322Z"
        fill="white"
      />
      <Path
        d="M14.3112 7.46415C14.106 7.52021 13.9453 7.54449 13.7757 7.54449C13.3921 7.54449 13.1868 7.35205 13.1868 7.0012C13.1868 6.93158 13.1957 6.85748 13.2047 6.77939L13.2492 6.53666L13.2848 6.34039L13.633 4.45154H14.3735L14.2665 5.01941H14.65L14.5429 5.62145H14.1593L13.963 6.65355C13.9541 6.69874 13.9541 6.73276 13.9541 6.75608C13.9541 6.88415 14.0344 6.93892 14.2128 6.93892C14.2931 6.93892 14.3557 6.93158 14.4091 6.91561L14.3112 7.46415Z"
        fill="white"
      />
      <Path
        d="M16.2293 5.7295L16.2116 5.65158L16.3633 5.264C16.3274 5.26033 16.3096 5.25921 16.3096 5.25682C16.2651 5.24819 16.2472 5.2434 16.2383 5.2434C16.2205 5.23844 16.1937 5.23733 16.167 5.23733C15.9173 5.23733 15.7477 5.34576 15.5157 5.63832L15.5961 5.19836H14.8199L14.3647 7.66851H15.1054C15.2035 7.10175 15.2482 6.77901 15.3106 6.51073C15.4087 6.06598 15.7389 5.86365 15.9797 5.90868C16.0064 5.91363 16.0243 5.91363 16.0599 5.92704L16.1044 5.94397L16.2293 5.7295Z"
        fill="#231F20"
      />
      <Path
        d="M16.4879 5.04003C16.4254 5.01559 16.4165 5.01559 16.4077 5.01319C16.3718 5.00457 16.3451 4.99978 16.3451 4.9985C16.3184 4.99483 16.2916 4.99243 16.2648 4.99243C16.024 4.99243 15.8456 5.10215 15.6136 5.39471L15.6849 5.01926H15.0069L14.5518 7.49307H15.3012C15.5688 5.98077 15.6848 5.7152 16.0417 5.7152C16.0685 5.7152 16.0952 5.7176 16.131 5.72128L16.2202 5.73948L16.4879 5.04003Z"
        fill="white"
      />
      <Path
        d="M11.3491 5.8019C11.3491 6.11378 11.5275 6.32954 11.9291 6.49162C12.2324 6.61475 12.2771 6.65132 12.2771 6.7647C12.2771 6.91817 12.1433 6.98764 11.8488 6.98764C11.6167 6.98764 11.4115 6.95713 11.1707 6.89006L11.0637 7.46049L11.0993 7.46639L11.2332 7.49066C11.2777 7.49945 11.3493 7.50664 11.4384 7.51287C11.6167 7.52628 11.7506 7.53346 11.8488 7.53346C12.6516 7.53346 13.0174 7.27268 13.0174 6.70848C13.0174 6.3685 12.8659 6.16985 12.4821 6.01989C12.1699 5.89437 12.134 5.86643 12.134 5.75049C12.134 5.61762 12.259 5.54943 12.4998 5.54943C12.6514 5.54943 12.8478 5.56284 13.0441 5.586L13.1511 5.01334C12.9548 4.98651 12.6605 4.96448 12.4821 4.96448C11.6436 4.96464 11.3491 5.34486 11.3491 5.8019Z"
        fill="white"
      />
      <Path
        d="M7.8518 6.39163C7.77147 6.38316 7.7357 6.38188 7.6822 6.38188C7.26285 6.38188 7.0487 6.50851 7.0487 6.75827C7.0487 6.9119 7.14691 7.01059 7.31635 7.01059C7.61976 7.01075 7.83391 6.75716 7.8518 6.39163ZM8.39587 7.49318H7.77131L7.7892 7.23735C7.60188 7.44064 7.34318 7.53582 7.00399 7.53582C6.60252 7.53582 6.32593 7.26035 6.32593 6.86064C6.32593 6.25843 6.80772 5.90647 7.63733 5.90647C7.71765 5.90647 7.82465 5.91366 7.94059 5.92596C7.95847 5.84419 7.96725 5.81018 7.96725 5.76514C7.96725 5.60178 7.83343 5.54093 7.48546 5.54093C7.27131 5.54093 7.03033 5.56649 6.86984 5.60912L6.76285 5.63595L6.70041 5.65192L6.79862 5.09491C7.17326 4.99989 7.41408 4.9646 7.69067 4.9646C8.33295 4.9646 8.67214 5.21564 8.67214 5.68977C8.67214 5.81162 8.6632 5.90424 8.61865 6.17955L8.45799 7.05834L8.43132 7.21548L8.41344 7.34099L8.4045 7.42611L8.39587 7.49318Z"
        fill="white"
      />
      <Path
        d="M10.448 5.96859C10.448 5.91621 10.448 5.87469 10.448 5.8418C10.448 5.64074 10.3232 5.52369 10.1001 5.52369C9.85926 5.52369 9.68966 5.68083 9.61828 5.96732L10.448 5.96859ZM10.8407 7.44064C10.5908 7.50771 10.3411 7.54061 10.0822 7.54061C9.24364 7.54061 8.8064 7.16038 8.8064 6.4317C8.8064 5.58357 9.35942 4.95837 10.1089 4.95837C10.7245 4.95837 11.117 5.3081 11.117 5.85648C11.117 6.03933 11.0902 6.21723 11.0276 6.46811H9.54673C9.53779 6.50596 9.5378 6.52304 9.5378 6.54604C9.5378 6.83253 9.76073 6.97881 10.189 6.97881C10.4567 6.97881 10.6976 6.92995 10.9651 6.82152L10.8407 7.44064Z"
        fill="white"
      />
      <Path
        d="M18.0404 6.05549C18.0404 5.79711 17.9334 5.5523 17.6301 5.5523C17.2465 5.5523 17.0146 6.00311 17.0146 6.40043C17.0146 6.73674 17.1753 6.96239 17.4429 6.95728C17.6036 6.95728 17.9514 6.73674 18.0138 6.35156C18.0316 6.26134 18.0404 6.16281 18.0404 6.05549ZM18.8166 6.37248C18.7005 7.1949 18.1295 7.56044 17.3625 7.56044C16.5148 7.56044 16.1758 7.04735 16.1758 6.41975C16.1758 5.54352 16.7556 4.94897 17.648 4.94897C18.4239 4.94897 18.8345 5.43763 18.8345 6.06523C18.8345 6.21869 18.8345 6.2286 18.8166 6.37248Z"
        fill="white"
      />
    </Svg>
  );
}