// import node module libraries
import { Col, Row } from "react-bootstrap";

const HeroContent = () => {
  return (
    <Row>
      <Col lg={{ span: 8, offset: 2 }} md={12} sm={12} className="mb-12">
        {/* caption */}
        <h1 className="display-2 fw-bold mb-3">
          Hi there, I&apos;m{" "}
          <span className="text-primary">Abdussamet Karadeniz</span>
        </h1>
        {/* para  */}
        <p className="h2 mb-3 ">
          I&apos;m a software engineer with a passion for building web and
          mobile applications. I&apos;m a full-stack developer and I&apos;m
          always looking to learn new technologies and improve my skills.
        </p>
        <p className="mb-0 h4 text-body lh-lg">
          Merhaba! Benim adım Abdussamet Karadeniz, yazılım geliştirme alanında
          deneyimli bir Full Stack Geliştirici olarak, teknoloji ve inovasyon
          konularına büyük bir tutkuyla yaklaşırım. Profesyonel kariyerime
          Flutter ve Dart kullanarak mobil uygulamalar geliştirmeye yoğunlaşarak
          başladım ve bu alanda birçok başarılı projeye imza attım. Özellikle
          sağlık ve beslenme sektöründe, diyetisyenler ve kullanıcıları için
          özel olarak tasarlanmış, kapsamlı işlevselliklere sahip uygulamalar
          geliştirdim. Bu projeler, gerçek zamanlı kalori takibi, kişisel diyet
          planları ve interaktif sağlık takibi gibi özelliklerle donatılmıştır.
          Yazılım geliştirme sürecinde, veri tabanı tasarımı ve sistem
          entegrasyonları konusunda derinlemesine bilgi sahibiyim. MongoDB ve
          Node.js teknolojilerini kullanarak, verimli ve ölçeklenebilir
          API&apos;ler geliştirme konusunda uzmanım. Ayrıca, yazılım kalitesini
          artırmak için NUnit kullanarak detaylı test süreçleri yürütürüm ve her
          zaman en iyi uygulama standartlarına uygun çalışmalar yaparım.
          Teknoloji dünyasında sürekli değişen trendleri takip etmek ve bu
          trendler doğrultusunda kendimi ve projelerimi güncel tutmak benim için
          büyük önem taşır. Bu nedenle, boş zamanlarımda en yeni gelişmeleri
          araştırır, bulgularımı YouTube kanalımda paylaşırım. Teknoloji ve
          yazılım geliştirme konularında eğitici içerikler üreterek, bu alanda
          kendimi sürekli olarak geliştirmeye ve topluluğa katkıda bulunmaya
          çalışırım. Oyun dünyasında &apos;Ardent Blaze&apos; takma adıyla
          tanınırım. Rekabetçi oyunlar oynamak, bana strateji geliştirme ve
          takım çalışması gibi önemli beceriler kazandırdı. Bu becerileri
          profesyonel yaşamımda da kullanarak, ekip içinde daha etkili bir lider
          olmayı başardım. Her yeni proje, benim için bir öğrenme fırsatı ve
          teknoloji dünyasında olumlu bir iz bırakma şansı olarak değerlidir.
          İnovasyonu, kullanıcı deneyimini ön planda tutarak yaratıcı çözümler
          geliştirmeye ve teknolojinin sınırlarını zorlamaya devam edeceğim.
        </p>
      </Col>
    </Row>
  );
};
export default HeroContent;
