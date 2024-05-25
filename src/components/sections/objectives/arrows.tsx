import React from 'react'

interface ArrowsProps {
    onPrev : () => void
    onNext : () => void
}

export default function Arrows({ onNext, onPrev } : ArrowsProps) {
  return (
    <div className='absolute bottom-20 lg:top-1/2 left-0 -translate-y-1/2 w-full flex items-center justify-between z-[99999] lg:px-4 '>
        <button className='text-white hover:text-secondary transition-colors' onClick={onPrev}>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path fill="currentColor" d="m12.804 15.112l-2.677-2.677q-.093-.093-.143-.2T9.935 12t.05-.235t.143-.2l2.677-2.677q.056-.055.129-.093q.073-.037.157-.037q.168 0 .289.11q.121.112.121.293v5.677q0 .182-.124.293t-.288.111q-.042 0-.284-.13"/></svg>
        </button>
        <button className='text-white hover:text-secondary transition-colors' onClick={onNext}>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path fill="currentColor" d="M10.91 15.242q-.168 0-.289-.11q-.121-.112-.121-.293V9.162q0-.182.124-.293t.288-.111q.042 0 .284.13l2.677 2.678q.093.092.143.199t.05.235t-.05.235t-.143.2l-2.677 2.677q-.055.055-.129.093q-.073.037-.157.037"/></svg>
        </button>
    </div>
  )
}
