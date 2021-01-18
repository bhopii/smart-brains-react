import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  let boxStyle = {
    inset: `${box.topRow}% ${box.rightCol}% ${box.bottomRow}% ${box.leftCol}%`,
  };
  console.log(boxStyle);
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          id="inputImage"
          alt=""
          src={imageUrl}
          width="500px"
          height="auto"
        />
        <div className="bounding-box" style={boxStyle}></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
