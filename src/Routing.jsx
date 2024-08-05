import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./home/pages/dashboard";
import Navbar from "./home/component/navbar";
import Courses from "./home/pages/courses/courses";
import SignIn from "./home/pages/authentication/signin";
import SignUp from "./home/pages/authentication/signup";
import CareerPath from "./home/pages/careerPath/careerPath";
import Projects from "./home/pages/projects/projects";
import ProjectDetails from "./home/pages/projects/details";
import CareerDetails from "./home/pages/careerPath/details";
import CourseDetails from "./home/pages/courses/details";
import MyProgress from "./home/pages/myProgress/myprogress";
import MyFeed from "./home/pages/myFeed/myfeed";
import Topics from "./home/pages/topics/topics";
import Competitors from "./home/pages/competitors/competitors";
import LeaderBoard from "./home/pages/leaderboard/leaderboard";
import ForgotPassword from "./home/pages/authentication/forgotpass";
import LearnModule from "./home/pages/LearningModule/LearnModule";
import Assement from "./home/pages/assesment/assement";
import Catalog from "./home/pages/catalog/catalog";
import AssementDetails from "./home/pages/assesment/deatils";
import SkillPath from "./home/pages/skillPath/skillPath";
import SkillPathDetails from "./home/pages/skillPath/detail";
import ProfilePage from "./home/pages/profile/firstProfile";
import SecondProfilePage from "./home/pages/profile/secondProfile";
const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route element={<Navbar />}>
          <Route index element={<MyProgress />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="myfeed" element={<MyFeed />} />
          <Route path="topics" element={<Topics />} />
          <Route path="competitions" element={<Competitors />} />
          <Route path="leaderboard" element={<LeaderBoard />} />
          <Route path="courses" element={<Courses />}>
            <Route path="details" element={<CourseDetails />} />
          </Route>
          <Route path="career" element={<CareerPath />}>
            <Route path="details" element={<CareerDetails />} />
          </Route>
          <Route path="skill" element={<SkillPath />}>
            <Route path="details" element={<SkillPathDetails />} />
          </Route>
          <Route path="projects" element={<Projects />}>
            <Route path="details" element={<ProjectDetails />} />
          </Route>
          <Route path="learningmodule" element={<LearnModule />} />
          <Route path="assessment" element={<Assement />}>
            <Route path="details" element={<AssementDetails />} />
          </Route>
          <Route path="catalog" element={<Catalog />} />
          <Route path="editprofile" element={<ProfilePage />} />
          <Route path="profile" element={<SecondProfilePage />} />
        </Route>
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
export default Routing;
