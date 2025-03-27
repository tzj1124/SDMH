// 模拟后端返回的数据
const mockResponse = {
    results: [
        { name: 'Lablab Semen Album', imageUrl: '../static/images/result/Lablab Semen Album.jpg' },
        { name: 'Ginkgo Semen', imageUrl: '../static/images/result/Ginkgo Semen.jpg' },
        { name: 'Platycladi Semen', imageUrl: '../static/images/result/Platycladi Semen.jpg' },
        { name: 'Ricini Semen', imageUrl: '../static/images/result/Ricini Semen.jpg' },
        { name: 'Arecae Semen', imageUrl: '../static/images/result/Arecae Semen.JPG' },
        { name: 'Alpiniae Katsumadai Semen', imageUrl: '../static/images/result/Alpiniae Katsumadai Semen.jpg' },
        { name: 'Trichosanthis Semen Tostum', imageUrl: '../static/images/result/Trichosanthis Semen Tostum.jpg' },
        { name: 'Plantaginis Semen', imageUrl: '../static/images/result/Plantaginis Semen.jpg' },
        { name: 'Vignaae Semen', imageUrl: '../static/images/result/Vignaae Semen.jpg' },
        { name: 'Sojae Semen Germinatum', imageUrl: '../static/images/result/Sojae Semen Germinatum.jpg' },
        { name: 'Sojae Semen Praeparatum', imageUrl: '../static/images/result/Sojae Semen Praeparatum.jpg' },
        { name: 'Canavaliae Semen', imageUrl: '../static/images/result/Canavaliae Semen.jpg' },
        { name: 'Torreyiae Semen', imageUrl: '../static/images/result/Torreyiae Semen.jpg' },
        { name: 'Trichosanthis Semen', imageUrl: '../static/images/result/Trichosanthis Semen.jpg' },
        { name: 'Juglandis Semen', imageUrl: '../static/images/result/Juglandis Semen.jpg' },
        { name: 'Sojae Semen Nigrum', imageUrl: '../static/images/result/Sojae Semen Nigrum.jpg' },
        { name: 'Sesami Semen Nigrum', imageUrl: '../static/images/result/Sesami Semen Nigrum.jpg' },
        { name: 'Nigellae Semen', imageUrl: '../static/images/result/Nigellae Semen.jpg' },
        { name: 'Trigonellae Semen', imageUrl: '../static/images/result/Trigonellae Semen.jpg' },
        { name: 'Impatientis Semen', imageUrl: '../static/images/result/Impatientis Semen.jpg' },
        { name: 'Arecae Semen Tostum', imageUrl: '../static/images/result/Arecae Semen Tostum.jpg' },
        { name: 'Sinapis Semen', imageUrl: '../static/images/result/Sinapis Semen.jpg' },
        { name: 'Allii Tuberosii Semen', imageUrl: '../static/images/result/Allii Tuberosii Semen.jpg' },
        { name: 'Citri Reticulatae Semen', imageUrl: '../static/images/result/Citri Reticulatae Semen.jpg' },
        { name: 'Cassiae Semen', imageUrl: '../static/images/result/Cassiae Semen.jpg' },
        { name: 'Entadae Semen', imageUrl: '../static/images/result/Entadae Semen.jpg' },
        { name: 'Armeniaceae Semen Amarum', imageUrl: '../static/images/result/Armeniaceae Semen Amarum.jpg' },
        { name: 'Raphani Semen', imageUrl: '../static/images/result/Raphani Semen.jpg' },
        { name: 'Litchi Semen', imageUrl: '../static/images/result/Litchi Semen.jpg' },
        { name: 'Nelumbinis Semen', imageUrl: '../static/images/result/Nelumbinis Semen.jpg' },
        { name: 'Nelumbinis Plumula', imageUrl: '../static/images/result/Nelumbinis Plumula.jpg' },
        { name: 'Longan Arillus', imageUrl: '../static/images/result/Longan Arillus.jpg' },
        { name: 'Momordicae Semen', imageUrl: '../static/images/result/Momordicae Semen.jpg' },
        { name: 'Oroxyli Semen', imageUrl: '../static/images/result/Oroxyli Semen.jpg' },
        { name: 'Sterculiae Lychnophorae Semen', imageUrl: '../static/images/result/Sterculiae Lychnophorae Semen.jpg' },
        { name: 'Pharbitidis Semen', imageUrl: '../static/images/result/Pharbitidis Semen.jpg' },
        { name: 'Euryaales Semen', imageUrl: '../static/images/result/Euryaales Semen.jpg' },
        { name: 'Celosia Semen', imageUrl: '../static/images/result/Celosia Semen.jpg' },
        { name: 'Abutili Semen', imageUrl: '../static/images/result/Abutili Semen.jpg' },
        { name: 'Myristicae Semen', imageUrl: '../static/images/result/Myristicae Semen.jpg' },
        { name: 'Astragali Complanati Semen', imageUrl: '../static/images/result/Astragali Complanati Semen.jpg' },
        { name: 'Ziziphi Spinosae Semen', imageUrl: '../static/images/result/Ziziphi Spinosae Semen.jpg' },
        { name: 'Aesculi Semen', imageUrl: '../static/images/result/Aesculi Semen.jpg' },
        { name: 'Persicae Semen', imageUrl: '../static/images/result/Persicae Semen.jpg' },
        { name: 'Melo Semen', imageUrl: '../static/images/result/Melo Semen.jpg' },
        { name: 'Descurainiae Semen', imageUrl: '../static/images/result/Descurainiae Semen.jpg' },
        { name: 'Vaccariae Semen', imageUrl: '../static/images/result/Vaccariae Semen.jpg' },
        { name: 'Lini Semen', imageUrl: '../static/images/result/Lini Semen.jpg' },
        { name: 'Coicis Semen', imageUrl: '../static/images/result/Coicis Semen.jpg' },
        { name: 'Pruni Semen', imageUrl: '../static/images/result/Pruni Semen.jpg' }
    ]
};
// 图片map
const identifyImageMap = {
    'Lablab Semen Album': '../static/images/result/Lablab Semen Album.jpg',
    'Ginkgo Semen': '../static/images/result/Ginkgo Semen.jpg',
    'Platycladi Semen': '../static/images/result/Platycladi Semen.jpg',
    'Ricini Semen': '../static/images/result/Ricini Semen.jpg',
    'Arecae Semen': '../static/images/result/Arecae Semen.JPG',
    'Alpiniae Katsumadai Semen': '../static/images/result/Alpiniae Katsumadai Semen.jpg',
    'Trichosanthis Semen Tostum': '../static/images/result/Trichosanthis Semen Tostum.jpg',
    'Plantaginis Semen': '../static/images/result/Plantaginis Semen.jpg',
    'Vignaae Semen': '../static/images/result/Vignaae Semen.jpg',
    'Sojae Semen Germinatum': '../static/images/result/Sojae Semen Germinatum.jpg',
    'Sojae Semen Praeparatum': '../static/images/result/Sojae Semen Praeparatum.jpg',
    'Canavaliae Semen': '../static/images/result/Canavaliae Semen.jpg',
    'Torreyiae Semen': '../static/images/result/Torreyiae Semen.jpg',
    'Trichosanthis Semen': '../static/images/result/Trichosanthis Semen.jpg',
    'Juglandis Semen': '../static/images/result/Juglandis Semen.jpg',
    'Sojae Semen Nigrum': '../static/images/result/Sojae Semen Nigrum.jpg',
    'Sesami Semen Nigrum': '../static/images/result/Sesami Semen Nigrum.jpg',
    'Nigellae Semen': '../static/images/result/Nigellae Semen.jpg',
    'Trigonellae Semen': '../static/images/result/Trigonellae Semen.jpg',
    'Impatientis Semen': '../static/images/result/Impatientis Semen.jpg',
    'Arecae Semen Tostum': '../static/images/result/Arecae Semen Tostum.jpg',
    'Sinapis Semen': '../static/images/result/Sinapis Semen.jpg',
    'Allii Tuberosii Semen': '../static/images/result/Allii Tuberosii Semen.jpg',
    'Citri Reticulatae Semen': '../static/images/result/Citri Reticulatae Semen.jpg',
    'Cassiae Semen': '../static/images/result/Cassiae Semen.jpg',
    'Entadae Semen': '../static/images/result/Entadae Semen.jpg',
    'Armeniaceae Semen Amarum': '../static/images/result/Armeniaceae Semen Amarum.jpg',
    'Raphani Semen': '../static/images/result/Raphani Semen.jpg',
    'Litchi Semen': '../static/images/result/Litchi Semen.jpg',
    'Nelumbinis Semen': '../static/images/result/Nelumbinis Semen.jpg',
    'Nelumbinis Plumula': '../static/images/result/Nelumbinis Plumula.jpg',
    'Longan Arillus': '../static/images/result/Longan Arillus.jpg',
    'Momordicae Semen': '../static/images/result/Momordicae Semen.jpg',
    'Oroxyli Semen': '../static/images/result/Oroxyli Semen.jpg',
    'Sterculiae Lychnophorae Semen': '../static/images/result/Sterculiae Lychnophorae Semen.jpg',
    'Pharbitidis Semen': '../static/images/result/Pharbitidis Semen.jpg',
    'Euryaales Semen': '../static/images/result/Euryaales Semen.jpg',
    'Celosia Semen': '../static/images/result/Celosia Semen.jpg',
    'Abutili Semen': '../static/images/result/Abutili Semen.jpg',
    'Myristicae Semen': '../static/images/result/Myristicae Semen.jpg',
    'Astragali Complanati Semen': '../static/images/result/Astragali Complanati Semen.jpg',
    'Ziziphi Spinosae Semen': '../static/images/result/Ziziphi Spinosae Semen.jpg',
    'Aesculi Semen': '../static/images/result/Aesculi Semen.jpg',
    'Persicae Semen': '../static/images/result/Persicae Semen.jpg',
    'Melo Semen': '../static/images/result/Melo Semen.jpg',
    'Descurainiae Semen': '../static/images/result/Descurainiae Semen.jpg',
    'Vaccariae Semen': '../static/images/result/Vaccariae Semen.jpg',
    'Lini Semen': '../static/images/result/Lini Semen.jpg',
    'Coicis Semen': '../static/images/result/Coicis Semen.jpg',
    'Pruni Semen': '../static/images/result/Pruni Semen.jpg'
};
// 模拟药材库数据
const mockHerbsData = [
    {
        id: 1,
        name: 'Lablab Semen Album',
        commonName: 'White Lablab Seed',
        category: 'Seed',
        mainImage: '../static/images/herbs/Lablab Semen Album-main.jpg',
        detailImage: '../static/images/herbs/Lablab Semen Album-detail.jpg'
    },
    {
        id: 2,
        name: 'Ginkgo Semen',
        commonName: 'Ginkgo Seed',
        category: 'Seed',
        mainImage: '../static/images/herbs/Ginkgo Semen-main.jpg',
        detailImage: '../static/images/herbs/Ginkgo Semen-detail.jpg'
    },
    {
        id: 3,
        name: 'Platycladi Semen',
        commonName: 'Platycladus Seed',
        category: 'Seed',
        mainImage: '../static/images/herbs/Platycladi Semen-main.jpg',
        detailImage: '../static/images/herbs/Platycladi Semen-detail.jpg'
    },
    {
        id: 4,
        name: 'Ricini Semen',
        commonName: 'Castor Bean',
        category: 'Seed',
        mainImage: '../static/images/herbs/Ricini Semen-main.jpg',
        detailImage: '../static/images/herbs/Ricini Semen-detail.jpg'
    },
    {
        id: 5,
        name: 'Arecae Semen',
        commonName: 'Areca Seed',
        category: 'Seed',
        mainImage: '../static/images/herbs/Arecae Semen-main.jpg',
        detailImage: '../static/images/herbs/Arecae Semen-detail.jpg'
    },
    {
        id: 6,
        name: 'Alpiniae Katsumadai Semen',
        commonName: 'Alpinia Katsumadai Seed',
        category: 'Seed',
        mainImage: '../static/images/herbs/Alpiniae Katsumadai Semen-main.jpg',
        detailImage: '../static/images/herbs/Alpiniae Katsumadai Semen-detail.jpg'
    },
    {
        id: 7,
        name: 'Trichosanthis Semen Tostum',
        commonName: 'Fried Trichosanthis Seed',
        category: 'Seed Processing',
        mainImage: '../static/images/herbs/Trichosanthis Semen Tostum-main.jpg',
        detailImage: '../static/images/herbs/Trichosanthis Semen Tostum-detail.jpg'
    },
    {
        id: 8,
        name: 'Plantaginis Semen',
        commonName: 'Plantain Seed',
        category: 'Seed',
        mainImage: '../static/images/herbs/Plantaginis Semen-main.jpg',
        detailImage: '../static/images/herbs/Plantaginis Semen-detail.jpg'
    },
    {
        id: 9,
        name: 'Vignaae Semen',
        commonName: 'Vigna Seed',
        category: 'Seed',
        mainImage: '../static/images/herbs/Vignaae Semen-main.jpg',
        detailImage: '../static/images/herbs/Vignaae Semen-detail.jpg'
    },
    {
        id: 10,
        name: 'Sojae Semen Germinatum',
        commonName: 'Germinated Soybean Seed',
        category: 'Seed Germination',
        mainImage: '../static/images/herbs/Sojae Semen Germinatum-main.jpg',
        detailImage: '../static/images/herbs/Sojae Semen Germinatum-detail.jpg'
    },
    {
        id: 11,
        name: 'Sojae Semen Praeparatum',
        commonName: 'Processed Soybean Seed',
        category: 'Seed Processing',
        mainImage: '../static/images/herbs/Sojae Semen Praeparatum-main.jpg',
        detailImage: '../static/images/herbs/Sojae Semen Praeparatum-detail.jpg'
    },
    {
        id: 12,
        name: 'Canavaliae Semen',
        commonName: 'Canavalia Seed',
        category: 'Seed',
        mainImage: '../static/images/herbs/Canavaliae Semen-main.jpg',
        detailImage: '../static/images/herbs/Canavaliae Semen-detail.jpg'
    },
    {
        id: 13,
        name: 'Torreyiae Semen',
        commonName: 'Torreyia Seed',
        category: 'Seed',
        mainImage: '../static/images/herbs/Torreyiae Semen-main.jpg',
        detailImage: '../static/images/herbs/Torreyiae Semen-detail.jpg'
    },
    {
        id: 14,
        name: 'Trichosanthis Semen',
        commonName: 'Trichosanthis Seed',
        category: 'Seed',
        mainImage: '../static/images/herbs/Trichosanthis Semen-main.jpg',
        detailImage: '../static/images/herbs/Trichosanthis Semen-detail.jpg'
    },
    {
        id: 15,
        name: 'Juglandis Semen',
        commonName: 'Walnut Seed',
        category: 'Seed',
        mainImage: '../static/images/herbs/Juglandis Semen-main.jpg',
        detailImage: '../static/images/herbs/Juglandis Semen-detail.jpg'
    },
    {
        id: 16,
        name: 'Sojae Semen Nigrum',
        commonName: 'Black Soybean Seed',
        category: 'Seed',
        mainImage: '../static/images/herbs/Sojae Semen Nigrum-main.jpg',
        detailImage: '../static/images/herbs/Sojae Semen Nigrum-detail.jpg'
    },
    {
        id: 17,
        name: 'Sesami Semen Nigrum',
        commonName: 'Black Sesame Seed',
        category: 'Seed',
        mainImage: '../static/images/herbs/Sesami Semen Nigrum-main.jpg',
        detailImage: '../static/images/herbs/Sesami Semen Nigrum-detail.jpg'
    },
    {
        id: 18,
        name: 'Nigellae Semen',
        commonName: 'Black Cumin Seed',
        category: 'Seed',
        mainImage: '../static/images/herbs/Nigellae Semen-main.jpg',
        detailImage: '../static/images/herbs/Nigellae Semen-detail.jpg'
    },
    {
        id: 19,
        name: 'Trigonellae Semen',
        commonName: 'Fenugreek Seed',
        category: 'Seed',
        mainImage: '../static/images/herbs/Trigonellae Semen-main.jpg',
        detailImage: '../static/images/herbs/Trigonellae Semen-detail.jpg'
    },
    {
        id: 20,
        name: 'Impatientis Semen',
        commonName: 'Balsam Seed',
        category: 'Seed',
        mainImage: '../static/images/herbs/Impatientis Semen-main.jpg',
        detailImage: '../static/images/herbs/Impatientis Semen-detail.jpg'
    },
    {
        id: 21,
        name: 'Arecae Semen Tostum',
        commonName: 'Fried Areca Seed',
        category: 'Seed Processing',
        mainImage: '../static/images/herbs/Arecae Semen Tostum-main.jpg',
        detailImage: '../static/images/herbs/Arecae Semen Tostum-detail.jpg'
    },
    {
        id: 22,
        name: 'Sinapis Semen',
        commonName: 'Mustard Seed',
        category: 'Seed',
        mainImage: '../static/images/herbs/Sinapis Semen-main.jpg',
        detailImage: '../static/images/herbs/Sinapis Semen-detail.jpg'
    },
    {
        id: 23,
        name: 'Allii Tuberosii Semen',
        commonName: 'Garlic Chive Seed',
        category: 'Seed',
        mainImage: '../static/images/herbs/Allii Tuberosii Semen-main.jpg',
        detailImage: '../static/images/herbs/Allii Tuberosii Semen-detail.jpg'
    },
    {
        id: 24,
        name: 'Citri Reticulatae Semen',
        commonName: 'Mandarin Orange Seed',
        category: 'Seed',
        mainImage: '../static/images/herbs/Citri Reticulatae Semen-main.jpg',
        detailImage: '../static/images/herbs/Citri Reticulatae Semen-detail.jpg'
    },
    {
        id: 25,
        name: 'Cassiae Semen',
        commonName: 'Cassia Seed',
        category: 'Seed',
        mainImage: '../static/images/herbs/Cassiae Semen-main.jpg',
        detailImage: '../static/images/herbs/Cassiae Semen-detail.jpg'
    },
    {
        id: 26,
        name: 'Entadae Semen',
        commonName: 'Entada Seed',
        category: 'Seed',
        mainImage: '../static/images/herbs/Entadae Semen-main.jpg',
        detailImage: '../static/images/herbs/Entadae Semen-detail.jpg'
    },
    {
        id: 27,
        name: 'Armeniaceae Semen Amarum',
        commonName: 'Bitter Armeniaceae Seed',
        category: 'Seed',
        mainImage: '../static/images/herbs/Armeniaceae Semen Amarum-main.jpg',
        detailImage: '../static/images/herbs/Armeniaceae Semen Amarum-detail.jpg'
    },
    {
        id: 28,
        name: 'Raphani Semen',
        commonName: 'Radish Seed',
        category: 'Seed',
        mainImage: '../static/images/herbs/Raphani Semen-main.jpg',
        detailImage: '../static/images/herbs/Raphani Semen-detail.jpg'
    },
    {
        id: 29,
        name: 'Litchi Semen',
        commonName: 'Lychee Seed',
        category: 'Seed',
        mainImage: '../static/images/herbs/Litchi Semen-main.jpg',
        detailImage: '../static/images/herbs/Litchi Semen-detail.jpg'
    },
    {
        id: 30,
        name: 'Nelumbinis Semen',
        commonName: 'Lotus Seed',
        category: 'Seed',
        mainImage: '../static/images/herbs/Nelumbinis Semen-main.jpg',
        detailImage: '../static/images/herbs/Nelumbinis Semen-detail.jpg'
    },
    {
        id: 31,
        name: 'Nelumbinis Plumula',
        commonName: 'Lotus Plumule',
        category: 'Seed Plumule',
        mainImage: '../static/images/herbs/Nelumbinis Plumula-main.jpg',
        detailImage: '../static/images/herbs/Nelumbinis Plumula-detail.jpg'
    },
    {
        id: 32,
        name: 'Longan Arillus',
        commonName: 'Longan Aril',
        category: 'Seed Aril',
        mainImage: '../static/images/herbs/Longan Arillus-main.jpg',
        detailImage: '../static/images/herbs/Longan Arillus-detail.jpg'
    },
    {
        id: 33,
        name: 'Momordicae Semen',
        commonName: 'Bitter Melon Seed',
        category: 'Seed',
        mainImage: '../static/images/herbs/Momordicae Semen-main.jpg',
        detailImage: '../static/images/herbs/Momordicae Semen-detail.jpg'
    },
    {
        id: 34,
        name: 'Oroxyli Semen',
        commonName: 'Oroxylum Seed',
        category: 'Seed',
        mainImage: '../static/images/herbs/Oroxyli Semen-main.jpg',
        detailImage: '../static/images/herbs/Oroxyli Semen-detail.jpg'
    },
    {
        id: 35,
        name: 'Sterculiae Lychnophorae Semen',
        commonName: 'Sterculia Seed',
        category: 'Seed',
        mainImage: '../static/images/herbs/Sterculiae Lychnophorae Semen-main.jpg',
        detailImage: '../static/images/herbs/Sterculiae Lychnophorae Semen-detail.jpg'
    },
    {
        id: 36,
        name: 'Pharbitidis Semen',
        commonName: 'Morning Glory Seed',
        category: 'Seed',
        mainImage: '../static/images/herbs/Pharbitidis Semen-main.jpg',
        detailImage: '../static/images/herbs/Pharbitidis Semen-detail.jpg'
    },
    {
        id: 37,
        name: 'Euryaales Semen',
        commonName: 'Euryaales Seed',
        category: 'Seed',
        mainImage: '../static/images/herbs/Euryaales Semen-main.jpg',
        detailImage: '../static/images/herbs/Euryaales Semen-detail.jpg'
    },
    {
        id: 38,
        name: 'Celosia Semen',
        commonName: 'Cockscomb Seed',
        category: 'Seed',
        mainImage: '../static/images/herbs/Celosia Semen-main.jpg',
        detailImage: '../static/images/herbs/Celosia Semen-detail.jpg'
    },
    {
        id: 39,
        name: 'Abutili Semen',
        commonName: 'Velvetleaf Seed',
        category: 'Seed',
        mainImage: '../static/images/herbs/Abutili Semen-main.jpg',
        detailImage: '../static/images/herbs/Abutili Semen-detail.jpg'
    },
    {
        id: 40,
        name: 'Myristicae Semen',
        commonName: 'Nutmeg Seed',
        category: 'Seed',
        mainImage: '../static/images/herbs/Myristicae Semen-main.jpg',
        detailImage: '../static/images/herbs/Myristicae Semen-detail.jpg'
    },
    {
        id: 41,
        name: 'Astragali Complanati Semen',
        commonName: 'Flat Astragalus Seed',
        category: 'Seed',
        mainImage: '../static/images/herbs/Astragali Complanati Semen-main.jpg',
        detailImage: '../static/images/herbs/Astragali Complanati Semen-detail.jpg'
    },
    {
        id: 42,
        name: 'Ziziphi Spinosae Semen',
        commonName: 'Jujube Seed',
        category: 'Seed',
        mainImage: '../static/images/herbs/Ziziphi Spinosae Semen-main.jpg',
        detailImage: '../static/images/herbs/Ziziphi Spinosae Semen-detail.jpg'
    },
    {
        id: 43,
        name: 'Aesculi Semen',
        commonName: 'Aesculus Seed',
        category: 'Seed',
        mainImage: '../static/images/herbs/Aesculi Semen-main.jpg',
        detailImage: '../static/images/herbs/Aesculi Semen-detail.jpg'
    },
    {
        id: 44,
        name: 'Persicae Semen',
        commonName: 'Peach Seed',
        category: 'Seed',
        mainImage: '../static/images/herbs/Persicae Semen-main.jpg',
        detailImage: '../static/images/herbs/Persicae Semen-detail.jpg'
    },
    {
        id: 45,
        name: 'Melo Semen',
        commonName: 'Melon Seed',
        category: 'Seed',
        mainImage: '../static/images/herbs/Melo Semen-main.jpg',
        detailImage: '../static/images/herbs/Melo Semen-detail.jpg'
    },
    {
        id: 46,
        name: 'Descurainiae Semen',
        commonName: 'Descurainia Seed',
        category: 'Seed',
        mainImage: '../static/images/herbs/Descurainiae Semen-main.jpg',
        detailImage: '../static/images/herbs/Descurainiae Semen-detail.jpg'
    },
    {
        id: 47,
        name: 'Vaccariae Semen',
        commonName: 'Vaccaria Seed',
        category: 'Seed',
        mainImage: '../static/images/herbs/Vaccariae Semen-main.jpg',
        detailImage: '../static/images/herbs/Vaccariae Semen-detail.jpg'
    },
    {
        id: 48,
        name: 'Lini Semen',
        commonName: 'Flax Seed',
        category: 'Seed',
        mainImage: '../static/images/herbs/Lini Semen-main.jpg',
        detailImage: '../static/images/herbs/Lini Semen-detail.jpg'
    },
    {
        id: 49,
        name: 'Coicis Semen',
        commonName: 'Job\'s Tears Seed',
        category: 'Seed',
        mainImage: '../static/images/herbs/Coicis Semen-main.jpg',
        detailImage: '../static/images/herbs/Coicis Semen-detail.jpg'
    },
//    {
//        id: 50,
//        name: 'Pruni Semen',
//        commonName: 'Plum Seed',
//        category: 'Seed',
//        mainImage: '../static/images/herbs/Pruni Semen-main.jpg',
//        detailImage: '../static/images/herbs/Pruni Semen-detail.jpg'
//    },
    {
        id: 50,
        name: 'Pruni Semen',
        commonName: 'Plum Seed',
        category: 'Seed',
        mainImage: '../static/images/herbs/Ziziphi Spinosae Semen-main.jpg',
        detailImage: '../static/images/herbs/Ziziphi Spinosae Semen-detail.jpg'
    }
];

// 渲染药材卡片
function renderHerbCards(herbs) {
    const herbsGrid = document.getElementById('herbsGrid');
    herbsGrid.innerHTML = herbs.map(herb => `
        <div class="herb-card" data-detail="${herb.detailImage}">
            <img src="${herb.mainImage}" alt="${herb.name}" class="herb-image">
            <div class="herb-info">
                <div class="herb-name">${herb.name}</div>
                <div class="herb-common-name">${herb.commonName}</div>
                <div class="herb-category">${herb.category}</div>
            </div>
        </div>
    `).join('');

    // 添加点击事件
    document.querySelectorAll('.herb-card').forEach(card => {
        card.addEventListener('click', () => {
            const detailModal = document.querySelector('.detail-modal');
            const detailImg = detailModal.querySelector('img');
            detailImg.src = card.dataset.detail;
            detailModal.style.display = 'block';
        });
    });
}

// 搜索功能
async function searchHerbs() {
    // 只有在HerbLibrary页面显示时才执行搜索
    if (!document.getElementById('herblibrary').classList.contains('active')) {
        return;
    }

    const searchInput = document.getElementById('searchInput');
    const categorySelect = document.getElementById('categorySelect');
    const searchTerm = searchInput.value.toLowerCase();
    const category = categorySelect.value;

    let data = '';
    try {
        // 构建请求参数
        const requestData = {
            searchTerm: searchTerm,
            category: category
        };

        console.log('Sending request:', requestData);
        // 模拟API请求
        // try {
        //     const res = await fetch('http://localhost:8090/api/herbs/search', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(requestData)
        //     });
        //     mockHerbsData = await res.json();
            
        // } catch (error) {
        //     console.log('API request failed, using mock data');
        // }

        // 模拟等待时间
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // 使用mockHerbsData模拟返回数据
        data = mockHerbsData.filter(herb => {
            const matchesSearch = !searchTerm || 
                herb.name.toLowerCase().includes(searchTerm) ||
                herb.commonName.toLowerCase().includes(searchTerm);
            const matchesCategory = !category || 
                herb.category.toLowerCase() === category.toLowerCase();
            return matchesSearch && matchesCategory;
        });

        console.log('Response data:', data);
        renderHerbCards(data);
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to search herbs');
    }
}

function showSection(sectionId) {
    // 隐藏所有section
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });

    // 移除所有导航按钮的active类
    document.querySelectorAll('.nav-button').forEach(button => {
        button.classList.remove('active');
    });

    // 显示选中的section
    document.getElementById(sectionId).classList.add('active');

    // 给对应的导航按钮添加active类
    document.querySelector(`[onclick="showSection('${sectionId}')"]`).classList.add('active');

    // 如果切换到HerbLibrary页面，触发搜索
    if (sectionId === 'herblibrary') {
        searchHerbs();
    }
}

// 添加模态框到body
const modal = document.createElement('div');
modal.className = 'modal';
modal.innerHTML = '<img class="modal-content">';
document.body.appendChild(modal);

// 关闭模态框
modal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// 创建详情模态框
const detailModal = document.createElement('div');
detailModal.className = 'detail-modal';
detailModal.innerHTML = '<img src="" alt="Herb Detail">';
document.body.appendChild(detailModal);

// 关闭详情模态框
detailModal.addEventListener('click', () => {
    detailModal.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', () => {
    showSection('introduction');

    const modelPath = document.getElementById('modelPath');
    const openFile = document.getElementById('openFile');
    const savePath = document.getElementById('savePath');
    const exampleBtn = document.getElementById('exampleBtn');
    const identifyBtn = document.getElementById('identifyBtn');
    const cleanDataBtn = document.getElementById('cleanDataBtn');
    const resultText = document.getElementById('resultText');
    const statusIcon = document.getElementById('statusIcon');
    const identifyText = identifyBtn.querySelector('span');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const categorySelect = document.getElementById('categorySelect');

    // 初始化状态图标
    statusIcon.src = '../static/images/start.png';

    // Example按钮点击事件
    exampleBtn.addEventListener('click', () => {
        const downloadLink = document.createElement('a');
        downloadLink.href = 'example/example.zip';
        downloadLink.download = 'example.zip';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    });

    // Clean Data按钮点击事件
    cleanDataBtn.addEventListener('click', () => {
        modelPath.value = '';
        openFile.value = '';
        savePath.value = '';
        resultText.innerHTML = '';
    });

    // Identify按钮点击事件
    identifyBtn.addEventListener('click', async () => {
        if (!modelPath.value || !openFile.value || !savePath.value) {
            alert('Please fill in all fields');
            return;
        }

        // 切换为运行状态图片
        statusIcon.src = '../static/images/running.png';
        identifyText.textContent = 'Processing...';
        identifyBtn.disabled = true;

        // 构建请求参数
        // const requestData = {
        //     modelPath: modelPath.value,
        //     imagePath: openFile.value,
        //     savePath: savePath.value
        // };
        const requestData = {
            root: modelPath.value,
            data_path: openFile.value,
            result_path: savePath.value
        };
        
        //发送API请求
        const response = await fetch('http://127.0.0.1:5000/process_csv', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        });

        // 模拟API响应
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        // 模拟请求定时2秒
        // await new Promise(resolve => setTimeout(resolve, 1000));
        
        // 这里使用mockResponse模拟返回数据
        // console.log('Response data:', response);
        // const data = mockResponse;
        const data = await response.json();

        // 处理结果
        const resultHtml = data.names.map((item, index) => {
            const isLast = index === data.names.length - 1;
            console.log('data-imag',identifyImageMap[item]);
            return `<span class="result-item" data-image="${identifyImageMap[item]}">'${item}'${isLast ? '' : ', '}</span>`;
        }).join('');

        resultText.innerHTML = resultHtml;

        // 添加点击事件
        document.querySelectorAll('.result-item').forEach(item => {
            item.addEventListener('click', () => {
                const modalImg = modal.querySelector('img');
                modalImg.src = item.dataset.image;
                modal.style.display = 'block';
            });
        });
        try {
            
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred during identification');
        } finally {
            // 恢复原始状态
            statusIcon.src = '../static/images/start.png';
            identifyText.textContent = 'Identify';
            identifyBtn.disabled = false;
        }
    });

    // 搜索按钮点击事件
    searchBtn.addEventListener('click', searchHerbs);

    // 输入框回车事件
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchHerbs();
        }
    });

    // 类别选择改变事件
    categorySelect.addEventListener('change', searchHerbs);

    // 初始加载
    searchHerbs();
});
