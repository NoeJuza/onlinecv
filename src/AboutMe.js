import './About.css';
import { Route, Switch, Redirect, Link, BrowserRouter } from 'react-router-dom';
import HobbyList from './HobbyList';
function AboutMe() {
  return (
      <div>
        <div className="about">
            <h1>Apprennez à me connaître!</h1>
            <h2>Centres d’intérets</h2>
            <div className="contHob">
                <HobbyList />
            </div>
            <Link to="./experiences">
                <svg class="btn"width="550" height="171" viewBox="0 0 550 171" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="550" height="171" fill="#666666"/>
                <rect x="13" y="10" width="526" height="148" fill="#8F8F8F"/>
                <path d="M102.325 100H115.701C129.141 100 138.613 91.104 138.613 78.24C138.613 65.376 129.077 56.48 115.701 56.48H102.325V100ZM111.285 92.128V64.352H115.253C124.917 64.352 129.333 70.112 129.333 78.24C129.333 86.368 124.917 92.128 115.253 92.128H111.285ZM154.97 100.576C158.746 100.576 161.882 98.784 163.546 95.52L163.354 100H171.994V72.736H163.354V87.328C163.354 90.784 161.434 92.768 157.978 92.768C154.906 92.768 153.434 90.976 153.434 87.904V72.736H144.794V88.48C144.794 96.224 149.018 100.576 154.97 100.576ZM195.822 100.576C202.478 100.576 208.174 94.688 208.174 86.304C208.174 77.92 202.67 72.16 196.014 72.16C191.854 72.16 189.23 73.888 187.438 76.576V53.792H178.798V100H187.438L187.246 96.032C188.782 98.912 191.662 100.576 195.822 100.576ZM193.326 93.024C189.614 93.024 187.182 90.592 187.182 86.304C187.182 82.272 189.614 79.776 193.326 79.776C196.974 79.776 199.278 82.272 199.278 86.304C199.278 90.592 196.974 93.024 193.326 93.024ZM218.72 68.192C221.664 68.192 224.16 65.952 224.16 62.752C224.16 59.616 221.664 57.376 218.72 57.376C215.776 57.376 213.216 59.616 213.216 62.752C213.216 65.952 215.776 68.192 218.72 68.192ZM214.368 100H223.008V72.736H214.368V100ZM242.207 100.704C246.175 100.704 248.479 99.296 249.823 98.208L246.559 92.192C245.983 92.576 244.959 93.344 243.551 93.344C242.207 93.344 241.311 92.768 241.311 90.016V79.904H248.287V72.736H241.311V58.528H232.735V72.736H228.703V79.904H232.735V89.76C232.735 97.952 236.703 100.704 242.207 100.704ZM271.237 83.808H264.901C258.181 83.808 253.765 86.176 253.765 92C253.765 98.336 258.373 100.576 263.365 100.576C267.013 100.576 269.381 99.36 271.429 96.224L271.237 100H279.813V84.512C279.813 75.936 274.501 72.16 267.525 72.16C261.125 72.16 258.245 74.144 255.685 76.64L260.485 81.76C261.701 80.672 263.429 79.264 266.693 79.264C269.573 79.264 271.109 80.672 271.237 83.808ZM271.237 88.928V90.016C271.237 92.32 269.445 93.856 265.925 93.856C263.493 93.856 262.213 92.96 262.213 91.424C262.213 89.888 263.173 88.928 265.349 88.928H271.237ZM298.207 100.704C302.175 100.704 304.479 99.296 305.823 98.208L302.559 92.192C301.983 92.576 300.959 93.344 299.551 93.344C298.207 93.344 297.311 92.768 297.311 90.016V79.904H304.287V72.736H297.311V58.528H288.735V72.736H284.703V79.904H288.735V89.76C288.735 97.952 292.703 100.704 298.207 100.704ZM314.908 68.192C317.852 68.192 320.348 65.952 320.348 62.752C320.348 59.616 317.852 57.376 314.908 57.376C311.964 57.376 309.404 59.616 309.404 62.752C309.404 65.952 311.964 68.192 314.908 68.192ZM310.556 100H319.196V72.736H310.556V100ZM329.434 100H338.074V79.904H345.434V72.736H338.074V63.456C338.074 61.472 339.034 60.704 340.442 60.704C341.786 60.704 342.554 61.408 343.194 62.176L347.866 56.416C345.882 54.112 343.322 52.96 339.482 52.96C332.762 52.96 329.434 56.544 329.434 63.584V72.736H324.89V79.904H329.434V100ZM355.344 88.928C358.224 88.928 360.72 86.688 360.72 83.488C360.72 80.352 358.224 78.112 355.344 78.112C352.4 78.112 349.904 80.352 349.904 83.488C349.904 86.688 352.4 88.928 355.344 88.928ZM377.391 100.576H378.223L392.815 72.736H384.047L380.335 80.864C379.119 83.616 378.223 88.096 378.223 88.096C378.223 88.096 377.263 83.616 375.983 80.864L372.143 72.736H362.607L377.391 100.576ZM403.045 88.992H423.717C424.357 79.456 419.045 72.16 409.253 72.16C400.805 72.16 394.213 78.048 394.213 86.304C394.213 94.688 400.485 100.576 410.213 100.576C415.909 100.576 419.237 98.848 421.861 96.544L416.933 91.232C415.589 92.192 413.221 93.408 410.085 93.408C406.181 93.408 403.877 91.808 403.045 88.992ZM402.917 84C403.621 80.736 405.925 79.2 409.317 79.2C412.709 79.2 414.629 80.992 415.013 84H402.917ZM432.542 85.216H440.606V81.44C447.646 80.416 451.486 75.808 451.486 68.96C451.486 62.24 446.43 55.904 437.278 55.904C430.558 55.904 425.886 58.656 423.582 63.712L430.494 67.744C432.03 65.184 433.758 63.584 437.278 63.584C440.606 63.584 442.654 66.272 442.654 68.96C442.654 72.16 440.734 75.04 435.486 75.04H432.542V85.216ZM436.51 100.384C439.39 100.384 441.886 98.144 441.886 94.944C441.886 91.808 439.39 89.568 436.51 89.568C433.566 89.568 431.07 91.808 431.07 94.944C431.07 98.144 433.566 100.384 436.51 100.384Z" fill="white"/>
            </svg>

            </Link>
        </div>
      </div>
  );
}

export default AboutMe;
