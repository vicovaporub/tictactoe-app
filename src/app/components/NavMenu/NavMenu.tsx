'use client'
import { useSession } from "next-auth/react"
import { AuthButton } from "../AuthButton/AuthButton"
import '@/app/components/NavMenu/NavMenu.css'


export const NavMenu = () => {
    const { data: session } = useSession()

 return (
    <div className="nav-container">
    {session ? (
      <>
        <div className="user-info">
        <img className="user-pic"
                src={`${session?.user?.image}`}
                alt="user pic" />
          {session?.user?.name}
          </div>
        <div className="nav-buttons">
          <AuthButton />
        </div>
      </>
    ) : (
      <div className="nav-buttons">
        <AuthButton />
      </div>
    )}
  </div>
 )
    }

