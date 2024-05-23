import { SponsorModel } from "./ProjectModel";

const sponsors = {
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
  }),
  usarmyeng: new SponsorModel({
    id: 'usace',
    name: 'U.S. Army Corps of Engineers',
    url: 'https://www.usace.army.mil/'
  }),
  fda: new SponsorModel({
    id: 'fda',
    name: 'U.S. Food and Drug Administration',
    url: 'https://www.fda.gov/'
  }),
  uscg: new SponsorModel({
    id: 'uscg',
    name: 'U.S. Coast Guard',
    url: 'https://www.uscg.mil/'
  }),
  dhs: new SponsorModel({
    id: 'dhs',
    name: 'U.S. Department of Homeland Security',
    url: 'https://www.dhs.gov/'
  }),
  afrl: new SponsorModel({
    id: 'afrl',
    name: 'US Air Force Research Laboratory',
    url: 'https://www.afrl.af.mil/'
  }),
  nsf: new SponsorModel({
    id: 'nsf',
    name: 'U.S. National Science Foundation',
    url: 'https://nsf.gov'
  }),
  
};
export default sponsors;
export const sponsorList : SponsorModel[] = Object.values(sponsors);
