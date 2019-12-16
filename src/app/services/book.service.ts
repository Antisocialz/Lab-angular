import { Injectable } from '@angular/core';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Array<Book> = [
  new Book('La vie des chats', 'Chata', 55, "Le Chat domestique (Felis silvestris catus) est la sous-espèce issue de la domestication du Chat sauvage, mammifère carnivore de la famille des Félidés. "),
  new Book('La vie des koalas', 'koalta',42, "Le koala (Phascolarctos cinereus), appelé aussi Paresseux australien, est une espèce de marsupial arboricole herbivore endémique d'Australie et le seul représentant encore vivant de la famille des Phascolarctidés. On le trouve dans les régions côtières de l'Australie méridionale et orientale, d'Adélaïde à la partie sud de la péninsule du cap York. Les populations s'étendent aussi sur des distances considérables dans l'arrière-pays australien (outback), là où l'humidité est suffisante pour le maintien de forêts. Les koalas d'Australie-Méridionale furent exterminés au début du XXe siècle, mais cet État fédéré a depuis été repeuplé grâce à des transferts du Victoria. Cet animal n'est présent ni en Tasmanie ni en Australie-Occidentale. "),
  new Book('La vie des oiseaux', 'Oiseta',12, "Les oiseaux sont des animaux vertébrés bipèdes ailés. Ils constituent la classe des Aves, un clade inclus dans celui des dinosaures théropodes. S'il existe en 2016 plus de 10 400 espèces d'oiseaux recensées1 (dont plus de la moitié sont des passereaux)a, très différentes tant par leur écologie que par leurs comportements, chacune d'elles présente un ensemble commun de caractéristiques évidentes permettant de les regrouper, en particulier des écailles cornées et des plumes, une mâchoire sans dents enveloppée d'un étui corné formant un bec, une queue osseuse courte, des membres antérieurs transformés en ailes (fonctionnelles ou non, cette caractéristique étant particulièrement rare chez les vertébrésb) et des membres postérieurs qui servent seuls normalement à la progression sur le sol ou dans l'eau. En outre, ils sont tous ovipares, c'est-à-dire qu'ils pondent des œufs entourés d'une fine coquille dure, et ils sont tous homéothermes permanentsc. "),
  new Book('La vie des chiens', 'Chienta',19, "Le Chien (Canis lupus familiaris) est la sous-espèce domestique de Canis lupus, un mammifère de la famille des Canidés (Canidae), laquelle comprend également le Loup gris et le dingo, chien domestique retourné à l'état sauvage. "),
  ]
  
  constructor() {
    for(let i =0; i <  this.books.length; i++) {
      this.books[i].available = !!(i%2);



    }
    
  }}
