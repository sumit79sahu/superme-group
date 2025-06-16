import { render, screen } from '@testing-library/react'
import Navbar from '../components/Navbar'

describe('Navbar', () => {
  beforeEach(() => {
    render(<Navbar />)
  })

  it('renders the logo', () => {
    const logo = screen.getByAltText('Supreme Group')
    expect(logo).toBeInTheDocument()
  })

  it('renders the contact button', () => {
    const contactButton = screen.getByText('Contact Us')
    expect(contactButton).toBeInTheDocument()
  })

  it('renders social media and language buttons', () => {
    const linkedinButton = screen.getByRole('button', { name: /linkedin/i });

    // const linkedinButton = screen.getByRole('button', { name: '' })
    const languageButton = screen.getByText('ENG')
    
    expect(linkedinButton).toBeInTheDocument()
    expect(languageButton).toBeInTheDocument()
  })

  it('renders mobile menu button', () => {
const menuButton = screen.getByRole('button', { name: /mobile menu/i });
    expect(menuButton).toBeInTheDocument()
  })

  it('has correct navigation structure', () => {
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
  })
}) 