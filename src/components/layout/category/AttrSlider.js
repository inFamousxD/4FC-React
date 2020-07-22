import React from 'react';
import { InputNumber, InputGroup } from 'rsuite';
import { Slider } from '@material-ui/core';


const AttrSlider = ({ name, bounds, step, onChange }) => {
    const [value, setValue] = React.useState(bounds);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <Slider
                name={name}
                className="slider-class"
                style={{ marginTop: 16 }}
                value={value}
                onChange={handleChange}
                min={0}
                step={step}
                max={bounds[0]+bounds[1]}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
            />
            <InputGroup style={{ marginTop: '1rem' }}>
            <InputNumber
                min={0}
                max={bounds[0]+bounds[1]}
                step={step}
                value={value[0]}
                onChange={nextValue => {
                const [start, end] = value;
                console.log(start)
                setValue([nextValue, end]);
                }}
            />
            <InputGroup.Addon>to</InputGroup.Addon>
            <InputNumber
                min={0}
                max={bounds[0]+bounds[1]}
                step={step}
                value={value[1]}
                onChange={nextValue => {
                const [start, end] = value;
                console.log(end)
                setValue([start, nextValue]);
                }}
            />
            </InputGroup>
        </div>
    )
}

export default AttrSlider
