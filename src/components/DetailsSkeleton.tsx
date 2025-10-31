import { Container } from './Container'
import { Header } from './Header'
import { Main } from './Main'

export const DetailsSkeleton = () => {
    return (
        <Container>
                        <Header />
                        <Main>
                            {/* Skeleton Hero Section */}
                            <div className="relative w-full h-[500px] mb-8 bg-neutral-800 animate-pulse" />
        
                            {/* Skeleton Conteúdo */}
                            <div className="px-6 md:px-12 lg:px-20 pb-20">
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                                    {/* Skeleton Poster */}
                                    <div className="lg:col-span-1">
                                        <div className="w-full aspect-2/3 bg-neutral-800 animate-pulse" />
                                    </div>
        
                                    {/* Skeleton Informações */}
                                    <div className="lg:col-span-2 space-y-8">
                                        {/* Skeleton Title */}
                                        <div className="h-8 bg-neutral-800 w-1/3 animate-pulse mb-4" />
        
                                        {/* Skeleton Text Lines */}
                                        <div className="space-y-3">
                                            <div className="h-4 bg-neutral-800 w-full animate-pulse" />
                                            <div className="h-4 bg-neutral-800 w-full animate-pulse" />
                                            <div className="h-4 bg-neutral-800 w-3/4 animate-pulse" />
                                        </div>
        
                                        {/* Skeleton Stats */}
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                            <div className="bg-neutral-800/50 p-4 animate-pulse h-24" />
                                            <div className="bg-neutral-800/50 p-4 animate-pulse h-24" />
                                            <div className="bg-neutral-800/50 p-4 animate-pulse h-24" />
                                        </div>
        
                                        {/* Skeleton Button */}
                                        <div className="h-14 bg-neutral-800 w-48 animate-pulse" />
                                    </div>
                                </div>
                            </div>
                        </Main>
                    </Container>
    )
}