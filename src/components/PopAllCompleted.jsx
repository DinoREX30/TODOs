import React, { useState } from 'react';

export default function PopAllCompleted(props) {
  const [isOpen, setIsOpen] = useState(true) // Estado para controlar si el popup está abierto o cerrado

  const handleClose = () => {
    setIsOpen(false); // Función para cerrar el popup
  }

  // Renderizar el popup solo si isOpen es true
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h1 className="text-lg font-semibold">TODOs completados!!</h1>
                  <button className="text-gray-500 hover:text-gray-700 focus:outline-none" onClick={handleClose}>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <p className="text-gray-700">Congratulations!! All activities are completed, you should take a break</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
