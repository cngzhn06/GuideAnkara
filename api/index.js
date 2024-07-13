const mongoose = require('mongoose');
const xlsx = require('xlsx');

// Veritabanı bağlantısı
mongoose.connect('mongodb+srv://cngzhnmt2:uNQxtm25FlFbrkKY@ankara.er29jzz.mongodb.net/ankara')
  .then(() => {
    console.log('Veritabanı bağlantısı başarıyla sağlandı.');
    
    // Excel dosyasını oku
    const workbook = xlsx.readFile('./STADYUM.xlsx');
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    // Mongoose modeli ve şema tanımı
    const Veri = mongoose.model('STADYUM', new mongoose.Schema({
      ADI: String,
      ADRES: String,
      X_KOORDINAT: Number,
      Y_KOORDINAT: Number
    }));

    // Excel dosyasındaki verileri al ve veritabanına ekle
    const rows = xlsx.utils.sheet_to_json(worksheet);
    rows.forEach(async (row) => {
      const { ADI, ADRES, KOORDINATLAR } = row;
      if (KOORDINATLAR) {
        const [x, y] = KOORDINATLAR.split(',').map(parseFloat); // KOORDINATLAR'ı virgülden böl ve parseFloat kullanarak sayıya dönüştür
        const newData = {
          ADI: ADI,
          ADRES: ADRES,
          X_KOORDINAT: x,
          Y_KOORDINAT: y
        };

        try {
          // Yeni veriyi kaydet
          const data = await Veri.create(newData);
          console.log('Veri başarıyla kaydedildi:', data);
        } catch (error) {
          console.error('Veri kaydederken hata oluştu:', error);
        }
      } else {
        console.error('KOORDINATLAR sütunu boş.');
      }
    });
  })
  .catch((error) => {
    console.error('Veritabanı bağlantı hatası:', error);
  });




  /*  
const mongoose = require('mongoose');
const xlsx = require('xlsx');

// Veritabanı bağlantısı
mongoose.connect('mongodb+srv://cngzhnmt2:uNQxtm25FlFbrkKY@ankara.er29jzz.mongodb.net/ankara')
  .then(() => {
    console.log('Veritabanı bağlantısı başarıyla sağlandı.');
    
    // Excel dosyasını oku
    const workbook = xlsx.readFile('./STADYUM.xlsx');
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    // Mongoose modeli ve şema tanımı
    const Veri = mongoose.model('STADYUM', new mongoose.Schema({
      ADI: String,
      ADRES: String,
      X_KOORDINAT: Number,
      Y_KOORDINAT: Number
    }));

    // Excel dosyasındaki verileri al ve veritabanına ekle
    const rows = xlsx.utils.sheet_to_json(worksheet);
    rows.forEach(async (row) => {
      const { ADI, ADRES, KOORDINATLAR } = row;
      if (KOORDINATLAR) {
        const [x, y] = KOORDINATLAR.split(',').map(parseFloat); // KOORDINATLAR'ı virgülden böl ve parseFloat kullanarak sayıya dönüştür
        const newData = {
          ADI: ADI,
          ADRES: ADRES,
          X_KOORDINAT: x,
          Y_KOORDINAT: y
        };

        try {
          // Yeni veriyi kaydet
          const data = await Veri.create(newData);
          console.log('Veri başarıyla kaydedildi:', data);
        } catch (error) {
          console.error('Veri kaydederken hata oluştu:', error);
        }
      } else {
        console.error('KOORDINATLAR sütunu boş.');
      }
    });
  })
  .catch((error) => {
    console.error('Veritabanı bağlantı hatası:', error);
  });

  */