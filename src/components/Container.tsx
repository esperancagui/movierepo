export const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-neutral-900 min-h-screen w-full">
            {children}
        </div>
    )
}