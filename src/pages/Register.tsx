/**
 * Components
 */
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Image from '../components/ui/Image';
import TextField from '../components/ui/TextField';
import PageTitle from '../components/ui/PageTitle';

const Register = () => {
  return (
    <>
      <PageTitle title='Créer un compte' />
      <div className='container h-dvh grid grid-cols-1 lg:grid-cols-2 lg:gap-4 py-5'>
        <div className='flex flex-col'>
          <Link
            to='/'
            className='mb-auto mx-auto lg:mx-0'
          >
            <Image
              src='images/logo.png'
              alt='logo'
              width='w-26'
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
                label="S'inscrire"
                type='submit'
                classes='w-full mt-4'
              />
            </form>
            <p className='text-center mt-2 text-sm'>
              Vous avez déjà un compte ?{' '}
              <Link
                to='/login'
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
          src='images/login-banner.jpg'
          alt='banner'
          classes='hidden lg:block rounded-lg'
        />
      </div>
    </>
  );
};

export default Register;
