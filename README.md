### ANKARA COĞRAFİ VERİ PORTALI

Ankara'daki hastaneler, AVM'ler, üniversiteler, sinemalar, tiyatrolar, müzeler, operalar ve stadyumları harita üzerinde görüntülemenizi ve seçilen kategoriye göre en yakın diğer kategorilerdeki yerleri bulmanızı sağlayan web uygulaması.


## Özellikler

- Kategori Seçimi ve Görüntüleme: Harita üzerinde hastane, AVM, üniversite, sinema, tiyatro, müze, opera ve stadyumları seçerek görüntüleyin.

- Yakın Yerleri Bulma: Seçilen kategoriye göre en yakın diğer kategorilerdeki yerleri bulun.

- Tüm Yerleri Gösterme: Ankara'daki tüm belirli kategorideki yerleri harita üzerinde gösterin.


## Kullanılan teknolojiler

- Javascript frameworkleri(Nodejs, Reactjs)
  
- MongoDB


## Kullanım

- Kategori Seçimi

- Haritada Görüntüleme

- Yakın Yerleri Bulma


## Kurulum


1. **Depoyu Klonlayın:**
    ```sh
    git clone https://github.com/cngzhn06/AnkaraGuidance.git
    cd AnkaraGuidance
    ```

2. **API ve Client Bağımlılıklarını Yükleyin:**
    ```sh
    cd api
    npm install
    cd ../client
    npm install
    ```

3. **Uygulamayı Çalıştırın:**

    - **API Sunucusunu Başlatın:**
      ```sh
      cd api
      npm start
      ```

    - **Client Uygulamasını Başlatın:**
      ```sh
      cd client
      npm start
      ```

    İki farklı terminal kullanarak API ve Client uygulamalarını aynı anda çalıştırmanız gerekmektedir.

4. **Tarayıcınızda Açın:**
    - Client uygulaması `http://localhost:3000` adresinde çalışır.
    - API sunucusu `http://localhost:8000` adresinde çalışır.


## API Testleri

#### Test Dosyaları: Tüm API testleri GuideAnkaraTest klasöründe bulunmaktadır.

#### API testlerini çalıştırmak için aşağıdaki adımları izleyin:

1. Test bağımlılıklarını yükleyin:
   ```sh
   pip install -r requirements.txt

2. Testleri çalıştırın
   ```sh
   python -m unittest discover -s GuideAnkaraTest



## Görünümler

<img width="1593" alt="image" src="https://github.com/user-attachments/assets/a5468778-089f-4010-9a88-09b17073a9fc">

<img width="1582" alt="image" src="https://github.com/user-attachments/assets/b4505484-cd6d-4c52-be3e-5e140c6ca0a6">

<img width="1593" alt="image" src="https://github.com/user-attachments/assets/90d5ad9c-765e-4892-bc3a-9b131cda3a9b">



## Kaynaklar

- https://seffaf.ankara.bel.tr/

- https://www.maptiler.com/

- https://docs.developer.yelp.com/

- https://www.npmjs.com/



