/**
 * Node modules
 */
import type { FC } from 'react';
/**
 * Node modules
 */
import { Helmet } from 'react-helmet-async'


/**
 * Interface
 */
import type { MetaDataProps } from '../../interfaces/meta-data';

const MetaData: FC<MetaDataProps> = ({ title, description, children }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta
        name='description'
        content={description}
      />
      {children}
    </Helmet>
  );
};

export default MetaData;
