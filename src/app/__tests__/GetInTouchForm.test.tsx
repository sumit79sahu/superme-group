import React from 'react'
import { render, screen } from '@testing-library/react'
import GetInTouchForm from '../components/GetInTouchForm'
import '@testing-library/jest-dom'

jest.mock('../components/ContactForm', () => () => <div data-testid="contact-form" />)

describe('GetInTouchForm', () => {
  beforeEach(() => {
    render(<GetInTouchForm />)
  })

  it('renders the section heading', () => {
    expect(screen.getByRole('heading', { name: /get in touch/i })).toBeInTheDocument()
  })

  it('renders contact details correctly', () => {
    expect(screen.getByText(/110, 16th Road, Chembur/i)).toBeInTheDocument()
    expect(screen.getByText(/\+91 22 25208822/i)).toBeInTheDocument()
    expect(screen.getByText(/info@supremegroup.co.in/i)).toBeInTheDocument()
  })

  it('renders labels for contact fields', () => {
    expect(screen.getByText(/address:/i)).toBeInTheDocument()
    expect(screen.getByText(/phone:/i)).toBeInTheDocument()
    expect(screen.getByText(/email:/i)).toBeInTheDocument()
  })

  it('renders the contact form', () => {
    expect(screen.getByTestId('contact-form')).toBeInTheDocument()
  })
})
