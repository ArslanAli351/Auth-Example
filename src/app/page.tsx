"use client";

import { useState } from "react";
import Login from "./login";
import UserTimeline from "@/user-timeline";






export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<userDataType | null>(null);
  return (
    <>
      {isAuthenticated ? (
        <UserTimeline 
        user={user} />
      ) : (

        <Login
          authenticate={setIsAuthenticated}
          User={setUser}
        />
      )
      }
    </>
  )

}