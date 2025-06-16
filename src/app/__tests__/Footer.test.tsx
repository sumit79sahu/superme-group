import { render, screen } from '@testing-library/react'
import Footer from '../components/Footer'

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />)
  })

  it('renders the company logo', () => {
    const logo = screen.getByAltText(/Supreme Group/i)
    expect(logo).toBeInTheDocument()
  })

  it('renders all footer sections', () => {
    const sections = ['Applications', 'Company', 'More', 'Follow Us']
    sections.forEach((section) => {
      const heading = screen.getByText(section)
      expect(heading).toBeInTheDocument()
    })
  })

  it('renders social media links', () => {
    const socialLinks = ['Twitter', 'LinkedIn', 'Instagram', 'Medium']
    socialLinks.forEach((name) => {
      const link = screen.getByRole('link', { name: new RegExp(name, 'i') })
      expect(link).toBeInTheDocument()
    })
  })

  it('renders contact information', () => {
    const contactInfoRegex = /Supreme House.*Chembur.*Mumbai/i
    const contactElement = screen.getByText(contactInfoRegex)
    expect(contactElement).toBeInTheDocument()
  })

  it('renders copyright text', () => {
    const currentYear = new Date().getFullYear()
    expect(screen.getByTestId('copyright')).toHaveTextContent(
      `©${currentYear} Supreme Group`
    )
  })
})
