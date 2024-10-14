import Link from "next/link";

export default function NotFound() {
    return <section class="not_found">
        <h1>404 ! Not Found</h1>
        <Link href="/">Back to home</Link>
    </section>
}