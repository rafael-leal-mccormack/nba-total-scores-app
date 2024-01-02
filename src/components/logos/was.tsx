import React, { PropsWithRef } from 'react';
import PropTypes from 'prop-types';
import { LogoProps } from '../../utils/util';

const WAS = (props: PropsWithRef<LogoProps>) => {
  const { size } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 150 150"
      fill="none"
      fillRule="evenodd"
      role="img"
      aria-describedby='title'
    >
      <title id="title">Washington Wizards</title>
      <path
        d="M74.84 26.282h-.085c-26.834.003-48.6 21.75-48.647 48.603v.085c.003 26.86 21.744 48.647 48.593 48.68h.066c26.84-.01 48.603-21.76 48.637-48.625v-.063c-.006-26.848-21.73-48.628-48.565-48.68"
        fill="#fefefe"
      />
      <path
        d="M123.404 74.997v.028c-.03 26.864-21.794 48.616-48.634 48.622h-.066C47.854 123.62 26.1 101.83 26.107 74.97v-.085c.047-26.855 21.816-48.603 48.647-48.603h.085c26.837.05 48.56 21.827 48.565 48.68v.035zm1.104-.142c-.063-27.452-22.32-49.68-49.75-49.682h-.107C47.213 25.236 25 47.5 25.004 74.94l-.003.053v.03c.035 27.47 22.29 49.717 49.74 49.73h.07c27.45-.035 49.678-22.296 49.697-49.758 0-.02.003-.038.003-.066-.003 0 0-.02-.003-.076z"
        fill="#c4cdd3"
      />
      <path
        d="M58.492 63.908c5.055-5.056 7.18-10.967 7.18-10.967l1.397-5.062-5.178-2.9s-3.018-2.098-9.77 1.822c-7.9 4.666-14.343 10.7-17.67 17.102-1.846 3.546-3.307 7.63-4.065 12.27a44.24 44.24 0 0 0 7.627 23.737c-1.317-12.66 10.9-26.527 20.48-36m38.97-17.1c-6.753-3.92-9.775-1.822-9.775-1.822l-5.175 2.9 1.393 5.065S86.03 58.85 91.1 63.907c9.542 9.444 21.725 23.256 20.496 35.887 4.637-6.88 7.4-15.13 7.552-24.017a40.7 40.7 0 0 0-4.005-11.876c-3.33-6.4-9.765-12.436-17.67-17.102"
        fill="#002a5b"
      />
      <path
        d="M81.22 39.2c17.745 2.007 29.406 12.084 35.43 21.022a44.53 44.53 0 0 0-27.824-27.408c-2.864.846-6.04 2.627-7.605 6.386m-12.86 0c-1.575-3.778-4.776-5.56-7.65-6.4C47.65 37.17 37.3 47.434 32.795 60.443 38.774 51.455 50.48 41.23 68.362 39.2m2.905-.5l3.52-5.188 3.528 5.188c1.415-3.866 3.644-6 5.88-7.16-3.028-.654-6.168-1-9.4-1.013-3.238-.003-6.395.352-9.438 1.007 2.242 1.16 4.48 3.284 5.9 7.167"
        fill="#e21836"
      />
      <path
        d="M98.906 77.63C91.7 65.945 75.304 54.147 74.79 53.78c-.512.368-16.9 12.166-24.114 23.85-9.74 15.768-8.476 24.863-5.955 30.054 6.275 5.776 14.22 9.762 23.026 11.16l3.798-53.857 3.166-3.178.04-.044v.003l.003-.003.04.044 3.163 3.178 3.826 53.816-.053.028a44.24 44.24 0 0 0 23.187-11.269c2.48-5.2 3.656-14.283-6.014-29.93"
        fill="#002a5b"
      />
      <g fill="#c4cdd3">
        <path d="M77.96 64.984l-3.163-3.178.035 60.958 6.95-3.964zM74.772 49.7l-1.38 1.02-5.788 4.272 1.515-5.5.26-.953.5-1.847-1.682-.9-5.445-2.935c2.748-.607 5.555-1 8.4-1.183l1.386-.085.6-1.252.088-.176 1.553-3.16 2.198 4.47.053.116 1.4.085c2.833.182 5.643.576 8.388 1.183L79.69 46.68l.774 2.8 1.515 5.5-7.168-5.292v-.028l-.022.016-.02-.016v.028z" />
        <path d="M74.812 49.662v.028l7.168 5.292-2.286-8.31 1.682-.906 5.445-2.938a55.84 55.84 0 0 0-8.391-1.183l-1.386-.088-.057-.113-.56-1.133-.035-.072-1.603-3.262-1.55 3.155h-.003l-.088.18-.553 1.133-.057.113-1.386.088c-2.836.182-5.643.58-8.39 1.183l5.445 2.938 1.685.906-.512 1.844-.26.956-1.515 5.51L74.77 49.7v-.028l.02.016.022-.016z" />
      </g>
    </svg>
  );
};

WAS.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

WAS.defaultProps = {
  size: '100'
};

export default WAS;
