import { Button } from '@/components/ui/button'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import Navigation from './navigation'
export default async  function Header() {

  return (
    <header className="w-full flex items-center py-4 ">
      <div className="container w-full  flex items-center justify-between">
        <Link href="/">
        <h1 className="text-3xl font-extrabold">ARSENAL <span className="font-light">GÖTEBORG</span></h1>
        </Link>
     <Navigation />
     <SignedOut>

     <SignInButton mode='modal'>
     <Button>Logga in</Button>
      </SignInButton>
     
    </SignedOut>
    <SignedIn>
      <UserButton />

    </SignedIn>
     <div>
   
      </div>
      </div>
    </header>
  )
}
