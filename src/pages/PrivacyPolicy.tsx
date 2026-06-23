export default function PrivacyPolicy() {
  return (
    <div className="container" style={{ padding: '60px 20px', maxWidth: '800px' }}>
      <div className="glass-panel" style={{ padding: '40px' }}>
        <h2>Gizlilik Politikası</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', opacity: 0.9 }}>
          <p>
            <strong>Son Güncelleme:</strong> {new Date().toLocaleDateString('tr-TR')}
          </p>
          <p>
            Buddy Live ("biz", "bizim", "uygulama") olarak gizliliğinize büyük önem veriyoruz. Bu Gizlilik Politikası, uygulamamızı kullandığınızda bilgilerinizi nasıl topladığımızı, kullandığımızı ve koruduğumuzu açıklamaktadır.
          </p>

          <h3>1. Toplanan Bilgiler</h3>
          <p>
            Uygulamamızın özelliklerini sunabilmek için aşağıdaki bilgileri toplayabiliriz:
          </p>
          <ul style={{ marginLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Kamera ve Mikrofon İzni:</strong> Canlı yayın yapabilmeniz ve görüntülü/sesli sohbetlere katılabilmeniz için gereklidir.</li>
            <li><strong>Depolama İzni:</strong> Profil fotoğrafı yükleyebilmeniz ve medya dosyalarınızı paylaşabilmeniz için gereklidir.</li>
            <li><strong>Cihaz Bilgileri:</strong> Uygulamanın performansını iyileştirmek ve hataları tespit etmek amacıyla cihaz modeli, işletim sistemi versiyonu gibi anonim teknik veriler toplanabilir.</li>
          </ul>

          <h3>2. Bilgilerin Kullanımı</h3>
          <p>
            Toplanan bilgiler sadece uygulamanın temel işlevlerini (canlı yayın, mesajlaşma, profil oluşturma) sağlamak ve güvenli bir ortam oluşturmak amacıyla kullanılır. Bilgileriniz kesinlikle üçüncü şahıslara reklam amacıyla satılmaz.
          </p>

          <h3>3. Veri Güvenliği</h3>
          <p>
            Kişisel verilerinizin yetkisiz erişime karşı korunması için endüstri standardı güvenlik önlemleri almaktayız. Canlı yayınlar ve mesajlaşmalar şifreli olarak iletilir.
          </p>

          <h3>4. İletişim</h3>
          <p>
            Bu Gizlilik Politikası hakkında sorularınız varsa, lütfen bizimle iletişime geçin: <strong>destek@buddyliveapp.com</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
