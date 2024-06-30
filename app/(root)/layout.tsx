import { ClerkProvider } from "@clerk/nextjs"
import { ReactNode } from "react"

const HomeLayout = ({ children }: { children: ReactNode }) => {
    return (
        <ClerkProvider>
            <div>
                {children}
            </div>
        </ClerkProvider>
    )
}

export default HomeLayout