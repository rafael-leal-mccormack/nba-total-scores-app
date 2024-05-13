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

export default function Logo(props: { name: NBAAbbreviation, size?: string }) {
  switch (props.name) {
    case 'ATL':
      return <ATL size={props.size}/>;
    case 'BOS':
      return <BOS size={props.size}/>;
    case 'BKN':
      return <BKN size={props.size}/>;
    case 'CHA':
      return <CHA size={props.size}/>;
    case 'CHI':
      return <CHI size={props.size}/>;
    case 'CLE':
      return <CLE size={props.size}/>;
    case 'DAL':
      return <DAL size={props.size}/>;
    case 'DEN':
      return <DEN size={props.size}/>;
    case 'DET':
      return <DET size={props.size}/>;
    case 'GSW':
      return <GSW size={props.size}/>;
    case 'HOU':
      return <HOU size={props.size}/>;
    case 'IND':
      return <IND size={props.size}/>;
    case 'LAC':
      return <LAC size={props.size}/>;
    case 'LAL':
      return <LAL size={props.size}/>;
    case 'MEM':
      return <MEM size={props.size}/>;
    case 'MIA':
      return <MIA size={props.size}/>;
    case 'MIL':
      return <MIL size={props.size}/>;
    case 'MIN':
      return <MIN size={props.size}/>;
    case 'NOP':
      return <NOP size={props.size}/>;
    case 'NYK':
      return <NYK size={props.size}/>;
    case 'OKC':
      return <OKC size={props.size}/>;
    case 'ORL':
      return <ORL size={props.size}/>;
    case 'PHI':
      return <PHI size={props.size}/>;
    case 'PHX':
      return <PHX size={props.size}/>;
    case 'POR':
      return <POR size={props.size}/>;
    case 'SAC':
      return <SAC size={props.size}/>;
    case 'SAS':
      return <SAS size={props.size}/>;
    case 'TOR':
      return <TOR size={props.size}/>;
    case 'UTA':
      return <UTA size={props.size}/>;
    case 'WAS':
      return <WAS size={props.size}/>;
    // Add more cases for other teams
    default:
      // Return a default component or handle unknown abbreviations
      return '';
  }
}
