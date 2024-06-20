// "use client";

// import { useEffect, useState } from "react";
// import "./page.module.css";
// import axios from "axios";
// import DataTable from "./_components/Table";

// interface ListData {
//   title: string;
//   createdAt: string;
//   statusType: string;
// }

// export default function Home() {
//   const [data, setData] = useState<ListData[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get<ListData[]>(
//           "https://todo-backend-dcwdog3ae-khulankhs-projects.vercel.app/api/graphql"
//         );
//         console.log(response);
//         setData(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <main>
//       <div className="main-container">
//         <DataTable data={data} setData={setData} />
//       </div>
//     </main>
//   );
// }

"use client";
import { useGetListQueryQuery } from "@/src/generated";
import React from "react";
import DataTable from "./_components/Table";

export default function Home() {
  return (
    <div
      style={{
        color: "black",
        fontSize: "24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "150px",
      }}
    >
      <h1 style={{ color: "#1876D1" }}>To-Do List</h1>
      <DataTable />
    </div>
  );
}
