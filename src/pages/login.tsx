// // pages/login.tsx
// import { useState } from "react";
// import { useRouter } from "next/router";
//
// const Login = () => {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const response = await fetch("/api/auth/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email, password }),
//     });
//
//     const data = await response.json();
//
//     if (response.ok) {
//       localStorage.setItem("token", data.token); // Store the token in local storage
//       router.push("/dashboard"); // Redirect to the dashboard
//     } else {
//       alert(data.message);
//     }
//   };
//
//   return (
//     <div className="container mx-auto">
//       <h1 className="text-3xl font-bold">Login</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="border p-2 rounded"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="border p-2 rounded"
//         />
//         <button type="submit" className="bg-blue-500 text-white p-2 rounded">Login</button>
//       </form>
//     </div>
//   );
// };
//
// export default Login;
