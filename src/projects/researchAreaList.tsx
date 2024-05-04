import ResearchAreaModel from "./ResearchAreaModel"

const researchAreas = {
  riskstudies: new ResearchAreaModel({
    id: 'riskstudies',
    name: 'Risk Studies'
  }),
  reliability: new ResearchAreaModel({
    id: 'reliability',
    name: 'Reliability Analysis'
  }),
  uncertainty: new ResearchAreaModel({
    id: 'uncertainty',
    name: 'Uncertainty Modeling'
  }),
  intelligent: new ResearchAreaModel({
    id: 'intelligent',
    name: 'Intelligent Systems'
  }),
  climate: new ResearchAreaModel({
    id: 'climate',
    name: 'Climate Change'
  }),
  railways: new ResearchAreaModel({
    id: 'railways',
    name: "Railway Networks"
  })
}

export const researchAreasList = Object.values(researchAreas);


export default researchAreas;