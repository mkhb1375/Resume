import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function Spinner() {
  return (
    <div>
      <FontAwesomeIcon icon={faSpinner} spin size="2x" />
    </div>
  );
}
