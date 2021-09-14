import {
  queries,
  Queries,
  render,
  RenderOptions,
  RenderResult,
} from '@testing-library/react'
import { FC } from 'react'
import { IntlProvider } from 'react-intl'

import locales from '../locales'

const Providers: FC = ({ children }) => {
  const defaultLocale = 'en-US' as const
  const messages = locales[defaultLocale]

  return (
    <>
      <IntlProvider
        locale={defaultLocale}
        defaultLocale={defaultLocale}
        messages={messages}
      >
        {children}
      </IntlProvider>
    </>
  )
}

export type CustomRender = <
  Q extends Queries = typeof queries,
  Container extends Element | DocumentFragment = HTMLElement
>(
  ui: React.ReactElement,
  options: RenderOptions<Q, Container>
) => RenderResult<Q, Container>

const customRender: CustomRender = (ui, options = {}) =>
  render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
