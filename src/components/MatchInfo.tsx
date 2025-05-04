
import { Match } from "@/data/furiaData";

interface MatchInfoProps {
  match: Match;
}

const MatchInfo = ({ match }: MatchInfoProps) => {
  return (
    <div className="bg-furia-lightgray rounded-lg p-4 my-2 text-white">
      <div className="font-bold text-furia-orange mb-2">
        FURIA vs {match.opponent}
      </div>
      <div className="grid grid-cols-2 gap-2 text-sm">
        <div>Data: {match.date}</div>
        <div>Horário: {match.time} (BRT)</div>
        <div>Torneio: {match.tournament}</div>
        <div>Formato: {match.format}</div>
      </div>
    </div>
  );
};

export default MatchInfo;
