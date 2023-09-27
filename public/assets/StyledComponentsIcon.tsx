import { useMediaQuery } from "@/hook/UseMedia";
import React from "react";

export const StyledComponentsIcon = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={isDesktop ? 150 : 150}
      height={isDesktop ? 150 : 150}
      version="1.1"
      viewBox="0 0 318 340"
      xmlSpace="preserve"
    >
      <path
        fill="#FFCF48"
        d="M129.95 151.839c-5.673.047-11.346.095-17.425-.257 8.612-8.678 17.509-17.094 26.696-25.18 4.661-4.103 9.847-7.61 14.757-11.042-3.51 3.852-6.987 7.357-10.455 10.871-4.16 4.216-8.374 8.384-12.406 12.722-.57.614-.24 2.067-.328 3.132 1.052-.022 2.302.32 3.124-.125 4.471-2.425 8.82-5.074 13.245-7.588 3.246-1.844 6.542-3.6 9.692-5.1a49.41 49.41 0 01-3.272 3.803c-.37.232-.509.43-.903.783-1.444 1.118-2.569 2.125-3.684 3.137.01.005 0-.017-.347.017-6.463 4.964-12.578 9.896-18.693 14.827z"
        opacity="1"
      ></path>
      <path
        fill="#FFC536"
        d="M154.017 115.017c-4.949 3.776-10.135 7.282-14.796 11.385-9.187 8.086-18.084 16.502-27.158 25.109-5.796.712-1.994-3.673-2.691-6.235 5.67-4.958 11.08-9.214 16.288-13.705 4.27-3.682 8.298-7.644 12.65-11.598.492-.322.663-.593 1.104-.933 1.104-.806 1.832-1.611 2.555-2.586-.005-.168.036-.503.234-.49.198.013.593.038.97.053 2.552-1.968 4.727-3.952 7.299-5.953 1.468-.034 2.54-.05 3.782.19a52.491 52.491 0 002.714 2.779c.017-.04-.05.016-.022.305.126.662.224 1.034-.08 1.483-1.218.117-2.033.156-2.85.196z"
        opacity="1"
      ></path>
      <path
        fill="#D46EAB"
        d="M179.009 101.03s-.103.46-.488.732c-.78.902-1.176 1.531-1.571 2.16 0 0 .038.08-.264.155-.569.342-.834.61-1.316 1.086-1.299 1.4-2.383 2.59-3.44 3.797.025.017.042-.04-.218-.013-.431.053-.603.077-.984.193-.463.274-.647.512-.743.83.017.026-.038 0-.235.109-.445.288-.64.513-.793.832-.01.049-.11.06-.287.185-.398.318-.57.548-.777 1.068-.378.43-.672.607-1.357.814-3.466.043-6.541.057-9.617.07 0 0 .066-.055.07-.4-1.513-3.726-.556-6.281 2.31-8.56 4.67-3.712 9.064-7.778 13.793-11.41 1.265-.97 3.326-.906 5.022-1.316.303 1.39.755 2.769.87 4.175.15 1.82.03 3.66.025 5.493z"
        opacity="1"
      ></path>
      <path
        fill="#FFD464"
        d="M164.04 151.859c-3.046.04-6.091.08-9.587-.327.152-1.918.478-3.6 1.408-4.821 3.274-4.3 6.756-8.44 10.556-12.71.66-.13.921-.189 1.272-.238.089.01.215.148.426.42 1.425.153 2.638.035 4.112-.23.755-.76 1.249-1.372 1.757-1.968.015.016-.008-.02.225-.104.233-.083.675-.301.784-.093.4-.148.69-.504.992-.828.01.032-.054.01.267-.02.825-.641 1.33-1.25 1.935-1.931.102-.072.342-.13.763-.097 4.657 1.04 3.692 3.762 1.811 5.804-5.405 5.87-11.125 11.45-16.721 17.143z"
        opacity="1"
      ></path>
      <path
        fill="#FFCD44"
        d="M109.19 141.895c-.057-4.323-.113-8.645.25-13.44 1.543-1.056 2.86-1.431 3.764-2.258 5.444-4.975 10.624-10.255 16.264-14.993 2.03-1.705 5.086-2.188 7.906-3.066.746.708 1.26 1.253 1.365 1.817-2.353.697-4.63.945-6.177 2.139-3.404 2.624-6.597 5.575-9.57 8.685-2.015 2.107-3.508 4.711-5.234 7.093l1.062 1.149c1.967-1.066 3.919-2.162 5.906-3.19 3.766-1.946 7.552-3.852 11.17-5.478-9.008 7.379-17.857 14.46-26.706 21.542z"
        opacity="1"
      ></path>
      <path
        fill="#F6B42C"
        d="M137.141 107.975c-2.587 1.04-5.644 1.524-7.673 3.23-5.64 4.737-10.82 10.017-16.264 14.992-.904.827-2.22 1.202-3.701 1.8-2.243-6.576 1.573-10.297 6.283-13.836 5.99-4.499 11.74-9.316 17.89-13.643a104.818 104.818 0 013.333 6.749c.037.237.132.708.132.708z"
        opacity="1"
      ></path>
      <path
        fill="#FFC536"
        d="M167.6 133.753c-.262.06-.524.119-1.567.222-2.143.49-3.81.578-4.815 1.44a268.575 268.575 0 00-12.443 11.39c-1.486 1.445-2.531 3.343-3.777 5.035-3.35.046-6.699.091-10.351-.215 1.92-2.32 4.233-4.197 6.347-6.278 2.749-2.705 5.34-5.571 7.998-8.369 0 0 .01.022.374.035 1.452-1.08 2.54-2.172 3.629-3.265.074-.243.214-.44.981-.655 3.414-1.403 6.265-2.742 9.293-3.862.66.442 1.145.665 1.662.874.033-.014-.016-.066-.048.275.885 1.352 1.801 2.362 2.718 3.373z"
        opacity="1"
      ></path>
      <path
        fill="#A7447C"
        d="M182.89 108.948c.922-2.716 1.78-5.456 2.784-8.141 1.18-3.159 2.485-6.27 4.104-9.148.368 1.899.368 3.543.368 5.187l2.273.456c2.523-8.102 5.045-16.204 7.843-24.525 3.042-3.077 5.81-5.934 8.578-8.792.397 7.444.397 7.444-6.875 8.23-2.426 9.988-4.91 20.216-7.956 30.386-3.03-3.71-4.809-3.756-6.789-.119-1.158 2.127-2.13 4.355-3.471 6.523a46.11 46.11 0 01-.86-.057z"
        opacity="1"
      ></path>
      <path
        fill="#B94C87"
        d="M179.34 100.883c-.327-1.685-.207-3.527-.356-5.346-.115-1.406-.567-2.785-.87-4.175-1.696.41-3.757.345-5.022 1.316-4.73 3.632-9.123 7.698-13.793 11.41-2.866 2.279-3.823 4.834-2.326 8.6-.863-.47-1.706-1.325-2.735-2.85-.23-1.776-.27-2.88-.128-4.262.712-1.672 1.24-3.068 1.83-4.516.06-.053.182-.154.182-.154 2.981-1.805 6.017-3.528 8.93-5.437 3.152-2.064 6.016-4.65 9.35-6.325 1.812-.911 5.225-1.336 6.313-.298 1.308 1.248 1.316 4.317 1.13 6.534-.154 1.833-1.408 3.574-2.505 5.503zM136.971 107.03c-1-2.053-2-4.106-2.942-6.528 6.494-5.966 12.751-11.796 19.505-16.98 1.51-1.16 5.19-.792 7.047.288 1.109.644 1.051 4.116.714 6.186-.324 1.997-1.681 3.827-2.978 5.84-.393.11-.553-.015-.463-.405-.036-3.605-.161-6.822-.286-10.038-2.863 1.53-5.725 3.062-8.806 4.696-.496.291-.686.546-1.11.9-1.098.692-1.877 1.35-2.936 2.136-1.104 1.024-1.928 1.92-3.1 2.866-5.075 2.392-6.24 6.106-4.561 10.954l-.084.084z"
        opacity="1"
      ></path>
      <path
        fill="#FDA4DB"
        d="M193.066 67.942s-.445-.134-.614-.49c-.22-.714-.27-1.072-.074-1.724 1.053-4.714 1.86-9.135 2.665-13.556 2.348-.048 4.695-.096 7.434.303-.499 3.725-1.197 7.072-2.347 10.254-.7 1.937-2.1 3.622-3.573 5.391-1.422-.078-2.457-.128-3.49-.178z"
        opacity="1"
      ></path>
      <path
        fill="#FFD359"
        d="M145.444 151.908c.8-1.76 1.845-3.658 3.33-5.104 4.03-3.92 8.176-7.731 12.444-11.39 1.005-.861 2.672-.95 4.418-1.37-3.02 4.227-6.5 8.368-9.775 12.667-.93 1.221-1.256 2.903-1.858 4.748-2.704.422-5.408.47-8.559.45z"
        opacity="1"
      ></path>
      <path
        fill="#F194CD"
        d="M199.987 72.997l-7.568 24.305-2.273-.456c0-1.644 0-3.288-.034-5.352-.004-.585.025-.749.327-1.392.39-1.334.505-2.19.62-3.046.063-.446.126-.891.485-1.83.381-1.026.466-1.56.55-2.093.028-.173.055-.346.497-.892 1.604-4.35 2.793-8.328 4.4-13.705l2.996 4.46z"
        opacity="1"
      ></path>
      <path
        fill="#BB5D96"
        d="M200.262 72.777c-1.014-.881-1.753-1.982-3.27-4.241-1.608 5.377-2.797 9.354-4.326 13.453.281-3.536.978-7.183 1.466-10.858.105-.792-.539-1.683-.952-2.859.92-.28 1.955-.23 3.65.103 2.461-.293 5.516-.47 5.845-1.51 1.514-4.782 2.266-9.805 3.292-14.742 1.02.73 2.818 1.365 2.918 2.204.343 2.876.092 5.823.011 9.2-2.824 3.316-5.592 6.173-8.634 9.25z"
        opacity="1"
      ></path>
      <path
        fill="#F6B42C"
        d="M164.427 151.938c5.209-5.773 10.929-11.353 16.334-17.222 1.88-2.042 2.846-4.765-1.587-6.074 1.392-2.07 2.98-3.837 4.795-5.565.228.04.69.016.69.016 2.346 9.582-3.48 15.855-9.27 21.88-2.91 3.03-5.1 7.666-10.962 6.965z"
        opacity="1"
      ></path>
      <path
        fill="#D46EAB"
        d="M184.035 109.02c1.056-2.183 2.027-4.411 3.185-6.538 1.98-3.637 3.759-3.59 6.496.306.237.673.205 1.102-.117 2.03-.394 1.054-.5 1.61-.604 2.165-1.115 1.582-2.23 3.164-3.963 5.007-2.177 1.16-3.735 2.06-6.05 3.398l1.053-6.369z"
        opacity="1"
      ></path>
      <path
        fill="#EE9B1E"
        d="M109.132 142.283c8.907-7.47 17.756-14.551 26.75-21.937.143-.304.16-.295.471-.31.723-.063 1.135-.112 1.595-.106.047.054.146.159.146.159-4.136 3.838-8.164 7.8-12.434 11.482-5.207 4.49-10.618 8.747-16.222 13.272-.309-.612-.336-1.392-.306-2.56z"
        opacity="1"
      ></path>
      <path
        fill="#B94C87"
        d="M183.749 109.005c0 1.742-.286 3.47-.768 6.383 2.316-1.338 3.874-2.238 5.758-3.256-.795 3.122-1.917 6.363-3.424 9.709-.386.105-.54-.02-.426-.36 1.52-6.176-3.281-2.34-5.178-3.536-.742-.022-1.165-.036-1.62-.407-.82-1.448-1.607-2.538-2.227-3.885a218.928 218.928 0 011.988-2.693c1.45-.645 2.898-1.29 4.692-1.973.536-.025.727-.01 1.205.018z"
        opacity="1"
      ></path>
      <path
        fill="#E67CBD"
        d="M205.591 52.069c-.65 4.99-1.402 10.014-2.916 14.796-.33 1.04-3.384 1.217-5.456 1.538.812-2.052 2.21-3.737 2.91-5.674 1.151-3.182 1.85-6.529 2.782-10.181.798-.428 1.551-.48 2.68-.48z"
        opacity="1"
      ></path>
      <path
        fill="#EE9B1E"
        d="M148.644 137.012c-2.31 2.764-4.901 5.63-7.65 8.335-2.114 2.08-4.426 3.959-6.797 6.217-1.241.328-2.336.368-3.838.34 5.707-4.996 11.822-9.928 18.285-14.892z"
        opacity="1"
      ></path>
      <path
        fill="#BB5D96"
        d="M192.131 66.021c.05.359.1.717.105 1.344-5.336-3.163-5.302-11.972.322-14.935.135 4.822-4.83 8.945-.427 13.591z"
        opacity="1"
      ></path>
      <path
        fill="#E67CBD"
        d="M192.378 65.728c-4.65-4.353.315-8.476.57-13.235.533-.408.984-.448 1.765-.404-.476 4.504-1.282 8.925-2.335 13.639z"
        opacity="1"
      ></path>
      <path
        fill="#F6B42C"
        d="M177.837 110.582c-.592 1.19-1.198 2.003-2.154 3.101-.349.286-.703.39-.694-.025.146-2.69.296-4.973-3.085-4.715 1.083-1.19 2.167-2.38 3.687-3.682.437-.11.915-.074.915-.074.438 1.672.877 3.345 1.33 5.395z"
        opacity="1"
      ></path>
      <path
        fill="#B94C87"
        d="M158.004 96.01c-.542 1.455-1.163 2.847-1.833 4.567-.05.329-.172.43-.546.412-.803-.016-1.233-.012-1.652-.336.02-.765.029-1.202.32-1.77 1.344-1.109 2.408-2.085 3.471-3.062l.24.19z"
        opacity="1"
      ></path>
      <path
        fill="#A7447C"
        d="M190.73 87.196c.214.716.098 1.572-.248 2.66-.18-.685-.13-1.603.248-2.66z"
        opacity="1"
      ></path>
      <path
        fill="#B94C87"
        d="M177.24 103.86c.105-.567.5-1.196 1.192-1.88-.102.57-.501 1.194-1.191 1.88z"
        opacity="1"
      ></path>
      <path
        fill="#A7447C"
        d="M193.294 106.874c-.194-.446-.09-1.002.242-1.74.17.423.113 1.027-.242 1.74z"
        opacity="1"
      ></path>
      <path
        fill="#BB5D96"
        d="M191.798 83.225c.212.441.127.975-.186 1.67-.19-.418-.15-.998.186-1.67z"
        opacity="1"
      ></path>
      <path
        fill="#B94C87"
        d="M184.803 122.854c-.144.239-.606.263-.675.005.169-.518.408-.778.646-1.039l.232.19c.031.244-.013.425-.203.844zM176.653 104.895c-.147.292-.625.255-.846.157.045-.366.31-.633.84-.997.227.118.19.333.006.84z"
        opacity="1"
      ></path>
      <path
        fill="#FFD35F"
        d="M171.93 108.96c3.355-.275 3.205 2.009 3.061 4.878-.006.596-.01.957-.322 1.054a26.982 26.982 0 00-2.701 2.09c.024.02.017-.04-.246.025-.436.367-.61.669-.752.969.033-.002-.014-.048-.34-.006-1.99 1.39-3.655 2.74-5.625 4.186-.518.452-.732.806-.988 1.328-.148.39-.32.536-.962.582-1.612.987-2.818 1.997-4.154 3.264-.73.72-1.328 1.183-1.927 1.646-3.274 1.796-6.57 3.552-9.816 5.396-4.424 2.514-8.774 5.163-13.245 7.588-.822.446-2.072.103-3.124.125.087-1.065-.243-2.518.328-3.132 4.032-4.338 8.245-8.506 12.406-12.722 3.468-3.514 6.944-7.02 10.455-10.871.855-.383 1.67-.422 2.85-.473.365-.01.217-.012.41.29 1.13.435 2.067.566 3.367.66 2.35-.988 4.335-1.938 6.321-2.888.295-.178.59-.355 1.157-.897.513-.551.677-.79.764-1.081 0 0 .1-.011.325-.143.489-.313.671-.556.775-.858 0 0 .055.026.28-.048.224-.074.684-.247.8-.045.393-.184.67-.571.945-.958 0 0-.017.058-.043.04z"
        opacity="1"
      ></path>
      <path
        fill="#EE9B1E"
        d="M156.85 129.272c.723-.759 1.322-1.221 2.375-1.992 1.568-1.01 2.68-1.714 3.765-2.002.015 1.521.059 2.628.102 3.735-2.851 1.338-5.702 2.677-8.952 3.998.597-1.16 1.592-2.302 2.71-3.74zM152.675 133.858c-.769.983-1.857 2.076-3.32 3.151.751-1.026 1.876-2.033 3.32-3.151z"
        opacity="1"
      ></path>
      <path
        fill="#FFD359"
        d="M136.04 120.05c-3.762 1.93-7.548 3.835-11.314 5.781-1.987 1.028-3.939 2.124-5.906 3.19l-1.062-1.149c1.726-2.382 3.22-4.986 5.233-7.093 2.974-3.11 6.167-6.061 9.571-8.685 1.548-1.194 3.824-1.442 6.548-2.124 1.769-.015 2.76-.024 4.12-.01 1.174.708 1.98 1.39 2.648 2.346a31.71 31.71 0 01-3.09 2.79c-.494.286-.682.538-.783.855 0 0-.041.335-.34.634-1.087.671-1.873 1.042-3.017 1.416-1.106.686-1.856 1.368-2.606 2.05 0 0-.017-.009-.002-.002z"
        opacity="1"
      ></path>
      <path
        fill="#B94C87"
        d="M166.536 112.978a27.102 27.102 0 01-6.187 2.62 57.772 57.772 0 00-3.304-.723s.148.001.185-.065c-.06-.438-.158-.81-.284-1.472 3.049-.303 6.124-.317 9.59-.36z"
        opacity="1"
      ></path>
      <path
        fill="#EE9B1E"
        d="M143.006 114.998c.91-.806 1.821-1.612 3.165-2.83 1.54-1.03 2.647-1.647 3.79-2.219l.113.133c-2.174 1.983-4.349 3.967-6.825 5.688-.282-.431-.263-.602-.243-.772z"
        opacity="1"
      ></path>
      <path
        fill="#EE9B1E"
        d="M153.927 105.853l.14 3.729c-1.056.432-2.127.448-3.595.482-.398.018-.474-.07-.361-.392 1.347-1.487 2.581-2.653 3.816-3.819zM139.005 117.998c.787-.371 1.573-.742 2.665-1.244-.424.675-1.152 1.48-2.282 2.262-.4-.023-.453-.069-.43-.306.022-.237.047-.712.047-.712z"
        opacity="1"
      ></path>
      <path
        fill="#EE9B1E"
        d="M139.013 119.017c-.04.363-.211.634-.704.956-.215.116-.314.011-.236-.245.288-.51.549-.684.862-.781 0 0 .053.046.078.07z"
        opacity="1"
      ></path>
      <path
        fill="#FFCD44"
        d="M142.787 115.097c.2.071.18.242.085.658-.076.247-.471.222-.67.209-.096-.33.092-.582.585-.867z"
        opacity="1"
      ></path>
      <path
        fill="#F6B42C"
        d="M171.712 108.947c-.016.359-.292.746-.68.774-.111-.358-.095-.672-.095-.672.172-.025.344-.05.775-.102z"
        opacity="1"
      ></path>
      <path
        fill="#B94C87"
        d="M169.75 110.079c.093.193-.09.436-.567.7-.073-.187.122-.412.567-.7zM170.728 109.14c.209-.091.193.223.188.38-.005.155-.465.328-.707.376-.128-.244.056-.482.52-.756zM168.67 111.096c.09.166-.074.405-.504.703-.066-.155.106-.385.504-.703z"
        opacity="1"
      ></path>
      <path
        fill="#D16AA7"
        d="M174.98 114.795s.005-.361.002-.541c-.002-.18.352-.285.533-.315.969 1.06 1.756 2.151 2.198 3.64-5.929 2.4-10.385 7.852-9.91 11.323 2.364-.404 4.933-.364 7.017-1.35 1.686-.798 3.114-2.652 4.052-4.368.822-1.505.804-3.47 1.158-5.23 1.578 1.187 6.378-2.65 4.859 3.528-.353.599-.592.86-.99 1.337-1.745 1.986-3.333 3.754-5.145 5.791-.225.27-.465.327-.841.508-.912.737-1.447 1.295-1.982 1.853 0 0 .064.021-.225.024-.474.028-.66.053-1.035.177-.422.284-.59.515-.695.792 0 0 .023.037-.41.036-3.173-.654-5.912-1.308-8.651-1.96 0 0 .049.05.055-.343.978-2.632 1.843-4.926 2.956-7.09.846-1.645 2.008-3.125 3.03-4.679 0 0 .047.046.262-.04.398-.373.582-.66.767-.947 0 0 .007.06.355.062 1.112-.735 1.876-1.471 2.64-2.208z"
        opacity="1"
      ></path>
      <path
        fill="#B94C87"
        d="M164.883 130.38c2.77.312 5.51.966 8.668 1.604-.075.597-.569 1.21-1.724 1.905-1.75.063-2.836.043-3.923.022 0 0-.126-.138-.215-.148-1.005-1.02-1.92-2.03-2.806-3.383z"
        opacity="1"
      ></path>
      <path
        fill="#FFD359"
        d="M168.115 134.183c.876-.251 1.963-.23 3.45-.147-.812.182-2.025.3-3.45.147z"
        opacity="1"
      ></path>
      <path
        fill="#F6B42C"
        d="M176.252 130.94c.214-.527.75-1.085 1.56-1.751-.23.5-.735 1.11-1.56 1.75zM174.861 131.073c.186-.025.371-.05.835-.11a.766.766 0 01-.707.7 2.519 2.519 0 01-.128-.59z"
        opacity="1"
      ></path>
      <path
        fill="#B94C87"
        d="M174.67 131.172c.191-.099.207.156.21.282.004.126-.438.344-.671.427-.128-.194.04-.425.462-.709zM142.861 109.936c-.991.01-1.982.02-3.344.014-.884-.56-1.397-1.104-2.143-1.812-.233-.163-.328-.634-.365-.871-.038-.238.018-.294.487-.3 3.14 0 5.813.008 8.308.273-1.1 1.07-2.02 1.883-2.943 2.696zM170.63 117.97c-.696 1.512-1.858 2.992-2.704 4.636-1.113 2.165-1.978 4.459-2.989 7.105-.523.185-1.007-.038-1.668-.48-.22-1.325-.264-2.432-.149-4.135.16-.595.34-1.007.34-1.007.237-.07.409-.215.813-.764.544-.64.79-.953 1.036-1.266 1.666-1.35 3.331-2.698 5.322-4.089z"
        opacity="1"
      ></path>
      <path
        fill="#FFCD44"
        d="M143.23 109.96c.553-.837 1.475-1.65 2.889-2.83 2.289-1.952 4.085-3.535 6.18-5.167.765-.365 1.23-.682 1.693-.99-.003.011-.03.008-.03.008.43-.004.86-.008 1.603.06-.214 1.467-.743 2.863-1.455 4.535-1.418 1.443-2.652 2.609-4.036 4.051-1.256.894-2.363 1.512-3.763 2.267-1.1-.544-1.907-1.226-3.081-1.933z"
        opacity="1"
      ></path>
      <path
        fill="#D875B2"
        d="M154.011 99.014c-.01.437-.019.874-.038 1.639-.01.328.016.331-.312.33a44.12 44.12 0 00-1.999.057c-4.446 1.59-8.54 3.148-12.633 4.707l-1.366-1.842 4.3-7.963c.825-.896 1.649-1.793 3.11-2.82 1.391-.809 2.145-1.489 2.899-2.169.104-.318.294-.573 1.185-.858 2.488-.351 4.364-.606 5.456-.754l-.602 9.673z"
        opacity="1"
      ></path>
      <path
        fill="#D16AA7"
        d="M154.293 98.882c-.086-3.017.11-6.166.32-9.541-1.092.148-2.968.403-5.238.651 2.468-1.537 5.33-3.068 8.193-4.6.125 3.217.25 6.434.286 10.04-1.153 1.366-2.217 2.342-3.561 3.45zM141.616 95.991c-1.086 2.606-2.52 5.26-3.953 7.914l1.366 1.842c4.094-1.559 8.187-3.118 12.634-4.457.348.387.343.554.338.72-1.797 1.585-3.593 3.168-5.705 4.863-2.987.102-5.66.094-8.773.065-2.147-4.84-.982-8.555 4.093-10.947zM147.653 90.988c-.435.645-1.189 1.325-2.3 2.007.422-.656 1.201-1.314 2.3-2.007z"
        opacity="1"
      ></path>
      <path
        fill="#FFCD44"
        d="M138.958 118.71c-.336.334-.597.509-.932.963-.538.251-.95.3-1.673.364.439-.668 1.189-1.35 2.295-2.036.357-.003.332.472.31.709z"
        opacity="1"
      ></path>
      <path
        fill="#D875B2"
        d="M179.711 117.945c-.035 1.77-.017 3.734-.84 5.239-.937 1.716-2.365 3.57-4.051 4.368-2.084.986-4.653.946-7.017 1.35-.475-3.47 3.981-8.923 9.942-10.966.801-.027 1.224-.013 1.966.009z"
        opacity="1"
      ></path>
      <path
        fill="#FFCF48"
        d="M163.055 124.066c.406.023.224.435.094.616a31.115 31.115 0 01-3.793 2.34c.881-.959 2.087-1.969 3.699-2.956z"
        opacity="1"
      ></path>
      <path
        fill="#B94C87"
        d="M174.67 114.892c-.454.64-1.218 1.376-2.354 2.092.433-.678 1.237-1.336 2.353-2.092z"
        opacity="1"
      ></path>
      <path
        fill="#FFC536"
        d="M157.239 115.178c.7-.13 1.595.044 2.746.457-.68.108-1.617-.023-2.746-.457z"
        opacity="1"
      ></path>
      <path
        fill="#B94C87"
        d="M171.722 117.007c.078.221-.106.508-.537.883-.073-.214.1-.516.537-.883z"
        opacity="1"
      ></path>
      <path
        fill="#FFCF48"
        d="M165.005 122.156c.058.216-.188.529-.69 1.001-.042-.195.172-.549.69-1z"
        opacity="1"
      ></path>
      <path
        fill="#B94C87"
        d="M152.3 101.963c-.294-.119-.29-.286-.285-.702.44-.26.88-.27 1.65-.288-.136.308-.601.625-1.365.99z"
        opacity="1"
      ></path>
    </svg>
  );
};
