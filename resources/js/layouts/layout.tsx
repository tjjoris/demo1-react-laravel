import Hello from "@/components/hello";
import { NavUserInHeader } from "@/components/nav-user-in-header";
import { Dropdown, DropdownItem } from "@/components/ui/lukes-dropdown";
import { Link, usePage } from "@inertiajs/react";
// import { SharedData } from "@/types";
import { LogOut, Settings } from 'lucide-react';
// import { usePage } from '@inertiajs/react';
import { type SharedData } from '@/types';

export default function Layout({ children }: { children: React.ReactNode }) {
    const items = [<Settings />, <LogOut />];
    const { auth } = usePage<SharedData>().props;


    const doStuff = () => { };
    return (
        <div>
            <header>
                <nav>
                    <Dropdown
                        buttonText={auth.user?.name || "Anonymous"}
                        content={<>
                            {
                                items.map((item, index) => <DropdownItem
                                    onClick={doStuff}
                                    key={index}>
                                    {item}
                                </DropdownItem>)
                            }</>}
                    />
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