import { mount } from 'cypress/react18'; // Підключення React компонентів для тестування
import React from 'react';
import { MemoryRouter } from 'react-router-dom'; // Використовується для імітації маршрутизації
import Header from './index'; // Імпорт компонента Header

describe('Header Component Tests', () => {
    it('should render the header with the correct title', () => {
        mount(
            <MemoryRouter>
                <Header isNotSign={true} />
            </MemoryRouter>
        );
        cy.get('h1').contains('VBooks'); // Перевірка, чи заголовок "VBooks" відображається
    });

    it('should allow input to the search field', () => {
        mount(
            <MemoryRouter>
                <Header isNotSign={true} />
            </MemoryRouter>
        );
        cy.get('[data-testid="searchInput"]').type('Test Book'); // Тестування вводу в поле пошуку
        cy.get('[data-testid="searchInput"]').should('have.value', 'Test Book'); // Перевірка значення
    });

    it('should display the search input if user is not on Sign In or Sign Up pages', () => {
        mount(
            <MemoryRouter>
                <Header isNotSign={true} />
            </MemoryRouter>
        );
        cy.get('[data-testid="searchInput"]').should('exist'); // Перевірка наявності пошукового поля
    });

    it('should hide the search input if user is on Sign In or Sign Up pages', () => {
        mount(
            <MemoryRouter>
                <Header isNotSign={false} />
            </MemoryRouter>
        );
        cy.get('[data-testid="searchInput"]').should('not.exist'); // Перевірка відсутності пошукового поля
    });

    it('should render cart and user icons', () => {
        mount(
            <MemoryRouter>
                <Header isNotSign={true} />
            </MemoryRouter>
        );
        cy.get('a[href="/cart"]').should('exist'); // Перевірка наявності посилання на кошик
        cy.get('a[href="/sign-in"]').should('exist'); // Перевірка наявності посилання для входу
    });
});
