import { Link, useLocation } from "react-router-dom";
import queryString from 'query-string'
import courses from "../data/courses";

const Courses = () => {
    const location = useLocation()
    const query = queryString.parse(location.search)
    console.log(location);
    console.log(query);
  return (
    <>
      <h1>All Courses</h1>
      {courses.map((course) => (
        <div key={course.id}>
          <Link to={course.slug} className="courseLink">{course.title}</Link>
        </div>
      ))}
    </>
  );
};

export default Courses;
