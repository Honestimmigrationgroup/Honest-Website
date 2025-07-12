"use client"

import { createContext, useState, useContext, type ReactNode } from "react"

interface ContactContextProps {
  isContactOpen: boolean
  setIsContactOpen: (open: boolean) => void
}

const ContactContext = createContext<ContactContextProps>({
  isContactOpen: false,
  setIsContactOpen: () => {},
})

interface ContactProviderProps {
  children: ReactNode
}

export const ContactProvider = ({ children }: ContactProviderProps) => {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return <ContactContext.Provider value={{ isContactOpen, setIsContactOpen }}>{children}</ContactContext.Provider>
}

export const useContact = () => useContext(ContactContext)
