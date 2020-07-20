import React from 'react';
import { RangeSlider, InputNumber, InputGroup } from 'rsuite';


const AttrSlider = () => {
    const [value, setValue] = React.useState([1000, 9000]);
    return (
        <div>
            <RangeSlider
                progress
                className="slider-class"
                min={0}
                max={10000}
                step={100}
                style={{ marginTop: 16 }}
                value={value}
                onChange={value => {
                    setValue(value);
                }}
            />
            <InputGroup style={{ marginTop: '1rem' }}>
            <InputNumber
                min={0}
                max={10000}
                step={100}
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
                max={10000}
                step={100}
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
