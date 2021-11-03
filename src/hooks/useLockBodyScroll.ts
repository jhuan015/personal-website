import { useLayoutEffect } from 'react'

// Hook to lock body scrolling
function useLockBodyScroll(): void {
  useLayoutEffect((): (() => void) => {
    // Get original body overflow
    const originalStyle: string = window.getComputedStyle(document.body)
      .overflow
    // Prevent scrolling on mount
    document.body.style.overflow = 'hidden'
    // Re-enable scrolling when component unmounts
    return () => (document.body.style.overflow = originalStyle)
  }, []) // Empty array ensures effect is only run on mount and unmount
}

export default useLockBodyScroll
