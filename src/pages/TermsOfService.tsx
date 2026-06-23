export default function TermsOfService() {
  return (
    <div className="container" style={{ padding: '60px 20px', maxWidth: '800px' }}>
      <div className="glass-panel" style={{ padding: '40px' }}>
        <h2>Kullanıcı Sözleşmesi</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', opacity: 0.9 }}>
          <p>
            <strong>Son Güncelleme:</strong> {new Date().toLocaleDateString('tr-TR')}
          </p>
          <p>
            Bu Kullanıcı Sözleşmesi ("Sözleşme"), Buddy Live ("uygulama", "biz") hizmetlerini kullanım şartlarınızı belirler. Uygulamayı indirerek, kurarak veya kullanarak bu Sözleşme'yi kabul etmiş sayılırsınız.
          </p>

          <h3>1. Hizmet Kullanımı</h3>
          <p>
            Uygulamamızı kullanarak aşağıdaki kurallara uymayı kabul edersiniz:
          </p>
          <ul style={{ marginLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li>Uygulama üzerinden yasadışı, tehditkar, küfürlü, taciz edici, hakaret içeren veya müstehcen içerik paylaşılamaz.</li>
            <li>Başkalarının fikri mülkiyet haklarını (telif hakları, ticari markalar) ihlal eden içerikler yayınlanamaz.</li>
            <li>Diğer kullanıcıları rahatsız etmek, spam yapmak veya dolandırmak yasaktır.</li>
          </ul>

          <h3>2. Kullanıcı Hesapları</h3>
          <p>
            Hesabınızın güvenliğinden ve hesabınız üzerinden yapılan tüm işlemlerden siz sorumlusunuz. Kural ihlali durumunda hesabınız uyarı yapılmaksızın askıya alınabilir veya silinebilir.
          </p>

          <h3>3. Sorumluluk Reddi</h3>
          <p>
            Hizmetlerimiz "olduğu gibi" sunulmaktadır. Uygulamanın kesintisiz, hatasız veya %100 güvenli olacağını garanti etmiyoruz. Kullanıcıların paylaştığı içeriklerden doğrudan içerik sahibi sorumludur.
          </p>

          <h3>4. İletişim</h3>
          <p>
            Hizmet şartlarımızla ilgili her türlü soru ve şikayetiniz için: <strong>destek@buddyliveapp.com</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
