import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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
import Layout from "./components/Layout";
import Careerpath from "./components/Careerpath";
import CPLayout from "./components/CareerPathFolder/CareerPathLayout";
import Info from "./components/CareerPathFolder/Info";
import AddTimeline from "./components/CareerPathFolder/AddTimeline";
import Html from "./components/CareerPathFolder/Html";
import Viewtimeline from "./components/CareerPathFolder/Viewtimeline";
import Quiz from "./components/CoursesFolder/Quiz";
import Course from "./components/Courses";
import CourseLayout from "./components/CoursesFolder/CourseLayout"
import CourseInfo from "./components/CoursesFolder/CourseInfo";
import CourseBanner from "./components/CoursesFolder/Banner";
import CourseSetting from "./components/CoursesFolder/CourseSetting";
import AddProject from "./components/CoursesFolder/AddProject";
import AttachAssessment from "./components/CoursesFolder/AttachAssessment";
import CourseStructure from "./components/CoursesFolder/CourseStructure";
import Introduction from "./components/CoursesFolder/Introduction";
import Analytics from "./components/Analytics";
import Users from "./components/CoursesFolder/Users";
import Video from "./components/CoursesFolder/Video";
import Test from "./components/CoursesFolder/Test";
import Text from "./components/CoursesFolder/Text";
import PracticeText from "./components/CoursesFolder/PracticeText";
import CourseTestimonial from "./components/CoursesFolder/CourseTestimonials"

function AppRoutes() { 
  return (
    <Router>
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
        <Route path="/createsnap" element={<Layout />}>
          <Route index element={<Navigate to="/createsnap/analytics" replace />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="career-path" element={<Careerpath />} />
          <Route path="course" element={<Course />} />
        </Route>
        <Route path="/createsnap/career-path/preview" element={<CPLayout />}>
          <Route index element={<Info />} />
          <Route path="info" element={<Info />} />
          <Route path="addtimeline" element={<AddTimeline />} />
          <Route path="viewtimeline" element={<Viewtimeline />} />
          <Route path="html" element={<Html />} />
        </Route>
        <Route path="/createsnap/course/started" element={<CourseLayout />}>
          <Route index element={<CourseInfo />} />
          <Route path="info" element={<CourseInfo />} />
          <Route path="users" element={<Users />} />
          <Route path="banner" element={<CourseBanner />} />
          <Route path="coursesetting" element={<CourseSetting />} />
          <Route path="addproject" element={<AddProject />} />
          <Route path="addassessment" element={<AttachAssessment />} />
          <Route path="coursestructure" element={<CourseStructure />} />
          <Route path="testimonial" element={<CourseTestimonial />} />
          <Route path="html/introduction" element={<Introduction />}>
            <Route path="quiz" element={<Quiz />} />
            <Route path="video" element={<Video />} />
            <Route path="test" element={<Test />} />
            <Route path="text" element={<Text />} />
            <Route path="practicetext" element={<PracticeText />} />
          </Route>
        </Route>
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
