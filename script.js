$(document).ready(function() {
    // Mock data for items, should replace with actual API call
    const items = [
        { id: 'T4_ORE', name: 'Tier 4 Ore', value: 120 },
        { id: 'T5_ORE', name: 'Tier 5 Ore', value: 240 },
        { id: 'T6_ORE', name: 'Tier 6 Ore', value: 360 },
        { id: 'T7_ORE', name: 'Tier 7 Ore', value: 480 },
        { id: 'T8_ORE', name: 'Tier 8 Ore', value: 600 }
    ];

    const itemSelect = $('#itemSelect');
    items.forEach(item => {
        itemSelect.append(new Option(item.name, item.id));
    });

    itemSelect.change(function() {
        const selectedItem = $(this).val();
        const selectedItemData = items.find(item => item.id === selectedItem);
        $('#itemValue').val(selectedItemData.value);
    });

    $('#calculateButton').click(function() {
        const itemValue = parseFloat($('#itemValue').val());
        const productPrice = parseFloat($('#productPrice').val());
        const resourcesCosts = parseFloat($('#resourcesCosts').val());
        const returnRate = parseFloat($('#returnRate').val());
        const craftAmount = parseFloat($('#craftAmount').val());

        const fee = itemValue * 0.1125;
        const profit = (productPrice - resourcesCosts + (resourcesCosts / 100 * returnRate) - fee) * craftAmount;
        const profitPercentage = ((profit / (resourcesCosts * craftAmount)) * 100).toFixed(2);

        $('#fee').text(fee.toFixed(2));
        $('#profit').text(profit.toFixed(2));
        $('#profitPercentage').text(profitPercentage + '%');
    });
});
