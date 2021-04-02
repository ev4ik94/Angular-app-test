
const income = 'income';
const outcome = 'outcome';
const loan = 'loan';
const investment = 'investment';


export const data = [
  {
    type: income,
    _id: 1,
    amount: 1000000,
    name: {
      first: 'Evelina',
      last: 'Inogamova'
    },
    company: 'Madetec',
    email: 'evelina9449@gmail.com',
    phone: '+ 7 926 896-05-14',
    address: 'Uzbekistan Tashkent uchtepa 25-5-87'
  },
  {
    type: income,
    _id: 2,
    amount: 50000,
    name: {
      first: 'Rauf',
      last: 'Ahadov'
    },
    company: 'Artel',
    email: 'rauf948@gmail.com',
    phone: '+ 7 926 896-55-24',
    address: 'Uzbekistan Tashkent chilanzar 1-8-55'
  },
  {
    type: income,
    _id: 3,
    amount: 150000,
    name: {
      first: 'Mariya',
      last: 'Andrusenko'
    },
    company: 'Artel',
    email: 'mariya94@gmail.com',
    phone: '+ 7 926 896-25-05',
    address: 'Uzbekistan Tashkent chilanzar 9-8-5'
  },
  {
    type: income,
    _id: 4,
    amount: 550000,
    name: {
      first: 'Aleksandra',
      last: 'Rodionova'
    },
    company: 'Madetec',
    email: 'aleks9559@gmail.com',
    phone: '+ 7 926 896-45-34',
    address: 'Uzbekistan Tashkent uchtepa 24-3-96'
  },
  {
    type: income,
    _id: 5,
    amount: 850000,
    name: {
      first: 'Uliya',
      last: 'Shamsutdinova'
    },
    company: 'East Telecom',
    email: 'jule88@gmail.com',
    phone: '+ 7 926 556-45-34',
    address: 'Uzbekistan Tashkent uchtepa 25-3-80'
  },
  {
    type: income,
    _id: 6,
    amount: 850000,
    name: {
      first: 'Uliya',
      last: 'Shamsutdinova'
    },
    company: 'East Telecom',
    email: 'jule88@gmail.com',
    phone: '+ 7 926 556-45-34',
    address: 'Uzbekistan Tashkent uchtepa 25-3-80'
  },
  {
    type: outcome,
    _id: 7,
    amount: 500000,
    name: {
      first: 'Uliya',
      last: 'Shamsutdinova'
    },
    company: 'East Telecom',
    email: 'jule88@gmail.com',
    phone: '+ 7 926 556-45-34',
    address: 'Uzbekistan Tashkent uchtepa 25-3-80'
  },
  {
    type: outcome,
    _id: 7,
    amount: 8500000,
    name: {
      first: 'Galina',
      last: 'Inogamova'
    },
    company: 'Biti Production',
    email: 'galina78@gmail.com',
    phone: '+ 7 926 506-42-34',
    address: 'Uzbekistan Tashkent karasu 6-1'
  },
  {
    type: outcome,
    _id: 8,
    amount: 8500000,
    name: {
      first: 'Evelina',
      last: 'Inogamova'
    },
    company: 'Madetec',
    email: 'evelina9449@gmail.com',
    phone: '+ 7 926 896-05-14',
    address: 'Uzbekistan Tashkent uchtepa 25-5-87'
  },
  {
    type: outcome,
    _id: 9,
    amount: 2500000,
    name: {
      first: 'Vecheslav',
      last: 'Razvalyaev'
    },
    company: 'Artel',
    email: 'vecheslav90@gmail.com',
    phone: '+ 7 926 296-00-14',
    address: 'Uzbekistan Tashkent uchtepa 23-2-57'
  },
  {
    type: loan,
    _id: 10,
    amount: 12500000,
    name: {
      first: 'Vecheslav',
      last: 'Razvalyaev'
    },
    company: 'Artel',
    email: 'vecheslav90@gmail.com',
    phone: '+ 7 926 296-00-14',
    address: 'Uzbekistan Tashkent uchtepa 23-2-57'
  },
  {
    type: loan,
    _id: 11,
    amount: 5000,
    name: {
      first: 'Michel',
      last: 'Fox'
    },
    company: 'Invest',
    email: 'm.f123@gmail.com',
    phone: '+7 3842 12-27-84',
    address: ' Kemerovo Ul Radishcheva, bld. 4, appt. 52'
  },
  {
    type: loan,
    _id: 12,
    amount: 12000,
    name: {
      first: 'Elena',
      last: 'Dolmatova'
    },
    company: 'Lawnscape Garden Maintenance',
    email: 'm.f123@gmail.com',
    phone: '+ 510-757-4459',
    address: 'San Francisco, California(CA), 94108'
  },
  {
    type: loan,
    _id: 13,
    amount: 22000,
    name: {
      first: 'Olga',
      last: 'Sadekova'
    },
    company: 'Lawnscape Garden Maintenance',
    email: '0skbego42frh@temporary-mail.net@gmail.com',
    phone: '+7 495 593-65-84',
    address: ' Moskva, Lyusinovskaya Ul., bld. 48//50, appt. 536'
  },
  {
    type: investment,
    _id: 14,
    amount: 2500000,
    name: {
      first: 'Olga',
      last: 'Sadekova'
    },
    company: 'Lawnscape Garden Maintenance',
    email: '0skbego42frh@temporary-mail.net@gmail.com',
    phone: '+7 495 593-65-84',
    address: ' Moskva, Lyusinovskaya Ul., bld. 48//50, appt. 536'
  },
  {
    type: investment,
    _id: 15,
    amount: 5500000,
    name: {
      first: 'Elena',
      last: 'Dolmatova'
    },
    company: 'Lawnscape Garden Maintenance',
    email: 'm.f123@gmail.com',
    phone: '+ 510-757-4459',
    address: 'San Francisco, California(CA), 94108'
  },
  {
    type: investment,
    _id: 16,
    amount: 2500,
    name: {
      first: 'Vecheslav',
      last: 'Razvalyaev'
    },
    company: 'Artel',
    email: 'vecheslav90@gmail.com',
    phone: '+ 7 926 296-00-14',
    address: 'Uzbekistan Tashkent uchtepa 23-2-57'
  },
  {
    type: investment,
    _id: 17,
    amount: 8500,
    name: {
      first: 'Rauf',
      last: 'Ahadov'
    },
    company: 'Artel',
    email: 'rauf948@gmail.com',
    phone: '+ 7 926 896-55-24',
    address: 'Uzbekistan Tashkent chilanzar 1-8-55'
  },
  {
    type: investment,
    _id: 18,
    amount: 28500,
    name: {
      first: 'Mariya',
      last: 'Andrusenko'
    },
    company: 'Artel',
    email: 'mariya94@gmail.com',
    phone: '+ 7 926 896-25-05',
    address: 'Uzbekistan Tashkent chilanzar 9-8-5'
  },
  {
    type: investment,
    _id: 19,
    amount: 28500,
    name: {
      first: 'Robert',
      last: 'Mironov'
    },
    company: 'Galaxy',
    email: 'robertt@gmail.com',
    phone: '+7 4942 47-56-95',
    address: 'Kostroma, Severnoy Pravdy Ul., bld. 32, appt. 96'
  },
  {
    type: investment,
    _id: 20,
    amount: 898500,
    name: {
      first: 'Macintosh',
      last: 'Jobs'
    },
    company: 'Galaxy',
    email: 'robertt@gmail.com',
    phone: '+7 8652 78-03-93',
    address: 'Stavropol, Makarova Per., bld. 8/1, appt. 566'
  }
];
