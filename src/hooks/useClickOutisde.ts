import React, { useEffect } from 'react'

interface UseClickOutisdeProps {
    ref : React.RefObject<HTMLDivElement>,
    onClose : () => void
    isOpen : boolean
}

export default function useClickOutisde({  onClose, ref, isOpen } : UseClickOutisdeProps ) {
 
    const handleClickOutsideModal = (event: any) => {
        if (
          isOpen &&
          !ref?.current?.contains(event.target) 
        ) {
          onClose();
        }
      };
    
      useEffect(() => {
        if (isOpen) {
          document.addEventListener('mousedown', handleClickOutsideModal);
        } else {
          document.removeEventListener('mousedown', handleClickOutsideModal);
        }
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutsideModal);
        };
      }, [isOpen]);
      
    
}
