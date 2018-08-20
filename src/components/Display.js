import React from 'react';
import PropTypes from 'prop-types';
import Time from '../lib/Time';

const Display = (props) => {
	const time = new Time();

	const onChange = event => {
		props.onSecondsChanged(event.target.value);
	};

	const runningDisplayStyle = {
		postion: 'absolute',
		top: 100,
		color: props.time <= 1000 ? '#FE5C5C' : ''
	};
	// Conditional rendering
	return (
		<div className="display" style={{postion: 'relative'}}>
			 {
                props.status === 'started'
                && <div className="display-time align-self-center" style={runningDisplayStyle}>
                    {time.getTime(props.time)}
                </div>
            }
            {
                props.status !== 'started' &&
                <div className="d-flex flex-column">
                    <div className="text-info h6 align-self-center" style={{ position: 'absolute', top: 60 }}>
                        {time.getTime(props.time)}
                    </div>
                    <input className="display-time align-self-center" style={{ position: 'absolute', top: 100 }}
                        maxLength="6" value={props.seconds}
                        onChange={onChange} />
                </div>
            }
            <div style={{ position: 'absolute', bottom: 0, left: '-10px' }}>
                {props.children}
            </div>
		</div>
	)
}

Display.defaultProps = {
	seconds: 0,
	status: null,
	timer: 0,
	onSecondsChanged: (event) => console.log(event.target.value)
};

Display.propTypes = {
	children: PropTypes.element,
	seconds: PropTypes.number.isRequired,
	status: PropTypes.string,
    time: PropTypes.number,
   	onSecondsChanged: PropTypes.func
};

export default Display;