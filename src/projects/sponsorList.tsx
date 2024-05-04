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
  })
};
export default sponsors;
export const sponsorList : SponsorModel[] = Object.values(sponsors);
