export default function ComingSoonPage() {
    return (
        <>
            <div>
                <div className="z-100">
                    <section
                        className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
                        <div className="px-4 text-center">
                            <h1 className="mb-6 text-5xl leading-tight font-extrabold md:text-6xl lg:text-6xl">
                                Welcome to MonoUI ⚡
                            </h1>
                            <p className="mx-auto mb-8 max-w-2xl text-2xl font-extrabold">
                                We&apos;re updating a few things and will be available soon. Stay tuned
                                for updates!
                            </p>
                        </div>
                        <div
                            className="absolute -top-10 -left-10 hidden h-80 w-80 animate-pulse rounded-full bg-gradient-to-br from-purple-300 to-transparent opacity-20 blur-3xl md:block"></div>
                        <div
                            className="absolute -right-10 -bottom-10 hidden h-80 w-80 animate-pulse rounded-full bg-gradient-to-br from-yellow-300 to-transparent opacity-20 blur-3xl md:block"></div>
                    </section>
                </div>
            </div>
        </>
    );
}
