import React from 'react';
import Contact from './Contact';

function App () {
	return (
		<div className='contacts'>
			<Contact
				image='src/images/mr-whiskerson.png'
				name='Mr. Whiskerson'
				phone='(212) 555-1234'
				email='mr.whiskaz@catnap.meow'
			/>
		</div>
	);
}

export default App;
