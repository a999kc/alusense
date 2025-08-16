import Header from "@components/Header/Header";
import Offer from "@components/AnP/Offer";
import Alusense from "@components/Alusense/Alusense";
import PoglianoSection from "@components/Pogliano/Pogliano";
import Footer from "@components/Footer/Footer";

const MainPage = () => {
    return (
        <>
            <Header />
            <Offer />
            <Alusense/>
            <PoglianoSection/>
            <Footer/>
        </>
    );
};

export default MainPage;