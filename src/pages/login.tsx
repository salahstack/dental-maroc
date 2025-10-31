/**
 * Components
 */
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Image from '../components/ui/Image';
import TextField from '../components/ui/TextField';
import MetaData from '../components/ui/MetaData';

const Login = () => {
  return (
    <>
      <MetaData
        title='Se connecter'
        description='Connectez-vous à votre compte pour accéder à la plateforme de gestion des ventes dentaires.'
      >
        {/* Preload Login Page */}
        <link rel="preload" as="image" href="/images/login-banner.webp" type='image/webp' fetchPriority='high' />

      </MetaData>
      <div className='container h-dvh grid grid-cols-1 lg:grid-cols-2 lg:gap-4 py-5'>
        <div className='flex flex-col'>
          <Link
            to='/'
            className='mb-auto mx-auto lg:mx-0'
          >
            <Image
              fallback='/images/logo.svg'
              srcSet='images/logo.svg'
              loading='eager'
              classes='w-20'
              alt='logo'
              width={80}
              height={80}
            />
          </Link>
          <div className='flex flex-col gap-2 w-full max-w-[450px] mx-auto'>
            <h1 className='text-3xl font-bold text-center'>Se connecter</h1>
            <p className='text-center text-gray-400'>
              Veuillez entrer vos identifiants pour accéder à votre compte.
            </p>
            <form className='mt-4 grid grid-cols-1 gap-4'>
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
              <Link
                to='/login/reset-link'
                className='text-sm text-right font-medium hover:text-blue-600 hover:underline'
              >
                Mot de passe oublié ?
              </Link>
              <Button
                type='submit'
                classes='w-full mt-4'
              >
                Se connecter
              </Button>
            </form>
            <p className='text-center mt-2 text-sm'>
              Vous n'avez pas de compte ?{' '}
              <Link
                to='/register'
                className='text-blue-600 hover:underline inline-block'
              >
                Créez un compte
              </Link>
            </p>
          </div>
          <p className='mt-auto mx-auto lg:mx-0 text-sm text-gray-500'>
            &copy; {new Date().getFullYear()} salahheddine mjydila. Tout droit
            réservé
          </p>
        </div>
        <Image
          srcSet='/images/login-banner.webp'
          fallback='/images/login-banner-fallback.jpg'
          alt='login banner'
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

export default Login;
