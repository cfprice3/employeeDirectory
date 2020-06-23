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
}