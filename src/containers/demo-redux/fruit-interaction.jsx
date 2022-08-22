import { addFruit, clearFruit } from '../../store/actions/fruit-action';
import { useDispatch } from 'react-redux';

const FruitInteraction = () => {

    const dispatch = useDispatch();

    const handleAddApple = () => {

        // Utiliser des données d'un formulaire
        const val = ((Math.random() * 50) + 100).toFixed(2);
        const apple = {
            family: 'Pomme',
            weight: `${val} gr`
        };

        // Créer une action "fruit/add" avec les données (pour redux)
        const actionAddApple = addFruit(apple);
        console.log(actionAddApple);

        // Envoyer l'action vers le store via le Dispatcher
        dispatch(actionAddApple);
    };

    const handleClear = () => {
        // Envoyer l'action "fruit/clear" dans le dispatcher
        dispatch(clearFruit());
    };

    return (
        <div>
            <button onClick={handleAddApple}>
                Ajouter une pomme
            </button>
            <button onClick={handleClear}>
                Vider la liste
            </button>
        </div>
    );
};

export default FruitInteraction;