'use client';

import type { ReactNode } from 'react';
import { I18nProviderClient } from './ui/locales/client';

type ProviderProps = {
  locale: string;
  children: ReactNode;
};

export function ProviderI8({ locale, children }: ProviderProps) {
  return (
    <I18nProviderClient locale={locale} fallback={<p>Loading...</p>}>
      {children}
    </I18nProviderClient>
  );
}