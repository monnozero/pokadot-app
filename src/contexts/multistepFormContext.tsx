'use client'
import { ReactNode, createContext, useContext, useRef, useState } from 'react'


interface FormData {
  image: string,
  name: string
  description: string

  plan: string
  onlineService: boolean
  largerStorage: boolean
  customProfile: boolean
  userTotal: number
}

export interface UserData {
  image: string,
  name: string
  description: string

  plan: string
  onlineService: boolean
  largerStorage: boolean
  customProfile: boolean
  userTotal: number
}

interface MultiStepContextType {
  file: File | null
  user: UserData[]
  step: number
  isYear: boolean
  setFile: (file: File | null) => void;
  nextStep: () => void
  prevStep: () => void
  setPlan: () => void
  changePlan: () => void
  createUserData: (data: FormData) => void
}

export const MultiStepContext = createContext({} as MultiStepContextType)

interface MultiStepContextProviderProps {
  children: ReactNode
}

export function MultiStepContenxtProvider({
  children,
}: MultiStepContextProviderProps) {
  const [isYear, setIsYear] = useState(false)
  const [step, setStep] = useState(1)
  const [user, setUser] = useState<UserData[]>([])

  const [file, setFile] = useState<File | null>(null)


  function createUserData(data: FormData) {
    const newUser: UserData = {
      image: data.image,
      name: data.name,
      description: data.description,
      plan: data.plan,
      onlineService: data.onlineService,
      largerStorage: data.largerStorage,
      customProfile: data.customProfile,
      userTotal: data.userTotal,
    }
    setUser([...user, newUser])
    console.log(newUser)
  }
  function nextStep() {
    if (step === 3) return
    setStep((prev) => prev + 1)
  }
  function prevStep() {
    if (step === 1) return
    setStep((prev) => prev - 1)
  }
  function setPlan() {
    setIsYear((prev) => !prev)
  }
  function changePlan() {
    setStep((prev) => prev - 2)
  }

  return (
    <MultiStepContext.Provider
      value={{
        user,
        step,
        isYear,
        setPlan,
        nextStep,
        prevStep,
        changePlan,
        createUserData,
        file,
        setFile,
       
      }}
    >
      {children}
    </MultiStepContext.Provider>
  )
}

export const useMultiContext = () => useContext(MultiStepContext)
