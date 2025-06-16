
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import ContactForm from '../components/ContactForm'
import '@testing-library/jest-dom'
import {message} from "antd"

// Mock antd
jest.mock('antd')

describe('ContactForm', () => {
  it('renders all input fields and submit button', () => {
    render(<ContactForm />)

    expect(screen.getByPlaceholderText(/full name/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/subject/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/message/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })

  it('shows validation errors when submitting empty form', async () => {
    render(<ContactForm />)

    fireEvent.click(screen.getByRole('button', { name: /submit/i }))

    await waitFor(() => {
      expect(screen.getByText(/please input your full name/i)).toBeInTheDocument()
      expect(screen.getByText(/please input your email/i)).toBeInTheDocument()
      expect(screen.getByText(/please input your subject/i)).toBeInTheDocument()
    })
  })

  it('submits the form with valid data', async () => {
    render(<ContactForm />)

    fireEvent.change(screen.getByPlaceholderText(/full name/i), {
      target: { value: 'John Doe' },
    })
    fireEvent.change(screen.getByPlaceholderText(/email/i), {
      target: { value: 'john@example.com' },
    })
    fireEvent.change(screen.getByPlaceholderText(/subject/i), {
      target: { value: 'General Inquiry' },
    })
    fireEvent.change(screen.getByPlaceholderText(/message/i), {
      target: { value: 'Hello there!' },
    })

    fireEvent.click(screen.getByRole('button', { name: /submit/i }))

    await waitFor(() => {
      // const { message } = require('antd')
      expect(message.success).toHaveBeenCalledWith('Form submitted successfully')
    })
  })

  it('shows error for invalid full name characters', async () => {
    render(<ContactForm />)

    fireEvent.change(screen.getByPlaceholderText(/full name/i), {
      target: { value: '1234!' },
    })
    fireEvent.click(screen.getByRole('button', { name: /submit/i }))

    await waitFor(() => {
      expect(
        screen.getByText(/full name must only contain letters and spaces/i)
      ).toBeInTheDocument()
    })
  })
})
