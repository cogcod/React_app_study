// import React, { useEffect, useState } from "react";
// import Header from "../layout/Header";
// import Footer from "../layout/Footer";
// import Contents from "../layout/Contents";
// import YoutubeCont from "../includes/YoutubeCont";
// import Title from "../layout/Title";
// import Touch from "../layout/Touch";

// function Youtube() {
//   // 리액트 훅
//   const [videos, setVideos] = useState([]);

//   // 데이터 자동으로 바뀌게
//   useEffect(() => {
//     const requestOptions = {
//       method: "GET",
//       redirect: "follow",
//     };

//     fetch(
//       "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=React&key=AIzaSyDLgsuoY1CwJn22GRRwQCQlolPq-Z_EONs&",
//       requestOptions
//     )
//       .then((response) => response.json())
//       .then((result) => console.log(result))
//       .catch((error) => console.log("error", error));
//   }, []);

//   return (
//     <>
//       <Header />
//       <Contents>
//         <Title title={["Youtube", "search"]} />
//         <YoutubeCont />
//         <Touch />
//       </Contents>
//       <Footer />
//     </>
//   );
// }

// export default Youtube;
