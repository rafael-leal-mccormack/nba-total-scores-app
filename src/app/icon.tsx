import Image from "next/image";
import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 1417,
  height: 2500,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 24,
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        {NbaLogo()}
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}

const NbaLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1217"
      height="2500"
      viewBox="0 0 276.991 569.026"
    >
      <path fill="#fff" d="M0 0h276.991v569.026H0z" />
      <path
        d="M197.43 503.7c.497-8.029.332-10.678-.754-11.985-.824-.994-1.408-4.093-1.432-7.609-.036-5.326-.751-7.315-7.006-19.461-6.674-12.965-6.913-13.673-5.727-16.952 1.105-3.06.948-4.088-1.47-9.664-2.412-5.562-3.497-6.774-9.957-11.134-12.532-8.457-22.604-17.08-39.377-33.705-18.725-18.567-34.272-38.982-48.689-63.937-5.006-8.664-5.398-9.024-9.82-9.047-3.32-.017-7.307-2.913-7.292-5.301.004-.692-4.059-9.642-9.029-19.886-12.898-26.586-14.001-32.248-10.057-51.606 2.341-11.478 2.781-12.51 7.663-17.915 5.183-5.735 4.37-7.35-4.119-8.189-11.341-1.123-11.225-1.052-13.576-8.329-1.156-3.579-2.102-7.635-2.102-9.013 0-4.567 5.186-19.02 12.316-34.325 3.868-8.306 8.828-19.633 11.021-25.171 7.803-19.708 18.568-35.466 27.26-39.901 3.475-1.773 10.229-3.106 30.328-5.989 11.188-1.605 11.976-2.418 13.583-14.014.935-6.744.842-7.801-.924-10.661-1.274-2.06-1.962-4.976-1.962-8.314 0-4.694.263-5.277 3.021-6.703 2.666-1.378 3.021-2.085 3.021-6.017 0-9.406 1.897-14.643 7.176-19.777a88.325 88.325 0 0 0 3.67-3.77H74.065c-23.482 0-42.52 19.037-42.52 42.52v433.586c0 23.482 19.037 42.521 42.52 42.521H200.55c-.427-.941-1.319-2.465-2.354-3.974-2.878-4.189-2.846-2.718-.766-36.278z"
        fill="#0e499d"
      />
      <path
        d="M203.236 25.325h-36.615c.359.427.877.886 1.507 1.299 4.528 2.966 11.396 10.111 12.492 12.994 1.649 4.341 1.278 10.107-1.05 16.333-1.338 3.574-1.901 6.772-1.523 8.656.712 3.561-2.785 11.11-6.926 14.95-1.493 1.384-3.609 4.26-4.702 6.392-1.093 2.131-3.806 5.848-6.026 8.258s-3.889 5.152-3.703 6.093c.184.942 2.826 3.053 5.871 4.692 3.047 1.639 7.606 4.855 10.135 7.147 2.527 2.292 7.63 6.312 11.339 8.933 13.327 9.421 19.722 25.53 19.788 49.848.029 10.776 5.285 36.033 9.05 43.492 5.157 10.216 7.024 15.848 8.638 26.043 2.072 13.101 2.135 13.249 6.301 14.989 3.981 1.664 14.293 10.035 14.293 11.604 0 .54 1.02 2.41 2.265 4.157l1.39 1.947V67.844c-.004-23.483-19.041-42.519-42.524-42.519zm41.886 284.716c0 .51-2.242 3.379-4.981 6.377-19.104 20.9-51.799 16.244-63.801-9.09-2.904-6.132-3.207-7.672-3.207-16.335 0-8.271.366-10.345 2.698-15.323 3.729-7.956 10.847-15.244 18.628-19.076 3.54-1.742 6.646-3.504 6.898-3.916.254-.411-2.941-7.623-7.102-16.029-9.583-19.365-10.718-22.828-15.066-45.959-1.967-10.455-3.778-19.574-4.029-20.267-.805-2.229-3.618-1.36-10.575 3.264l-6.806 4.524-6.168 15.623c-3.391 8.591-6.168 16.898-6.168 18.457 0 1.755.998 3.767 2.613 5.277 4.031 3.767 5.119 6.533 11.951 30.398 5.034 17.58 6.156 22.716 5.354 24.481-.771 1.688-.271 5.393 2.047 15.171 3.408 14.388 4.679 22.013 6.268 37.606 1.611 15.829 3.315 20.844 12.486 36.75 6.097 10.571 7.969 16.943 12.25 41.693 1.964 11.357 3.947 21.354 4.408 22.214.462.86 2.457 3.971 4.435 6.91 5.438 8.083 6.259 11.802 4.304 19.58-.894 3.553-1.904 8.906-2.246 11.896-.687 5.984 1.479 20.478 3.938 26.365.831 1.987 1.282 4.482 1.005 5.546-.279 1.064.885 6.382 2.583 11.817 5.313 16.998 5.078 24.208-1.041 31.935-1.096 1.384-1.685 2.171-2.036 2.702 18.391-4.684 31.994-21.354 31.994-41.204V309.186c-.369.137-.634.466-.634.855z"
        fill="#d30529"
      />
      <path
        d="M46.676 448.242h17.189l9.916 43.835h.166v-43.835h14.379v71.132H71.468l-10.247-43.935h-.166v43.935H46.676v-71.132zM95.768 448.242h23.223c10.991 0 16.114 7.073 16.114 17.732 0 7.571-2.728 14.347-9.255 15.939v.199c7.768.896 10.909 8.867 10.909 16.238 0 12.354-4.958 21.021-17.768 21.021H95.768v-71.129zm15.371 27.895h3.72c3.14 0 4.876-3.387 4.876-7.173 0-3.985-1.736-7.372-4.876-7.372h-3.72v14.545zm0 29.887h4.298c2.81 0 5.454-2.989 5.454-8.768 0-5.479-2.645-8.567-5.454-8.567h-4.298v17.335zM152.057 448.242h19.338l14.379 71.132H169.41l-1.57-12.453h-12.23l-1.569 12.453h-16.366l14.382-71.132zm9.75 14.545h-.164l-4.215 30.187h8.594l-4.215-30.187z"
        fill="#fff"
      />
    </svg>
  );
};
