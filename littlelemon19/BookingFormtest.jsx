import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import BookingForm from './BookingForm';

test('should find text on the page', () => {
  render(
      <BookingProvider>
        <BookingForm availableTimes={availableTimes} dispatch={mockDispatch} />
      </BookingProvider>
)
  // Check if text exists in the document
  expect(screen.getByText(/hello world/i)).toBeInTheDocument()
})