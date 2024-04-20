import React from "react";
import ProjectModel, { ProjectPageModel, ProjectUrlModel, SponsorModel } from "./ProjectModel";

import Crepi2Description from './projectPages/crepi2';

export const sponsors = {
  asce: new SponsorModel({
    id: 'asce',
    name: 'American Society of Civil Engineers',
    url: 'https://asce.org'
  }),
  noaa: new SponsorModel({
    id: 'noaa',
    name: 'National Oceanic and Atmospheric Administration',
    url: 'https://noaa.gov'
  }),
  nistapo: new SponsorModel({
    id: 'nistapo',
    name: 'Applied Economics Office, National Institute of Standards and Technology',
    url: 'https://www.nist.gov/el/applied-economics-office'
  }),
  fra: new SponsorModel({
    id: 'fra',
    name: 'Federal Railroad Administration',
    url: 'https://railroads.dot.gov/'
  }),
  qatarnrf: new SponsorModel({
    id: 'qatarnrf',
    name: 'Qatar National Research Fund',
    url: 'https://qrdi.org.qa/'
  }),
  oesi: new SponsorModel({
    id: 'oesi',
    name: 'Ocean Energy Safety Institute',
    url: 'https://oesi.tamu.edu/'
  })
};

export const sponsorList : SponsorModel[] = Object.values(sponsors);

const projectList : ProjectModel[] = [
  new ProjectPageModel({
    id: 'crepi2',
    name: 'Climate Resilience in Engineering Practice for Infrastructure, ASCE-NOAA Task Force and Workshops',
    sponsors: [sponsors.noaa, sponsors.asce],
    fromYear: 2023,
    toYear: 2025,
    description: <Crepi2Description/>
  }),
  new ProjectModel({
    id: 'crepi1',
    active: false,
    name: 'Climate Resilience in Engineering Practice for Infrastructure',
    sponsor: sponsors.noaa,
    fromYear: 2021,
    toYear: 2023
  }),
  new ProjectModel({
    id: 'cra',
    name: 'Climate Risks and Adaptation',
    sponsor: sponsors.noaa,
    fromYear: 2023,
    toYear: 2028
  }),
  new ProjectModel({
    id: 'itcern',
    name: 'Improved Topology Connectedness Efficiency for Railroad Networks',
    sponsor: sponsors.fra,
    fromYear: 2023,
    toYear: 2026
  }),
  new ProjectModel({
    id: 'resolve',
    name: 'Resilient Solutions for Vulnerabilities and Emergencies (ReSolVE): An Effective National Risk Management Plan for Qatar',
    sponsor: sponsors.qatarnrf,
    fromYear: 2022,
    toYear: 2028
  }),
  new ProjectModel({
    id: 'oesi2',
    name: 'Ocean Energy Safety Institute 2.0',
    sponsor: sponsors.oesi,
    fromYear: 2021,
    toYear: 2026
  }),

  // new ProjectUrlModel({
  //   id: 'icn',
  //   name: 'Infrastructure-Climate Networks',
  //   description: <React.Fragment>
  //     The Infrastructure-Climate Networks (ICN) is an initiative to develop and provide analysis methods and tools
  //     of infrastructure networks for performance, reliability, resilience, risk and economics subjects.
  //   </React.Fragment>,
  //   url: 'https://www.infrastructureclimate.net/'
  // })
];

export default projectList;