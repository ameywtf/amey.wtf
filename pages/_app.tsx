import { DefaultSeo } from 'next-seo';

import { config } from 'next-seo.config';

import '@fontsource/sen';
import '@fontsource/sora';
import 'styles/globals.css';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="mx-12 md:mx-48 lg:mx-56 xl:mx-64">
      <DefaultSeo {...config} />
      <Component {...pageProps} />
    </div>
  );
}
