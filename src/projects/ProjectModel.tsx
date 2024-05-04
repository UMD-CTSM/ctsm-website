import { Avatar } from '@mui/material';
import { ReactElement } from 'react';
import ResearchAreaModel from './ResearchAreaModel';

export type initSponsorType = {
  id : string,
  name : string,
  url: string
};

export class SponsorModel {
  id : string;
  name : string;
  url: string;

  imageUrl() {
    return `/images/sponsors/${this.id}.png`;
  }

  constructor(initSponsor : initSponsorType){
    this.id = initSponsor.id;
    this.name = initSponsor.name;
    this.url = initSponsor.url;
  }
}

export type initProjectType = {
  id : string,
  name : string,
  description?: ReactElement,
  ongoing?: boolean,
  fromYear?: number,
  toYear?: number | 'present',
  sponsor?: SponsorModel,
  sponsors?: SponsorModel[],
  researchAreas?: ResearchAreaModel[]
};

const THIS_YEAR = new Date().getFullYear();

export const sponsorLogoDisp = (s : SponsorModel) => <a href={s.url}>
  <Avatar aria-label="recipe" alt={s.name} title={s.name} src={s.imageUrl()} slotProps={{ img: { sx: {height: 'auto'}} }}/>
</a>

export default class ProjectModel {
  id : string;
  name : string;
  description?: ReactElement;
  ongoing?: boolean;
  fromYear?: number;
  toYear: number | 'present' = 'present';
  sponsors: SponsorModel[] = [];
  researchAreas: ResearchAreaModel[] = [];

  imageUrl() {
    return `/images/projects/${this.id}.jpg`;
  }

  yearDisp() {
    return (this.fromYear)?`${this.fromYear} - ${this.toYear}`:'';
  }

  constructor(initProject : initProjectType){
    this.id = initProject.id;
    this.name = initProject.name;
    this.description = initProject.description;
    this.fromYear = initProject.fromYear;
    if (initProject.toYear != undefined ) this.toYear = initProject.toYear;
    this.ongoing = (initProject.ongoing != undefined )? initProject.ongoing :
      (this.fromYear)?
        THIS_YEAR >= this.fromYear && (this.toYear == 'present' || THIS_YEAR <= this.toYear) :
        true;
    if ( initProject.sponsors ) {
      this.sponsors = initProject.sponsors;
    } else if ( initProject.sponsor ) {
      this.sponsors.push(initProject.sponsor);
    }
    if (initProject.researchAreas) this.researchAreas = initProject.researchAreas;
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


type initProjectPageType = initProjectType & {
  description: ReactElement
};

export class ProjectPageModel extends ProjectModel {
  description: ReactElement;

  constructor(initProject : initProjectPageType){
    super(initProject);
    this.description = initProject.description;
  }
}