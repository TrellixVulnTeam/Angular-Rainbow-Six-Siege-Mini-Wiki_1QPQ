import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {

  pageTitle = {
    title: 'Operatörler',
    info: 'Bu sayfada Rainbow Six Siege oyununun operatörleri hakkında detaylı bilgiler bulunmaktadır.'
  }

  azamiOperator = {
    name: 'AZAMI',
    playSide: 'TARAF: SAVUNAN',
    playStyle: 'ÖZEL KABİLİYETLER VE OYNAYIŞ STİLİ',
    info: 'Kiba Bariyeri, fırlatıldıktan sonra bir yüzeye yapışan, üzerinde değişiklik yapılmış bir kunaidir ve önce yayılan, ardından da katılaşan bir materyal salarak, savunmanızdaki deliklere yama yapmak üzere kurşun geçirmez bir bariyer oluşturur.',
    role: 'ROL:',
    operatorRole: ' Bölge Reddi',
    health: 'SAĞLIK:',
    operatorHealth: ' ✓ ✓ ✓',
    speed: 'HIZ:',
    operatorSpeed: ' ✓ ✓ x',
    primaryWeapon: 'BİRİNCİL SİLAH:',
    operatorPrimaryWeapon: ' 9X19SVN VEYA ACS12',
    secondaryWeapon: 'İKİNCİL SİLAH:',
    operatorSecondaryWeapon: ' D-50 TABANCA',
    device: 'CİHAZ:',
    operatorDevice: ' ALAN ETKİLİ BOMBA VEYA DİKENLİ TEL',
    specialAbility: 'ÖZEL KABİLİYET:',
    operatorSpecialAbility: ' KIBA BARİYERİ',
    operatorDetailButton: 'Resmi Sayfada İncele'

  }

  thornOperator = {
    name: 'THORN',
    playSide: 'TARAF: SAVUNAN',
    playStyle: 'EŞSİZ KABİLİYETLER VE OYUN TARZI',
    info: 'Thorn tarafından fırlatıldıktan sonra Keskin Çiçek Kabuğu bir yüzeye yapışır. Kabuk, yakındaki rakipleri tespit ettikten kısa süre sonra tüm yönlere bir dizi keskin bıçak saçarak ölümcül hasar verir.',
    role: 'ROL:',
    operatorRole: ' Çapa, Kontrol Altına Al',
    health: 'SAĞLIK:',
    operatorHealth: ' ✓ ✓ x',
    speed: 'HIZ:',
    operatorSpeed: ' ✓ ✓ x',
    primaryWeapon: 'BİRİNCİL SİLAH:',
    operatorPrimaryWeapon: ' UZK50Gİ VEYA M870 YİVSİZ TÜFEK',
    secondaryWeapon: 'İKİNCİL SİLAH:',
    operatorSecondaryWeapon: ' 1911 TACOPS TABANCA VEYA C75',
    device: 'CİHAZ:',
    operatorDevice: ' KURULABİLİR KALKAN VEYA DİKENLİ TEL',
    specialAbility: 'ÖZEL KABİLİYET:',
    operatorSpecialAbility: ' KESKİN ÇİÇEK KABUĞU',
    operatorDetailButton: 'Resmi Sayfada İncele'
  }

  osaOperator = {
    name: 'OSA',
    playSide: 'TARAF: SALDIRAN',
    playStyle: 'EŞSİZ KABİLİYETLER VE OYUN TARZI',
    info: 'Saydam ve kurşungeçirmez Talon-8 Kalkan, Osa tarafından taşınabilir ya da zeminlere veya pencere çerçevelerine kurularak bir saldırı stratejisi yapılırken koruyucu bir görüş sağlayabilir.',
    role: 'ROL:',
    operatorRole: ' İstihbarat Toplayan, Bölge Reddi, Karşı Gezi',
    health: 'SAĞLIK:',
    operatorHealth: ' ✓ ✓ x',
    speed: 'HIZ:',
    operatorSpeed: ' ✓ ✓ x',
    primaryWeapon: 'BİRİNCİL SİLAH:',
    operatorPrimaryWeapon: ' 556Xİ VEYA PDW9',
    secondaryWeapon: 'İKİNCİL SİLAH:',
    operatorSecondaryWeapon: ' PMM TABANCA',
    device: 'CİHAZ:',
    operatorDevice: ' DUMAN BOMBASİ VEYA TUZAKLI MAYIN',
    specialAbility: 'ÖZEL KABİLİYET:',
    operatorSpecialAbility: ' TALON-8 ŞEFFAF KALKAN',
    operatorDetailButton: 'Resmi Sayfada İncele'
  }

  thunderbirdOperator = {
    name: 'THUNDERBIRD',
    playSide: 'TARAF: SAVUNAN',
    playStyle: 'ÖZEL KABİLİYETLER VE OYNAYIŞ STİLİ',
    info: "Kóna İstasyonu yerde kullanıldığında , yaralı ve yerdeki Operatörler için bir güvenlik noktası olarak çalışır. Kóna İstasyonu otomatik olarak Operatör'e HP takviyesi verir ya da hayata döndürür.",
    role: 'ROL:',
    operatorRole: ' Kontrol Altına Al, Gezi, Avantaj',
    health: 'SAĞLIK:',
    operatorHealth: ' ✓ x x',
    speed: 'HIZ:',
    operatorSpeed: ' ✓ ✓ ✓',
    primaryWeapon: 'BİRİNCİL SİLAH:',
    operatorPrimaryWeapon: ' SPEAR .308  VEYA SPAS-15',
    secondaryWeapon: 'İKİNCİL SİLAH:',
    operatorSecondaryWeapon: ' BEARİNG 9 VEYA Q-929',
    device: 'CİHAZ:',
    operatorDevice: ' ALAN ETKİLİ BOMBA VEYA NİTRO PATLAYICI',
    specialAbility: 'ÖZEL KABİLİYET:',
    operatorSpecialAbility: ' KÓNA İSTASYONU',
    operatorDetailButton: 'Resmi Sayfada İncele'
  }

  floresOperator = {
    name: 'FLORES',
    playSide: 'TARAF: SALDIRAN',
    playStyle: 'ÖZEL KABİLİYETLER VE OYNAYIŞ STİLİ',
    info: "Belli bir mesafeden kontrol edildiğinde, Flores patlaması için uygun bir yer ararken RCE-Ratero Patlayıcısı ileri doğru gider. Tetiklendiği zaman Ratero en yakın yüzeye tutunur, kurşun geçirmez bir kabuk ile kendisini korur ve patlayarak etrafındaki cihazları ve yumuşak yüzeyleri yok eder.",
    role: 'ROL:',
    operatorRole: ' Hafif Patlatıcı, Devre Dışı, Bölge Reddi, Arka Hat',
    health: 'SAĞLIK:',
    operatorHealth: ' ✓ ✓ x',
    speed: 'HIZ:',
    operatorSpeed: ' ✓ ✓ x',
    primaryWeapon: 'BİRİNCİL SİLAH:',
    operatorPrimaryWeapon: ' AR33 VEYA SR-25',
    secondaryWeapon: 'İKİNCİL SİLAH:',
    operatorSecondaryWeapon: ' GSH-18 TABANCA',
    device: 'CİHAZ:',
    operatorDevice: ' SERSEMLETME BOMBASI VEYA TUZAKLI MAYIN',
    specialAbility: 'ÖZEL KABİLİYET:',
    operatorSpecialAbility: ' RCE-RATERO PATLAYICI',
    operatorDetailButton: 'Resmi Sayfada İncele'
  }

  aruniOperator = {
    name: 'ARUNI',
    playSide: 'TARAF: SAVUNAN',
    playStyle: 'ÖZEL KABİLİYETLER VE OYNAYIŞ STİLİ',
    info: "Geçit yerine yerleştirildikten sonra, içinden geçen herkesi tespit edebilecek kapasitede bir lazer yelpazesi yansıtır. Bir işgalci tespit edildiğinde lazerin enerji çıkışı artar ve ikinci - ve üçüncü - derece yanıklara neden olur. Enerji tüketimini sınırlandırırken hasarı en yükseğe getiren bir alet.",
    role: 'ROL:',
    operatorRole: ' Kontrol Altına Al, İstihbarat Toplayan, Çapa',
    health: 'SAĞLIK:',
    operatorHealth: ' ✓ ✓ x',
    speed: 'HIZ:',
    operatorSpeed: ' ✓ ✓ x',
    primaryWeapon: 'BİRİNCİL SİLAH:',
    operatorPrimaryWeapon: ' P10 RONI VEYA MK 14 EBR',
    secondaryWeapon: 'İKİNCİL SİLAH:',
    operatorSecondaryWeapon: ' PRB92 TABANCA',
    device: 'CİHAZ:',
    operatorDevice: ' KURŞUN GEÇİRMEZ KAMERA VEYA DİKENLİ TEL',
    specialAbility: 'ÖZEL KABİLİYET:',
    operatorSpecialAbility: ' SURYA GEÇİDİ',
    operatorDetailButton: 'Resmi Sayfada İncele'
  }

  zeroOperator = {
    name: 'ZERO',
    playSide: 'TARAF: SALDIRAN',
    playStyle: 'ÖZEL KABİLİYETLER VE OYNAYIŞ STİLİ',
    info: "İstihbarat, iyi bir saldırı stratejisi için kritik bir önem taşır ve Zero bunun gayet farkında. Argus Fırlatıcısı, kırılabilir ve güçlendirilmiş yüzeylerden geçerek iki tarafı da gözlemleyebilen çok özel kameralarla donatıldı. Kameralar iki açıyı da izleyebilir ve etkili bir şekilde casusluk yapmayı sağlar.",
    role: 'ROL:',
    operatorRole: ' İstihbarat Reddi, İstihbarat Toplayan',
    health: 'SAĞLIK:',
    operatorHealth: ' ✓ ✓ x',
    speed: 'HIZ:',
    operatorSpeed: ' ✓ ✓ x',
    primaryWeapon: 'BİRİNCİL SİLAH:',
    operatorPrimaryWeapon: ' SC3000K VEYA MP7',
    secondaryWeapon: 'İKİNCİL SİLAH:',
    operatorSecondaryWeapon: ' 5.7 USG TABANCA VEYA GONNE-6',
    device: 'CİHAZ:',
    operatorDevice: ' SERT PATLATICI BOMBASI VEYA TUZAKLI MAYIN',
    specialAbility: 'ÖZEL KABİLİYET:',
    operatorSpecialAbility: ' ARGUS FIRLATICISI',
    operatorDetailButton: 'Resmi Sayfada İncele'
  }

  aceOperator = {
    name: 'ACE',
    playSide: 'TARAF: SALDIRAN',
    playStyle: 'ÖZEL KABİLİYETLER VE OYNAYIŞ STİLİ',
    info: "S.E.L.M.A. Sulu Patlatıcısı ile su artık konunun özü olacak. Kırılabilir ve güçlendirilmiş yüzeyleri delip geçmek için hidrolik basınçtan faydalanır. Ace neyi patlatmaya çalışıyorsa, silindir onun üzerine fırlatılır ve sonrasında tamamen kurulmak için açılır.",
    role: 'ROL:',
    operatorRole: ' Cephe Hattı, Sert Patlatıcı',
    health: 'SAĞLIK:',
    operatorHealth: ' ✓ ✓ x',
    speed: 'HIZ:',
    operatorSpeed: ' ✓ ✓ x',
    primaryWeapon: 'BİRİNCİL SİLAH:',
    operatorPrimaryWeapon: ' AK-12 PİYADE TÜFEĞİ VEYA M1014 YİVSİZ TÜFEK',
    secondaryWeapon: 'İKİNCİL SİLAH:',
    operatorSecondaryWeapon: ' P9 TABANCA',
    device: 'CİHAZ:',
    operatorDevice: ' UZAKTAN PATLAYİCİ VEYA TUZAKLI MAYIN',
    specialAbility: 'ÖZEL KABİLİYET:',
    operatorSpecialAbility: ' S.E.L.M.A. SULU PATLATICI',
    operatorDetailButton: "Resmi Sayfada İncele"
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
