import Footer from "../../components/footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className=" px-3 py-3">
        <h1 className="text-3xl">Bursa Hakkında</h1>
        <p className="mt-3">
          Bursa, İstanbul'un tam karşısında, Marmara Denizi kıyısında yer alan
          Türkiye'nin en kalabalık dördüncü ve en eski şehirlerinden biridir.
          Şehir, Osmanlı aşiretleri tarafından ilk Osmanlı emirliği olarak
          kurulmuş ve uzun bir süre imparatorluğun başkenti olmuştur.
          Başlangıçta, şehir şeftali, ipek ve kestane üretiminde ülkenin
          ilkiydi, ancak son zamanlarda Bursa'da giderek daha fazla fabrika ve
          sanayi tesisi açılıyor. Bursa'da harika eski camiler ve müzelerden
          başlayıp şehrin yakınında bulunan dünya standartlarındaki Uludağ kayak
          merkezine kadar pek çok turistik nokta ve ilgi çekici yer
          bulunmaktadır.
        </p>
      </div>
      <div className="flex gap-5 px-3 py-3">
        <div className="w-[1000px]">
          <img
            className="w-full rounded-md"
            src="https://media-cdn.tripadvisor.com/media/photo-s/1c/38/93/68/sariyer-haciosman-da.jpg"
            alt=""
          />
          <p>
            Nilüfer ilçesinde yer almaktadır. Mevki olarak Odunluk Mahallesi’nin
            hemen arkasında bulunmaktadır. Şehir merkezine uzaklığı 12 km ve
            rakımı 275 m'dir. Yılın her dönemi ziyarete açıktır. Piknik alanı
            içerisinde piknik masaları, oturma alanları, barbeküler, çocuk
            parkı, mescid ve wc gibi imkânlar bulunmaktadır. Ziyaretçiler
            piknikten arda kalan zamanlarında piknik alanı içerisinde yer alan
            yürüyüş yolları ve spor alanlarında vakit geçirebilmektedirler.
          </p>
        </div>
        <div className="w-[1000px]">
          <img
            className="w-full rounded-md"
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/3a/7b/63/baba-sultan-parki-5.jpg?w=1200&h=-1&s=1"
            alt=""
          />
          <p>
            Yenişehir Belediyesi ilçenin önemli dinlenme alanlarından olan
            Babasultan Parkının açılışına hazırlanıyor. Bursa Büyükşehir
            Belediyesi Tarihi ve Kültürel Miras Şube Müdürlüğü tarafından
            geçtiğimiz yıllarda yeniden düzenleme çalışmalarına başlanan ve
            26.000 m² tepe üzerine kurulu Babasultan Parkı, şehrin merkezinde
            Yenişehir halkına hizmet vermek için gün sayıyor. Yaz aylarında
            tercih edilen ve içerisinde Postinpuş Camisinin de yer aldığı
            Babasultan Parkı hakkında açıklamalarda bulunan Yenişehir Belediye
            Başkanı Davut AYDIN “Bursa Büyükşehir Belediyesi Tarihi ve Kültürel
            Miras Şube Müdürlüğümüz tarafından yeniden düzenleme çalışmalarına
            başlanan Babasultan Parkımız bu ay sonuna kadar hizmete açılacaktır.
            Yenişehirlilerin en sevilen parkları arasında yer alan, yaz
            aylarında esintisi ve temiz havasıyla, yürümesi kolay estetik
            merdivenleriyle, herkesin çocukluk anılarının bulunduğu eski
            parklarımızdandır. İlçemizin sembollerinden biri Babasultan Parkında
            zeminler değiştirilerek çevre duvarı yenilendi, yürüyüş yolları
            yapıldı, şadırvan başta olmak üzere sosyal donatı alanlarının
            tadilatı gerçekleştirildi. Peyzaj düzenlemesi ve aydınlatmaların da
            tamamlanan parkımız ay sonuna doğru vatandaşlarımızın hizmetine
            sunulacak. Babasultan Parkımızın tarihine ve konumuna yakışır
            şekilde düzenlenerek bakım ve onarımlarının kısa sürede
            tamamlanmasında büyük destekleri olan Bursa Büyükşehir Belediye
            Başkanımız Sayın Alinur AKTAŞ olmak üzere Tarihi ve Kültürel Miras
            Şube Müdürlüğüne ve ilgili personellerine hemşehrilerim adında
            teşekkür ediyorum” dedi.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
