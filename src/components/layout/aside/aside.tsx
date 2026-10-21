'use client';

import { OpenElement } from '@/constants/const';
import { getOpenElements } from '@/store/processes/open-element.slice';
import { useAppSelector } from '@/store/store-hooks';
import clsx from 'clsx';
import Menu from '../menu/menu';
import s from './aside.module.scss';

// $======================== Aside ========================$ //

function Aside(): React.JSX.Element {
  const openElements = useAppSelector(getOpenElements);

  return (
    <aside className={clsx(s.aside, { [s._open]: openElements.includes(OpenElement.ASIDE) })}>
      <Menu className={s.menu} />
    </aside>
  );
}
export default Aside;
