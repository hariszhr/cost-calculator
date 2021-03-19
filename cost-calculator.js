const discount_rates = {
    1000: 3,
    5000: 5,
    7000: 7,
    10000: 10
};
Object.freeze(discount_rates);

const prov_tax_rates = {
    "AB": 5,
    "ON": 13,
    "QC": 14.975,
    "MI": 6,
    "DE": 0
};
Object.freeze(prov_tax_rates);

export function calculate(num_of_items, cost_per_item, province){
    num_of_items = Number(num_of_items);
    cost_per_item = Number(cost_per_item);
    if (!num_of_items || num_of_items <= 0 || num_of_items > 1000000000000) {
        throw new TypeError(`invalid num_of_items: ${num_of_items}`);
    }
    if (!cost_per_item || cost_per_item <= 0 || cost_per_item > 1000000000000) {
        throw new TypeError(`invalid cost_per_item: ${cost_per_item}`);
    }
    if (typeof province != "string" || get_tax_rate(province) === null || province.length > 10 
        || ! /^[a-zA-Z\s]+$/.test(province)) {
        throw new TypeError(`invalid province: ${province}`);
    }

    console.log(`Input:  ${num_of_items} items, $${cost_per_item} per item, ${province}`);    
    let gross_cost = num_of_items*cost_per_item; // gross price
    let tax_rate = get_tax_rate(province); // get tax rate
    let discount_rate = get_discount_rate(gross_cost); // get discount rate
    let final_cost = gross_cost - (gross_cost*(discount_rate/100)); // discount applied
    final_cost = final_cost + (final_cost*(tax_rate/100)); // tax applied
    console.log(`Output: $${final_cost}`);
    return final_cost;
}


function get_discount_rate(cost){
    let sorted_keys =Object.keys(discount_rates).sort((a, b)=>{
        return a-b;
    });
    let rate = 0;
    for(let i=0; i< sorted_keys.length; i++){
        if(cost >= sorted_keys[i]){
            rate = discount_rates[sorted_keys[i]];
        } else {
            break;
        }
    }
    return rate;
}

function get_tax_rate(province){
    for(const[k, v] of Object.entries(prov_tax_rates)){
        if(province.toLowerCase().trim() === k.toLowerCase().trim()) return v;
    }
    return null;
}

