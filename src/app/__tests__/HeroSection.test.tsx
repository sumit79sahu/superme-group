import { render, screen } from '@testing-library/react'
import HeroSection from '../components/HeroSection'

describe('HeroSection', () => {
  beforeEach(() => {
    render(<HeroSection />)
  })

  it('renders the stats section using data-testid', () => {
    const section = screen.getByTestId('stats-section')
    expect(section).toBeInTheDocument()
  })

  it('renders the background video element', () => {
    const video = screen.getByTestId('hero-video')
    expect(video).toBeInTheDocument()
    expect(video).toHaveAttribute('autoPlay')
    expect(video).toHaveAttribute('loop')
    // expect(video).toHaveAttribute('muted')
    expect(video).toHaveAttribute('playsInline')
  })

  it('renders the hero subheading text', () => {
    expect(
      screen.getByText(/Performance in motion/i)
    ).toBeInTheDocument()
  })

  it('renders the main headline with "Soft trims and NVH solutions"', () => {
    expect(
      screen.getByText(/Soft trims and/i)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/NVH solutions/i)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/for seamless rides/i)
    ).toBeInTheDocument()
  })
})
