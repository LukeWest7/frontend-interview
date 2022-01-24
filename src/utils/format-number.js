const moneyFormatter = new Intl.NumberFormat('en-UK', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
});

const penniesFormatter = new Intl.NumberFormat('en-UK', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});

export const formatNumber = (numberString, showPennies = false, withSymbol = false) => {
    if (numberString === '' || numberString === null) return '';
    let value = showPennies ? penniesFormatter.format(numberString) : moneyFormatter.format(numberString)
    if (!withSymbol) return value.substring(1);
    return value;
}