import {Person, PersonLocal, PersonUrl} from './PersonModel';
import React from 'react';

const peopleList : Person[] = [
  new PersonUrl({
    id: 'ayyub',
    category: "faculty",
    name: "Dr. Ayyub Bilal",
    url: "https://cee.umd.edu/clark/faculty/243/Bilal-M-Ayyub",
    affiliations: [
      'Lead Researcher, Center for Technology and Systems Management',
      'Professor, University of Maryland'
    ]
  }),
  new PersonLocal({
    id: "walker",
    category: "faculty",
    name: "Dr. Dan Walker",
    affiliations: [
      "Co-Chair, ASCE-NOAA Task Force on Climate Adaptation of Engineering Practice",
      "Chair, ASCE Committee on Climate Intelligence for Codes and Standards",
      "Member, American Meteorological Society",
      "Member, American Geophysical Union",
      "Member, ASTM International",
      "Member, Geological Society of America"
    ],
    description: <p>
      Dan Walker is a Senior Geologist with EA Engineering,Science, and Technology, Inc. (PBC)
      and also serves as the Associate Director of the Center for Technology and Systems Management
      within the U. of Maryland's Department of Civil and Environmental Engineering. With a PhD degree
      in geology from the University of Tennessee, Dr. Walker has been involved with strategic planning
      and management of state and federal science for nearly 30 years. During an eleven-year tenure,
      Dr. Walker directed 19 National Academy studies over a range of topics from coastal and ocean science,
      water resource management, oil spill impacts and response, to the national security implications of
      environmental and climate information, eventually being named a National Academies' Scholar in 2006.
    </p>,
    email: "dwalker8@umd.edu"
  }),
  new PersonUrl({
    id: 'pantelous',
    category: 'faculty',
    name: 'Dr. Athanasios Pantelous',
    affiliations: [
      'Associate Professor, Department of Econometrics and Business Statistics, Monash University, Australia'
    ],
    url: 'https://research.monash.edu/en/persons/athanasios-pantelous'
  }),
  new PersonLocal({
    id: 'chan',
    category: 'student',
    name: 'Mr. Nathan Chan',
    affiliations: [
      'Graduate Student, Institute of Systems Engineering, University of Maryland'
    ],

  })
];

export default peopleList;