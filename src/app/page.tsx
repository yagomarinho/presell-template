import Image, { StaticImageData } from 'next/image'

import LogoGreen from '../../public/logo-green 1.png'
import ProductHero from '../../public/product-home 1.png'
import NaturalStamp from '../../public/100-natural-stamp.png'
import Guarantee180 from '../../public/guarantee 180.png'
import FDAStamp from '../../public/fda-stamp.png'
import GMPStamp from '../../public/gmp-stamp.png'
import Bottle1 from '../../public/1-bottle.png'
import Bottle3 from '../../public/3-bottles.png'
import Bottle6 from '../../public/6-bottles.png'

import { ShoppingCart } from './assets/shopping-cart'

import aboutStyles from './styles/about.module.css'
import benefitsStyles from './styles/benefits.module.css'
import bonusesTagStyles from './styles/bonuses.tag.module.css'
import buyButtonStyles from './styles/buy.button.module.css'
import cardStyles from './styles/card.module.css'
import footerStyles from './styles/footer.module.css'
import guaranteeStyles from './styles/guarantee.module.css'
import headerStyles from './styles/header.module.css'
import heroStyles from './styles/hero.module.css'
import offerStyles from './styles/offer.module.css'
import offerCardStyles from './styles/offer.card.module.css'
import questionStyles from './styles/question.module.css'

import { Container } from './components'
import { CheckSquare } from './assets/check.square'

const WhatsPurarive = () => (
  <div>
    <p>
      Weight loss is more than just about shedding pounds. It’s a journey
      to become comfortable in your own skin and live a healthier life. If
      you are finding it difficult to achieve your weight loss objectives
      despite diet and exercise, know that many factors can affect your
      progress, and you may need an extra push from weight loss
      supplements.
    </p>
    <p>
      Rising as a promising supplement with its unique hack, the Puravive
      formula may give you that extra boost to reach your goals. Puravive
      is a natural dietary formula based on a tropical island’s hack that
      gives impressive holistic health results with weight loss. Puravive
      is the type of weight management supplement that gives you the best
      of both worlds – numerous health benefits and the assurance of zero
      side effects. By supporting weight loss, Puravive offers you a chance
      to achieve your weight loss objectives and appear like your younger
      self.
    </p>
  </div>
)

const PuraviveKeyFeatures = () => (
  <div>
    <ul>
      <li>
        <b>Natural Ingredients:</b> Puravive is made using a blend of
        carefully selected natural ingredients that are known for their
        weight loss properties. These ingredients work synergistically to
        help you shed those extra pounds.
      </li>
      <li>
        <b>Metabolism Boost:</b> One of the key features of Puravive is its
        ability to boost your metabolism. A faster metabolism can help you
        burn calories more efficiently, leading to weight loss.
      </li>
      <li>
        <b>Appetite Suppression:</b> Puravive contains ingredients that can
        help curb your appetite, making it easier for you to stick to your
        diet plan and reduce calorie intake.
      </li>
      <li>
        <b>Energy Boost:</b> Puravive provides a natural energy boost,
        helping you stay active and motivated throughout the day.
      </li>
    </ul>
  </div>
)

const WhatsPurariveIngredients = () => (
  <div>
    <p>
      Puravive Formulation and Science Behind Its Ingredients: Puravive’s
      formulation consists of eight clinically proven ingredients and
      essential vitamins designed to increase calorie-burning brown adipose
      tissue (BAT) levels. These ingredients include:
    </p>
    <ul>
      <li>Holy Basil: Reduces stress and supports brain function.</li>
      <li>Kudzu Root: Rich in antioxidants, promoting heart health.</li>
      <li>
        White Korean Ginseng: Boosts the immune system and combats
        oxidative stress.
      </li>
      <li>
        Luteolin: Enhances BAT levels, supports brain health, and regulates
        cholesterol.
      </li>
      <li>
        Amour Cork Bark: Relieves digestive issues and fortifies
        cardiovascular health.
      </li>
      <li>
        Propolis: Packed with antioxidants and supports balanced blood
        sugar levels.
      </li>
      <li>
        Oleuropein: Promotes artery health and aids weight management.
      </li>
      <li>
        Quercetin: Supports healthy blood pressure and combats aging
        effects.
      </li>
    </ul>
  </div>
)

const HowPuraviveWorks = () => (
  <div>
    <p>
      Puravive works by targeting multiple aspects of weight loss to
      provide comprehensive support. Here&lsquo;s how it works:
    </p>
    <ul>
      <li>
        Fat Burning: The natural ingredients in Puravive help stimulate fat
        burning by increasing your metabolism and thermogenesis, allowing
        your body to burn more calories.
      </li>
      <li>
        Appetite Control: Puravive helps control your cravings and suppress
        your appetite, making it easier to stick to a healthy eating plan
        and avoid overeating.
      </li>
      <li>
        Energy Boost: The energy-boosting ingredients in Puravive help
        combat fatigue and keep you energized, so you can stay active and
        motivated to exercise regularly.
      </li>
      <li>
        Mood Enhancement: Puravive contains ingredients that promote a
        positive mood, helping you stay focused and motivated on your
        weight loss journey.
      </li>
    </ul>
  </div>
)

const Logo = () => (
  <Image
    src={LogoGreen}
    width={171}
    height={52}
    alt="The best logo description"
  />
)

const Header = () => (
  <header className={headerStyles.container}>
    <Logo />
  </header>
)

const Footer = () => (
  <footer className={footerStyles.container}>
    <nav className={footerStyles.nav}>
      <ul>
        <li>
          <a href="#">Affiliates</a>
        </li>
        <li>
          <a href="#">Terms of Use</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
    <p className={footerStyles.copyright}>
      © Copyright 2024. All Rights Reserved.
    </p>
  </footer>
)

const BuyButton = () => (
  <button className={buyButtonStyles.container}>
    <ShoppingCart />
    Buy Now!
  </button>
)

const Hero = () => (
  <div className={heroStyles.container}>
    <div className={heroStyles.content}>
      <header>
        <span className={heroStyles.pretitle}>
          Hollywood’s Exotic Secret For Healthy Weight Loss
        </span>
        <h1 className={heroStyles.title}>
          Healthy Weight Loss As Pure as Nature Intended
        </h1>
      </header>
      <p className={heroStyles.description}>
        A groundbreaking study published in Nature Medicine has revealed a
        bizarre fat dissolving loophole that has nothing to do with dieting
        or exercise. They discovered by simply eating this one ugly plant,
        hidden for centuries in Vietnam, you will trigger a unique
        fat-melting chain reaction that liquifies fat cells as you sleep.
      </p>
      <BuyButton />
    </div>
    <div className={heroStyles.image}>
      <Image
        src={ProductHero}
        width={469}
        height={443}
        alt="Great Product Image"
      />
    </div>
  </div>
)

const Card = () => (
  <div className={cardStyles.container}>
    <Image
      src={NaturalStamp}
      width={192}
      height={192}
      alt="100% Natural Ingredients stamp"
    />
    <h3>100% Natural Ingredients</h3>
    <p>
      Pure simplicity in every bottle: our products are crafted with 100%
      natural ingredients.
    </p>
  </div>
)

const Benefits = () => (
  <div className={benefitsStyles.container}>
    <h2>
      Now that you’ re ready to move forward - make sure your credit is too
    </h2>
    <div className={benefitsStyles.cards}>
      <Card />
      <Card />
      <Card />
    </div>
  </div>
)

interface QuestionProps {
  question: string
  answer: React.ReactNode
}

const Question = ({ question, answer }: QuestionProps) => (
  <div className={questionStyles.container}>
    <h2>{question}</h2>
    {answer}
  </div>
)

const About = () => (
  <div className={aboutStyles.container}>
    <Question question="What's Puravive?" answer={<WhatsPurarive />} />
    <Question
      question="What are the Key Features of Puravive?"
      answer={<PuraviveKeyFeatures />}
    />
    <Question
      question="What are the Puravive Ingredients?"
      answer={<WhatsPurariveIngredients />}
    />
    <Question
      question="How Does Puravive Works?"
      answer={<HowPuraviveWorks />}
    />
  </div>
)

interface BonusesTagProps {
  label: string
}

const BonusesTag = ({ label }: BonusesTagProps) => (
  <div className={bonusesTagStyles.container}>
    <CheckSquare />
    {label}
  </div>
)
interface OfferCardProps {
  title: string
  subtitle: string
  img: StaticImageData
  price: string
  unit: string
  discount?: string
  free?: boolean
}

const OfferCard = ({
  title,
  subtitle,
  img,
  price,
  unit,
  discount,
  free,
}: OfferCardProps) => (
  <div className={offerCardStyles.container}>
    <header>
      <h3 className={offerCardStyles.title}>{title}</h3>
      <h4 className={offerCardStyles.subtitle}>{subtitle}</h4>
    </header>
    <div>
      <Image
        src={img}
        width={240}
        height={192}
        alt="Bottle of Puravive"
        style={{ objectFit: 'contain' }}
      />
    </div>
    <div className={offerCardStyles.priceContainer}>
      <span className={offerCardStyles.price}>{price}</span>
      <span className={offerCardStyles.unit}>/{unit}</span>
    </div>
    {free && <BonusesTag label="Free Shipping" />}
    <div className={offerCardStyles.buyContainer}>
      {discount && (
        <span className={offerCardStyles.discount}>
          Save {discount} now!
        </span>
      )}
      <BuyButton />
    </div>
  </div>
)

const Offer = () => (
  <div className={offerStyles.container}>
    <div className={offerStyles.background} />
    <header className={offerStyles.header}>
      <h2 className={offerStyles.title}>
        Claim Your Discount Puravive Below While Stocks Last
      </h2>
    </header>
    <div className={offerStyles.cards}>
      <OfferCard
        title="1 BOTTLE"
        subtitle="30 Days Supply"
        img={Bottle1}
        price="$59"
        unit="bottle"
      />
      <OfferCard
        title="6 BOTTLES"
        subtitle="180 Days Supply"
        img={Bottle6}
        price="$39"
        unit="bottle"
        discount="$120"
        free
      />
      <OfferCard
        title="3 BOTTLES"
        subtitle="90 Days Supply"
        img={Bottle3}
        price="$49"
        unit="bottle"
        discount="$30"
      />
    </div>
  </div>
)

const Guarantee = () => (
  <div className={guaranteeStyles.container}>
    <header>
      <h2 className={guaranteeStyles.title}>
        100% Satisfaction
        <br />
        180-Day Money Back Guarantee
      </h2>
    </header>
    <div className={guaranteeStyles.info}>
      <Image
        src={Guarantee180}
        width={160}
        height={155}
        alt="180 Days Guarantee Stamp"
      />
      <p>
        Your order today is protected by my iron-clad 180-day 100%
        money-back <b>guarantee</b>. If you are not astonished how fast
        your deep stubborn fat stores melt away into pure energy or shocked
        as you admire your new toned slim body in the mirror, then at any
        time in the next 180 days let us know and we’ll refund every single
        penny of your investiment No questions asked.
      </p>
    </div>
    <div className={guaranteeStyles.stamps}>
      <Image src={GMPStamp} width={144} height={144} alt="GMP Stamp" />
      <Image src={FDAStamp} width={144} height={144} alt="FDA Stamp" />
      <Image
        src={NaturalStamp}
        width={144}
        height={144}
        alt="100% Natural Ingredients Stamp"
      />
    </div>
  </div>
)

const Home = () => (
  <div>
    <Header />
    <Container maxWidth={'1088px'}>
      <Hero />
      <Benefits />
      <About />
      <Offer />
      <Guarantee />
    </Container>
    <Footer />
  </div>
)

export default Home
