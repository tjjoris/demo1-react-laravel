import Hello from "@/components/hello";
import { NavUserInHeader } from "@/components/nav-user-in-header";
import { Dropdown, DropdownItem } from "@/components/ui/lukes-dropdown";
import { Link, usePage, router } from "@inertiajs/react";
// import { SharedData } from "@/types";
import { LogIn, LogOut, Settings } from 'lucide-react';
// import { usePage } from '@inertiajs/react';
import { type SharedData } from '@/types';
import { logout, login } from '@/routes';
import { edit } from '@/routes/profile';
import { useMobileNavigation } from '@/hooks/use-mobile-navigation';

export default function Layout({ children }: { children: React.ReactNode }) {

    const cleanup = useMobileNavigation();

    const handleLogout = () => {
        cleanup();
        router.flushAll();
    };
    const items = [
        <Link className="block w-full" href={edit()} as="button" prefetch onClick={cleanup}>
            <Settings className="mr-2" />
            Settings
        </Link>,
        <Link className="block w-full" href={logout()} as="button" onClick={handleLogout}>
            <LogOut className="mr-2" />
            Log out
        </Link>];
    const { auth } = usePage<SharedData>().props;



    const doStuff = () => { };
    return (
        <div>
            <header>
                <nav>
                    {auth.user ?
                        <div>
                            <Dropdown
                                buttonText={auth.user?.name || "Anonymous"}
                                content={<>
                                    {
                                        items.map((item, index) => <DropdownItem
                                            // onClick={doStuff}
                                            key={index}>
                                            {item}
                                        </DropdownItem>)
                                    }</>}
                            />

                        </div>
                        :
                        <Link className="block w-full" href={login()} as="button">
                            <LogIn className="mr-2" />
                            Log out
                        </Link>
                    }
                    <Link className="nav-link" href="/">posts</Link>
                    <Link className="nav-link" href="/posts/create">Create</Link>
                </nav>
            </header>

            <main>
                {children}
            </main>
        </div>

    )
}