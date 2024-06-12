import ProjectModel, { ProjectPageModel } from "./ProjectModel";

import Crepi2Description from './projectPages/crepi2';
import sponsors from "./sponsorList";
import pastProjectList from "./pastProjectList";
import researchAreas from "./researchAreaList";

export default function projectList (){

  const pastProjects = pastProjectList().map(p => (p.ongoing = false, p));
  // projectList : ProjectModel[] 
  const activeProjects = [
    new ProjectPageModel({
      id: 'climate',
      name: 'ASCE-NOAA Task Force on Climate Resilience in Engineering Practice',
      sponsors: [sponsors.noaa, sponsors.asce],
      fromYear: 2021,
      // toYear: 2025,
      description: <Crepi2Description/>,
      researchAreas: [ researchAreas.climate]
    }),
    new ProjectModel({
      id: 'crepi1',
      name: 'Climate Resilience in Engineering Practice for Infrastructure',
      sponsor: sponsors.noaa,
      fromYear: 2021,
      toYear: 2023,
      researchAreas: [ researchAreas.climate]
    }),
    new ProjectModel({
      id: 'cra',
      name: 'Climate Risks and Adaptation',
      sponsor: sponsors.noaa,
      fromYear: 2023,
      toYear: 2028,
      researchAreas: [ researchAreas.climate, researchAreas.riskstudies]
    }),
    new ProjectModel({
      id: 'itcern',
      name: 'Improved Topology Connectedness Efficiency for Railroad Networks',
      sponsor: sponsors.fra,
      fromYear: 2023,
      toYear: 2026,
      researchAreas: [ researchAreas.railways ]
    }),
    new ProjectModel({
      id: 'resolve',
      name: 'Resilient Solutions for Vulnerabilities and Emergencies (ReSolVE): An Effective National Risk Management Plan for Qatar',
      sponsor: sponsors.qatarnrf,
      fromYear: 2022,
      toYear: 2028,
      researchAreas: [ researchAreas.riskstudies ]
    }),
    new ProjectModel({
      id: 'oesi2',
      name: 'Ocean Energy Safety Institute 2.0',
      sponsor: sponsors.oesi,
      fromYear: 2021,
      toYear: 2026,
      researchAreas: [ researchAreas.uncertainty ]
    })
  ];
  
  return activeProjects.concat(pastProjects);
};