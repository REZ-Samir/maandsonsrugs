import React from "react";

function RugDetail({details}:{details: String[]}) {
  

  return (
    <div className="my-5">
      <h4 className="text-base ">Details</h4>
      <ul className="list-disc pl-5 mt-3 space-y-1">
        {details.map((detail, index) => (
          <li key={index} className="text-sm text-gray-700">
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RugDetail;
