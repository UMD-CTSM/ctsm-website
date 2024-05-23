import ProjectModel from "./ProjectModel";
import researchAreas from "./researchAreaList";
import sponsors from "./sponsorList";
export default function pastProjectList (){
  return [
    new ProjectModel({
      id: 'nistRisk',
      name: 'Risk aversion and community resilience',
      sponsors: [sponsors.nistapo],
      researchAreas: [researchAreas.riskstudies]
    }),
    new ProjectModel({
      id: 'nistFunctional',
      name: 'Functional modeling and seismic resilience',
      sponsors: [sponsors.nistapo],
      researchAreas: [researchAreas.riskstudies]
    }),
    new ProjectModel({
      id: 'nistWildfire',
      name: 'Wildfire risk',
      sponsors: [sponsors.nistapo],
      researchAreas: [researchAreas.riskstudies]
    }),
    new ProjectModel({
      id: 'nistSustainability',
      name: 'Sustainability economics',
      sponsors: [sponsors.nistapo],
      researchAreas: [researchAreas.riskstudies]
    }),
  ];
}