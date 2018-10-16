describe('Input form', () => {
	beforeEach(() => {
		cy.seedAndVisit([]);
	});
	it('Focus input on load', () => {
		cy.focused()
			.should('have.class', 'new-todo');
	});

	it('Accepts input', () => {
		const text = 'Buy Milk';
		cy.get('.new-todo')
			.type(text).should('have.value', text);
	});

	context('Form submission', () => {
		const todoInput = '.new-todo';
		const todoListItems = '.todo-list li';

		beforeEach(() => {
			cy.server();
		});
		it('Adds a new todo on submit', () => {
			const toDoName = 'Buy eggs';
			cy.route('POST', '/api/todos', {
				name: toDoName,
				id: 1,
				isComplete: false
			})

			cy.get(todoInput)
				.type(toDoName)
				.type('{enter}')
				.should('have.value', '');

			cy.get(todoListItems)
				.should('have.length', 1)
				.and('contain', toDoName);

		});

		it('Shows an error message on a failed submission', () => {
			cy.route({
				url: '/api/todos',
				method: 'POST',
				status: 500,
				response: {}
			});

			cy.get(todoInput)
				.type('test{enter}');

			cy.get(todoListItems)
				.should('not.exist');

			cy.get('.error-message')
				.should('be.visible');
		});
	});
});