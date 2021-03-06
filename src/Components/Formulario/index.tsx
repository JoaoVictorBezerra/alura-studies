import React from "react";
import Button from "../Button";

class Formulario extends React.Component {
    render() {
        return (
            <form>
                <div>
                    <label htmlFor="tarefa">Adicione um novo estudo</label>
                    <input type="text" name="tarefa" id="tarefa" placeholder="O que você quer estudar" required></input>
                </div>
                <div>
                    <label htmlFor="tempo">Tempo</label>
                    <input type="time" id="tempo" name="tempo" step="1" min="00:00:00" max="01:30:00" required></input>
                </div>
                <Button />
            </form>
        )
    }
}
export default Formulario;