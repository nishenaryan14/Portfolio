import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Template({ project }) {
  const { id, url } = project;
  const navigate = useNavigate();
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
      onClick={() => navigate(`/project/${id}`)}
    >
      <img src={url} alt="" />
      {isViewDetails && <button>View Details</button>}
    </div>
  );
}
