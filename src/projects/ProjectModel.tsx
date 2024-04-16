import { ReactElement } from 'react';

type initProjectType = {
  id : string,
  name : string,
  description?: ReactElement
};

export default class ProjectModel {
  id : string;
  name : string;
  description?: ReactElement;

  imageUrl() {
    return `/images/projects/${this.id}.jpg`;
  }

  constructor(initProject : initProjectType){
    this.id = initProject.id;
    this.name = initProject.name;
    this.description = initProject.description;
  }
}
type initProjectUrlType = initProjectType & {
  url: string
};

export class ProjectUrlModel extends ProjectModel {
  url : string;

  constructor(initProject : initProjectUrlType){
    super(initProject);
    this.url = initProject.url;
  }
}