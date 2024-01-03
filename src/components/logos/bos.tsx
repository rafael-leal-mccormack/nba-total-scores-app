import React, { PropsWithRef } from 'react';
import PropTypes from 'prop-types';
import { LogoProps } from '../../utils/util';

const BOS = (props: PropsWithRef<LogoProps>) => {
  const { size } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={size ?? 100}
      height={size ?? 100}
      viewBox="0 0 150 150"
      fill="none"
      fillRule="evenodd"
      role="img"
      aria-describedby='title'
    >
      <title id="title">Boston Celtics</title>
      <defs>
        <path id="A_BOS" d="M0 0h93.554v104H0z" />
        <path id="B_BOS" d="M0 0h93.554v104H0z" />
        <path
          id="C_BOS"
          d="M93.554 48.9c0-12.494-4.867-24.24-13.702-33.075C72.222 8.194 62.42 3.528 51.84 2.398c-.245-.244-.52-.47-.832-.67-3.745-2.41-6.87-.62-9.038.433l-.543.27c-4.08.466-8 1.46-11.693 2.91-.436-.653-.94-1.27-1.51-1.84C25.965 1.245 22.96 0 19.763 0c-6.6 0-11.967 5.37-11.967 11.968 0 2.765.933 5.387 2.648 7.507C3.917 27.518 0 37.76 0 48.9c0 12.495 4.866 24.242 13.7 33.077 4.315 4.314 9.328 7.68 14.78 9.997-.304 2.472.097 4.15.55 4.837-.688.58-.977.94-1.086 1.6-1.084 1.483 1.555 3.363 2.64 4.194 2.228 1.708 3.4 1.41 5.134 1.34 2.142-.1 4.157-2.605 5.316-4.23 2.313-.325 2.747.036 2.82.325a12.14 12.14 0 0 0 3.109-.868c3.124-1.315 2.24-2.927 1.917-3.217-.085-.074-.153-.18-.22-.305 7.416-.292 14.524-2.303 20.867-5.843a8.36 8.36 0 0 1 .682.87c.687 1.013 1.048 4.302 1.193 6s.434 2.858 1.265 5.53 1.157.724 1.194 0 .18-3.325.072-5.206-.145-4.59.217-5.748-.29-1.446-.47-1.662 0-.3-.47-1.772a2.3 2.3 0 0 1-.064-.257c2.38-1.632 4.627-3.49 6.7-5.575a46.47 46.47 0 0 0 13.702-33.077"
        />
      </defs>
      <g transform="translate(25 20)" fill="none" fillRule="evenodd">
        <path
          d="M99.87 52.054c0-13.33-5.195-25.862-14.627-35.293-7.952-7.95-17.98-12.857-29.046-14.23-.16-.122-.326-.238-.498-.348-4.885-3.144-9.167-1.034-11.462.102l-.5.243a49.69 49.69 0 0 0-10.057 2.334 17.4 17.4 0 0 0-.495-.517C30.382 1.54 26.66 0 22.695 0 14.516 0 7.86 6.652 7.86 14.828c0 2.674.69 5.217 2.01 7.468A49.99 49.99 0 0 0 0 52.054C0 65.386 5.195 77.922 14.627 87.35c4.108 4.106 8.807 7.418 13.985 9.862.003.912.09 1.758.263 2.516-.207.33-.387.705-.517 1.14-1.228 2.25-.077 4.736 3.563 7.504 2.216 1.695 3.94 1.985 5.363 1.985.384 0 .75-.022 1.095-.04l.517-.028c2.5-.102 4.542-1.805 6.085-3.603l2.412-.362a14.9 14.9 0 0 0 3.798-1.059c2.423-1.02 3.41-2.403 3.787-3.547 5.814-.572 11.38-2.134 16.607-4.656.147.805.3 1.927.423 3.376.17 1.977.512 3.332 1.39 6.16.747 2.405 2 3.51 3.75 3.298.802-.1 2.686-.688 2.866-4.17.047-.943.17-3.45.064-5.358-.152-2.596-.036-4.374.094-4.805.26-.827.5-2.278-.332-3.528 1.91-1.432 3.72-3.003 5.402-4.684a49.58 49.58 0 0 0 14.627-35.296"
          fill="#fefefe"
        />
        <g transform="translate(3 3)">
          <mask id="D_BOS" fill="#fff">
            <use xlinkHref="#A_BOS" />
          </mask>
          <use xlinkHref="#C_BOS" fill="#fff" mask="url(#D_BOS)" />
          <mask id="E_BOS" fill="#fff">
            <use xlinkHref="#B_BOS" />
          </mask>
          <use xlinkHref="#C_BOS" fill="#061922" mask="url(#E_BOS)" />
        </g>
        <path
          d="M38.715 95.546c1.737-.073 4.158-.614 5.26-1.085.145.037.38.18.742.325.143-1.156-.597-3.56-1.013-4.664-.276-.73-.543-1.228-.868-1.987-.976-.182-2.187-.705-3.055-1.067 0 .687.127 2.477.272 3.67a14.64 14.64 0 0 1-1.484.073l.145 4.736m32.72-3.833c-.326-.326.397-1.34.723-3.218s.36-5.026-1.013-6.798c-.67-.862-.993-1.405-1.106-1.793-4.282 3.115-9.188 5.183-14.404 6.07-.062.1-.124.206-.18.28-.76.977-2.242 2.387-3.328 2.965s-2.35 1.013-3.036 1.23c-.144 1.156-.332 3.738-.035 4.626.1.326 1.445 1.122 1.915 2a6.06 6.06 0 0 1 .136.265 45.12 45.12 0 0 0 20.418-5.53l-.1-.086m10.5-71.962C74.788 12.636 65.7 8.17 55.885 6.86c.787 1.557.9 3.346.98 4.486 1.4-.615 2.494-.94 3.073-1.88s1.374-.76 1.88-.073.507 1.555-.83 2.386-2.313 1.23-2.603 1.375-.036.397.3.94 1.152 1.882 1.3 4.7c.001.027.003.055.003.082 5.315 1.636 10.186 4.554 14.23 8.597A34.33 34.33 0 0 1 84.33 51.909c0 5.3-1.2 10.42-3.434 15.055.3.154.705 1.204.843 2.587.072.723.035 1.52-.18 2.024s-1.924 3.067-2.785 3.833c-.325.3-1.086.254-1.4-.216s-.36-.218-.615.034-1.12 1.52-1.336 1.845-.94.65-.472 1.952 1.012 2.278.833 3-.254.94.722 1.773.94 1.842.507 2.493c-.272.408-.7 1.495-.865 2.616 11.547-8.25 19.1-21.764 19.1-37.005a45.15 45.15 0 0 0-13.313-32.138M29.713 85.458c-.127-1.225-.313-3.438.543-5.017-1.744-1.2-3.394-2.565-4.924-4.095C18.805 69.817 15.2 61.14 15.2 51.9c0-9.885 4.172-18.813 10.846-25.117a1.98 1.98 0 0 1 .241-.386 11.99 11.99 0 0 1-3.534.53 11.89 11.89 0 0 1-8.435-3.48c-6.48 8.04-10 17.973-10 28.446 0 12.14 4.727 23.554 13.312 32.138 4.115 4.115 8.882 7.342 14.066 9.588.2-.968.5-2.027.937-3.178.398-1.05-.217-3.47-1.23-4.737-.542-.146-1.228-.217-1.7-.254M41.765 7.153c-2.87.507-5.667 1.288-8.362 2.327.866 1.677 1.328 3.546 1.328 5.488 0 2.574-.808 5.024-2.303 7.06a34.38 34.38 0 0 1 8.046-3.407l.556-.515c-1.05-1.737-2.46-4.52-1.23-8.28.346-1.06 1.108-1.95 1.964-2.672"
          fill="#008348"
        />
        <path
          d="M59.938 20.853c1.012.506 2.144 1.607 1.698 3.65-.18.832-.875 1.632-.938 1.954-.1.54-1.248 1.463-1.6 2.186-.36.717-.415 1.328-.3 1.637.58.55 1.883 1.274 2.605 1.526.566.198.526.35.3.724.4.036.603.28.978.723.396.47 1.445.18 2.096-.145s1.482-.434 2.134.362 1.627 2.278 2.096 3.652.977 2.494 1.122 2.7-.507 4.195-.7 5.786l-.36 2.53c-.036.253 1.013-.903 1.05.47.027 1.096.54 4.6 1.13 7.213l.46 1.753c.435.073.794.94 1.048 2.278s.795 2.17.832 2.82.217.76.433.867.145.435-.505 1.193c.144.1.36.327.505.47.182-.18.687-.756.687-.756l2.423.938c.434.145.95-.926 2.24-.362.354.155.745.644 1.023 1.127 2.024-4.332 3.16-9.16 3.16-14.25a33.54 33.54 0 0 0-9.89-23.874C69.773 24.135 65.1 21.312 60 19.7l-.04 1.143m10.426 56.88c-.505-.253-.835.114-1.084-1.88-.072-.578-.54-1.34-.903-1.7s-.406-1.04-.218-1.628a6.89 6.89 0 0 0 .327-2.457c-.038-.724.107-1.627 1.12-2.063-.36-.396-.542-.903-.65-1.3-1.482-.5-1.778-.53-2.08-1.248-.505-1.204-.817-2.962-.967-3.92-.074-.473-.124-.9-.135-1.304L63.45 55.83l-.764-1.393c-.724-1.265 0-2.928.36-3.904s.652-1.844.326-2.82-.326-1.194-.397-1.6-.4-.904-.83.47-1.266 3.398-1.737 5.495c-.266 1.2-.452 2.487-.4 3.742.047.956.238 1.886.643 2.73.94 1.952 2.06 3.76 1.916 4.845s-.38 1.122-.397 1.3c-.18 2.097-1.085 6.1-1.555 7.267l-2.7 7.122c-.304 1.357-1.14 4.263-1.855 5.986 5.4-1.023 10.37-3.34 14.54-6.617.122-.304.1-.586-.214-.743m-40.17-47.44c.4.52.922.997 1.604 1.347 1.772.903 2.134 1.554 2.134 3.108s.3 4.737.796 5.28c.324-.325.687-.796.758-.94.506.94 1.526 2.68 3.145 3.76.1.073.06.47.326.542.542.145 4.05.687 4.158 1.4.724-.724 1.88-2.53 2.097-3.147s1.482-2.566 2.422-3.65l.037-.796c-.254.217-.65.76-1.23 1.012l-4.05 1.844c-.506.253-1.4.543-1.772-2.097s0-4.013.253-4.627.723-1.158 1.628-.904l2.747.795c.072-.3.326-.832-.65-.94-.695-.078-2.507-.594-3.533-1.997-.415-.562-.703-1.274-.734-2.16l-7.845 1.193c-1.048.254-1.937.468-2.277-1.916-.145-1.012-.398-2.422.325-1.916.578-.434 1.38-.944 2.783-.722.257.04.578.255.68.456.077.35-.073.924-.245 1.46-.3.97-.92 1.663 1.05 1.2l5.368-1.012c.1-.704.67-1.8 1.356-2.585s.796-1.446.832-1.7-.202-.3-.542 0c-.398.36-1.592 1.085-2.713.795-.433-.1-.975-.94-1.264-1.4.237-.497.836-1.355 1.574-2.22-3.85 1.234-7.453 3.16-10.656 5.716-.02.4.032 1.333.296 2.36.177.7.506 1.622 1.143 2.45m2.508 49.395c1.48-.578 2.65-.55 3.796.977.325.433.578 1.7 3.362.578-1.482-1.77-2.37-3.87-3.18-6.7-1.28-4.45-4.176-9.5-3.1-11.82-.614-.58-1.337-2.82-2.097-2.567-.5.17-1.228.18-.65-1.52.26-.764.7-1.7 1.5-2.8 1-1.355 2.554-2.986 5.08-4.936.218-.18.254-.324.1-.47-.253-.252-.506-.54-.76-.686s-.507-.073-.724.145-.578.47-.795.614-1.952-1.555-2.856-2.784-1.843-1.626-2.132-1.77c.36-.398 1.177-1.26.867-1.157-.542.18-1.492.3-2.46-.724-1.193-1.264-.722-1.916-.976-2.096s-1.555.108-2.53-1.4-1.368-2.18-.58-3.255c.4-.542.543-.795.435-1.482s0-1.12.904-1.988 1.446-1.663 1.843-1.6c.316.058-.598-1.1-1.15-1.96-.145-.232-.264-.44-.332-.606-.142-.35-.37-.952-.42-1.6-6.353 6.373-9.85 14.835-9.85 23.835a33.54 33.54 0 0 0 9.889 23.873 34.12 34.12 0 0 0 4.816 4.004 1.35 1.35 0 0 1 2.004-.112"
          fill="#fff"
        />
        <path
          d="M13.503 8.37c2.964.76 5.186 3.155 6.16 4.492.25.34.507.3.615.037.23-.537.65-2.278.65-3.616 0-3.036.416-4.238 1.176-5.647a11.33 11.33 0 0 0-8.602 4.734m-1.79 9.303c5.567.506 7.3-2.604 7.66-3.075s-.073-.76-.254-1.012c-.962-1.348-3.117-3.732-6.082-4.5a11.29 11.29 0 0 0-1.637 5.869c0 .934.1 1.84.323 2.708m22.08-.217c-2.35-.977-5.138-.074-7.126 1.662s-3 3.068-3.687 7.2l-.254.002a11.28 11.28 0 0 1-7.638-2.963c3.4-.868 6.265-2.42 9.48-5.458s4.8-6.58 5.243-8.243-.182-.687-.506.07c-.504 1.175-2.17 4.34-5.46 7.412s-5.82 4.6-9.253 5.747a11.31 11.31 0 0 1-2.58-4.19c1.157.072 4.802-.348 6.626-1.845 2.4-1.967 2.676-4.302 3-7.63s.814-4.315 1.6-5.58a11.35 11.35 0 0 1 10.821 11.334 11.36 11.36 0 0 1-.278 2.491m-.31 1.128c-.543-.76-2.476-1.124-5.547.795-.3.182-.5.308-.144.65.65.652 1.628 1.883 2.315 3.546 1.535-1.316 2.715-3.034 3.376-4.992m-4.283 5.694c-.65-1.6-1.192-2.747-1.806-3.542-.332-.43-.398-.614-1.013-.072-1.7 1.508-2.368 3.794-2.73 5.6a11.28 11.28 0 0 0 5.549-1.987"
          fill="#a73832"
        />
        <g fill="#fab383">
          <path d="M26.1 36.978c-.47-.145-.832.396-1.05.83s-.47.904.217 1.88 1.114 1.558 2.314 1.482c.58-.036 1.084-.47 1.265-.722s.217.18-.072.614-.506 1.446.036 2.133 1.663 1.265 3.145.398 2.098-1.916 2.35-2.387.253-.686 0-.975-1.084-1.666-1.265-4.375c-.108-1.628.18-2.675-.832-3.254s-3.328-1.947-3.615-4.628c-.108-1.012-.036-2.566-1.048-1.735s-1.013 1.4-1.12 2.024.398 1.446.832 2.025.94 1.844 1.337 2.17.65.58.977.615 1.626.036 1.95.145.507.507-.3.507-2.024.215-2.567.288-1.047.108-1.3 1.193l-.65 2.748c-.036.397-.253.614-.253.83s.434 1.266 1.4.217 1.374-2.096 1.555-2.603.398-.434.216.362-.234 2.784.145 3.47c.4.738 1.233 1.498 2.278.975.217-.108.578-.3.868-.253s-.055.542-.308.76-1.084 1.137-2.548-.18c-.363-.326-.864-1.05-.977-1.952-.036-.3-.434-.398-.614-.145s-1.157 1.157-1.844.506-.972-1-.578-2.386c.07-.253.212-.524.036-.578m.732-2.025c-.156.467-.3 1.084-.362 1.302s-.397.687-.687.073-.274-1.1.18-1.555c.145-.145.36-.434.506-.3s.398.362.362.47m1.627-1.642c-.298.15-.934.148-1.157.65-.145.326-.723-.034-.434-.433s.507-.362.687-.47.254-.434.615-.253.433.434.3.506m23.824-17.906c-1.012.108-1.952.724-2.892 1.374s-4.338 3.507-5.134 4.085c.83.434 1.048 1.302.76 2.748-.065.32 0 .434.218.217s1.228-1.3 1.193-2.17-.434-1.374-.507-1.483.3-.542.688.362.288 2.17-.904 3.58-2.134 1.373-2.64 1.627-1 .65-.54 1.4 1.373.47 1.734.217.868-.543 2.025-.434 1.542-.627.76-1.4c-.253-.253-.904-.832-.1-.832.47 0 1.05 1.05 1.374 1.338s1.05.397 2.025.47 2.495.433 2.495 1.374c0 .578-.312.747-.724.3-.162-.182-.394.104-.578.288-.615.616-2.188 2.278-3.308 2.567s-1.537-.036-3.02-.83l-3.253-1.844c-.398-.253-1.23-.832-.832.326s1.374 2.35 3.326 3 2.24.867 2.675 1.084.182.434-.397.36c-.503-.062-1.05-.506-.614.47s1.084 2.023 3.073 1.77 2.046-.674 3.3-2.748c.216-.362.435-.108.3.832.975-.47 1.517-.615 2.095-.76s2.083-.655 3.075-2.494c.505-.94.778-1.263.686-2.24-.035-.365.506-1.085 1.05-1.592s2.023-2.422 1.266-3.796-2.026-.686-2.64.326-1.302 2.133-1.338 3.868c-.434-.144-.877.015-1.084.36-.1.182-1.7-.035-2.243.1s-.72-.18-.144-.94 2.616-3.5 2.495-5.568c-.036-.614.046-.728.144-1.192.127-.597.183-.606-.56-1.013-.483-.264-.512-1.017-.596-1.6-.1-.614-.208-.617-.904-.47-.515.1-1.375-.398-1.772-1.048" />
          <path d="M48.044 26.7c-.198.452-.745.885-2.007.74-.632-.072-1.25-.08-1.355.416-.072.344-.36.324-.76.308-.417-.018-.868-.127-.887.018s1.773 1.2 2.37 1.48 1.466.918 2.17.85c.94-.1 1.76-.555 3.146-2.025.572-.605 1.03-.92.488-1.175-.37-.17-.742-.217-1.23-.217s-1.538-.072-1.935-.397m-6.744.03c-.488-.02-.542-.38-.217-.922s.634-1.048 1.067-1.374c.072.235.217.524.434.65-.3.308-.67.693-.6 1.453l-.685.193z" />
        </g>
        <path
          d="M52.306 24.483c-.62 0-1.543-.202-2.203-.653-.668-.456-.9-.676-.773-1.35l.18-1.066c.056-.318.038-.527-.057-.64a.26.26 0 0 0-.206-.092c-.138 0-.32.088-.556.268-.382-.286-.743-.607-1-.844l-.452-.38c-.075-.05-.166-.13-.176-.228-.008-.075.032-.155.117-.24.052-.052.12-.063.212-.063l.042.001h.043c.065 0 .186 0 .265-.092s.097-.24.062-.486c.001-.014.028-.04.2-.04l.134.003.133.004c.094 0 .152-.01.195-.03.08-.04.102-.12.116-.176.02-.08.03-.113.154-.113.07 0 .164.015.28.044.02.005.04.008.06.008.118 0 .175-.093.216-.16l.022-.034c.046-.07.1-.1.2-.1a.46.46 0 0 1 .079.007l.262.056c.105.026.195.048.275.048.213 0 .28-.16.3-.282.065-.244.115-.318.214-.318.087 0 .217.053.386.158.148.092.273.136.383.136.166 0 .284-.104.32-.288.001-.004.004-.016.05-.016.107 0 .298.072.495.188l.098.055c.34.193 1.044.594 1.848 1.533.184.214.237.378.223.415-.026-.001-.044.002-.062.005-.123.02-.307.047-.345.356-.022.17-.075.27-.1.286 0-.005-.026-.025-.064-.1-.05-.097-.114-.196-.224-.196-.022 0-.042.004-.056.008-.007-.014-.022-.04-.04-.1s-.07-.193-.206-.193c-.064 0-.117.037-.155.063a.16.16 0 0 0-.021.015c-.02-.054-.078-.187-.207-.187a.27.27 0 0 0-.084.015.18.18 0 0 1-.027.007c0-.003-.01-.016-.025-.05-.025-.058-.078-.1-.148-.1-.05 0-.105.017-.163.035a.6.6 0 0 1-.152.034c-.032 0-.04-.01-.047-.022-.05-.092-.124-.106-.164-.106-.064 0-.123.032-.18.062-.045.023-.095.05-.13.05-.01 0-.03 0-.057-.038-.02-.025-.08-.102-.166-.102s-.138.07-.18.126l-.017.024c-.042.055-.07.076-.103.076-.014 0-.03-.004-.046-.01a.38.38 0 0 0-.127-.025c-.125 0-.18.1-.212.14s-.035.05-.046.05-.028-.002-.064-.017a.3.3 0 0 0-.124-.03c-.145 0-.206.126-.246.2s-.06.1-.087.1c-.007 0-.016-.001-.026-.004a.57.57 0 0 0-.147-.023c-.205 0-.232.173-.262.357l-.017.1c-.05.293-.182 1.503-.162 1.814.018.3.396.3.54.3.268 0 .634-.05 1.088-.112.9-.124 2.527-.618 3.372-1.323.216-.18.384-.2.446-.2.053 0 .078.013.083.018.007.043-.095.273-.308.452l-.07.063c-.264.232-.88.777-2.127 1.02l-2.663.44c-.048 0-.072-.004-.082-.006a.26.26 0 0 0-.06-.008c-.06 0-.1.03-.128.082-.024.067.013.146.103.222.12.1.286.16.446.16a.63.63 0 0 0 .144-.016c.042.001.173.123.268.212.257.24.646.604 1.16.604.645 0 1.578-.694 1.847-.906.124-.097.407-.242.57-.288a1.74 1.74 0 0 1-.133.146l-.047.047c-.594.595-1.208 1.2-1.805 1.226h-.073m7.63-.827c-.42.296-.65.398-.687.903s-.136 1.37-.326 1.447c-.246.1-.212-.47-.288-.3-.1.253-.417.144-.506-.1-.04-.102-.94-.092-.217-1.14.654-.95 1.156-1.446 1.626-1.663s1.266.217.398.832"
          fill="#061922"
        />
        <path
          d="M77.634 66.642c-.167-.425.127-1.14 1.03-.634s1.6.942.94 2.93l-1.375 3.977c-.252.832-1.23 1.88-.904.47s.498-3.114.36-3.977c-.25-1.6.26-1.496.092-2.223-.052-.224-.084-.4-.146-.542m3.42 1.717c.26.78.542 2.566.108 3.3s-1.772 2.712-2.277 3.22-.904.3-.58-.254.76-1.265.76-1.518-.035-.542.398-1.374 1.193-3.616 1.265-3.832.253.253.326.47m-9.33 6.685c-.216-.65-.325-1.6-.686-2.133.3-.796 1.242-2.933 2.856-3.58.18-.073.3-.254.217-.398s.217-.252.36.254.398 1.95.398 1.95c.072.326-.072.58-.144 1.013s-.254 1.4-.145 1.915.3.87 1.3.652c.508-.1.472-.253.615-.688l.688-2.35c.144-.687.02-2.367-.126-2.8s.054-1.9-.055-2.188-.18-.72-1.084-1-1.157-.363-1.772.252l-1.12 1.157c-.3.3-1.013.035-.4-.54L74 65.212l-.178-.47h-.327c-.977.978-2.278 1.556-3.146 1.736-.326.068-.94.108-.506.687.1.146.145.543.4.4s.65-.796 1-.507-.07.977-.506 1.302l-1.228.832c-.324.182-.507.36-.47.94s.072 1.628-.254 2.423-.143 1.012.145 1.554.76 1.012.904 1.88.218 1.084.796 1.012.796-.326 1.013-.687l.07-1.265z"
          fill="#fab383"
        />
        <path
          d="M71.94 76.71c-.252.435-.687 1.12-.687 1.736S70.64 79.71 70.71 80s.87 1.048 1.338 1.844 1.083 1.987 1.083 3.976-.65 4.7-.72 5.062-.253.65.29 1.157 1.4 1.446 1.736 3.578.542 3.255.687 3.363.108.29.108.687.36 2.676.615 3.11.216-2.458.18-3.3.037-4.807.182-5.385.29-1.23-.218-1.954-1.372-1.99-.72-4.084 1.698-2.06 1.372-2.893-.903-1.4-1.336-1.88-.1-1.59-.11-2.062c-.036-.87-.724-1.012-.796-1.99s-.145-1.77.58-2.747-.253-.94-.58-1.555-.5-1.436-.216-2.71c.144-.652.07-.83-.1-.904s-.94-.217-.94-.217l-1.12 2.242c.182.433.253 1.085.253 1.518l-.326 1.843z"
          fill="#a73832"
        />
        <g fill="#fff">
          <path d="M61.493 32.712c-.9 1.187-2.277 4.194-2.93 6.073s-2.133 6.364-1.083 9.328 3.1 1.085 3.577-.036l1.412-3.543c.216-.506.325-.796.722.397s.976 4.05.976 4.303-.4.977-.83 2.097-.687 1.916-.254 2.604 2.134 3.614 2.676 4.88c.325.76.614.903 1.482.686s2.965-.94 3.58-1.23.325-.796.144-1.4c-.274-.936-1.372-6.148-1.372-6.834s.183-1.587-.725-.578c-.323.362-.758 0-.65-.507s1.192-7.556 1.266-8.423l-2.928-6.327c-.507-.76-.687-.795-1.447-.397s-2.455 1.007-3.073-.434c-.108-.254-.288-.832.145-.904l-.326-.1s-.254.217-.36.362m9.47 25.996c-.672.386-2.963 1.373-3.903 1.52-.965.15-.723.398-.542 1.122l1 3.65c.3.76.687.746 1.447.724 1.157-.036 3.1-.543 4.52-1.845-.4-.47-1.095-2.723-1.3-3.688-.218-1-.218-2.06-1.23-1.482m-20.718-20.86c-.072.146-.325.58-.902.58s-1.05-.18-1.4.325-2.35 2.93-2.784 4.4c.435.904 1.014 2.53 1.447 3.688 1.4-1.192 5.9-5.585 6.76-6.435.327-.325.362-.614-.108-.94l-2.495-1.6c-.3-.182-.434-.182-.507-.037m-11.39 6.372c-.278 1.114-.83 3.073-1.735 4.592.36.578.65 1.085 1.084 1.265 1.012-.723 2.928-2.496 3.47-3.146s1.23-1.627 1.23-1.843-.253-.3-.578-.218-1.664-.462-2.965-.722c-.36-.073-.47-.073-.506.072m-.794-1.084c-.398-.08-1.772-1.555-2.243-2.35s-.543-.723-.722-.145-.868 1.844-1.338 2.46l-2.025 2.567c-.326.36 0 .506.3.795s1.77 2.096 2.096 2.494.688 1.122 1.554.326 1.917-2.242 2.388-3.724.504-2.26.902-2.17l.018-.307-.108-.18-.217-.18c.054.126.054.235-.035.38s-.38.07-.56.036M60.2 9.863c-.974 1.15-2.93 2.168-6.218 3S47.537 16 46.2 17.13s-4.7 3.88-6.327 4.555c-.433.18-1.356.794-.18.94.868.1 1.482-.397 3.362-1.77s3.34-2.365 4.773-3.76c1.338-1.302 3.76-2.53 6.362-3.254s6.023-1.86 7.014-2.93c.47-.505.507-.76.073-1.193s-.687-.324-1.085.146m-16.596 11.37c-.283.156-.397.325-.724 1.374s-.288 1.662-.017 1.916c.197.183.487.2.633.2.108 0 .217.037.2-.27s-.04-1.618.94-2.205c.18-.1-.024-.867-.67-.76-.217.037 0-.452-.362-.253m-11.17 4.137c.507 0 .832 0 .796.578s-.3 1.374-.325 1.917-.037.758.3.758-.47.326-.905.4-1.1.32-1.446-1.52c-.108-.58-.072-1.482-.144-1.7.47-.217 1.116-.434 1.735-.434m9.61 1.545c.134.73.333.715.187.824s-.296-.276-.886-.18l-5.44.832c-1.012.107-1.067-.056-.127-.254l5.405-1.032.86-.2zm-5.488 55.29c.47.3 1.6.615 3.507-.18s4.05-.254 4.374 1.12.337 3.146-.253 3.906c-.506.65-.976.578-1.554.398-1.048-.33-3.47-1.446-4.158-1.772S36.62 85 35.787 85c-.325-.687-.3-1.88-.072-2.314s.217-.868.397-.76l.435.3m7.593 6.398c.47 0 1.32.198 1.6 1.05.216.686 1.627.866 2.242.83s.506.3.47.652l-.144 1.88c0 .434.1 1.95.18 2.24s-.18.434-.506.578-1.52.506-2.277-.036c-.4-.285-.87-.686-.4-.723s-.577-4.12-.867-4.844-1.122-1.628-.3-1.628m-12.446-8.53c.195.064.3.254.434.506s.194.472-.036.723c-.398.434-.868 2.422-.795 3.833-.253-.073-.795-.18-1.084-.1-.1-.796-.037-3.3.325-4.086s.722-1.012 1.156-.867" />
          <path d="M31.774 102.125c.9 1.014 2.603 2.568 3.868 3.1s2.098.723 3.218.615c.907-.088.723.3 0 .398s-2.386.108-3.47-.47-2.806-1.648-3.906-3.217c-.253-.363 0-.76.3-.435m18.826-2.52c-.734.334-2.096 1.013-3.397 1.338.144.65.18.94.18 1.12.794 0 2.327-.555 3.578-1.337.3-.182.398-.397.3-.65s-.254-.65-.652-.47m-8.566-2.966c-.18-.18.848-.396 1.065-.396.254.162.715.57.887.74.1.107.055.18-.055.253s-.74.235-1.03.253l-.867-.85M43.96 81.6c-.3-.218-.253-.325-.108-.543s.3-.36.433-.434.362-.108.614.253 1.627 2.64 1.916 3.254.652.217.507-.144a11.92 11.92 0 0 0-.543-1.157c.4-1.23.796-3.1.796-4.338s-.3-2.458-.507-2.893c.977.036 3.1 0 3.94-.253s.144-.325-.18-.3-2.663.027-4.374-.18c-2.964-.362-5.876-2.03-6.796-3.182-.146-.18-1.014-.1-.3.47s2.568 2.305 5.28 2.784c.614.108 1.6.288 1.735 2.53s-.072 3.687-.072 3.904-.144.3-.326.036-.795-1.083-1.122-1.263-.54-.146-.83.07a6.93 6.93 0 0 0-.904.867l.832.507z" />
          <path d="M38.137 88.658c-.27 0-1.898.127-2.24 0s-.566-.52-.325-.687c.288-.2.85.055 1.4.055s1.157-.144 1.302-.055.344.055.344.742l-.5-.055zm-3.94 9.924c-.47-.288-1.014-1.628-1.12-4.302-.035-.904.327-2.423.615-3.144s-.18-.435-.288-.182-.47 1.266-.58 2.024-.3 1.88 0 3.507l.506 2.423.868-.326z" />
        </g>
        <path
          d="M50.737 12.248c.5.054 1.03.018 1.158-.325s.017-.56-.145-.633-.235-.054-.163-.38.308-.288.3-.795-.398-.524-.742-.414-.47.27-.796.703-.18-.3-.126-.416c.05-.117.18-.95-.265-1.1l-.737.374c-.078.16-.14.345-.2.528-.18.47-.4.117-.56-.1l-1.228.723-.108.072c.043.285.386.646.578.778.235.163.1.47-.2.47s-.65-.198-1.013.234-.127.85.218.85.632.126.76.523.235.562.705.615.74-.307.867-.524.3-.524.488-.45c.295.107.258.417.168.747l1.057-.568c-.06-.306-.24-.588-.375-.722-.163-.163-.1-.235.38-.18m4.02-5.242l-.523.137c.086.413.253.944.162 1.02-.1.1-.525.163-.85.252s-1.103.815-.705 1.338.524.832.597 1.104.722.596 1.173.053.796-1.138.906-.76c.1.32.066 1.1.003 1.504l.285-.058c.18-2.023-.323-3.47-1.048-4.6m-9.925 9.707c-.252-.198-.325-.506-.02-.596s.725-.163 1.484-.488.36-.886.02-1.03-.382-.47-.344-.814-.055-.848-.724-.595-.435.903-.632 1.12-.307.144-.272-.18-.252-.543-.415-.616c-.128-.055-.405-.12-.642-.14-.692.624-1.325 1.277-1.805 1.925.108.223.36.47.494.5.182.055.453.182.433.543-.015.305-.703.326-1.155.337.32.864.644 1.477 1.097 1.967.1-.03.236-.075.42-.153.56-.235.74-1.085.83-1.338s.326-.2.5.127c.114.228.155.438.17.643l.932-.898a4.2 4.2 0 0 0-.363-.324m9.6 21.6c.108-.018-.18-1.3.056-1.355s.34.705.848.614.633-.595.56-1.156.253-.253.507-.65-.3-.94-.906-.56-.505-.127-.18-.325.1-.922-.597-.688c-.497.17-.748-.15-.986-.287l-.547.23c-.04.14-.008.3.033.492.052.232.162.832-.217.58-.33-.22-.778-.344-.904.072s.126.453.1.705-.687.307-.38.83.76.236 1.068.037.596.036.488.307c-.086.2-.256.923-.268 1.392l.453.3c.18-.182.522-.483.88-.545m-9.86-1.25c.27-.072.795.487 1.265.162s-.2-.65-.108-.922.307-.795-.02-1.048-.67-.018-1 .362-.218-.345-.037-.65c.235-.398 0-.67-.398-.742s-.524.488-.795.235c-.43-.4-1.103-.235-.94.326s.342.74 0 .813-.67-.83-1.066-.107.234.94.18 1.482.163 1.12.488 1.174.668-.307.85-.523.615-.38.56.035c-.038.287-.057.883-.068 1.226l1.767-.792.048-.018c-.18-.073-.438-.193-.68-.362-.362-.253-.307-.577-.036-.65m-8.007 16.467c.832-.253.868.398.76.94s-.108 1.7-.072 2.277l1.373.074c-.072-.363 0-1.412.037-2.025s.65-1.556.868-.616 1.156.977 1.807.58 1.122-1.265 1.808-2.495-.216-1.555-.76-1.482-1.085.144.145-.867c1.143-.942-.78-1.415-1.665-1.592l-4.843 4.628-.576.503c.2.1.566.243 1.118.076m-1.447 9.1c.687-.218 1.12 1.265 2.133.397s.3-1.6.254-2.313.795-1.013.543-1.916c-.387-1.378-1.665-.073-2.46.686s-.83.144-.035-1.083-.507-1.628-1.302-1.302c-.707.288-1.356.006-1.77-.365-.306.5-.53.94-.76 1.413-.687 1.4-.217 1.445.3 1.445s1.6 2.134 1.734 2.53c.05.142.422.684.914 1.377-.03-.342.037-.736.46-.87m19.766-14.244c-.65-.144-1.496-.253-1.6 1.085-.036.506.47.905.94 1.085s.397.505-.1.325-.903-.3-1.263.76.288 1.194.614 1.266.577.144.505.58-.3 1.698.542 1.807 1.554-.904 1.808-1.4.54-1.013.615-.434-.037.867-.325 1.518-.3.94.144.905 1.157 0 1.374-.508.543-1.48.58-2.168c.02-.43.398-.478.677-.453l.3-2.078c-1.42.212-2.627-1.52-3.047-3.02-.483.525-1.193.87-1.762.743m-6.762-.265c-.254.433-.976 1.663-.652 2.06s.687-.398.977-.108.94.613.94.397.072-.65.18-1.23.36-.904.614-.434.614.867 1.518.65.796-1.157.615-1.843.47-1.013.796-1.193 1.157-.832.543-1.4-1.158.253-1.7.36-.326-.36.795-1.228c.968-.75.158-1.498-.43-1.757L47.43 47.1c-.217.208-.404.45-.58.744 1.455-.677 1.542-.107 1.303.304m8.965 14.535c.47.435 1.592 1.05 2.386.325s-.18-1.52-.288-2.096.578-.942.216-1.88c-.628-1.637-1.554.325-2.098.867s-.45-.38.037-.867c.254-.254 1.375-.94.723-1.7s-1.6-.326-2.06 0-.832.723-1.555.506-1.338-.3-1.77.76.397.76 1.083 1.517.255.797-.287.616-.796-.868-1.592-.76-.796 1.376-.542 1.7.758.506.397 1.12.18 1.338.83 1.627 1.626-.868 2-1.338.72-.36.65 0c-.06.3-.23 1.13-.254 1.812l1.62-.482c-.001-.38-.083-1-.243-1.58-.217-.796.3-.58.76-.146m-9.413 3.868c-.868.252-1.013-.146-1.6-.362s-.616.288-.218.903.832 1.193.362 1.193-.83.073-.904.435-.83-.072-1.012-.832-.36-2.205-.76-1.483-.76 1.917-1.77 1.375-.326-1.266-.832-1.773-.976-1.156-.47-2.06.94-.145 1.4-.145.543-.434.1-.76-.977-1.88 1.012-1.77c.766.042 1.6-.217 2.24-.687s2.35-.218 1.664.977-.47 1.445-.073 1 .904-1.228 1.663-1 .434.794-.036 1.445-.18 1.085.18 1.337 1.028 1.62-.975 2.207m3.698-8.532c-.652.036-1.448-.145-1.448-.145-.072.687-.74 1.67-1.4 2.676-.073.1-.47.1-.652-.037s-.685-.398-.3-.832 1.05-1.337.94-1.734-.397-.76-.83-.217-1.12 1.663-1.88 1.7-1.518-.652-1.158-1.34.47-1.048-.036-1.664-.317-1.4.76-1.88c.325-.144.903 0 1.3.325s.615 0 .072-.325-.976-.723-1.048-1.446c-.07-.687.362-1.4 1.302-1.012s1.518.072 1.916-.253 2.093-.732 1.844.76c-.182 1.083-.686 1.12-.833 1.698s.3.217.543-.216.832-2.2 2.024-.87c.3.326.182.87-.18 1.483s-.072.976.145 1.3.72 1.924-1.083 2.025"
          fill="#008348"
        />
        <g fill="#fff">
          <path d="M81.23 29.266l1.104-.783 2.393 3.554 1.4-1-2.464-3.482 1.07-.757 2.622 3.676 1.4-1-3.894-5.458-6.406 4.54 3.533 5.023 1.4-1zm4.63 12.342l2.095-.97-1.443-3.135 4.907-2.044-.9-1.964L83.6 36.5zm1.247 3.315l.218 1.933 4.652-.547.182 2.016 2.082-.154-.58-6.76-2.084.154.18 2.812zm.233 6.594l.03 2.304 6.838-.02-.028-2.303z" />
          <path d="M90.553 57.077c-1.146-.22-2.503-.03-3.453.7-.853.648-1.25 1.298-1.476 2.478-.142.748-.027 1.73.22 2.6l1.807-.606c-.174-.416-.247-1.048-.06-1.688.366-1.236 1.37-1.793 2.596-1.612 1.3.2 2.042 1.384 1.807 2.804-.1.566-.373 1.056-1.017 1.44l1.12 1.348c.9-.558 1.6-1.657 1.75-2.43.25-1.3-.06-2.2-.662-3.255-.587-1.03-1.58-1.56-2.632-1.76M89.3 66.63c-.955-.245-2.256.804-2.883 1.407-.362.348-1.625 1.62-2.208 1.424-.522-.175-.363-.972-.186-1.493.256-.76.65-1.4 1.26-1.8l-1.132-.502c-.55.46-1.163 1.202-1.415 1.95-.3.862-.4 1.87-.288 2.513.158.827.447 1.354 1.382 1.27.72-.067 2.528-1.24 3.57-2.226.53-.498.98-.552 1.215-.42.382.2.358.862.22 1.27-.184.545-.446 1.378-.88 1.686l1.545 1.037c.63-.634.958-1.587 1.143-2.478.45-2.152-.717-3.463-1.345-3.625m-8.585-45.4c-.134-1.06-.72-2.277-1.314-2.792-.92-.8-2-1.013-3.167-.863-1.175.154-2.268.908-2.885 1.785-.672.953-1.058 2.268-.8 3.43.238 1.043.668 1.673 1.65 2.364.623.44 1.565.737 2.45.864l.2-1.896c-.45-.012-1.058-.206-1.562-.64-.977-.843-1.023-2.175-.403-3.028.772-1.065 2.12-1.293 3.317-.495.478.316.667.828.752 1.576l1.76-.305zm-69.94 39.395c.05-.517.02-1.462.58-1.58.54-.114.896.4 1 .948.166.785.387 1.396.07 2.062l1.456-.153c.24-.675.165-1.578.002-2.348-.2-.892-.473-1.518-1.13-2.1-.63-.56-1.106-.706-2.026-.512-.56.12-1.562 1.122-1.597 3.14-.006.383-.097 1.114-.44 1.13-.438.023-.76-.498-.85-.92-.12-.563.042-1.796.257-2.282l-1.524-.007c-.22.866-.306 2.08-.118 2.97.415 1.963 1.605 2.605 2.57 2.5 1.033-.114 1.575-1.192 1.737-2.85m-3.036-8.28l5.4-.067-.026-1.696-5.4.067-.022-2.3-1.728.02.07 6.443 1.728-.02zm9.75-16.946l-4.168-2.404.01-.02 5.52-.092 1.317-2.033-6.802-3.922-1.028 1.6 4.64 2.915-6.33.18-.883 1.708 6.693 3.885zm-6.75 3.944a2.18 2.18 0 0 1 2.177 2.176 2.18 2.18 0 0 1-2.177 2.177c-1.203 0-2.177-.975-2.177-2.177s.974-2.176 2.177-2.176m0 6.355a4.18 4.18 0 0 0 4.179-4.179 4.18 4.18 0 0 0-4.179-4.179 4.18 4.18 0 0 0-4.179 4.179 4.18 4.18 0 0 0 4.179 4.179m2.693 25.493a2.18 2.18 0 0 1-2.177-2.178c0-1.202.975-2.176 2.177-2.176s2.176.974 2.176 2.176a2.18 2.18 0 0 1-2.176 2.178m4.18-2.178a4.18 4.18 0 0 0-4.179-4.178 4.18 4.18 0 0 0-4.179 4.178 4.18 4.18 0 0 0 4.179 4.18 4.18 4.18 0 0 0 4.179-4.18m3.67 9.746l-.144-.173c-.46-.553-2.018-2.2-1.375-2.806.587-.552 2.067 1.327 2.486 1.828l.18.218-1.146.933zM18.7 81.087c-.552-.66-2.198-1.955-1.495-2.617.67-.63 2.32 1.383 2.526 1.63l-1.03.988zm-.254-7.3c-.64.57-.95 1.92-.346 2.835-.66-.32-1.988-.43-2.598.1-1.504 1.306.32 3.193 1.818 4.7l2.088 2.062 5.55-4.6-2.247-2.613c-.788-1-2.966-3.63-4.264-2.482z" />
        </g>
        <g fill="#bb9753">
          <path d="M43.145 95.4c.235-.108.56-.253.706-.144l1.554 1.194c.54.47.722.614.3.867s-.833.506-.76.288.18-.54-.1-.83-.998-.838-1.3-1.085l-.38-.3m-2.053.608c-.18.163-.217.434 0 .65s1.428 1.23 1.627 1.43.488.272.813.198-.38.398-.65.452-.577.053-.866-.217l-2.242-2.115c-.326-.307.1-.307.38-.342s.542-.02.94-.055m14.424-85.85c-.1-.38-.453.218-.905.76s-1.103.218-1.174-.053-.2-.58-.597-1.104.38-1.247.705-1.338.742-.162.85-.252c.092-.076-.072-.6-.16-1.02-1.3.37-2.885 1.05-4.284 1.74.426.163.3 1 .25 1.106-.055.127-.2.85.126.416s.453-.596.795-.703.723-.092.743.414-.218.47-.3.795 0 .308.163.38.27.3.144.633-.67.38-1.158.325-.542.018-.378.18c.13.133.3.422.373.724 1.176-.57 2.6-1.045 4.803-1.498.06-.417.083-1.2-.006-1.504m-11.415 7.14c-.163-.326-.398-.38-.488-.127s-.272 1.103-.832 1.337a3.53 3.53 0 0 1-.424.151 4.08 4.08 0 0 0 .659.573l1.253-1.3c-.015-.2-.057-.42-.168-.644m5.404-4.3c-.198-.072-.36.235-.488.45s-.397.58-.866.525-.58-.217-.706-.615-.416-.524-.76-.524-.58-.416-.217-.85.723-.235 1.012-.235.434-.307.2-.47c-.187-.13-.515-.498-.572-.782-1.03.678-2.5 1.727-3.798 2.9a2.3 2.3 0 0 1 .628.153c.163.072.452.3.416.615s.072.398.27.18-.036-.868.632-1.12.76.252.724.595 0 .67.344.814.74.705-.02 1.03-1.175.398-1.483.5-.234.397.018.595c.155.122.266.24.356.33.956-.888 1.86-1.614 2.88-2.3l1.6-1.026c.087-.325.118-.64-.173-.745m-7.084 3.38c.02-.36-.25-.488-.433-.542-.132-.04-.38-.297-.5-.517a6.25 6.25 0 0 0-.469.716l.235.68c.453-.01 1.14-.034 1.156-.337m15.278 16.866c-1.184-.075-2.593.165-3.94.684.235.14.486.46.974.292.687-.235.923.488.597.688s-.435.703.18.324 1.156.163.905.56-.58.1-.507.65-.054 1.067-.56 1.157-.614-.668-.848-.614.053 1.337-.056 1.355c-.353.06-.7.366-.872.55l.04.03c2 1.43 2.495.65 2.785-.036a25.27 25.27 0 0 0 1.12-3.796c.1-.615.254-1.265.182-1.844" />
          <path d="M53.377 37.158c.108-.27-.18-.506-.487-.308s-.762.488-1.07-.036.343-.578.38-.83-.217-.3-.1-.705.574-.292.905-.073c.38.254.268-.346.216-.578-.04-.176-.068-.354-.036-.5a10.65 10.65 0 0 0-1.139.599c-1.858 1.137-1.916 2.097-1.483 2.46.4.323 1.184.475 2.535 1.357.014-.47.184-1.184.268-1.393m-5.9-1.088c-.77-.383-1.52-1.23-2.025-2.205 0 0 .036-.144-.18-.144s-1.013-.073-2.35-.543-1.518-.18-1.698.398-.327 1.627-.363 3.363.723 2.82 1.194 2.638c.228-.1.82-.382 1.452-.7l.066-1.226c.054-.415-.38-.252-.56-.035s-.523.578-.85.523-.542-.632-.488-1.174-.58-.76-.18-1.482.723.18 1.066.107.163-.252 0-.813.5-.727.94-.326c.27.254.397-.307.795-.235s.633.344.398.742c-.18.307-.308 1.03.037.65s.686-.615 1-.36.1.776.02 1.047.58.598.108.922-.995-.234-1.265-.162-.326.398.036.65c.236.165.483.294.665.367.753-.256 1.634-.75 1.92-.928l.47.037c.036-.615 0-1.013-.217-1.122" />
          <path d="M44.8 44.028c-.3-.65-.4-.15-1.193 1.12-.406.643-1.432 1.835-2.716 3.182.9.18 2.807.65 1.668 1.6-1.23 1-.687.94-.145.866s1.447.253.76 1.483-1.157 2.096-1.808 2.495-1.6.36-1.807-.58-.833 0-.868.615l-.037 2.025-1.373-.073c-.036-.58-.036-1.736.072-2.278s.073-1.193-.76-.94c-.543.166-.915.026-1.108-.085-1.616 1.438-2.433 2.43-2.98 3.307.415.368 1.073.645 1.775.358.795-.326 2.098.072 1.302 1.302s-.76 1.842.035 1.083 2.074-2.064 2.46-.686c.252.903-.58 1.192-.543 1.916s.76 1.446-.253 2.314-1.446-.616-2.133-.398c-.414.132-.498.513-.475.85l2.68 3.847c.724 1.195.724 2.642 1.012 2.424s.977-.87 1.194-1.048.433-.398.325-.796-.524-2.53-.397-4.013c.144-1.7.94-3.56 1.518-4.627l2.64-5.17c.398-.867 1.12-1.88 1.302-2.675s.867-2.64 1.157-3.507c-.072-.723-.54-2.186-1.302-3.904m5.41-8.06l-.65 1.664c-.145.362-.8.22-.76-.037.1-.542-.664-.183-.578-.614.072-.362-.072-.94.325-.94l1.663-.072M49.002 9.8l.2-.524-.758.407c.16.226.377.584.557.117m2.406 48.22c-.652.036-1.448-.145-1.448-.145-.072.687-.74 1.67-1.4 2.676-.073.1-.47.1-.652-.037s-.685-.398-.3-.832 1.05-1.337.94-1.734-.397-.76-.83-.217-1.12 1.663-1.88 1.7-1.518-.652-1.158-1.34.47-1.048-.036-1.664-.317-1.4.76-1.88c.325-.144.903 0 1.3.325s.615 0 .072-.325-.976-.723-1.048-1.446c-.07-.687.362-1.4 1.302-1.012s1.518.072 1.916-.253 2.093-.732 1.844.76c-.182 1.083-.686 1.12-.833 1.698s.3.217.543-.216.832-2.2 2.024-.87c.3.326.182.87-.18 1.483s-.072.976.145 1.3.72 1.924-1.083 2.025m-3.688 8.533c-.87.252-1.013-.145-1.592-.362s-.615.288-.217.903.832 1.194.362 1.194-.832.072-.904.434-.83-.072-1.012-.832-.36-2.205-.76-1.482-.76 1.916-1.77 1.374-.325-1.266-.832-1.773-.975-1.156-.47-2.06.94-.145 1.4-.145.542-.433.1-.76-.977-1.88 1-1.77c.767.042 1.6-.217 2.242-.687s2.35-.217 1.663.977-.47 1.445-.073 1.012.904-1.23 1.664-1.012.434.794-.036 1.445-.18 1.085.18 1.337 1.027 1.62-.975 2.207m12.834-6.473c-.94-1.553-1.12-2.168-1.266-3.76-.1-1.004-.01-2.3.136-3.563-.278-.022-.656.03-.677.453-.036.688-.362 1.663-.58 2.17s-.94.47-1.374.508-.434-.254-.144-.905.397-.94.324-1.518-.36-.072-.614.434-.976 1.517-1.808 1.4-.615-1.373-.542-1.808-.18-.506-.505-.58-.978-.217-.615-1.265.76-.94 1.264-.76.58-.144.108-.324-.975-.58-.94-1.085c.095-1.34.94-1.23 1.6-1.085.566.125 1.28-.215 1.765-.733l-.03-.1c-.965-3.68.866-8.206 1.372-9.47s2.46-4.826 3.128-5.893l-1.844-.94c-.523-.27-.813-.397-.958-.198s-.326.306-.578.668c-.508.725-.072.615.072.615s.76.795.87.977 0 .324-.254.902c-.332.757-.542 2.496-.83 3.544-.876 3.175-2.242 2.856-2.857 2.46s-.795.217-1.4 1.084c-.147.206-.515.6-1 1.1.6.263 1.386 1.02.423 1.766-1.12.868-1.34 1.338-.796 1.23s1.085-.94 1.7-.36-.217 1.23-.543 1.4-.977.506-.796 1.193.3 1.627-.615 1.844-1.264-.18-1.517-.65-.506-.145-.615.434l-.18 1.23c0 .216-.65-.107-.94-.397s-.65.505-.977.108.398-1.628.653-2.06c.238-.4.138-.976-1.3-.3-.465.78-.834 1.908-1.414 3.673-.795 2.424-2.596 5.723-3.344 6.924-1.947 3.13-2.295 6.092-2.005 7.936.287 1.834.54 1.698.94 1.698s1.374 1.23 2.024 2 .905.433 1.23.18c1.045-.812 3.144-2.17 6.1-3.578 1.265-.6 2.95-1.242 4.592-1.768.025-.68.192-1.502.252-1.8.072-.362-.288-.47-.65 0s-1.338 1.626-2 1.337-1.2-1.012-.83-1.627-.143-.795-.397-1.12-.254-1.592.542-1.7 1.048.58 1.592.76.975.143.287-.616-1.518-.47-1.083-1.517 1.048-.976 1.77-.76 1.084-.18 1.555-.506 1.4-.76 2.06 0-.47 1.446-.723 1.7c-.488.488-.578 1.4-.037.867s1.47-2.504 2.098-.867c.362.938-.326 1.3-.216 1.88s1.085 1.373.288 2.096-1.916.1-2.386-.325-.976-.65-.76.146c.16.585.24 1.2.242 1.58 1.582-.438 2.96-.704 3.66-.642 1.033.092 1.8.397 1.773-.543s-.542-1.6-1.482-3.146M39.13 88.928c-.16 0-.504-.056-.504-.203l-.417-.046c.252.05.482.34.216.52-.3.202-1.2.3-2.185.254s-1.214-.582-1.23-.966c-.012-.254.017-.476.017-.842s-.087-.694.13-.84.162.218.305.218c.617 0 2.75.202 3.256.276s.473-.23.36-.57c-.034-.1-.177-.07-.23.076s-.526.092-.526.092l-1.55-.13c-.617-.038-1.1-.107-1.467-.18s-.854-.055-.814.128c.03.183.142 2.466.163 2.796.016.328.035.458.197.458l3.87.036c.652 0 .618-.074.633-.438s-.052-.64-.22-.64" />
        </g>
      </g>
    </svg>
  );
};

export default BOS;
