describe('Smoke tests', () => {
	beforeEach(() => {
		cy.request('GET', '/api/todos')
			.its('body')
			.each(todo => cy.request('DELETE', `/api/todos/${todo.id}`))
	})
	context('With no todos', () => {
		it.only('Saves new todos', () => {
			cy.visit('/');
			cy.focused()
				.should('have.class', 'new-todo')
		})
	})
});