import BackgroundImage from "./components/BackgroundImage";
import Header from "./components/Header";
import Main from "./components/Main";

export default function Home() {
    return (
        <div className=" text-white">
            <BackgroundImage />
            <Header />
            <Main />
        </div>
    );
}
