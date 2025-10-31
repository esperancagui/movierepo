export const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className="fixed inset-0 bg-linear-to-b from-neutral-900 to-black -z-10" />
            <div className="relative min-h-screen w-full">
                {children}
            </div>
        </>
    )
}