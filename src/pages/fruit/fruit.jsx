import TitlePage from '../../components/title-page/title-page';
import FruitDisplay from '../../containers/demo-redux/fruit-display';
import FruitInteraction from '../../containers/demo-redux/fruit-interaction';


const Fruit = () => {
    return (
        <>
            <TitlePage>
                Demo Redux (Avec des fruits :o)
            </TitlePage>
            <FruitInteraction />
            <FruitDisplay />
        </>
    );
};

export default Fruit;