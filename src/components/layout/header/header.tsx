'use client';
import { OpenElement } from '@/constants/const';
import { MediaQuery } from '@/constants/viewport';
import { useMediaQuery } from '@/hooks/use-media-query';
import { addOpenElement, dropOpenElement, getOpenElements } from '@/store/processes/open-element.process';
import { useAppDispatch, useAppSelector } from '@/store/store-hooks';
import clsx from 'clsx';
import React from 'react';
import Burger from '../burger/burger';
import Container from '../container/container';
import Menu from '../menu/menu';
import s from './header.module.scss';

// $======================== Header ========================$ //

export default function Header(): React.JSX.Element {
  const isMobileScreen = useMediaQuery(MediaQuery.MOBILE);
  const dispatch = useAppDispatch();
  const openElements = useAppSelector(getOpenElements);

  const handleBurgerClick = () => {
    if (openElements.includes(OpenElement.ASIDE)) {
      dispatch(dropOpenElement(OpenElement.ASIDE));
    } else {
      dispatch(addOpenElement(OpenElement.ASIDE));
    }
  };

  return (
    <header className={s.header}>
      <Container>
        <div className={clsx(s.inner)}>
          {!isMobileScreen && <Menu className={s.menu} />}

          {isMobileScreen && (
            <Burger
              isActive={openElements.includes(OpenElement.ASIDE)}
              onBurgerClick={handleBurgerClick}
              className={s.burger}
            />
          )}
        </div>
      </Container>
    </header>
  );
}
