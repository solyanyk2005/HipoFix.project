describe('Header E2E Tests', () => {
    beforeEach(() => {
        // Замість URL вкажіть актуальну адресу вашого проєкту
        cy.visit('http://localhost:5173'); // Оновіть порт, якщо ваш проєкт запускається на іншому
    });

    it('should render the header with the project title', () => {
        // Перевірка наявності header та відповідного заголовка
        cy.get('header').should('exist');
        cy.get('h1').contains('HipoFix'); // Замініть 'HipoFix' на ваш реальний заголовок, якщо потрібно
    });

    it('should navigate to services page when services link is clicked', () => {
        // Заміна на перевірку роботи посилання на сторінку послуг
        cy.get('a[href="/services"]').click(); 
        cy.url().should('include', '/services'); // Перевірте, чи URL містить "/services"
    });

    it('should navigate to contact page when contact link is clicked', () => {
        // Заміна на перевірку роботи посилання на сторінку контактів
        cy.get('a[href="/contact"]').click();
        cy.url().should('include', '/contact'); // Перевірте, чи URL містить "/contact"
    });

    it('should navigate to home page when logo is clicked', () => {
        // Перевірка переходу на головну сторінку при натисканні на логотип
        cy.get('a[href="/"]').click();
        cy.url().should('equal', 'http://localhost:5173/'); // Замініть URL, якщо ваша головна сторінка має інший шлях
    });
});
