import{r as n,u as m,a as d,j as a}from"./index-ve7yGggY.js";import{a as r}from"./axiosInstance-BLLi8iuW.js";import{l as g}from"./authSlice-CgVLuQqs.js";const v=()=>{const[e,i]=n.useState(""),[s,p]=n.useState(""),u=m(),c=d(),l=async t=>{t.preventDefault();try{await r.post("/auth/login",{username:e,password:s});const o=await r.post("/api/auth/login",{username:e,password:s});u(g(o.data)),c("/admin")}catch(o){console.error("Login failed",o)}};return a.jsxs("form",{onSubmit:l,children:[a.jsx("input",{type:"text",value:e,onChange:t=>i(t.target.value),placeholder:"Username"}),a.jsx("input",{type:"password",value:s,onChange:t=>p(t.target.value),placeholder:"Password"}),a.jsx("button",{type:"submit",children:"Login"})]})};export{v as default};
