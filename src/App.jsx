import { useState } from 'react';

import './index.css';
import'./antdd.css';
import TestSideBar from './testsidebar'

import TextControlsExample from './newwebform'
import TableWithData from './bootstraptable';
import { Switch, Route, BrowserRouter,Routes } from "react-router-dom";
import { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {SmileOutlined,UploadOutlined,UserOutlined,VideoCameraOutlined} from '@ant-design/icons'

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

function Mybird(){
const user={
name:'Adithya',
Age:31

}
return user;
}

function App() {
  let v=Mybird()
  let a=1
 console.log(v);
 let x=v.name;
const [collapsed,Setcollapsed]=useState(true)
const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];

const collapy=()=>{
  if(collapsed)
  Setcollapsed(false)
   else
 Setcollapsed(true)

}
  return (
    
 
 <div class="flex">
 <div className={`${
          open ? "w-72" : "w-22"
        } h-auto bg-dark-purple p-4 reck pt-8  relative duration-300 overflow-visible`}>
   <img src={("./assets/arrowicon_Op.png")} className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full duration-200  ${open && "rotate-180"}`}  onClick={() => setOpen(!open)} />


<ul>
{Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-left gap-x-3 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={`/assets/${Menu.src}.png`} className={`origin-left`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
</ul>
</div>
      <div className="h-screen flex-1 p-7">
          <Header style={{ background: '#fff', padding: 0 }}>
            Employee
          </Header>
    <BrowserRouter>
      <Routes>
        <Route path="/Add" element={<TextControlsExample />} />
        <Route path="/edit/:empno/:counts" element={<TextControlsExample />} />
        <Route path="/test" element={<TestSideBar />} />
      </Routes>
    
    </BrowserRouter>
          </div>
    </div>
  
  );
}

export default App;

