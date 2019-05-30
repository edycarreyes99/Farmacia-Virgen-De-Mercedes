import {Component, OnInit, ViewChild} from '@angular/core';

// se importan los modulos para el data table
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

// se define una interfaz para los datos contenidos por la tabla
export interface PeriodicElement {
  Codigo: string;
  Nombre: string;
  Presentacion: string;
  Laboratorio: string;
  Sitio: string;
  Existencia: number;
  Precio: string;
  Vencimiento: string;
}

// se inicializa un arreglo de tipo PeriodicElent que contendra todos los datos a mostrar en la tabla
const ELEMENT_DATA: PeriodicElement[] = [
  {
    Codigo: '75847-3001',
    Nombre: 'Beets - Candy Cane, Organic',
    Presentacion: '723-92-8863',
    Laboratorio: 'Björn',
    Sitio: 'BNS',
    Existencia: 34,
    Precio: '$31.05',
    Vencimiento: '12/2/2018'
  },
  {
    Codigo: '68788-9035',
    Nombre: 'Worcestershire Sauce',
    Presentacion: '895-13-6302',
    Laboratorio: 'Åsa',
    Sitio: 'FRC^H',
    Existencia: 92,
    Precio: '$66.91',
    Vencimiento: '3/12/2019'
  },
  {
    Codigo: '64680-0001',
    Nombre: 'Hipnotiq Liquor',
    Presentacion: '829-41-7859',
    Laboratorio: 'Thérèse',
    Sitio: 'VECO',
    Existencia: 9,
    Precio: '$58.22',
    Vencimiento: '4/2/2019'
  },
  {
    Codigo: '37808-179',
    Nombre: 'Salmon - Canned',
    Presentacion: '710-03-7259',
    Laboratorio: 'Véronique',
    Sitio: 'VKQ',
    Existencia: 86,
    Precio: '$60.92',
    Vencimiento: '8/10/2018'
  },
  {
    Codigo: '64942-1049',
    Nombre: 'Bread Base - Gold Formel',
    Presentacion: '134-79-3576',
    Laboratorio: 'Clémence',
    Sitio: 'ADP',
    Existencia: 16,
    Precio: '$20.62',
    Vencimiento: '12/31/2018'
  },
  {
    Codigo: '55154-1926',
    Nombre: 'Juice - Clam, 46 Oz',
    Presentacion: '874-91-2722',
    Laboratorio: 'Bénédicte',
    Sitio: 'BABA',
    Existencia: 11,
    Precio: '$51.12',
    Vencimiento: '12/15/2018'
  },
  {
    Codigo: '28851-691',
    Nombre: 'Wine - Fat Bastard Merlot',
    Presentacion: '858-44-1840',
    Laboratorio: 'Dafnée',
    Sitio: 'STMP',
    Existencia: 67,
    Precio: '$48.63',
    Vencimiento: '7/31/2018'
  },
  {
    Codigo: '76229-234',
    Nombre: 'Olives - Stuffed',
    Presentacion: '369-37-4745',
    Laboratorio: 'Gaëlle',
    Sitio: 'RPAI^A',
    Existencia: 62,
    Precio: '$93.07',
    Vencimiento: '3/16/2019'
  },
  {
    Codigo: '76329-3339',
    Nombre: 'Wine - Red, Harrow Estates, Cab',
    Presentacion: '404-16-0544',
    Laboratorio: 'Chloé',
    Sitio: 'ECCB',
    Existencia: 4,
    Precio: '$1.28',
    Vencimiento: '7/19/2018'
  },
  {
    Codigo: '36987-3225',
    Nombre: 'Water - Spring 1.5lit',
    Presentacion: '334-33-7771',
    Laboratorio: 'Andrée',
    Sitio: 'XBKS',
    Existencia: 87,
    Precio: '$91.11',
    Vencimiento: '1/10/2019'
  },
  {
    Codigo: '55910-478',
    Nombre: 'Pomello',
    Presentacion: '816-61-4423',
    Laboratorio: 'Léonore',
    Sitio: 'MFC',
    Existencia: 35,
    Precio: '$35.69',
    Vencimiento: '10/5/2018'
  },
  {
    Codigo: '54569-5945',
    Nombre: 'Muffin Mix - Raisin Bran',
    Presentacion: '431-99-5835',
    Laboratorio: 'Loïs',
    Sitio: 'MER^P',
    Existencia: 100,
    Precio: '$28.91',
    Vencimiento: '4/2/2019'
  },
  {
    Codigo: '24236-217',
    Nombre: 'Turnip - White, Organic',
    Presentacion: '508-67-3728',
    Laboratorio: 'Laïla',
    Sitio: 'GM',
    Existencia: 46,
    Precio: '$76.84',
    Vencimiento: '8/15/2018'
  },
  {
    Codigo: '63459-412',
    Nombre: 'Monkfish Fresh - Skin Off',
    Presentacion: '622-70-4994',
    Laboratorio: 'Thérèsa',
    Sitio: 'SSW',
    Existencia: 55,
    Precio: '$24.07',
    Vencimiento: '7/24/2018'
  },
  {
    Codigo: '0603-1685',
    Nombre: 'Bread - Raisin Walnut Oval',
    Presentacion: '139-72-8580',
    Laboratorio: 'Maïlys',
    Sitio: 'SLP',
    Existencia: 34,
    Precio: '$44.92',
    Vencimiento: '12/28/2018'
  },
  {
    Codigo: '0268-6197',
    Nombre: 'Liqueur Banana, Ramazzotti',
    Presentacion: '126-12-8526',
    Laboratorio: 'Illustrée',
    Sitio: 'FSLR',
    Existencia: 15,
    Precio: '$85.30',
    Vencimiento: '10/31/2018'
  },
  {
    Codigo: '66184-143',
    Nombre: 'Bread - Roll, Canadian Dinner',
    Presentacion: '695-26-9510',
    Laboratorio: 'Laurélie',
    Sitio: 'INTU',
    Existencia: 34,
    Precio: '$76.58',
    Vencimiento: '8/16/2018'
  },
  {
    Codigo: '16714-402',
    Nombre: 'Paper Towel Touchless',
    Presentacion: '405-01-1578',
    Laboratorio: 'Loïca',
    Sitio: 'MOFG',
    Existencia: 42,
    Precio: '$78.23',
    Vencimiento: '4/4/2019'
  },
  {
    Codigo: '16853-1305',
    Nombre: 'Jello - Assorted',
    Presentacion: '542-86-2943',
    Laboratorio: 'Miléna',
    Sitio: 'JCAP',
    Existencia: 63,
    Precio: '$72.70',
    Vencimiento: '7/14/2018'
  },
  {
    Codigo: '50436-6363',
    Nombre: 'Sour Puss - Tangerine',
    Presentacion: '837-49-8676',
    Laboratorio: 'Torbjörn',
    Sitio: 'PCRX',
    Existencia: 82,
    Precio: '$28.34',
    Vencimiento: '3/1/2019'
  },
  {
    Codigo: '37808-288',
    Nombre: 'Kohlrabi',
    Presentacion: '242-58-0307',
    Laboratorio: 'Léana',
    Sitio: 'WFC^W',
    Existencia: 80,
    Precio: '$8.00',
    Vencimiento: '5/26/2019'
  },
  {
    Codigo: '12634-028',
    Nombre: 'Noodles - Steamed Chow Mein',
    Presentacion: '115-58-6776',
    Laboratorio: 'Valérie',
    Sitio: 'DEO',
    Existencia: 97,
    Precio: '$46.77',
    Vencimiento: '9/27/2018'
  },
  {
    Codigo: '57896-778',
    Nombre: 'Pumpkin',
    Presentacion: '286-46-5424',
    Laboratorio: 'Liè',
    Sitio: 'VIVE',
    Existencia: 89,
    Precio: '$2.65',
    Vencimiento: '11/19/2018'
  },
  {
    Codigo: '63629-1462',
    Nombre: 'Pastry - Choclate Baked',
    Presentacion: '243-93-2763',
    Laboratorio: 'Edmée',
    Sitio: 'PXD',
    Existencia: 46,
    Precio: '$25.78',
    Vencimiento: '8/21/2018'
  },
  {
    Codigo: '12462-939',
    Nombre: 'Cattail Hearts',
    Presentacion: '643-33-8701',
    Laboratorio: 'Gaïa',
    Sitio: 'WFC^Y',
    Existencia: 42,
    Precio: '$60.76',
    Vencimiento: '11/4/2018'
  },
  {
    Codigo: '59779-251',
    Nombre: 'Sachet',
    Presentacion: '800-07-7777',
    Laboratorio: 'Célia',
    Sitio: 'SRT',
    Existencia: 20,
    Precio: '$53.52',
    Vencimiento: '6/15/2018'
  },
  {
    Codigo: '63739-577',
    Nombre: 'Napkin - Beverage 1 Ply',
    Presentacion: '199-77-0459',
    Laboratorio: 'Marlène',
    Sitio: 'ASGN',
    Existencia: 80,
    Precio: '$69.13',
    Vencimiento: '7/20/2018'
  },
  {
    Codigo: '52125-168',
    Nombre: 'Madeira',
    Presentacion: '758-72-6054',
    Laboratorio: 'Lóng',
    Sitio: 'AMT^B',
    Existencia: 8,
    Precio: '$53.17',
    Vencimiento: '11/17/2018'
  },
  {
    Codigo: '0456-0464',
    Nombre: 'Chicken - Whole',
    Presentacion: '227-76-6981',
    Laboratorio: 'Garçon',
    Sitio: 'INBKL',
    Existencia: 36,
    Precio: '$89.83',
    Vencimiento: '1/7/2019'
  },
  {
    Codigo: '68151-4485',
    Nombre: 'Chef Hat 25cm',
    Presentacion: '662-88-0678',
    Laboratorio: 'Sòng',
    Sitio: 'LINK',
    Existencia: 53,
    Precio: '$84.02',
    Vencimiento: '2/7/2019'
  },
  {
    Codigo: '42291-715',
    Nombre: 'Fish - Base, Bouillion',
    Presentacion: '260-72-8249',
    Laboratorio: 'Méghane',
    Sitio: 'RCII',
    Existencia: 78,
    Precio: '$14.61',
    Vencimiento: '3/13/2019'
  },
  {
    Codigo: '36987-1808',
    Nombre: 'Nut - Pistachio, Shelled',
    Presentacion: '687-81-5373',
    Laboratorio: 'Marie-hélène',
    Sitio: 'PAVM',
    Existencia: 10,
    Precio: '$58.99',
    Vencimiento: '8/31/2018'
  },
  {
    Codigo: '51270-114',
    Nombre: 'Veal - Inside, Choice',
    Presentacion: '332-27-3949',
    Laboratorio: 'Athéna',
    Sitio: 'BYBK',
    Existencia: 53,
    Precio: '$89.37',
    Vencimiento: '6/8/2018'
  },
  {
    Codigo: '42023-135',
    Nombre: 'Cookie Dough - Peanut Butter',
    Presentacion: '260-52-9522',
    Laboratorio: 'Andrée',
    Sitio: 'PFH',
    Existencia: 39,
    Precio: '$32.47',
    Vencimiento: '12/18/2018'
  },
  {
    Codigo: '52959-028',
    Nombre: 'Apple - Fuji',
    Presentacion: '322-67-4124',
    Laboratorio: 'Cinéma',
    Sitio: 'AMGN',
    Existencia: 36,
    Precio: '$43.02',
    Vencimiento: '12/23/2018'
  },
  {
    Codigo: '64980-178',
    Nombre: 'Cookie Choc',
    Presentacion: '588-79-4914',
    Laboratorio: 'Maëlle',
    Sitio: 'RBS^L',
    Existencia: 11,
    Precio: '$39.84',
    Vencimiento: '1/16/2019'
  },
  {
    Codigo: '57955-0001',
    Nombre: 'Chocolate Eclairs',
    Presentacion: '870-22-0462',
    Laboratorio: 'Méryl',
    Sitio: 'AEIS',
    Existencia: 39,
    Precio: '$93.96',
    Vencimiento: '12/22/2018'
  },
  {
    Codigo: '0173-0135',
    Nombre: 'Hog / Sausage Casing - Pork',
    Presentacion: '757-27-7215',
    Laboratorio: 'Marie-thérèse',
    Sitio: 'HBAN',
    Existencia: 94,
    Precio: '$75.92',
    Vencimiento: '3/20/2019'
  },
  {
    Codigo: '55154-7273',
    Nombre: 'Melon - Honey Dew',
    Presentacion: '603-70-3683',
    Laboratorio: 'Valérie',
    Sitio: 'ATTU',
    Existencia: 39,
    Precio: '$84.77',
    Vencimiento: '3/21/2019'
  },
  {
    Codigo: '0093-4820',
    Nombre: 'Pork - Tenderloin, Frozen',
    Presentacion: '778-96-7642',
    Laboratorio: 'Rachèle',
    Sitio: 'HPJ',
    Existencia: 77,
    Precio: '$31.49',
    Vencimiento: '10/5/2018'
  },
  {
    Codigo: '0168-0204',
    Nombre: 'Squid - U 5',
    Presentacion: '199-52-9767',
    Laboratorio: 'Léandre',
    Sitio: 'DTJ',
    Existencia: 67,
    Precio: '$24.26',
    Vencimiento: '9/20/2018'
  },
  {
    Codigo: '60429-125',
    Nombre: 'Skirt - 24 Foot',
    Presentacion: '181-42-9748',
    Laboratorio: 'Mårten',
    Sitio: 'PJH',
    Existencia: 33,
    Precio: '$30.55',
    Vencimiento: '3/9/2019'
  },
  {
    Codigo: '42254-060',
    Nombre: 'Gin - Gilbeys London, Dry',
    Presentacion: '529-13-6405',
    Laboratorio: 'Yè',
    Sitio: 'XNCR',
    Existencia: 6,
    Precio: '$50.23',
    Vencimiento: '4/14/2019'
  },
  {
    Codigo: '68472-131',
    Nombre: 'Chinese Foods - Cantonese',
    Presentacion: '843-90-0324',
    Laboratorio: 'Illustrée',
    Sitio: 'LIFE',
    Existencia: 13,
    Precio: '$60.67',
    Vencimiento: '10/8/2018'
  },
  {
    Codigo: '0404-6918',
    Nombre: 'Foie Gras',
    Presentacion: '109-91-1167',
    Laboratorio: 'Dorothée',
    Sitio: 'ALEX',
    Existencia: 12,
    Precio: '$93.81',
    Vencimiento: '7/27/2018'
  },
  {
    Codigo: '36987-1083',
    Nombre: 'Pesto - Primerba, Paste',
    Presentacion: '143-48-6145',
    Laboratorio: 'Hélène',
    Sitio: 'DBVT',
    Existencia: 20,
    Precio: '$38.71',
    Vencimiento: '8/4/2018'
  },
  {
    Codigo: '49698-300',
    Nombre: 'Lime Cordial - Roses',
    Presentacion: '851-90-6573',
    Laboratorio: 'Aimée',
    Sitio: 'LN',
    Existencia: 39,
    Precio: '$58.88',
    Vencimiento: '10/28/2018'
  },
  {
    Codigo: '63824-125',
    Nombre: 'Beef - Short Loin',
    Presentacion: '862-62-4563',
    Laboratorio: 'Célia',
    Sitio: 'FLEX',
    Existencia: 20,
    Precio: '$71.62',
    Vencimiento: '5/20/2019'
  },
  {
    Codigo: '0603-1786',
    Nombre: 'Pasta - Cheese / Spinach Bauletti',
    Presentacion: '164-27-6658',
    Laboratorio: 'Félicie',
    Sitio: 'LEN.B',
    Existencia: 50,
    Precio: '$67.79',
    Vencimiento: '8/9/2018'
  },
  {
    Codigo: '49035-224',
    Nombre: 'Sparkling Wine - Rose, Freixenet',
    Presentacion: '550-57-7827',
    Laboratorio: 'Örjan',
    Sitio: 'CHCI',
    Existencia: 72,
    Precio: '$61.65',
    Vencimiento: '1/11/2019'
  },
  {
    Codigo: '36987-3064',
    Nombre: 'Vanilla Beans',
    Presentacion: '463-88-0255',
    Laboratorio: 'Maëlla',
    Sitio: 'VRAY',
    Existencia: 88,
    Precio: '$41.17',
    Vencimiento: '4/7/2019'
  },
  {
    Codigo: '41250-047',
    Nombre: 'Tarragon - Fresh',
    Presentacion: '513-44-1739',
    Laboratorio: 'Mylène',
    Sitio: 'TOCA',
    Existencia: 44,
    Precio: '$63.23',
    Vencimiento: '3/31/2019'
  },
  {
    Codigo: '66184-135',
    Nombre: 'Soup V8 Roasted Red Pepper',
    Presentacion: '801-83-3916',
    Laboratorio: 'Athéna',
    Sitio: 'OPHC',
    Existencia: 78,
    Precio: '$5.21',
    Vencimiento: '8/18/2018'
  },
  {
    Codigo: '59779-891',
    Nombre: 'Container Clear 8 Oz',
    Presentacion: '249-10-0228',
    Laboratorio: 'Irène',
    Sitio: 'SWP',
    Existencia: 36,
    Precio: '$63.99',
    Vencimiento: '2/12/2019'
  },
  {
    Codigo: '60977-141',
    Nombre: 'Stock - Chicken, White',
    Presentacion: '148-06-9741',
    Laboratorio: 'Maëly',
    Sitio: 'MRTX',
    Existencia: 19,
    Precio: '$5.75',
    Vencimiento: '5/10/2019'
  },
  {
    Codigo: '0264-7386',
    Nombre: 'Mayonnaise - Individual Pkg',
    Presentacion: '831-17-1099',
    Laboratorio: 'Anaëlle',
    Sitio: 'NUM',
    Existencia: 16,
    Precio: '$76.87',
    Vencimiento: '1/8/2019'
  },
  {
    Codigo: '51655-301',
    Nombre: 'Monkfish Fresh - Skin Off',
    Presentacion: '289-90-4248',
    Laboratorio: 'Lorène',
    Sitio: 'HT^D',
    Existencia: 29,
    Precio: '$71.84',
    Vencimiento: '7/7/2018'
  },
  {
    Codigo: '55115-2041',
    Nombre: 'Red Snapper - Fresh, Whole',
    Presentacion: '586-90-6174',
    Laboratorio: 'Miléna',
    Sitio: 'ZIOP',
    Existencia: 34,
    Precio: '$60.07',
    Vencimiento: '1/14/2019'
  },
  {
    Codigo: '49738-802',
    Nombre: 'Salad Dressing',
    Presentacion: '496-25-6885',
    Laboratorio: 'Anaïs',
    Sitio: 'ERJ',
    Existencia: 12,
    Precio: '$33.33',
    Vencimiento: '5/31/2018'
  },
  {
    Codigo: '49967-125',
    Nombre: 'Bread - Wheat Baguette',
    Presentacion: '410-60-8832',
    Laboratorio: 'Cinéma',
    Sitio: 'SWIN',
    Existencia: 92,
    Precio: '$63.13',
    Vencimiento: '2/24/2019'
  },
  {
    Codigo: '55154-6625',
    Nombre: 'Table Cloth 72x144 White',
    Presentacion: '899-11-0552',
    Laboratorio: 'Crééz',
    Sitio: 'INCY',
    Existencia: 27,
    Precio: '$13.98',
    Vencimiento: '9/1/2018'
  },
  {
    Codigo: '55111-548',
    Nombre: 'Rice - Sushi',
    Presentacion: '627-84-9006',
    Laboratorio: 'Laurène',
    Sitio: 'NVDA',
    Existencia: 66,
    Precio: '$97.71',
    Vencimiento: '2/15/2019'
  },
  {
    Codigo: '68382-123',
    Nombre: 'Table Cloth 90x90 White',
    Presentacion: '879-58-9960',
    Laboratorio: 'Desirée',
    Sitio: 'ULH',
    Existencia: 61,
    Precio: '$27.45',
    Vencimiento: '12/31/2018'
  },
  {
    Codigo: '0168-0357',
    Nombre: 'Pastry - Raisin Muffin - Mini',
    Presentacion: '638-47-3555',
    Laboratorio: 'Märta',
    Sitio: 'JMBA',
    Existencia: 74,
    Precio: '$82.86',
    Vencimiento: '6/2/2018'
  },
  {
    Codigo: '64679-982',
    Nombre: 'Tomatoes - Orange',
    Presentacion: '644-52-2378',
    Laboratorio: 'Anaëlle',
    Sitio: 'SLF',
    Existencia: 3,
    Precio: '$37.30',
    Vencimiento: '3/25/2019'
  },
  {
    Codigo: '55926-0025',
    Nombre: 'Chip - Potato Dill Pickle',
    Presentacion: '461-48-0148',
    Laboratorio: 'Gisèle',
    Sitio: 'BELFA',
    Existencia: 27,
    Precio: '$31.98',
    Vencimiento: '3/15/2019'
  },
  {
    Codigo: '0283-0293',
    Nombre: 'Longos - Lasagna Beef',
    Presentacion: '344-49-3192',
    Laboratorio: 'Kù',
    Sitio: 'AOI',
    Existencia: 45,
    Precio: '$9.03',
    Vencimiento: '6/30/2018'
  },
  {
    Codigo: '61442-222',
    Nombre: 'Cup - Paper 10oz 92959',
    Presentacion: '154-89-7438',
    Laboratorio: 'Michèle',
    Sitio: 'NGS',
    Existencia: 19,
    Precio: '$94.79',
    Vencimiento: '7/4/2018'
  },
  {
    Codigo: '51452-003',
    Nombre: 'Tea - Green',
    Presentacion: '241-68-7762',
    Laboratorio: 'Fèi',
    Sitio: 'INFY',
    Existencia: 70,
    Precio: '$13.81',
    Vencimiento: '9/2/2018'
  },
  {
    Codigo: '42507-829',
    Nombre: 'Water - Spring Water 500ml',
    Presentacion: '115-51-9494',
    Laboratorio: 'Dà',
    Sitio: 'PRFZ',
    Existencia: 80,
    Precio: '$56.46',
    Vencimiento: '7/13/2018'
  },
  {
    Codigo: '43074-301',
    Nombre: 'Napkin - Cocktail,beige 2 - Ply',
    Presentacion: '295-02-3251',
    Laboratorio: 'Mélina',
    Sitio: 'CDNA',
    Existencia: 39,
    Precio: '$36.38',
    Vencimiento: '5/25/2019'
  },
  {
    Codigo: '0615-7761',
    Nombre: 'Compound - Rum',
    Presentacion: '681-88-4018',
    Laboratorio: 'Méng',
    Sitio: 'SKX',
    Existencia: 27,
    Precio: '$48.11',
    Vencimiento: '4/27/2019'
  },
  {
    Codigo: '36987-1207',
    Nombre: 'Smoked Tongue',
    Presentacion: '243-59-6668',
    Laboratorio: 'Néhémie',
    Sitio: 'ABUS',
    Existencia: 91,
    Precio: '$13.63',
    Vencimiento: '10/19/2018'
  },
  {
    Codigo: '36987-1802',
    Nombre: 'Container Clear 8 Oz',
    Presentacion: '478-01-0993',
    Laboratorio: 'Anaïs',
    Sitio: 'ECR',
    Existencia: 30,
    Precio: '$69.51',
    Vencimiento: '3/18/2019'
  },
  {
    Codigo: '0310-0132',
    Nombre: 'Sauerkraut',
    Presentacion: '541-27-7344',
    Laboratorio: 'Bécassine',
    Sitio: 'WLK',
    Existencia: 3,
    Precio: '$8.04',
    Vencimiento: '10/21/2018'
  },
  {
    Codigo: '35617-392',
    Nombre: 'Tea - Decaf Lipton',
    Presentacion: '421-16-9628',
    Laboratorio: 'Maëline',
    Sitio: 'INFN',
    Existencia: 52,
    Precio: '$42.36',
    Vencimiento: '4/25/2019'
  },
  {
    Codigo: '57955-0980',
    Nombre: 'Mangostein',
    Presentacion: '216-36-4738',
    Laboratorio: 'Lóng',
    Sitio: 'TCF^B',
    Existencia: 80,
    Precio: '$86.18',
    Vencimiento: '6/16/2018'
  },
  {
    Codigo: '58394-635',
    Nombre: 'Sauce - Chili',
    Presentacion: '480-23-3828',
    Laboratorio: 'Lài',
    Sitio: 'QTNT',
    Existencia: 16,
    Precio: '$13.57',
    Vencimiento: '5/11/2019'
  },
  {
    Codigo: '24385-986',
    Nombre: 'Wine - Chablis 2003 Champs',
    Presentacion: '416-12-5667',
    Laboratorio: 'Lyséa',
    Sitio: 'JASO',
    Existencia: 47,
    Precio: '$78.49',
    Vencimiento: '8/12/2018'
  },
  {
    Codigo: '40054-1003',
    Nombre: 'Lemonade - Pineapple Passion',
    Presentacion: '460-39-9354',
    Laboratorio: 'Kù',
    Sitio: 'WRLD',
    Existencia: 80,
    Precio: '$28.08',
    Vencimiento: '11/12/2018'
  },
  {
    Codigo: '52544-220',
    Nombre: 'Wine - Sawmill Creek Autumn',
    Presentacion: '518-62-7372',
    Laboratorio: 'Faîtes',
    Sitio: 'QTWO',
    Existencia: 70,
    Precio: '$36.13',
    Vencimiento: '10/4/2018'
  },
  {
    Codigo: '36987-3092',
    Nombre: 'Graham Cracker Mix',
    Presentacion: '611-15-4300',
    Laboratorio: 'Esbjörn',
    Sitio: 'CHEKW',
    Existencia: 9,
    Precio: '$73.54',
    Vencimiento: '2/15/2019'
  },
  {
    Codigo: '54868-5992',
    Nombre: 'Cheese - Provolone',
    Presentacion: '775-48-0975',
    Laboratorio: 'Loïca',
    Sitio: 'IVAC',
    Existencia: 73,
    Precio: '$0.71',
    Vencimiento: '4/26/2019'
  },
  {
    Codigo: '59321-031',
    Nombre: 'Veal - Leg',
    Presentacion: '543-31-0514',
    Laboratorio: 'Tán',
    Sitio: 'RCM',
    Existencia: 22,
    Precio: '$97.70',
    Vencimiento: '9/23/2018'
  },
  {
    Codigo: '55154-5992',
    Nombre: 'Muffin - Mix - Mango Sour Cherry',
    Presentacion: '295-66-6935',
    Laboratorio: 'Cécile',
    Sitio: 'CREE',
    Existencia: 42,
    Precio: '$57.34',
    Vencimiento: '6/30/2018'
  },
  {
    Codigo: '64117-170',
    Nombre: 'Cheese - Augre Des Champs',
    Presentacion: '366-02-4399',
    Laboratorio: 'Laurélie',
    Sitio: 'SLVO',
    Existencia: 90,
    Precio: '$22.17',
    Vencimiento: '9/22/2018'
  },
  {
    Codigo: '10812-400',
    Nombre: 'Sprouts - Alfalfa',
    Presentacion: '489-59-8699',
    Laboratorio: 'Táng',
    Sitio: 'ELF',
    Existencia: 5,
    Precio: '$70.07',
    Vencimiento: '8/31/2018'
  },
  {
    Codigo: '54868-4560',
    Nombre: 'Flax Seed',
    Presentacion: '585-81-3554',
    Laboratorio: 'Marylène',
    Sitio: 'CGEN',
    Existencia: 73,
    Precio: '$17.55',
    Vencimiento: '7/27/2018'
  },
  {
    Codigo: '65862-101',
    Nombre: 'Raspberries - Frozen',
    Presentacion: '749-05-7271',
    Laboratorio: 'Tú',
    Sitio: 'SLVO',
    Existencia: 70,
    Precio: '$64.24',
    Vencimiento: '1/23/2019'
  },
  {
    Codigo: '60951-936',
    Nombre: 'Dip - Tapenade',
    Presentacion: '611-99-0216',
    Laboratorio: 'Maëly',
    Sitio: 'AAAP',
    Existencia: 53,
    Precio: '$53.88',
    Vencimiento: '10/2/2018'
  },
  {
    Codigo: '0268-0717',
    Nombre: 'Tuna - Yellowfin',
    Presentacion: '315-38-8795',
    Laboratorio: 'Pélagie',
    Sitio: 'RDNT',
    Existencia: 32,
    Precio: '$36.56',
    Vencimiento: '8/4/2018'
  },
  {
    Codigo: '49738-557',
    Nombre: 'Coriander - Seed',
    Presentacion: '758-46-1505',
    Laboratorio: 'Anaïs',
    Sitio: 'AMRB',
    Existencia: 32,
    Precio: '$89.45',
    Vencimiento: '1/11/2019'
  },
  {
    Codigo: '36987-3074',
    Nombre: 'Bread - Italian Roll With Herbs',
    Presentacion: '446-77-6338',
    Laboratorio: 'Erwéi',
    Sitio: 'ATR',
    Existencia: 49,
    Precio: '$38.39',
    Vencimiento: '9/21/2018'
  },
  {
    Codigo: '0178-0330',
    Nombre: 'Chicken - Ground',
    Presentacion: '493-05-7497',
    Laboratorio: 'Åke',
    Sitio: 'FGM',
    Existencia: 35,
    Precio: '$49.57',
    Vencimiento: '4/19/2019'
  },
  {
    Codigo: '49781-117',
    Nombre: 'Straw - Regular',
    Presentacion: '671-74-8568',
    Laboratorio: 'Eloïse',
    Sitio: 'WFC^V',
    Existencia: 94,
    Precio: '$2.98',
    Vencimiento: '2/27/2019'
  },
  {
    Codigo: '42291-125',
    Nombre: 'Wine - White, Antinore Orvieto',
    Presentacion: '415-90-3130',
    Laboratorio: 'Clémentine',
    Sitio: 'JFC',
    Existencia: 57,
    Precio: '$78.18',
    Vencimiento: '10/29/2018'
  },
  {
    Codigo: '36987-2458',
    Nombre: 'Tequila - Sauza Silver',
    Presentacion: '792-13-0924',
    Laboratorio: 'Wá',
    Sitio: 'PAAC',
    Existencia: 38,
    Precio: '$74.90',
    Vencimiento: '12/16/2018'
  },
  {
    Codigo: '0093-0026',
    Nombre: 'Almonds Ground Blanched',
    Presentacion: '512-43-8261',
    Laboratorio: 'Maëlla',
    Sitio: 'BVXVW',
    Existencia: 12,
    Precio: '$32.01',
    Vencimiento: '8/21/2018'
  },
  {
    Codigo: '0135-0077',
    Nombre: 'Chambord Royal',
    Presentacion: '269-22-3034',
    Laboratorio: 'Wá',
    Sitio: 'COT',
    Existencia: 81,
    Precio: '$98.29',
    Vencimiento: '1/26/2019'
  },
  {
    Codigo: '76206-002',
    Nombre: 'Pork - Chop, Frenched',
    Presentacion: '310-06-6936',
    Laboratorio: 'Ruò',
    Sitio: 'IRCP',
    Existencia: 80,
    Precio: '$70.77',
    Vencimiento: '6/13/2018'
  },
  {
    Codigo: '30142-244',
    Nombre: 'Sole - Fillet',
    Presentacion: '379-43-6947',
    Laboratorio: 'Liè',
    Sitio: 'WRLD',
    Existencia: 75,
    Precio: '$22.07',
    Vencimiento: '11/21/2018'
  },
  {
    Codigo: '53329-901',
    Nombre: 'Chicken - Soup Base',
    Presentacion: '811-94-1580',
    Laboratorio: 'Laïla',
    Sitio: 'USA',
    Existencia: 100,
    Precio: '$65.88',
    Vencimiento: '5/19/2019'
  },
  {
    Codigo: '55154-9379',
    Nombre: 'Rum - Mount Gay Eclipes',
    Presentacion: '750-91-9808',
    Laboratorio: 'Bécassine',
    Sitio: 'MCA',
    Existencia: 18,
    Precio: '$9.94',
    Vencimiento: '12/2/2018'
  },
  {
    Codigo: '49288-0126',
    Nombre: 'Soup - Knorr, Chicken Gumbo',
    Presentacion: '769-44-3011',
    Laboratorio: 'Gaïa',
    Sitio: 'STT^D',
    Existencia: 77,
    Precio: '$80.80',
    Vencimiento: '6/25/2018'
  },
  {
    Codigo: '60840-0200',
    Nombre: 'Carbonated Water - Strawberry',
    Presentacion: '754-74-6511',
    Laboratorio: 'Märta',
    Sitio: 'HTY',
    Existencia: 66,
    Precio: '$59.47',
    Vencimiento: '10/12/2018'
  },
  {
    Codigo: '0280-2000',
    Nombre: 'Tilapia - Fillets',
    Presentacion: '835-42-5333',
    Laboratorio: 'Méthode',
    Sitio: 'KTH',
    Existencia: 90,
    Precio: '$3.47',
    Vencimiento: '5/21/2019'
  },
  {
    Codigo: '51079-078',
    Nombre: 'Chef Hat 25cm',
    Presentacion: '475-68-8043',
    Laboratorio: 'Mélissandre',
    Sitio: 'CRVS',
    Existencia: 10,
    Precio: '$61.00',
    Vencimiento: '7/15/2018'
  },
  {
    Codigo: '45802-132',
    Nombre: 'Tabasco Sauce, 2 Oz',
    Presentacion: '693-32-0420',
    Laboratorio: 'Magdalène',
    Sitio: 'THST',
    Existencia: 84,
    Precio: '$74.57',
    Vencimiento: '1/18/2019'
  },
  {
    Codigo: '41520-410',
    Nombre: 'Wine - Clavet Saint Emilion',
    Presentacion: '513-88-5187',
    Laboratorio: 'Géraldine',
    Sitio: 'RNDB',
    Existencia: 81,
    Precio: '$12.99',
    Vencimiento: '1/24/2019'
  },
  {
    Codigo: '57520-0505',
    Nombre: 'Tray - 16in Rnd Blk',
    Presentacion: '781-23-9206',
    Laboratorio: 'Görel',
    Sitio: 'PCH',
    Existencia: 13,
    Precio: '$10.14',
    Vencimiento: '12/18/2018'
  },
  {
    Codigo: '55714-4592',
    Nombre: 'Jolt Cola - Red Eye',
    Presentacion: '790-95-9362',
    Laboratorio: 'Adélie',
    Sitio: 'FFC',
    Existencia: 81,
    Precio: '$11.65',
    Vencimiento: '4/10/2019'
  },
  {
    Codigo: '54092-383',
    Nombre: 'Vacuum Bags 12x16',
    Presentacion: '337-48-5518',
    Laboratorio: 'Françoise',
    Sitio: 'PGTI',
    Existencia: 99,
    Precio: '$63.93',
    Vencimiento: '1/28/2019'
  },
  {
    Codigo: '54868-2834',
    Nombre: 'Wine - Valpolicella Masi',
    Presentacion: '145-18-6134',
    Laboratorio: 'Lucrèce',
    Sitio: 'CRD.B',
    Existencia: 38,
    Precio: '$11.08',
    Vencimiento: '11/24/2018'
  },
  {
    Codigo: '13537-053',
    Nombre: 'Container Clear 8 Oz',
    Presentacion: '453-53-5408',
    Laboratorio: 'Geneviève',
    Sitio: 'PCH',
    Existencia: 6,
    Precio: '$33.66',
    Vencimiento: '11/19/2018'
  },
  {
    Codigo: '60681-5404',
    Nombre: 'Capicola - Hot',
    Presentacion: '209-05-6665',
    Laboratorio: 'Noémie',
    Sitio: 'SRTS',
    Existencia: 97,
    Precio: '$59.84',
    Vencimiento: '10/26/2018'
  },
  {
    Codigo: '43459-0153',
    Nombre: 'Muffin Mix - Oatmeal',
    Presentacion: '878-36-9268',
    Laboratorio: 'Maëlle',
    Sitio: 'ONVI',
    Existencia: 26,
    Precio: '$72.92',
    Vencimiento: '2/18/2019'
  },
  {
    Codigo: '52125-803',
    Nombre: 'Beans - French',
    Presentacion: '117-89-3302',
    Laboratorio: 'Dà',
    Sitio: 'FF',
    Existencia: 23,
    Precio: '$3.90',
    Vencimiento: '12/2/2018'
  },
  {
    Codigo: '35356-743',
    Nombre: 'Leeks - Baby, White',
    Presentacion: '128-56-5737',
    Laboratorio: 'Méghane',
    Sitio: 'KAMN',
    Existencia: 31,
    Precio: '$67.13',
    Vencimiento: '11/6/2018'
  },
  {
    Codigo: '67938-0772',
    Nombre: 'Wooden Mop Handle',
    Presentacion: '232-14-2293',
    Laboratorio: 'Léonie',
    Sitio: 'LILAK',
    Existencia: 51,
    Precio: '$23.94',
    Vencimiento: '11/28/2018'
  },
  {
    Codigo: '58160-820',
    Nombre: 'Munchies Honey Sweet Trail Mix',
    Presentacion: '628-78-7224',
    Laboratorio: 'Hélèna',
    Sitio: 'ZNGA',
    Existencia: 65,
    Precio: '$6.22',
    Vencimiento: '7/21/2018'
  },
  {
    Codigo: '68703-077',
    Nombre: 'Tart Shells - Barquettes, Savory',
    Presentacion: '504-62-9239',
    Laboratorio: 'Léandre',
    Sitio: 'PMD',
    Existencia: 84,
    Precio: '$65.72',
    Vencimiento: '10/29/2018'
  },
  {
    Codigo: '48951-1102',
    Nombre: 'Muffin Mix - Banana Nut',
    Presentacion: '834-63-2862',
    Laboratorio: 'Maïté',
    Sitio: 'ABEO',
    Existencia: 42,
    Precio: '$53.94',
    Vencimiento: '1/16/2019'
  },
  {
    Codigo: '68788-0255',
    Nombre: 'Lamb - Shoulder, Boneless',
    Presentacion: '597-67-2400',
    Laboratorio: 'Béatrice',
    Sitio: 'TGT',
    Existencia: 93,
    Precio: '$55.90',
    Vencimiento: '2/3/2019'
  },
  {
    Codigo: '43547-263',
    Nombre: 'Lemonade - Natural, 591 Ml',
    Presentacion: '471-47-1461',
    Laboratorio: 'Clémence',
    Sitio: 'TOL',
    Existencia: 75,
    Precio: '$70.06',
    Vencimiento: '10/27/2018'
  },
  {
    Codigo: '0002-7669',
    Nombre: 'Bread - Rolls, Rye',
    Presentacion: '284-23-4718',
    Laboratorio: 'Gwenaëlle',
    Sitio: 'TTNP',
    Existencia: 66,
    Precio: '$53.22',
    Vencimiento: '1/16/2019'
  },
  {
    Codigo: '42254-116',
    Nombre: 'Basil - Primerba, Paste',
    Presentacion: '229-50-2772',
    Laboratorio: 'Léandre',
    Sitio: 'AGII',
    Existencia: 4,
    Precio: '$87.53',
    Vencimiento: '11/23/2018'
  },
  {
    Codigo: '50227-3271',
    Nombre: 'Lettuce - Lolla Rosa',
    Presentacion: '386-30-1080',
    Laboratorio: 'Garçon',
    Sitio: 'SUM',
    Existencia: 87,
    Precio: '$10.78',
    Vencimiento: '5/3/2019'
  },
  {
    Codigo: '59148-021',
    Nombre: 'Bread - Sticks, Thin, Plain',
    Presentacion: '166-94-5153',
    Laboratorio: 'Kévina',
    Sitio: 'NS^A',
    Existencia: 97,
    Precio: '$19.98',
    Vencimiento: '1/25/2019'
  },
  {
    Codigo: '59779-930',
    Nombre: 'Cheese - Comtomme',
    Presentacion: '895-54-0790',
    Laboratorio: 'Maëly',
    Sitio: 'JONE',
    Existencia: 11,
    Precio: '$71.31',
    Vencimiento: '8/24/2018'
  },
  {
    Codigo: '63629-1342',
    Nombre: 'Wine - Pinot Noir Stoneleigh',
    Presentacion: '471-78-3431',
    Laboratorio: 'Eliès',
    Sitio: 'SRCL',
    Existencia: 49,
    Precio: '$17.68',
    Vencimiento: '9/13/2018'
  },
  {
    Codigo: '21695-664',
    Nombre: 'Oregano - Dry, Rubbed',
    Presentacion: '390-10-3897',
    Laboratorio: 'Léonore',
    Sitio: 'FB',
    Existencia: 1,
    Precio: '$75.93',
    Vencimiento: '4/16/2019'
  },
  {
    Codigo: '58468-0140',
    Nombre: 'Pepper - Cayenne',
    Presentacion: '405-94-2112',
    Laboratorio: 'Josée',
    Sitio: 'BGCP',
    Existencia: 69,
    Precio: '$51.91',
    Vencimiento: '4/6/2019'
  },
  {
    Codigo: '11673-288',
    Nombre: 'Zucchini - Mini, Green',
    Presentacion: '210-71-7078',
    Laboratorio: 'Méng',
    Sitio: 'OLBK',
    Existencia: 24,
    Precio: '$13.13',
    Vencimiento: '12/24/2018'
  },
  {
    Codigo: '51815-225',
    Nombre: 'Garbage Bags - Clear',
    Presentacion: '383-28-3722',
    Laboratorio: 'Maïlis',
    Sitio: 'FV',
    Existencia: 66,
    Precio: '$70.00',
    Vencimiento: '4/8/2019'
  },
  {
    Codigo: '61821-052',
    Nombre: 'Wine - Chablis 2003 Champs',
    Presentacion: '510-02-5015',
    Laboratorio: 'Lén',
    Sitio: 'PLD',
    Existencia: 5,
    Precio: '$2.86',
    Vencimiento: '10/21/2018'
  },
  {
    Codigo: '0187-2047',
    Nombre: 'Vinegar - Raspberry',
    Presentacion: '200-42-9222',
    Laboratorio: 'Sòng',
    Sitio: 'YUM',
    Existencia: 44,
    Precio: '$59.13',
    Vencimiento: '10/15/2018'
  },
  {
    Codigo: '0054-0382',
    Nombre: 'Longos - Chicken Caeser Salad',
    Presentacion: '703-60-7464',
    Laboratorio: 'Maëlyss',
    Sitio: 'BBF',
    Existencia: 93,
    Precio: '$93.73',
    Vencimiento: '1/5/2019'
  },
  {
    Codigo: '65044-0841',
    Nombre: 'Tea - Jasmin Green',
    Presentacion: '346-72-3889',
    Laboratorio: 'Aurélie',
    Sitio: 'PCF',
    Existencia: 28,
    Precio: '$64.86',
    Vencimiento: '5/28/2019'
  },
  {
    Codigo: '64092-120',
    Nombre: 'Spinach - Spinach Leaf',
    Presentacion: '531-99-0512',
    Laboratorio: 'Nadège',
    Sitio: 'TEP',
    Existencia: 25,
    Precio: '$70.13',
    Vencimiento: '8/29/2018'
  },
  {
    Codigo: '37205-278',
    Nombre: 'Sauce - Thousand Island',
    Presentacion: '321-89-9584',
    Laboratorio: 'Aí',
    Sitio: 'BEN',
    Existencia: 22,
    Precio: '$40.94',
    Vencimiento: '12/19/2018'
  },
  {
    Codigo: '36987-2961',
    Nombre: 'Thermometer Digital',
    Presentacion: '541-17-3586',
    Laboratorio: 'Estée',
    Sitio: 'DRI',
    Existencia: 1,
    Precio: '$86.97',
    Vencimiento: '10/15/2018'
  },
  {
    Codigo: '0268-6402',
    Nombre: 'Bread - Onion Focaccia',
    Presentacion: '642-80-6014',
    Laboratorio: 'Fèi',
    Sitio: 'SALT',
    Existencia: 30,
    Precio: '$44.81',
    Vencimiento: '6/22/2018'
  },
  {
    Codigo: '0699-7031',
    Nombre: 'Muffin - Mix - Creme Brule 15l',
    Presentacion: '323-71-5374',
    Laboratorio: 'Yénora',
    Sitio: 'EVTC',
    Existencia: 16,
    Precio: '$29.29',
    Vencimiento: '3/8/2019'
  },
  {
    Codigo: '0295-1183',
    Nombre: 'Raisin - Dark',
    Presentacion: '289-95-0289',
    Laboratorio: 'Ruò',
    Sitio: 'OBAS',
    Existencia: 71,
    Precio: '$29.13',
    Vencimiento: '1/25/2019'
  },
  {
    Codigo: '0283-0886',
    Nombre: 'Calypso - Pineapple Passion',
    Presentacion: '257-07-5372',
    Laboratorio: 'Maëly',
    Sitio: 'JKS',
    Existencia: 42,
    Precio: '$64.78',
    Vencimiento: '12/13/2018'
  },
  {
    Codigo: '63304-588',
    Nombre: 'Liqueur Banana, Ramazzotti',
    Presentacion: '730-66-0069',
    Laboratorio: 'Eléonore',
    Sitio: 'IRTC',
    Existencia: 13,
    Precio: '$31.48',
    Vencimiento: '4/13/2019'
  },
  {
    Codigo: '49999-307',
    Nombre: 'Eggwhite Frozen',
    Presentacion: '687-03-9792',
    Laboratorio: 'Solène',
    Sitio: 'KBWY',
    Existencia: 100,
    Precio: '$23.85',
    Vencimiento: '3/10/2019'
  },
  {
    Codigo: '35356-903',
    Nombre: 'Rabbit - Saddles',
    Presentacion: '674-60-1530',
    Laboratorio: 'Stévina',
    Sitio: 'STAG',
    Existencia: 14,
    Precio: '$16.16',
    Vencimiento: '6/28/2018'
  },
  {
    Codigo: '63323-147',
    Nombre: 'Lettuce - Curly Endive',
    Presentacion: '453-73-9378',
    Laboratorio: 'Athéna',
    Sitio: 'EME',
    Existencia: 73,
    Precio: '$97.66',
    Vencimiento: '6/23/2018'
  },
  {
    Codigo: '64578-0078',
    Nombre: 'Sesame Seed',
    Presentacion: '132-49-5083',
    Laboratorio: 'Hélène',
    Sitio: 'SSNC',
    Existencia: 35,
    Precio: '$97.78',
    Vencimiento: '5/13/2019'
  },
  {
    Codigo: '0173-0949',
    Nombre: 'Beer - True North Strong Ale',
    Presentacion: '817-39-6679',
    Laboratorio: 'Hélène',
    Sitio: 'EXPE',
    Existencia: 74,
    Precio: '$61.61',
    Vencimiento: '2/15/2019'
  },
  {
    Codigo: '52083-655',
    Nombre: 'Beans - Yellow',
    Presentacion: '148-88-1581',
    Laboratorio: 'Loïs',
    Sitio: 'LOAN',
    Existencia: 73,
    Precio: '$93.45',
    Vencimiento: '6/7/2018'
  },
  {
    Codigo: '50563-300',
    Nombre: 'Garbag Bags - Black',
    Presentacion: '661-32-9884',
    Laboratorio: 'Agnès',
    Sitio: 'MS^K',
    Existencia: 62,
    Precio: '$62.41',
    Vencimiento: '10/3/2018'
  },
  {
    Codigo: '63629-3383',
    Nombre: 'Glove - Cutting',
    Presentacion: '440-09-3381',
    Laboratorio: 'Maëlla',
    Sitio: 'BKFS',
    Existencia: 65,
    Precio: '$8.55',
    Vencimiento: '3/22/2019'
  },
  {
    Codigo: '51346-240',
    Nombre: 'Wheat - Soft Kernal Of Wheat',
    Presentacion: '374-18-6997',
    Laboratorio: 'Marie-thérèse',
    Sitio: 'JACK',
    Existencia: 18,
    Precio: '$66.56',
    Vencimiento: '3/15/2019'
  },
  {
    Codigo: '60637-001',
    Nombre: 'Quail - Whole, Boneless',
    Presentacion: '212-13-5599',
    Laboratorio: 'Garçon',
    Sitio: 'CRVS',
    Existencia: 7,
    Precio: '$9.85',
    Vencimiento: '4/18/2019'
  },
  {
    Codigo: '40032-120',
    Nombre: 'Skirt - 29 Foot',
    Presentacion: '290-61-3457',
    Laboratorio: 'Laurène',
    Sitio: 'QCOM',
    Existencia: 92,
    Precio: '$34.78',
    Vencimiento: '10/24/2018'
  },
  {
    Codigo: '59762-1300',
    Nombre: 'Cookie Dough - Double',
    Presentacion: '840-97-4263',
    Laboratorio: 'Béatrice',
    Sitio: 'VLRS',
    Existencia: 59,
    Precio: '$35.54',
    Vencimiento: '1/9/2019'
  },
  {
    Codigo: '55154-2379',
    Nombre: 'Bagel - Everything Presliced',
    Presentacion: '815-93-3749',
    Laboratorio: 'Naëlle',
    Sitio: 'HMTA',
    Existencia: 46,
    Precio: '$17.30',
    Vencimiento: '6/27/2018'
  },
  {
    Codigo: '68645-191',
    Nombre: 'Rabbit - Frozen',
    Presentacion: '253-34-6565',
    Laboratorio: 'Lài',
    Sitio: 'CPAH',
    Existencia: 32,
    Precio: '$98.82',
    Vencimiento: '1/22/2019'
  },
  {
    Codigo: '51672-4081',
    Nombre: 'Sausage - Chorizo',
    Presentacion: '716-02-6903',
    Laboratorio: 'Björn',
    Sitio: 'XGTI',
    Existencia: 93,
    Precio: '$41.30',
    Vencimiento: '6/27/2018'
  },
  {
    Codigo: '56062-458',
    Nombre: 'Chicken - Base',
    Presentacion: '614-98-2187',
    Laboratorio: 'Yóu',
    Sitio: 'NLY^A',
    Existencia: 41,
    Precio: '$7.08',
    Vencimiento: '10/6/2018'
  },
  {
    Codigo: '10544-297',
    Nombre: 'Buffalo - Short Rib Fresh',
    Presentacion: '193-36-9648',
    Laboratorio: 'Tán',
    Sitio: 'ARCB',
    Existencia: 14,
    Precio: '$52.78',
    Vencimiento: '8/23/2018'
  },
  {
    Codigo: '60429-365',
    Nombre: 'Water - San Pellegrino',
    Presentacion: '463-70-2985',
    Laboratorio: 'Maëly',
    Sitio: 'AMP',
    Existencia: 25,
    Precio: '$23.26',
    Vencimiento: '5/31/2018'
  },
  {
    Codigo: '0869-0693',
    Nombre: 'Truffle - Peelings',
    Presentacion: '427-92-2462',
    Laboratorio: 'Sélène',
    Sitio: 'ZNWAA',
    Existencia: 32,
    Precio: '$83.30',
    Vencimiento: '8/18/2018'
  },
  {
    Codigo: '10578-052',
    Nombre: 'Bread - Rye',
    Presentacion: '578-22-3248',
    Laboratorio: 'Gösta',
    Sitio: 'BGY',
    Existencia: 96,
    Precio: '$15.68',
    Vencimiento: '9/29/2018'
  },
  {
    Codigo: '61601-1127',
    Nombre: 'Flour - So Mix Cake White',
    Presentacion: '735-66-8737',
    Laboratorio: 'Wá',
    Sitio: 'SGMA',
    Existencia: 31,
    Precio: '$84.43',
    Vencimiento: '10/26/2018'
  },
  {
    Codigo: '61884-1001',
    Nombre: 'Foil Cont Round',
    Presentacion: '730-19-0582',
    Laboratorio: 'Marie-hélène',
    Sitio: 'PSCT',
    Existencia: 11,
    Precio: '$92.11',
    Vencimiento: '3/1/2019'
  },
  {
    Codigo: '0603-4979',
    Nombre: 'Juice - Apple 284ml',
    Presentacion: '415-26-6892',
    Laboratorio: 'Mélodie',
    Sitio: 'MGEE',
    Existencia: 33,
    Precio: '$57.21',
    Vencimiento: '3/12/2019'
  },
  {
    Codigo: '76214-030',
    Nombre: 'Cumin - Whole',
    Presentacion: '299-15-3565',
    Laboratorio: 'Jú',
    Sitio: 'VNQI',
    Existencia: 59,
    Precio: '$5.72',
    Vencimiento: '3/9/2019'
  },
  {
    Codigo: '59640-072',
    Nombre: 'Spice - Paprika',
    Presentacion: '402-27-2520',
    Laboratorio: 'Naéva',
    Sitio: 'SGLBW',
    Existencia: 58,
    Precio: '$42.89',
    Vencimiento: '2/19/2019'
  },
  {
    Codigo: '43419-011',
    Nombre: 'Longos - Burritos',
    Presentacion: '701-30-6110',
    Laboratorio: 'Åke',
    Sitio: 'SWKS',
    Existencia: 52,
    Precio: '$65.07',
    Vencimiento: '8/4/2018'
  },
  {
    Codigo: '52125-580',
    Nombre: 'Oven Mitts - 15 Inch',
    Presentacion: '882-54-4399',
    Laboratorio: 'Océane',
    Sitio: 'ADRU',
    Existencia: 45,
    Precio: '$17.93',
    Vencimiento: '4/18/2019'
  },
  {
    Codigo: '14720-371',
    Nombre: 'Veal - Heart',
    Presentacion: '706-30-2213',
    Laboratorio: 'Séréna',
    Sitio: 'ODP',
    Existencia: 7,
    Precio: '$46.59',
    Vencimiento: '8/6/2018'
  },
  {
    Codigo: '59923-601',
    Nombre: 'Ham - Smoked, Bone - In',
    Presentacion: '854-44-0246',
    Laboratorio: 'Kù',
    Sitio: 'PCTY',
    Existencia: 15,
    Precio: '$28.95',
    Vencimiento: '6/15/2018'
  },
  {
    Codigo: '0113-0851',
    Nombre: 'Pork - Ham, Virginia',
    Presentacion: '268-36-8936',
    Laboratorio: 'Hélèna',
    Sitio: 'KPTI',
    Existencia: 23,
    Precio: '$73.06',
    Vencimiento: '8/22/2018'
  },
  {
    Codigo: '33261-484',
    Nombre: 'Muffin Orange Individual',
    Presentacion: '147-61-7387',
    Laboratorio: 'Annotée',
    Sitio: 'KFFB',
    Existencia: 40,
    Precio: '$81.46',
    Vencimiento: '10/24/2018'
  },
  {
    Codigo: '30142-092',
    Nombre: 'Container - Foam Dixie 12 Oz',
    Presentacion: '869-64-5628',
    Laboratorio: 'Loïc',
    Sitio: 'ASET',
    Existencia: 69,
    Precio: '$62.21',
    Vencimiento: '6/3/2018'
  },
  {
    Codigo: '52125-725',
    Nombre: 'Bread - French Stick',
    Presentacion: '645-64-7487',
    Laboratorio: 'Océanne',
    Sitio: 'PSA^C',
    Existencia: 9,
    Precio: '$42.85',
    Vencimiento: '2/15/2019'
  },
  {
    Codigo: '11822-3215',
    Nombre: 'Pepper - Chillies, Crushed',
    Presentacion: '398-62-1266',
    Laboratorio: 'Eloïse',
    Sitio: 'ATV',
    Existencia: 87,
    Precio: '$66.43',
    Vencimiento: '1/24/2019'
  },
  {
    Codigo: '68001-118',
    Nombre: 'Squash - Pepper',
    Presentacion: '282-55-0657',
    Laboratorio: 'Joséphine',
    Sitio: 'PE',
    Existencia: 61,
    Precio: '$85.41',
    Vencimiento: '8/1/2018'
  },
  {
    Codigo: '49349-476',
    Nombre: 'Crackers - Melba Toast',
    Presentacion: '572-10-2899',
    Laboratorio: 'Noémie',
    Sitio: 'DD^A',
    Existencia: 52,
    Precio: '$64.79',
    Vencimiento: '5/16/2019'
  },
  {
    Codigo: '50876-182',
    Nombre: 'Silicone Parch. 16.3x24.3',
    Presentacion: '633-69-9835',
    Laboratorio: 'Maïté',
    Sitio: 'OVBC',
    Existencia: 72,
    Precio: '$41.37',
    Vencimiento: '1/31/2019'
  },
  {
    Codigo: '63629-5364',
    Nombre: 'Cheese - Bakers Cream Cheese',
    Presentacion: '142-71-9644',
    Laboratorio: 'Gösta',
    Sitio: 'MCHX',
    Existencia: 53,
    Precio: '$16.99',
    Vencimiento: '8/22/2018'
  },
  {
    Codigo: '63691-017',
    Nombre: 'Poppy Seed',
    Presentacion: '267-86-3595',
    Laboratorio: 'Marie-thérèse',
    Sitio: 'OXLCN',
    Existencia: 52,
    Precio: '$77.35',
    Vencimiento: '10/14/2018'
  },
  {
    Codigo: '55154-6668',
    Nombre: 'Cup - Paper 10oz 92959',
    Presentacion: '583-18-3036',
    Laboratorio: 'Gaïa',
    Sitio: 'MCN',
    Existencia: 17,
    Precio: '$19.15',
    Vencimiento: '10/17/2018'
  },
  {
    Codigo: '68788-0178',
    Nombre: 'Nut - Pumpkin Seeds',
    Presentacion: '252-40-5045',
    Laboratorio: 'Lucrèce',
    Sitio: 'EXAC',
    Existencia: 97,
    Precio: '$58.40',
    Vencimiento: '12/4/2018'
  },
  {
    Codigo: '54868-5576',
    Nombre: 'Baking Powder',
    Presentacion: '594-26-0285',
    Laboratorio: 'Béatrice',
    Sitio: 'SHIP',
    Existencia: 62,
    Precio: '$66.91',
    Vencimiento: '5/20/2019'
  },
  {
    Codigo: '58668-1031',
    Nombre: 'Bar - Granola Trail Mix Fruit Nut',
    Presentacion: '728-58-2348',
    Laboratorio: 'Annotée',
    Sitio: 'WAFDW',
    Existencia: 87,
    Precio: '$71.68',
    Vencimiento: '8/4/2018'
  },
  {
    Codigo: '49035-531',
    Nombre: 'Paste - Black Olive',
    Presentacion: '578-48-1934',
    Laboratorio: 'Alizée',
    Sitio: 'CUNB',
    Existencia: 91,
    Precio: '$50.30',
    Vencimiento: '6/3/2018'
  },
  {
    Codigo: '10202-130',
    Nombre: 'Sorrel - Fresh',
    Presentacion: '721-47-1802',
    Laboratorio: 'Lài',
    Sitio: 'HRB',
    Existencia: 54,
    Precio: '$83.29',
    Vencimiento: '1/16/2019'
  },
  {
    Codigo: '0781-1398',
    Nombre: 'Lentils - Green Le Puy',
    Presentacion: '160-03-8024',
    Laboratorio: 'Torbjörn',
    Sitio: 'WBAI',
    Existencia: 13,
    Precio: '$24.59',
    Vencimiento: '8/17/2018'
  },
  {
    Codigo: '54973-0609',
    Nombre: 'Coconut - Shredded, Sweet',
    Presentacion: '628-68-4598',
    Laboratorio: 'Örjan',
    Sitio: 'AFST',
    Existencia: 88,
    Precio: '$87.06',
    Vencimiento: '6/16/2018'
  },
  {
    Codigo: '41250-489',
    Nombre: 'Wine - Zonnebloem Pinotage',
    Presentacion: '490-15-0266',
    Laboratorio: 'Mårten',
    Sitio: 'GER',
    Existencia: 65,
    Precio: '$48.91',
    Vencimiento: '1/1/2019'
  },
  {
    Codigo: '54622-520',
    Nombre: 'Lettuce - Belgian Endive',
    Presentacion: '557-34-9715',
    Laboratorio: 'Loïs',
    Sitio: 'FVE',
    Existencia: 94,
    Precio: '$71.07',
    Vencimiento: '2/21/2019'
  },
  {
    Codigo: '53808-0962',
    Nombre: 'Tea - Jasmin Green',
    Presentacion: '871-96-7009',
    Laboratorio: 'Örjan',
    Sitio: 'ABCB',
    Existencia: 68,
    Precio: '$29.00',
    Vencimiento: '4/10/2019'
  },
  {
    Codigo: '58593-781',
    Nombre: 'Water, Tap',
    Presentacion: '547-58-2846',
    Laboratorio: 'Tán',
    Sitio: 'COST',
    Existencia: 45,
    Precio: '$88.86',
    Vencimiento: '12/8/2018'
  },
  {
    Codigo: '0409-7925',
    Nombre: 'Pastry - Chocolate Chip Muffin',
    Presentacion: '601-62-4675',
    Laboratorio: 'Marie-josée',
    Sitio: 'NVG',
    Existencia: 79,
    Precio: '$8.06',
    Vencimiento: '5/26/2019'
  },
  {
    Codigo: '63323-412',
    Nombre: 'Myers Planters Punch',
    Presentacion: '437-38-3685',
    Laboratorio: 'Åke',
    Sitio: 'OSTK',
    Existencia: 23,
    Precio: '$65.26',
    Vencimiento: '10/26/2018'
  },
  {
    Codigo: '58876-108',
    Nombre: 'Tomatoes - Cherry',
    Presentacion: '689-66-9690',
    Laboratorio: 'Naéva',
    Sitio: 'GABC',
    Existencia: 38,
    Precio: '$73.03',
    Vencimiento: '4/5/2019'
  },
  {
    Codigo: '42507-117',
    Nombre: 'Dried Figs',
    Presentacion: '121-41-5246',
    Laboratorio: 'Clémentine',
    Sitio: 'PSCD',
    Existencia: 27,
    Precio: '$36.73',
    Vencimiento: '1/23/2019'
  },
  {
    Codigo: '63777-223',
    Nombre: 'Allspice - Jamaican',
    Presentacion: '452-60-8473',
    Laboratorio: 'Séréna',
    Sitio: 'IMDZ',
    Existencia: 58,
    Precio: '$65.63',
    Vencimiento: '11/8/2018'
  },
  {
    Codigo: '10544-004',
    Nombre: 'Noodles - Steamed Chow Mein',
    Presentacion: '423-47-8360',
    Laboratorio: 'Annotés',
    Sitio: 'VBLT',
    Existencia: 12,
    Precio: '$19.58',
    Vencimiento: '11/2/2018'
  },
  {
    Codigo: '0280-0700',
    Nombre: 'Isomalt',
    Presentacion: '226-19-9251',
    Laboratorio: 'Vérane',
    Sitio: 'HOLI',
    Existencia: 72,
    Precio: '$97.98',
    Vencimiento: '8/3/2018'
  },
  {
    Codigo: '43598-330',
    Nombre: 'Cheese - Cheddar, Old White',
    Presentacion: '157-46-0405',
    Laboratorio: 'Aí',
    Sitio: 'RBS^S',
    Existencia: 12,
    Precio: '$62.72',
    Vencimiento: '3/2/2019'
  },
  {
    Codigo: '50563-124',
    Nombre: 'Mustard - Seed',
    Presentacion: '623-35-8510',
    Laboratorio: 'Maïlys',
    Sitio: 'REG',
    Existencia: 27,
    Precio: '$63.40',
    Vencimiento: '8/21/2018'
  },
  {
    Codigo: '0113-2432',
    Nombre: 'Wine - Marlbourough Sauv Blanc',
    Presentacion: '828-03-8447',
    Laboratorio: 'Thérèsa',
    Sitio: 'HRB',
    Existencia: 45,
    Precio: '$38.47',
    Vencimiento: '5/3/2019'
  },
  {
    Codigo: '68788-9132',
    Nombre: 'Kale - Red',
    Presentacion: '396-65-3851',
    Laboratorio: 'Maëline',
    Sitio: 'FND',
    Existencia: 24,
    Precio: '$32.23',
    Vencimiento: '1/21/2019'
  },
  {
    Codigo: '43742-0303',
    Nombre: 'Cake Circle, Foil, Scallop',
    Presentacion: '113-74-4669',
    Laboratorio: 'Méline',
    Sitio: 'NRP',
    Existencia: 78,
    Precio: '$63.81',
    Vencimiento: '1/30/2019'
  },
  {
    Codigo: '52584-476',
    Nombre: 'Vacuum Bags 12x16',
    Presentacion: '414-53-2440',
    Laboratorio: 'Mylène',
    Sitio: 'NRZ',
    Existencia: 6,
    Precio: '$67.27',
    Vencimiento: '1/31/2019'
  },
  {
    Codigo: '54868-4864',
    Nombre: 'Capon - Breast, Double, Wing On',
    Presentacion: '599-23-0526',
    Laboratorio: 'Andréa',
    Sitio: 'AEB',
    Existencia: 78,
    Precio: '$52.56',
    Vencimiento: '9/8/2018'
  },
  {
    Codigo: '63481-814',
    Nombre: 'Wine - Red, Concha Y Toro',
    Presentacion: '203-78-0960',
    Laboratorio: 'Bérénice',
    Sitio: 'FTD',
    Existencia: 15,
    Precio: '$11.67',
    Vencimiento: '2/26/2019'
  },
  {
    Codigo: '42254-261',
    Nombre: 'Grand Marnier',
    Presentacion: '342-58-5571',
    Laboratorio: 'Geneviève',
    Sitio: 'CDE',
    Existencia: 37,
    Precio: '$25.87',
    Vencimiento: '12/24/2018'
  },
  {
    Codigo: '60505-2867',
    Nombre: 'Fish - Scallops, Cold Smoked',
    Presentacion: '819-66-0767',
    Laboratorio: 'Anaïs',
    Sitio: 'GFNSL',
    Existencia: 99,
    Precio: '$14.92',
    Vencimiento: '8/10/2018'
  },
  {
    Codigo: '51208-003',
    Nombre: 'Octopus - Baby, Cleaned',
    Presentacion: '858-66-0966',
    Laboratorio: 'Hélène',
    Sitio: 'CPF',
    Existencia: 25,
    Precio: '$92.18',
    Vencimiento: '2/6/2019'
  },
  {
    Codigo: '52343-022',
    Nombre: 'Oil - Hazelnut',
    Presentacion: '192-84-2648',
    Laboratorio: 'Maïly',
    Sitio: 'AL',
    Existencia: 10,
    Precio: '$62.51',
    Vencimiento: '8/17/2018'
  },
  {
    Codigo: '0002-5800',
    Nombre: 'Coffee - Hazelnut Cream',
    Presentacion: '894-15-9950',
    Laboratorio: 'Kévina',
    Sitio: 'MH^C',
    Existencia: 39,
    Precio: '$58.01',
    Vencimiento: '7/5/2018'
  },
  {
    Codigo: '60512-1045',
    Nombre: 'Orange Roughy 4/6 Oz',
    Presentacion: '304-94-1094',
    Laboratorio: 'Maéna',
    Sitio: 'ITI',
    Existencia: 43,
    Precio: '$62.30',
    Vencimiento: '4/25/2019'
  },
  {
    Codigo: '0078-0110',
    Nombre: 'Beans - Butter Lrg Lima',
    Presentacion: '754-39-5490',
    Laboratorio: 'Méng',
    Sitio: 'PEIX',
    Existencia: 98,
    Precio: '$49.11',
    Vencimiento: '2/28/2019'
  },
  {
    Codigo: '49349-872',
    Nombre: 'Appetizer - Southwestern',
    Presentacion: '497-48-5252',
    Laboratorio: 'Maïly',
    Sitio: 'UBCP',
    Existencia: 41,
    Precio: '$91.59',
    Vencimiento: '1/11/2019'
  },
  {
    Codigo: '24571-102',
    Nombre: 'Water, Tap',
    Presentacion: '468-29-2163',
    Laboratorio: 'Edmée',
    Sitio: 'NGG',
    Existencia: 31,
    Precio: '$85.53',
    Vencimiento: '2/4/2019'
  },
  {
    Codigo: '63323-658',
    Nombre: 'Juice - Cranberry 284ml',
    Presentacion: '505-02-4248',
    Laboratorio: 'Néhémie',
    Sitio: 'PRTO',
    Existencia: 71,
    Precio: '$39.61',
    Vencimiento: '9/6/2018'
  },
  {
    Codigo: '48951-8176',
    Nombre: 'Coconut - Creamed, Pure',
    Presentacion: '389-55-0681',
    Laboratorio: 'Torbjörn',
    Sitio: 'VNDA',
    Existencia: 72,
    Precio: '$98.28',
    Vencimiento: '11/8/2018'
  },
  {
    Codigo: '31722-531',
    Nombre: 'Green Tea Refresher',
    Presentacion: '411-95-1939',
    Laboratorio: 'Bécassine',
    Sitio: 'MEI',
    Existencia: 33,
    Precio: '$24.69',
    Vencimiento: '5/29/2019'
  },
  {
    Codigo: '54575-945',
    Nombre: 'Carbonated Water - Strawberry',
    Presentacion: '812-44-0524',
    Laboratorio: 'Méryl',
    Sitio: 'MAA^I',
    Existencia: 65,
    Precio: '$15.99',
    Vencimiento: '2/27/2019'
  },
  {
    Codigo: '49288-0088',
    Nombre: 'Sauce - Sesame Thai Dressing',
    Presentacion: '141-31-4952',
    Laboratorio: 'Lài',
    Sitio: 'MPAA',
    Existencia: 76,
    Precio: '$62.19',
    Vencimiento: '7/4/2018'
  },
  {
    Codigo: '21695-844',
    Nombre: 'Wine - Red, Colio Cabernet',
    Presentacion: '270-81-5708',
    Laboratorio: 'Angélique',
    Sitio: 'SYT',
    Existencia: 86,
    Precio: '$1.41',
    Vencimiento: '9/1/2018'
  },
  {
    Codigo: '41250-507',
    Nombre: 'Sauce - Chili',
    Presentacion: '317-88-5633',
    Laboratorio: 'Görel',
    Sitio: 'LOAN',
    Existencia: 81,
    Precio: '$45.07',
    Vencimiento: '7/21/2018'
  },
  {
    Codigo: '60512-6203',
    Nombre: 'Soup - Campbells Chili',
    Presentacion: '343-55-6577',
    Laboratorio: 'Béatrice',
    Sitio: 'WFC^T',
    Existencia: 92,
    Precio: '$30.51',
    Vencimiento: '3/18/2019'
  },
  {
    Codigo: '68387-497',
    Nombre: 'Beef - Ox Tongue',
    Presentacion: '619-41-2090',
    Laboratorio: 'Östen',
    Sitio: 'NKX',
    Existencia: 5,
    Precio: '$85.02',
    Vencimiento: '12/24/2018'
  },
  {
    Codigo: '0409-7118',
    Nombre: 'Coffee - Decaffeinato Coffee',
    Presentacion: '602-58-3297',
    Laboratorio: 'Görel',
    Sitio: 'SAN^A',
    Existencia: 67,
    Precio: '$32.38',
    Vencimiento: '2/7/2019'
  },
  {
    Codigo: '41595-5512',
    Nombre: 'Spice - Peppercorn Melange',
    Presentacion: '766-66-8716',
    Laboratorio: 'Maéna',
    Sitio: 'MWA',
    Existencia: 45,
    Precio: '$77.89',
    Vencimiento: '4/15/2019'
  },
  {
    Codigo: '41250-699',
    Nombre: 'Pasta - Gnocchi, Potato',
    Presentacion: '275-09-1792',
    Laboratorio: 'Miléna',
    Sitio: 'SCCO',
    Existencia: 3,
    Precio: '$35.14',
    Vencimiento: '10/5/2018'
  },
  {
    Codigo: '13537-211',
    Nombre: 'Stock - Beef, White',
    Presentacion: '742-61-3244',
    Laboratorio: 'Zhì',
    Sitio: 'HLS',
    Existencia: 31,
    Precio: '$35.37',
    Vencimiento: '9/8/2018'
  },
  {
    Codigo: '76018-100',
    Nombre: 'Dip - Tapenade',
    Presentacion: '697-73-8278',
    Laboratorio: 'Anaëlle',
    Sitio: 'MGA',
    Existencia: 96,
    Precio: '$86.53',
    Vencimiento: '7/29/2018'
  },
  {
    Codigo: '0781-1488',
    Nombre: 'Foil - Round Foil',
    Presentacion: '274-01-1066',
    Laboratorio: 'Léonore',
    Sitio: 'SMSI',
    Existencia: 31,
    Precio: '$86.70',
    Vencimiento: '12/4/2018'
  },
  {
    Codigo: '0078-0364',
    Nombre: 'Tomatoes - Orange',
    Presentacion: '479-37-0935',
    Laboratorio: 'Léandre',
    Sitio: 'TBK',
    Existencia: 36,
    Precio: '$15.02',
    Vencimiento: '8/5/2018'
  },
  {
    Codigo: '0363-0392',
    Nombre: 'Orange - Tangerine',
    Presentacion: '800-15-7056',
    Laboratorio: 'Andréanne',
    Sitio: 'RELV',
    Existencia: 85,
    Precio: '$1.77',
    Vencimiento: '5/22/2019'
  },
  {
    Codigo: '53499-0293',
    Nombre: 'Chocolate - Dark Callets',
    Presentacion: '709-03-9155',
    Laboratorio: 'Mélanie',
    Sitio: 'GNL',
    Existencia: 20,
    Precio: '$19.64',
    Vencimiento: '9/3/2018'
  },
  {
    Codigo: '63739-358',
    Nombre: 'Tomatoes - Vine Ripe, Red',
    Presentacion: '720-11-5755',
    Laboratorio: 'Marie-noël',
    Sitio: 'EMIF',
    Existencia: 16,
    Precio: '$87.25',
    Vencimiento: '12/6/2018'
  },
  {
    Codigo: '57955-0126',
    Nombre: 'Egg Patty Fried',
    Presentacion: '239-63-9768',
    Laboratorio: 'Béatrice',
    Sitio: 'RL',
    Existencia: 92,
    Precio: '$18.24',
    Vencimiento: '4/28/2019'
  },
  {
    Codigo: '49288-0046',
    Nombre: 'Soup - Campbells - Tomato',
    Presentacion: '339-97-3877',
    Laboratorio: 'Cinéma',
    Sitio: 'TUP',
    Existencia: 41,
    Precio: '$24.96',
    Vencimiento: '4/13/2019'
  },
  {
    Codigo: '0173-0830',
    Nombre: 'Chicken - Soup Base',
    Presentacion: '537-33-2989',
    Laboratorio: 'Aí',
    Sitio: 'TA',
    Existencia: 96,
    Precio: '$23.39',
    Vencimiento: '9/6/2018'
  },
  {
    Codigo: '33261-647',
    Nombre: 'Roe - White Fish',
    Presentacion: '411-16-3770',
    Laboratorio: 'Andréa',
    Sitio: 'HNH',
    Existencia: 54,
    Precio: '$97.65',
    Vencimiento: '3/10/2019'
  },
  {
    Codigo: '68382-652',
    Nombre: 'Broom And Brush Rack Black',
    Presentacion: '561-03-9800',
    Laboratorio: 'Céline',
    Sitio: 'CAVM',
    Existencia: 14,
    Precio: '$8.25',
    Vencimiento: '5/27/2019'
  },
  {
    Codigo: '60614-1001',
    Nombre: 'Vinegar - Balsamic',
    Presentacion: '151-76-0767',
    Laboratorio: 'Vénus',
    Sitio: 'RICK',
    Existencia: 19,
    Precio: '$31.74',
    Vencimiento: '2/11/2019'
  },
  {
    Codigo: '52810-802',
    Nombre: 'Wine - Prosecco Valdobienne',
    Presentacion: '633-29-5486',
    Laboratorio: 'Vénus',
    Sitio: 'FORM',
    Existencia: 74,
    Precio: '$93.65',
    Vencimiento: '12/20/2018'
  },
  {
    Codigo: '0603-3968',
    Nombre: 'Foie Gras',
    Presentacion: '553-72-0905',
    Laboratorio: 'Bérénice',
    Sitio: 'M',
    Existencia: 6,
    Precio: '$44.69',
    Vencimiento: '5/9/2019'
  },
  {
    Codigo: '10596-400',
    Nombre: 'Halibut - Whole, Fresh',
    Presentacion: '330-68-0045',
    Laboratorio: 'Séréna',
    Sitio: 'SPIL',
    Existencia: 67,
    Precio: '$27.21',
    Vencimiento: '6/20/2018'
  },
  {
    Codigo: '55154-6285',
    Nombre: 'Magnotta Bel Paese Red',
    Presentacion: '426-20-7597',
    Laboratorio: 'Renée',
    Sitio: 'KMT',
    Existencia: 24,
    Precio: '$77.15',
    Vencimiento: '4/25/2019'
  },
  {
    Codigo: '48951-9175',
    Nombre: 'Potatoes - Yukon Gold 5 Oz',
    Presentacion: '469-54-7894',
    Laboratorio: 'Östen',
    Sitio: 'ENTA',
    Existencia: 2,
    Precio: '$77.17',
    Vencimiento: '11/19/2018'
  },
  {
    Codigo: '10345-028',
    Nombre: 'Bread Sour Rolls',
    Presentacion: '148-39-5329',
    Laboratorio: 'Maëlys',
    Sitio: 'BBK',
    Existencia: 51,
    Precio: '$18.12',
    Vencimiento: '10/14/2018'
  },
  {
    Codigo: '51009-149',
    Nombre: 'Flower - Commercial Bronze',
    Presentacion: '362-38-4804',
    Laboratorio: 'Loïs',
    Sitio: 'AAN',
    Existencia: 65,
    Precio: '$2.96',
    Vencimiento: '11/23/2018'
  },
  {
    Codigo: '55301-370',
    Nombre: 'Pork - Ham Hocks - Smoked',
    Presentacion: '121-47-2296',
    Laboratorio: 'Céline',
    Sitio: 'NUS',
    Existencia: 89,
    Precio: '$98.34',
    Vencimiento: '11/23/2018'
  },
  {
    Codigo: '54575-948',
    Nombre: 'Sugar - Sweet N Low, Individual',
    Presentacion: '565-68-7471',
    Laboratorio: 'Stévina',
    Sitio: 'MGYR',
    Existencia: 78,
    Precio: '$87.03',
    Vencimiento: '4/25/2019'
  },
  {
    Codigo: '42248-121',
    Nombre: 'Apple - Fuji',
    Presentacion: '487-74-2147',
    Laboratorio: 'Bénédicte',
    Sitio: 'UTF',
    Existencia: 90,
    Precio: '$64.67',
    Vencimiento: '7/15/2018'
  },
  {
    Codigo: '60429-751',
    Nombre: 'Onions - Cippolini',
    Presentacion: '213-14-8832',
    Laboratorio: 'Kuí',
    Sitio: 'BCO',
    Existencia: 80,
    Precio: '$88.23',
    Vencimiento: '11/12/2018'
  },
  {
    Codigo: '36987-1451',
    Nombre: 'Lamb - Leg, Boneless',
    Presentacion: '132-69-6495',
    Laboratorio: 'Estève',
    Sitio: 'NATH',
    Existencia: 24,
    Precio: '$72.25',
    Vencimiento: '12/26/2018'
  },
  {
    Codigo: '49884-562',
    Nombre: 'Country Roll',
    Presentacion: '438-78-2758',
    Laboratorio: 'Gérald',
    Sitio: 'BOOT',
    Existencia: 10,
    Precio: '$85.48',
    Vencimiento: '5/17/2019'
  },
  {
    Codigo: '58394-634',
    Nombre: 'Tilapia - Fillets',
    Presentacion: '781-97-2596',
    Laboratorio: 'Cécile',
    Sitio: 'GFNSL',
    Existencia: 18,
    Precio: '$14.90',
    Vencimiento: '4/24/2019'
  },
  {
    Codigo: '0310-7820',
    Nombre: 'Nut - Pumpkin Seeds',
    Presentacion: '871-98-5637',
    Laboratorio: 'Sélène',
    Sitio: 'HBM.WS',
    Existencia: 77,
    Precio: '$61.97',
    Vencimiento: '12/14/2018'
  },
  {
    Codigo: '55154-6191',
    Nombre: 'Pail - 15l White, With Handle',
    Presentacion: '712-45-0571',
    Laboratorio: 'Maï',
    Sitio: 'SFR',
    Existencia: 39,
    Precio: '$61.44',
    Vencimiento: '2/1/2019'
  },
  {
    Codigo: '57955-5129',
    Nombre: 'Cotton Wet Mop 16 Oz',
    Presentacion: '866-56-7799',
    Laboratorio: 'Yú',
    Sitio: 'DELTW',
    Existencia: 22,
    Precio: '$63.10',
    Vencimiento: '12/9/2018'
  },
  {
    Codigo: '16590-320',
    Nombre: 'Maple Syrup',
    Presentacion: '265-72-5203',
    Laboratorio: 'Kù',
    Sitio: 'S',
    Existencia: 75,
    Precio: '$93.13',
    Vencimiento: '8/16/2018'
  },
  {
    Codigo: '68084-805',
    Nombre: 'Sobe - Orange Carrot',
    Presentacion: '865-90-8784',
    Laboratorio: 'Táng',
    Sitio: 'CIVBP',
    Existencia: 29,
    Precio: '$30.16',
    Vencimiento: '9/1/2018'
  },
  {
    Codigo: '55714-4439',
    Nombre: 'Roe - Lump Fish, Red',
    Presentacion: '531-23-0666',
    Laboratorio: 'Méthode',
    Sitio: 'GNC',
    Existencia: 23,
    Precio: '$48.33',
    Vencimiento: '1/1/2019'
  },
  {
    Codigo: '48951-8052',
    Nombre: 'Sauce - Chili',
    Presentacion: '603-60-0111',
    Laboratorio: 'Dorothée',
    Sitio: 'ALK',
    Existencia: 97,
    Precio: '$17.51',
    Vencimiento: '6/15/2018'
  },
  {
    Codigo: '57844-115',
    Nombre: 'Appetizer - Spring Roll, Veg',
    Presentacion: '836-76-3679',
    Laboratorio: 'Félicie',
    Sitio: 'PPX',
    Existencia: 91,
    Precio: '$79.00',
    Vencimiento: '7/14/2018'
  },
  {
    Codigo: '64942-1270',
    Nombre: 'Sole - Fillet',
    Presentacion: '808-15-5452',
    Laboratorio: 'Hélèna',
    Sitio: 'TICC',
    Existencia: 49,
    Precio: '$91.23',
    Vencimiento: '12/13/2018'
  },
  {
    Codigo: '76237-211',
    Nombre: 'Taro Root',
    Presentacion: '196-75-2885',
    Laboratorio: 'Maïwenn',
    Sitio: 'KOS',
    Existencia: 77,
    Precio: '$45.92',
    Vencimiento: '9/8/2018'
  },
  {
    Codigo: '68084-177',
    Nombre: 'Beer - Mcauslan Apricot',
    Presentacion: '527-53-7254',
    Laboratorio: 'Médiamass',
    Sitio: 'FSTR',
    Existencia: 34,
    Precio: '$72.89',
    Vencimiento: '12/8/2018'
  },
  {
    Codigo: '30142-182',
    Nombre: 'Silicone Paper 16.5x24',
    Presentacion: '494-97-3284',
    Laboratorio: 'Mårten',
    Sitio: 'BNSO',
    Existencia: 8,
    Precio: '$11.02',
    Vencimiento: '3/10/2019'
  },
  {
    Codigo: '0178-0582',
    Nombre: 'Pasta - Linguini, Dry',
    Presentacion: '852-38-3721',
    Laboratorio: 'Gaëlle',
    Sitio: 'BAC^D',
    Existencia: 95,
    Precio: '$50.63',
    Vencimiento: '12/22/2018'
  },
  {
    Codigo: '42507-189',
    Nombre: 'Turkey Tenderloin Frozen',
    Presentacion: '476-20-4411',
    Laboratorio: 'Hélèna',
    Sitio: 'APC',
    Existencia: 20,
    Precio: '$92.77',
    Vencimiento: '6/20/2018'
  },
  {
    Codigo: '0168-0357',
    Nombre: 'Cheese - Brie Roitelet',
    Presentacion: '127-61-6968',
    Laboratorio: 'Célestine',
    Sitio: 'TDI',
    Existencia: 18,
    Precio: '$97.77',
    Vencimiento: '5/21/2019'
  },
  {
    Codigo: '0006-0740',
    Nombre: 'Beer - Creemore',
    Presentacion: '433-68-9300',
    Laboratorio: 'Maëline',
    Sitio: 'FCF',
    Existencia: 64,
    Precio: '$64.86',
    Vencimiento: '1/22/2019'
  },
  {
    Codigo: '55118-575',
    Nombre: 'Cherries - Bing, Canned',
    Presentacion: '525-55-4050',
    Laboratorio: 'Loïc',
    Sitio: 'AIA',
    Existencia: 42,
    Precio: '$83.28',
    Vencimiento: '9/8/2018'
  },
  {
    Codigo: '24385-016',
    Nombre: 'Beef - Tenderloin',
    Presentacion: '454-96-8476',
    Laboratorio: 'Bécassine',
    Sitio: 'FAB',
    Existencia: 86,
    Precio: '$71.42',
    Vencimiento: '8/13/2018'
  },
  {
    Codigo: '57955-2030',
    Nombre: 'Cheese - Sheep Milk',
    Presentacion: '548-43-2585',
    Laboratorio: 'Méryl',
    Sitio: 'NRCIA',
    Existencia: 3,
    Precio: '$95.89',
    Vencimiento: '8/8/2018'
  },
  {
    Codigo: '50227-2110',
    Nombre: 'Lychee',
    Presentacion: '149-03-9886',
    Laboratorio: 'Félicie',
    Sitio: 'CBFV',
    Existencia: 99,
    Precio: '$74.35',
    Vencimiento: '10/8/2018'
  },
  {
    Codigo: '49349-949',
    Nombre: 'Shallots',
    Presentacion: '249-66-6280',
    Laboratorio: 'Liè',
    Sitio: 'GDI',
    Existencia: 87,
    Precio: '$29.83',
    Vencimiento: '6/10/2018'
  },
  {
    Codigo: '51393-6557',
    Nombre: 'Apron',
    Presentacion: '866-06-0007',
    Laboratorio: 'Yóu',
    Sitio: 'TEP',
    Existencia: 87,
    Precio: '$38.48',
    Vencimiento: '1/31/2019'
  },
  {
    Codigo: '58414-3047',
    Nombre: 'Garbage Bags - Clear',
    Presentacion: '550-66-3907',
    Laboratorio: 'Adélaïde',
    Sitio: 'TIPT',
    Existencia: 59,
    Precio: '$91.61',
    Vencimiento: '4/14/2019'
  },
  {
    Codigo: '76366-001',
    Nombre: 'Sauce Tomato Pouch',
    Presentacion: '760-76-0920',
    Laboratorio: 'Bérengère',
    Sitio: 'WSO.B',
    Existencia: 51,
    Precio: '$13.79',
    Vencimiento: '1/31/2019'
  },
  {
    Codigo: '68645-230',
    Nombre: 'Soup - Tomato Mush. Florentine',
    Presentacion: '465-26-2725',
    Laboratorio: 'Eliès',
    Sitio: 'GMRE',
    Existencia: 89,
    Precio: '$80.76',
    Vencimiento: '12/2/2018'
  },
  {
    Codigo: '50436-6408',
    Nombre: 'Wine - Ruffino Chianti Classico',
    Presentacion: '826-51-4316',
    Laboratorio: 'Daphnée',
    Sitio: 'FPT',
    Existencia: 24,
    Precio: '$52.53',
    Vencimiento: '7/29/2018'
  },
  {
    Codigo: '0093-5415',
    Nombre: 'Spice - Chili Powder Mexican',
    Presentacion: '898-02-2759',
    Laboratorio: 'Vérane',
    Sitio: 'STBZ',
    Existencia: 52,
    Precio: '$95.41',
    Vencimiento: '4/30/2019'
  },
  {
    Codigo: '49571-003',
    Nombre: 'Butter Balls Salted',
    Presentacion: '748-47-0668',
    Laboratorio: 'Liè',
    Sitio: 'MTFB',
    Existencia: 20,
    Precio: '$64.35',
    Vencimiento: '4/21/2019'
  },
  {
    Codigo: '42254-174',
    Nombre: 'Wine - Sherry Dry Sack, William',
    Presentacion: '134-79-1963',
    Laboratorio: 'Célia',
    Sitio: 'GILT',
    Existencia: 44,
    Precio: '$93.60',
    Vencimiento: '5/8/2019'
  },
  {
    Codigo: '98132-186',
    Nombre: 'Cheese - Swiss Sliced',
    Presentacion: '733-35-4866',
    Laboratorio: 'Josée',
    Sitio: 'ORBC',
    Existencia: 20,
    Precio: '$29.84',
    Vencimiento: '7/14/2018'
  },
  {
    Codigo: '10135-493',
    Nombre: 'Beef - Texas Style Burger',
    Presentacion: '753-41-3517',
    Laboratorio: 'Maï',
    Sitio: 'SOJA',
    Existencia: 95,
    Precio: '$31.61',
    Vencimiento: '12/19/2018'
  },
  {
    Codigo: '25021-211',
    Nombre: 'Pastry - Mini French Pastries',
    Presentacion: '544-84-6302',
    Laboratorio: 'Régine',
    Sitio: 'DMLP',
    Existencia: 26,
    Precio: '$62.15',
    Vencimiento: '1/17/2019'
  },
  {
    Codigo: '0143-9983',
    Nombre: 'Pepsi - Diet, 355 Ml',
    Presentacion: '667-41-1408',
    Laboratorio: 'Publicité',
    Sitio: 'RPXC',
    Existencia: 76,
    Precio: '$71.43',
    Vencimiento: '6/13/2018'
  },
  {
    Codigo: '0615-0516',
    Nombre: 'Cherries - Fresh',
    Presentacion: '759-46-6097',
    Laboratorio: 'Maïwenn',
    Sitio: 'CNMD',
    Existencia: 69,
    Precio: '$85.31',
    Vencimiento: '5/22/2019'
  },
  {
    Codigo: '54575-420',
    Nombre: 'Parsley - Dried',
    Presentacion: '391-79-4450',
    Laboratorio: 'Angèle',
    Sitio: 'FSNN',
    Existencia: 72,
    Precio: '$22.66',
    Vencimiento: '10/20/2018'
  },
  {
    Codigo: '51009-104',
    Nombre: 'Grand Marnier',
    Presentacion: '574-31-1778',
    Laboratorio: 'Dù',
    Sitio: 'LUV',
    Existencia: 86,
    Precio: '$55.13',
    Vencimiento: '6/2/2018'
  },
  {
    Codigo: '10578-005',
    Nombre: 'Crackers - Graham',
    Presentacion: '341-50-4058',
    Laboratorio: 'Loïs',
    Sitio: 'PGC',
    Existencia: 24,
    Precio: '$62.05',
    Vencimiento: '4/12/2019'
  },
  {
    Codigo: '76357-212',
    Nombre: 'Garlic Powder',
    Presentacion: '149-28-0589',
    Laboratorio: 'Maïwenn',
    Sitio: 'GLYC',
    Existencia: 9,
    Precio: '$83.22',
    Vencimiento: '10/27/2018'
  },
  {
    Codigo: '98132-706',
    Nombre: 'Wine - Magnotta - Cab Franc',
    Presentacion: '285-74-1868',
    Laboratorio: 'Célia',
    Sitio: 'THO',
    Existencia: 92,
    Precio: '$80.18',
    Vencimiento: '4/3/2019'
  },
  {
    Codigo: '52544-732',
    Nombre: 'Longos - Chicken Wings',
    Presentacion: '662-92-9904',
    Laboratorio: 'Estève',
    Sitio: 'EVHC^',
    Existencia: 91,
    Precio: '$11.92',
    Vencimiento: '7/30/2018'
  },
  {
    Codigo: '51772-314',
    Nombre: 'Wine - Delicato Merlot',
    Presentacion: '275-17-9814',
    Laboratorio: 'Estève',
    Sitio: 'CYAD',
    Existencia: 45,
    Precio: '$3.95',
    Vencimiento: '9/5/2018'
  },
  {
    Codigo: '11084-054',
    Nombre: 'Lamb - Leg, Diced',
    Presentacion: '667-42-3581',
    Laboratorio: 'Angélique',
    Sitio: 'CHSCM',
    Existencia: 46,
    Precio: '$34.60',
    Vencimiento: '6/15/2018'
  },
  {
    Codigo: '52544-249',
    Nombre: 'Shrimp - 16 - 20 Cooked, Peeled',
    Presentacion: '815-68-7322',
    Laboratorio: 'Mégane',
    Sitio: 'CSGS',
    Existencia: 1,
    Precio: '$30.47',
    Vencimiento: '7/11/2018'
  },
  {
    Codigo: '59779-369',
    Nombre: 'Wine - Shiraz Wolf Blass Premium',
    Presentacion: '711-07-1520',
    Laboratorio: 'Loïca',
    Sitio: 'BREW',
    Existencia: 63,
    Precio: '$9.49',
    Vencimiento: '3/18/2019'
  },
  {
    Codigo: '0113-0224',
    Nombre: 'Pepper - Roasted Red',
    Presentacion: '144-52-4966',
    Laboratorio: 'Ruò',
    Sitio: 'MTFBW',
    Existencia: 26,
    Precio: '$86.60',
    Vencimiento: '1/13/2019'
  },
  {
    Codigo: '41520-906',
    Nombre: 'Longos - Grilled Chicken With',
    Presentacion: '432-84-1679',
    Laboratorio: 'Léa',
    Sitio: 'WPZ',
    Existencia: 28,
    Precio: '$36.74',
    Vencimiento: '12/11/2018'
  },
  {
    Codigo: '53808-0559',
    Nombre: 'Tea - Lemon Scented',
    Presentacion: '107-42-6492',
    Laboratorio: 'Personnalisée',
    Sitio: 'DJCO',
    Existencia: 8,
    Precio: '$38.96',
    Vencimiento: '1/19/2019'
  },
  {
    Codigo: '59262-272',
    Nombre: 'Sauce - Salsa',
    Presentacion: '442-05-1756',
    Laboratorio: 'Bénédicte',
    Sitio: 'SBUX',
    Existencia: 89,
    Precio: '$46.06',
    Vencimiento: '7/16/2018'
  },
  {
    Codigo: '53808-0618',
    Nombre: 'Spic And Span All Purpose',
    Presentacion: '173-81-0712',
    Laboratorio: 'Médiamass',
    Sitio: 'FCPT',
    Existencia: 5,
    Precio: '$45.51',
    Vencimiento: '4/4/2019'
  },
  {
    Codigo: '62856-001',
    Nombre: 'Wine - Alsace Riesling Reserve',
    Presentacion: '560-17-8213',
    Laboratorio: 'Lauréna',
    Sitio: 'MLHR',
    Existencia: 15,
    Precio: '$57.43',
    Vencimiento: '3/9/2019'
  },
  {
    Codigo: '0409-7984',
    Nombre: 'Cleaner - Comet',
    Presentacion: '811-72-1682',
    Laboratorio: 'Cunégonde',
    Sitio: 'STAR^F',
    Existencia: 70,
    Precio: '$31.09',
    Vencimiento: '1/27/2019'
  },
  {
    Codigo: '0498-0740',
    Nombre: 'Mace',
    Presentacion: '135-15-9557',
    Laboratorio: 'Régine',
    Sitio: 'SBGI',
    Existencia: 10,
    Precio: '$54.85',
    Vencimiento: '4/26/2019'
  },
  {
    Codigo: '21695-233',
    Nombre: 'Wine - Champagne Brut Veuve',
    Presentacion: '126-79-8272',
    Laboratorio: 'Publicité',
    Sitio: 'PEY',
    Existencia: 45,
    Precio: '$76.54',
    Vencimiento: '7/16/2018'
  },
  {
    Codigo: '52125-647',
    Nombre: 'Okra',
    Presentacion: '333-44-9577',
    Laboratorio: 'Clémence',
    Sitio: 'HE^U',
    Existencia: 29,
    Precio: '$55.56',
    Vencimiento: '10/8/2018'
  },
  {
    Codigo: '51079-467',
    Nombre: 'Soup - Clam Chowder, Dry Mix',
    Presentacion: '329-62-0500',
    Laboratorio: 'Aurélie',
    Sitio: 'BOCH',
    Existencia: 25,
    Precio: '$17.58',
    Vencimiento: '10/19/2018'
  },
  {
    Codigo: '41520-126',
    Nombre: 'Thyme - Dried',
    Presentacion: '318-97-4885',
    Laboratorio: 'Eliès',
    Sitio: 'FEIM',
    Existencia: 5,
    Precio: '$2.51',
    Vencimiento: '9/26/2018'
  },
  {
    Codigo: '64997-150',
    Nombre: 'Doilies - 7, Paper',
    Presentacion: '562-49-1053',
    Laboratorio: 'Lauréna',
    Sitio: 'MAA^I',
    Existencia: 37,
    Precio: '$65.49',
    Vencimiento: '1/4/2019'
  },
  {
    Codigo: '68382-792',
    Nombre: 'Basil - Thai',
    Presentacion: '391-77-5307',
    Laboratorio: 'Méryl',
    Sitio: 'EFR',
    Existencia: 94,
    Precio: '$96.20',
    Vencimiento: '1/26/2019'
  },
  {
    Codigo: '11390-001',
    Nombre: 'Cardamon Seed / Pod',
    Presentacion: '258-49-5690',
    Laboratorio: 'Jú',
    Sitio: 'RELL',
    Existencia: 45,
    Precio: '$12.98',
    Vencimiento: '6/17/2018'
  },
  {
    Codigo: '43353-892',
    Nombre: 'Bread - Onion Focaccia',
    Presentacion: '126-79-3936',
    Laboratorio: 'Judicaël',
    Sitio: 'KNX',
    Existencia: 73,
    Precio: '$27.37',
    Vencimiento: '9/4/2018'
  },
  {
    Codigo: '59614-298',
    Nombre: 'Coffee - Cafe Moreno',
    Presentacion: '469-09-5416',
    Laboratorio: 'Måns',
    Sitio: 'SHO^F',
    Existencia: 55,
    Precio: '$80.17',
    Vencimiento: '1/17/2019'
  },
  {
    Codigo: '52533-178',
    Nombre: 'Pork - Liver',
    Presentacion: '182-17-3641',
    Laboratorio: 'Maéna',
    Sitio: 'MUH',
    Existencia: 53,
    Precio: '$24.34',
    Vencimiento: '12/17/2018'
  },
  {
    Codigo: '50786-003',
    Nombre: 'Vector Energy Bar',
    Presentacion: '416-83-2668',
    Laboratorio: 'Maëlys',
    Sitio: 'SSW^D',
    Existencia: 3,
    Precio: '$75.50',
    Vencimiento: '7/17/2018'
  },
  {
    Codigo: '43353-032',
    Nombre: 'Gingerale - Diet - Schweppes',
    Presentacion: '622-84-9361',
    Laboratorio: 'Rachèle',
    Sitio: 'GRBK',
    Existencia: 77,
    Precio: '$86.00',
    Vencimiento: '10/19/2018'
  },
  {
    Codigo: '0406-9931',
    Nombre: 'Tuna - Fresh',
    Presentacion: '819-28-0473',
    Laboratorio: 'Miléna',
    Sitio: 'KMI^A',
    Existencia: 83,
    Precio: '$23.28',
    Vencimiento: '8/23/2018'
  },
  {
    Codigo: '13537-305',
    Nombre: 'Wine - Chateau Bonnet',
    Presentacion: '705-45-6187',
    Laboratorio: 'Naéva',
    Sitio: 'AGC',
    Existencia: 36,
    Precio: '$37.21',
    Vencimiento: '7/1/2018'
  },
  {
    Codigo: '50685-004',
    Nombre: 'Extract - Lemon',
    Presentacion: '427-57-7441',
    Laboratorio: 'Léonore',
    Sitio: 'GSHT',
    Existencia: 76,
    Precio: '$32.95',
    Vencimiento: '10/1/2018'
  },
  {
    Codigo: '55648-315',
    Nombre: 'Bag Stand',
    Presentacion: '822-12-0709',
    Laboratorio: 'Lyséa',
    Sitio: 'CRCM',
    Existencia: 42,
    Precio: '$92.07',
    Vencimiento: '12/22/2018'
  },
  {
    Codigo: '65862-141',
    Nombre: 'Water - San Pellegrino',
    Presentacion: '542-22-3064',
    Laboratorio: 'Cunégonde',
    Sitio: 'TELL',
    Existencia: 97,
    Precio: '$35.63',
    Vencimiento: '8/10/2018'
  },
  {
    Codigo: '11822-8271',
    Nombre: 'Asparagus - Green, Fresh',
    Presentacion: '565-10-9633',
    Laboratorio: 'Mà',
    Sitio: 'VVPR',
    Existencia: 33,
    Precio: '$8.51',
    Vencimiento: '8/29/2018'
  },
  {
    Codigo: '0713-0535',
    Nombre: 'Sauce - Soya, Light',
    Presentacion: '543-94-6514',
    Laboratorio: 'Yè',
    Sitio: 'ARCH',
    Existencia: 73,
    Precio: '$21.43',
    Vencimiento: '1/13/2019'
  },
  {
    Codigo: '65643-173',
    Nombre: 'Oysters - Smoked',
    Presentacion: '132-31-4204',
    Laboratorio: 'Naëlle',
    Sitio: 'WFC^W',
    Existencia: 65,
    Precio: '$80.67',
    Vencimiento: '7/15/2018'
  },
  {
    Codigo: '67457-486',
    Nombre: 'Capers - Pickled',
    Presentacion: '845-03-7074',
    Laboratorio: 'Mén',
    Sitio: 'SQ',
    Existencia: 73,
    Precio: '$74.61',
    Vencimiento: '1/10/2019'
  },
  {
    Codigo: '13668-409',
    Nombre: 'Buffalo - Short Rib Fresh',
    Presentacion: '477-33-2308',
    Laboratorio: 'Jú',
    Sitio: 'SQZZ',
    Existencia: 2,
    Precio: '$39.25',
    Vencimiento: '5/7/2019'
  },
  {
    Codigo: '21695-440',
    Nombre: 'Syrup - Monin - Granny Smith',
    Presentacion: '140-59-1350',
    Laboratorio: 'Adélie',
    Sitio: 'SUI^A',
    Existencia: 39,
    Precio: '$4.65',
    Vencimiento: '2/16/2019'
  },
  {
    Codigo: '0699-1082',
    Nombre: 'Vector Energy Bar',
    Presentacion: '528-45-8132',
    Laboratorio: 'Personnalisée',
    Sitio: 'LORL',
    Existencia: 78,
    Precio: '$24.45',
    Vencimiento: '11/16/2018'
  },
  {
    Codigo: '0093-7618',
    Nombre: 'Spring Roll Wrappers',
    Presentacion: '543-12-9657',
    Laboratorio: 'Torbjörn',
    Sitio: 'CBPO',
    Existencia: 78,
    Precio: '$42.68',
    Vencimiento: '11/6/2018'
  },
  {
    Codigo: '61715-015',
    Nombre: 'Extract Vanilla Pure',
    Presentacion: '797-23-1051',
    Laboratorio: 'Bécassine',
    Sitio: 'MFD',
    Existencia: 43,
    Precio: '$39.28',
    Vencimiento: '11/5/2018'
  },
  {
    Codigo: '64578-0082',
    Nombre: 'Creme De Menthe Green',
    Presentacion: '178-70-0655',
    Laboratorio: 'Torbjörn',
    Sitio: 'ORN',
    Existencia: 95,
    Precio: '$62.80',
    Vencimiento: '5/30/2018'
  },
  {
    Codigo: '61589-1826',
    Nombre: 'Okra',
    Presentacion: '178-72-7477',
    Laboratorio: 'Maëlyss',
    Sitio: 'GWW',
    Existencia: 57,
    Precio: '$44.49',
    Vencimiento: '7/20/2018'
  },
  {
    Codigo: '0781-5125',
    Nombre: 'Pastry - Baked Scones - Mini',
    Presentacion: '540-73-0634',
    Laboratorio: 'Régine',
    Sitio: 'AAON',
    Existencia: 6,
    Precio: '$62.28',
    Vencimiento: '10/18/2018'
  },
  {
    Codigo: '22912-003',
    Nombre: 'Soup - Beef, Base Mix',
    Presentacion: '116-91-0767',
    Laboratorio: 'Görel',
    Sitio: 'VBIV',
    Existencia: 78,
    Precio: '$24.14',
    Vencimiento: '7/28/2018'
  },
  {
    Codigo: '63323-238',
    Nombre: 'Mustard - Dijon',
    Presentacion: '559-89-3730',
    Laboratorio: 'Maéna',
    Sitio: 'FBHS',
    Existencia: 52,
    Precio: '$15.70',
    Vencimiento: '2/5/2019'
  },
  {
    Codigo: '24236-068',
    Nombre: 'Lettuce - Iceberg',
    Presentacion: '463-72-5948',
    Laboratorio: 'Marie-ève',
    Sitio: 'EVOL',
    Existencia: 61,
    Precio: '$15.30',
    Vencimiento: '11/27/2018'
  },
  {
    Codigo: '50289-3250',
    Nombre: 'Beer - Camerons Cream Ale',
    Presentacion: '357-12-5956',
    Laboratorio: 'Marie-thérèse',
    Sitio: 'AJG',
    Existencia: 33,
    Precio: '$82.24',
    Vencimiento: '8/13/2018'
  },
  {
    Codigo: '33992-0159',
    Nombre: 'Lemonade - Natural, 591 Ml',
    Presentacion: '660-99-1524',
    Laboratorio: 'Réjane',
    Sitio: 'FTEO',
    Existencia: 8,
    Precio: '$14.76',
    Vencimiento: '1/4/2019'
  },
  {
    Codigo: '0085-0924',
    Nombre: 'Syrup - Monin - Blue Curacao',
    Presentacion: '453-55-8985',
    Laboratorio: 'Styrbjörn',
    Sitio: 'AKP',
    Existencia: 71,
    Precio: '$7.11',
    Vencimiento: '3/24/2019'
  },
  {
    Codigo: '0228-2577',
    Nombre: 'Juice - Apple 284ml',
    Presentacion: '418-12-5097',
    Laboratorio: 'Cunégonde',
    Sitio: 'UNF',
    Existencia: 31,
    Precio: '$63.94',
    Vencimiento: '2/21/2019'
  },
  {
    Codigo: '68400-705',
    Nombre: 'Coffee - Colombian, Portioned',
    Presentacion: '103-11-9984',
    Laboratorio: 'Marie-thérèse',
    Sitio: 'BGH',
    Existencia: 25,
    Precio: '$79.53',
    Vencimiento: '2/20/2019'
  },
  {
    Codigo: '55154-4770',
    Nombre: 'Slt - Individual Portions',
    Presentacion: '834-10-1781',
    Laboratorio: 'Noëlla',
    Sitio: 'RXDX',
    Existencia: 37,
    Precio: '$80.25',
    Vencimiento: '4/9/2019'
  },
  {
    Codigo: '59779-430',
    Nombre: 'Plasticknivesblack',
    Presentacion: '231-38-0925',
    Laboratorio: 'Yóu',
    Sitio: 'SKOR',
    Existencia: 77,
    Precio: '$80.87',
    Vencimiento: '9/30/2018'
  },
  {
    Codigo: '0093-7178',
    Nombre: 'Persimmons',
    Presentacion: '896-01-6749',
    Laboratorio: 'Thérèsa',
    Sitio: 'APEN',
    Existencia: 21,
    Precio: '$68.76',
    Vencimiento: '4/13/2019'
  },
  {
    Codigo: '0713-0701',
    Nombre: 'Sunflower Seed Raw',
    Presentacion: '230-53-3501',
    Laboratorio: 'Joséphine',
    Sitio: 'MXF',
    Existencia: 32,
    Precio: '$93.10',
    Vencimiento: '5/5/2019'
  },
  {
    Codigo: '52125-470',
    Nombre: 'Water, Tap',
    Presentacion: '647-42-6450',
    Laboratorio: 'Agnès',
    Sitio: 'EXK',
    Existencia: 44,
    Precio: '$98.34',
    Vencimiento: '5/23/2019'
  },
  {
    Codigo: '67172-018',
    Nombre: 'Chips Potato Swt Chilli Sour',
    Presentacion: '159-77-6064',
    Laboratorio: 'Zoé',
    Sitio: 'BNS',
    Existencia: 66,
    Precio: '$68.03',
    Vencimiento: '10/23/2018'
  },
  {
    Codigo: '55118-980',
    Nombre: 'Wine - Magnotta - Belpaese',
    Presentacion: '593-03-9915',
    Laboratorio: 'Aurélie',
    Sitio: 'WPM',
    Existencia: 47,
    Precio: '$51.80',
    Vencimiento: '5/20/2019'
  },
  {
    Codigo: '55648-172',
    Nombre: 'Mcgillicuddy Vanilla Schnap',
    Presentacion: '861-68-1525',
    Laboratorio: 'Léonie',
    Sitio: 'AIRG',
    Existencia: 71,
    Precio: '$80.14',
    Vencimiento: '12/10/2018'
  },
  {
    Codigo: '41190-897',
    Nombre: 'Truffle - Peelings',
    Presentacion: '567-63-7555',
    Laboratorio: 'Dà',
    Sitio: 'DCM',
    Existencia: 53,
    Precio: '$61.77',
    Vencimiento: '8/21/2018'
  },
  {
    Codigo: '0026-3797',
    Nombre: 'Wine - Magnotta - Belpaese',
    Presentacion: '763-37-1869',
    Laboratorio: 'Eloïse',
    Sitio: 'CRME',
    Existencia: 92,
    Precio: '$74.31',
    Vencimiento: '6/30/2018'
  },
  {
    Codigo: '10202-379',
    Nombre: 'Creme De Menthe Green',
    Presentacion: '580-67-7622',
    Laboratorio: 'Dorothée',
    Sitio: 'MCHX',
    Existencia: 18,
    Precio: '$40.76',
    Vencimiento: '3/3/2019'
  },
  {
    Codigo: '53041-618',
    Nombre: 'Chips Potato All Dressed - 43g',
    Presentacion: '784-55-8181',
    Laboratorio: 'Lorène',
    Sitio: 'CTB',
    Existencia: 94,
    Precio: '$83.95',
    Vencimiento: '7/13/2018'
  },
  {
    Codigo: '0409-4765',
    Nombre: 'Tuna - Fresh',
    Presentacion: '773-80-3985',
    Laboratorio: 'Maï',
    Sitio: 'TCPC',
    Existencia: 42,
    Precio: '$27.50',
    Vencimiento: '9/25/2018'
  },
  {
    Codigo: '76310-024',
    Nombre: 'Wine - Red, Cooking',
    Presentacion: '501-68-0089',
    Laboratorio: 'Méline',
    Sitio: 'LBTYA',
    Existencia: 41,
    Precio: '$54.41',
    Vencimiento: '5/16/2019'
  },
  {
    Codigo: '43063-060',
    Nombre: 'Cabbage - Nappa',
    Presentacion: '744-47-6149',
    Laboratorio: 'Publicité',
    Sitio: 'IDSA',
    Existencia: 72,
    Precio: '$77.37',
    Vencimiento: '2/27/2019'
  },
  {
    Codigo: '50844-466',
    Nombre: 'Placemat - Scallop, White',
    Presentacion: '425-40-0510',
    Laboratorio: 'Mårten',
    Sitio: 'VGSH',
    Existencia: 45,
    Precio: '$9.29',
    Vencimiento: '5/23/2019'
  },
  {
    Codigo: '51991-759',
    Nombre: 'Uniform Linen Charge',
    Presentacion: '746-45-8655',
    Laboratorio: 'Séréna',
    Sitio: 'OMF',
    Existencia: 65,
    Precio: '$40.15',
    Vencimiento: '6/28/2018'
  },
  {
    Codigo: '63941-113',
    Nombre: 'Lamb - Whole, Fresh',
    Presentacion: '796-36-4242',
    Laboratorio: 'Néhémie',
    Sitio: 'PULM',
    Existencia: 11,
    Precio: '$48.30',
    Vencimiento: '12/6/2018'
  },
  {
    Codigo: '49349-242',
    Nombre: 'Mangoes',
    Presentacion: '421-09-5538',
    Laboratorio: 'Rébecca',
    Sitio: 'AMPH',
    Existencia: 71,
    Precio: '$70.62',
    Vencimiento: '7/2/2018'
  },
  {
    Codigo: '50114-0150',
    Nombre: 'Flower - Commercial Spider',
    Presentacion: '671-37-8603',
    Laboratorio: 'Béatrice',
    Sitio: 'GSVC',
    Existencia: 3,
    Precio: '$18.44',
    Vencimiento: '1/12/2019'
  },
  {
    Codigo: '64117-284',
    Nombre: 'Oil - Canola',
    Presentacion: '645-80-7937',
    Laboratorio: 'Judicaël',
    Sitio: 'F',
    Existencia: 71,
    Precio: '$64.77',
    Vencimiento: '4/25/2019'
  },
  {
    Codigo: '63044-632',
    Nombre: 'Chickhen - Chicken Phyllo',
    Presentacion: '426-42-0277',
    Laboratorio: 'Inès',
    Sitio: 'MXF',
    Existencia: 65,
    Precio: '$45.28',
    Vencimiento: '5/7/2019'
  },
  {
    Codigo: '10812-441',
    Nombre: 'Pasta - Gnocchi, Potato',
    Presentacion: '685-28-9381',
    Laboratorio: 'Bérangère',
    Sitio: 'PMO',
    Existencia: 59,
    Precio: '$96.60',
    Vencimiento: '10/4/2018'
  },
  {
    Codigo: '55289-315',
    Nombre: 'Bread - Bagels, Plain',
    Presentacion: '847-25-0645',
    Laboratorio: 'Mårten',
    Sitio: 'RAD',
    Existencia: 91,
    Precio: '$49.03',
    Vencimiento: '3/8/2019'
  },
  {
    Codigo: '41167-0333',
    Nombre: 'Wine - Zinfandel California 2002',
    Presentacion: '281-09-6401',
    Laboratorio: 'Desirée',
    Sitio: 'ORC',
    Existencia: 40,
    Precio: '$10.32',
    Vencimiento: '8/19/2018'
  },
  {
    Codigo: '68220-085',
    Nombre: 'Ginger - Ground',
    Presentacion: '432-55-4414',
    Laboratorio: 'Jú',
    Sitio: 'CYBE',
    Existencia: 64,
    Precio: '$62.34',
    Vencimiento: '7/12/2018'
  },
  {
    Codigo: '49035-520',
    Nombre: 'Filo Dough',
    Presentacion: '765-66-8073',
    Laboratorio: 'Aurélie',
    Sitio: 'TWN',
    Existencia: 83,
    Precio: '$91.07',
    Vencimiento: '10/19/2018'
  },
  {
    Codigo: '0462-0348',
    Nombre: 'Carbonated Water - Wildberry',
    Presentacion: '627-90-8762',
    Laboratorio: 'Renée',
    Sitio: 'LYG',
    Existencia: 42,
    Precio: '$1.53',
    Vencimiento: '10/6/2018'
  },
  {
    Codigo: '58930-060',
    Nombre: 'Cabbage - Nappa',
    Presentacion: '828-03-7737',
    Laboratorio: 'Bérengère',
    Sitio: 'MPAC',
    Existencia: 10,
    Precio: '$94.17',
    Vencimiento: '3/25/2019'
  },
  {
    Codigo: '66184-527',
    Nombre: 'Creamers - 10%',
    Presentacion: '422-51-9119',
    Laboratorio: 'Mylène',
    Sitio: 'NXRT',
    Existencia: 57,
    Precio: '$11.30',
    Vencimiento: '1/16/2019'
  },
  {
    Codigo: '41250-033',
    Nombre: 'Chocolate - Pistoles, Lactee, Milk',
    Presentacion: '188-47-1800',
    Laboratorio: 'Nuó',
    Sitio: 'DSXN',
    Existencia: 20,
    Precio: '$75.46',
    Vencimiento: '5/7/2019'
  },
  {
    Codigo: '59011-752',
    Nombre: 'Sausage - Chorizo',
    Presentacion: '274-96-2784',
    Laboratorio: 'Maïlys',
    Sitio: 'ETSY',
    Existencia: 45,
    Precio: '$82.08',
    Vencimiento: '1/16/2019'
  },
  {
    Codigo: '13668-004',
    Nombre: 'Mushroom - Chantrelle, Fresh',
    Presentacion: '213-25-1974',
    Laboratorio: 'Andréanne',
    Sitio: 'MSCI',
    Existencia: 25,
    Precio: '$60.00',
    Vencimiento: '6/14/2018'
  },
  {
    Codigo: '68016-353',
    Nombre: 'Sauce Tomato Pouch',
    Presentacion: '721-29-0575',
    Laboratorio: 'Kù',
    Sitio: 'ENTG',
    Existencia: 92,
    Precio: '$13.84',
    Vencimiento: '5/13/2019'
  },
  {
    Codigo: '50844-413',
    Nombre: 'Muffin Hinge - 211n',
    Presentacion: '742-58-1102',
    Laboratorio: 'Marlène',
    Sitio: 'LMNR',
    Existencia: 82,
    Precio: '$15.25',
    Vencimiento: '6/12/2018'
  },
  {
    Codigo: '29943-002',
    Nombre: 'Whmis - Spray Bottle Trigger',
    Presentacion: '401-10-0276',
    Laboratorio: 'Mahélie',
    Sitio: 'CINF',
    Existencia: 41,
    Precio: '$46.44',
    Vencimiento: '11/27/2018'
  },
  {
    Codigo: '0615-7653',
    Nombre: 'Chips - Potato Jalapeno',
    Presentacion: '490-58-6778',
    Laboratorio: 'Lóng',
    Sitio: 'ELU',
    Existencia: 84,
    Precio: '$77.18',
    Vencimiento: '6/5/2018'
  },
  {
    Codigo: '43742-0184',
    Nombre: 'Water - Spring Water 500ml',
    Presentacion: '627-51-7641',
    Laboratorio: 'Yénora',
    Sitio: 'TSCO',
    Existencia: 26,
    Precio: '$25.96',
    Vencimiento: '6/27/2018'
  },
  {
    Codigo: '0904-6368',
    Nombre: 'Urban Zen Drinks',
    Presentacion: '585-06-5545',
    Laboratorio: 'Yóu',
    Sitio: 'CRVS',
    Existencia: 95,
    Precio: '$1.97',
    Vencimiento: '4/28/2019'
  },
  {
    Codigo: '68084-581',
    Nombre: 'Mahi Mahi',
    Presentacion: '185-27-0386',
    Laboratorio: 'Tú',
    Sitio: 'FOSL',
    Existencia: 49,
    Precio: '$74.20',
    Vencimiento: '9/13/2018'
  },
  {
    Codigo: '0574-7040',
    Nombre: 'Cinnamon Buns Sticky',
    Presentacion: '191-10-6534',
    Laboratorio: 'Torbjörn',
    Sitio: 'MPCT',
    Existencia: 4,
    Precio: '$67.11',
    Vencimiento: '9/29/2018'
  },
  {
    Codigo: '76138-103',
    Nombre: 'Pork - Smoked Kassler',
    Presentacion: '100-09-1944',
    Laboratorio: 'Clémentine',
    Sitio: 'MCC',
    Existencia: 46,
    Precio: '$86.08',
    Vencimiento: '11/7/2018'
  },
  {
    Codigo: '52959-705',
    Nombre: 'Cheese - Brie',
    Presentacion: '539-27-4929',
    Laboratorio: 'Mélissandre',
    Sitio: 'MTZ',
    Existencia: 74,
    Precio: '$58.97',
    Vencimiento: '6/13/2018'
  },
  {
    Codigo: '68647-171',
    Nombre: 'Lettuce - Lambs Mash',
    Presentacion: '254-75-9269',
    Laboratorio: 'Eliès',
    Sitio: 'IRET',
    Existencia: 30,
    Precio: '$21.60',
    Vencimiento: '5/14/2019'
  },
  {
    Codigo: '59088-740',
    Nombre: 'Sauce - Roasted Red Pepper',
    Presentacion: '108-50-5962',
    Laboratorio: 'Geneviève',
    Sitio: 'JHS',
    Existencia: 40,
    Precio: '$6.98',
    Vencimiento: '7/11/2018'
  },
  {
    Codigo: '55289-168',
    Nombre: 'Galliano',
    Presentacion: '774-63-1954',
    Laboratorio: 'Solène',
    Sitio: 'LTRPB',
    Existencia: 51,
    Precio: '$19.45',
    Vencimiento: '7/11/2018'
  },
  {
    Codigo: '68788-0625',
    Nombre: 'Blueberries - Frozen',
    Presentacion: '441-06-8364',
    Laboratorio: 'Kallisté',
    Sitio: 'TAP',
    Existencia: 3,
    Precio: '$31.43',
    Vencimiento: '4/30/2019'
  },
  {
    Codigo: '59779-962',
    Nombre: 'The Pop Shoppe - Root Beer',
    Presentacion: '812-21-4248',
    Laboratorio: 'Maëly',
    Sitio: 'SNLN',
    Existencia: 91,
    Precio: '$70.20',
    Vencimiento: '10/21/2018'
  },
  {
    Codigo: '49999-739',
    Nombre: 'Table Cloth 81x81 White',
    Presentacion: '181-11-8946',
    Laboratorio: 'Océane',
    Sitio: 'SBAC',
    Existencia: 43,
    Precio: '$34.21',
    Vencimiento: '4/1/2019'
  },
  {
    Codigo: '10147-0882',
    Nombre: 'Lamb Rack - Ontario',
    Presentacion: '343-36-8361',
    Laboratorio: 'Irène',
    Sitio: 'PGEM',
    Existencia: 55,
    Precio: '$49.23',
    Vencimiento: '1/26/2019'
  },
  {
    Codigo: '42947-650',
    Nombre: 'Onion Powder',
    Presentacion: '257-66-7989',
    Laboratorio: 'Gérald',
    Sitio: 'TENX',
    Existencia: 91,
    Precio: '$23.43',
    Vencimiento: '12/17/2018'
  },
  {
    Codigo: '54569-0549',
    Nombre: 'Cookies - Amaretto',
    Presentacion: '498-90-9913',
    Laboratorio: 'Måns',
    Sitio: 'BAC^E',
    Existencia: 93,
    Precio: '$60.13',
    Vencimiento: '4/14/2019'
  },
  {
    Codigo: '68788-9149',
    Nombre: 'Milk - 2% 250 Ml',
    Presentacion: '349-39-3479',
    Laboratorio: 'Märta',
    Sitio: 'NEWM',
    Existencia: 66,
    Precio: '$97.49',
    Vencimiento: '9/30/2018'
  },
  {
    Codigo: '36987-2788',
    Nombre: 'Container - Hngd Cll Blk 7x7x3',
    Presentacion: '491-99-2011',
    Laboratorio: 'Jú',
    Sitio: 'HGH',
    Existencia: 14,
    Precio: '$54.08',
    Vencimiento: '11/2/2018'
  },
  {
    Codigo: '65044-5021',
    Nombre: 'Pork - Sausage, Medium',
    Presentacion: '261-71-1081',
    Laboratorio: 'Nélie',
    Sitio: 'ALSN',
    Existencia: 70,
    Precio: '$94.33',
    Vencimiento: '11/5/2018'
  },
  {
    Codigo: '37808-351',
    Nombre: 'Fish - Halibut, Cold Smoked',
    Presentacion: '409-49-8376',
    Laboratorio: 'Audréanne',
    Sitio: 'WSCI',
    Existencia: 44,
    Precio: '$70.44',
    Vencimiento: '7/18/2018'
  },
  {
    Codigo: '0186-4040',
    Nombre: 'Pasta - Spaghetti, Dry',
    Presentacion: '674-62-9005',
    Laboratorio: 'Mahélie',
    Sitio: 'WRD',
    Existencia: 65,
    Precio: '$70.28',
    Vencimiento: '8/27/2018'
  },
  {
    Codigo: '58232-9911',
    Nombre: 'Sauce - Fish 25 Ozf Bottle',
    Presentacion: '484-33-7849',
    Laboratorio: 'Néhémie',
    Sitio: 'AMAG',
    Existencia: 27,
    Precio: '$53.10',
    Vencimiento: '4/27/2019'
  },
  {
    Codigo: '53808-0690',
    Nombre: 'Tea - English Breakfast',
    Presentacion: '599-50-4608',
    Laboratorio: 'Séverine',
    Sitio: 'SLG^I',
    Existencia: 99,
    Precio: '$89.00',
    Vencimiento: '12/7/2018'
  },
  {
    Codigo: '53329-088',
    Nombre: 'Initation Crab Meat',
    Presentacion: '254-23-1930',
    Laboratorio: 'Loïc',
    Sitio: 'WKHS',
    Existencia: 94,
    Precio: '$78.36',
    Vencimiento: '1/12/2019'
  },
  {
    Codigo: '59762-2701',
    Nombre: 'Gelatine Powder',
    Presentacion: '189-66-3082',
    Laboratorio: 'Bécassine',
    Sitio: 'COF^F',
    Existencia: 51,
    Precio: '$23.84',
    Vencimiento: '1/7/2019'
  },
  {
    Codigo: '43063-498',
    Nombre: 'Tea - Honey Green Tea',
    Presentacion: '208-57-9764',
    Laboratorio: 'Lén',
    Sitio: 'ROSEU',
    Existencia: 13,
    Precio: '$0.23',
    Vencimiento: '5/1/2019'
  },
  {
    Codigo: '48951-1098',
    Nombre: 'Tart Shells - Sweet, 4',
    Presentacion: '155-78-1457',
    Laboratorio: 'Dù',
    Sitio: 'TBNK',
    Existencia: 64,
    Precio: '$98.92',
    Vencimiento: '5/25/2019'
  },
  {
    Codigo: '55714-2248',
    Nombre: 'Veal - Liver',
    Presentacion: '609-52-7668',
    Laboratorio: 'Tán',
    Sitio: 'GRVY',
    Existencia: 4,
    Precio: '$49.03',
    Vencimiento: '9/4/2018'
  },
  {
    Codigo: '68788-9539',
    Nombre: 'Bag - Clear 7 Lb',
    Presentacion: '436-04-7999',
    Laboratorio: 'Annotée',
    Sitio: 'LCM',
    Existencia: 23,
    Precio: '$64.69',
    Vencimiento: '8/30/2018'
  },
  {
    Codigo: '47335-153',
    Nombre: 'Coconut Milk - Unsweetened',
    Presentacion: '342-15-4794',
    Laboratorio: 'Liè',
    Sitio: 'PTLA',
    Existencia: 15,
    Precio: '$74.35',
    Vencimiento: '8/26/2018'
  },
  {
    Codigo: '42884-854',
    Nombre: 'Cheese - Comte',
    Presentacion: '860-64-0824',
    Laboratorio: 'Chloé',
    Sitio: 'FIG',
    Existencia: 58,
    Precio: '$13.01',
    Vencimiento: '9/29/2018'
  },
  {
    Codigo: '33261-764',
    Nombre: 'Appetiser - Bought',
    Presentacion: '189-53-1728',
    Laboratorio: 'Inès',
    Sitio: 'MHLD',
    Existencia: 35,
    Precio: '$13.54',
    Vencimiento: '10/30/2018'
  },
  {
    Codigo: '51367-018',
    Nombre: 'Energy Drink - Redbull 355ml',
    Presentacion: '747-41-6870',
    Laboratorio: 'Méghane',
    Sitio: 'ATOS',
    Existencia: 17,
    Precio: '$35.58',
    Vencimiento: '7/10/2018'
  },
  {
    Codigo: '12634-786',
    Nombre: 'Shrimp - Black Tiger 16/20',
    Presentacion: '233-84-4349',
    Laboratorio: 'Cécile',
    Sitio: 'NMY',
    Existencia: 80,
    Precio: '$61.92',
    Vencimiento: '5/14/2019'
  },
  {
    Codigo: '76439-245',
    Nombre: 'Strawberries - California',
    Presentacion: '386-12-8425',
    Laboratorio: 'Méline',
    Sitio: 'GLPI',
    Existencia: 41,
    Precio: '$82.57',
    Vencimiento: '9/8/2018'
  },
  {
    Codigo: '49348-170',
    Nombre: 'Crab - Blue, Frozen',
    Presentacion: '528-98-4756',
    Laboratorio: 'Marie-ève',
    Sitio: 'LSTR',
    Existencia: 97,
    Precio: '$95.37',
    Vencimiento: '6/27/2018'
  },
  {
    Codigo: '55681-218',
    Nombre: 'Onion Powder',
    Presentacion: '431-35-4419',
    Laboratorio: 'Aimée',
    Sitio: 'PPHM',
    Existencia: 18,
    Precio: '$51.93',
    Vencimiento: '10/23/2018'
  },
  {
    Codigo: '64778-1378',
    Nombre: 'Foam Espresso Cup Plain White',
    Presentacion: '247-80-9259',
    Laboratorio: 'Agnès',
    Sitio: 'LBRDA',
    Existencia: 95,
    Precio: '$1.83',
    Vencimiento: '10/29/2018'
  },
  {
    Codigo: '63323-201',
    Nombre: 'Almonds Ground Blanched',
    Presentacion: '557-75-3318',
    Laboratorio: 'Eléonore',
    Sitio: 'CCMP',
    Existencia: 22,
    Precio: '$77.04',
    Vencimiento: '2/18/2019'
  },
  {
    Codigo: '43455-0020',
    Nombre: 'Potatoes - Pei 10 Oz',
    Presentacion: '754-72-6417',
    Laboratorio: 'Märta',
    Sitio: 'FLXS',
    Existencia: 19,
    Precio: '$11.07',
    Vencimiento: '3/9/2019'
  },
  {
    Codigo: '68016-448',
    Nombre: 'Cookies - Oreo, 4 Pack',
    Presentacion: '397-04-2305',
    Laboratorio: 'Clémence',
    Sitio: 'WBC',
    Existencia: 65,
    Precio: '$12.81',
    Vencimiento: '4/25/2019'
  },
  {
    Codigo: '65342-1005',
    Nombre: 'Arizona - Plum Green Tea',
    Presentacion: '169-06-2322',
    Laboratorio: 'Mégane',
    Sitio: 'IFGL',
    Existencia: 24,
    Precio: '$94.89',
    Vencimiento: '2/19/2019'
  },
  {
    Codigo: '54622-698',
    Nombre: 'Tomatoes',
    Presentacion: '662-67-7452',
    Laboratorio: 'Faîtes',
    Sitio: 'JBHT',
    Existencia: 83,
    Precio: '$10.59',
    Vencimiento: '12/23/2018'
  },
  {
    Codigo: '58930-014',
    Nombre: 'Cookies - Englishbay Oatmeal',
    Presentacion: '779-27-9691',
    Laboratorio: 'Yè',
    Sitio: 'ARMK',
    Existencia: 59,
    Precio: '$87.91',
    Vencimiento: '3/20/2019'
  },
  {
    Codigo: '0006-0717',
    Nombre: 'Pasta - Linguini, Dry',
    Presentacion: '587-03-4273',
    Laboratorio: 'Mahélie',
    Sitio: 'ITT',
    Existencia: 68,
    Precio: '$52.86',
    Vencimiento: '1/1/2019'
  },
  {
    Codigo: '63629-4169',
    Nombre: 'Pail - 4l White, With Handle',
    Presentacion: '888-47-7916',
    Laboratorio: 'Adèle',
    Sitio: 'LOW',
    Existencia: 20,
    Precio: '$45.13',
    Vencimiento: '2/24/2019'
  },
  {
    Codigo: '59779-011',
    Nombre: 'Cheese - Havarti, Salsa',
    Presentacion: '653-24-2179',
    Laboratorio: 'Léandre',
    Sitio: 'PEIX',
    Existencia: 56,
    Precio: '$50.42',
    Vencimiento: '10/29/2018'
  },
  {
    Codigo: '10812-440',
    Nombre: 'Basil - Fresh',
    Presentacion: '677-53-4505',
    Laboratorio: 'Eléa',
    Sitio: 'NAD',
    Existencia: 49,
    Precio: '$42.09',
    Vencimiento: '9/13/2018'
  },
  {
    Codigo: '10191-1763',
    Nombre: 'Beef Striploin Aaa',
    Presentacion: '610-37-1175',
    Laboratorio: 'Adélie',
    Sitio: 'MSBI',
    Existencia: 30,
    Precio: '$92.38',
    Vencimiento: '5/2/2019'
  },
  {
    Codigo: '61727-340',
    Nombre: 'Wine - Chenin Blanc K.w.v.',
    Presentacion: '563-77-1067',
    Laboratorio: 'Tú',
    Sitio: 'FLGT',
    Existencia: 33,
    Precio: '$15.11',
    Vencimiento: '9/29/2018'
  },
  {
    Codigo: '0006-0112',
    Nombre: 'Cheese Cheddar Processed',
    Presentacion: '754-86-0177',
    Laboratorio: 'Tán',
    Sitio: 'TTF',
    Existencia: 68,
    Precio: '$89.64',
    Vencimiento: '7/28/2018'
  },
  {
    Codigo: '43857-0061',
    Nombre: 'Beer - Fruli',
    Presentacion: '436-72-3558',
    Laboratorio: 'Faîtes',
    Sitio: 'ASPS',
    Existencia: 9,
    Precio: '$3.42',
    Vencimiento: '5/13/2019'
  },
  {
    Codigo: '68828-128',
    Nombre: 'Dooleys Toffee',
    Presentacion: '286-34-0356',
    Laboratorio: 'Faîtes',
    Sitio: 'MHO^A',
    Existencia: 95,
    Precio: '$64.43',
    Vencimiento: '7/5/2018'
  },
  {
    Codigo: '66336-316',
    Nombre: 'Pepper - Jalapeno',
    Presentacion: '341-22-6844',
    Laboratorio: 'Sélène',
    Sitio: 'TECH',
    Existencia: 98,
    Precio: '$49.37',
    Vencimiento: '6/26/2018'
  },
  {
    Codigo: '49349-210',
    Nombre: 'Juice - Clamato, 341 Ml',
    Presentacion: '693-70-1705',
    Laboratorio: 'Simplifiés',
    Sitio: 'NVDQ',
    Existencia: 30,
    Precio: '$89.63',
    Vencimiento: '7/19/2018'
  },
  {
    Codigo: '61941-0122',
    Nombre: 'Vodka - Hot, Lnferno',
    Presentacion: '491-80-1177',
    Laboratorio: 'Bénédicte',
    Sitio: 'AFG',
    Existencia: 47,
    Precio: '$8.17',
    Vencimiento: '4/23/2019'
  },
  {
    Codigo: '68001-001',
    Nombre: 'Soupfoamcont12oz 112con',
    Presentacion: '476-47-2449',
    Laboratorio: 'Estée',
    Sitio: 'REXR^A',
    Existencia: 18,
    Precio: '$54.19',
    Vencimiento: '12/9/2018'
  },
  {
    Codigo: '57687-919',
    Nombre: 'Salmon Steak - Cohoe 8 Oz',
    Presentacion: '719-07-7485',
    Laboratorio: 'Adélaïde',
    Sitio: 'CO',
    Existencia: 28,
    Precio: '$5.81',
    Vencimiento: '4/14/2019'
  },
  {
    Codigo: '36987-1888',
    Nombre: 'Coffee Caramel Biscotti',
    Presentacion: '345-04-1342',
    Laboratorio: 'Mégane',
    Sitio: 'TUES',
    Existencia: 11,
    Precio: '$67.24',
    Vencimiento: '2/15/2019'
  },
  {
    Codigo: '60760-016',
    Nombre: 'Miso - Soy Bean Paste',
    Presentacion: '417-96-4586',
    Laboratorio: 'Ruò',
    Sitio: 'VLP',
    Existencia: 7,
    Precio: '$7.32',
    Vencimiento: '2/13/2019'
  },
  {
    Codigo: '29500-9711',
    Nombre: 'Veal - Chops, Split, Frenched',
    Presentacion: '585-20-3878',
    Laboratorio: 'Marie-noël',
    Sitio: 'KNX',
    Existencia: 22,
    Precio: '$32.42',
    Vencimiento: '7/27/2018'
  },
  {
    Codigo: '37000-260',
    Nombre: 'Apple - Macintosh',
    Presentacion: '148-73-5691',
    Laboratorio: 'Ophélie',
    Sitio: 'AHPI',
    Existencia: 12,
    Precio: '$51.74',
    Vencimiento: '9/10/2018'
  },
  {
    Codigo: '43353-741',
    Nombre: 'Cheese - Provolone',
    Presentacion: '138-95-4731',
    Laboratorio: 'Vénus',
    Sitio: 'OXM',
    Existencia: 81,
    Precio: '$75.28',
    Vencimiento: '1/25/2019'
  },
  {
    Codigo: '49999-378',
    Nombre: 'Tart Shells - Savory, 3',
    Presentacion: '759-71-5080',
    Laboratorio: 'Lén',
    Sitio: 'NGHCP',
    Existencia: 50,
    Precio: '$60.60',
    Vencimiento: '6/15/2018'
  },
  {
    Codigo: '67046-950',
    Nombre: 'Cherries - Maraschino,jar',
    Presentacion: '551-79-9901',
    Laboratorio: 'Vénus',
    Sitio: 'ITG',
    Existencia: 58,
    Precio: '$72.41',
    Vencimiento: '7/17/2018'
  },
  {
    Codigo: '68382-131',
    Nombre: 'Sage - Rubbed',
    Presentacion: '338-42-4077',
    Laboratorio: 'Bérengère',
    Sitio: 'DTRM',
    Existencia: 25,
    Precio: '$50.03',
    Vencimiento: '12/28/2018'
  },
  {
    Codigo: '43547-273',
    Nombre: 'Yoplait Drink',
    Presentacion: '611-34-4673',
    Laboratorio: 'Bérangère',
    Sitio: 'CLFD',
    Existencia: 75,
    Precio: '$86.97',
    Vencimiento: '11/17/2018'
  },
  {
    Codigo: '43071-110',
    Nombre: 'Milk - 2%',
    Presentacion: '340-65-3815',
    Laboratorio: 'Gérald',
    Sitio: 'FEM',
    Existencia: 65,
    Precio: '$85.02',
    Vencimiento: '3/21/2019'
  },
  {
    Codigo: '0003-1614',
    Nombre: 'Cheese - Ermite Bleu',
    Presentacion: '808-42-0871',
    Laboratorio: 'Edmée',
    Sitio: 'WMAR',
    Existencia: 73,
    Precio: '$66.39',
    Vencimiento: '10/9/2018'
  },
  {
    Codigo: '68828-140',
    Nombre: 'Cheese - Cheddar, Medium',
    Presentacion: '523-22-1323',
    Laboratorio: 'Nuó',
    Sitio: 'BCRX',
    Existencia: 38,
    Precio: '$7.28',
    Vencimiento: '10/16/2018'
  },
  {
    Codigo: '0363-4010',
    Nombre: 'Ice Cream Bar - Hageen Daz To',
    Presentacion: '534-50-9810',
    Laboratorio: 'Méthode',
    Sitio: 'BSL',
    Existencia: 62,
    Precio: '$83.01',
    Vencimiento: '5/20/2019'
  },
  {
    Codigo: '46122-176',
    Nombre: 'Wine - Manischewitz Concord',
    Presentacion: '417-38-2052',
    Laboratorio: 'Garçon',
    Sitio: 'RICK',
    Existencia: 21,
    Precio: '$53.37',
    Vencimiento: '12/1/2018'
  },
  {
    Codigo: '46122-204',
    Nombre: 'Nut - Almond, Blanched, Sliced',
    Presentacion: '356-65-2183',
    Laboratorio: 'Angèle',
    Sitio: 'CEMP',
    Existencia: 21,
    Precio: '$53.83',
    Vencimiento: '3/9/2019'
  },
  {
    Codigo: '0409-7677',
    Nombre: 'Asparagus - White, Canned',
    Presentacion: '820-44-9403',
    Laboratorio: 'Mårten',
    Sitio: 'BIIB',
    Existencia: 8,
    Precio: '$19.77',
    Vencimiento: '5/6/2019'
  },
  {
    Codigo: '63874-413',
    Nombre: 'Wine - Champagne Brut Veuve',
    Presentacion: '593-23-1467',
    Laboratorio: 'Miléna',
    Sitio: 'PIY',
    Existencia: 65,
    Precio: '$25.76',
    Vencimiento: '3/17/2019'
  },
  {
    Codigo: '0904-5377',
    Nombre: 'Napkin - Beverge, White 2 - Ply',
    Presentacion: '807-44-5083',
    Laboratorio: 'Rébecca',
    Sitio: 'FTR',
    Existencia: 98,
    Precio: '$99.39',
    Vencimiento: '9/21/2018'
  },
  {
    Codigo: '67905-0001',
    Nombre: 'Peas Snow',
    Presentacion: '867-18-0872',
    Laboratorio: 'Torbjörn',
    Sitio: 'UL',
    Existencia: 60,
    Precio: '$93.35',
    Vencimiento: '6/5/2018'
  },
  {
    Codigo: '51079-020',
    Nombre: 'Wine - Vineland Estate Semi - Dry',
    Presentacion: '556-99-3231',
    Laboratorio: 'Michèle',
    Sitio: 'PDVW',
    Existencia: 70,
    Precio: '$79.29',
    Vencimiento: '9/1/2018'
  },
  {
    Codigo: '55289-270',
    Nombre: 'Creme De Banane - Marie',
    Presentacion: '454-09-2967',
    Laboratorio: 'Marlène',
    Sitio: 'ISRL',
    Existencia: 74,
    Precio: '$68.25',
    Vencimiento: '3/2/2019'
  },
  {
    Codigo: '0904-5763',
    Nombre: 'Mints - Striped Red',
    Presentacion: '419-05-3748',
    Laboratorio: 'Laurène',
    Sitio: 'WU',
    Existencia: 37,
    Precio: '$89.14',
    Vencimiento: '11/26/2018'
  },
  {
    Codigo: '34666-111',
    Nombre: 'Wine - Merlot Vina Carmen',
    Presentacion: '196-62-2936',
    Laboratorio: 'Réjane',
    Sitio: 'LND',
    Existencia: 17,
    Precio: '$6.53',
    Vencimiento: '5/2/2019'
  },
  {
    Codigo: '41595-5537',
    Nombre: 'Longos - Lasagna Beef',
    Presentacion: '322-78-6149',
    Laboratorio: 'Nélie',
    Sitio: 'TLI',
    Existencia: 40,
    Precio: '$88.79',
    Vencimiento: '5/25/2019'
  },
  {
    Codigo: '53807-216',
    Nombre: 'Pastry - Apple Large',
    Presentacion: '107-20-5035',
    Laboratorio: 'Anaëlle',
    Sitio: 'HAS',
    Existencia: 23,
    Precio: '$64.16',
    Vencimiento: '11/26/2018'
  },
  {
    Codigo: '65862-159',
    Nombre: 'Lamb - Sausage Casings',
    Presentacion: '393-57-7219',
    Laboratorio: 'Stévina',
    Sitio: 'DWAT',
    Existencia: 55,
    Precio: '$4.67',
    Vencimiento: '10/25/2018'
  },
  {
    Codigo: '42507-815',
    Nombre: 'Salmon - Sockeye Raw',
    Presentacion: '440-21-6115',
    Laboratorio: 'Françoise',
    Sitio: 'PRAH',
    Existencia: 2,
    Precio: '$97.99',
    Vencimiento: '3/26/2019'
  },
  {
    Codigo: '67046-158',
    Nombre: 'Beef - Tenderloin - Aa',
    Presentacion: '511-83-7770',
    Laboratorio: 'Dù',
    Sitio: 'PBA',
    Existencia: 42,
    Precio: '$54.92',
    Vencimiento: '3/13/2019'
  },
  {
    Codigo: '48951-1232',
    Nombre: 'Smirnoff Green Apple Twist',
    Presentacion: '381-50-9116',
    Laboratorio: 'Pélagie',
    Sitio: 'BJRI',
    Existencia: 13,
    Precio: '$5.74',
    Vencimiento: '3/25/2019'
  },
  {
    Codigo: '57520-0234',
    Nombre: 'Sour Puss Sour Apple',
    Presentacion: '595-13-0623',
    Laboratorio: 'Mélys',
    Sitio: 'NWLI',
    Existencia: 42,
    Precio: '$62.10',
    Vencimiento: '8/27/2018'
  },
  {
    Codigo: '65517-2021',
    Nombre: 'Tea - Grapefruit Green Tea',
    Presentacion: '162-03-6714',
    Laboratorio: 'Loïc',
    Sitio: 'USB^A',
    Existencia: 10,
    Precio: '$29.27',
    Vencimiento: '8/27/2018'
  },
  {
    Codigo: '11673-206',
    Nombre: 'Shallots',
    Presentacion: '192-11-9400',
    Laboratorio: 'Maéna',
    Sitio: 'AIC',
    Existencia: 4,
    Precio: '$60.72',
    Vencimiento: '7/21/2018'
  },
  {
    Codigo: '61727-316',
    Nombre: 'Noodles - Cellophane, Thin',
    Presentacion: '817-62-0132',
    Laboratorio: 'Méthode',
    Sitio: 'UIS',
    Existencia: 57,
    Precio: '$99.99',
    Vencimiento: '7/13/2018'
  },
  {
    Codigo: '49738-141',
    Nombre: 'Towel Multifold',
    Presentacion: '886-52-4292',
    Laboratorio: 'Cléopatre',
    Sitio: 'USOI',
    Existencia: 74,
    Precio: '$3.22',
    Vencimiento: '6/1/2018'
  },
  {
    Codigo: '48951-8160',
    Nombre: 'Bread - Triangle White',
    Presentacion: '353-44-7163',
    Laboratorio: 'Naéva',
    Sitio: 'CPSS',
    Existencia: 70,
    Precio: '$54.13',
    Vencimiento: '8/10/2018'
  },
  {
    Codigo: '44911-0055',
    Nombre: 'Mini - Vol Au Vents',
    Presentacion: '785-26-8065',
    Laboratorio: 'Uò',
    Sitio: 'ZYNE',
    Existencia: 14,
    Precio: '$48.29',
    Vencimiento: '1/28/2019'
  },
  {
    Codigo: '0409-1894',
    Nombre: 'Cocktail Napkin Blue',
    Presentacion: '177-63-2722',
    Laboratorio: 'Naëlle',
    Sitio: 'PL^E',
    Existencia: 100,
    Precio: '$79.81',
    Vencimiento: '10/20/2018'
  },
  {
    Codigo: '49643-323',
    Nombre: 'Flour - Pastry',
    Presentacion: '555-47-9605',
    Laboratorio: 'Måns',
    Sitio: 'CAC',
    Existencia: 6,
    Precio: '$4.38',
    Vencimiento: '11/19/2018'
  },
  {
    Codigo: '68084-295',
    Nombre: 'Sansho Powder',
    Presentacion: '410-13-6579',
    Laboratorio: 'Edmée',
    Sitio: 'AXTI',
    Existencia: 67,
    Precio: '$21.71',
    Vencimiento: '4/12/2019'
  },
  {
    Codigo: '24658-142',
    Nombre: 'Table Cloth - 53x69 Colour',
    Presentacion: '316-14-8694',
    Laboratorio: 'Maëline',
    Sitio: 'MMC',
    Existencia: 4,
    Precio: '$27.06',
    Vencimiento: '7/13/2018'
  },
  {
    Codigo: '63044-635',
    Nombre: 'Vermouth - White, Cinzano',
    Presentacion: '168-45-4797',
    Laboratorio: 'Geneviève',
    Sitio: 'TCBK',
    Existencia: 52,
    Precio: '$65.20',
    Vencimiento: '2/13/2019'
  },
  {
    Codigo: '45942-1629',
    Nombre: 'Eggroll',
    Presentacion: '836-93-0964',
    Laboratorio: 'Josée',
    Sitio: 'RUN',
    Existencia: 93,
    Precio: '$45.73',
    Vencimiento: '12/8/2018'
  },
  {
    Codigo: '59779-173',
    Nombre: 'Orange Roughy 6/8 Oz',
    Presentacion: '601-15-3372',
    Laboratorio: 'Laïla',
    Sitio: 'HFWA',
    Existencia: 74,
    Precio: '$8.85',
    Vencimiento: '8/1/2018'
  },
  {
    Codigo: '0067-8114',
    Nombre: 'Piping Jelly - All Colours',
    Presentacion: '510-65-0732',
    Laboratorio: 'Eliès',
    Sitio: 'LMRK',
    Existencia: 38,
    Precio: '$15.65',
    Vencimiento: '9/24/2018'
  },
  {
    Codigo: '43857-0193',
    Nombre: 'Calypso - Strawberry Lemonade',
    Presentacion: '354-37-7946',
    Laboratorio: 'Maïlis',
    Sitio: 'C^P',
    Existencia: 74,
    Precio: '$19.35',
    Vencimiento: '1/21/2019'
  },
  {
    Codigo: '0268-1049',
    Nombre: 'Southern Comfort',
    Presentacion: '702-68-3037',
    Laboratorio: 'Pål',
    Sitio: 'AMC',
    Existencia: 10,
    Precio: '$22.10',
    Vencimiento: '7/8/2018'
  },
  {
    Codigo: '58980-502',
    Nombre: 'Aspic - Clear',
    Presentacion: '817-78-8077',
    Laboratorio: 'Bérengère',
    Sitio: 'CF',
    Existencia: 18,
    Precio: '$77.00',
    Vencimiento: '4/16/2019'
  },
  {
    Codigo: '60681-1295',
    Nombre: 'Shrimp - Prawn',
    Presentacion: '619-23-8384',
    Laboratorio: 'Marlène',
    Sitio: 'FTSM',
    Existencia: 74,
    Precio: '$7.31',
    Vencimiento: '10/9/2018'
  },
  {
    Codigo: '57237-090',
    Nombre: 'Creme De Banane - Marie',
    Presentacion: '874-96-9582',
    Laboratorio: 'Angèle',
    Sitio: 'HYT',
    Existencia: 73,
    Precio: '$58.64',
    Vencimiento: '1/10/2019'
  },
  {
    Codigo: '29500-2264',
    Nombre: 'Muffins - Assorted',
    Presentacion: '881-40-3184',
    Laboratorio: 'Táng',
    Sitio: 'LCII',
    Existencia: 27,
    Precio: '$56.50',
    Vencimiento: '9/4/2018'
  },
  {
    Codigo: '53499-1390',
    Nombre: 'Wine - Manischewitz Concord',
    Presentacion: '677-21-7781',
    Laboratorio: 'Léonore',
    Sitio: 'UONE',
    Existencia: 8,
    Precio: '$62.39',
    Vencimiento: '10/28/2018'
  },
  {
    Codigo: '41163-358',
    Nombre: 'Nut - Pine Nuts, Whole',
    Presentacion: '234-90-7777',
    Laboratorio: 'Erwéi',
    Sitio: 'UBA',
    Existencia: 79,
    Precio: '$83.75',
    Vencimiento: '7/16/2018'
  },
  {
    Codigo: '64942-1158',
    Nombre: 'Grapes - Black',
    Presentacion: '231-50-3798',
    Laboratorio: 'Andrée',
    Sitio: 'NVFY',
    Existencia: 86,
    Precio: '$78.28',
    Vencimiento: '1/15/2019'
  },
  {
    Codigo: '41167-1008',
    Nombre: 'Rabbit - Whole',
    Presentacion: '396-69-6315',
    Laboratorio: 'Cléa',
    Sitio: 'OACQU',
    Existencia: 9,
    Precio: '$90.42',
    Vencimiento: '3/23/2019'
  },
  {
    Codigo: '0378-0185',
    Nombre: 'Sauce - Chili',
    Presentacion: '111-92-2848',
    Laboratorio: 'Adélie',
    Sitio: 'CFO',
    Existencia: 30,
    Precio: '$39.45',
    Vencimiento: '3/13/2019'
  },
  {
    Codigo: '59115-028',
    Nombre: 'Crab - Claws, Snow 16 - 24',
    Presentacion: '144-09-0196',
    Laboratorio: 'Mélissandre',
    Sitio: 'VG',
    Existencia: 22,
    Precio: '$2.69',
    Vencimiento: '7/11/2018'
  },
  {
    Codigo: '44911-0125',
    Nombre: 'Soup - Knorr, French Onion',
    Presentacion: '492-08-9381',
    Laboratorio: 'Naëlle',
    Sitio: 'NODK',
    Existencia: 79,
    Precio: '$31.84',
    Vencimiento: '7/21/2018'
  },
  {
    Codigo: '57896-764',
    Nombre: 'Oil - Sunflower',
    Presentacion: '652-34-8766',
    Laboratorio: 'Frédérique',
    Sitio: 'FNB^E',
    Existencia: 61,
    Precio: '$30.48',
    Vencimiento: '12/21/2018'
  },
  {
    Codigo: '55154-3952',
    Nombre: 'Truffle Shells - White Chocolate',
    Presentacion: '629-07-1756',
    Laboratorio: 'Ruò',
    Sitio: 'MARK',
    Existencia: 80,
    Precio: '$15.06',
    Vencimiento: '4/12/2019'
  },
  {
    Codigo: '75857-2153',
    Nombre: 'Muffin - Mix - Bran And Maple 15l',
    Presentacion: '783-33-8764',
    Laboratorio: 'Aí',
    Sitio: 'BCLI',
    Existencia: 73,
    Precio: '$7.10',
    Vencimiento: '3/16/2019'
  },
  {
    Codigo: '67544-185',
    Nombre: 'Wine - Rhine Riesling Wolf Blass',
    Presentacion: '273-15-7056',
    Laboratorio: 'Clémentine',
    Sitio: 'IEP',
    Existencia: 53,
    Precio: '$73.66',
    Vencimiento: '3/12/2019'
  },
  {
    Codigo: '62362-184',
    Nombre: 'Chicken - Breast, 5 - 7 Oz',
    Presentacion: '348-12-1036',
    Laboratorio: 'Styrbjörn',
    Sitio: 'PGTI',
    Existencia: 40,
    Precio: '$19.84',
    Vencimiento: '2/18/2019'
  },
  {
    Codigo: '21695-188',
    Nombre: 'Beef - Tenderloin - Aa',
    Presentacion: '413-52-7618',
    Laboratorio: 'Naëlle',
    Sitio: 'DIOD',
    Existencia: 2,
    Precio: '$46.98',
    Vencimiento: '6/9/2018'
  },
  {
    Codigo: '54868-3068',
    Nombre: 'Olives - Morracan Dired',
    Presentacion: '737-82-8955',
    Laboratorio: 'Yáo',
    Sitio: 'NEPT',
    Existencia: 9,
    Precio: '$8.68',
    Vencimiento: '8/3/2018'
  },
  {
    Codigo: '61578-206',
    Nombre: 'Cloves - Ground',
    Presentacion: '655-26-0917',
    Laboratorio: 'Cinéma',
    Sitio: 'NNN',
    Existencia: 42,
    Precio: '$78.13',
    Vencimiento: '1/11/2019'
  },
  {
    Codigo: '54868-6122',
    Nombre: 'Muffin Carrot - Individual',
    Presentacion: '214-24-0075',
    Laboratorio: 'Östen',
    Sitio: 'CRM',
    Existencia: 61,
    Precio: '$43.32',
    Vencimiento: '2/17/2019'
  },
  {
    Codigo: '61715-058',
    Nombre: 'Milk Powder',
    Presentacion: '511-27-5542',
    Laboratorio: 'Céline',
    Sitio: 'CPN',
    Existencia: 8,
    Precio: '$10.59',
    Vencimiento: '5/9/2019'
  },
  {
    Codigo: '67692-290',
    Nombre: 'Pepper - Orange',
    Presentacion: '364-09-7225',
    Laboratorio: 'Cléopatre',
    Sitio: 'FTFT',
    Existencia: 53,
    Precio: '$56.94',
    Vencimiento: '5/29/2019'
  },
  {
    Codigo: '27293-024',
    Nombre: 'Lid - 16 Oz And 32 Oz',
    Presentacion: '834-70-6303',
    Laboratorio: 'Adélie',
    Sitio: 'CMCM',
    Existencia: 90,
    Precio: '$60.78',
    Vencimiento: '11/4/2018'
  },
  {
    Codigo: '60512-6449',
    Nombre: 'Papadam',
    Presentacion: '781-49-8924',
    Laboratorio: 'Mà',
    Sitio: 'ABAC',
    Existencia: 91,
    Precio: '$44.99',
    Vencimiento: '7/19/2018'
  },
  {
    Codigo: '0093-5347',
    Nombre: 'Wine - Casablanca Valley',
    Presentacion: '120-33-2336',
    Laboratorio: 'Tán',
    Sitio: 'HGV',
    Existencia: 72,
    Precio: '$2.65',
    Vencimiento: '4/2/2019'
  },
  {
    Codigo: '76446-007',
    Nombre: 'Chervil - Fresh',
    Presentacion: '147-50-5859',
    Laboratorio: 'Laurène',
    Sitio: 'PSB^U',
    Existencia: 55,
    Precio: '$56.28',
    Vencimiento: '4/13/2019'
  },
  {
    Codigo: '43617-3415',
    Nombre: 'Truffle Cups - Red',
    Presentacion: '723-46-2837',
    Laboratorio: 'Vénus',
    Sitio: 'KNX',
    Existencia: 72,
    Precio: '$63.63',
    Vencimiento: '1/6/2019'
  },
  {
    Codigo: '0078-0149',
    Nombre: 'Extract - Almond',
    Presentacion: '560-15-3131',
    Laboratorio: 'Mylène',
    Sitio: 'BBT^E',
    Existencia: 43,
    Precio: '$29.75',
    Vencimiento: '12/24/2018'
  },
  {
    Codigo: '55111-273',
    Nombre: 'Orange - Blood',
    Presentacion: '646-96-0928',
    Laboratorio: 'Fèi',
    Sitio: 'RENN',
    Existencia: 8,
    Precio: '$61.79',
    Vencimiento: '3/30/2019'
  },
  {
    Codigo: '60505-2865',
    Nombre: 'Food Colouring - Blue',
    Presentacion: '460-14-4946',
    Laboratorio: 'Angèle',
    Sitio: 'AGD',
    Existencia: 86,
    Precio: '$20.05',
    Vencimiento: '4/9/2019'
  },
  {
    Codigo: '0093-7351',
    Nombre: 'Flour - Cake',
    Presentacion: '404-14-7139',
    Laboratorio: 'Léonore',
    Sitio: 'PRAA',
    Existencia: 17,
    Precio: '$44.78',
    Vencimiento: '6/27/2018'
  },
  {
    Codigo: '66125-001',
    Nombre: 'Beef Striploin Aaa',
    Presentacion: '466-49-1548',
    Laboratorio: 'Méryl',
    Sitio: 'HVT',
    Existencia: 14,
    Precio: '$70.57',
    Vencimiento: '3/21/2019'
  },
  {
    Codigo: '33342-089',
    Nombre: 'Pepper - Red Thai',
    Presentacion: '654-60-0346',
    Laboratorio: 'Cinéma',
    Sitio: 'DRQ',
    Existencia: 11,
    Precio: '$4.98',
    Vencimiento: '4/11/2019'
  },
  {
    Codigo: '42291-618',
    Nombre: 'Tuna - Yellowfin',
    Presentacion: '801-60-8106',
    Laboratorio: 'Kévina',
    Sitio: 'RMP',
    Existencia: 92,
    Precio: '$60.22',
    Vencimiento: '5/28/2019'
  },
  {
    Codigo: '50436-7218',
    Nombre: 'Pesto - Primerba, Paste',
    Presentacion: '587-69-8149',
    Laboratorio: 'Personnalisée',
    Sitio: 'AMBCW',
    Existencia: 26,
    Precio: '$46.29',
    Vencimiento: '5/11/2019'
  },
  {
    Codigo: '52584-495',
    Nombre: 'Plastic Wrap',
    Presentacion: '337-66-6159',
    Laboratorio: 'Josée',
    Sitio: 'ERA',
    Existencia: 19,
    Precio: '$47.08',
    Vencimiento: '6/12/2018'
  },
  {
    Codigo: '13537-062',
    Nombre: 'Mushroom - Chanterelle Frozen',
    Presentacion: '667-59-0005',
    Laboratorio: 'Géraldine',
    Sitio: 'UNM',
    Existencia: 70,
    Precio: '$30.04',
    Vencimiento: '10/18/2018'
  },
  {
    Codigo: '65133-160',
    Nombre: 'Baking Powder',
    Presentacion: '314-83-8852',
    Laboratorio: 'Zoé',
    Sitio: 'HRTX',
    Existencia: 66,
    Precio: '$97.30',
    Vencimiento: '8/12/2018'
  },
  {
    Codigo: '10702-013',
    Nombre: 'Towel Dispenser',
    Presentacion: '576-46-1158',
    Laboratorio: 'Styrbjörn',
    Sitio: 'HMHC',
    Existencia: 98,
    Precio: '$1.48',
    Vencimiento: '3/20/2019'
  },
  {
    Codigo: '60505-0232',
    Nombre: 'Appetizer - Chicken Satay',
    Presentacion: '239-62-5036',
    Laboratorio: 'Solène',
    Sitio: 'AHL^C',
    Existencia: 11,
    Precio: '$55.78',
    Vencimiento: '10/7/2018'
  },
  {
    Codigo: '76237-194',
    Nombre: 'Pear - Asian',
    Presentacion: '725-62-6632',
    Laboratorio: 'Marie-josée',
    Sitio: 'PFE',
    Existencia: 14,
    Precio: '$81.61',
    Vencimiento: '6/28/2018'
  },
  {
    Codigo: '0143-9702',
    Nombre: 'Water, Tap',
    Presentacion: '704-54-1847',
    Laboratorio: 'Clémence',
    Sitio: 'FCH^A',
    Existencia: 78,
    Precio: '$36.17',
    Vencimiento: '5/8/2019'
  },
  {
    Codigo: '55758-010',
    Nombre: 'Cocoa Powder - Dutched',
    Presentacion: '683-15-8940',
    Laboratorio: 'Adélaïde',
    Sitio: 'STAR^E',
    Existencia: 92,
    Precio: '$67.21',
    Vencimiento: '7/5/2018'
  },
  {
    Codigo: '30142-374',
    Nombre: 'Bread - Focaccia Quarter',
    Presentacion: '310-70-2844',
    Laboratorio: 'Marie-françoise',
    Sitio: 'UAL',
    Existencia: 92,
    Precio: '$34.88',
    Vencimiento: '11/14/2018'
  },
  {
    Codigo: '58118-1512',
    Nombre: 'Bread Foccacia Whole',
    Presentacion: '150-16-9888',
    Laboratorio: 'Åslög',
    Sitio: 'GS^J',
    Existencia: 69,
    Precio: '$44.52',
    Vencimiento: '9/16/2018'
  },
  {
    Codigo: '16714-694',
    Nombre: 'Plasticknivesblack',
    Presentacion: '524-56-5753',
    Laboratorio: 'Almérinda',
    Sitio: 'OVBC',
    Existencia: 16,
    Precio: '$22.96',
    Vencimiento: '4/25/2019'
  },
  {
    Codigo: '52125-899',
    Nombre: 'Dill Weed - Fresh',
    Presentacion: '740-41-3785',
    Laboratorio: 'Zoé',
    Sitio: 'DSPG',
    Existencia: 75,
    Precio: '$39.37',
    Vencimiento: '6/21/2018'
  },
  {
    Codigo: '63304-097',
    Nombre: 'Petit Baguette',
    Presentacion: '788-29-5788',
    Laboratorio: 'Méthode',
    Sitio: 'ZNWAA',
    Existencia: 31,
    Precio: '$43.91',
    Vencimiento: '4/4/2019'
  },
  {
    Codigo: '53808-0695',
    Nombre: 'Wiberg Cure',
    Presentacion: '411-66-0585',
    Laboratorio: 'Véronique',
    Sitio: 'LAWS',
    Existencia: 67,
    Precio: '$64.59',
    Vencimiento: '1/8/2019'
  },
  {
    Codigo: '55910-737',
    Nombre: 'Pepperoni Slices',
    Presentacion: '725-57-7346',
    Laboratorio: 'Noëlla',
    Sitio: 'AFGE',
    Existencia: 87,
    Precio: '$11.17',
    Vencimiento: '12/14/2018'
  },
  {
    Codigo: '10348-002',
    Nombre: 'Veal - Nuckle',
    Presentacion: '786-46-2190',
    Laboratorio: 'Marie-thérèse',
    Sitio: 'NUM',
    Existencia: 71,
    Precio: '$28.41',
    Vencimiento: '1/7/2019'
  },
  {
    Codigo: '63187-104',
    Nombre: 'Scallops - In Shell',
    Presentacion: '718-22-6855',
    Laboratorio: 'Cloé',
    Sitio: 'AKO.A',
    Existencia: 26,
    Precio: '$97.24',
    Vencimiento: '5/2/2019'
  },
  {
    Codigo: '24794-103',
    Nombre: 'Wine - Savigny - Les - Beaune',
    Presentacion: '455-51-3137',
    Laboratorio: 'Táng',
    Sitio: 'PEZ',
    Existencia: 64,
    Precio: '$72.56',
    Vencimiento: '3/26/2019'
  },
  {
    Codigo: '54340-779',
    Nombre: 'Pernod',
    Presentacion: '101-43-6341',
    Laboratorio: 'Dù',
    Sitio: 'BANC^D',
    Existencia: 4,
    Precio: '$77.32',
    Vencimiento: '6/8/2018'
  },
  {
    Codigo: '24385-463',
    Nombre: 'Yogurt - Assorted Pack',
    Presentacion: '458-64-9319',
    Laboratorio: 'Gösta',
    Sitio: 'REVG',
    Existencia: 99,
    Precio: '$47.24',
    Vencimiento: '5/22/2019'
  },
  {
    Codigo: '52125-265',
    Nombre: 'Water - Aquafina Vitamin',
    Presentacion: '214-60-7415',
    Laboratorio: 'Léane',
    Sitio: 'AXS',
    Existencia: 42,
    Precio: '$19.58',
    Vencimiento: '9/2/2018'
  },
  {
    Codigo: '63187-004',
    Nombre: 'Chocolate - Semi Sweet, Calets',
    Presentacion: '459-97-3162',
    Laboratorio: 'Anaël',
    Sitio: 'OFED',
    Existencia: 57,
    Precio: '$16.24',
    Vencimiento: '11/20/2018'
  },
  {
    Codigo: '62011-0197',
    Nombre: 'Puree - Mango',
    Presentacion: '205-37-6961',
    Laboratorio: 'Françoise',
    Sitio: 'RWT',
    Existencia: 23,
    Precio: '$63.52',
    Vencimiento: '12/10/2018'
  },
  {
    Codigo: '41163-511',
    Nombre: 'Chocolate - Milk Coating',
    Presentacion: '872-45-9881',
    Laboratorio: 'Almérinda',
    Sitio: 'DENN',
    Existencia: 21,
    Precio: '$88.79',
    Vencimiento: '5/21/2019'
  },
  {
    Codigo: '0268-6129',
    Nombre: 'Venison - Ground',
    Presentacion: '667-21-8239',
    Laboratorio: 'Dù',
    Sitio: 'DF',
    Existencia: 20,
    Precio: '$56.18',
    Vencimiento: '11/1/2018'
  },
  {
    Codigo: '98132-159',
    Nombre: 'Coffee Decaf Colombian',
    Presentacion: '562-04-0381',
    Laboratorio: 'Marie-noël',
    Sitio: 'ALGT',
    Existencia: 71,
    Precio: '$85.07',
    Vencimiento: '12/23/2018'
  },
  {
    Codigo: '41167-0944',
    Nombre: 'Cheese - Shred Cheddar / Mozza',
    Presentacion: '679-06-8138',
    Laboratorio: 'Aí',
    Sitio: 'ACXM',
    Existencia: 16,
    Precio: '$66.77',
    Vencimiento: '2/28/2019'
  },
  {
    Codigo: '61919-464',
    Nombre: 'Watercress',
    Presentacion: '250-56-5551',
    Laboratorio: 'Frédérique',
    Sitio: 'VTWG',
    Existencia: 95,
    Precio: '$22.10',
    Vencimiento: '4/19/2019'
  },
  {
    Codigo: '42507-620',
    Nombre: 'Cheese - Romano, Grated',
    Presentacion: '690-66-3293',
    Laboratorio: 'Intéressant',
    Sitio: 'NAVI',
    Existencia: 43,
    Precio: '$7.48',
    Vencimiento: '6/2/2018'
  },
  {
    Codigo: '64942-1134',
    Nombre: 'Puree - Passion Fruit',
    Presentacion: '828-82-9750',
    Laboratorio: 'Jú',
    Sitio: 'LMFAW',
    Existencia: 11,
    Precio: '$31.63',
    Vencimiento: '11/16/2018'
  },
  {
    Codigo: '21695-866',
    Nombre: 'Tomato Paste',
    Presentacion: '505-77-7268',
    Laboratorio: 'Salomé',
    Sitio: 'AG',
    Existencia: 14,
    Precio: '$22.36',
    Vencimiento: '12/22/2018'
  },
  {
    Codigo: '55154-2721',
    Nombre: 'Wine - Casillero Deldiablo',
    Presentacion: '564-66-8633',
    Laboratorio: 'Maïwenn',
    Sitio: 'PRTY',
    Existencia: 19,
    Precio: '$10.72',
    Vencimiento: '8/31/2018'
  },
  {
    Codigo: '0069-8140',
    Nombre: 'Cheese - Perron Cheddar',
    Presentacion: '596-44-5242',
    Laboratorio: 'Mélys',
    Sitio: 'KIM^J',
    Existencia: 26,
    Precio: '$19.05',
    Vencimiento: '3/28/2019'
  },
  {
    Codigo: '10812-601',
    Nombre: 'Wine - Montecillo Rioja Crianza',
    Presentacion: '502-02-9882',
    Laboratorio: 'Réjane',
    Sitio: 'PERY',
    Existencia: 83,
    Precio: '$99.23',
    Vencimiento: '1/16/2019'
  },
  {
    Codigo: '49288-0890',
    Nombre: 'Creme De Cacao Mcguines',
    Presentacion: '322-92-4532',
    Laboratorio: 'Camélia',
    Sitio: 'BMRC',
    Existencia: 44,
    Precio: '$24.13',
    Vencimiento: '10/26/2018'
  },
  {
    Codigo: '75862-011',
    Nombre: 'Waffle Stix',
    Presentacion: '334-28-1825',
    Laboratorio: 'Béatrice',
    Sitio: 'HGSH',
    Existencia: 83,
    Precio: '$16.49',
    Vencimiento: '7/15/2018'
  },
  {
    Codigo: '76218-1219',
    Nombre: 'Crab - Back Fin Meat, Canned',
    Presentacion: '644-33-4381',
    Laboratorio: 'Cléa',
    Sitio: 'PMPT',
    Existencia: 6,
    Precio: '$53.91',
    Vencimiento: '6/9/2018'
  },
  {
    Codigo: '54868-5435',
    Nombre: 'Jagermeister',
    Presentacion: '595-63-5915',
    Laboratorio: 'Océane',
    Sitio: 'PG',
    Existencia: 72,
    Precio: '$87.64',
    Vencimiento: '7/19/2018'
  },
  {
    Codigo: '0268-0034',
    Nombre: 'Wine - Ruffino Chianti Classico',
    Presentacion: '494-28-0305',
    Laboratorio: 'Bécassine',
    Sitio: 'FAAR',
    Existencia: 32,
    Precio: '$85.06',
    Vencimiento: '11/24/2018'
  },
  {
    Codigo: '0268-3055',
    Nombre: 'Cheese - Fontina',
    Presentacion: '159-29-3299',
    Laboratorio: 'Cinéma',
    Sitio: 'ALXN',
    Existencia: 58,
    Precio: '$55.63',
    Vencimiento: '7/2/2018'
  },
  {
    Codigo: '52164-1102',
    Nombre: 'Cookies - Englishbay Oatmeal',
    Presentacion: '324-15-0090',
    Laboratorio: 'Cécilia',
    Sitio: 'RAS^B',
    Existencia: 92,
    Precio: '$77.76',
    Vencimiento: '10/22/2018'
  },
  {
    Codigo: '49349-336',
    Nombre: 'Pur Source',
    Presentacion: '267-43-9510',
    Laboratorio: 'Salomé',
    Sitio: 'FISI',
    Existencia: 85,
    Precio: '$58.99',
    Vencimiento: '11/20/2018'
  },
  {
    Codigo: '51531-7502',
    Nombre: 'Cheese - Asiago',
    Presentacion: '457-35-8250',
    Laboratorio: 'Mylène',
    Sitio: 'IMMU',
    Existencia: 53,
    Precio: '$18.99',
    Vencimiento: '3/4/2019'
  },
  {
    Codigo: '65841-747',
    Nombre: 'Ecolab - Hobart Washarm End Cap',
    Presentacion: '385-57-1412',
    Laboratorio: 'Maëly',
    Sitio: 'CHSCP',
    Existencia: 6,
    Precio: '$47.80',
    Vencimiento: '2/7/2019'
  },
  {
    Codigo: '62175-311',
    Nombre: 'Cognac - Courvaisier',
    Presentacion: '717-61-9153',
    Laboratorio: 'Françoise',
    Sitio: 'GPOR',
    Existencia: 33,
    Precio: '$80.92',
    Vencimiento: '7/27/2018'
  },
  {
    Codigo: '42192-109',
    Nombre: 'Sesame Seed Black',
    Presentacion: '275-24-7034',
    Laboratorio: 'Maïté',
    Sitio: 'ASYS',
    Existencia: 27,
    Precio: '$58.55',
    Vencimiento: '1/30/2019'
  },
  {
    Codigo: '35356-937',
    Nombre: 'Soup - Campbells - Tomato',
    Presentacion: '617-13-2145',
    Laboratorio: 'Ruò',
    Sitio: 'FL',
    Existencia: 73,
    Precio: '$34.90',
    Vencimiento: '3/10/2019'
  },
  {
    Codigo: '63736-902',
    Nombre: 'Icecream - Dstk Cml And Fdg',
    Presentacion: '432-04-4175',
    Laboratorio: 'Médiamass',
    Sitio: 'LUNA',
    Existencia: 86,
    Precio: '$1.93',
    Vencimiento: '8/14/2018'
  },
  {
    Codigo: '36800-896',
    Nombre: 'Bag - Regular Kraft 20 Lb',
    Presentacion: '651-33-2287',
    Laboratorio: 'Maï',
    Sitio: 'HCLP',
    Existencia: 41,
    Precio: '$13.39',
    Vencimiento: '5/8/2019'
  },
  {
    Codigo: '63824-322',
    Nombre: 'Sausage - Breakfast',
    Presentacion: '403-25-2552',
    Laboratorio: 'Pål',
    Sitio: 'SGBK',
    Existencia: 46,
    Precio: '$68.12',
    Vencimiento: '12/23/2018'
  },
  {
    Codigo: '17714-025',
    Nombre: 'Crawfish',
    Presentacion: '596-76-7337',
    Laboratorio: 'Intéressant',
    Sitio: 'FDS',
    Existencia: 65,
    Precio: '$80.43',
    Vencimiento: '1/29/2019'
  },
  {
    Codigo: '43063-506',
    Nombre: 'Sesame Seed Black',
    Presentacion: '804-41-4703',
    Laboratorio: 'Michèle',
    Sitio: 'ODP',
    Existencia: 45,
    Precio: '$66.04',
    Vencimiento: '2/11/2019'
  },
  {
    Codigo: '69152-0078',
    Nombre: 'Venison - Denver Leg Boneless',
    Presentacion: '471-77-2672',
    Laboratorio: 'Michèle',
    Sitio: 'TMK^B',
    Existencia: 47,
    Precio: '$42.42',
    Vencimiento: '8/6/2018'
  },
  {
    Codigo: '24236-609',
    Nombre: 'Lobster - Cooked',
    Presentacion: '249-40-0038',
    Laboratorio: 'Estée',
    Sitio: 'RXN^A',
    Existencia: 13,
    Precio: '$10.48',
    Vencimiento: '6/29/2018'
  },
  {
    Codigo: '64720-132',
    Nombre: 'Oil - Grapeseed Oil',
    Presentacion: '854-32-5011',
    Laboratorio: 'Béatrice',
    Sitio: 'VALE',
    Existencia: 41,
    Precio: '$34.53',
    Vencimiento: '10/2/2018'
  },
  {
    Codigo: '51079-284',
    Nombre: 'Cheese - Mozzarella, Buffalo',
    Presentacion: '562-68-7607',
    Laboratorio: 'Maï',
    Sitio: 'CFO',
    Existencia: 97,
    Precio: '$80.46',
    Vencimiento: '10/25/2018'
  },
  {
    Codigo: '50436-8000',
    Nombre: 'Pepper - Gypsy Pepper',
    Presentacion: '477-26-9414',
    Laboratorio: 'Rachèle',
    Sitio: 'JPI',
    Existencia: 45,
    Precio: '$57.94',
    Vencimiento: '11/12/2018'
  },
  {
    Codigo: '68745-1062',
    Nombre: 'Lamb - Rack',
    Presentacion: '362-99-3279',
    Laboratorio: 'Yénora',
    Sitio: 'AMSWA',
    Existencia: 76,
    Precio: '$11.26',
    Vencimiento: '2/22/2019'
  },
  {
    Codigo: '43857-0010',
    Nombre: 'Beef - Prime Rib Aaa',
    Presentacion: '592-43-0195',
    Laboratorio: 'Liè',
    Sitio: 'EROS',
    Existencia: 60,
    Precio: '$79.84',
    Vencimiento: '4/19/2019'
  },
  {
    Codigo: '36987-1894',
    Nombre: 'Arizona - Green Tea',
    Presentacion: '850-97-7142',
    Laboratorio: 'Valérie',
    Sitio: 'NRP',
    Existencia: 8,
    Precio: '$27.76',
    Vencimiento: '1/28/2019'
  },
  {
    Codigo: '66685-1001',
    Nombre: 'Lemonade - Island Tea, 591 Ml',
    Presentacion: '402-41-5706',
    Laboratorio: 'Aloïs',
    Sitio: 'JYNT',
    Existencia: 39,
    Precio: '$50.22',
    Vencimiento: '1/8/2019'
  },
  {
    Codigo: '49288-0128',
    Nombre: 'Wine - Sake',
    Presentacion: '651-81-5282',
    Laboratorio: 'Miléna',
    Sitio: 'ZBRA',
    Existencia: 21,
    Precio: '$45.49',
    Vencimiento: '4/9/2019'
  },
  {
    Codigo: '53808-0346',
    Nombre: 'Rum - Cream, Amarula',
    Presentacion: '691-10-1781',
    Laboratorio: 'Adélie',
    Sitio: 'PG',
    Existencia: 6,
    Precio: '$20.16',
    Vencimiento: '11/20/2018'
  },
  {
    Codigo: '47066-403',
    Nombre: 'Ocean Spray - Ruby Red',
    Presentacion: '439-07-4953',
    Laboratorio: 'Chloé',
    Sitio: 'PUK',
    Existencia: 89,
    Precio: '$27.59',
    Vencimiento: '12/1/2018'
  },
  {
    Codigo: '63187-137',
    Nombre: 'Macaroons - Homestyle Two Bit',
    Presentacion: '785-52-1040',
    Laboratorio: 'Fèi',
    Sitio: 'TRHC',
    Existencia: 84,
    Precio: '$64.74',
    Vencimiento: '9/7/2018'
  },
  {
    Codigo: '50845-0177',
    Nombre: 'Gatorade - Orange',
    Presentacion: '684-67-9106',
    Laboratorio: 'Åslög',
    Sitio: 'ALL^B',
    Existencia: 20,
    Precio: '$100.00',
    Vencimiento: '2/18/2019'
  },
  {
    Codigo: '43419-004',
    Nombre: 'Milk - Skim',
    Presentacion: '384-96-7054',
    Laboratorio: 'Yóu',
    Sitio: 'CFFI',
    Existencia: 93,
    Precio: '$56.58',
    Vencimiento: '9/15/2018'
  },
  {
    Codigo: '49999-226',
    Nombre: 'Sauce - Marinara',
    Presentacion: '190-62-8125',
    Laboratorio: 'Adélaïde',
    Sitio: 'DDD',
    Existencia: 44,
    Precio: '$9.04',
    Vencimiento: '8/27/2018'
  },
  {
    Codigo: '57883-403',
    Nombre: 'Bread - Bagels, Mini',
    Presentacion: '691-02-4821',
    Laboratorio: 'Ruò',
    Sitio: 'USAK',
    Existencia: 93,
    Precio: '$42.33',
    Vencimiento: '5/16/2019'
  },
  {
    Codigo: '0591-2719',
    Nombre: 'Pastry - Trippleberry Muffin - Mini',
    Presentacion: '328-23-9292',
    Laboratorio: 'Görel',
    Sitio: 'FSS',
    Existencia: 86,
    Precio: '$44.85',
    Vencimiento: '9/29/2018'
  },
  {
    Codigo: '0093-4180',
    Nombre: 'Milk - 2%',
    Presentacion: '362-66-6591',
    Laboratorio: 'Rébecca',
    Sitio: 'CRC',
    Existencia: 73,
    Precio: '$22.45',
    Vencimiento: '7/5/2018'
  },
  {
    Codigo: '44523-602',
    Nombre: 'Beef - Tender Tips',
    Presentacion: '315-30-3179',
    Laboratorio: 'Adélaïde',
    Sitio: 'LUV',
    Existencia: 70,
    Precio: '$6.33',
    Vencimiento: '8/26/2018'
  },
  {
    Codigo: '54868-6100',
    Nombre: 'Potatoes - Mini Red',
    Presentacion: '168-64-1533',
    Laboratorio: 'Clémentine',
    Sitio: 'SGQI',
    Existencia: 96,
    Precio: '$77.24',
    Vencimiento: '2/3/2019'
  },
  {
    Codigo: '49349-153',
    Nombre: 'Soup - Campbells Broccoli',
    Presentacion: '156-03-8658',
    Laboratorio: 'Maïwenn',
    Sitio: 'GPK',
    Existencia: 93,
    Precio: '$52.87',
    Vencimiento: '1/15/2019'
  },
  {
    Codigo: '17478-831',
    Nombre: 'Appetiser - Bought',
    Presentacion: '189-17-3083',
    Laboratorio: 'Táng',
    Sitio: 'BGX',
    Existencia: 86,
    Precio: '$45.24',
    Vencimiento: '12/22/2018'
  },
  {
    Codigo: '51808-101',
    Nombre: 'Wine - Puligny Montrachet A.',
    Presentacion: '450-49-9529',
    Laboratorio: 'Méthode',
    Sitio: 'SYKE',
    Existencia: 31,
    Precio: '$97.39',
    Vencimiento: '1/15/2019'
  },
  {
    Codigo: '51615-001',
    Nombre: 'Beer - Camerons Cream Ale',
    Presentacion: '546-01-1554',
    Laboratorio: 'Marlène',
    Sitio: 'PFK',
    Existencia: 54,
    Precio: '$28.47',
    Vencimiento: '12/6/2018'
  },
  {
    Codigo: '59321-032',
    Nombre: 'Fondant - Icing',
    Presentacion: '664-63-1454',
    Laboratorio: 'Tú',
    Sitio: 'SIG',
    Existencia: 33,
    Precio: '$87.41',
    Vencimiento: '12/16/2018'
  },
  {
    Codigo: '49349-824',
    Nombre: 'Longos - Penne With Pesto',
    Presentacion: '842-25-6230',
    Laboratorio: 'Ruò',
    Sitio: 'AWK',
    Existencia: 25,
    Precio: '$77.85',
    Vencimiento: '9/3/2018'
  },
  {
    Codigo: '36987-2720',
    Nombre: 'Chocolate - Pistoles, White',
    Presentacion: '510-20-1309',
    Laboratorio: 'Adèle',
    Sitio: 'NAZ',
    Existencia: 3,
    Precio: '$38.97',
    Vencimiento: '2/12/2019'
  },
  {
    Codigo: '54868-2541',
    Nombre: 'Pepper Squash',
    Presentacion: '302-12-0679',
    Laboratorio: 'Göran',
    Sitio: 'VTN',
    Existencia: 59,
    Precio: '$96.18',
    Vencimiento: '4/2/2019'
  },
  {
    Codigo: '52642-003',
    Nombre: 'Tandoori Curry Paste',
    Presentacion: '288-44-8939',
    Laboratorio: 'Mélys',
    Sitio: 'WFC^P',
    Existencia: 8,
    Precio: '$94.71',
    Vencimiento: '6/1/2018'
  },
  {
    Codigo: '66715-9837',
    Nombre: 'Lid Tray - 12in Dome',
    Presentacion: '173-50-1929',
    Laboratorio: 'Maïté',
    Sitio: 'IVTY',
    Existencia: 51,
    Precio: '$38.12',
    Vencimiento: '3/11/2019'
  },
  {
    Codigo: '12546-103',
    Nombre: 'Ham - Cooked Bayonne Tinned',
    Presentacion: '605-02-2690',
    Laboratorio: 'Léandre',
    Sitio: 'PMT',
    Existencia: 21,
    Precio: '$98.79',
    Vencimiento: '3/21/2019'
  },
  {
    Codigo: '55289-567',
    Nombre: 'Tabasco Sauce, 2 Oz',
    Presentacion: '587-23-8493',
    Laboratorio: 'Léana',
    Sitio: 'AKER',
    Existencia: 52,
    Precio: '$5.60',
    Vencimiento: '10/20/2018'
  },
  {
    Codigo: '52533-204',
    Nombre: 'Soup - Tomato Mush. Florentine',
    Presentacion: '482-54-3681',
    Laboratorio: 'Åsa',
    Sitio: 'FLT',
    Existencia: 74,
    Precio: '$36.37',
    Vencimiento: '6/13/2018'
  },
  {
    Codigo: '14783-550',
    Nombre: 'Veal - Inside',
    Presentacion: '620-46-6445',
    Laboratorio: 'Frédérique',
    Sitio: 'TRR',
    Existencia: 57,
    Precio: '$16.48',
    Vencimiento: '10/16/2018'
  },
  {
    Codigo: '65483-895',
    Nombre: 'Muffin Batt - Choc Chk',
    Presentacion: '263-76-3984',
    Laboratorio: 'Angélique',
    Sitio: 'DSXN',
    Existencia: 52,
    Precio: '$68.79',
    Vencimiento: '8/20/2018'
  },
  {
    Codigo: '54868-0092',
    Nombre: 'Pasta - Linguini, Dry',
    Presentacion: '487-60-3277',
    Laboratorio: 'Thérèsa',
    Sitio: 'LENS',
    Existencia: 44,
    Precio: '$19.87',
    Vencimiento: '1/21/2019'
  },
  {
    Codigo: '55714-2216',
    Nombre: 'Vaccum Bag - 14x20',
    Presentacion: '299-03-8314',
    Laboratorio: 'Gaétane',
    Sitio: 'JLS',
    Existencia: 98,
    Precio: '$88.23',
    Vencimiento: '10/29/2018'
  },
  {
    Codigo: '11410-914',
    Nombre: 'Eggs - Extra Large',
    Presentacion: '378-81-7880',
    Laboratorio: 'Magdalène',
    Sitio: 'CARA',
    Existencia: 33,
    Precio: '$21.95',
    Vencimiento: '9/3/2018'
  },
  {
    Codigo: '0409-9045',
    Nombre: 'Anchovy In Oil',
    Presentacion: '169-65-3649',
    Laboratorio: 'Östen',
    Sitio: 'UBSH',
    Existencia: 86,
    Precio: '$21.99',
    Vencimiento: '3/5/2019'
  },
  {
    Codigo: '0781-5807',
    Nombre: 'Foil - 4oz Custard Cup',
    Presentacion: '404-42-2102',
    Laboratorio: 'Sélène',
    Sitio: 'KEF',
    Existencia: 41,
    Precio: '$15.54',
    Vencimiento: '7/12/2018'
  },
  {
    Codigo: '53217-054',
    Nombre: 'Tart Shells - Savory, 3',
    Presentacion: '585-95-4372',
    Laboratorio: 'Lèi',
    Sitio: 'YGE',
    Existencia: 1,
    Precio: '$35.07',
    Vencimiento: '9/7/2018'
  },
  {
    Codigo: '37000-037',
    Nombre: 'Beer - Blue',
    Presentacion: '815-70-6294',
    Laboratorio: 'Aimée',
    Sitio: 'TPVG',
    Existencia: 82,
    Precio: '$61.70',
    Vencimiento: '12/14/2018'
  },
  {
    Codigo: '51060-046',
    Nombre: 'Banana - Green',
    Presentacion: '876-10-3374',
    Laboratorio: 'Angélique',
    Sitio: 'PSCE',
    Existencia: 53,
    Precio: '$67.87',
    Vencimiento: '1/25/2019'
  },
  {
    Codigo: '52685-450',
    Nombre: 'Shrimp - 16/20, Peeled Deviened',
    Presentacion: '505-07-5149',
    Laboratorio: 'Méng',
    Sitio: 'GGB',
    Existencia: 95,
    Precio: '$37.98',
    Vencimiento: '8/26/2018'
  },
  {
    Codigo: '0904-5306',
    Nombre: 'Beef Ground Medium',
    Presentacion: '827-44-8525',
    Laboratorio: 'Célestine',
    Sitio: 'SAH',
    Existencia: 59,
    Precio: '$78.58',
    Vencimiento: '3/2/2019'
  },
  {
    Codigo: '11410-420',
    Nombre: 'Soup - Verve - Chipotle Chicken',
    Presentacion: '425-74-4563',
    Laboratorio: 'Hélèna',
    Sitio: 'FELE',
    Existencia: 10,
    Precio: '$31.48',
    Vencimiento: '8/14/2018'
  },
  {
    Codigo: '61727-317',
    Nombre: 'Praline Paste',
    Presentacion: '433-38-0050',
    Laboratorio: 'Méthode',
    Sitio: 'FOSL',
    Existencia: 83,
    Precio: '$39.42',
    Vencimiento: '5/25/2019'
  },
  {
    Codigo: '55118-550',
    Nombre: 'Wine - Jackson Triggs Okonagan',
    Presentacion: '113-11-1981',
    Laboratorio: 'Håkan',
    Sitio: 'GOVNI',
    Existencia: 22,
    Precio: '$1.55',
    Vencimiento: '8/2/2018'
  },
  {
    Codigo: '63304-532',
    Nombre: 'Star Fruit',
    Presentacion: '545-97-5833',
    Laboratorio: 'Lucrèce',
    Sitio: 'NEV',
    Existencia: 62,
    Precio: '$29.27',
    Vencimiento: '8/17/2018'
  },
  {
    Codigo: '53645-1080',
    Nombre: 'Stock - Chicken, White',
    Presentacion: '878-22-8786',
    Laboratorio: 'Danièle',
    Sitio: 'QADA',
    Existencia: 35,
    Precio: '$4.93',
    Vencimiento: '3/2/2019'
  },
  {
    Codigo: '0603-3339',
    Nombre: 'Sardines',
    Presentacion: '628-22-6722',
    Laboratorio: 'Styrbjörn',
    Sitio: 'PBSK',
    Existencia: 75,
    Precio: '$95.85',
    Vencimiento: '4/3/2019'
  },
  {
    Codigo: '51655-362',
    Nombre: 'Jello - Assorted',
    Presentacion: '641-25-1161',
    Laboratorio: 'Mélodie',
    Sitio: 'CYD',
    Existencia: 16,
    Precio: '$85.21',
    Vencimiento: '10/22/2018'
  },
  {
    Codigo: '11822-2461',
    Nombre: 'Amarula Cream',
    Presentacion: '657-25-4782',
    Laboratorio: 'Adélie',
    Sitio: 'GPT',
    Existencia: 74,
    Precio: '$63.38',
    Vencimiento: '6/15/2018'
  },
  {
    Codigo: '58118-0107',
    Nombre: 'Soup - Campbells Mushroom',
    Presentacion: '522-63-1231',
    Laboratorio: 'Yénora',
    Sitio: 'KOF',
    Existencia: 40,
    Precio: '$78.41',
    Vencimiento: '2/5/2019'
  },
  {
    Codigo: '13668-088',
    Nombre: 'Tomatoes',
    Presentacion: '589-46-6934',
    Laboratorio: 'André',
    Sitio: 'GPRO',
    Existencia: 100,
    Precio: '$85.16',
    Vencimiento: '7/23/2018'
  },
  {
    Codigo: '68151-3834',
    Nombre: 'Potatoes - Yukon Gold, 80 Ct',
    Presentacion: '780-80-9098',
    Laboratorio: 'Eugénie',
    Sitio: 'AIT',
    Existencia: 42,
    Precio: '$11.52',
    Vencimiento: '6/28/2018'
  },
  {
    Codigo: '0024-0335',
    Nombre: 'Syrup - Monin, Amaretta',
    Presentacion: '343-57-5396',
    Laboratorio: 'Méryl',
    Sitio: 'MTSI',
    Existencia: 48,
    Precio: '$45.83',
    Vencimiento: '11/2/2018'
  },
  {
    Codigo: '0615-7514',
    Nombre: 'Muffin Hinge - 211n',
    Presentacion: '391-08-7218',
    Laboratorio: 'Desirée',
    Sitio: 'NTRP',
    Existencia: 58,
    Precio: '$29.83',
    Vencimiento: '9/22/2018'
  },
  {
    Codigo: '57237-003',
    Nombre: 'Ecolab - Solid Fusion',
    Presentacion: '787-80-2844',
    Laboratorio: 'Bécassine',
    Sitio: 'NGVT',
    Existencia: 40,
    Precio: '$93.58',
    Vencimiento: '6/11/2018'
  },
  {
    Codigo: '61755-001',
    Nombre: 'Crackers - Melba Toast',
    Presentacion: '286-59-5328',
    Laboratorio: 'Anaé',
    Sitio: 'PFH',
    Existencia: 67,
    Precio: '$68.59',
    Vencimiento: '2/14/2019'
  },
  {
    Codigo: '68084-098',
    Nombre: 'Long Island Ice Tea',
    Presentacion: '161-27-4282',
    Laboratorio: 'Publicité',
    Sitio: 'MUR',
    Existencia: 83,
    Precio: '$38.55',
    Vencimiento: '2/19/2019'
  },
  {
    Codigo: '48951-1128',
    Nombre: 'Jagermeister',
    Presentacion: '490-49-5021',
    Laboratorio: 'Réjane',
    Sitio: 'TWO^A',
    Existencia: 54,
    Precio: '$32.84',
    Vencimiento: '1/17/2019'
  },
  {
    Codigo: '75990-007',
    Nombre: 'Bread - Rolls, Rye',
    Presentacion: '152-08-6721',
    Laboratorio: 'Örjan',
    Sitio: 'PEI^A',
    Existencia: 19,
    Precio: '$78.86',
    Vencimiento: '2/28/2019'
  },
  {
    Codigo: '50025-1001',
    Nombre: 'Pork - Back, Long Cut, Boneless',
    Presentacion: '880-83-3991',
    Laboratorio: 'Agnès',
    Sitio: 'EVG',
    Existencia: 66,
    Precio: '$33.24',
    Vencimiento: '1/23/2019'
  },
  {
    Codigo: '55319-163',
    Nombre: 'Zucchini - Mini, Green',
    Presentacion: '154-56-6781',
    Laboratorio: 'Amélie',
    Sitio: 'AAN',
    Existencia: 21,
    Precio: '$25.12',
    Vencimiento: '12/12/2018'
  },
  {
    Codigo: '58411-109',
    Nombre: 'Lettuce - Romaine',
    Presentacion: '472-80-7183',
    Laboratorio: 'Mélia',
    Sitio: 'CAKE',
    Existencia: 51,
    Precio: '$4.93',
    Vencimiento: '9/14/2018'
  },
  {
    Codigo: '59427-005',
    Nombre: 'Gatorade - Orange',
    Presentacion: '256-12-1182',
    Laboratorio: 'Solène',
    Sitio: 'AGTC',
    Existencia: 19,
    Precio: '$83.55',
    Vencimiento: '10/30/2018'
  },
  {
    Codigo: '47335-835',
    Nombre: 'Beef - Baby, Liver',
    Presentacion: '711-61-3261',
    Laboratorio: 'Lorène',
    Sitio: 'NVEE',
    Existencia: 73,
    Precio: '$13.85',
    Vencimiento: '10/14/2018'
  },
  {
    Codigo: '55154-8850',
    Nombre: 'Wine - Zinfandel California 2002',
    Presentacion: '190-43-9368',
    Laboratorio: 'Kallisté',
    Sitio: 'GSHTU',
    Existencia: 5,
    Precio: '$89.32',
    Vencimiento: '6/5/2018'
  },
  {
    Codigo: '65862-452',
    Nombre: 'Puree - Kiwi',
    Presentacion: '600-39-8728',
    Laboratorio: 'Stéphanie',
    Sitio: 'MRDNW',
    Existencia: 73,
    Precio: '$31.08',
    Vencimiento: '12/21/2018'
  },
  {
    Codigo: '39822-1001',
    Nombre: 'Icecream - Dstk Super Cone',
    Presentacion: '817-60-4510',
    Laboratorio: 'Joséphine',
    Sitio: 'QCLN',
    Existencia: 6,
    Precio: '$36.40',
    Vencimiento: '4/19/2019'
  },
  {
    Codigo: '37808-706',
    Nombre: 'Veal - Osso Bucco',
    Presentacion: '295-07-1291',
    Laboratorio: 'Ruò',
    Sitio: 'PIM',
    Existencia: 7,
    Precio: '$72.24',
    Vencimiento: '4/6/2019'
  },
  {
    Codigo: '11410-019',
    Nombre: 'Onions - Green',
    Presentacion: '659-40-1793',
    Laboratorio: 'Mylène',
    Sitio: 'PBYI',
    Existencia: 60,
    Precio: '$13.47',
    Vencimiento: '5/19/2019'
  },
  {
    Codigo: '28400-105',
    Nombre: 'Plasticforkblack',
    Presentacion: '147-38-8927',
    Laboratorio: 'Alizée',
    Sitio: 'OSN',
    Existencia: 32,
    Precio: '$63.97',
    Vencimiento: '11/18/2018'
  },
  {
    Codigo: '68387-502',
    Nombre: 'French Pastry - Mini Chocolate',
    Presentacion: '752-90-5754',
    Laboratorio: 'Dorothée',
    Sitio: 'BG',
    Existencia: 63,
    Precio: '$17.19',
    Vencimiento: '12/1/2018'
  },
  {
    Codigo: '48951-1191',
    Nombre: 'Pepper - Orange',
    Presentacion: '657-96-5650',
    Laboratorio: 'Zoé',
    Sitio: 'AAXJ',
    Existencia: 30,
    Precio: '$17.61',
    Vencimiento: '11/24/2018'
  },
  {
    Codigo: '64376-605',
    Nombre: 'Schnappes Peppermint - Walker',
    Presentacion: '303-17-1815',
    Laboratorio: 'Pål',
    Sitio: 'SUN',
    Existencia: 77,
    Precio: '$54.38',
    Vencimiento: '12/9/2018'
  },
  {
    Codigo: '41520-516',
    Nombre: 'Compound - Strawberry',
    Presentacion: '164-02-0493',
    Laboratorio: 'Clémence',
    Sitio: 'CLDX',
    Existencia: 91,
    Precio: '$51.89',
    Vencimiento: '5/17/2019'
  },
  {
    Codigo: '61077-117',
    Nombre: 'Wine - Rosso Del Veronese Igt',
    Presentacion: '228-54-7741',
    Laboratorio: 'Fèi',
    Sitio: 'NXRT',
    Existencia: 93,
    Precio: '$29.98',
    Vencimiento: '8/30/2018'
  },
  {
    Codigo: '63187-141',
    Nombre: 'Devonshire Cream',
    Presentacion: '595-70-5359',
    Laboratorio: 'Yè',
    Sitio: 'CLNS^G',
    Existencia: 40,
    Precio: '$99.89',
    Vencimiento: '12/12/2018'
  },
  {
    Codigo: '49738-074',
    Nombre: 'Chicken - Wieners',
    Presentacion: '224-06-5962',
    Laboratorio: 'Athéna',
    Sitio: 'DGICA',
    Existencia: 1,
    Precio: '$39.96',
    Vencimiento: '11/27/2018'
  },
  {
    Codigo: '49852-182',
    Nombre: 'Parsley - Fresh',
    Presentacion: '695-08-1812',
    Laboratorio: 'Cécile',
    Sitio: 'WYIGU',
    Existencia: 26,
    Precio: '$6.16',
    Vencimiento: '1/10/2019'
  },
  {
    Codigo: '42715-001',
    Nombre: 'Basil - Seedlings Cookstown',
    Presentacion: '804-19-5584',
    Laboratorio: 'Maëlann',
    Sitio: 'EGN',
    Existencia: 58,
    Precio: '$88.06',
    Vencimiento: '8/28/2018'
  },
  {
    Codigo: '65841-691',
    Nombre: 'Cornstarch',
    Presentacion: '246-33-2010',
    Laboratorio: 'Séréna',
    Sitio: 'XON',
    Existencia: 57,
    Precio: '$19.10',
    Vencimiento: '5/1/2019'
  },
  {
    Codigo: '49884-107',
    Nombre: 'Crush - Cream Soda',
    Presentacion: '129-85-7773',
    Laboratorio: 'Vénus',
    Sitio: 'DHT',
    Existencia: 2,
    Precio: '$27.12',
    Vencimiento: '7/9/2018'
  },
  {
    Codigo: '58118-1344',
    Nombre: 'Pork - Ham Hocks - Smoked',
    Presentacion: '583-98-2061',
    Laboratorio: 'Dorothée',
    Sitio: 'BXS',
    Existencia: 70,
    Precio: '$53.23',
    Vencimiento: '10/19/2018'
  },
  {
    Codigo: '64159-7697',
    Nombre: 'Crawfish',
    Presentacion: '132-54-6436',
    Laboratorio: 'Marie-josée',
    Sitio: 'CNCE',
    Existencia: 86,
    Precio: '$56.85',
    Vencimiento: '11/2/2018'
  },
  {
    Codigo: '51079-173',
    Nombre: 'Pasta - Angel Hair',
    Presentacion: '735-22-8291',
    Laboratorio: 'Cléopatre',
    Sitio: 'BPFHW',
    Existencia: 17,
    Precio: '$80.13',
    Vencimiento: '7/9/2018'
  },
  {
    Codigo: '68788-9521',
    Nombre: 'Doilies - 10, Paper',
    Presentacion: '109-79-8128',
    Laboratorio: 'Anaël',
    Sitio: 'SLRC',
    Existencia: 76,
    Precio: '$4.73',
    Vencimiento: '4/4/2019'
  },
  {
    Codigo: '40032-620',
    Nombre: 'Muffin - Blueberry Individual',
    Presentacion: '762-09-5961',
    Laboratorio: 'Marie-noël',
    Sitio: 'RM',
    Existencia: 54,
    Precio: '$58.15',
    Vencimiento: '3/30/2019'
  },
  {
    Codigo: '59351-0301',
    Nombre: 'Cookies Cereal Nut',
    Presentacion: '472-29-0448',
    Laboratorio: 'Eléa',
    Sitio: 'DDR^K',
    Existencia: 68,
    Precio: '$17.67',
    Vencimiento: '9/22/2018'
  },
  {
    Codigo: '63629-3115',
    Nombre: 'Cheese - Gouda',
    Presentacion: '247-61-1734',
    Laboratorio: 'Uò',
    Sitio: 'EXD',
    Existencia: 20,
    Precio: '$2.78',
    Vencimiento: '8/8/2018'
  },
  {
    Codigo: '49035-218',
    Nombre: 'Spice - Pepper Portions',
    Presentacion: '465-06-0650',
    Laboratorio: 'Maïly',
    Sitio: 'NYCB',
    Existencia: 31,
    Precio: '$9.92',
    Vencimiento: '3/28/2019'
  },
  {
    Codigo: '10819-4075',
    Nombre: 'Broom - Corn',
    Presentacion: '224-54-6148',
    Laboratorio: 'Tú',
    Sitio: 'WFBI',
    Existencia: 93,
    Precio: '$24.10',
    Vencimiento: '4/28/2019'
  },
  {
    Codigo: '54868-3266',
    Nombre: 'Soup Campbells - Italian Wedding',
    Presentacion: '411-62-5134',
    Laboratorio: 'Anaëlle',
    Sitio: 'RNET',
    Existencia: 32,
    Precio: '$24.91',
    Vencimiento: '10/31/2018'
  },
  {
    Codigo: '21695-707',
    Nombre: 'Wine - Red, Gamay Noir',
    Presentacion: '350-18-6331',
    Laboratorio: 'Clémence',
    Sitio: 'MTGEP',
    Existencia: 40,
    Precio: '$96.05',
    Vencimiento: '6/26/2018'
  },
  {
    Codigo: '0069-0067',
    Nombre: 'Beef - Short Loin',
    Presentacion: '318-97-0093',
    Laboratorio: 'Océanne',
    Sitio: 'IAE',
    Existencia: 17,
    Precio: '$66.51',
    Vencimiento: '6/13/2018'
  },
  {
    Codigo: '59779-600',
    Nombre: 'Sobe - Green Tea',
    Presentacion: '610-06-3646',
    Laboratorio: 'Dorothée',
    Sitio: 'RELL',
    Existencia: 71,
    Precio: '$20.81',
    Vencimiento: '3/1/2019'
  },
  {
    Codigo: '68026-422',
    Nombre: 'Langers - Ruby Red Grapfruit',
    Presentacion: '516-90-7775',
    Laboratorio: 'Cécilia',
    Sitio: 'KBWD',
    Existencia: 6,
    Precio: '$19.80',
    Vencimiento: '7/31/2018'
  },
  {
    Codigo: '49035-043',
    Nombre: 'Onions - Dried, Chopped',
    Presentacion: '338-64-6251',
    Laboratorio: 'Miléna',
    Sitio: 'CBI',
    Existencia: 95,
    Precio: '$83.70',
    Vencimiento: '4/27/2019'
  },
  {
    Codigo: '61924-208',
    Nombre: 'Sauce - Sesame Thai Dressing',
    Presentacion: '174-80-5152',
    Laboratorio: 'Léonie',
    Sitio: 'IRS',
    Existencia: 57,
    Precio: '$80.03',
    Vencimiento: '12/25/2018'
  },
  {
    Codigo: '0069-0469',
    Nombre: 'Doilies - 5, Paper',
    Presentacion: '872-26-7129',
    Laboratorio: 'Frédérique',
    Sitio: 'GEC',
    Existencia: 42,
    Precio: '$84.22',
    Vencimiento: '5/25/2019'
  },
  {
    Codigo: '30142-264',
    Nombre: 'Puree - Passion Fruit',
    Presentacion: '745-47-3422',
    Laboratorio: 'Athéna',
    Sitio: 'CTSO',
    Existencia: 33,
    Precio: '$12.44',
    Vencimiento: '1/24/2019'
  },
  {
    Codigo: '63629-4337',
    Nombre: 'Seedlings - Mix, Organic',
    Presentacion: '132-89-7750',
    Laboratorio: 'Maéna',
    Sitio: 'PATI',
    Existencia: 74,
    Precio: '$20.00',
    Vencimiento: '4/1/2019'
  },
  {
    Codigo: '25021-703',
    Nombre: 'Doilies - 12, Paper',
    Presentacion: '431-90-4949',
    Laboratorio: 'Maëlys',
    Sitio: 'GBDC',
    Existencia: 92,
    Precio: '$43.31',
    Vencimiento: '10/27/2018'
  },
  {
    Codigo: '43063-246',
    Nombre: 'Wiberg Super Cure',
    Presentacion: '801-71-5954',
    Laboratorio: 'Almérinda',
    Sitio: 'PLT',
    Existencia: 33,
    Precio: '$35.31',
    Vencimiento: '2/24/2019'
  },
  {
    Codigo: '68788-9804',
    Nombre: 'Juice - Lagoon Mango',
    Presentacion: '120-10-9530',
    Laboratorio: 'Aimée',
    Sitio: 'RDY',
    Existencia: 2,
    Precio: '$65.89',
    Vencimiento: '7/5/2018'
  },
  {
    Codigo: '47781-268',
    Nombre: 'Wine - Red, Mosaic Zweigelt',
    Presentacion: '874-07-7295',
    Laboratorio: 'Inès',
    Sitio: 'CYTX',
    Existencia: 100,
    Precio: '$95.45',
    Vencimiento: '3/31/2019'
  },
  {
    Codigo: '61748-011',
    Nombre: 'Doilies - 7, Paper',
    Presentacion: '361-13-1202',
    Laboratorio: 'Adèle',
    Sitio: 'MSBI',
    Existencia: 10,
    Precio: '$35.05',
    Vencimiento: '11/9/2018'
  },
  {
    Codigo: '62185-0006',
    Nombre: 'Parsley - Fresh',
    Presentacion: '750-64-8325',
    Laboratorio: 'Judicaël',
    Sitio: 'DKT',
    Existencia: 42,
    Precio: '$0.07',
    Vencimiento: '1/16/2019'
  },
  {
    Codigo: '60505-3255',
    Nombre: 'Apple - Royal Gala',
    Presentacion: '367-53-3725',
    Laboratorio: 'Maëlla',
    Sitio: 'OPGNW',
    Existencia: 7,
    Precio: '$9.78',
    Vencimiento: '3/9/2019'
  },
  {
    Codigo: '52125-362',
    Nombre: 'Peppercorns - Pink',
    Presentacion: '372-65-9846',
    Laboratorio: 'Mårten',
    Sitio: 'RFP',
    Existencia: 84,
    Precio: '$28.32',
    Vencimiento: '2/23/2019'
  },
  {
    Codigo: '48951-8001',
    Nombre: 'Pork - Loin, Center Cut',
    Presentacion: '798-60-3721',
    Laboratorio: 'Nuó',
    Sitio: 'MCI',
    Existencia: 71,
    Precio: '$49.82',
    Vencimiento: '1/22/2019'
  },
  {
    Codigo: '0268-6181',
    Nombre: 'Wine - Sherry Dry Sack, William',
    Presentacion: '169-37-5943',
    Laboratorio: 'Mahélie',
    Sitio: 'VCIT',
    Existencia: 14,
    Precio: '$1.58',
    Vencimiento: '2/5/2019'
  },
  {
    Codigo: '55316-002',
    Nombre: 'Tilapia - Fillets',
    Presentacion: '473-60-7170',
    Laboratorio: 'Méng',
    Sitio: 'NTRA',
    Existencia: 75,
    Precio: '$40.28',
    Vencimiento: '8/25/2018'
  },
  {
    Codigo: '33342-038',
    Nombre: 'Magnotta - Bel Paese White',
    Presentacion: '708-71-1787',
    Laboratorio: 'Valérie',
    Sitio: 'WDFC',
    Existencia: 14,
    Precio: '$1.59',
    Vencimiento: '2/24/2019'
  },
  {
    Codigo: '49884-315',
    Nombre: 'Lamb Tenderloin Nz Fr',
    Presentacion: '898-44-4613',
    Laboratorio: 'Bécassine',
    Sitio: 'REIS',
    Existencia: 66,
    Precio: '$32.05',
    Vencimiento: '8/14/2018'
  },
  {
    Codigo: '37000-378',
    Nombre: 'Tart - Raisin And Pecan',
    Presentacion: '872-17-6010',
    Laboratorio: 'Måns',
    Sitio: 'RM',
    Existencia: 94,
    Precio: '$61.47',
    Vencimiento: '3/19/2019'
  },
  {
    Codigo: '16590-959',
    Nombre: 'Food Colouring - Orange',
    Presentacion: '575-66-9383',
    Laboratorio: 'Angèle',
    Sitio: 'MANH',
    Existencia: 46,
    Precio: '$21.85',
    Vencimiento: '4/11/2019'
  },
  {
    Codigo: '0363-0047',
    Nombre: 'Cloves - Ground',
    Presentacion: '844-28-4307',
    Laboratorio: 'Aurélie',
    Sitio: 'HDS',
    Existencia: 90,
    Precio: '$32.20',
    Vencimiento: '12/9/2018'
  },
  {
    Codigo: '65597-113',
    Nombre: 'Loquat',
    Presentacion: '719-50-6920',
    Laboratorio: 'Marlène',
    Sitio: 'ECR',
    Existencia: 99,
    Precio: '$94.42',
    Vencimiento: '7/11/2018'
  },
  {
    Codigo: '14783-604',
    Nombre: 'Island Oasis - Mango Daiquiri',
    Presentacion: '729-61-9325',
    Laboratorio: 'Inès',
    Sitio: 'CRUS',
    Existencia: 32,
    Precio: '$84.04',
    Vencimiento: '2/3/2019'
  },
  {
    Codigo: '0268-0248',
    Nombre: 'Pastry - Apple Large',
    Presentacion: '459-20-2776',
    Laboratorio: 'Björn',
    Sitio: 'BFK',
    Existencia: 37,
    Precio: '$81.82',
    Vencimiento: '6/18/2018'
  },
  {
    Codigo: '68151-1363',
    Nombre: 'Swordfish Loin Portions',
    Presentacion: '847-60-5860',
    Laboratorio: 'Anaïs',
    Sitio: 'THQ',
    Existencia: 14,
    Precio: '$5.00',
    Vencimiento: '11/16/2018'
  },
  {
    Codigo: '41250-958',
    Nombre: 'Beef - Chuck, Boneless',
    Presentacion: '356-38-9400',
    Laboratorio: 'Kuí',
    Sitio: 'MHO^A',
    Existencia: 84,
    Precio: '$32.17',
    Vencimiento: '1/17/2019'
  },
  {
    Codigo: '52686-318',
    Nombre: 'Creme De Cacao Mcguines',
    Presentacion: '423-27-4744',
    Laboratorio: 'Léandre',
    Sitio: 'IROQ',
    Existencia: 47,
    Precio: '$80.50',
    Vencimiento: '4/30/2019'
  },
  {
    Codigo: '68382-444',
    Nombre: 'Halibut - Whole, Fresh',
    Presentacion: '665-16-2428',
    Laboratorio: 'Nélie',
    Sitio: 'PKI',
    Existencia: 97,
    Precio: '$87.38',
    Vencimiento: '4/17/2019'
  },
  {
    Codigo: '34645-4020',
    Nombre: 'Instant Coffee',
    Presentacion: '756-06-4736',
    Laboratorio: 'Cléopatre',
    Sitio: 'SRTSW',
    Existencia: 3,
    Precio: '$64.08',
    Vencimiento: '4/18/2019'
  },
  {
    Codigo: '68391-267',
    Nombre: 'Sauce - Bernaise, Mix',
    Presentacion: '208-89-1927',
    Laboratorio: 'Geneviève',
    Sitio: 'SB^B',
    Existencia: 30,
    Precio: '$3.77',
    Vencimiento: '2/26/2019'
  },
  {
    Codigo: '0168-0355',
    Nombre: 'Tuna - Canned, Flaked, Light',
    Presentacion: '215-94-3936',
    Laboratorio: 'Eliès',
    Sitio: 'HYGS',
    Existencia: 1,
    Precio: '$48.19',
    Vencimiento: '8/14/2018'
  },
  {
    Codigo: '0037-8110',
    Nombre: 'Beer - Tetleys',
    Presentacion: '322-95-0508',
    Laboratorio: 'Lorène',
    Sitio: 'AEP',
    Existencia: 29,
    Precio: '$69.19',
    Vencimiento: '10/24/2018'
  },
  {
    Codigo: '0054-8527',
    Nombre: 'Nantucket Cranberry Juice',
    Presentacion: '577-92-1961',
    Laboratorio: 'Mélys',
    Sitio: 'BTE',
    Existencia: 76,
    Precio: '$73.46',
    Vencimiento: '7/28/2018'
  },
  {
    Codigo: '54973-0626',
    Nombre: 'Champagne - Brights, Dry',
    Presentacion: '494-17-9929',
    Laboratorio: 'Dù',
    Sitio: 'FIBK',
    Existencia: 11,
    Precio: '$29.64',
    Vencimiento: '9/23/2018'
  },
  {
    Codigo: '48951-4090',
    Nombre: 'Compound - Rum',
    Presentacion: '189-33-0519',
    Laboratorio: 'Léonie',
    Sitio: 'AXARW',
    Existencia: 11,
    Precio: '$44.10',
    Vencimiento: '3/25/2019'
  },
  {
    Codigo: '61995-6110',
    Nombre: 'Bread - Roll, Canadian Dinner',
    Presentacion: '314-39-3988',
    Laboratorio: 'Andrée',
    Sitio: 'SSNI',
    Existencia: 48,
    Precio: '$93.68',
    Vencimiento: '3/11/2019'
  },
  {
    Codigo: '36800-944',
    Nombre: 'Fish - Scallops, Cold Smoked',
    Presentacion: '422-91-3744',
    Laboratorio: 'Océanne',
    Sitio: 'TRCH',
    Existencia: 38,
    Precio: '$73.81',
    Vencimiento: '11/7/2018'
  },
  {
    Codigo: '0135-0519',
    Nombre: 'Sherry - Dry',
    Presentacion: '470-03-3784',
    Laboratorio: 'Dù',
    Sitio: 'INSW',
    Existencia: 5,
    Precio: '$26.72',
    Vencimiento: '9/26/2018'
  },
  {
    Codigo: '0338-9540',
    Nombre: 'Onions - Red',
    Presentacion: '139-86-3878',
    Laboratorio: 'Bécassine',
    Sitio: 'EOCC',
    Existencia: 52,
    Precio: '$19.38',
    Vencimiento: '2/22/2019'
  },
  {
    Codigo: '36987-1355',
    Nombre: 'Waffle Stix',
    Presentacion: '549-35-8585',
    Laboratorio: 'Estève',
    Sitio: 'QBAK',
    Existencia: 68,
    Precio: '$75.59',
    Vencimiento: '7/31/2018'
  },
  {
    Codigo: '52810-205',
    Nombre: 'Cinnamon Rolls',
    Presentacion: '884-76-3592',
    Laboratorio: 'Béatrice',
    Sitio: 'VDSI',
    Existencia: 15,
    Precio: '$21.28',
    Vencimiento: '3/18/2019'
  },
  {
    Codigo: '0113-0274',
    Nombre: 'Scallops - Live In Shell',
    Presentacion: '195-85-2869',
    Laboratorio: 'Béatrice',
    Sitio: 'SXC',
    Existencia: 33,
    Precio: '$87.58',
    Vencimiento: '7/8/2018'
  },
  {
    Codigo: '49884-406',
    Nombre: 'Plate - Foam, Bread And Butter',
    Presentacion: '423-77-5462',
    Laboratorio: 'Séréna',
    Sitio: 'OTEX',
    Existencia: 58,
    Precio: '$92.71',
    Vencimiento: '7/27/2018'
  },
  {
    Codigo: '21695-003',
    Nombre: 'Chickhen - Chicken Phyllo',
    Presentacion: '453-23-5247',
    Laboratorio: 'Lèi',
    Sitio: 'CHDN',
    Existencia: 61,
    Precio: '$32.76',
    Vencimiento: '6/14/2018'
  },
  {
    Codigo: '98132-188',
    Nombre: 'Longos - Grilled Salmon With Bbq',
    Presentacion: '506-13-4427',
    Laboratorio: 'Salomé',
    Sitio: 'NTRI',
    Existencia: 42,
    Precio: '$32.46',
    Vencimiento: '12/8/2018'
  },
  {
    Codigo: '52584-941',
    Nombre: 'Table Cloth 54x54 White',
    Presentacion: '860-24-2565',
    Laboratorio: 'Noëlla',
    Sitio: 'OSG',
    Existencia: 67,
    Precio: '$34.79',
    Vencimiento: '8/25/2018'
  },
  {
    Codigo: '63545-517',
    Nombre: 'Pasta - Cannelloni, Sheets, Fresh',
    Presentacion: '894-73-4769',
    Laboratorio: 'Valérie',
    Sitio: 'ENH^C',
    Existencia: 58,
    Precio: '$27.04',
    Vencimiento: '3/9/2019'
  },
  {
    Codigo: '58479-004',
    Nombre: 'Bread - Pumpernickle, Rounds',
    Presentacion: '178-42-8997',
    Laboratorio: 'Alizée',
    Sitio: 'KTOVW',
    Existencia: 32,
    Precio: '$16.04',
    Vencimiento: '8/29/2018'
  },
  {
    Codigo: '37000-282',
    Nombre: 'Sour Cream',
    Presentacion: '491-88-2964',
    Laboratorio: 'Mélinda',
    Sitio: 'TRQ',
    Existencia: 21,
    Precio: '$81.79',
    Vencimiento: '2/11/2019'
  },
  {
    Codigo: '65224-700',
    Nombre: 'Tart Shells - Savory, 2',
    Presentacion: '785-13-3840',
    Laboratorio: 'Hélèna',
    Sitio: 'LCAHU',
    Existencia: 51,
    Precio: '$90.95',
    Vencimiento: '9/27/2018'
  },
  {
    Codigo: '62935-302',
    Nombre: 'Sauce Bbq Smokey',
    Presentacion: '342-26-0017',
    Laboratorio: 'Rachèle',
    Sitio: 'LND',
    Existencia: 81,
    Precio: '$12.63',
    Vencimiento: '2/23/2019'
  },
  {
    Codigo: '36987-2449',
    Nombre: 'Soup - Boston Clam Chowder',
    Presentacion: '898-11-6249',
    Laboratorio: 'Médiamass',
    Sitio: 'QURE',
    Existencia: 7,
    Precio: '$65.20',
    Vencimiento: '8/3/2018'
  },
  {
    Codigo: '51991-820',
    Nombre: 'Bread - Flat Bread',
    Presentacion: '804-85-0930',
    Laboratorio: 'Maéna',
    Sitio: 'VLO',
    Existencia: 55,
    Precio: '$18.97',
    Vencimiento: '1/16/2019'
  },
  {
    Codigo: '49884-277',
    Nombre: 'Cheese - Grana Padano',
    Presentacion: '706-40-3491',
    Laboratorio: 'Kù',
    Sitio: 'MS^F',
    Existencia: 93,
    Precio: '$83.82',
    Vencimiento: '5/26/2019'
  },
  {
    Codigo: '30142-327',
    Nombre: 'Bread Sour Rolls',
    Presentacion: '634-49-0223',
    Laboratorio: 'Mylène',
    Sitio: 'AGNCB',
    Existencia: 88,
    Precio: '$44.58',
    Vencimiento: '4/6/2019'
  },
  {
    Codigo: '51346-170',
    Nombre: 'Table Cloth 62x114 Colour',
    Presentacion: '817-30-7424',
    Laboratorio: 'Marie-josée',
    Sitio: 'HUN',
    Existencia: 95,
    Precio: '$84.06',
    Vencimiento: '4/21/2019'
  },
  {
    Codigo: '53808-0358',
    Nombre: 'Shrimp - Prawn',
    Presentacion: '202-88-0181',
    Laboratorio: 'Naéva',
    Sitio: 'PHH',
    Existencia: 88,
    Precio: '$11.18',
    Vencimiento: '1/12/2019'
  },
  {
    Codigo: '65044-1007',
    Nombre: 'Napkin - Beverage 1 Ply',
    Presentacion: '117-53-4142',
    Laboratorio: 'Mélodie',
    Sitio: 'NXEOU',
    Existencia: 7,
    Precio: '$61.86',
    Vencimiento: '10/12/2018'
  },
  {
    Codigo: '14290-282',
    Nombre: 'Cheese - Blue',
    Presentacion: '429-66-5037',
    Laboratorio: 'Séverine',
    Sitio: 'PSXP',
    Existencia: 24,
    Precio: '$76.50',
    Vencimiento: '10/20/2018'
  },
  {
    Codigo: '76015-100',
    Nombre: 'Nantucket - Pomegranate Pear',
    Presentacion: '252-83-5726',
    Laboratorio: 'Mylène',
    Sitio: 'HMSY',
    Existencia: 15,
    Precio: '$83.78',
    Vencimiento: '6/8/2018'
  },
  {
    Codigo: '65028-004',
    Nombre: 'Chicken - Soup Base',
    Presentacion: '865-84-3647',
    Laboratorio: 'Sòng',
    Sitio: 'VNCE',
    Existencia: 77,
    Precio: '$4.04',
    Vencimiento: '11/29/2018'
  },
  {
    Codigo: '49035-374',
    Nombre: 'Soup - Knorr, Country Bean',
    Presentacion: '517-92-7817',
    Laboratorio: 'Eliès',
    Sitio: 'NUV',
    Existencia: 96,
    Precio: '$2.28',
    Vencimiento: '7/18/2018'
  },
  {
    Codigo: '10544-240',
    Nombre: 'Crab - Blue, Frozen',
    Presentacion: '813-73-1613',
    Laboratorio: 'Desirée',
    Sitio: 'FDEU',
    Existencia: 15,
    Precio: '$23.82',
    Vencimiento: '8/15/2018'
  },
  {
    Codigo: '50436-3800',
    Nombre: 'Foil Cont Round',
    Presentacion: '204-29-6861',
    Laboratorio: 'Marie-josée',
    Sitio: 'MPA',
    Existencia: 68,
    Precio: '$50.71',
    Vencimiento: '2/9/2019'
  },
  {
    Codigo: '65862-471',
    Nombre: 'Coconut - Shredded, Sweet',
    Presentacion: '763-49-0873',
    Laboratorio: 'Aloïs',
    Sitio: 'GAM',
    Existencia: 23,
    Precio: '$67.55',
    Vencimiento: '6/26/2018'
  },
  {
    Codigo: '49349-983',
    Nombre: 'Arizona - Plum Green Tea',
    Presentacion: '845-10-9908',
    Laboratorio: 'Eléonore',
    Sitio: 'AXTA',
    Existencia: 46,
    Precio: '$13.23',
    Vencimiento: '11/30/2018'
  },
  {
    Codigo: '43087-575',
    Nombre: 'Butter - Unsalted',
    Presentacion: '632-70-8779',
    Laboratorio: 'Lorène',
    Sitio: 'FCH^A',
    Existencia: 26,
    Precio: '$23.12',
    Vencimiento: '12/10/2018'
  },
  {
    Codigo: '64720-158',
    Nombre: 'Salt - Sea',
    Presentacion: '831-45-9533',
    Laboratorio: 'Gérald',
    Sitio: 'GPRK',
    Existencia: 77,
    Precio: '$16.09',
    Vencimiento: '11/23/2018'
  },
  {
    Codigo: '68428-044',
    Nombre: 'Carbonated Water - Orange',
    Presentacion: '642-79-3220',
    Laboratorio: 'Gaétane',
    Sitio: 'TMUSP',
    Existencia: 95,
    Precio: '$56.03',
    Vencimiento: '7/3/2018'
  },
  {
    Codigo: '49520-103',
    Nombre: 'Lobak',
    Presentacion: '216-16-4510',
    Laboratorio: 'Noëlla',
    Sitio: 'DTV',
    Existencia: 58,
    Precio: '$59.96',
    Vencimiento: '5/7/2019'
  },
  {
    Codigo: '16252-509',
    Nombre: 'Gelatine Leaves - Envelopes',
    Presentacion: '567-06-3041',
    Laboratorio: 'Géraldine',
    Sitio: 'GS^C',
    Existencia: 98,
    Precio: '$60.17',
    Vencimiento: '7/27/2018'
  },
  {
    Codigo: '68258-6033',
    Nombre: 'Bar Mix - Lime',
    Presentacion: '242-56-8619',
    Laboratorio: 'Eléa',
    Sitio: 'MTB^',
    Existencia: 86,
    Precio: '$85.96',
    Vencimiento: '7/5/2018'
  },
  {
    Codigo: '11822-0504',
    Nombre: 'Crab Brie In Phyllo',
    Presentacion: '141-32-1750',
    Laboratorio: 'Yáo',
    Sitio: 'GNMK',
    Existencia: 62,
    Precio: '$80.80',
    Vencimiento: '10/2/2018'
  },
  {
    Codigo: '0069-0154',
    Nombre: 'Pork - Tenderloin, Frozen',
    Presentacion: '304-52-6650',
    Laboratorio: 'Miléna',
    Sitio: 'ICFI',
    Existencia: 36,
    Precio: '$34.21',
    Vencimiento: '11/4/2018'
  },
  {
    Codigo: '0228-3087',
    Nombre: 'Lettuce - Boston Bib',
    Presentacion: '769-07-8244',
    Laboratorio: 'Táng',
    Sitio: 'UVV',
    Existencia: 14,
    Precio: '$21.92',
    Vencimiento: '6/17/2018'
  },
  {
    Codigo: '51079-169',
    Nombre: 'Veal - Loin',
    Presentacion: '889-88-2346',
    Laboratorio: 'Rachèle',
    Sitio: 'INN^B',
    Existencia: 68,
    Precio: '$18.99',
    Vencimiento: '8/7/2018'
  },
  {
    Codigo: '37012-063',
    Nombre: 'Doilies - 10, Paper',
    Presentacion: '860-43-0011',
    Laboratorio: 'Almérinda',
    Sitio: 'MNR^C',
    Existencia: 61,
    Precio: '$39.09',
    Vencimiento: '4/18/2019'
  },
  {
    Codigo: '0007-4890',
    Nombre: 'Dr. Pepper - 355ml',
    Presentacion: '657-34-9778',
    Laboratorio: 'Léone',
    Sitio: 'DUK',
    Existencia: 5,
    Precio: '$42.03',
    Vencimiento: '2/17/2019'
  },
  {
    Codigo: '41167-0084',
    Nombre: 'C - Plus, Orange',
    Presentacion: '821-18-6742',
    Laboratorio: 'Maëlle',
    Sitio: 'RFEM',
    Existencia: 21,
    Precio: '$5.23',
    Vencimiento: '1/8/2019'
  },
  {
    Codigo: '54868-1328',
    Nombre: 'Island Oasis - Pina Colada',
    Presentacion: '421-09-5097',
    Laboratorio: 'Miléna',
    Sitio: 'FTLB',
    Existencia: 34,
    Precio: '$54.46',
    Vencimiento: '5/22/2019'
  },
  {
    Codigo: '0019-9894',
    Nombre: 'Coke - Diet, 355 Ml',
    Presentacion: '141-75-5647',
    Laboratorio: 'Yénora',
    Sitio: 'KEYW',
    Existencia: 67,
    Precio: '$3.49',
    Vencimiento: '8/4/2018'
  },
  {
    Codigo: '50544-004',
    Nombre: 'Nut - Pine Nuts, Whole',
    Presentacion: '480-40-4432',
    Laboratorio: 'Dà',
    Sitio: 'THFF',
    Existencia: 24,
    Precio: '$16.95',
    Vencimiento: '8/2/2018'
  },
  {
    Codigo: '59726-248',
    Nombre: 'Shark - Loin',
    Presentacion: '284-75-1317',
    Laboratorio: 'Cunégonde',
    Sitio: 'MOXC',
    Existencia: 6,
    Precio: '$2.06',
    Vencimiento: '2/6/2019'
  },
  {
    Codigo: '0406-9924',
    Nombre: 'Soup - Campbells, Chix Gumbo',
    Presentacion: '437-72-2832',
    Laboratorio: 'Bérénice',
    Sitio: 'BSET',
    Existencia: 64,
    Precio: '$16.40',
    Vencimiento: '3/19/2019'
  },
  {
    Codigo: '57469-057',
    Nombre: 'Bread - Pain Au Liat X12',
    Presentacion: '496-05-4861',
    Laboratorio: 'Lyséa',
    Sitio: 'POOL',
    Existencia: 72,
    Precio: '$13.24',
    Vencimiento: '4/6/2019'
  },
  {
    Codigo: '57520-0923',
    Nombre: 'Flour - Masa De Harina Mexican',
    Presentacion: '755-02-1812',
    Laboratorio: 'Cinéma',
    Sitio: 'PZRX',
    Existencia: 12,
    Precio: '$65.97',
    Vencimiento: '10/12/2018'
  },
  {
    Codigo: '0338-9542',
    Nombre: 'Cookie Dough - Chocolate Chip',
    Presentacion: '594-89-5808',
    Laboratorio: 'Séréna',
    Sitio: 'TTM',
    Existencia: 99,
    Precio: '$45.18',
    Vencimiento: '1/12/2019'
  },
  {
    Codigo: '21220-128',
    Nombre: 'Island Oasis - Sweet And Sour Mix',
    Presentacion: '120-02-7539',
    Laboratorio: 'Léana',
    Sitio: 'TATT',
    Existencia: 59,
    Precio: '$11.65',
    Vencimiento: '12/7/2018'
  },
  {
    Codigo: '63347-520',
    Nombre: 'Oven Mitts - 15 Inch',
    Presentacion: '780-70-6033',
    Laboratorio: 'Erwéi',
    Sitio: 'XCO',
    Existencia: 72,
    Precio: '$89.16',
    Vencimiento: '3/16/2019'
  },
  {
    Codigo: '55154-5384',
    Nombre: 'Olive - Spread Tapenade',
    Presentacion: '772-67-0953',
    Laboratorio: 'Lén',
    Sitio: 'PCI',
    Existencia: 94,
    Precio: '$91.63',
    Vencimiento: '6/14/2018'
  },
  {
    Codigo: '55289-972',
    Nombre: 'Numi - Assorted Teas',
    Presentacion: '842-75-0341',
    Laboratorio: 'Loïca',
    Sitio: 'CIR',
    Existencia: 79,
    Precio: '$37.29',
    Vencimiento: '6/17/2018'
  },
  {
    Codigo: '41520-459',
    Nombre: 'Plasticknivesblack',
    Presentacion: '802-73-7500',
    Laboratorio: 'Célestine',
    Sitio: 'TSC',
    Existencia: 51,
    Precio: '$28.87',
    Vencimiento: '12/4/2018'
  },
  {
    Codigo: '10812-348',
    Nombre: 'Tart Shells - Sweet, 3',
    Presentacion: '553-71-6151',
    Laboratorio: 'Josée',
    Sitio: 'BTZ',
    Existencia: 41,
    Precio: '$77.44',
    Vencimiento: '8/13/2018'
  },
  {
    Codigo: '0006-0270',
    Nombre: 'Lobster - Canned Premium',
    Presentacion: '883-26-9028',
    Laboratorio: 'Annotée',
    Sitio: 'VBTX',
    Existencia: 58,
    Precio: '$28.03',
    Vencimiento: '7/20/2018'
  },
  {
    Codigo: '0085-4351',
    Nombre: 'Cheese - Brie',
    Presentacion: '661-80-1133',
    Laboratorio: 'Cunégonde',
    Sitio: 'GJV',
    Existencia: 100,
    Precio: '$17.82',
    Vencimiento: '5/31/2018'
  },
  {
    Codigo: '11084-130',
    Nombre: 'Wine - Redchard Merritt',
    Presentacion: '489-61-1290',
    Laboratorio: 'Géraldine',
    Sitio: 'DLTH',
    Existencia: 86,
    Precio: '$29.23',
    Vencimiento: '11/1/2018'
  },
  {
    Codigo: '64661-091',
    Nombre: 'Bar Bran Honey Nut',
    Presentacion: '183-94-0372',
    Laboratorio: 'Simplifiés',
    Sitio: 'HURC',
    Existencia: 96,
    Precio: '$28.37',
    Vencimiento: '11/2/2018'
  },
  {
    Codigo: '10812-442',
    Nombre: 'Flour - Cake',
    Presentacion: '878-45-9385',
    Laboratorio: 'Fèi',
    Sitio: 'GEC',
    Existencia: 45,
    Precio: '$24.87',
    Vencimiento: '11/25/2018'
  },
  {
    Codigo: '54868-4864',
    Nombre: 'Zucchini - Green',
    Presentacion: '468-44-4709',
    Laboratorio: 'Léana',
    Sitio: 'NUROW',
    Existencia: 30,
    Precio: '$70.89',
    Vencimiento: '2/20/2019'
  },
  {
    Codigo: '54569-2391',
    Nombre: 'Juice - Ocean Spray Kiwi',
    Presentacion: '460-13-5126',
    Laboratorio: 'Pò',
    Sitio: 'HBP',
    Existencia: 48,
    Precio: '$35.51',
    Vencimiento: '3/16/2019'
  },
  {
    Codigo: '63550-158',
    Nombre: 'Yogurt - Raspberry, 175 Gr',
    Presentacion: '180-76-8023',
    Laboratorio: 'Bérangère',
    Sitio: 'CNET',
    Existencia: 15,
    Precio: '$86.39',
    Vencimiento: '12/17/2018'
  },
  {
    Codigo: '69170-102',
    Nombre: 'Trout Rainbow Whole',
    Presentacion: '698-03-2682',
    Laboratorio: 'Anaé',
    Sitio: 'QQEW',
    Existencia: 36,
    Precio: '$2.68',
    Vencimiento: '6/16/2018'
  },
  {
    Codigo: '21130-946',
    Nombre: 'Pepper - Green, Chili',
    Presentacion: '227-97-0839',
    Laboratorio: 'Personnalisée',
    Sitio: 'LNC',
    Existencia: 100,
    Precio: '$8.14',
    Vencimiento: '8/28/2018'
  },
  {
    Codigo: '41163-381',
    Nombre: 'Wine - Jaboulet Cotes Du Rhone',
    Presentacion: '491-11-5403',
    Laboratorio: 'Nadège',
    Sitio: 'RNR^C',
    Existencia: 12,
    Precio: '$47.45',
    Vencimiento: '1/28/2019'
  },
  {
    Codigo: '13537-348',
    Nombre: 'Ginger - Fresh',
    Presentacion: '237-61-8169',
    Laboratorio: 'Mélodie',
    Sitio: 'BLDR',
    Existencia: 71,
    Precio: '$65.89',
    Vencimiento: '1/25/2019'
  },
  {
    Codigo: '61748-220',
    Nombre: 'Pasta - Angel Hair',
    Presentacion: '183-44-3299',
    Laboratorio: 'Maëlla',
    Sitio: 'PDFS',
    Existencia: 91,
    Precio: '$47.23',
    Vencimiento: '4/10/2019'
  },
  {
    Codigo: '49349-663',
    Nombre: 'Tea - Green',
    Presentacion: '299-65-6789',
    Laboratorio: 'Stévina',
    Sitio: 'SBFG',
    Existencia: 51,
    Precio: '$70.43',
    Vencimiento: '12/1/2018'
  },
  {
    Codigo: '66993-902',
    Nombre: 'Chocolate Bar - Oh Henry',
    Presentacion: '558-91-7661',
    Laboratorio: 'Adélie',
    Sitio: 'CCC',
    Existencia: 78,
    Precio: '$35.85',
    Vencimiento: '6/27/2018'
  },
  {
    Codigo: '51672-4003',
    Nombre: 'Eel Fresh',
    Presentacion: '283-59-5843',
    Laboratorio: 'Marie-françoise',
    Sitio: 'GBDC',
    Existencia: 13,
    Precio: '$12.77',
    Vencimiento: '1/16/2019'
  },
  {
    Codigo: '24653-270',
    Nombre: 'Urban Zen Drinks',
    Presentacion: '755-02-4606',
    Laboratorio: 'Nélie',
    Sitio: 'BWINA',
    Existencia: 8,
    Precio: '$25.98',
    Vencimiento: '11/9/2018'
  },
  {
    Codigo: '0409-4887',
    Nombre: 'Rice - Jasmine Sented',
    Presentacion: '409-52-6226',
    Laboratorio: 'Bérangère',
    Sitio: 'V',
    Existencia: 51,
    Precio: '$55.59',
    Vencimiento: '7/26/2018'
  },
  {
    Codigo: '60429-391',
    Nombre: 'Container Clear 8 Oz',
    Presentacion: '804-38-3540',
    Laboratorio: 'Marylène',
    Sitio: 'OMAA',
    Existencia: 24,
    Precio: '$37.38',
    Vencimiento: '6/3/2018'
  },
  {
    Codigo: '21749-253',
    Nombre: 'Soup - French Onion, Dry',
    Presentacion: '388-74-8988',
    Laboratorio: 'Régine',
    Sitio: 'ASBB',
    Existencia: 100,
    Precio: '$70.33',
    Vencimiento: '12/16/2018'
  },
  {
    Codigo: '53145-005',
    Nombre: 'Puree - Raspberry',
    Presentacion: '773-99-1874',
    Laboratorio: 'Maï',
    Sitio: 'RXN',
    Existencia: 66,
    Precio: '$24.53',
    Vencimiento: '11/23/2018'
  },
  {
    Codigo: '0338-1049',
    Nombre: 'Chocolate - Pistoles, Lactee, Milk',
    Presentacion: '318-48-6951',
    Laboratorio: 'Lucrèce',
    Sitio: 'DS^C',
    Existencia: 85,
    Precio: '$37.08',
    Vencimiento: '1/29/2019'
  },
  {
    Codigo: '41520-441',
    Nombre: 'Ecolab - Ster Bac',
    Presentacion: '506-44-9038',
    Laboratorio: 'Dà',
    Sitio: 'SHSP',
    Existencia: 20,
    Precio: '$83.22',
    Vencimiento: '8/17/2018'
  },
  {
    Codigo: '54868-5215',
    Nombre: 'Oil - Macadamia',
    Presentacion: '547-61-5134',
    Laboratorio: 'Frédérique',
    Sitio: 'AMTD',
    Existencia: 1,
    Precio: '$55.22',
    Vencimiento: '7/29/2018'
  },
  {
    Codigo: '58118-5522',
    Nombre: 'Chinese Foods - Chicken',
    Presentacion: '425-45-9994',
    Laboratorio: 'Sòng',
    Sitio: 'MSA',
    Existencia: 84,
    Precio: '$47.20',
    Vencimiento: '3/17/2019'
  },
  {
    Codigo: '64679-810',
    Nombre: 'Garlic - Primerba, Paste',
    Presentacion: '313-17-3391',
    Laboratorio: 'Mélissandre',
    Sitio: 'SJR',
    Existencia: 56,
    Precio: '$36.25',
    Vencimiento: '12/21/2018'
  },
  {
    Codigo: '54748-203',
    Nombre: 'Parsley Italian - Fresh',
    Presentacion: '815-68-4758',
    Laboratorio: 'Simplifiés',
    Sitio: 'BLDR',
    Existencia: 46,
    Precio: '$95.08',
    Vencimiento: '9/1/2018'
  },
  {
    Codigo: '61543-2285',
    Nombre: 'Rosemary - Primerba, Paste',
    Presentacion: '874-85-5321',
    Laboratorio: 'Mélia',
    Sitio: 'SPAR',
    Existencia: 44,
    Precio: '$72.33',
    Vencimiento: '5/22/2019'
  },
  {
    Codigo: '36800-254',
    Nombre: 'Table Cloth 54x54 White',
    Presentacion: '732-74-0178',
    Laboratorio: 'Cléa',
    Sitio: 'RDNT',
    Existencia: 57,
    Precio: '$43.53',
    Vencimiento: '10/4/2018'
  },
  {
    Codigo: '36987-2306',
    Nombre: 'Table Cloth 144x90 White',
    Presentacion: '293-35-9611',
    Laboratorio: 'Naéva',
    Sitio: 'AYR',
    Existencia: 100,
    Precio: '$5.12',
    Vencimiento: '12/31/2018'
  },
  {
    Codigo: '64980-160',
    Nombre: 'Coffee - Almond Amaretto',
    Presentacion: '457-27-8317',
    Laboratorio: 'Intéressant',
    Sitio: 'BLH',
    Existencia: 27,
    Precio: '$16.07',
    Vencimiento: '5/21/2019'
  },
  {
    Codigo: '43063-090',
    Nombre: 'Bread Crumbs - Panko',
    Presentacion: '585-41-3115',
    Laboratorio: 'Yénora',
    Sitio: 'QTRH',
    Existencia: 92,
    Precio: '$63.13',
    Vencimiento: '7/19/2018'
  },
  {
    Codigo: '21695-779',
    Nombre: 'Bread - French Baquette',
    Presentacion: '521-71-1477',
    Laboratorio: 'Märta',
    Sitio: 'FLR',
    Existencia: 31,
    Precio: '$35.16',
    Vencimiento: '12/25/2018'
  },
  {
    Codigo: '52125-548',
    Nombre: 'Soup - Campbells Beef Stew',
    Presentacion: '373-17-0824',
    Laboratorio: 'Andréanne',
    Sitio: 'TPH',
    Existencia: 50,
    Precio: '$82.06',
    Vencimiento: '2/7/2019'
  },
  {
    Codigo: '37000-839',
    Nombre: 'Vinegar - White',
    Presentacion: '475-30-8276',
    Laboratorio: 'Ruì',
    Sitio: 'AGFSW',
    Existencia: 14,
    Precio: '$8.31',
    Vencimiento: '3/31/2019'
  },
  {
    Codigo: '64406-911',
    Nombre: 'Grapefruit - White',
    Presentacion: '458-22-0384',
    Laboratorio: 'Bécassine',
    Sitio: 'CDR',
    Existencia: 79,
    Precio: '$82.45',
    Vencimiento: '12/15/2018'
  },
  {
    Codigo: '68788-9049',
    Nombre: 'Dried Cherries',
    Presentacion: '407-73-9080',
    Laboratorio: 'André',
    Sitio: 'SKX',
    Existencia: 39,
    Precio: '$66.33',
    Vencimiento: '11/6/2018'
  },
  {
    Codigo: '0944-2832',
    Nombre: 'Brocolinni - Gaylan, Chinese',
    Presentacion: '538-02-0661',
    Laboratorio: 'Uò',
    Sitio: 'TWX',
    Existencia: 14,
    Precio: '$53.36',
    Vencimiento: '12/26/2018'
  },
  {
    Codigo: '63354-291',
    Nombre: 'Salt - Kosher',
    Presentacion: '747-92-7656',
    Laboratorio: 'Gaïa',
    Sitio: 'HRTX',
    Existencia: 94,
    Precio: '$2.38',
    Vencimiento: '12/30/2018'
  },
  {
    Codigo: '52533-026',
    Nombre: 'Icecream - Dstk Strw Chseck',
    Presentacion: '333-58-8041',
    Laboratorio: 'Styrbjörn',
    Sitio: 'MLNX',
    Existencia: 67,
    Precio: '$2.78',
    Vencimiento: '5/25/2019'
  },
  {
    Codigo: '54868-0270',
    Nombre: 'Bag Clear 10 Lb',
    Presentacion: '668-24-5490',
    Laboratorio: 'Danièle',
    Sitio: 'AMTX',
    Existencia: 82,
    Precio: '$72.97',
    Vencimiento: '7/12/2018'
  },
  {
    Codigo: '76014-002',
    Nombre: 'Scallops - 20/30',
    Presentacion: '539-54-7205',
    Laboratorio: 'Ráo',
    Sitio: 'CINR',
    Existencia: 50,
    Precio: '$84.05',
    Vencimiento: '11/21/2018'
  },
  {
    Codigo: '49288-0919',
    Nombre: 'Lamb - Leg, Boneless',
    Presentacion: '181-44-2640',
    Laboratorio: 'Salomé',
    Sitio: 'HCHC',
    Existencia: 41,
    Precio: '$19.92',
    Vencimiento: '9/29/2018'
  },
  {
    Codigo: '76049-899',
    Nombre: 'Kumquat',
    Presentacion: '544-30-6729',
    Laboratorio: 'Léa',
    Sitio: 'MYI',
    Existencia: 70,
    Precio: '$93.77',
    Vencimiento: '10/24/2018'
  },
  {
    Codigo: '68788-9155',
    Nombre: 'Cookie - Dough Variety',
    Presentacion: '434-19-4659',
    Laboratorio: 'Anaé',
    Sitio: 'GDEN',
    Existencia: 60,
    Precio: '$32.71',
    Vencimiento: '4/24/2019'
  },
  {
    Codigo: '42507-544',
    Nombre: 'Wine - Magnotta - Cab Sauv',
    Presentacion: '296-99-9518',
    Laboratorio: 'Adélie',
    Sitio: 'RGS',
    Existencia: 99,
    Precio: '$81.96',
    Vencimiento: '6/21/2018'
  },
  {
    Codigo: '61919-010',
    Nombre: 'Tea - Herbal I Love Lemon',
    Presentacion: '109-79-0533',
    Laboratorio: 'Mà',
    Sitio: 'CDTX',
    Existencia: 41,
    Precio: '$15.45',
    Vencimiento: '3/27/2019'
  },
  {
    Codigo: '0904-5921',
    Nombre: 'Oven Mitts 17 Inch',
    Presentacion: '628-86-4069',
    Laboratorio: 'Gösta',
    Sitio: 'NURO',
    Existencia: 19,
    Precio: '$92.87',
    Vencimiento: '4/13/2019'
  },
  {
    Codigo: '13537-116',
    Nombre: 'Truffle Cups - Red',
    Presentacion: '766-36-2218',
    Laboratorio: 'Edmée',
    Sitio: 'WMT',
    Existencia: 93,
    Precio: '$17.09',
    Vencimiento: '6/1/2018'
  },
  {
    Codigo: '52686-311',
    Nombre: 'Pork - Back Ribs',
    Presentacion: '497-99-4116',
    Laboratorio: 'Dà',
    Sitio: 'ASRVP',
    Existencia: 18,
    Precio: '$51.13',
    Vencimiento: '1/11/2019'
  },
  {
    Codigo: '59762-5018',
    Nombre: 'Chocolate - Milk Coating',
    Presentacion: '324-74-8930',
    Laboratorio: 'Jú',
    Sitio: 'GYRO',
    Existencia: 82,
    Precio: '$22.86',
    Vencimiento: '3/4/2019'
  },
  {
    Codigo: '42248-126',
    Nombre: 'Lamb - Racks, Frenched',
    Presentacion: '305-42-1735',
    Laboratorio: 'Médiamass',
    Sitio: 'PZN',
    Existencia: 58,
    Precio: '$9.37',
    Vencimiento: '2/20/2019'
  },
  {
    Codigo: '52261-0204',
    Nombre: 'Syrup - Golden, Lyles',
    Presentacion: '650-22-7187',
    Laboratorio: 'Méline',
    Sitio: 'BDC',
    Existencia: 73,
    Precio: '$87.08',
    Vencimiento: '7/24/2018'
  },
  {
    Codigo: '17856-0604',
    Nombre: 'Beans - Kidney White',
    Presentacion: '887-07-0885',
    Laboratorio: 'Jú',
    Sitio: 'ADNT',
    Existencia: 29,
    Precio: '$6.68',
    Vencimiento: '9/19/2018'
  },
  {
    Codigo: '68479-160',
    Nombre: 'Compound - Rum',
    Presentacion: '436-14-1541',
    Laboratorio: 'Ruì',
    Sitio: 'ASB^C',
    Existencia: 90,
    Precio: '$96.76',
    Vencimiento: '6/23/2018'
  },
  {
    Codigo: '54569-2594',
    Nombre: 'Olives - Black, Pitted',
    Presentacion: '846-39-2738',
    Laboratorio: 'Maëlyss',
    Sitio: 'GNTX',
    Existencia: 33,
    Precio: '$79.61',
    Vencimiento: '2/3/2019'
  },
  {
    Codigo: '54569-0809',
    Nombre: 'Bread - Roll, Whole Wheat',
    Presentacion: '815-33-8914',
    Laboratorio: 'Béatrice',
    Sitio: 'RFI',
    Existencia: 42,
    Precio: '$83.81',
    Vencimiento: '3/27/2019'
  },
  {
    Codigo: '42449-210',
    Nombre: 'Pastry - Lemon Danish - Mini',
    Presentacion: '508-98-9472',
    Laboratorio: 'Mårten',
    Sitio: 'CVNA',
    Existencia: 80,
    Precio: '$66.99',
    Vencimiento: '3/10/2019'
  },
  {
    Codigo: '10056-705',
    Nombre: 'Appetizer - Spring Roll, Veg',
    Presentacion: '769-64-0005',
    Laboratorio: 'Daphnée',
    Sitio: 'CZFC',
    Existencia: 74,
    Precio: '$49.57',
    Vencimiento: '12/18/2018'
  },
  {
    Codigo: '57605-0001',
    Nombre: 'Sauce - Vodka Blush',
    Presentacion: '571-68-1703',
    Laboratorio: 'Gisèle',
    Sitio: 'NSS',
    Existencia: 36,
    Precio: '$97.04',
    Vencimiento: '6/4/2018'
  },
  {
    Codigo: '64679-630',
    Nombre: 'Evaporated Milk - Skim',
    Presentacion: '647-18-5091',
    Laboratorio: 'Naëlle',
    Sitio: 'BMTC',
    Existencia: 24,
    Precio: '$26.57',
    Vencimiento: '3/5/2019'
  },
  {
    Codigo: '35000-676',
    Nombre: 'Tofu - Soft',
    Presentacion: '606-30-9121',
    Laboratorio: 'Miléna',
    Sitio: 'LSTR',
    Existencia: 25,
    Precio: '$3.08',
    Vencimiento: '12/20/2018'
  },
  {
    Codigo: '68788-9042',
    Nombre: 'Flour - Semolina',
    Presentacion: '154-12-6348',
    Laboratorio: 'Fèi',
    Sitio: 'PLYAW',
    Existencia: 10,
    Precio: '$4.54',
    Vencimiento: '12/23/2018'
  },
  {
    Codigo: '24208-631',
    Nombre: 'Beef - Flank Steak',
    Presentacion: '601-51-4544',
    Laboratorio: 'Mylène',
    Sitio: 'KALU',
    Existencia: 55,
    Precio: '$17.79',
    Vencimiento: '4/4/2019'
  },
  {
    Codigo: '64117-232',
    Nombre: 'Cabbage Roll',
    Presentacion: '863-54-0368',
    Laboratorio: 'Yáo',
    Sitio: 'EMCI',
    Existencia: 29,
    Precio: '$59.69',
    Vencimiento: '4/18/2019'
  },
  {
    Codigo: '57520-0337',
    Nombre: 'Cookie Trail Mix',
    Presentacion: '643-76-2725',
    Laboratorio: 'Eléa',
    Sitio: 'HES^A',
    Existencia: 24,
    Precio: '$47.69',
    Vencimiento: '8/27/2018'
  },
  {
    Codigo: '65044-9945',
    Nombre: 'Wine - Prem Select Charddonany',
    Presentacion: '879-23-4235',
    Laboratorio: 'Kallisté',
    Sitio: 'HBM.WS',
    Existencia: 19,
    Precio: '$70.35',
    Vencimiento: '1/18/2019'
  },
  {
    Codigo: '0067-4850',
    Nombre: 'Wheat - Soft Kernal Of Wheat',
    Presentacion: '359-27-4011',
    Laboratorio: 'Amélie',
    Sitio: 'DGLY',
    Existencia: 29,
    Precio: '$26.17',
    Vencimiento: '12/20/2018'
  },
  {
    Codigo: '11509-0301',
    Nombre: 'Soup - Campbells - Tomato',
    Presentacion: '545-70-7797',
    Laboratorio: 'Léonore',
    Sitio: 'UMH^B',
    Existencia: 92,
    Precio: '$71.42',
    Vencimiento: '3/21/2019'
  },
  {
    Codigo: '54575-216',
    Nombre: 'Glove - Cutting',
    Presentacion: '638-71-2636',
    Laboratorio: 'Intéressant',
    Sitio: 'CPTAG',
    Existencia: 63,
    Precio: '$31.54',
    Vencimiento: '5/22/2019'
  },
  {
    Codigo: '36987-2517',
    Nombre: 'Extract - Almond',
    Presentacion: '371-85-5606',
    Laboratorio: 'Mégane',
    Sitio: 'BRO',
    Existencia: 98,
    Precio: '$67.78',
    Vencimiento: '7/9/2018'
  },
  {
    Codigo: '42254-131',
    Nombre: 'Doilies - 8, Paper',
    Presentacion: '142-79-5559',
    Laboratorio: 'Marylène',
    Sitio: 'SJR',
    Existencia: 91,
    Precio: '$83.69',
    Vencimiento: '2/18/2019'
  },
  {
    Codigo: '68968-6650',
    Nombre: 'Pork - Ground',
    Presentacion: '293-82-7286',
    Laboratorio: 'Esbjörn',
    Sitio: 'AFHBL',
    Existencia: 37,
    Precio: '$34.58',
    Vencimiento: '6/12/2018'
  },
  {
    Codigo: '36987-1679',
    Nombre: 'Pate Pans Yellow',
    Presentacion: '293-49-6601',
    Laboratorio: 'Stéphanie',
    Sitio: 'CATM',
    Existencia: 77,
    Precio: '$61.68',
    Vencimiento: '10/31/2018'
  },
  {
    Codigo: '50181-0026',
    Nombre: 'Tahini Paste',
    Presentacion: '621-22-9101',
    Laboratorio: 'Aí',
    Sitio: 'IDRA',
    Existencia: 30,
    Precio: '$22.16',
    Vencimiento: '8/25/2018'
  },
  {
    Codigo: '0056-0169',
    Nombre: 'Wine - Magnotta - Pinot Gris Sr',
    Presentacion: '380-68-0841',
    Laboratorio: 'Simplifiés',
    Sitio: 'BGG',
    Existencia: 66,
    Precio: '$71.88',
    Vencimiento: '12/17/2018'
  },
  {
    Codigo: '65044-5021',
    Nombre: 'Icecream Cone - Areo Chocolate',
    Presentacion: '818-48-7752',
    Laboratorio: 'Fèi',
    Sitio: 'CACQ',
    Existencia: 82,
    Precio: '$13.81',
    Vencimiento: '12/18/2018'
  },
  {
    Codigo: '49349-903',
    Nombre: 'Mace',
    Presentacion: '120-85-3553',
    Laboratorio: 'Néhémie',
    Sitio: 'ZBIO',
    Existencia: 7,
    Precio: '$8.62',
    Vencimiento: '1/30/2019'
  },
  {
    Codigo: '67226-2050',
    Nombre: 'Wood Chips - Regular',
    Presentacion: '335-81-6542',
    Laboratorio: 'Måns',
    Sitio: 'ALE',
    Existencia: 8,
    Precio: '$69.16',
    Vencimiento: '5/7/2019'
  },
  {
    Codigo: '15828-320',
    Nombre: 'Wine - Niagara,vqa Reisling',
    Presentacion: '765-76-9915',
    Laboratorio: 'Stéphanie',
    Sitio: 'VRSN',
    Existencia: 35,
    Precio: '$58.28',
    Vencimiento: '10/20/2018'
  },
  {
    Codigo: '49349-852',
    Nombre: 'Chocolate Liqueur - Godet White',
    Presentacion: '467-38-5001',
    Laboratorio: 'Yú',
    Sitio: 'RTK',
    Existencia: 29,
    Precio: '$74.08',
    Vencimiento: '7/18/2018'
  },
  {
    Codigo: '62011-0211',
    Nombre: 'Wine - Merlot Vina Carmen',
    Presentacion: '321-80-6698',
    Laboratorio: 'Félicie',
    Sitio: 'LMHA',
    Existencia: 100,
    Precio: '$85.04',
    Vencimiento: '4/15/2019'
  },
  {
    Codigo: '62584-827',
    Nombre: 'Snapple - Mango Maddness',
    Presentacion: '130-91-1774',
    Laboratorio: 'Maïly',
    Sitio: 'AEE',
    Existencia: 91,
    Precio: '$85.16',
    Vencimiento: '3/13/2019'
  },
  {
    Codigo: '52125-685',
    Nombre: 'Beef - Eye Of Round',
    Presentacion: '610-81-8973',
    Laboratorio: 'Märta',
    Sitio: 'BCS^D',
    Existencia: 88,
    Precio: '$1.63',
    Vencimiento: '11/25/2018'
  },
  {
    Codigo: '10252-002',
    Nombre: 'Bandage - Finger Cots',
    Presentacion: '105-53-4957',
    Laboratorio: 'Bérengère',
    Sitio: 'TOO^A',
    Existencia: 5,
    Precio: '$63.79',
    Vencimiento: '12/5/2018'
  },
  {
    Codigo: '49580-0110',
    Nombre: 'Chestnuts - Whole,canned',
    Presentacion: '896-22-5468',
    Laboratorio: 'Gaétane',
    Sitio: 'PTC',
    Existencia: 88,
    Precio: '$92.32',
    Vencimiento: '9/30/2018'
  },
  {
    Codigo: '43857-0302',
    Nombre: 'Hickory Smoke, Liquid',
    Presentacion: '637-23-8496',
    Laboratorio: 'Irène',
    Sitio: 'FLGT',
    Existencia: 77,
    Precio: '$43.42',
    Vencimiento: '8/21/2018'
  },
  {
    Codigo: '68462-309',
    Nombre: 'Sprouts - Peppercress',
    Presentacion: '375-07-1027',
    Laboratorio: 'Örjan',
    Sitio: 'VMW',
    Existencia: 68,
    Precio: '$78.30',
    Vencimiento: '12/3/2018'
  },
  {
    Codigo: '53808-0801',
    Nombre: 'Fudge - Cream Fudge',
    Presentacion: '891-81-2903',
    Laboratorio: 'Garçon',
    Sitio: 'BV',
    Existencia: 9,
    Precio: '$70.17',
    Vencimiento: '9/24/2018'
  },
  {
    Codigo: '0574-0426',
    Nombre: 'Steampan - Half Size Shallow',
    Presentacion: '768-33-3320',
    Laboratorio: 'Måns',
    Sitio: 'PAI',
    Existencia: 74,
    Precio: '$22.46',
    Vencimiento: '6/5/2018'
  },
  {
    Codigo: '0573-1927',
    Nombre: 'Wine - Red, Mouton Cadet',
    Presentacion: '639-31-9728',
    Laboratorio: 'Méghane',
    Sitio: 'VXUS',
    Existencia: 87,
    Precio: '$76.88',
    Vencimiento: '3/18/2019'
  },
  {
    Codigo: '70253-514',
    Nombre: 'Chicken - Leg, Boneless',
    Presentacion: '593-47-5288',
    Laboratorio: 'Marie-josée',
    Sitio: 'GNBC',
    Existencia: 20,
    Precio: '$67.84',
    Vencimiento: '5/10/2019'
  },
  {
    Codigo: '48951-9016',
    Nombre: 'Milk - Chocolate 500ml',
    Presentacion: '490-26-6563',
    Laboratorio: 'Aloïs',
    Sitio: 'OTTR',
    Existencia: 63,
    Precio: '$97.48',
    Vencimiento: '8/6/2018'
  },
  {
    Codigo: '24724-030',
    Nombre: 'Samosa - Veg',
    Presentacion: '719-12-6319',
    Laboratorio: 'Marylène',
    Sitio: 'ATRO',
    Existencia: 100,
    Precio: '$16.30',
    Vencimiento: '2/28/2019'
  },
  {
    Codigo: '58411-173',
    Nombre: 'Duck - Breast',
    Presentacion: '820-52-0730',
    Laboratorio: 'Åslög',
    Sitio: 'MDCA',
    Existencia: 12,
    Precio: '$25.19',
    Vencimiento: '8/14/2018'
  },
  {
    Codigo: '49288-0074',
    Nombre: 'Flour - Cake',
    Presentacion: '615-45-5894',
    Laboratorio: 'Kévina',
    Sitio: 'ADVM',
    Existencia: 31,
    Precio: '$96.09',
    Vencimiento: '1/29/2019'
  },
  {
    Codigo: '0363-0660',
    Nombre: 'Wine - Maipo Valle Cabernet',
    Presentacion: '145-06-8519',
    Laboratorio: 'Cinéma',
    Sitio: 'BXMX',
    Existencia: 60,
    Precio: '$78.60',
    Vencimiento: '1/29/2019'
  },
  {
    Codigo: '61671-004',
    Nombre: 'Kellogs Special K Cereal',
    Presentacion: '339-80-5506',
    Laboratorio: 'Valérie',
    Sitio: 'FLIR',
    Existencia: 22,
    Precio: '$8.43',
    Vencimiento: '1/14/2019'
  },
  {
    Codigo: '52125-249',
    Nombre: 'Cheese - Pied De Vents',
    Presentacion: '171-38-8307',
    Laboratorio: 'Agnès',
    Sitio: 'SKLN',
    Existencia: 6,
    Precio: '$8.63',
    Vencimiento: '1/26/2019'
  },
  {
    Codigo: '41250-425',
    Nombre: 'Sauce - Ranch Dressing',
    Presentacion: '137-03-9549',
    Laboratorio: 'Maï',
    Sitio: 'FFNW',
    Existencia: 8,
    Precio: '$30.65',
    Vencimiento: '4/26/2019'
  },
  {
    Codigo: '52584-556',
    Nombre: 'Beans - Fava Fresh',
    Presentacion: '319-76-7249',
    Laboratorio: 'Ráo',
    Sitio: 'CLNS',
    Existencia: 25,
    Precio: '$31.89',
    Vencimiento: '7/31/2018'
  },
  {
    Codigo: '36987-1257',
    Nombre: 'Red Snapper - Fillet, Skin On',
    Presentacion: '711-26-8700',
    Laboratorio: 'Tú',
    Sitio: 'AFSI^F',
    Existencia: 34,
    Precio: '$35.58',
    Vencimiento: '6/22/2018'
  },
  {
    Codigo: '59088-816',
    Nombre: 'Dooleys Toffee',
    Presentacion: '148-53-5861',
    Laboratorio: 'Anaëlle',
    Sitio: 'NVG',
    Existencia: 54,
    Precio: '$64.54',
    Vencimiento: '12/2/2018'
  },
  {
    Codigo: '59115-141',
    Nombre: 'Butcher Twine 4r',
    Presentacion: '822-58-4126',
    Laboratorio: 'Tán',
    Sitio: 'NPTN',
    Existencia: 89,
    Precio: '$6.76',
    Vencimiento: '3/28/2019'
  },
  {
    Codigo: '49349-317',
    Nombre: 'Horseradish Root',
    Presentacion: '299-76-3393',
    Laboratorio: 'Adélie',
    Sitio: 'UFI',
    Existencia: 91,
    Precio: '$27.61',
    Vencimiento: '3/4/2019'
  },
  {
    Codigo: '36987-2660',
    Nombre: 'Ham - Procutinni',
    Presentacion: '785-55-7538',
    Laboratorio: 'Léa',
    Sitio: 'ARR',
    Existencia: 74,
    Precio: '$92.48',
    Vencimiento: '3/17/2019'
  },
  {
    Codigo: '54575-305',
    Nombre: 'Lettuce - Belgian Endive',
    Presentacion: '890-19-9491',
    Laboratorio: 'Adèle',
    Sitio: 'NVTR',
    Existencia: 96,
    Precio: '$23.43',
    Vencimiento: '8/5/2018'
  },
  {
    Codigo: '59800-8001',
    Nombre: 'Sugar - Cubes',
    Presentacion: '488-58-6735',
    Laboratorio: 'Edmée',
    Sitio: 'HJV',
    Existencia: 65,
    Precio: '$93.10',
    Vencimiento: '7/10/2018'
  },
  {
    Codigo: '66915-413',
    Nombre: 'Sponge Cake Mix - Chocolate',
    Presentacion: '634-29-1841',
    Laboratorio: 'Solène',
    Sitio: 'RUN',
    Existencia: 73,
    Precio: '$40.66',
    Vencimiento: '1/29/2019'
  },
  {
    Codigo: '0781-1719',
    Nombre: 'Soup Campbells Beef With Veg',
    Presentacion: '841-63-6690',
    Laboratorio: 'Andréa',
    Sitio: 'LDOS',
    Existencia: 14,
    Precio: '$68.37',
    Vencimiento: '9/28/2018'
  },
  {
    Codigo: '60977-002',
    Nombre: 'Heavy Duty Dust Pan',
    Presentacion: '850-87-5134',
    Laboratorio: 'Médiamass',
    Sitio: 'TNP',
    Existencia: 13,
    Precio: '$12.18',
    Vencimiento: '11/15/2018'
  },
  {
    Codigo: '63629-3367',
    Nombre: 'Pecan Raisin - Tarts',
    Presentacion: '313-76-7924',
    Laboratorio: 'Méng',
    Sitio: 'SGOC',
    Existencia: 13,
    Precio: '$36.25',
    Vencimiento: '5/21/2019'
  },
  {
    Codigo: '0548-9090',
    Nombre: 'Capers - Pickled',
    Presentacion: '885-02-8131',
    Laboratorio: 'Liè',
    Sitio: 'BGR',
    Existencia: 66,
    Precio: '$80.80',
    Vencimiento: '1/13/2019'
  },
  {
    Codigo: '30142-959',
    Nombre: 'Bread - Bagels, Plain',
    Presentacion: '192-94-8949',
    Laboratorio: 'Athéna',
    Sitio: 'CLFD',
    Existencia: 27,
    Precio: '$80.25',
    Vencimiento: '9/8/2018'
  },
  {
    Codigo: '54569-3146',
    Nombre: 'Pepper - Cubanelle',
    Presentacion: '402-43-2636',
    Laboratorio: 'Åke',
    Sitio: 'FYT',
    Existencia: 100,
    Precio: '$21.07',
    Vencimiento: '2/11/2019'
  },
  {
    Codigo: '0168-0803',
    Nombre: 'Salt And Pepper Mix - Black',
    Presentacion: '845-54-0670',
    Laboratorio: 'Pénélope',
    Sitio: 'AZPN',
    Existencia: 28,
    Precio: '$63.64',
    Vencimiento: '3/15/2019'
  },
  {
    Codigo: '76254-4001',
    Nombre: 'Cornish Hen',
    Presentacion: '182-04-7971',
    Laboratorio: 'Maïté',
    Sitio: 'CXDC',
    Existencia: 8,
    Precio: '$45.24',
    Vencimiento: '8/6/2018'
  },
  {
    Codigo: '0009-3359',
    Nombre: 'Sprouts - Onion',
    Presentacion: '473-39-5080',
    Laboratorio: 'Kallisté',
    Sitio: 'RYAM',
    Existencia: 82,
    Precio: '$71.04',
    Vencimiento: '11/22/2018'
  },
  {
    Codigo: '0603-4416',
    Nombre: 'Wine - Red, Gallo, Merlot',
    Presentacion: '606-19-5818',
    Laboratorio: 'Thérèse',
    Sitio: 'PCK',
    Existencia: 71,
    Precio: '$16.48',
    Vencimiento: '6/9/2018'
  },
  {
    Codigo: '58133-075',
    Nombre: 'Oil - Sesame',
    Presentacion: '635-20-6289',
    Laboratorio: 'Desirée',
    Sitio: 'ROKA',
    Existencia: 44,
    Precio: '$88.29',
    Vencimiento: '9/2/2018'
  },
  {
    Codigo: '49349-572',
    Nombre: 'Honey - Comb',
    Presentacion: '292-79-0514',
    Laboratorio: 'Eugénie',
    Sitio: 'RCMT',
    Existencia: 6,
    Precio: '$93.17',
    Vencimiento: '12/18/2018'
  },
  {
    Codigo: '41163-329',
    Nombre: 'Paper - Brown Paper Mini Cups',
    Presentacion: '794-48-8495',
    Laboratorio: 'Lài',
    Sitio: 'ABG',
    Existencia: 25,
    Precio: '$92.57',
    Vencimiento: '12/3/2018'
  },
  {
    Codigo: '64942-1066',
    Nombre: 'Bag - Regular Kraft 20 Lb',
    Presentacion: '302-52-4064',
    Laboratorio: 'Yú',
    Sitio: 'CELP',
    Existencia: 26,
    Precio: '$47.59',
    Vencimiento: '3/8/2019'
  },
  {
    Codigo: '63187-071',
    Nombre: 'Wine - Chardonnay Mondavi',
    Presentacion: '161-15-3491',
    Laboratorio: 'Marie-ève',
    Sitio: 'DTLA^',
    Existencia: 2,
    Precio: '$21.06',
    Vencimiento: '5/5/2019'
  },
  {
    Codigo: '65862-162',
    Nombre: 'Cup - Paper 10oz 92959',
    Presentacion: '708-66-4996',
    Laboratorio: 'Séverine',
    Sitio: 'NSTG',
    Existencia: 18,
    Precio: '$15.04',
    Vencimiento: '6/3/2018'
  },
  {
    Codigo: '0591-5238',
    Nombre: 'Onions Granulated',
    Presentacion: '675-33-3295',
    Laboratorio: 'Maëlyss',
    Sitio: 'VNDA',
    Existencia: 60,
    Precio: '$35.92',
    Vencimiento: '6/19/2018'
  },
  {
    Codigo: '64980-154',
    Nombre: 'Sandwich Wrap',
    Presentacion: '355-53-2914',
    Laboratorio: 'André',
    Sitio: 'GDV',
    Existencia: 81,
    Precio: '$61.21',
    Vencimiento: '4/12/2019'
  },
  {
    Codigo: '17452-400',
    Nombre: 'Coffee Caramel Biscotti',
    Presentacion: '586-05-9858',
    Laboratorio: 'Marylène',
    Sitio: 'ANAT',
    Existencia: 91,
    Precio: '$21.57',
    Vencimiento: '7/30/2018'
  },
  {
    Codigo: '55154-6157',
    Nombre: 'Soup Campbells Split Pea And Ham',
    Presentacion: '414-84-1005',
    Laboratorio: 'Léana',
    Sitio: 'MNTA',
    Existencia: 30,
    Precio: '$15.50',
    Vencimiento: '1/24/2019'
  },
  {
    Codigo: '67046-742',
    Nombre: 'Cornflakes',
    Presentacion: '876-43-2495',
    Laboratorio: 'Cléopatre',
    Sitio: 'EFAS',
    Existencia: 62,
    Precio: '$33.97',
    Vencimiento: '6/5/2018'
  },
  {
    Codigo: '59220-4001',
    Nombre: 'Sauce - Hp',
    Presentacion: '140-70-0120',
    Laboratorio: 'Simplifiés',
    Sitio: 'LEN',
    Existencia: 67,
    Precio: '$39.08',
    Vencimiento: '3/13/2019'
  },
  {
    Codigo: '50114-7055',
    Nombre: 'Yogurt - French Vanilla',
    Presentacion: '142-17-9494',
    Laboratorio: 'Marlène',
    Sitio: 'HTHT',
    Existencia: 6,
    Precio: '$20.63',
    Vencimiento: '8/10/2018'
  },
  {
    Codigo: '68382-093',
    Nombre: 'Bread Sour Rolls',
    Presentacion: '645-78-6043',
    Laboratorio: 'Estée',
    Sitio: 'KYE',
    Existencia: 4,
    Precio: '$4.44',
    Vencimiento: '4/11/2019'
  },
  {
    Codigo: '68151-2262',
    Nombre: 'Bread - Multigrain, Loaf',
    Presentacion: '127-29-7096',
    Laboratorio: 'Gisèle',
    Sitio: 'WBAI',
    Existencia: 27,
    Precio: '$100.00',
    Vencimiento: '10/23/2018'
  },
  {
    Codigo: '0031-8713',
    Nombre: 'Cabbage - Savoy',
    Presentacion: '220-21-6075',
    Laboratorio: 'Josée',
    Sitio: 'JE',
    Existencia: 37,
    Precio: '$37.47',
    Vencimiento: '2/25/2019'
  },
  {
    Codigo: '68382-180',
    Nombre: 'Longos - Chicken Wings',
    Presentacion: '723-53-2095',
    Laboratorio: 'Maëlyss',
    Sitio: 'BHBK',
    Existencia: 60,
    Precio: '$8.87',
    Vencimiento: '7/31/2018'
  },
  {
    Codigo: '0615-5554',
    Nombre: 'Butter Ripple - Phillips',
    Presentacion: '309-34-6969',
    Laboratorio: 'Edmée',
    Sitio: 'BXMX',
    Existencia: 72,
    Precio: '$32.74',
    Vencimiento: '1/12/2019'
  },
  {
    Codigo: '55319-503',
    Nombre: 'Sauce - Vodka Blush',
    Presentacion: '632-32-8285',
    Laboratorio: 'Lyséa',
    Sitio: 'VUZI',
    Existencia: 40,
    Precio: '$75.16',
    Vencimiento: '8/31/2018'
  },
  {
    Codigo: '68703-123',
    Nombre: 'Pea - Snow',
    Presentacion: '647-12-7073',
    Laboratorio: 'Ruò',
    Sitio: 'ZB^H',
    Existencia: 93,
    Precio: '$18.66',
    Vencimiento: '4/2/2019'
  },
  {
    Codigo: '0338-0125',
    Nombre: 'Beans - Black Bean, Canned',
    Presentacion: '289-44-9530',
    Laboratorio: 'Méghane',
    Sitio: 'C^S',
    Existencia: 35,
    Precio: '$8.68',
    Vencimiento: '6/6/2018'
  },
  {
    Codigo: '11822-5156',
    Nombre: 'Beef Flat Iron Steak',
    Presentacion: '273-53-8791',
    Laboratorio: 'Maëlys',
    Sitio: 'MDLY',
    Existencia: 39,
    Precio: '$0.53',
    Vencimiento: '5/4/2019'
  },
  {
    Codigo: '49348-853',
    Nombre: 'Vinegar - Red Wine',
    Presentacion: '265-34-2099',
    Laboratorio: 'Ophélie',
    Sitio: 'SPIL',
    Existencia: 55,
    Precio: '$41.79',
    Vencimiento: '5/3/2019'
  },
  {
    Codigo: '44924-012',
    Nombre: 'Lamb - Whole Head Off,nz',
    Presentacion: '193-40-7586',
    Laboratorio: 'Lucrèce',
    Sitio: 'ALDW',
    Existencia: 44,
    Precio: '$43.74',
    Vencimiento: '4/19/2019'
  },
  {
    Codigo: '53808-0639',
    Nombre: 'Gatorade - Lemon Lime',
    Presentacion: '400-23-7083',
    Laboratorio: 'Naëlle',
    Sitio: 'VRIG',
    Existencia: 47,
    Precio: '$48.78',
    Vencimiento: '10/24/2018'
  },
  {
    Codigo: '57775-001',
    Nombre: 'Cheese - Brie',
    Presentacion: '670-97-1397',
    Laboratorio: 'Naéva',
    Sitio: 'NWSA',
    Existencia: 66,
    Precio: '$63.35',
    Vencimiento: '5/28/2019'
  },
  {
    Codigo: '63187-154',
    Nombre: 'Island Oasis - Mango Daiquiri',
    Presentacion: '224-88-5463',
    Laboratorio: 'Bérengère',
    Sitio: 'REX',
    Existencia: 84,
    Precio: '$36.25',
    Vencimiento: '11/5/2018'
  },
  {
    Codigo: '55714-2317',
    Nombre: 'Table Cloth 91x91 Colour',
    Presentacion: '668-13-7773',
    Laboratorio: 'Marie-françoise',
    Sitio: 'WDC',
    Existencia: 63,
    Precio: '$92.91',
    Vencimiento: '9/6/2018'
  },
  {
    Codigo: '60429-125',
    Nombre: 'Soup - French Onion, Dry',
    Presentacion: '753-70-6328',
    Laboratorio: 'Andrée',
    Sitio: 'ISG',
    Existencia: 86,
    Precio: '$29.58',
    Vencimiento: '9/16/2018'
  },
  {
    Codigo: '36987-1180',
    Nombre: 'Bread Base - Toscano',
    Presentacion: '613-52-9194',
    Laboratorio: 'Josée',
    Sitio: 'ARRY',
    Existencia: 87,
    Precio: '$4.63',
    Vencimiento: '8/7/2018'
  },
  {
    Codigo: '53489-387',
    Nombre: 'Oil - Truffle, White',
    Presentacion: '195-58-6798',
    Laboratorio: 'Lorène',
    Sitio: 'IART',
    Existencia: 98,
    Precio: '$91.68',
    Vencimiento: '5/15/2019'
  },
  {
    Codigo: '68258-7047',
    Nombre: 'Scallops - 10/20',
    Presentacion: '881-23-7011',
    Laboratorio: 'Erwéi',
    Sitio: 'CVV',
    Existencia: 1,
    Precio: '$67.21',
    Vencimiento: '11/3/2018'
  },
  {
    Codigo: '61919-416',
    Nombre: 'Wine - Tribal Sauvignon',
    Presentacion: '639-64-7837',
    Laboratorio: 'Crééz',
    Sitio: 'BH',
    Existencia: 90,
    Precio: '$3.66',
    Vencimiento: '3/10/2019'
  },
  {
    Codigo: '0228-2980',
    Nombre: 'Tea - Apple Green Tea',
    Presentacion: '347-32-7875',
    Laboratorio: 'Yénora',
    Sitio: 'BCOV',
    Existencia: 53,
    Precio: '$12.37',
    Vencimiento: '9/5/2018'
  },
  {
    Codigo: '49738-871',
    Nombre: 'Roe - Lump Fish, Red',
    Presentacion: '303-09-0169',
    Laboratorio: 'Annotée',
    Sitio: 'BTZ',
    Existencia: 68,
    Precio: '$41.45',
    Vencimiento: '8/2/2018'
  },
  {
    Codigo: '0113-0422',
    Nombre: 'Cheese - Sheep Milk',
    Presentacion: '264-13-6020',
    Laboratorio: 'Vénus',
    Sitio: 'FCH^A',
    Existencia: 100,
    Precio: '$19.01',
    Vencimiento: '1/23/2019'
  },
  {
    Codigo: '51079-153',
    Nombre: 'Bagel - 12 Grain Preslice',
    Presentacion: '597-94-7415',
    Laboratorio: 'Laurélie',
    Sitio: 'SYX',
    Existencia: 81,
    Precio: '$18.03',
    Vencimiento: '1/24/2019'
  },
  {
    Codigo: '11673-513',
    Nombre: 'Tea - Herbal Orange Spice',
    Presentacion: '846-80-2574',
    Laboratorio: 'Pénélope',
    Sitio: 'AINV',
    Existencia: 66,
    Precio: '$64.41',
    Vencimiento: '4/20/2019'
  },
  {
    Codigo: '62750-058',
    Nombre: 'Cheese - Cottage Cheese',
    Presentacion: '773-45-5507',
    Laboratorio: 'Eugénie',
    Sitio: 'VTNR',
    Existencia: 61,
    Precio: '$87.96',
    Vencimiento: '8/8/2018'
  },
  {
    Codigo: '60681-3001',
    Nombre: 'Cheese - Mix',
    Presentacion: '200-39-0726',
    Laboratorio: 'Mélina',
    Sitio: 'GCBC',
    Existencia: 33,
    Precio: '$69.63',
    Vencimiento: '5/2/2019'
  },
  {
    Codigo: '52686-292',
    Nombre: 'Rum - Mount Gay Eclipes',
    Presentacion: '322-38-8284',
    Laboratorio: 'Géraldine',
    Sitio: 'IRIX',
    Existencia: 36,
    Precio: '$96.51',
    Vencimiento: '7/9/2018'
  },
  {
    Codigo: '52625-100',
    Nombre: 'Tart - Lemon',
    Presentacion: '640-88-3544',
    Laboratorio: 'Cléa',
    Sitio: 'JGH',
    Existencia: 66,
    Precio: '$18.63',
    Vencimiento: '9/24/2018'
  },
  {
    Codigo: '43353-744',
    Nombre: 'Rosemary - Dry',
    Presentacion: '476-87-0454',
    Laboratorio: 'Mà',
    Sitio: 'GWW',
    Existencia: 57,
    Precio: '$47.49',
    Vencimiento: '7/21/2018'
  },
  {
    Codigo: '58232-0730',
    Nombre: 'Straws - Cocktale',
    Presentacion: '419-53-3735',
    Laboratorio: 'Andréanne',
    Sitio: 'TDJ',
    Existencia: 32,
    Precio: '$39.13',
    Vencimiento: '6/1/2018'
  },
  {
    Codigo: '52959-282',
    Nombre: 'Lamb - Leg, Diced',
    Presentacion: '148-97-1738',
    Laboratorio: 'Eléa',
    Sitio: 'BANC^C',
    Existencia: 71,
    Precio: '$79.26',
    Vencimiento: '4/30/2019'
  },
  {
    Codigo: '13537-282',
    Nombre: 'Water - Tonic',
    Presentacion: '131-88-4774',
    Laboratorio: 'Pål',
    Sitio: 'WMGI',
    Existencia: 88,
    Precio: '$93.54',
    Vencimiento: '7/1/2018'
  },
  {
    Codigo: '0469-3525',
    Nombre: 'Sauce - Caesar Dressing',
    Presentacion: '561-87-9170',
    Laboratorio: 'Örjan',
    Sitio: 'LQDT',
    Existencia: 14,
    Precio: '$14.58',
    Vencimiento: '3/15/2019'
  },
  {
    Codigo: '22955-013',
    Nombre: 'Pheasants - Whole',
    Presentacion: '488-43-2147',
    Laboratorio: 'Maïlys',
    Sitio: 'WRD',
    Existencia: 96,
    Precio: '$92.80',
    Vencimiento: '2/23/2019'
  },
  {
    Codigo: '64578-0072',
    Nombre: 'Monkfish - Fresh',
    Presentacion: '605-50-8756',
    Laboratorio: 'Esbjörn',
    Sitio: 'PSF',
    Existencia: 97,
    Precio: '$40.28',
    Vencimiento: '10/11/2018'
  },
  {
    Codigo: '68151-1019',
    Nombre: 'Crab - Imitation Flakes',
    Presentacion: '131-20-8780',
    Laboratorio: 'Marie-josée',
    Sitio: 'FTXR',
    Existencia: 68,
    Precio: '$50.25',
    Vencimiento: '4/23/2019'
  },
  {
    Codigo: '55289-802',
    Nombre: 'Coconut - Shredded, Sweet',
    Presentacion: '277-97-1368',
    Laboratorio: 'Cléopatre',
    Sitio: 'RVNC',
    Existencia: 8,
    Precio: '$6.74',
    Vencimiento: '8/8/2018'
  },
  {
    Codigo: '0076-0903',
    Nombre: 'Bar Mix - Pina Colada, 355 Ml',
    Presentacion: '693-05-1127',
    Laboratorio: 'Méthode',
    Sitio: 'EXPE',
    Existencia: 48,
    Precio: '$86.76',
    Vencimiento: '5/31/2018'
  },
  {
    Codigo: '16590-295',
    Nombre: 'Numi - Assorted Teas',
    Presentacion: '186-35-5725',
    Laboratorio: 'Méthode',
    Sitio: 'PFS',
    Existencia: 68,
    Precio: '$18.50',
    Vencimiento: '2/19/2019'
  },
  {
    Codigo: '68180-757',
    Nombre: 'Water - Evian 355 Ml',
    Presentacion: '539-57-2239',
    Laboratorio: 'Léonie',
    Sitio: 'SPCB',
    Existencia: 4,
    Precio: '$55.32',
    Vencimiento: '4/3/2019'
  },
  {
    Codigo: '49967-021',
    Nombre: 'Almonds Ground Blanched',
    Presentacion: '726-86-8547',
    Laboratorio: 'Illustrée',
    Sitio: 'MOS',
    Existencia: 62,
    Precio: '$83.16',
    Vencimiento: '9/2/2018'
  },
  {
    Codigo: '52125-413',
    Nombre: 'Mcguinness - Blue Curacao',
    Presentacion: '719-80-2828',
    Laboratorio: 'Méthode',
    Sitio: 'HGSH',
    Existencia: 20,
    Precio: '$77.68',
    Vencimiento: '4/8/2019'
  },
  {
    Codigo: '68084-226',
    Nombre: 'Vinegar - Balsamic',
    Presentacion: '853-21-1839',
    Laboratorio: 'Laurène',
    Sitio: 'MBVX',
    Existencia: 19,
    Precio: '$61.37',
    Vencimiento: '4/19/2019'
  },
  {
    Codigo: '37012-072',
    Nombre: 'Tea - Decaf Lipton',
    Presentacion: '552-93-5342',
    Laboratorio: 'Salomé',
    Sitio: 'VIAV',
    Existencia: 7,
    Precio: '$92.44',
    Vencimiento: '3/17/2019'
  },
  {
    Codigo: '42507-437',
    Nombre: 'Kale - Red',
    Presentacion: '184-19-8113',
    Laboratorio: 'Faîtes',
    Sitio: 'GJP',
    Existencia: 1,
    Precio: '$70.65',
    Vencimiento: '11/17/2018'
  },
  {
    Codigo: '49701-2000',
    Nombre: 'Onion Powder',
    Presentacion: '884-32-7941',
    Laboratorio: 'Audréanne',
    Sitio: 'ORIG',
    Existencia: 19,
    Precio: '$87.55',
    Vencimiento: '3/28/2019'
  },
  {
    Codigo: '0904-5809',
    Nombre: 'Lime Cordial - Roses',
    Presentacion: '600-85-6828',
    Laboratorio: 'Mégane',
    Sitio: 'STML',
    Existencia: 55,
    Precio: '$68.07',
    Vencimiento: '4/18/2019'
  },
  {
    Codigo: '55714-4475',
    Nombre: 'Lemons',
    Presentacion: '104-64-4095',
    Laboratorio: 'Kù',
    Sitio: 'VREX',
    Existencia: 13,
    Precio: '$78.27',
    Vencimiento: '5/18/2019'
  },
  {
    Codigo: '60512-6486',
    Nombre: 'Langers - Ruby Red Grapfruit',
    Presentacion: '244-55-2781',
    Laboratorio: 'Estève',
    Sitio: 'ANGI',
    Existencia: 84,
    Precio: '$22.20',
    Vencimiento: '8/29/2018'
  },
  {
    Codigo: '61380-311',
    Nombre: 'Crab - Soft Shell',
    Presentacion: '755-55-8920',
    Laboratorio: 'Ophélie',
    Sitio: 'KDMN',
    Existencia: 30,
    Precio: '$83.24',
    Vencimiento: '7/16/2018'
  },
  {
    Codigo: '17271-245',
    Nombre: 'Stock - Fish',
    Presentacion: '354-64-7496',
    Laboratorio: 'Mårten',
    Sitio: 'GFNCP',
    Existencia: 55,
    Precio: '$14.01',
    Vencimiento: '12/31/2018'
  },
  {
    Codigo: '28851-694',
    Nombre: 'Muffin Puck Ww Carrot',
    Presentacion: '738-87-6625',
    Laboratorio: 'Vénus',
    Sitio: 'OIA',
    Existencia: 38,
    Precio: '$95.34',
    Vencimiento: '12/4/2018'
  },
  {
    Codigo: '67457-182',
    Nombre: 'Cherries - Bing, Canned',
    Presentacion: '123-89-3838',
    Laboratorio: 'Mélanie',
    Sitio: 'CTDD',
    Existencia: 27,
    Precio: '$12.84',
    Vencimiento: '3/17/2019'
  },
  {
    Codigo: '0002-4420',
    Nombre: 'Bread Foccacia Whole',
    Presentacion: '794-51-3156',
    Laboratorio: 'Marie-françoise',
    Sitio: 'OFC^L.CL',
    Existencia: 97,
    Precio: '$98.96',
    Vencimiento: '5/21/2019'
  },
  {
    Codigo: '65044-1544',
    Nombre: 'Beans - Kidney, Red Dry',
    Presentacion: '601-98-3595',
    Laboratorio: 'Mélissandre',
    Sitio: 'PM',
    Existencia: 28,
    Precio: '$91.46',
    Vencimiento: '2/26/2019'
  },
  {
    Codigo: '61995-0315',
    Nombre: 'Coffee Cup 16oz Foam',
    Presentacion: '387-07-7951',
    Laboratorio: 'Eléa',
    Sitio: 'MNI',
    Existencia: 93,
    Precio: '$43.86',
    Vencimiento: '6/5/2018'
  },
  {
    Codigo: '10578-007',
    Nombre: 'Vinegar - Balsamic',
    Presentacion: '710-68-5559',
    Laboratorio: 'Mélys',
    Sitio: 'PAYC',
    Existencia: 19,
    Precio: '$96.80',
    Vencimiento: '3/10/2019'
  },
  {
    Codigo: '21695-567',
    Nombre: 'Cheese - Brick With Pepper',
    Presentacion: '891-40-5764',
    Laboratorio: 'Aurélie',
    Sitio: 'BCR',
    Existencia: 14,
    Precio: '$57.10',
    Vencimiento: '7/27/2018'
  },
  {
    Codigo: '54575-454',
    Nombre: 'Pastry - Apple Large',
    Presentacion: '295-02-5768',
    Laboratorio: 'Amélie',
    Sitio: 'BFS^C',
    Existencia: 14,
    Precio: '$4.14',
    Vencimiento: '5/28/2019'
  },
  {
    Codigo: '54868-5362',
    Nombre: 'Dried Cherries',
    Presentacion: '102-62-6618',
    Laboratorio: 'Clémence',
    Sitio: 'DATA',
    Existencia: 10,
    Precio: '$0.75',
    Vencimiento: '2/12/2019'
  },
  {
    Codigo: '41167-3318',
    Nombre: 'Baking Soda',
    Presentacion: '877-67-2805',
    Laboratorio: 'Agnès',
    Sitio: 'SHSP',
    Existencia: 28,
    Precio: '$12.96',
    Vencimiento: '9/4/2018'
  },
  {
    Codigo: '68737-232',
    Nombre: 'Muffins - Assorted',
    Presentacion: '831-89-0006',
    Laboratorio: 'Maëlys',
    Sitio: 'HTH',
    Existencia: 96,
    Precio: '$51.91',
    Vencimiento: '10/23/2018'
  },
  {
    Codigo: '48951-2043',
    Nombre: 'Potatoes - Mini White 3 Oz',
    Presentacion: '188-02-0103',
    Laboratorio: 'Nuó',
    Sitio: 'FISV',
    Existencia: 34,
    Precio: '$46.53',
    Vencimiento: '9/25/2018'
  },
  {
    Codigo: '68084-635',
    Nombre: 'Ginger - Fresh',
    Presentacion: '292-17-4241',
    Laboratorio: 'Stévina',
    Sitio: 'AMOV',
    Existencia: 22,
    Precio: '$54.94',
    Vencimiento: '4/3/2019'
  },
  {
    Codigo: '0591-2318',
    Nombre: 'Scallops 60/80 Iqf',
    Presentacion: '332-12-5832',
    Laboratorio: 'Loïs',
    Sitio: 'KIM',
    Existencia: 39,
    Precio: '$66.55',
    Vencimiento: '7/30/2018'
  },
  {
    Codigo: '63736-502',
    Nombre: 'Appetizer - Veg Assortment',
    Presentacion: '235-96-0370',
    Laboratorio: 'Geneviève',
    Sitio: 'TAST',
    Existencia: 19,
    Precio: '$61.25',
    Vencimiento: '10/19/2018'
  },
  {
    Codigo: '55154-1678',
    Nombre: 'Oysters - Smoked',
    Presentacion: '670-30-3271',
    Laboratorio: 'Estée',
    Sitio: 'STMP',
    Existencia: 75,
    Precio: '$18.67',
    Vencimiento: '3/10/2019'
  },
  {
    Codigo: '55533-529',
    Nombre: 'Apricots - Dried',
    Presentacion: '357-86-4430',
    Laboratorio: 'Desirée',
    Sitio: 'FAC',
    Existencia: 18,
    Precio: '$34.44',
    Vencimiento: '8/13/2018'
  },
  {
    Codigo: '0273-0358',
    Nombre: 'Pastry - French Mini Assorted',
    Presentacion: '832-88-6104',
    Laboratorio: 'Mahélie',
    Sitio: 'QURE',
    Existencia: 89,
    Precio: '$67.99',
    Vencimiento: '10/19/2018'
  },
  {
    Codigo: '52125-698',
    Nombre: 'Bread - Corn Muffaleta Onion',
    Presentacion: '897-25-8718',
    Laboratorio: 'Marlène',
    Sitio: 'IPI',
    Existencia: 53,
    Precio: '$46.40',
    Vencimiento: '9/9/2018'
  },
  {
    Codigo: '62839-1332',
    Nombre: 'Bagel - Everything Presliced',
    Presentacion: '864-64-6552',
    Laboratorio: 'Marie-josée',
    Sitio: 'WBMD',
    Existencia: 31,
    Precio: '$82.14',
    Vencimiento: '1/24/2019'
  },
  {
    Codigo: '0093-7424',
    Nombre: 'Cumin - Whole',
    Presentacion: '468-85-4310',
    Laboratorio: 'Géraldine',
    Sitio: 'VTL',
    Existencia: 52,
    Precio: '$96.65',
    Vencimiento: '5/22/2019'
  },
  {
    Codigo: '50436-3961',
    Nombre: 'Lotus Root',
    Presentacion: '334-03-9336',
    Laboratorio: 'Táng',
    Sitio: 'XBIO',
    Existencia: 77,
    Precio: '$33.77',
    Vencimiento: '3/5/2019'
  },
  {
    Codigo: '0069-0174',
    Nombre: 'Cookie Trail Mix',
    Presentacion: '597-29-8700',
    Laboratorio: 'Danièle',
    Sitio: 'EPR',
    Existencia: 32,
    Precio: '$22.19',
    Vencimiento: '4/25/2019'
  },
  {
    Codigo: '37205-145',
    Nombre: 'Gatorade - Xfactor Berry',
    Presentacion: '474-65-4878',
    Laboratorio: 'Gaétane',
    Sitio: 'INN',
    Existencia: 17,
    Precio: '$9.40',
    Vencimiento: '6/20/2018'
  },
  {
    Codigo: '68788-9385',
    Nombre: 'Pork - Back Ribs',
    Presentacion: '637-83-2761',
    Laboratorio: 'Ruò',
    Sitio: 'IEP',
    Existencia: 4,
    Precio: '$66.16',
    Vencimiento: '9/5/2018'
  },
  {
    Codigo: '35000-848',
    Nombre: 'Celery Root',
    Presentacion: '776-06-0163',
    Laboratorio: 'Mélissandre',
    Sitio: 'AGO^F',
    Existencia: 19,
    Precio: '$73.94',
    Vencimiento: '9/20/2018'
  },
  {
    Codigo: '0430-0115',
    Nombre: 'Tart Shells - Sweet, 3',
    Presentacion: '440-67-0612',
    Laboratorio: 'Simplifiés',
    Sitio: 'DRAD',
    Existencia: 90,
    Precio: '$74.83',
    Vencimiento: '1/13/2019'
  },
  {
    Codigo: '0591-3120',
    Nombre: 'Muffin Hinge - 211n',
    Presentacion: '769-36-9035',
    Laboratorio: 'Lén',
    Sitio: 'BCE',
    Existencia: 76,
    Precio: '$91.36',
    Vencimiento: '7/20/2018'
  },
  {
    Codigo: '63981-973',
    Nombre: 'Stock - Beef, Brown',
    Presentacion: '897-69-0852',
    Laboratorio: 'Irène',
    Sitio: 'PCTI',
    Existencia: 74,
    Precio: '$24.56',
    Vencimiento: '12/5/2018'
  },
  {
    Codigo: '65162-542',
    Nombre: 'Sauce - Thousand Island',
    Presentacion: '804-99-8888',
    Laboratorio: 'Eugénie',
    Sitio: 'CRH',
    Existencia: 3,
    Precio: '$2.48',
    Vencimiento: '7/9/2018'
  },
  {
    Codigo: '0280-8005',
    Nombre: 'Milk Powder',
    Presentacion: '430-30-2192',
    Laboratorio: 'Torbjörn',
    Sitio: 'GT',
    Existencia: 8,
    Precio: '$95.97',
    Vencimiento: '11/15/2018'
  },
  {
    Codigo: '68084-633',
    Nombre: 'Apricots - Halves',
    Presentacion: '154-82-1796',
    Laboratorio: 'Maïwenn',
    Sitio: 'ORLY',
    Existencia: 62,
    Precio: '$34.40',
    Vencimiento: '1/13/2019'
  },
  {
    Codigo: '63629-5327',
    Nombre: 'Buffalo - Tenderloin',
    Presentacion: '182-66-7113',
    Laboratorio: 'Marie-noël',
    Sitio: 'EHT',
    Existencia: 59,
    Precio: '$73.94',
    Vencimiento: '6/9/2018'
  },
  {
    Codigo: '51401-030',
    Nombre: 'Pate Pans Yellow',
    Presentacion: '142-89-5241',
    Laboratorio: 'Mégane',
    Sitio: 'PML',
    Existencia: 81,
    Precio: '$94.82',
    Vencimiento: '4/27/2019'
  },
  {
    Codigo: '64455-107',
    Nombre: 'Crackers - Water',
    Presentacion: '696-12-9860',
    Laboratorio: 'Märta',
    Sitio: 'JBT',
    Existencia: 94,
    Precio: '$68.70',
    Vencimiento: '7/16/2018'
  },
  {
    Codigo: '0409-7336',
    Nombre: 'Pasta - Fettuccine, Egg, Fresh',
    Presentacion: '369-33-2925',
    Laboratorio: 'Michèle',
    Sitio: 'ROCK',
    Existencia: 3,
    Precio: '$15.64',
    Vencimiento: '4/30/2019'
  },
  {
    Codigo: '49609-102',
    Nombre: 'Coriander - Seed',
    Presentacion: '509-40-4451',
    Laboratorio: 'Méghane',
    Sitio: 'REXX',
    Existencia: 35,
    Precio: '$79.38',
    Vencimiento: '6/3/2018'
  },
  {
    Codigo: '24488-021',
    Nombre: 'Lid - 10,12,16 Oz',
    Presentacion: '825-06-1135',
    Laboratorio: 'Mélanie',
    Sitio: 'FPL',
    Existencia: 62,
    Precio: '$93.81',
    Vencimiento: '8/8/2018'
  },
  {
    Codigo: '61995-2921',
    Nombre: 'Iced Tea Concentrate',
    Presentacion: '129-46-9193',
    Laboratorio: 'Annotés',
    Sitio: 'WLK',
    Existencia: 72,
    Precio: '$33.84',
    Vencimiento: '2/4/2019'
  },
  {
    Codigo: '58503-017',
    Nombre: 'Beef - Tongue, Cooked',
    Presentacion: '295-07-2169',
    Laboratorio: 'Kuí',
    Sitio: 'SYT',
    Existencia: 98,
    Precio: '$8.81',
    Vencimiento: '10/8/2018'
  },
  {
    Codigo: '55910-521',
    Nombre: 'Paste - Black Olive',
    Presentacion: '877-71-2946',
    Laboratorio: 'Néhémie',
    Sitio: 'PF',
    Existencia: 79,
    Precio: '$8.56',
    Vencimiento: '12/20/2018'
  },
  {
    Codigo: '60760-792',
    Nombre: 'Napkin White - Starched',
    Presentacion: '374-05-9703',
    Laboratorio: 'Gaëlle',
    Sitio: 'PVTB',
    Existencia: 11,
    Precio: '$89.53',
    Vencimiento: '11/8/2018'
  },
  {
    Codigo: '63961-003',
    Nombre: 'Skirt - 24 Foot',
    Presentacion: '253-43-9473',
    Laboratorio: 'Marie-ève',
    Sitio: 'CAI',
    Existencia: 33,
    Precio: '$52.20',
    Vencimiento: '2/13/2019'
  },
  {
    Codigo: '16590-846',
    Nombre: 'Jolt Cola - Red Eye',
    Presentacion: '269-42-0245',
    Laboratorio: 'Céline',
    Sitio: 'RLH',
    Existencia: 10,
    Precio: '$56.80',
    Vencimiento: '9/3/2018'
  },
  {
    Codigo: '42023-111',
    Nombre: 'Wine - Chablis 2003 Champs',
    Presentacion: '843-51-6351',
    Laboratorio: 'Ophélie',
    Sitio: 'SBNY',
    Existencia: 74,
    Precio: '$13.66',
    Vencimiento: '5/6/2019'
  },
  {
    Codigo: '51660-905',
    Nombre: 'Foie Gras',
    Presentacion: '346-17-5313',
    Laboratorio: 'Célia',
    Sitio: 'BSET',
    Existencia: 1,
    Precio: '$1.29',
    Vencimiento: '10/27/2018'
  },
  {
    Codigo: '54868-4916',
    Nombre: 'Dry Ice',
    Presentacion: '484-96-9185',
    Laboratorio: 'Eliès',
    Sitio: 'TCF^B',
    Existencia: 44,
    Precio: '$9.26',
    Vencimiento: '1/3/2019'
  }
];

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})
export class InventarioComponent implements OnInit {
  // se define una variable con los elementos de cabcera de la tabla
  displayedColumns: string[] = ['Codigo', 'Nombre', 'Presentacion', 'Laboratorio', 'Sitio', 'Existencia', 'Precio', 'Vencimiento', 'Acciones'];

  // se definen variables de tipo document observable para el paginator y para el sorter
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // tslint:disable-next-line:max-line-length
  // se inicializa un variable de tipo MatTableDataSource con los elementos del arreglo anteriormente inicializado la cual contendra todos los datos de los elementos
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() {
  }

  ngOnInit() {
    // se inicializan las varibles para el paginator de la tabla y para el sorter de la tabla
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
