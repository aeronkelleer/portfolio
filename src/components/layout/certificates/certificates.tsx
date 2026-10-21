import Heading from '@/components/ui/heading/heading';
import { basePath } from '@/constants/const';
import { Certificate } from '@/types/types';
import Image from 'next/image';
import s from './certificates.module.scss';

// $======================== Certificates ========================$ //

type CertificatesProps = { certificates: Certificate[] };

export default function Certificates(props: CertificatesProps): React.JSX.Element {
  const { certificates } = props;
  return (
    <div className={s.certificates}>
      <Heading type='small' className={s.heading}>
        My certificates
      </Heading>
      <ul className={s.list}>
        {certificates.map(({ path }, index) => (
          <li key={index} className={s.item}>
            <Image src={`${basePath}${path}`} alt='' width={1708} height={2400} />
          </li>
        ))}
      </ul>
    </div>
  );
}
