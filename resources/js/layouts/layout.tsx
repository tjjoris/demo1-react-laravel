import { NavUserInHeader } from "@/components/nav-user-in-header";
import { Dropdown } from "@/components/ui/lukes-dropdown";
import { Link } from "@inertiajs/react";

export default function Layout({ children }: { children: React.ReactNode }) {

    return (
        <div>
            <header>
                <nav>
                    <Dropdown
                        buttonText='lukes dropdown'
                        content={<p>hello world</p>}
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