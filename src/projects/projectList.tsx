import React from "react";
import ProjectModel, { ProjectUrlModel } from "./ProjectModel";

const projectList : ProjectModel[] = [
  new ProjectUrlModel({
    id: 'icn',
    name: 'Infrastructure-Climate Networks',
    description: <React.Fragment>
      The Infrastructure-Climate Networks (ICN) is an initiative to develop and provide analysis methods and tools
      of infrastructure networks for performance, reliability, resilience, risk and economics subjected
    </React.Fragment>,
    url: 'https://www.infrastructureclimate.net/'
  })
];

export default projectList;