const brand = [
    {
        'name': 'samsung',
        'country': 'korea',
        'color': ['red', 'blue'],
        'address':
        {
            'permanent': {
                'state': -3,
                'place': 'putalisadak'
            },
            'current': 'pok'
        }
    },
    {
        'name': 'apple',
        'country': 'usa',
        'color': ['red', 'purple'],
        'address':
        {
            'permanent': {
                'state': -63,
                'place': 'putalisadak'
            },
            'current': 'pok'
        }
    },
    {
        'name': 'vivo',
        'country': 'china',
        'color': ['black', 'blue'],
        'address':
        {
            'permanent': {
                'state': -53,
                'place': 'putalisadak'
            },
            'current': 'pok'
        }

    }

]
document.getElementById('no').innerHTML=brand[0].name;
console.log(Math.abs(brand[1].address.permanent.state))

