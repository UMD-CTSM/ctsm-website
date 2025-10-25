import { Box, Button, Typography } from '@mui/material';
import {Person, PersonLocal, PersonUrl} from './PersonModel';
import React from 'react';
import MElsibaiePage from './pages/melsibaie';
import RFinkensteinPage from './pages/rfinkenstein';


const peopleList : Person[] = [
  new PersonUrl({
    id: 'ayyub',
    category: "faculty",
    name: "Dr. Bilal Ayyub",
    url: "https://cee.umd.edu/clark/faculty/243/Bilal-M-Ayyub",
    affiliations: [
      'Professor and Director, Center for Technology and Systems Management',
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
    email: "dwalker8@umd.edu",
    homepage: true
  }),
  new PersonLocal({
    id: 'melsibaie',
    category: 'faculty',
    name: 'Dr. Magdy Elsibaie',
    affiliations: [
      'Former Associate Administrator for Hazardous Materials Safety for the US Department of Transportation'
    ],
    email: 'elsibaie@yahoo.com',
    phone_number: '+1 703 401-5331',
    description: <MElsibaiePage/>,
    homepage: true
  }),
  new PersonUrl({
    id: 'pourgol',
    category: 'faculty',
    name: 'Dr. Mohammad Pourgol',
    affiliations: [
      'Associate Professor, Mechanical Engineering, University of Maryland'
    ],
    url: 'https://enme.umd.edu/clark/faculty/1400/Mohammad-Pourgol/',
    homepage: true
  }),
  new PersonUrl({
    id: 'firebaugh',
    category: 'advisor',
    name: 'Dr. Millard Firebaugh',
    affiliations: [
      'Glenn L. Institute Professor of Engineering and Professor of Practice, Center for Engineering Concepts Development, University of Maryland'
    ],
    url: 'https://enme.umd.edu/clark/faculty/536/Millard-S-Firebaugh/',
    homepage: true
  }),
  new PersonLocal({
    id: 'moss',
    category: 'advisor',
    name: 'Dr. Richard Moss',
    affiliations: [
      'Senior Scientist at Pacific Northwest National Laboratory’s Joint Global Change Research Institute',
      'Adjunct Professor in the Department of Geographical Sciences at the University of Maryland, College Park'
    ],
    email: 'rhm@pnnl.gov',
    description: <Typography>
      Dr. Moss's research on global environmental change focuses on (1) scenarios (including the Representative
      Concentration Pathways (RCPs), (2) uncertainty characterization in integrated models and scientific assessments,
      and (3) methods for evaluating potential consequences of interacting societal and environmental changes. Moss
      has held several public service positions including Director of the US Global Change Research Program/Climate
      Change Science Program Office (spanning the Clinton and G.W. Bush Administrations) and technical support
      director for one of the working groups of the Intergovernmental Panel on Climate Change. Moss chairs the
      Federal Advisory Committee for the Sustained US National Climate Assessment and the National Academy of Science’s
      Board on Environmental Change and Society. He is a fellow of the American Society for the Advancement of Science.
      He received his Ph.D. from Princeton University in public and international affairs.
    </Typography>
  }),
  new PersonLocal({
    id: 'finklestein',
    category: 'advisor',
    name: 'Dr. Robert Finkelstein',
    affiliations: [
      'President of Robotic Technology Inc'
    ],
    email: 'BobF@RoboticTechnologyInc.com',
    description: <RFinkensteinPage/>
  }),
  new PersonUrl({
    id: 'pantelous',
    category: 'advisor',
    name: 'Dr. Athanasios Pantelous',
    affiliations: [
      'Associate Professor, Department of Econometrics and Business Statistics, Monash University, Australia'
    ],
    url: 'https://research.monash.edu/en/persons/athanasios-pantelous'
  }),
  new PersonUrl({
    id: 'assakkaf',
    category: 'advisor',
    name: 'Dr. Ibrahim Assakkaf',
    affiliations: [
      'Director of Reliability Research, Center for Technology and Systems Management'
    ],
    url: 'https://www.assakkaf.com/'
  }),
  new PersonUrl({
    id: 'mccuen',
    category: "faculty",
    name: "Dr. Richard McCuen",
    url: "https://cee.umd.edu/clark/faculty/280/Richard-H-McCuen",
    affiliations: [
      'Professor Emeritus, Civil and Environmental Engineering'
    ]
  }),



  new PersonLocal({
    id: 'chan',
    category: 'student',
    name: 'Nathan Chan',
    affiliations: [
      'MS Student, Institute of Systems Engineering, University of Maryland'
    ],
    activeTill: new Date(2027, 5),
    email: 'nczh@umd.edu'
  }),
  new PersonLocal({
    id: 'selsibaie',
    category: 'student',
    name: 'Sherief Elsibaie',
    orcid_id: '0009-0004-8424-8982',
    email: 'elsibaie@umd.edu',
    activeTill: new Date(2026, 5),
    affiliations: [
      'PhD Student, Department of Civil Engineering, University of Maryland'
    ],
    description: <React.Fragment>
      <Typography variant='h4' component='h4'>Research Interests</Typography>
      <Typography>
        <ul>
      <li>Resilience, storm surge modeling, seismic resilience, railroad transportation.</li>
      <li>Network/Graph theory, algorithms, efficiency, machine learning.</li>
      <li>Decision supports: Benefit Cost Analysis enhancements with uncertainty, risk aversion, probability risk assessments, Bayesian networks</li>
      </ul>
    </Typography>
    </React.Fragment>
  }),
  new PersonLocal({
    id: 'mao',
    category: 'student',
    name: 'Yujie Mao',
    orcid_id: '0000-0002-2751-4306',
    activeTill: new Date(2026, 5),
    affiliations: [
      'PhD Student, Department of Reliability Engineering, University of Maryland'
    ],
    description: <React.Fragment>
      <Typography variant='h4' component='h4'>Research Interest</Typography>
      <Typography>
        <ul>
          <li>Resilience, railroad transportation, hazmat, Network/Graph theory, algorithms, efficiency</li>
        </ul>
      </Typography>
    </React.Fragment>
  }),
  new PersonLocal({
    id: 'curtis',
    category: 'student',
    name: 'Lance Curtis',
    email: 'lrcurtis@umd.edu',
    activeTill: new Date(2027, 5),
    affiliations: [
      'PhD Student, Department of Reliability Engineering, University of Maryland'
    ],
    description: <React.Fragment>
      Lance R Curtis is a PhD student in the Reliability Engineering program at the University of Maryland and
      an adjunct professor at Howard Community College.  Previously, he worked in industry as a materials engineer
      for The M&P Lab (Schenectady, NY) conducting metallurgical evaluations and failure analyses and for GE Power
      (Greenville, SC) as a reliability engineer modeling gas turbines for electrical power production.  He earned
      his BS in metallurgical engineering and his MS in mechanical engineering from the University of Idaho in 2001
      and 2003, respectively.  Mr. Curtis’s research interests primarily center around the entropic characterization
      of failure mechanisms, particularly fatigue in metals, as well as metallurgical/mechanical failure analysis;
      modeling damage accumulation, reliability, resilience, and uncertainty; and engineering education.  He is a
      member of ASME, ASM International, the Society for Risk Analysis, ASEE, and an associate of the National Academy
      of Forensic Engineers.
    </React.Fragment>
  }),
  new PersonLocal({
    id: 'swarray',
    category: 'student',
    name: 'Ansumana Swarray',
    email: 'aswarray@umd.edu',
    activeTill: new Date(2028, 5),
    affiliations: [
      'PhD Student, Department of Reliability Engineering, University of Maryland'
    ],
    description: <React.Fragment>
      Ansumana Swarray's focus is climate risk assessment and management
    </React.Fragment>
  })
];
export const leadResearcher = new PersonLocal({
  id: 'ayyub',
  category: "faculty",
  name: "Dr. Bilal Ayyub",
  affiliations: [
    'Professor and Director, Center for Technology and Systems Management, University of Maryland'
  ],
  email: 'ba@umd.edu',
  phone_number: '301-405-1956',
  description: <Box>
    <Typography variant='body1' pb={3}>
      Dr. Ayyub's main research interests and work are in risk, resilience, sustainability, uncertainty
      and decision analysis, applied to civil, infrastructure, energy including renewables, defense and
      maritime fields and climate-resilient infrastructure. Professor Ayyub is a distinguished member of
      ASCE and an honorary member of ASME. He is also a fellow of the Society of Naval Architects and
      Marine Engineers (SNAME), the Structural Engineering Institute (SEI), and the Society for Risk
      Analysis (2017-18 Treasurer), and a senior member of the Institute of Electrical and Electronics
      Engineers (IEEE).
    </Typography>
    <Button variant='outlined' href='https://cee.umd.edu/clark/faculty/243/Bilal-M-Ayyub'>More...</Button>
  </Box>
});

export default peopleList;