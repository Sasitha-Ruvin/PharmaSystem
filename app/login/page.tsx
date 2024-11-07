'use client'

import { useState } from "react";
import { useRouter } from "next/navigation"; 
import axios from "axios";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";

export default function Login() {
  const [role, setRole] = useState<string>(""); // Explicitly set role to string
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/login", { role, email, password });
      if (response.status === 200) {
        const userRole = response.data.role;
        const userName = response.data.name;
        sessionStorage.setItem("role", response.data.role);
        sessionStorage.setItem("name", response.data.name); 
        if (userRole === "admin") {
          router.push("/dashboard"); // Admin's dashboard
        } else if (userRole === "HR") {
          router.push("/users/index"); // HR's page
        } else {
          router.push("/dashboard"); // Default route for other roles
        }
      }
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-md rounded-lg">
        <h2 className="text-center text-2xl font-semibold text-gray-700">Login</h2>
        
        <Dropdown>
          <DropdownTrigger>
            <button className="w-full p-2 border rounded text-black">
              {role ? role.charAt(0).toUpperCase() + role.slice(1) : "Select User Type"}
            </button>
          </DropdownTrigger>
          <DropdownMenu
            onAction={(key) => setRole(String(key))} // Cast key to string
          >
            <DropdownItem key="admin">Admin</DropdownItem>
            <DropdownItem key="inventory">Inventory</DropdownItem>
            <DropdownItem key="organizer">COO</DropdownItem>
            <DropdownItem key="HR">HR</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded text-black"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded text-black"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </div>
    </div>
  );
}
