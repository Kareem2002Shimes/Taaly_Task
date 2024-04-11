import Svgs from './Svgs';
import { SvgProps } from './Svgs/types';

export type SvgIconType = keyof typeof Svgs;

interface IconProps extends SvgProps {
  name: SvgIconType;
}

const Icon = ({ name, size = '24px', className = '' }: IconProps) => {
  const SvgIcon = Svgs[name];

  return (
    <span style={{ width: size, height: size }}>
      <SvgIcon size={size} className={className} />
    </span>
  );
};

export default Icon;
