interface HeaderProps{
    children: React.ReactNode;
}

export const Header = ({children}:HeaderProps)=>{
    return (
        <header className="flex flex-1 gap-3 items-center m-0">
            {children}
        </header>
    )
}