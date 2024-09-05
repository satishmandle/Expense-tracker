
document.getElementById('add-expense').addEventListener('click', function() {
    const name = document.getElementById('expense-name').value;
    const amount = parseFloat(document.getElementById('expense-amount').value);
    const category = document.getElementById('expense-category').value;

    if (name && amount && !isNaN(amount)) {
        const expenseItem = document.createElement('li');
        expenseItem.innerHTML = `${name} - $${amount.toFixed(2)} <span>(${category})</span>`;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            expenseItem.remove();
            updateTotal();
        });

        expenseItem.appendChild(deleteButton);
        document.getElementById('expenses').appendChild(expenseItem);

        updateTotal();

        document.getElementById('expense-name').value = '';
        document.getElementById('expense-amount').value = '';
    }
});

function updateTotal() {
    const expenses = document.getElementById('expenses').children;
    let total = 0;

    for (let expense of expenses) {
        const amountText = expense.textContent.match(/\$\d+\.\d{2}/)[0].replace('$', '');
        total += parseFloat(amountText);
    }

    document.getElementById('total-amount').textContent = `$${total.toFixed(2)}`;
}
