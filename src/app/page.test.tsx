import { expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from './page.tsx'

// Mock next/image as it requires a running Next.js server for optimization
vi.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />
  },
}))

test('Home page renders the logo, heading, and main links', () => {
  render(<Home />)

  // Verify the Next.js logo is present
  const logo = screen.getByAltText('Next.js logo')
  expect(logo).toBeDefined()

  // Verify the main heading text
  const heading = screen.getByRole('heading', { level: 1 })
  expect(heading.textContent).toContain('To get started, edit the page.tsx file.')

  // Verify the primary Call-to-Action links are rendered
  expect(screen.getByRole('link', { name: /deploy now/i })).toBeDefined()
  expect(screen.getByRole('link', { name: /documentation/i })).toBeDefined()
  
  // Verify the links have the correct destinations
  expect(screen.getByRole('link', { name: /learning/i })).toHaveAttribute('href', expect.stringContaining('nextjs.org/learn'))
})
