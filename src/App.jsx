import { Routes, Route } from "react-router-dom";
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import Dashboard from "./pages/dashboard/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import Projects from "./pages/project/Projects";
import Layout from "./components/common/Layout";
import PorjectDetails from "./pages/project/ProjectDetails"
import Profile from "./pages/profile/Profile";
import EditProfile from "./pages/profile/EditProfile";
import UserProfile from "./pages/profile/UserProfile";
import CreateProject from "./pages/project/CreateProject";
import SubmitProposal from "../pages/proposal/SubmitProposal";
import MyProposals from "../pages/proposal/MyProposals";
function App() {
   return (
        <Routes>

            <Route
    path="/users/:id"
    element={
        <ProtectedRoute>
            <Layout>
                <UserProfile/>
            </Layout>
        </ProtectedRoute>
    }
/>

                <Route
                  path="/projects/:id/proposal"
                    element={
                    <ProtectedRoute>
                <Layout>
              <SubmitProposal />
                </Layout>
                    </ProtectedRoute>
               }
                />

                  <Route path="/proposals" element={
                <ProtectedRoute>
                    <Layout>
                     <MyProposals/>
                    </Layout>
                    
                </ProtectedRoute>}
/> 

                <Route path="/projects/create" element={
                <ProtectedRoute>
                    <Layout>
                     <CreateProject/>
                    </Layout>
                    
                </ProtectedRoute>}
/> 

                   <Route path="/profile/editprofile" element={
                <ProtectedRoute>
                    <Layout>
                     <EditProfile/>
                    </Layout>
                    
                </ProtectedRoute>}
/> 
            <Route path="/dashboard"  element={
                <ProtectedRoute>
                    <Layout>
                     <Projects/>
                    </Layout>
                    
                </ProtectedRoute>}
/>             

        <Route path="/projects"  element={
                <ProtectedRoute>
                    <Layout>
                     <Projects/>
                    </Layout>
                    
                </ProtectedRoute>}
/>             
          <Route path="/profile" element={
                <ProtectedRoute>
                    <Layout>
                     <Profile/>
                    </Layout>
                    
                </ProtectedRoute>}
/> 
            <Route path="/projects/:id" element={
                <ProtectedRoute>
                     <PorjectDetails/>
                </ProtectedRoute>}
/>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
}

export default App