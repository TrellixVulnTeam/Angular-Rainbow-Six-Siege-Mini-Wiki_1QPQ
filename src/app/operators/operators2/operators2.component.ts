import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-operators2',
  templateUrl: './operators2.component.html',
  styleUrls: ['./operators2.component.scss']
})
export class Operators2Component implements OnInit {

  @Input() operators2Component: any;


  pageTitle = {
    title: 'Operatörler',
    info: 'Bu sayfada Rainbow Six Siege oyununun operatörleri hakkında detaylı bilgiler bulunmaktadır.'
  }

  melusiOperator = {
    name: 'MELUSI',
    playSide: 'TARAF: SAVUNAN',
    playStyle: 'ÖZEL KABİLİYETLER VE OYNAYIŞ STİLİ',
    info: "Banshee Ses Dalgası Savunması, aynı Maestro’nun Kem Gözü gibi yüzeylere kurulabilir; ama manuel kontrol gerektirmez. Bir rakip yeterince yakınına geldiği an bir çığlık koparır ve rakibini yavaşlatır. Yok edilebilir; ama kurşun geçirmez olduğu için Saldıranların bazı cihazlar kullanmaları veya çok yakından saldırmaları gerekir.",
    role: 'ROL:',
    operatorRole: ' Kitle Kontrolü, İstihbarat Toplayan, Kontrole Al',
    health: 'SAĞLIK:',
    operatorHealth: ' ✓ x x',
    speed: 'HIZ:',
    operatorSpeed: ' ✓ ✓ ✓',
    primaryWeapon: 'BİRİNCİL SİLAH:',
    operatorPrimaryWeapon: ' MP5 HAFİF MAKİNELİ TÜFEK VEYA SUPER 90 YİVSİZ TÜFEK',
    secondaryWeapon: 'İKİNCİL SİLAH:',
    operatorSecondaryWeapon: ' RG15 TABANCA',
    device: 'CİHAZ:',
    operatorDevice: ' ALAN ETKİLİ BOMBA VEYA NİTRO PATLAYICI',
    specialAbility: 'ÖZEL KABİLİYET:',
    operatorSpecialAbility: ' BANSHEE SES DALGASI',
    operatorDetailButton: "Resmi Sayfada İncele"
  }

  oryxOperator = {
    name: 'ORYX',
    playSide: 'TARAF: SAVUNAN',
    playStyle: 'ÖZGÜN KABİLİYETLERİ VE OYNANIŞ STİLİ',
    info: "Remah Atılımı'nın hızı ona hızlıca etrafı dolanmasını ve kısa mesafeleri inanılmaz bir çabuklukla geçmesini sağlar. Aynı zamanda rakipleri yere düşürür ve yıkılabilir duvarları yıkarak büyük açıklar yaratır. Ancak dikkatli olun, Remah Atılımı yıkım için kullanıldığında can değeri kaybına yol açar. Ek olarak Oryx'in özgün bir kabiliyeti de kırılmış boşluklarla etkileşimi var.",
    role: 'ROL:',
    operatorRole: ' Gezi, Hafif Patlatıcı',
    health: 'SAĞLIK:',
    operatorHealth: ' ✓ ✓ x',
    speed: 'HIZ:',
    operatorSpeed: ' ✓ ✓ x',
    primaryWeapon: 'BİRİNCİL SİLAH:',
    operatorPrimaryWeapon: ' SPAS-12 YİVSİZ TÜFEK VEYA T-5 SMG HAFİF MAKİNELİ TÜFEK',
    secondaryWeapon: 'İKİNCİL SİLAH:',
    operatorSecondaryWeapon: ' BAİLİFF 410 TABANCA VEYA USP40',
    device: 'CİHAZ:',
    operatorDevice: ' DİKENLİ TEL VEYA YAKINLIK ALARMI',
    specialAbility: 'ÖZEL KABİLİYET:',
    operatorSpecialAbility: ' REMAH DASH',
    operatorDetailButton: "Resmi Sayfada İncele"
  }

  ianaOperator = {
    name: 'IANA',
    playSide: 'TARAF: SALDIRAN',
    playStyle: 'ÖZGÜN KABİLİYETLER VE OYNANIŞ STİLİ',
    info: "İkiz Çoğaltıcı, Iana'nın uzaktan kontrol edilebilien holografik bir kopyasıdır. Hareket edebilir ve ses çıkarabilir, ancak ateş edemez, yakın savaşa giremez veya ikincil cihazlarını kullanamaz. Bir zaman limiti vardır, ancak istendiği zaman kapanabilir. İki kullanım arasında her zaman bir soğuma vardır ve eğer yok edilirse, bu süreç daha uzun olur.",
    role: 'ROL:',
    operatorRole: ' İstihbarat Reddi, İstihbarat Toplayan',
    health: 'SAĞLIK:',
    operatorHealth: ' ✓ ✓ x',
    speed: 'HIZ:',
    operatorSpeed: ' ✓ ✓ x',
    primaryWeapon: 'BİRİNCİL SİLAH:',
    operatorPrimaryWeapon: ' ARX200 PİYADE TÜFEĞİ VEYA G36C PİYADE TÜFEĞİ',
    secondaryWeapon: 'İKİNCİL SİLAH:',
    operatorSecondaryWeapon: ' MK1 9MM TABANCA VEYA GONNE-6',
    device: 'CİHAZ:',
    operatorDevice: ' EL BOMBASI VEYA DUMAN BOMBASI',
    specialAbility: 'ÖZEL KABİLİYET:',
    operatorSpecialAbility: ' GEMINI REPLICATOR',
    operatorDetailButton: "Resmi Sayfada İncele"
  }

  wamaiOperator = {
    name: 'WAMAI',
    playSide: 'TARAF: SAVUNAN',
    playStyle: 'BENZERSİZ KABİLİYETLER VE OYNANIŞ TARZI',
    info: "Mag-NET Sistemi fırlatılan, yapışkan bir cihazdır. Yüzeylere yapışır ve durur. İşlevi, rakibinin mühimmatını bulunduğu yere çekmek ve daha sonra o mühimmatı patlatmak için kendini imha etmektir. Bu şekilde, Wamai sadece Saldıranların el bombalarını ve mühimmat cihazlarını işe yaramaz hale getirir ve karşı saldırı için kullanabilir.",
    role: 'ROL:',
    operatorRole: ' Çapa, Kontrol Altına Al',
    health: 'SAĞLIK:',
    operatorHealth: ' ✓ ✓ x',
    speed: 'HIZ:',
    operatorSpeed: ' ✓ ✓ x',
    primaryWeapon: 'BİRİNCİL SİLAH:',
    operatorPrimaryWeapon: ' AUG A2 PİYADE TÜFEĞİ VEYA MP5K HAFİF MAKİNELİ TÜFEK',
    secondaryWeapon: 'İKİNCİL SİLAH:',
    operatorSecondaryWeapon: ' D-40 TABANCA VEYA P12 TABANCA',
    device: 'CİHAZ:',
    operatorDevice: ' YAKINLIK ALARMI VEYA ALAN ETKİLİ BOMBA',
    specialAbility: 'ÖZEL KABİLİYET:',
    operatorSpecialAbility: ' MAG-NET SİSTEMİ',
    operatorDetailButton: "Resmi Sayfada İncele"
  }

  kaliOperator = {
    name: 'KALI',
    playSide: 'TARAF: SALDIRAN',
    playStyle: 'BENZERSİZ KABİLİYETLER VE OYNANIŞ TARZI',
    info: "DH Patlayıcı Mızrak hakkında konuşmak için, Kali’nin CSRX 300’ünden bahsetmemiz gerekiyor. Barikatları ve zeminleri tek seferde delebilen ve kırılabilir duvarlarda büyük delikler yaratabilen tehlikeli bir silahtır. LV, namlunun altında yer alır ve aynı zamanda CSRX 300’ün dürbünü olarak da kullanılabilir. Rolü, belli bir yarıçap içinde hafif bir patlama ile aletlerin yok etmektir.",
    role: 'ROL:',
    operatorRole: ' Arka Hat, Koruma Ateşi, Devre Dışı',
    health: 'SAĞLIK:',
    operatorHealth: ' ✓ ✓ x',
    speed: 'HIZ:',
    operatorSpeed: ' ✓ ✓ x',
    primaryWeapon: 'BİRİNCİL SİLAH:',
    operatorPrimaryWeapon: ' SADECE CSRX 300 NİŞANCI TÜFEĞİ',
    secondaryWeapon: 'İKİNCİL SİLAH:',
    operatorSecondaryWeapon: ' SPSMG9 VEYA C75 AUTO MAKİNELİ',
    device: 'CİHAZ:',
    operatorDevice: ' UZAKTAN PATLAYICI VEYA TUZAKLI MAYIN',
    specialAbility: 'ÖZEL KABİLİYET:',
    operatorSpecialAbility: ' DH PATLAYICI MIZRAK',
    operatorDetailButton: "Resmi Sayfada İncele"
  }

  amaruOperator = {
    name: 'AMARU',
    playSide: 'TARAF: SALDIRAN',
    playStyle: 'BENZERSİZ KABİLİYETLER VE OYNANIŞ TARZI',
    info: "Garra Kancası gerçekten eşsiz bir mekanizma. Bunu kullanarak Amaru kendisini pervazlara ve pencerelere tutturarak çok kısa sürede yukarı çekebilir. Rakipleri artık sadece yukarıdan gelecek saldırılara değil, aynı zamanda aşağıdan gelecek saldırılara karşı da tetikte olacaklar. Garra ile Amaru bir açıklığa yukarıdan değil de aşağıdan ulaşabilen tek operatördür.",
    role: 'ROL:',
    operatorRole: ' Kuşat, Cephe Hattı',
    health: 'SAĞLIK:',
    operatorHealth: ' ✓ ✓ x',
    speed: 'HIZ:',
    operatorSpeed: ' ✓ ✓ x',
    primaryWeapon: 'BİRİNCİL SİLAH:',
    operatorPrimaryWeapon: ' G8A1 HAFİF MAKİNELİ TÜFEK VEYA SUPERNOVA YİVSİZ TÜFEK',
    secondaryWeapon: 'İKİNCİL SİLAH:',
    operatorSecondaryWeapon: ' GONNE-6 VEYA SMG-11 MAKİNELİ',
    device: 'CİHAZ:',
    operatorDevice: ' SERSEMLETME & SERT PATLATICI BOMBA',
    specialAbility: 'ÖZEL KABİLİYET:',
    operatorSpecialAbility: ' GARRA KANCASI',
    operatorDetailButton: "Resmi Sayfada İncele"
  }

  goyoOperator = {
    name: 'GOYO',
    playSide: 'TARAF: SAVUNAN',
    playStyle: 'BENZERSİZ KABİLİYETLER VE OYNANIŞ TARZI',
    info: "Alışılmış Kurulabilir Kalkan da olduğu gibi, Volcán Kalkanı koruma sağlar ve Savunanların geçiş yollarını engellemesine izin verir. Fakat Goyo üzerine eklenmiş yakıcı bombasıyla ortalığı ateşe verir. Yine de, önden bakıldığında hangisi olduğunu belli eden küçük bir işaret taşıyor. Birisi üzerindeki bombayı patlatmak için ateş edene dek, kalkan Saldıranlar için bir engel olmaya devam eder.",
    role: 'ROL:',
    operatorRole: ' Bölge Reddi, Kontrol Altına Al',
    health: 'SAĞLIK:',
    operatorHealth: ' ✓ ✓ x',
    speed: 'HIZ:',
    operatorSpeed: ' ✓ ✓ x',
    primaryWeapon: 'BİRİNCİL SİLAH:',
    operatorPrimaryWeapon: ' VECTOR .45 ACP HAFİF MAKİNELİ TÜFEK VEYA TCSG12 YİVSİZ TÜFEK',
    secondaryWeapon: 'İKİNCİL SİLAH:',
    operatorSecondaryWeapon: ' P229 RC TABANCA',
    device: 'CİHAZ:',
    operatorDevice: ' YAKINLIK ALARMI VEYA NİTRO PATLAYICI',
    specialAbility: 'ÖZEL KABİLİYET:',
    operatorSpecialAbility: ' VOLCÁN KALKANI',
    operatorDetailButton: "Resmi Sayfada İncele"
  }

  nokkOperator = {
    name: 'NØKK',
    playSide: 'TARAF: SALDIRAN',
    playStyle: 'BENZERSİZ KABİLİYETLER VE OYNANIŞ TARZI',
    info: "HEL bir eldiven eklentisidir ve etkinleştirildiğinde Nøkk'un çıkardığı çevre gürültüsünü azaltıp rakibin izleme cihazlarındaki görüntüsünü gizler. Dolayısıyla Dronlar, Kurşun Geçirmez Kameralar, Kem Gözler ve diğer cihazlar, Nøkk haritada gizlice gezerken varlığını kaydedemez. Nøkk rakip operatörleri gizlice takip ederken ayak sesleri duyulmaz. Ama Nøkk'un adımları hızlandıkça çıkardığı seslerde belirginleşir.",
    role: 'ROL:',
    operatorRole: ' Kuşat, İstihbarat Reddi',
    health: 'SAĞLIK:',
    operatorHealth: ' ✓ ✓ x',
    speed: 'HIZ:',
    operatorSpeed: ' ✓ ✓ x',
    primaryWeapon: 'BİRİNCİL SİLAH:',
    operatorPrimaryWeapon: ' FMG-9 HAFİF MAKİNELİ TÜFEK VEYA SIX12 SD YİVSİZ TÜFEK',
    secondaryWeapon: 'İKİNCİL SİLAH:',
    operatorSecondaryWeapon: ' 5.7 USG VEYA D-50 TABANCA',
    device: 'CİHAZ:',
    operatorDevice: ' SERT PATLATICI VEYA EL BOMBASI',
    specialAbility: 'ÖZEL KABİLİYET:',
    operatorSpecialAbility: ' HEL VARLIK AZALTMA',
    operatorDetailButton: "Resmi Sayfada İncele"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
