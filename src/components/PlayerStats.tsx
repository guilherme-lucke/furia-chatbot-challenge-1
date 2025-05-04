
import { Player } from "@/data/furiaData";

interface PlayerStatsProps {
  player: Player;
}

const PlayerStats = ({ player }: PlayerStatsProps) => {
  return (
    <div className="bg-furia-lightgray rounded-lg p-4 my-2 text-white">
      <div className="font-bold text-furia-orange mb-2">
        {player.nickname} <span className="text-white text-opacity-70">({player.name})</span>
      </div>
      {player.role && <div className="text-sm mb-2">Função: {player.role}</div>}
      
      {Object.entries(player.stats).length > 0 && (
        <div className="grid grid-cols-2 gap-2 text-sm">
          {player.stats.kills !== undefined && (
            <div>Abates: {player.stats.kills}</div>
          )}
          {player.stats.deaths !== undefined && (
            <div>Mortes: {player.stats.deaths}</div>
          )}
          {player.stats.kd !== undefined && (
            <div>K/D: {player.stats.kd.toFixed(2)}</div>
          )}
          {player.stats.adr !== undefined && (
            <div>ADR: {player.stats.adr.toFixed(1)}</div>
          )}
          {player.stats.clutches !== undefined && (
            <div>Clutches: {player.stats.clutches}</div>
          )}
          {player.stats.headshots !== undefined && (
            <div>HS%: {player.stats.headshots.toFixed(1)}%</div>
          )}
        </div>
      )}
    </div>
  );
};

export default PlayerStats;
