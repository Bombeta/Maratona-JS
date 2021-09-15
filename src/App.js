import React from 'react';

const App = () => {
    return (<div className="container">
        <div className="valid-keys">
            
            <span className="matched">Bom</span>
            <span className="remainder">Beta</span>            
        </div>
        <div className="typed-keys">asdfbomasf</div>
        <div className="completed-words">
            <ol>
                <li>cidade</li>
                <li>carro</li>
                <li>profissional</li>
            </ol>
            </div>
    </div>)
};

// matched - guarda digitado certo
// remainder - oque falta digitar

// typed keys - qoue foi digitado
// completed-words - guarda a palavra digitada

export default App;