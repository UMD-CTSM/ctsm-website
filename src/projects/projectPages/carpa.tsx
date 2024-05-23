import { Stack, Typography } from "@mui/material";
import carpaRail from './carpaRail.bmp';
import carpaRail1 from './carpaRail1.bmp';
import carpaLogo from './carpaLogo.jpg';

export default function CarpaDescription () {
  return <Stack spacing={2} alignItems='center'>
    <img src={carpaLogo}/>
  
  <img src={carpaRail}/>
  <Typography>The protection of critical infrastructure and key resources (CI/KR) for homeland security requires choosing among a large set of protective, response, and recovery actions for reducing risk to an acceptable level. The selection of investment alternatives for improving regional or asset security and increasing infrastructure resilience depends on several factors – their cost to implement, whether they meet risk reduction objectives, and their cost-effectiveness. To accomplish this task, the Department of Homeland Security (DHS) has identified risk methods as the primary underlying framework for system evaluations, operational assessments, technology assessments, resource and support analyses, and field operations analyses; according to the draft DHS National Infrastructure Protection Plan, benefit-cost analysis is the hallmark of critical infrastructure protection decision-making.</Typography>
  <Typography>The Critical Asset & Portfolio Risk Analysis (CAPRA) methodology developed by the CTSM consists of robust procedures for assessing and managing the risks to CI/KR exposed to a wide spectrum of current and emerging hazards and threats. The CAPRA methodology is designed to analyze, assess, and report risks for the purpose of identifying, screening, and ranking hazards or assets based on their relative risk exposure to all hazards. The CAPRA methodology provides a framework for evaluating the cost-effectiveness of proposed risk reduction and security investment alternatives considered for managing risks to a region or CI/KR. The results from a CAPRA assessment are communicated to all relevant stakeholders in the form of custom-tailored risk communication reports designed to meet the unique information needs and requirements of all persons charged with managing risk. CAPRA was featured in the All Hazards Forum in 2006.</Typography>
  
  <img src={carpaRail1}/>
  <Typography>Based on sound principles of risk and uncertainty analysis, the CAPRA methodology provides a quantitative framework for assessing risk to a region and its assets due to natural and technological hazards and security threats. Defining risk as the combination of rates and consequences, CAPRA uses an annual rate of occurrence derived from past data (for natural hazards) or expert judgment of scenario attractiveness and annual attack rates (for security threats). For consequence, CAPRA quantifies the potential loss for each hazard and threat scenario in terms of several metrics including economic damages and loss of life. These metrics combined yield risk profiles in terms of dollars and lives lost; these intuitive metrics facilitate a rational and coherent evaluation of the net benefit associated with alternative risk reduction strategies.</Typography>
  <Typography>
    The following two papers describe the details of CAPRA:
    <ol>
      <li>Ayyub, B. M., McGill, W. L., Kaminskiy, M., “Critical Asset and Portfolio Risk Analysis for Homeland Security: An All-Hazards Framework,” Risk Analysis International Journal, Society for Risk Analysis, Vol. 27, No. 3, 2007, 789-801, DOI: 10.1111/j.1539-6924.2007.00911.x.</li>
      <li>McGill, W. L., Ayyub, B. M., Kaminskiy, M., “A Quantitative Asset-Level Risk Assessment and Management Framework for Critical Asset Protection,” Risk Analysis International Journal, Society for Risk Analysis, Vol. 27, No. 5, 2007, 1265-1281, DOI: 10.1111/j.1539-6924.2007.00955.x.</li>
    </ol>
  </Typography>
  </Stack>
}