# SEO Optimizasyon Notları - Mentora Danışmanlık

Bu belge, Mentora web sitesine uygulanan SEO optimizasyonlarını ve ek yapılması gerekenleri içerir.

## ✅ Uygulanan Optimizasyonlar

### 1. **robots.txt Dosyası**
- ✓ Kök dizine `robots.txt` eklendi
- Arama motorlarına tarama izinleri verildi
- Sitemap konumu belirtildi

### 2. **Canonical URL Etiketleri**
- ✓ `index.html` - https://www.mentoradanismanlik.com/
- ✓ `basvuru.html` - https://www.mentoradanismanlik.com/basvuru.html
- ✓ `hikayemiz.html` - https://www.mentoradanismanlik.com/hikayemiz.html

### 3. **FAQPage Schema (index.html)**
- ✓ Sık sorulan sorular için yapılandırılmış veri eklendi
- Google'da zengin snippet olarak görünecek

### 4. **404 Hata Sayfası**
- ✓ Profesyonel 404 sayfası oluşturuldu
- Kullanıcı dostu tasarım
- Ana sayfaya ve başvuru sayfasına yönlendirme butonları

### 5. **Sitemap Güncelleme**
- ✓ Tarihler 2024-10-14 olarak güncellendi
- ✓ Tüm önemli sayfalar sitemap'te mevcut

### 6. **Lazy Loading**
- ✓ Tüm görsellere `loading="lazy"` eklendi
- ✓ Hero görselleri hariç (above-the-fold)
- Width ve height attribute'ları eklendi (CLS önleme)

### 7. **Meta Description Optimizasyonu**
- ✓ index.html: 150-160 karakter, anahtar kelimeler içeriyor
- ✓ basvuru.html: Call-to-action içeren açıklama
- ✓ hikayemiz.html: Sayılarla desteklenmiş açıklama

### 8. **Breadcrumb Navigation**
- ✓ Tüm sayfalara breadcrumb eklendi
- ✓ Schema.org BreadcrumbList structured data ile desteklendi
- ✓ Google'da gösterilecek

### 9. **Genişletilmiş Schema.org**
- ✓ Service Schema (hizmet bilgileri)
- ✓ WebPage Schema
- ✓ AggregateRating (4.9/5 - 30 değerlendirme)
- ✓ EducationalOrganization
- ✓ FAQPage

### 10. **Alt Text İyileştirmeleri**
- ✓ Daha açıklayıcı ve anahtar kelime içeren alt metinler
- ✓ Marka adı (Mentora) eklendi
- ✓ Accessibility ve SEO için optimize edildi

---

## 📋 Yapılması Gerekenler (Manuel)

### 1. **OG Image ve Logo Dosyaları**
Aşağıdaki görselleri oluşturup yüklemeniz gerekiyor:

#### `og-image.jpg` (1200x630 px)
- Sosyal medya paylaşımlarında görünecek
- Mentora logosu + "Yurt Dışı Eğitim Danışmanlığı" metni
- Kaliteli ve profesyonel görsel
- Önerilen araçlar: Canva, Figma, Adobe Photoshop

#### `logo.png` (512x512 px, şeffaf arka plan)
- Schema.org için kullanılıyor
- PNG formatında, şeffaf arka plan
- Yüksek çözünürlük

**Yükleme Konumu:** Kök dizin (index.html ile aynı seviye)

### 2. **Google Tag Manager (GTM) Entegrasyonu**
```html
<!-- Şu anda GTM-XXXXXXX placeholder var -->
<!-- Gerçek GTM ID'niz ile değiştirin -->
```

**Adımlar:**
1. https://tagmanager.google.com adresine gidin
2. Yeni bir hesap oluşturun (ücretsiz)
3. Container ID'yi alın (GTM-XXXXXX formatında)
4. Üç HTML dosyasında da `GTM-XXXXXXX` yerine gerçek ID'yi yazın
   - index.html (satır 93)
   - basvuru.html (satır 37)
   - hikayemiz.html (satır 37)

### 3. **Google Search Console Kurulumu**
1. https://search.google.com/search-console adresine gidin
2. Sitenizi ekleyin (Domain veya URL prefix)
3. Ownership doğrulaması yapın
4. `sitemap.xml` dosyasını gönderin

### 4. **Sosyal Medya Linkleri**
Footer'daki sosyal medya linklerini kendi hesaplarınızla değiştirin:
- Instagram: `<a href="#"` → `<a href="https://instagram.com/sizin-hesap"`
- LinkedIn: `<a href="#"` → `<a href="https://linkedin.com/company/sizin-hesap"`
- Twitter: `<a href="#"` → `<a href="https://twitter.com/sizin-hesap"`

**Dosyalar:** index.html, basvuru.html, hikayemiz.html (footer bölümü)

---

## 🚀 İsteğe Bağlı İyileştirmeler

### 1. **Image Optimization**
Görselleri sıkıştırın:
- TinyPNG.com
- ImageOptim
- WebP formatına dönüştürün (modern tarayıcılar için)

### 2. **Google Analytics 4 (GA4)**
GTM üzerinden GA4 entegrasyonu yapın:
- Kullanıcı davranışları
- Sayfa görüntüleme
- Conversion tracking

### 3. **Local Business Schema** (İsteğe bağlı)
Fiziksel ofis varsa:
```json
{
  "@type": "LocalBusiness",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Tam adresiniz",
    "addressLocality": "İstanbul",
    "postalCode": "34000",
    "addressCountry": "TR"
  }
}
```

### 4. **Internal Linking**
Sayfa içi linkler ekleyin:
- "Hizmetlerimiz" butonuna başvuru sayfasına link
- Blog yazıları arası çapraz linkler
- Hizmet sayfaları arası bağlantılar

---

## 📊 SEO Kontrol Listesi

### Test Araçları
- ✓ Google PageSpeed Insights: https://pagespeed.web.dev/
- ✓ Google Rich Results Test: https://search.google.com/test/rich-results
- ✓ Schema.org Validator: https://validator.schema.org/
- ✓ Mobile-Friendly Test: https://search.google.com/test/mobile-friendly

### Kontrol Edilmesi Gerekenler
- [ ] OG image yüklendi mi?
- [ ] Logo.png yüklendi mi?
- [ ] GTM ID güncellendi mi?
- [ ] Sosyal medya linkleri eklendi mi?
- [ ] Google Search Console'da site doğrulandı mı?
- [ ] Sitemap gönderildi mi?

---

## 🎯 Beklenen Sonuçlar

### Google Arama Sonuçları
1. **Zengin Snippet'ler:**
   - ⭐⭐⭐⭐⭐ 4.9 (30 değerlendirme)
   - FAQ açılır menüleri
   - Breadcrumb navigasyon

2. **Gelişmiş Sıralama:**
   - Anahtar kelimeler için daha iyi pozisyon
   - Mobil aramada öncelik
   - Lokal aramada görünürlük

3. **Sosyal Medya:**
   - WhatsApp, Facebook, Twitter paylaşımlarında profesyonel görünüm
   - OG image sayesinde yüksek tıklama oranı

### Performans Metrikleri
- **Page Speed:** 90+ (mobil), 95+ (desktop)
- **Core Web Vitals:** Yeşil seviyede
- **SEO Score:** 95+

---

## 📞 Destek

SEO konusunda sorularınız varsa:
- Google Search Console Help Center
- Schema.org Documentation
- Web.dev Best Practices

**Son Güncelleme:** 14 Ekim 2024

