import { limpiadorfacial, tonicofacial, exfoliantefacial, serumfacial, cremahidrantante, protectorsolar, mascarillafacial, contornodeojos, aceitefacial, aguamicelar} from "../images"

const products = [
  {
    id: 1,
    name: "Pure Glow Cleanser",
    price: 12.99,
    description:
      'The Pure Glow facial cleanser is formulated with natural ingredients such as green tea extract and vitamin E, designed to deeply cleanse pores, remove excess oil and impurities, leaving the skin fresh and radiant. Its gentle formula is suitable for all skin types and perfect for incorporating into your daily skincare routine.',
    images: limpiadorfacial,
  },
  {
    id: 2,
    name: "Revitalize Mist Toner",
    price: 15.99,
    description:
      'The Revitalize Mist Toner is a refreshing blend of rose water and cucumber extract, designed to balance the skins pH levels, tighten pores, and provide a burst of hydration. Spritz it on after cleansing to prep your skin for serums and moisturizers or use it throughout the day to revive your complexion',
    images: tonicofacial,
  },
  {
    id: 3,
    name: "Renewal Scrub Exfoliator",
    price: 14.99,
    description:
      'The Renewal Scrub Exfoliator features fine bamboo particles and fruit enzymes to gently slough away dead skin cells, revealing a smoother, more radiant complexion. This non-abrasive formula buffs away impurities and helps improve skin texture over time, leaving your skin feeling soft and rejuvenated.',
    images: exfoliantefacial,
    },
  {
    id: 4,
    name: "Youthful Glow Serum",
    price: 24.99,
    description:
      'The Youthful Glow Serum is a potent blend of hyaluronic acid, vitamin C, and peptides, formulated to target fine lines, wrinkles, and dullness. This lightweight serum absorbs quickly into the skin, delivering intense hydration and brightening benefits, while promoting a more youthful-looking complexion with continued use.',
    images: serumfacial,
    },
  {
    id: 5,
    name: "Hydra-Boost Moisturizer",
    price: 19.99,
    description:
      'The Hydra-Boost Moisturizer is a nourishing blend of shea butter, jojoba oil, and ceramides, designed to replenish moisture, strengthen the skins barrier, and provide long-lasting hydration. This rich yet non-greasy formula absorbs quickly, leaving your skin feeling supple, smooth, and hydrated throughout the day.',
    images: cremahidrantante,
    },
    {
      id: 6,
      name: "SunShield SPF 50",
      price: 16.99,
      description:
        'SunShield SPF 50 offers broad-spectrum protection against UVA and UVB rays, enriched with antioxidants like vitamin E and green tea extract to defend against environmental stressors. This lightweight, non-comedogenic formula absorbs quickly without leaving a white cast, providing reliable sun protection while nourishing and soothing the skin',
      images: protectorsolar,
      },
      {
        id: 7,
        name: "Purifying Clay Mask",
        price: 17.99,
        description:
          'The Purifying Clay Mask is a detoxifying blend of kaolin clay and charcoal, formulated to deeply cleanse pores, absorb excess oil, and clarify the skin. Infused with botanical extracts like tea tree oil and aloe vera, this mask helps reduce the appearance of blemishes and leaves your skin feeling fresh, clear, and revitalized.',
        images: mascarillafacial,
        },
        {
          id: 8,
          name: "Bright Eyes Firming Gel",
          price: 29.99,
          description:
            'The Bright Eyes Firming Gel is a lightweight, hydrating formula enriched with caffeine and peptides to reduce the appearance of puffiness, dark circles, and fine lines around the eyes. With regular use, this soothing gel helps improve skin elasticity and brighten the delicate eye area, leaving you looking more refreshed and youthful',
          images: contornodeojos,
          },
          {
            id: 9,
            name: "Radiance Renewal Facial Oil",
            price: 32.99,
            description:
              'The Radiance Renewal Facial Oil is a luxurious blend of nourishing oils such as argan, rosehip, and jojoba, designed to deeply hydrate, soften, and replenish the skins moisture barrier. This lightweight yet potent formula absorbs quickly, delivering essential fatty acids and antioxidants to promote a healthy, radiant complexion',
            images: aceitefacial,
            },
            {
              id: 10,
              name: "Gentle Micellar Water",
              price: 13.99,
              description:
                'The Gentle Micellar Water is a no-rinse cleanser and makeup remover infused with micelles, tiny cleansing molecules that effectively lift away dirt, oil, and impurities without stripping the skin. Enriched with soothing ingredients like chamomile and cucumber extract, this gentle formula leaves your skin feeling clean, refreshed, and hydrated.',
              images: aguamicelar,
              },
              
      
];

export default products;