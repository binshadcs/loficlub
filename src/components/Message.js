import React from "react";

// prop types
import PropTypes from "prop-types";

// for formatting date
import { formatRelative } from "date-fns";

const formatDate = (date) => {
  let formattedDate = "";
  if (date) {
    // Convert the date in words relative to the current date
    formattedDate = formatRelative(date, new Date());
    // Uppercase the first letter
    formattedDate =
      formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  }
  return formattedDate;
};

const Message = ({ createdAt, text, displayName, photoURL }) => {
  if (!text) return null;

  return (
    <div className="relative p-3 flex items-center justify-start bg-gradient-to-l from-[#000] to-[#11111198] border border-[#4CD2D690] rounded-md mt-2 w-full animate__animated animate__fadeIn">
      {photoURL && (
        <img
          src={photoURL}
          alt="Avatar"
          className="rounded-md mr-4"
          width={45}
          height={45}
        />
      )}
      <div className="flex flex-col">
        <div className="flex items-center">
          {displayName && (
            <p className="mr-2 text-gray-300 text-sm lg:text-md font-light">
              {displayName}
            </p>
          )}
          {createdAt?.seconds && (
            <span className="text-gray-500 text-xs">
              {formatDate(new Date(createdAt.seconds * 1000))}
            </span>
          )}
        </div>
        <p className="text-md lg:text-lg">{text}</p>
      </div>
    </div>
  );
};

// setting up proptypes
Message.propTypes = {
  text: PropTypes.string,
  createdAt: PropTypes.shape({
    seconds: PropTypes.number,
  }),
  displayName: PropTypes.string,
  photoURL: PropTypes.string,
};

export default Message;
