import React, { Suspense } from "react";

// ** Router Import
import Router from "./router/Router";

const App = () => {
  // useEffect(async() => {
  //   if(localStorage.getItem("accessToken")){
  //   const res = await Api.get("user-permission");
  //   localStorage.setItem("permissions", JSON.stringify(res?.data));
  //   }
  // }, [])
  return (
    <Suspense fallback={null}>
      <Router />
    </Suspense>
  );
};

export default App;
