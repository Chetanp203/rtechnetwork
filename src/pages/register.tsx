// // pages/register.tsx
// import { useState } from "react";
// import { useRouter } from "next/router";
//
// const Register = () => {
//   const router = useRouter();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//
//     const response = await fetch("/api/auth/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ name, email, password }),
//     });
//
//     if (response.ok) {
//       router.push("/login");
//     } else {
//       alert("Registration failed");
//     }
//   };
//
//   return (
//     <div className="container mx-auto">
//       <div className="flex items-center justify-between flex-col ">
//         <h1 className="text-3xl font-bold">Register</h1>
//         <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">
//           <input
//             type="text"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="border p-2 rounded"
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="border p-2 rounded"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="border p-2 rounded"
//           />
//           <button type="submit" className="bg-blue-500 text-white p-2 rounded">
//             Register
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };
//
// export default Register;
