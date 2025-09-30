import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  
  const title = location.state?.title || "";
  const section = location.state?.section || "";
  const pathSegments = ['acceuil', section, title].filter(Boolean);

  return (
    <nav className="text-sm flex items-center gap-1 text-gray-600 mb-5">
      {pathSegments.map((segment, index) => {
        const isLast = index === pathSegments.length - 1;
        // const path = "/" + pathSegments.slice(0, index + 1).join("/");
        const path = '/' + segment;

        // Capitalize first letter
        const name = segment.charAt(0).toUpperCase() + segment.slice(1);

        return (
          <React.Fragment key={index}>
            {!isLast ? (
              <Link to={path} className="hover:text-blue-600 font-medium"
              state={{ section }}
              >
                {name}
              </Link>
            ) : (
              <span className="text-gray-800 font-medium">{name}</span>
            )}
            {!isLast && <span className="mx-1">{'>'}</span>}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
