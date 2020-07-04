import React from 'react';
import classes from './Car.module.css';
import PropTypes from 'prop-types';
import widthClass from '../hoc/widthClass';

class Car extends React.Component {

    constructor(props) {
        super(props);

        this.inputRef = React.createRef();
    }

    componentDidMount() {
        if (this.props.index === 0) {
            this.inputRef.current.focus()
        }
    }

    render() {
       const inputClasses = [classes.input];

        if (this.props.name !== '') {
            inputClasses.push(classes.green)
        } else {
            inputClasses.push(classes.red)
        }

        if (this.props.name.length > 4) {
            inputClasses.push(classes.bold)
        }

        return (
            <React.Fragment>
                <h3>Car name: {this.props.name}</h3>
                <p>Number: <strong>{this.props.year}</strong></p>
                <input
                    ref={this.inputRef}
                    type='text'
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                    className={inputClasses.join(' ')}
                />
                <button onClick={this.props.onDelete}>Delete</button>
            </React.Fragment>
        )
    }
}

Car.propTypes = {
    name: PropTypes.string.isRequired,
    year: PropTypes.number,
    index: PropTypes.number,
    onChangeName: PropTypes.func,
    onDelete: PropTypes.func
};

export default widthClass(Car, classes.Car);










