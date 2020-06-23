import React, { useState, useEffect } from "react";
import API from "../utils/API";


const empData = () => {
    const [developerState, setDeveloperState] = useState({
      users: [],
      order: "descend",
      filteredUsers: [],
      headings: [
        { name: "Image", width: "10%", order: "descend" },
        { name: "name", width: "10%", order: "descend" },
        { name: "phone", width: "10%", order: "descend" },
        { name: "email", width: "10%", order: "descend" }
      ]
    });

    const handleSort = heading => {
      let currentOrder = developerState.headings
        .filter(elem => elem.name === heading)
        .map(elem => elem.order)
        .toString();

        if (currentOrder === "descend") {
          currentOrder = "ascend";
        } else {
          currentOrder = "descend";
        }
}