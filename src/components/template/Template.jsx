import { useEffect, useState } from "react";

export default function Template({ url }) {
  const [isViewDetails, setIsViewDetails] = useState(false);

  let hideButtonTimeout;

  const handleHover = () => {
    setIsViewDetails(true);
  };

  const handleMouseLeave = () => {
    setIsViewDetails(false);
  };

  return (
    <div
      className="template"
      onMouseOver={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <img src={url} alt="" />
      {isViewDetails && <button>View Details</button>}
    </div>
  );
}
