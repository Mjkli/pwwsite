import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import NavBar from '../components/NavBar/NavBar'

describe('NavBar', () => {
  it('opens the menu and calls setMainPage when Home is clicked', async () => {
    const setMainPage = vi.fn()

    render(<NavBar setMainPage={setMainPage} />)

    const toggleButton = screen.getByRole('button')
    await userEvent.click(toggleButton)

    const homeButton = screen.getByRole('button', { name: /home/i })
    expect(homeButton).toBeInTheDocument()

    await userEvent.click(homeButton)
    expect(setMainPage).toHaveBeenCalledWith('Home')
  })
})
