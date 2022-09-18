import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../ErrorBoundary/ErrorBounday";

import decoration from '../../resources/img/vision.png';
import { useState } from "react";

const App = () => {

    const [selectedChar, setChar] = useState(null);

    const onChartSelected = (id) => setChar(id);

    return (
        <div className="app">
            <ErrorBoundary>
            <AppHeader/>
            <main>
                <RandomChar />
                <div className="char__content">
                    <CharList onChartSelected={onChartSelected}/>
                    <CharInfo charId={selectedChar}/>
                </div>
                <img className="bg-decoration" src={decoration} alt="vision"/>
            </main>
            </ErrorBoundary>
        </div>
    )
}

export default App;