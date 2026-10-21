import Background from '@/components/ui/background/background';
import { basePath } from '@/constants/const';
import type { ReactNode } from 'react';
import s from './wrapper.module.scss';

// $======================== Wrapper ========================$ //

type WrapperProps = {
  children: ReactNode;
};

export default function Wrapper({ children }: WrapperProps): React.JSX.Element {
  return (
    <div className={s.wrapper}>
      <Background className={s.bg} style={{ backgroundImage: `url(${basePath}/img/bg/bg-tile.png)` }} />
      {children}
    </div>
  );
}
