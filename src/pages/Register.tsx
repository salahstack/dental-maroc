/**
 * Components
 */
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Image from '../components/ui/Image';
import TextField from '../components/ui/TextField';
import MetaData from '../components/ui/MetaData';

const Register = () => {
  return (
    <>
      <MetaData
        title='Créer un compte'
        description='Inscrivez-vous pour accéder à votre espace personnel, gérer vos commandes et profiter de nos services dédiés aux professionnels du secteur dentaire.'
      >
        {/* Preload Register Page */}
        <link
          rel='preload'
          as='image'
          href='/images/register-banner.webp'
          type='image/webp'
          fetchPriority='high'
        />
        {/* Open Graph / Facebook */}
        <meta
          property='og:title'
          content='Créer un compte'
        />
        <meta
          property='og:description'
          content='Inscrivez-vous pour accéder à votre espace personnel, gérer vos commandes et profiter de nos services dédiés aux professionnels du secteur dentaire.'
        />
        <meta
          property='og:image'
          content='https://dentalmaroc.netlify.app/images/login-banner.webp'
        />
        <meta
          property='og:url'
          content='https://dentalmaroc.netlify.app/s-inscrire'
        />
        <meta
          property='og:type'
          content='website'
        />

        {/* Twitter Card */}
        <meta
          name='twitter:card'
          content='summary_large_image'
        />
        <meta
          name='twitter:title'
          content='Créer un compte'
        />
        <meta
          name='twitter:description'
          content='Inscrivez-vous pour accéder à votre espace personnel, gérer vos commandes et profiter de nos services dédiés aux professionnels du secteur dentaire.'
        />
        <meta
          name='twitter:url'
          content='https://dentalmaroc.netlify.app/s-inscrire'
        />
        <meta
          name='twitter:image'
          content='https://dentalmaroc.netlify.app/images/login-banner.webp'
        />
        <meta
          name='twitter:site'
          content='@dentalSupply'
        />
        <meta
          name='twitter:creator'
          content='@dentalSupply'
        />
        <meta name='twitter:type' content='website' />
        {/* Robots */}
        <meta
          name='robots'
          content='noindex, follow'
        />
        {/* Keywords */}
        <meta
          name='keywords'
          content='Créer un compte, Inscription, Espace personnel, Gestion des commandes, Services dentaires'
        />
        {/* Canonical URL */}
        <link
          rel='canonical'
          href='https://dentalmaroc.netlify.app/s-inscrire'
        />
      </MetaData>
      <div className='container h-dvh grid grid-cols-1 lg:grid-cols-2 lg:gap-4 py-5'>
        <div className='flex flex-col'>
          <Link
            to='/'
            className='mb-auto mx-auto lg:mx-0 active:scale-100'
          >
            <Image
              fallback='/images/logo.svg'
              srcSet='images/logo.svg'
              loading='eager'
              alt='logo'
              classes='w-20'
              width={80}
              height={80}
            />
          </Link>
          <div className='flex flex-col gap-2 w-full max-w-[450px] mx-auto'>
            <h1 className='text-3xl font-bold text-center'>Créer un compte</h1>
            <p className='text-center text-gray-400'>
              Veuillez remplir les informations ci-dessous pour créer un compte.
            </p>
            <form className='mt-4 grid grid-cols-1 gap-4'>
              <TextField
                label='Nom et prénom'
                name='fullname'
                placeholder='Entrez votre nom complet'
                type='text'
              />
              <TextField
                label='Email'
                name='email'
                placeholder='Entrez votre email'
                type='email'
              />
              <TextField
                label='Mot de passe'
                name='password'
                placeholder='Entrez votre mot de passe'
                type='password'
              />
              <Button
                type='submit'
                classes='w-full mt-4'
              >
                S'inscrire
              </Button>
            </form>
            <p className='text-center mt-2 text-sm'>
              Vous avez déjà un compte ?{' '}
              <Link
                to='/se-connecter'
                className='text-blue-600 hover:underline inline-block'
              >
                Connectez-vous
              </Link>
            </p>
          </div>
          <p className='mt-auto mx-auto lg:mx-0 text-sm text-gray-500'>
            &copy; {new Date().getFullYear()} salahheddine mjydila. Tout droit
            réservé
          </p>
        </div>
        <Image
          srcSet='images/login-banner.webp'
          fallback='images/login-banner-fallback.jpg'
          alt='banner'
          width={850}
          height={1280}
          classes='hidden lg:block rounded-lg'
          loading='eager'
          fetchPriority='high'
        />
      </div>
    </>
  );
};

export default Register;
