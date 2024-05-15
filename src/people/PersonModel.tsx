import { ReactElement } from 'react';

export type PersonCategoryType = "faculty" | "advisor" | "student" | "alumni";
type initPersonType = {
  affiliations: string[],
  enable?: boolean,
  category: PersonCategoryType,
  name: string,
  id: string,
  activeTill?: Date,
  homepage?: boolean
}
class Person {
  id: string;
  enable: boolean;
  category: PersonCategoryType;
  name: string;
  affiliations: string[];
  activeTill?: Date;
  homepage: boolean = false;

  constructor( initPerson : initPersonType) {
    this.id = initPerson.id;
    this.enable = initPerson.enable || true;
    this.category = initPerson.category;
    this.name = initPerson.name;
    this.affiliations = initPerson.affiliations;
    this.activeTill = initPerson.activeTill;
    this.homepage= initPerson.homepage || false;
  }

  imageUrl() {
    return `/images/people/${this.id}.jpg`;
  }

  primaryAffiliation() {
    return this.affiliations[0] || '';
  }
}

type initPersonUrlType = initPersonType & {
  url: string
};
class PersonUrl extends Person{
  url: string;
  
  constructor( initPerson : initPersonUrlType ) {
    super(initPerson);
    this.url = initPerson.url;
  }
}

type initPersonPageType = initPersonType & {
  address?: string;
  email?: string;
  phone_number?: string;
  description?: ReactElement;
  orcid_id?: string;
};
class PersonLocal extends Person {
  address?: string;
  email?: string;
  phone_number?: string;
  orcid_id?: string;
  description?: ReactElement;

  constructor( initPerson : initPersonPageType ) {
    super(initPerson);
    this.address = initPerson.address;
    this.email = initPerson.email;
    this.phone_number = initPerson.phone_number;
    this.description = initPerson.description;
    this.orcid_id = initPerson.orcid_id;
  }
}

export {Person, PersonLocal, PersonUrl};