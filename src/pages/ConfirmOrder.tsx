import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import TextField from '../components/ui/TextField';
import Image from '../components/ui/Image';
import Button from '../components/ui/Button';
import MetaData from '../components/ui/MetaData';

const ConfirmOrder = () => {
  const { cart } = useCart();

  return (
    <>
      <MetaData
        title='Confirmation de commande - Dental Supply'
        description='Merci pour votre commande ! Voici un récapitulatif de votre achat.'
      >
        {/* Open Graph / Facebook */}
        <meta
          property='og:title'
          content='Confirmation de commande - Dental Supply'
        />
        <meta
          property='og:description'
          content='Merci pour votre commande ! Voici un récapitulatif de votre achat.'
        />
        <meta
          property='og:type'
          content='website'
        />
        <meta
          property='og:url'
          content='https://dental-supply.netlify.app/confirmation-commande'
        />
        <meta
          property='og:image'
          content='https://dental-supply.netlify.app/images/home-1200.webp'
        />
        {/* Twitter Card */}

        <meta
          name='twitter:card'
          content='summary_large_image'
        />
        <meta
          name='twitter:title'
          content='Confirmation de commande - Dental Supply'
        />
        <meta
          name='twitter:description'
          content='Merci pour votre commande ! Voici un récapitulatif de votre achat.'
        />
        <meta
          name='twitter:image'
          content='https://dental-supply.netlify.app/images/home-1200.webp'
        />
        <meta
          name='twitter:site'
          content='@DentalSupply'
        />
        <meta
          name='twitter:creator'
          content='@DentalSupply'
        />
        <meta name='twitter:url' content='https://dental-supply.netlify.app/confirmation-commande' />
        <meta name='twitter:type' content='website' />
        {/* Canonical URL */}
        <link
          rel='canonical'
          href='https://dental-supply.netlify.app/confirmation-commande'
        />
        {/* Keywords */}
        <meta
          name='keywords'
          content='confirmation de commande, dental supply, achat, récapitulatif'
        />
        {/* Robots */}
        <meta
          name='robots'
          content='noindex, nofollow'
        />
      </MetaData>
      <section className='mt-15 mb-10'>
        <div className='container grid items-center grid-cols-1 lg:grid-cols-2 gap-8'>
          <div className='flex flex-col h-full'>
            <Link
              to='/accueil'
              className='text-blue-600 hover:underline mb-6 lg:mb-auto w-fit'
            >
              Retour à l'accueil
            </Link>
            <div className='h-full flex flex-col justify-center'>
              <h1 className='text-2xl font-bold text-center'>
                Confirmation de commande
              </h1>
              <p className='text-center mt-2 text-gray-600'>
                Merci pour votre commande ! Voici un récapitulatif de votre
                achat :
              </p>
            </div>
          </div>
          <div>
            <h3 className='text-lg font-bold text-center mb-4'>
              Détails de la commande
            </h3>
            <ul className='divide-y divide-gray-200'>
              {cart.map((item) => (
                <li
                  key={item.id}
                  className='py-3 flex justify-between'
                >
                  <div className='flex items-center gap-4'>
                    <Image
                      srcSet={item.image}
                      fallback={item.image}
                      alt={item.title}
                      classes='rounded-md w-14 h-14'
                      width={600}
                      height={400}
                    />
                    <div>
                      <h3 className='font-bold mb-2'>{item.title}</h3>
                      <span className='text-gray-600'>
                        Quantité: {item.quantity}
                      </span>
                    </div>
                  </div>
                  <span className='font-bold'>{item.price} DH</span>
                </li>
              ))}
            </ul>
            <div className='mt-4 flex items-center justify-between font-bold gap-4'>
              <h3> total de la commande</h3>
              <span>
                {cart.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                )}{' '}
                DH
              </span>
            </div>
            <form
              action=''
              className='grid grid-col gap-3 mt-5'
            >
              <TextField
                label='Nom complet'
                name='fullName'
                placeholder='Entrez votre nom complet'
                required
              />
              <TextField
                label='Adresse de livraison'
                name='address'
                placeholder='Entrez votre adresse de livraison'
                required
              />
              <TextField
                label='Numéro de téléphone'
                name='phone'
                placeholder='Entrez votre numéro de téléphone'
                required
              />
              <TextField
                label='Adresse e-mail'
                name='email'
                placeholder='Entrez votre adresse e-mail'
                required
              />
              <Button classes='mt-4 w-full bg-blue-600 text-white'>
                Confirmer la commande
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConfirmOrder;
