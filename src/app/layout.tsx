import type { Metadata } from 'next'

import './styles/global.css'
import { roboto } from './fonts/roboto'
import { mergeNames } from '@/utils/merge.names'
import { titilliumWeb } from './fonts/titillium.web'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => (
  <html lang="en-US">
    <body className={mergeNames(roboto.variable, titilliumWeb.variable)}>
      {children}
    </body>
  </html>
)

export default RootLayout
