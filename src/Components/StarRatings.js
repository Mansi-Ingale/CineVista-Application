import { useState } from "react";
import Star from "./Star";
import PropTypes from "prop-types";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyle = {
  display: " flex",
  //   gap: "4px",
};

StarRatings.PropType = {
  maxRatings: PropTypes.number,
  defaultRatings: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.number,
  messages: PropTypes.array,
  // onSetRatings: PropTypes.func,
};

function StarRatings({
  maxRatings = 5,
  color = "#fcc419",
  size = 50,
  messages = [],
  defaultRatings = 0,
  onSetRatings,
}) {
  const [ratings, setRatings] = useState(defaultRatings);
  const [tempRatings, setTempRatings] = useState(0);

  function handleRatings(ratings) {
    setRatings(ratings);
    onSetRatings(ratings);
  }

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    forntSize: `${size}px`,
  };

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRatings }, (_, i) => (
          <Star
            key={i}
            full={tempRatings ? tempRatings >= i + 1 : ratings >= i + 1}
            onRate={() => handleRatings(i + 1)}
            onHoverIn={() => {
              setTempRatings(i + 1);
            }}
            onHoverOut={() => {
              setTempRatings(0);
            }}
            size={size}
            color={color}
          />
        ))}
      </div>

      <p style={textStyle}>
        {messages.length === maxRatings
          ? messages[tempRatings ? tempRatings - 1 : ratings - 1]
          : tempRatings || ratings || ""}
      </p>
    </div>
  );
}

export default StarRatings;
