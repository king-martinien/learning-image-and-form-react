import {Component} from "react";
import {Car} from "./Car.jsx";

export class Form extends Component {

    state = {
        pseudo: "@100397 ☕",
        comment: "",
        currentColor: '',
        colors: ["#6b2737", "#3943b7", "#e08e45", "#0b032d", "#843b62", "#03b5aa", "#91171f", "#56cbf9", "#4d8b31", "#ff8427", "#ffc800", "#03440c", "#204e4a", "#e75a7c", "#007cbe"],
        size: 100,
        isFormValid: false
    }


    handleChangePseudo = ($event) => {
        const {comment, currentColor,} = this.state;
        this.setState({
            pseudo: $event.target.value,
            isFormValid: comment.length >= 1 && currentColor.length >= 1 && $event.target.value.length >= 1
        })
    }

    handleChangeColor = ($event) => {
        const {comment, pseudo,} = this.state;
        this.setState({
            currentColor: $event.target.value,
            isFormValid: pseudo.length >= 1 && comment.length >= 1 && $event.target.value.length >= 1
        })
    }

    handleChangeComment = ($event) => {
        const {currentColor, pseudo,} = this.state;
        this.setState({
            comment: $event.target.value,
            isFormValid: pseudo.length >= 1 && currentColor.length >= 1 && $event.target.value.length >= 1
        });
    }

    handleChangeCarSize = ($event) => {
        this.setState({
            size: $event.target.value
        })
    }
    handleFormSubmit = ($event) => {
        $event.preventDefault();
        const {pseudo, comment, currentColor, size,} = this.state;
        console.log(`${pseudo} ${comment} ${size} ${currentColor}`);
    }

    render() {
        const {pseudo, comment, colors, currentColor, size, isFormValid} = this.state;

        return (<div style={{width: "100%", maxWidth: "400px"}}>
            <Car size={size} color={currentColor ? currentColor : "#213547"}/>
            <h1 style={{color: currentColor}}>{pseudo}</h1>
            <p style={{color: currentColor, fontWeight: "600"}}>{comment}</p>
            <form>
                <div className="entry">
                    <label htmlFor={"pseudo"}>Pseudo</label>
                    <input type="text" name={"pseudo"} id={"pseudo"} value={pseudo}
                           onChange={this.handleChangePseudo}/>
                </div>
                <div className="entry">
                    <label htmlFor={"color"}>Color</label>
                    <select name={"color"} id={"color"} onChange={this.handleChangeColor}>
                        <option value={""}></option>
                        {colors.map((color, index) => {
                            return <option key={index} style={{backgroundColor: color}}
                                           value={color}>{color}</option>
                        })}
                    </select>
                </div>
                <div className="entry">
                    <label htmlFor={"size"}>Car size</label>
                    <input type={"range"} min={80} max={170} onChange={this.handleChangeCarSize}/>
                </div>

                <div className="entry">
                    <label htmlFor="comment">Comment</label>
                    <textarea name={"comment"} id={"comment"} cols={30} rows={6}
                              onChange={this.handleChangeComment}></textarea>
                </div>
                <button disabled={!isFormValid} onClick={this.handleFormSubmit} type={"button"}
                        style={{
                            backgroundColor: isFormValid ? currentColor : '',
                            color: isFormValid ? "white" : ''
                        }}>Save
                </button>
            </form>
        </div>);
    }
}