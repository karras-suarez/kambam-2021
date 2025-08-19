import clouds from "../images/clouds.svg";
export const CloudsBackground = () => {
  return (
    <div>
      <img src={clouds} alt="clouds" className="clouds" />
      <img src={clouds} alt="clouds" className="clouds" />
    </div>
  );
};

export const CloudsBackgroundMob = () => {
  return (
    <div>
      <img src={clouds} alt="clouds" className="clouds" />
    </div>
  );
};
