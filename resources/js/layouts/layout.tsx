import { NavUserInHeader } from "@/components/nav-user-in-header";
import { Dropdown, DropdownItem } from "@/components/ui/lukes-dropdown";
import { Link } from "@inertiajs/react";

export default function Layout({ children }: { children: React.ReactNode }) {
    const items = [1, 2, 3, 4, 5, 6, 7, 9];

    const doStuff = () => { };
    return (
        <div>
            <header>
                <nav>
                    <Dropdown
                        buttonText='lukes dropdown'
                        content={<>
                            {
                                items.map(item => <DropdownItem
                                    onClick={doStuff}
                                    key={item}>
                                    {`Item ${item}`}
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