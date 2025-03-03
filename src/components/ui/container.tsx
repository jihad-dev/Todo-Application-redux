import { ReactNode } from "react";

type containerProps ={
    children: ReactNode
}

const Container = ({children} : containerProps) => {
    return (
        <div className="h-screen w-full max-w-7xl mx-auto">
            {children}
        </div>
    );
};

export default Container;