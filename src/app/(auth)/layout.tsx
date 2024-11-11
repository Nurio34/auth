import ProviderComponent from "./_components/Provider";

function layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <ProviderComponent />
            {children}
        </div>
    );
}

export default layout;
