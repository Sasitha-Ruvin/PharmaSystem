'use client';

import React, { useEffect, useState } from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Button, TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'contact', headerName: 'Contact', width: 150 },
  { field: 'address', headerName: 'Address', width: 150 },
  { field: 'role', headerName: 'Role', width: 150 },
  { field: 'dateJoined', headerName: 'Date Joined', width: 150 },
];

const Page = () => {
  const [rows, setRows] = useState<GridRowsProp>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        const formattedData = data.map((user: any) => ({
          id: user.id,
          name: user.name,
          contact: user.contact || '',
          address: user.address,
          role: user.role,
          dateJoined: user.dateJoined ? new Date(user.dateJoined).toLocaleDateString() : '',
        }));
        setRows(formattedData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);


  const handleLogout = () => {
    sessionStorage.removeItem("role"); 
    router.push("/login"); // Redirect to the login page
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-[#20252C] text-white w-1/4 p-6">
        <div className="flex items-center mb-6">
          <div className="mr-4">
           
          </div>
          <div>
            <h3 className="text-xl font-bold">John Doe</h3>
            <p className="text-sm text-[#FCD43B]">HR Manager</p>
          </div>
        </div>

        {/* Navigation */}
        <ul>
          <li className="mb-4">
            <a href="#" className="flex items-center p-2 text-lg bg-[#1DBF73] rounded-md">
              <span>Dashboard</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center p-2 text-lg">
              <span >Manage Employees</span>
            </a>
          </li>
            <Button className="flex items-center p-2 text-lg bg-red-400 text-white" onClick={handleLogout}>
                Log Out
            </Button>
       
        </ul>
      </div>

      {/* Main Content */}
      <div className="bg-[#F7F8FA] flex-1 p-8">
        {/* Header */}
        <h2 className="text-2xl font-bold mb-2 text-black">Manage Employees</h2>
        <p className="text-gray-500 mb-6">Detailed view of Employees</p>

        {/* Search and Add Employee */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center bg-white border rounded-md p-2 shadow-sm">
            <IconButton>
              <SearchIcon />
            </IconButton>
            <TextField 
              placeholder="Search for Employee" 
              variant="standard" 
              InputProps={{ disableUnderline: true }} 
            />
          </div>
          <Link href={'/users/create'}>
            <Button variant="contained" color="error" style={{ backgroundColor: '#F44336' }}>
              + Add Employee
            </Button>
          </Link>
        </div>

        {/* DataGrid */}
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid rows={rows} columns={columns} />
        </div>

        {/* Delete Button */}
        <div className="mt-4">
          <Button variant="outlined" color="error" style={{ color: '#F44336', borderColor: '#F44336' }}>
            Delete Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
