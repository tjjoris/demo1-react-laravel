import { Link } from "@inertiajs/react";
//using Link instead of anchor tag so server does not need to reload the page.

export default function Layout({ children }: { children: React.ReactNode }) {

    return (
        <div>
            <header>
                <nav>
                    <Link className="nav-link" href="hello">hello</Link>
                    <Link className="nav-link" href="/create">Create</Link>
                </nav>
            </header>

            <main>
                {children}
            </main>
        </div>

    )
}