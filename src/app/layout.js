import HeaderNav from '@/components/HeaderNav';
import './globals.css';

export const metadata = {
  title: 'Cotham Gardens PTFA',
  description: 'Fundraising and extra curricular activities for Cotham Gardens Primary School'
};

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <head>
        <script src='https://identity.netlify.com/v1/netlify-identity-widget.js' />
      </head>
      <body
        className='font-inter font-feature-default antialiased bg-gray-100'
      >
        <HeaderNav />
        {children}
      </body>
    </html>
  );
}
