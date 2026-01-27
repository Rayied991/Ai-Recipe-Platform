import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'
import { Button } from './ui/button'

const Header = () => {
    return (
        <header className='fixed top-0 w-full border-b border-stone-200 bg-stone-50/80 backdrop-blur-md z-50 supports-backdrop-filter:bg-stone-50/60'>
            <nav className='container mx-auto px-4 h-16 flex items-center justify-between'>
                Logo

                <div>
                    nav links
                </div>

                <div className='flex items-center space-x-4'>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                        <SignInButton>
                            <Button
                                variant='ghost'
                                className="text-stone-600 hover:text-orange-600 hover:bg-orange-50 font-medium"
                            >
                                Sign In
                            </Button>
                        </SignInButton>
                        <SignUpButton>
                            <Button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                                Sign Up
                            </Button>
                        </SignUpButton>
                    </SignedOut>
                </div>
            </nav>
        </header>
    )
}

export default Header