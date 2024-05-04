import { ReactElement } from 'react';

type initResearchAreaType = {
  id : string,
  name : string,
  description? : ReactElement
};
export default class ResearchAreaModel {
  id : string;
  name : string;
  description?: ReactElement;

  constructor(initResearchArea : initResearchAreaType){
    this.id = initResearchArea.id;
    this.name = initResearchArea.name;
    this.description = initResearchArea.description;
  }
}