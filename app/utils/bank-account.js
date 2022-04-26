export const deposit = (data) => {
    const { bankAccount, amount } = data;
    bankAccount.balance = bankAccount.balance + amount

    return bankAccount.balance
}