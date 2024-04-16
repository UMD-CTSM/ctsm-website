import { ReactElement } from 'react';

type initResearchAreaType = {
  id : string,
  name : string,
  description : ReactElement
};
export default class ResearchAreaModel {
  id : string;
  name : string;
  description?: ReactElement;

  constructor(initProject : initResearchAreaType){
    this.id = initProject.id;
    this.name = initProject.name;
    this.description = initProject.description;
  }
}