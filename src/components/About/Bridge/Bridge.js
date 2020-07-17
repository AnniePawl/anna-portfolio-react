import React from 'react';
import './styles/Bridge.scss';
import bridge from '../../../assets/bridge.svg';

function Bridge() {
	return (
		<div>
			{/* Bridge SVG */}
			<div className="bridge">
				<img alt="bridge" src={bridge} />
			</div>

			{/* Fog */}
			{/* <div className="fog">
        <div class="fog__img fog__img__first"></div>
        <div class="fog__img fog__img__second"></div>
      </div> */}
		</div>
	);
}

export default Bridge;
