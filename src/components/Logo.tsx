import { NBAAbbreviation } from "../utils/util";
import ATL from "./logos/atl";
import BKN from "./logos/bkn";
import BOS from "./logos/bos";
import CHA from "./logos/cha";
import CHI from "./logos/chi";
import CLE from "./logos/cle";
import DAL from "./logos/dal";
import DEN from "./logos/den";
import DET from "./logos/det";
import GSW from "./logos/gsw";
import HOU from "./logos/hou";
import IND from "./logos/ind";
import LAC from "./logos/lac";
import LAL from "./logos/lal";
import MEM from "./logos/mem";
import MIA from "./logos/mia";
import MIL from "./logos/mil";
import MIN from "./logos/min";
import NOP from "./logos/nop";
import NYK from "./logos/nyk";
import OKC from "./logos/okc";
import ORL from "./logos/orl";
import PHI from "./logos/phi";
import PHX from "./logos/phx";
import POR from "./logos/por";
import SAC from "./logos/sac";
import SAS from "./logos/sas";
import TOR from "./logos/tor";
import UTA from "./logos/uta";
import WAS from "./logos/was";

export default function Logo(props: { name: NBAAbbreviation }) {
  switch (props.name) {
    case 'ATL':
      return <ATL/>;
    case 'BOS':
      return <BOS/>;
    case 'BKN':
      return <BKN/>;
    case 'CHA':
      return <CHA/>;
    case 'CHI':
      return <CHI/>;
    case 'CLE':
      return <CLE/>;
    case 'DAL':
      return <DAL/>;
    case 'DEN':
      return <DEN/>;
    case 'DET':
      return <DET/>;
    case 'GSW':
      return <GSW/>;
    case 'HOU':
      return <HOU/>;
    case 'IND':
      return <IND/>;
    case 'LAC':
      return <LAC/>;
    case 'LAL':
      return <LAL/>;
    case 'MEM':
      return <MEM/>;
    case 'MIA':
      return <MIA/>;
    case 'MIL':
      return <MIL/>;
    case 'MIN':
      return <MIN/>;
    case 'NOP':
      return <NOP/>;
    case 'NYK':
      return <NYK/>;
    case 'OKC':
      return <OKC/>;
    case 'ORL':
      return <ORL/>;
    case 'PHI':
      return <PHI/>;
    case 'PHX':
      return <PHX/>;
    case 'POR':
      return <POR/>;
    case 'SAC':
      return <SAC/>;
    case 'SAS':
      return <SAS/>;
    case 'TOR':
      return <TOR/>;
    case 'UTA':
      return <UTA/>;
    case 'WAS':
      return <WAS/>;
    // Add more cases for other teams
    default:
      // Return a default component or handle unknown abbreviations
      return '';
  }
}
