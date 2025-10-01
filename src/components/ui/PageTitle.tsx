/**
 * Node modules
 */
import type { FC } from 'react';
/**
 * Node modules
 */
import { Helmet } from 'react-helmet'


/**
 * Interface
 */
import type { PageTitleProps } from '../../interfaces/page-title';

const PageTitle: FC<PageTitleProps> = ({ title, content }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta
        name='description'
        content={content}
      />
    </Helmet>
  );
};

export default PageTitle;
