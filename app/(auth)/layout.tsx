import { ClerkProvider } from "@clerk/nextjs"
import { ReactNode } from "react"

const AuthLayout = ({ children }: { children: ReactNode }) => {
    return (
        <ClerkProvider>
            <div className="w-full min-h-screen bg-dark-1">
                {children}
            </div>
        </ClerkProvider>
    )
}

export default AuthLayout