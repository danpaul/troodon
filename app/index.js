import React from 'react'

export default ({ Server, Router, Root }) => {
	Router.get['/'] = (args) => {
		console.log('in app router', args)
	}
	Root(({ data }) => {
		// console.log('app/index root called')
		return <div>this is foo: {data.get('foo')} </div>
	}, {
		foo: 'bar'
	})
	// Root(({ data }) => {
	// 	console.log('in app!!!')
	// 	// return <div>asdf</div>
	// }, {foo: 'bar'})
}
