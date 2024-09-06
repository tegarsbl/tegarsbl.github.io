import { h } from 'preact';

interface SkillCardProps {
  name: string;
  icon: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon }) => {
  return (
    <div className="card p-4 shadow-lg bg-base-100 text-center w-40">
      <img src={icon} alt={name} className="w-16 h-16 mx-auto mb-2" />
      <h3 className="text-xl font-semibold">{name}</h3>
    </div>
  );
};

export default SkillCard;