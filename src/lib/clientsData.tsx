export interface Client {
  id: string
  name: string
  industry: string
  description: string
  logo: string
  bgColor: string
}

export const clients: Client[] = [
  {
    id: "applebees",
    name: "AppleBees",
    industry: "Restaurant",
    description: "Popular restaurant chain providing premium bottled water for their customers.",
    bgColor: "from-amber-500 to-orange-600",
    logo: "/clients/AppleBees.png",
  },
  {
    id: "burger-king",
    name: "Burger King",
    industry: "Fast Food",
    description: "Leading fast food chain serving millions with quality water across their outlets.",
    bgColor: "from-red-500 to-orange-600",
    logo: "/clients/Buger king.png",
  },
  {
    id: "efc",
    name: "EFC",
    industry: "Food & Beverage",
    description: "Established food and beverage company committed to quality and customer satisfaction.",
    bgColor: "from-emerald-500 to-teal-600",
    logo: "/clients/EFC.png",
  },
  {
    id: "fc",
    name: "FC",
    industry: "Food & Beverage",
    description: "Trusted partner in the food industry, ensuring quality hydration for their operations.",
    bgColor: "from-blue-600 to-indigo-700",
    logo: "/clients/FC.png",
  },
  {
    id: "hnb",
    name: "HNB",
    industry: "Banking",
    description: "Leading financial institution providing premium water for staff and customers.",
    bgColor: "from-purple-500 to-violet-600",
    logo: "/clients/HNB.png",
  },
  {
    id: "mac",
    name: "MAC",
    industry: "Retail",
    description: "Trusted retail brand committed to employee wellness with premium hydration solutions.",
    bgColor: "from-pink-500 to-rose-600",
    logo: "/clients/MAC.png",
  },
  {
    id: "nsb",
    name: "NSB",
    industry: "Banking & Finance",
    description: "Leading financial institution providing premium water for staff and customers.",
    bgColor: "from-sky-500 to-cyan-600",
    logo: "/clients/NSB.png",
  },
  {
    id: "red-chilli",
    name: "Red Chilli",
    industry: "Restaurant",
    description: "Popular restaurant chain serving authentic cuisine with quality bottled water.",
    bgColor: "from-red-600 to-red-700",
    logo: "/clients/Red Chilli.png",
  },
  {
    id: "sea",
    name: "SEA",
    industry: "Hospitality",
    description: "Premium hospitality provider ensuring guests enjoy the finest drinking water experience.",
    bgColor: "from-blue-500 to-blue-700",
    logo: "/clients/SEA.png",
  },
  {
    id: "vayel-vadi",
    name: "Vayel Vadi",
    industry: "Food & Beverage",
    description: "Trusted food establishment committed to quality ingredients and premium hydration.",
    bgColor: "from-amber-600 to-yellow-600",
    logo: "/clients/VAyel Vadi.png",
  },
]
