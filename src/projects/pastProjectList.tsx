import ProjectModel, { ProjectPageModel } from "./ProjectModel";
import CarpaDescription from "./projectPages/carpa";
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
    new ProjectModel({
      id: 'usaceDamRisk',
      name: 'Risk analysis of dams and protected hurricane-prone regions',
      sponsors: [sponsors.usarmyeng],
      researchAreas: [researchAreas.riskstudies]
    }),
    new ProjectModel({
      id: 'usaceFloodDamage',
      name: 'Flood damage assessment (residential, commercial, coastal, expert opinion elicitation)',
      sponsors: [sponsors.usarmyeng],
      researchAreas: [researchAreas.riskstudies]
    }),
    new ProjectModel({
      id: 'usaceFloodImpacts',
      name: 'Flood impacts on cities and recovery',
      sponsors: [sponsors.usarmyeng],
      researchAreas: [researchAreas.riskstudies]
    }),
    new ProjectModel({
      id: 'fdaDrugDelivery',
      name: 'Risk analysis of drug delivery systems',
      sponsors: [sponsors.fda],
      researchAreas: [researchAreas.riskstudies]
    }),
    new ProjectModel({
      id: 'uscgLife',
      name: 'Life expectancy analysis and asset management',
      sponsors: [sponsors.uscg],
      researchAreas: [researchAreas.riskstudies]
    }),
    new ProjectModel({
      id: 'uscgElec',
      name: 'Electric induced drowning',
      sponsors: [sponsors.uscg],
      researchAreas: [researchAreas.riskstudies]
    }),
    new ProjectModel({
      id: 'uscgPfd',
      name: 'Approval of personal flotation devices',
      sponsors: [sponsors.uscg],
      researchAreas: [researchAreas.riskstudies]
    }),
    new ProjectPageModel({
      id: 'carpa',
      name: 'Critical Asset & Portfolio Risk Analysis (CAPRA)',
      sponsors: [sponsors.dhs],
      researchAreas: [researchAreas.riskstudies],
      description: <CarpaDescription/>
    }),
    new ProjectModel({
      id: 'afrlIgnorance',
      name: 'Ignorance analysis for knowledge construction',
      sponsors: [sponsors.afrl],
      researchAreas: [researchAreas.uncertainty]
    }),
    new ProjectModel({
      id: 'afrlUncertainty',
      name: 'Uncertainty symbols & quantification',
      sponsors: [sponsors.afrl],
      researchAreas: [researchAreas.uncertainty]
    }),
    // new ProjectModel({
    //   id: 'nsf',
    //   name: 'Uncertainty symbols & quantification',
    //   sponsors: [sponsors.afrl],
    //   researchAreas: [researchAreas.uncertainty]
    // })
  ];
}