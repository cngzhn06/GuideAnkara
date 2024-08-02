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

![AnkaraGuidance](https://github.com/cngzhn06/AnkaraGuidance/assets/95685025/eb27da5e-309d-409a-aab2-4dae63576613)

![AnkaraGuidance2](https://github.com/cngzhn06/AnkaraGuidance/assets/95685025/f2b0399a-13c6-4984-bdd1-5a4c9fc6ce81)

![AnkaraGuidance3](https://github.com/cngzhn06/AnkaraGuidance/assets/95685025/1cf6c7ba-a430-4226-974a-3abb851b8aa1)



## Kaynaklar

- https://seffaf.ankara.bel.tr/

- https://www.maptiler.com/

- https://docs.developer.yelp.com/

- https://www.npmjs.com/



