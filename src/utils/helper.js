import {
    USA_STATE_AND_CITIES,
    COUNTIES,
    OCCUPATIONS,
    INDUSTRIES,
    NON_IMMIGRANT_VISA_TYPES,
    IMMIGRANT_VISA_TYPES,
    SOURCE_OF_FUNDS,
} from "./constants";

export const getStates = () => {
    let states = Object.keys(USA_STATE_AND_CITIES);
    states = [...new Set(states)];
    states = states.sort();
    return states.map(state => {
        return {
            label: state,
            value: state
        };
    });
};

export const getAllCities = () => {
    const states = Object.keys(USA_STATE_AND_CITIES);
    let cities = [];
    states.forEach(state => {
        cities = [...cities, ...USA_STATE_AND_CITIES[state]];
    });
    cities = [...new Set(cities)];
    cities.sort();
    return cities.map(city => {
        return {
            label: city,
            value: city
        };
    });
};

export const getCountries = () => {
    let countries = COUNTIES.map(country => country.name);
    countries = [...new Set(countries)];
    countries = countries.sort();
    return countries.map(country => {
        return {
            label: country,
            value: country
        };
    });
};

export const getIndustries = () => {
    return INDUSTRIES.map(industry => {
        return {
            label: industry,
            value: industry
        }
    });
};

export const getOccupations = () => {
    return OCCUPATIONS.map(occupation => {
        return {
            label: occupation,
            value: occupation
        }
    });
};

export const getNonImmigrantVisaTypes = () => {
    return NON_IMMIGRANT_VISA_TYPES.map(type => {
        return {
            label: type,
            value: type
        }
    });
};

export const getImmigrantVisaTypes = () => {
    return IMMIGRANT_VISA_TYPES.map(type => {
        return {
            label: type,
            value: type
        }
    });
};

export const getSourceOfFunds = () => {
    return SOURCE_OF_FUNDS.map(fund => {
        return {
            label: fund,
            value: fund
        }
    });
};

export const formatAmount = (value) => {
    if (!value) return '';
    value = value.toString();
    return value
        .replace(/,/g, '')
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const normalizeAmount = (value) => {
    return value.replace(/,/g, '');
};

export const formatSSN = (value) => {
    if (!value) return '';

    let val = value.replace(/\D/g, '');
    if (val.length > 9) {
        return val.replace(/^(\d\d\d)(\d{2})(\d{0,4}).*/, "$1-$2-$3");
    }

    let newVal = '';
    let sizes = [3, 2, 4];

    for (let i in sizes) {
        if (val.length > sizes[i]) {
            newVal += val.substr(0, sizes[i]) + '-';
            val = val.substr(sizes[i]);
        }
        else
            break;
    }

    newVal += val;
    return newVal;
};

