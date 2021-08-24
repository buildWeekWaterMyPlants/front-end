import React from "react";
import image from "../imgs/02.jpg";

function Marketing(props) {
  return (
    <div className="body">
      <div className="hero-image">
        <div className="hero-content">
          <h2>Water, worry-free!</h2>
          <p>
            Sign up below to get consistent reminders to keep your plants happy
            and healthy...
          </p>
          <button>Sign up Today!</button>
        </div>
      </div>
      <div className="spacer"></div>
      <div className="IconRow">
        <div className="Icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 logo"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        </div>
        <div className="iconRowContent">
          <p className="rowContent">
            Simply add your plants, their names, and their watering frequency to
            start keeping track of your watering schedule
          </p>
        </div>
      </div>

      <div className="IconRow">
        <div className="Icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 logo"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
            />
          </svg>
        </div>
        <div className="iconRowContent">
          <p className="rowContent">
            Get phone notifications when your plants are thirsty and ready to be
            watered!
          </p>
        </div>
      </div>

      <div className="IconRow">
        <div className="Icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 logo"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
            />
          </svg>
        </div>
        <div className="iconRowContent">
          <p className="rowContent">
            Relax and enjoy the lucious foliage of your plants as all of your
            watering schedule needs are handled for you!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Marketing;
