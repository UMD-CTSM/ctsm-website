import { ReactElement } from "react";

type initCourseType = {
  id : string;
  name : string;
  description? : ReactElement;
};


export default class CourseModel {
  id : string;
  name : string;
  description? : ReactElement;

  constructor(initCourse : initCourseType) {
    this.id = initCourse.id;
    this.name = initCourse.name;
    this.description = initCourse.description;
  }
}