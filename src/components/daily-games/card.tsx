import { NBAAbbreviation } from "../../utils/util";
import Logo from "../Logo";
import ATL from "../logos/atl";
import MIA from "../logos/mia";

interface Props {
  team1: string;
  team1Logo: NBAAbbreviation;
  team2: string;
  team2Logo: NBAAbbreviation;
}

export default function Card(props: Props) {
  return (
    <a
      href="#"
      className="block max-w-sm p-1 pr-14 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <div className="flex items-center font-semibold">
        <Logo size="40" name={props.team1Logo}></Logo>
        <span className="ml-2 font-semibold">{props.team1}</span>
      </div>
      <div className=" opacity-80 text-xs ml-4">@</div>
      <div className="flex items-center font-semibold">
        <Logo name={props.team2Logo} size="40"></Logo>
        <span className="ml-2 font-semibold">{props.team2}</span>
      </div>
    </a>
  );
}
