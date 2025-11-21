import axios from 'axios';
const API = import.meta.env.VITE_API_URL;

export async function sendInvites({ teamId, emails }) {
  try {
    const token = sessionStorage.getItem("token");

    const res = await axios.post(
      `${API}/team/${teamId}/invite`,
      { emails },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    return res.data;
  } catch (err) {
    console.error("Error sending invites", err.response?.data?.message || err.message);
    throw err;
  }
}


// import axios from 'axios';
// export async function sendInvites({teamId,emails}){
//      try {
//         const token = sessionStorage.getItem("token");
        
//     const res = await axios.post(
//       `http://localhost:5001/api/team/${teamId}/invite`,
//       { emails }, // array of emails
//       {
//         headers: { Authorization: `Bearer ${token}` }
//       }
//     );

//     console.log("Invites sent response:", res.data);
//     return res.data;
//   } catch (err) {
//     console.error("Error sending invites", err.response?.data?.message || err.message);
//     throw err;
//   }
// }