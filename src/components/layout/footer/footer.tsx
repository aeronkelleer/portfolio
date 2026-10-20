import Heading from '@/components/ui/heading/heading';
import Icon from '@/components/ui/icon/icon';
import { basePath } from '@/constants/const';
import { Contact } from '@/types/types';
import Container from '../container/container';
import s from './footer.module.scss';

// $======================== Footer ========================$ //

interface FooterProps {
  contacts: Contact[];
}

export default function Footer(props: FooterProps): React.JSX.Element {
  const { contacts } = props;

  return (
    <footer className={s.footer} id='contact'>
      <Container>
        <div className={s.inner}>
          <Heading className={s.heading}>Connect with me</Heading>
          <ul className={s.list}>
            {contacts.map(({ href, icon, text }) => {
              return (
                <li key={text} className={s.item}>
                  <a href={href} className={s.link} target='_blank'>
                    <Icon className={s.link_icon} src={`${basePath}${icon}`} width={45} height={45} />
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
