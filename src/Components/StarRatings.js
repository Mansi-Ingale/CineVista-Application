import { useState } from "react";
import Star from "./Star";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyle = {
  display: " flex",
  //   gap: "4px",
};

const textStyle = {
  lineHeight: "1",
  margin: "0",
};

function StarRatings({ maxRatings = 5 }) {
  const [ratings, setRatings] = useState(0);
  const [tempRatings, setTempRatings] = useState(0);

  function handleRatings(ratings) {
    setRatings(ratings);
  }
  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRatings }, (_, i) => (
          <Star
            key={i}
            full={tempRatings ? tempRatings >= i+1 : ratings >= i + 1}
            onRate={() => handleRatings(i + 1)}
            onHoverIn={() => {
              setTempRatings(i + 1);
            }}
            onHoverOut={() => {
              setTempRatings(0);
            }}
          />
        ))}
      </div>

      <p style={textStyle}>{tempRatings || ratings || ""}</p>
    </div>
  );
}

export default StarRatings;
