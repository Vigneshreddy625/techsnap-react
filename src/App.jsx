import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard"; 
import Careerpath from "./components/Careerpath";
import PreviewLayout from "./components/PreviewLayout";
import Info from "./components/Info";
import AddTimeline from "./components/AddTimeline";
import Html from "./components/Html";
import Viewtimeline from "./components/Viewtimeline";
import Quiz from "./components/Quiz";
import Courses from "./components/Courses";
import ManageLayout from "./components/ManageLayout";
import ManageInfo from "./components/ManageInfo";
import ManageBanner from "./components/ManageBBanner";
import ManageCourseSetting from "./components/ManageCourseSetting";
import ManageAddProject from "./components/ManageAddProject";
import ManageAttachAssessment from "./components/ManageAttachAssessment";
import ManageCourseStructure from "./components/ManageCourseStructure";
import Introduction from "./components/Introduction";
import Analytics from "./components/Analytics";
import Users from "./components/Users";
import Video from "./components/Video";
import Test from "./components/Test";
import Text from "./components/Text";
import PracticeText from "./components/PracticeText";
import ManageTestimonial from "./components/ManageTestimonials"

function AppRoutes() { 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/analytics" replace />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="career-path" element={<Careerpath />} />
          <Route path="course" element={<Courses />} />
        </Route>
        <Route path="/career-path/preview" element={<PreviewLayout />}>
          <Route index element={<Info />} />
          <Route path="info" element={<Info />} />
          <Route path="addtimeline" element={<AddTimeline />} />
          <Route path="viewtimeline" element={<Viewtimeline />} />
          <Route path="html" element={<Html />} />
        </Route>
        <Route path="/course/started" element={<ManageLayout />}>
          <Route index element={<ManageInfo />} />
          <Route path="info" element={<ManageInfo />} />
          <Route path="users" element={<Users />} />
          <Route path="banner" element={<ManageBanner />} />
          <Route path="coursesetting" element={<ManageCourseSetting />} />
          <Route path="addproject" element={<ManageAddProject />} />
          <Route path="addassessment" element={<ManageAttachAssessment />} />
          <Route path="coursestructure" element={<ManageCourseStructure />} />
          <Route path="testimonial" element={<ManageTestimonial/>}/>
          <Route path="html/introduction" element={<Introduction />} />
          <Route path="html/introduction/quiz" element={<Quiz />} />
          <Route path="html/introduction/video" element={<Video />} />
          <Route path="html/introduction/test" element={<Test />} />
          <Route path="html/introduction/text" element={<Text />} />
          <Route path="html/introduction/practicetext" element={<PracticeText />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
