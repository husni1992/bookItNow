import axios from "axios";
import { authUrl } from "./Constants";

export const authenticate = () => {
  const authOptions = {
    method: "GET",
    url: authUrl
  };
  return axios(authOptions)
    .then(response => {
      console.log("fetching ended", response);
    })
    .catch(error => {
      console.log("fetching error", error);
    });
};

export const getRoomsList = (startIndex, itemsCount) => {
  const roomsListMockData = {
    data: [
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "55558",
          region: "",
          streetAddress: "East Crescent Road"
        },
        badge: "Excellent Breakfast",
        coordinate: {
          lat: "25.140681",
          lon: "55.132178"
        },
        cost: 590,
        id: "c679f21241c84c39b202d22b53b85a4e",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/3e4564321d5bbc209fcf215f25404de4.jpg",
        name: "Sofitel Dubai The Palm Resort & Spa",
        neighbourhood: "Palm Jumeirah",
        rating: 9,
        star_rating: 5,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "P.O. Box 9229",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "Sheikh Zayed Road"
        },
        badge: "Clean Rooms",
        coordinate: {
          lat: "25.224747",
          lon: "55.284243"
        },
        cost: 144,
        id: "145c6d27c2b24c8ba32ea42f0ad09cfd",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/4bba94fc4c44cd7db4202d16d6c841b4.jpg",
        name: "The Apartments Dubai World Trade Centre",
        neighbourhood: "Trade Centre Area",
        rating: 8.7,
        star_rating: 3,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "55558",
          region: "",
          streetAddress: "East Crescent Road"
        },
        badge: "In Room Dining",
        coordinate: {
          lat: "25.140681",
          lon: "55.132178"
        },
        cost: 590,
        id: "5188405e1184491b9bd46a383023eb48",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/05a05892001c7a017ba1573938d6cff1.jpg",
        name: "Sofitel Dubai The Palm Resort & Spa",
        neighbourhood: "Palm Jumeirah",
        rating: 9.2,
        star_rating: 5,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "35566",
          region: "",
          streetAddress: "Dubai Airports"
        },
        badge: "Clean Rooms",
        coordinate: {
          lat: "25.248473",
          lon: "55.361756"
        },
        cost: 634.15,
        id: "67d61f365f1b46f5aeefe18bb51bd75c",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/5cdbea58a43ea8a2d3c83a15c771f45c.jpg",
        name: "Dubai International Airport Terminal Hotel",
        neighbourhood: "Dubai",
        rating: 8.6,
        star_rating: 0,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "55558",
          region: "",
          streetAddress: "East Crescent road"
        },
        badge: "In Room Dining",
        coordinate: {
          lat: "25.140601",
          lon: "55.132162"
        },
        cost: 780,
        id: "e75c36f43e5749a0b442c0fd857ca870",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/8d50c30a503d37f4c44d0f357f7ab62c.jpg",
        name: "Sofitel Dubai The Palm Luxury Apartments",
        neighbourhood: "Palm Jumeirah",
        rating: 7.7,
        star_rating: 5,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "Near Al Ghurair Center",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "Umar Bin Al kattab Rd, Deira"
        },
        badge: "Clean Rooms",
        coordinate: {
          lat: "25.268624",
          lon: "55.316266"
        },
        cost: 377.1,
        id: "19c669d77f6a42ca8999c6a1a5673112",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/955a481de81cc9c3b7301df2c338de70.jpg",
        name: "Swissotel Living Al Ghurair Dubai",
        neighbourhood: "Deira",
        rating: 9.9,
        star_rating: 4,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "185051",
          region: "",
          streetAddress: "Omar Bin Al Khattab Street"
        },
        badge: "Clean Rooms",
        coordinate: {
          lat: "25.269439",
          lon: "55.316443"
        },
        cost: 296.1,
        id: "0551e5833bc9455bb8cf5ebd5c53269a",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/1336_16030713370040512972.jpg",
        name: "Swissotel Al Ghurair Dubai",
        neighbourhood: "Deira",
        rating: 8,
        star_rating: 5,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "Burj Views, Fountain Street"
        },
        badge: "Family Friendly",
        coordinate: {
          lat: "25.18952",
          lon: "55.281465"
        },
        cost: 234,
        id: "2cbd3a6e4e2f4490acf1d4b2d6c14a15",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/1336_16030713390040513022.jpg",
        name: "Faraway Homes - Burj Views Luxury",
        neighbourhood: "Downtown Dubai",
        rating: 8.8,
        star_rating: 0,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "PO Box 72127",
          locality: "Dubai",
          postalCode: "72127",
          region: "",
          streetAddress: "Sheikh Zayed Road"
        },
        badge: "Excellent Breakfast",
        coordinate: {
          lat: "25.216682",
          lon: "55.28226"
        },
        cost: 562.5,
        id: "22c4f48de6f04ad78362953adaa065c8",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/1336_16030714340040514514.jpg",
        name: "Jumeirah Emirates Towers",
        neighbourhood: "Trade Center",
        rating: 9.8,
        star_rating: 5,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "2nd December Street, Jumeira 1",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "Al Mina Rd"
        },
        badge: "Free Dinner",
        coordinate: {
          lat: "25.238864",
          lon: "55.272738"
        },
        cost: 139,
        id: "e34406b600824016b8e8711d9bda22bc",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/1684bcb16cd35aee1a5cbcd14c0c7940.jpg",
        name: "ibis Styles Dubai Jumeira",
        neighbourhood: "Dubai",
        rating: 8.6,
        star_rating: 0,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "Palm Jumeirah, West Crescent"
        },
        badge: "Family Friendly",
        coordinate: {
          lat: "25.098007",
          lon: "55.123512"
        },
        cost: 700,
        id: "19ccfd1165a343a695c2b0236e29bb36",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/3922_15081919220034636924.jpg",
        name: "Jumeirah Zabeel Saray",
        neighbourhood: "Palm Jumeirah",
        rating: 9.1,
        star_rating: 5,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "World Trade Center",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "Sheikh Zayed Road"
        },
        badge: "Great Service",
        coordinate: {
          lat: "25.223029",
          lon: "55.285711"
        },
        cost: 132.49,
        id: "7fd556d557ee4d8f94694de759ef5580",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/3922_15081919230034637222.jpg",
        name: "ibis World Trade Centre Dubai",
        neighbourhood: "Trade Centre Area",
        rating: 8.7,
        star_rating: 2,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "Jumeirah Beach Road"
        },
        badge: "Excellent Breakfast",
        coordinate: {
          lat: "25.140873",
          lon: "55.185927"
        },
        cost: 5000,
        id: "1c62f4a35cb94845967df9b5cd538284",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/3922_15081919270034637328.jpg",
        name: "Burj Al Arab Jumeirah",
        neighbourhood: "Beach & Coast",
        rating: 8.8,
        star_rating: 5,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "26500",
          region: "",
          streetAddress: "The Walk Jbr"
        },
        badge: "Great Service",
        coordinate: {
          lat: "25.073644",
          lon: "55.130215"
        },
        cost: 476,
        id: "9d3ff438247f4dfeae6cb94e36455709",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/3922_15111016540037639075.jpg",
        name: "JA Ocean View Hotel",
        neighbourhood: "Jumeirah Beach Residence",
        rating: 8.8,
        star_rating: 5,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "Business Bay",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "Al Abraaj Street"
        },
        badge: "Free Dinner",
        coordinate: {
          lat: "25.186287",
          lon: "55.268237"
        },
        cost: 312,
        id: "8be3cf98e3044523a7a7ac0b3f76379a",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/5397_15090720490035720601.jpg",
        name: "Radisson Blu Hotel Dubai Waterfront",
        neighbourhood: "Downtown Dubai",
        rating: 8.1,
        star_rating: 5,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "33640",
          region: "",
          streetAddress: "2nd December St., Al Badaa, Al Jafiliya"
        },
        badge: "Great Service",
        coordinate: {
          lat: "25.237132",
          lon: "55.274227"
        },
        cost: 153.85,
        id: "0f59483c2ac44cc79c161aa4326e5abe",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/5397_15090920260035829699.jpg",
        name: "Jumeira Rotana",
        neighbourhood: "Dubai",
        rating: 7.5,
        star_rating: 4,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "Bay Square 5, Business Bay"
        },
        badge: "Clean Rooms",
        coordinate: {
          lat: "25.186721",
          lon: "55.280758"
        },
        cost: 275,
        id: "3b15adbbf6f74c2781bee017c56965df",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/6518_14021013370018293125.jpg",
        name: "DoubleTree by Hilton Dubai - Business Bay",
        neighbourhood: "Downtown Dubai",
        rating: 9.1,
        star_rating: 4,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "P.o. Box 75880",
          locality: "Dubai",
          postalCode: "0000",
          region: "",
          streetAddress: "Sheikh Zayed Road"
        },
        badge: "Excellent Breakfast",
        coordinate: {
          lat: "25.207977",
          lon: "55.27221"
        },
        cost: 650,
        id: "5bee6bd56c414aaea9179ad9dac6129b",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/6518_14060219530019671467.jpg",
        name: "Shangri La Hotel Dubai",
        neighbourhood: "Trade Center",
        rating: 9.9,
        star_rating: 5,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "Trade Centre",
          locality: "Dubai",
          postalCode: "119444",
          region: "",
          streetAddress: "2nd December Road, Jafiliya"
        },
        badge: "Clean Rooms",
        coordinate: {
          lat: "25.230982",
          lon: "55.287341"
        },
        cost: 198,
        id: "0f07bea8d0ec44c4b039c2cd2183d663",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/6518_17022720390051279336.jpg",
        name: "Rove Trade Centre",
        neighbourhood: "Dubai",
        rating: 7.3,
        star_rating: 3,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "Al Garhoud Deira",
          locality: "Dubai",
          postalCode: "PO 78377",
          region: "",
          streetAddress: "Road Al Garhoud Deira"
        },
        badge: "Clean Rooms",
        coordinate: {
          lat: "25.243",
          lon: "55.3398"
        },
        cost: 337.5,
        id: "6c422409334a4824b10a8a7065e74eb3",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/9301_14022316100018430094.jpg",
        name: "Jumeirah Creekside Hotel",
        neighbourhood: "Garhoud",
        rating: 9.2,
        star_rating: 5,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "2nd Right after Dragon Mart",
          locality: "Dubai",
          postalCode: "119171",
          region: "",
          streetAddress: "Al Awir Road"
        },
        badge: "Family Friendly",
        coordinate: {
          lat: "25.169814",
          lon: "55.444893"
        },
        cost: 794.15,
        id: "f740b8e39dfe4ba6b03d44b5b08effe9",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/9301_18022003350062124049.jpg",
        name: "Desert Palm Dubai",
        neighbourhood: "Dubai",
        rating: 7.3,
        star_rating: 5,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "PO Box 75157",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "Jumeirah Al Qasr-Madinat Jumeirah"
        },
        badge: "Free Dinner",
        coordinate: {
          lat: "25.131401",
          lon: "55.185083"
        },
        cost: 1200,
        id: "fa55554bc20c47e389a83161c27a03a0",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/51366_14051317280019405699.jpg",
        name: "Jumeirah Al Qasr - Madinat Jumeirah",
        neighbourhood: "Beach & Coast",
        rating: 7.7,
        star_rating: 5,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "Baniyas Road, Deira"
        },
        badge: "Excellent Breakfast",
        coordinate: {
          lat: "25.259784",
          lon: "55.318051"
        },
        cost: 247.5,
        id: "741cb075e44f4492882d274d84a3ac56",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/51366_14051522050019441073.jpg",
        name: "Al Bandar Rotana",
        neighbourhood: "Deira",
        rating: 8,
        star_rating: 5,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "8286",
          region: "",
          streetAddress: "Pearl Jumeira"
        },
        badge: "Clean Rooms",
        coordinate: {
          lat: "25.246887",
          lon: "55.255871"
        },
        cost: 840,
        id: "3d0067fe699a42df850a712373c790f9",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/51366_14051816470019466174.jpg",
        name: "Nikki Beach Resort & Spa Dubai",
        neighbourhood: "Dubai",
        rating: 9.1,
        star_rating: 5,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "120015",
          region: "",
          streetAddress: "Palm Jumeirah"
        },
        badge: "Clean Rooms",
        coordinate: {
          lat: "25.113123",
          lon: "55.137524"
        },
        cost: 432,
        id: "87c14982230040d49e00175f15fc99e1",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/51692_16070915010044537793.jpg",
        name: "DUKES Dubai Hotel - Palm Jumeirah",
        neighbourhood: "Palm Jumeirah",
        rating: 8.5,
        star_rating: 5,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "133 Sheikh Zayed Road"
        },
        badge: "Great Service",
        coordinate: {
          lat: "25.206041",
          lon: "55.273234"
        },
        cost: 325,
        id: "b1f8bae9f8e44c219f6d2da1600fe1b5",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/51692_16070915010044537806.jpg",
        name: "Dusit Thani Dubai",
        neighbourhood: "DIFC",
        rating: 8.3,
        star_rating: 5,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "Dubai Motor City",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "Turin Boulevard Road 125/126"
        },
        badge: "Excellent Breakfast",
        coordinate: {
          lat: "25.047105",
          lon: "55.244314"
        },
        cost: 224,
        id: "e5bacd3aa8f64ccabbbef6610f5b264e",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/59623_16112819040049172319.jpg",
        name: "Park Inn by Radisson Dubai Motor City",
        neighbourhood: "Beach & Coast",
        rating: 9.7,
        star_rating: 4,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "Bay Square 5, Business Bay"
        },
        badge: "Family Friendly",
        coordinate: {
          lat: "25.186721",
          lon: "55.280758"
        },
        cost: 278,
        id: "7625b9ca421f4b089e6b77344b125c8d",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/59623_17092020030056650850.jpg",
        name: "DoubleTree by Hilton Dubai - Business Bay",
        neighbourhood: "Downtown Dubai",
        rating: 9.5,
        star_rating: 4,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "Near Meaisem City Center",
          locality: "Dubai",
          postalCode: "392360",
          region: "",
          streetAddress: "Al Fay Road, Sports City"
        },
        badge: "Great Service",
        coordinate: {
          lat: "25.033877",
          lon: "55.203842"
        },
        cost: 233.55,
        id: "3b3327cb0d924dd3a4d9593c485487f6",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/63988be726eaf5884b1e5e2c071f68aa.jpg",
        name: "Ghaya Grand Hotel",
        neighbourhood: "Beach & Coast",
        rating: 8.4,
        star_rating: 5,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "Palm Jumeirah, East Crescent"
        },
        badge: "In Room Dining",
        coordinate: {
          lat: "25.129584",
          lon: "55.154022"
        },
        cost: 780,
        id: "8adf99a197794c73a511ce0e7f262f9e",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/64030_13102715590017144561.jpg",
        name: "Anantara The Palm Dubai Resort",
        neighbourhood: "Beach & Coast",
        rating: 8.6,
        star_rating: 5,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "Palm Jumeirah"
        },
        badge: "Great Service",
        coordinate: {
          lat: "25.110454",
          lon: "55.141261"
        },
        cost: 630,
        id: "11487128d7224941bdeb40dfe127788c",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/64030_13102715590017144562.jpg",
        name: "Fairmont The Palm",
        neighbourhood: "Beach & Coast",
        rating: 9.1,
        star_rating: 5,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "454745",
          region: "",
          streetAddress: "Dubai Marina"
        },
        badge: "Free Dinner",
        coordinate: {
          lat: "25.07927",
          lon: "55.144618"
        },
        cost: 222,
        id: "4d3925ed8cf54106b2fbf52279427035",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/64030_13102715590017144563.jpg",
        name: "Marina View Hotel Apartments",
        neighbourhood: "Beach & Coast",
        rating: 9.9,
        star_rating: 4,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "PO Box 75157",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "King Salman bin Abdulaziz Al Saud"
        },
        badge: "Excellent Breakfast",
        coordinate: {
          lat: "25.131365",
          lon: "55.185108"
        },
        cost: 1100,
        id: "08f9457522b1457c9ca795b95bbcc65a",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/64030_16071415470044678905.jpg",
        name: "Jumeirah Dar Al Masyaf - Madinat Jumeirah",
        neighbourhood: "Beach & Coast",
        rating: 8.8,
        star_rating: 5,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "Jumeirah Beach",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "King Salman bin Abdul Aziz Al Saud St"
        },
        badge: "Family Friendly",
        coordinate: {
          lat: "25.095031",
          lon: "55.150397"
        },
        cost: 960,
        id: "2d559cbfb37d417ebbf67d17d66be155",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/68245_15071514320032354319.jpg",
        name: "One&Only Royal Mirage",
        neighbourhood: "Beach & Coast",
        rating: 7,
        star_rating: 5,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "Deira",
          locality: "Dubai",
          postalCode: "476",
          region: "",
          streetAddress: "Bani Yas Road"
        },
        badge: "Family Friendly",
        coordinate: {
          lat: "25.26542",
          lon: "55.31155"
        },
        cost: 240,
        id: "8306a4379ea9415ead99d80c8afb9e14",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/68245_15071514340032354514.jpg",
        name: "Radisson Blu Hotel, Dubai Deira Creek",
        neighbourhood: "Al Rigga",
        rating: 9.2,
        star_rating: 4,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "Al Thanya Street",
          locality: "Dubai",
          postalCode: "31588",
          region: "",
          streetAddress: "Sheikh Zayed Road, Exit 41"
        },
        badge: "Great Service",
        coordinate: {
          lat: "25.132963",
          lon: "55.212988"
        },
        cost: 189,
        id: "1fd052b69ef54269b77bdd2668225350",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/69336_15072919290033297051.jpg",
        name: "Metropolitan Hotel Dubai",
        neighbourhood: "Beach & Coast",
        rating: 7.3,
        star_rating: 0,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "19th Street, Oud Metha, Bur Dubai"
        },
        badge: "In Room Dining",
        coordinate: {
          lat: "25.23444",
          lon: "55.312975"
        },
        cost: 175.5,
        id: "dd849a76da2e4a3698811ea03572b637",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/69336_15072919300033297078.jpg",
        name: "Rove Healthcare City",
        neighbourhood: "Bur Dubai",
        rating: 9.8,
        star_rating: 3,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "Sheikh Zayed Road"
        },
        badge: "Family Friendly",
        coordinate: {
          lat: "25.209277",
          lon: "55.274643"
        },
        cost: 223.12,
        id: "ae4d9704daf14208b505a777f859124e",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/69336_15072919300033297079.jpg",
        name: "Emirates Grand Hotel",
        neighbourhood: "DIFC",
        rating: 8.4,
        star_rating: 4,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "Bay Square 5, Business Bay"
        },
        badge: "Family Friendly",
        coordinate: {
          lat: "25.186721",
          lon: "55.280758"
        },
        cost: 297,
        id: "39be1560ceef4c5b8b011d123556c84d",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/69336_16051012090042189563.jpg",
        name: "DoubleTree by Hilton Dubai - Business Bay",
        neighbourhood: "Downtown Dubai",
        rating: 9.1,
        star_rating: 4,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "East Crescent",
          locality: "Dubai",
          postalCode: "18652",
          region: "",
          streetAddress: "Palm Jumeirah"
        },
        badge: "In Room Dining",
        coordinate: {
          lat: "25.122043",
          lon: "55.154122"
        },
        cost: 500,
        id: "26e4e1ec2c384a4a9f3876b34d625583",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/69338_17052119240053127344.jpg",
        name: "Rixos The Palm Dubai",
        neighbourhood: "Beach & Coast",
        rating: 9.3,
        star_rating: 5,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "Downtown Dubai",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "Al Asayel St. Business Bay"
        },
        badge: "In Room Dining",
        coordinate: {
          lat: "25.193583",
          lon: "55.289332"
        },
        cost: 224,
        id: "321440b88db84a16b56e9021094fe8b2",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/69338_17052212110053136676.jpg",
        name: "M Hotel Downtown by Millennium",
        neighbourhood: "Downtown Dubai",
        rating: 8.4,
        star_rating: 4,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "Al Abraj Street, Business Bay"
        },
        badge: "Clean Rooms",
        coordinate: {
          lat: "25.187583",
          lon: "55.271571"
        },
        cost: 380,
        id: "f30ede920e5e40b1804c4fe8d3df2702",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/71081_15081117480034065993.jpg",
        name: "DAMAC Maison Canal Views",
        neighbourhood: "Downtown Dubai",
        rating: 9.1,
        star_rating: 5,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Sharjah",
          postalCode: "",
          region: "",
          streetAddress: "Al Nahda Street 115, opp. Sahara Center"
        },
        badge: "Excellent Breakfast",
        coordinate: {
          lat: "25.298342",
          lon: "55.372275"
        },
        cost: 143.2,
        id: "2b26a742fb80438eb506ca405143ad41",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/71081_16062712580044129156.jpg",
        name: "Ramada Hotel & Suites Sharjah",
        neighbourhood: "Sharjah",
        rating: 9.1,
        star_rating: 4,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "8489",
          region: "",
          streetAddress: "Burj Khalifa Street"
        },
        badge: "Great Service",
        coordinate: {
          lat: "25.1928",
          lon: "55.26706"
        },
        cost: 600,
        id: "eb974cbac314411e813040ee8985494b",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/71081_16062712580044129157.jpg",
        name: "Taj Dubai",
        neighbourhood: "Downtown Dubai",
        rating: 7.6,
        star_rating: 5,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "9622",
          region: "",
          streetAddress: "Al Saada Street"
        },
        badge: "Excellent Breakfast",
        coordinate: {
          lat: "25.226808",
          lon: "55.287967"
        },
        cost: 245,
        id: "e794e7cd1c054aa594ddabc63ef163e4",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/74181_120226175245711.png",
        name: "Novotel World Trade Centre",
        neighbourhood: "Trade Centre Area",
        rating: 9.7,
        star_rating: 4,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "Near Mall of the Emirates",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "Street 13 Al Barsha 1"
        },
        badge: "Excellent Breakfast",
        coordinate: {
          lat: "25.113495",
          lon: "55.202113"
        },
        cost: 175.68,
        id: "17d4ce194c0a43fc8fd2561af7afca29",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/74181_1201061144005615390.jpg",
        name: "MENA Plaza Hotel Albarsha",
        neighbourhood: "Al Barsha",
        rating: 8.2,
        star_rating: 4,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "The Palm",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "Crescent Road"
        },
        badge: "Clean Rooms",
        coordinate: {
          lat: "25.130915",
          lon: "55.116354"
        },
        cost: 1200,
        id: "ad3fa33946684038b51b0e2a109a42e2",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/74181_13062703290013534771.jpg",
        name: "Atlantis The Palm",
        neighbourhood: "Palm Jumeirah",
        rating: 9.1,
        star_rating: 5,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "Opposite to Burj Khaliffa",
          locality: "Dubai",
          postalCode: "117546",
          region: "",
          streetAddress: "Al Saffa Street, Off Sheikh Zayed Road"
        },
        badge: "Clean Rooms",
        coordinate: {
          lat: "25.202871",
          lon: "55.278269"
        },
        cost: 329,
        id: "629c1978bbef4dae99d29f6cf0df9c0a",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/74181_14070114550020105159.jpg",
        name: "Roda Al Murooj",
        neighbourhood: "Trade Center",
        rating: 7.1,
        star_rating: 5,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "Post Box 9168",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "Al Mankhool Road Bur Dubai"
        },
        badge: "In Room Dining",
        coordinate: {
          lat: "25.251559",
          lon: "55.295027"
        },
        cost: 149.93,
        id: "9d35be16d2e1449286905705668e26e1",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/96401_15081019450033994461.jpg",
        name: "Golden Sands Hotel Apartments",
        neighbourhood: "Bur Dubai",
        rating: 8.9,
        star_rating: 3,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "Bay Square 5, Business Bay"
        },
        badge: "Free Dinner",
        coordinate: {
          lat: "25.186721",
          lon: "55.280758"
        },
        cost: 269,
        id: "defcc003bc224337806ce014c96a0d28",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/96401_15081816130034517575.jpg",
        name: "DoubleTree by Hilton Dubai - Business Bay",
        neighbourhood: "Downtown Dubai",
        rating: 8.9,
        star_rating: 4,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "Madinat Jumeirah, Al Sufouh Rd"
        },
        badge: "Family Friendly",
        coordinate: {
          lat: "25.135036",
          lon: "55.186004"
        },
        cost: 1000,
        id: "fb3bb64efd7a4c9ca402325d0144e5e1",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/97820_14012915420018207402.jpg",
        name: "Jumeirah Mina A Salam - Madinat Jumeirah",
        neighbourhood: "Beach & Coast",
        rating: 9.5,
        star_rating: 5,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "Dubai Sports City"
        },
        badge: "Great Service",
        coordinate: {
          lat: "25.04213",
          lon: "55.221744"
        },
        cost: 157.5,
        id: "242f1da3ff9d49d498526fc73058243d",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/97820_16062205080043920673.jpg",
        name: "Fakhruddin Hotel Apartments",
        neighbourhood: "Beach & Coast",
        rating: 9.6,
        star_rating: 0,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "Crescent West, Palm Jumeirah"
        },
        badge: "Free Dinner",
        coordinate: {
          lat: "25.112941",
          lon: "55.108842"
        },
        cost: 1600,
        id: "8fe2284524524e0097a789621b587b08",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/99111_16070818330044527488.jpg",
        name: "Kempinski Hotel & Residences Palm Jumeirah",
        neighbourhood: "Palm Jumeirah",
        rating: 9.9,
        star_rating: 5,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "312 Happiness Street"
        },
        badge: "Free Dinner",
        coordinate: {
          lat: "25.203103",
          lon: "55.278738"
        },
        cost: 265.5,
        id: "eb892c4e4cd94ff8ba3b82ccf1643c40",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/99111_16081614030045518700.jpg",
        name: "Rove Downtown Dubai",
        neighbourhood: "Trade Center",
        rating: 8.3,
        star_rating: 3,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "World Trade Center",
          locality: "Dubai",
          postalCode: "0000",
          region: "",
          streetAddress: "2nd Zabeel Road"
        },
        badge: "In Room Dining",
        coordinate: {
          lat: "25.226811",
          lon: "55.289077"
        },
        cost: 496,
        id: "a60348981f994062a761998e2873c70a",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/99197_14083112430021730455.jpg",
        name: "Jumeirah Living - World Trade Centre Residence",
        neighbourhood: "Trade Centre Area",
        rating: 7.5,
        star_rating: 5,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "Nadd al Hessa, Silicon Oasis",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "Plot No 26-077, Nadd Al Sheba"
        },
        badge: "Family Friendly",
        coordinate: {
          lat: "25.124029",
          lon: "55.378114"
        },
        cost: 204,
        id: "2ee9e552477f4baf9567bf03ae46fbc9",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/99197_17022520060051250893.jpg",
        name: "Radisson Blu Hotel Apartment Dubai Silicon Oasis",
        neighbourhood: "Dubai",
        rating: 9.6,
        star_rating: 0,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "Bur Dubai",
          locality: "Dubai",
          postalCode: "122235",
          region: "",
          streetAddress: "Mankhool Road"
        },
        badge: "Clean Rooms",
        coordinate: {
          lat: "25.253404",
          lon: "55.293802"
        },
        cost: 159.21,
        id: "86c5a4e2c5084e49a3cafa2b1c9de2ae",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/108208_15070118240031506681.jpg",
        name: "Majestic Hotel Tower",
        neighbourhood: "Bur Dubai",
        rating: 9.6,
        star_rating: 4,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "5840",
          region: "",
          streetAddress: "Mohammed Bin Rashid Boulevard Downtown"
        },
        badge: "Free Dinner",
        coordinate: {
          lat: "25.194687",
          lon: "55.283396"
        },
        cost: 378,
        id: "84e6934d02874c908970decfdece7d31",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/108208_15092215080036265903.jpg",
        name: "DAMAC Maison Dubai Mall Street",
        neighbourhood: "Downtown Dubai",
        rating: 7.6,
        star_rating: 5,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "Apt 701, Barsha Heights",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "Sheikh Zayed Rd, Capitol Tower, 7th Fl"
        },
        badge: "Free Dinner",
        coordinate: {
          lat: "25.100705",
          lon: "55.178789"
        },
        cost: 64.6,
        id: "aebd667161354cc183b63b6b38777d9b",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/108208_16092013460046658798.jpg",
        name: "THE ONE HOSTEL",
        neighbourhood: "Tecom",
        rating: 7.4,
        star_rating: 2,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "Palm Jumeirah",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "No. 1 The Palm"
        },
        badge: "Clean Rooms",
        coordinate: {
          lat: "25.104575",
          lon: "55.148995"
        },
        cost: 540,
        id: "1e706e93228f483a85fe77610ae168da",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/108945_15081213360034112103.jpg",
        name: "FIVE Palm Jumeirah Dubai",
        neighbourhood: "Beach & Coast",
        rating: 7.5,
        star_rating: 5,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "Bay Square 5, Business Bay"
        },
        badge: "Clean Rooms",
        coordinate: {
          lat: "25.186721",
          lon: "55.280758"
        },
        cost: 230,
        id: "0056740d69994d9fb6e34601bc1fe243",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/108945_15081213440034113193.jpg",
        name: "DoubleTree by Hilton Dubai - Business Bay",
        neighbourhood: "Downtown Dubai",
        rating: 7.3,
        star_rating: 4,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "49185",
          region: "",
          streetAddress: "Al Quasis"
        },
        badge: "Family Friendly",
        coordinate: {
          lat: "25.273245",
          lon: "55.381437"
        },
        cost: 134,
        id: "83125a73e62045c19bca7725ee63fd91",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/146584_14041401060019063607.jpg",
        name: "Dubai Grand Hotel by Fortune",
        neighbourhood: "Al Qusais",
        rating: 7.9,
        star_rating: 4,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "9622",
          region: "",
          streetAddress: "Trade Centre District"
        },
        badge: "Great Service",
        coordinate: {
          lat: "25.221643",
          lon: "55.286558"
        },
        cost: 145.84,
        id: "4445c9494cfb4a749b43da0bbab3b814",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/146586_16120713160049502350.jpg",
        name: "ibis One Central Hotel",
        neighbourhood: "Trade Centre Area",
        rating: 9.5,
        star_rating: 3,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "Sheikh Zayed Road"
        },
        badge: "Family Friendly",
        coordinate: {
          lat: "25.11384",
          lon: "55.193125"
        },
        cost: 130.05,
        id: "15f27e67123d4552b1b24d4066b9cc1f",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/146617_15073014030033338328.jpg",
        name: "Cassells Al Barsha Hotel",
        neighbourhood: "Al Barsha",
        rating: 8.3,
        star_rating: 4,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "182166",
          region: "Dubai",
          streetAddress: "Opposite Deira City Center"
        },
        badge: "Great Service",
        coordinate: {
          lat: "25.252806",
          lon: "55.333524"
        },
        cost: 170.1,
        id: "3eedb0f8bba942e992642f0ec2656947",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/146617_15073014570033345722.jpg",
        name: "Royal Continental Hotel",
        neighbourhood: "Deira",
        rating: 8.6,
        star_rating: 4,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "End of Al Mina Road, Bur Dubai",
          locality: "Dubai",
          postalCode: "33228",
          region: "",
          streetAddress: "Near to Jumeirah & Satwa"
        },
        badge: "In Room Dining",
        coordinate: {
          lat: "25.242032",
          lon: "55.275316"
        },
        cost: 135,
        id: "4c4be0059fdd4f4db0da41b16f2e45e3",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/146617_15111615510037771323.jpg",
        name: "Capitol Hotel",
        neighbourhood: "Dubai",
        rating: 9.4,
        star_rating: 4,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "232808",
          region: "",
          streetAddress: "Dubailand Residence Area"
        },
        badge: "Excellent Breakfast",
        coordinate: {
          lat: "25.08916",
          lon: "55.379508"
        },
        cost: 159,
        id: "3ef37ab7f53f498bac1f53d700906490",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/146617_15111616050037772049.jpg",
        name: "Abidos Hotel Apartment, Dubailand",
        neighbourhood: "Dubai",
        rating: 9.8,
        star_rating: 0,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "Downtown Dubai",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "Sheihk Zayed Road"
        },
        badge: "Free Dinner",
        coordinate: {
          lat: "25.200879",
          lon: "55.269158"
        },
        cost: 599,
        id: "08aa327bf3244804b76cdc80d5ef9cdd",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/146618_13121514420017904761.jpg",
        name: "Sofitel Dubai Downtown",
        neighbourhood: "Downtown Dubai",
        rating: 7,
        star_rating: 5,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "234344",
          region: "",
          streetAddress: "Abu Baker Al Siddque & Sallahuddin Road"
        },
        badge: "Free Dinner",
        coordinate: {
          lat: "25.270743",
          lon: "55.330001"
        },
        cost: 210,
        id: "00b3b68852d64a10b6870401bb6345b8",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/146625_15051121430027401649.jpg",
        name: "AVANI Deira Dubai Hotel",
        neighbourhood: "Deira",
        rating: 9.5,
        star_rating: 5,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "282825",
          region: "",
          streetAddress: "Jumeirah Beach Residence"
        },
        badge: "Clean Rooms",
        coordinate: {
          lat: "25.080469",
          lon: "55.136524"
        },
        cost: 337.5,
        id: "ae96b829001e4986a611c3fe68861103",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/146625_15091606440036046607.jpg",
        name: "Movenpick Hotel Jumeirah Beach",
        neighbourhood: "Jumeirah Beach Residence",
        rating: 9.8,
        star_rating: 5,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "128777",
          region: "",
          streetAddress: "Jumeirah Road"
        },
        badge: "Free Dinner",
        coordinate: {
          lat: "25.201893",
          lon: "55.24062"
        },
        cost: 1180,
        id: "7d41ccc11deb47b184d78c3ee375bfa3",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/146625_16092119530046752573.jpg",
        name: "Four Seasons Resort Dubai at Jumeirah Beach",
        neighbourhood: "Beach & Coast",
        rating: 9.3,
        star_rating: 5,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "Bay Square 5, Business Bay"
        },
        badge: "In Room Dining",
        coordinate: {
          lat: "25.186721",
          lon: "55.280758"
        },
        cost: 174,
        id: "4166972015714d309c6dc76cd5376af5",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/146633_15082612490035089977.jpg",
        name: "DoubleTree by Hilton Dubai - Business Bay",
        neighbourhood: "Downtown Dubai",
        rating: 8.2,
        star_rating: 4,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "66431",
          region: "",
          streetAddress: "Al Mina Road"
        },
        badge: "Family Friendly",
        coordinate: {
          lat: "25.242837",
          lon: "55.275787"
        },
        cost: 159,
        id: "d290a1e216d84f1797a2c89f4a7edd76",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/146633_16061516530043609428.jpg",
        name: "Mercure Gold Hotel Al Mina Road Dubai",
        neighbourhood: "Dubai",
        rating: 8.7,
        star_rating: 4,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Jebel Ali",
          postalCode: "",
          region: "",
          streetAddress: "Exit 13 Sheikh Zayed Road"
        },
        badge: "Great Service",
        coordinate: {
          lat: "24.987349",
          lon: "55.023118"
        },
        cost: 383,
        id: "0a3abc9fa1494513a65042c063de95e2",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/146633_16061517030043609905.jpg",
        name: "JA Jebel Ali Beach Hotel",
        neighbourhood: "Jebel Ali",
        rating: 7.8,
        star_rating: 5,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "Al Garhoud",
          locality: "Dubai",
          postalCode: "13018",
          region: "",
          streetAddress: "Airport Road, Casablanca Street"
        },
        badge: "Great Service",
        coordinate: {
          lat: "25.24826",
          lon: "55.344145"
        },
        cost: 240,
        id: "675c773c58644603a4c368e30b861cb6",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/146633_16061517060043610115.jpg",
        name: "Millennium Airport Hotel Dubai",
        neighbourhood: "Garhoud",
        rating: 7.9,
        star_rating: 4,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "20107",
          region: "",
          streetAddress: "Al Qusais Area at Al Nahda Street"
        },
        badge: "Free Dinner",
        coordinate: {
          lat: "25.274486",
          lon: "55.367528"
        },
        cost: 243,
        id: "038500dcf070430f951a786970d9a4f5",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/146640_14082920520021721906.jpg",
        name: "Al Bustan Residence Hotel-Apartments",
        neighbourhood: "Al Qusais",
        rating: 7.2,
        star_rating: 4,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "Beside Blue Bay Tower",
          locality: "Dubai",
          postalCode: "0000",
          region: "",
          streetAddress: "Al Abraj Street"
        },
        badge: "Clean Rooms",
        coordinate: {
          lat: "25.187655",
          lon: "55.271669"
        },
        cost: 427.49,
        id: "95f14a6669bd41d299c8493d8881f087",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/146640_14110912260023258524.jpg",
        name: "Steigenberger Hotel Business Bay, Dubai",
        neighbourhood: "Downtown Dubai",
        rating: 9.3,
        star_rating: 5,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "6237",
          region: "",
          streetAddress: "Sheikh Zayed Road, Al Barsha 1"
        },
        badge: "In Room Dining",
        coordinate: {
          lat: "25.111367",
          lon: "55.196082"
        },
        cost: 153,
        id: "4e93a2a413d748b683c6563e00db436a",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/146640_16062817350044190183.jpg",
        name: "Al Khoory Atrium Hotel",
        neighbourhood: "Al Barsha",
        rating: 7.3,
        star_rating: 4,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "Po Box 35118",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "Silicon Oasis"
        },
        badge: "Clean Rooms",
        coordinate: {
          lat: "25.122954",
          lon: "55.374346"
        },
        cost: 165.75,
        id: "cf25c207664541339549df651625d9cf",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/146640_16062817550044190995.jpg",
        name: "Premier Inn Dubai Silicon Oasis",
        neighbourhood: "Dubai",
        rating: 7.3,
        star_rating: 3,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "Tecom",
          locality: "Dubai",
          postalCode: "500679",
          region: "",
          streetAddress: "Al Fosool St."
        },
        badge: "Free Dinner",
        coordinate: {
          lat: "25.094254",
          lon: "55.17748"
        },
        cost: 160.65,
        id: "2e1645b54c68453b969fc68a85a065c1",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/150819_14070123530020112762.jpg",
        name: "Auris Inn Al Muhanna Hotel",
        neighbourhood: "Tecom",
        rating: 8,
        star_rating: 4,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "P.o. Box 5182",
          locality: "Dubai",
          postalCode: "00000",
          region: "",
          streetAddress: "Jumierah Beach Road"
        },
        badge: "Excellent Breakfast",
        coordinate: {
          lat: "25.233526",
          lon: "55.263618"
        },
        cost: 380,
        id: "2559c047268c459ebe58cec3a139289a",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/150819_14070123530020112762 (1).jpg",
        name: "Dubai Marine Beach Resort & Spa",
        neighbourhood: "Beach & Coast",
        rating: 8,
        star_rating: 5,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "0000",
          region: "",
          streetAddress: "Sheikh Zayed Road"
        },
        badge: "Clean Rooms",
        coordinate: {
          lat: "25.193175",
          lon: "55.262425"
        },
        cost: 270,
        id: "1efd332af170451693308e264dc04ee8",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/150819_14070123590020112774.jpg",
        name: "City Premiere Hotel Apartment",
        neighbourhood: "Downtown Dubai",
        rating: 7.6,
        star_rating: 4,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "Bay Square 5, Business Bay"
        },
        badge: "Great Service",
        coordinate: {
          lat: "25.186721",
          lon: "55.280758"
        },
        cost: 253,
        id: "5876880319e74c82bba15d4f879d36a9",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/150819_14070123590020112774 (1).jpg",
        name: "DoubleTree by Hilton Dubai - Business Bay",
        neighbourhood: "Downtown Dubai",
        rating: 8.5,
        star_rating: 4,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "Near Mall of The Emirates, Al Barsh",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "Al Barsha Road"
        },
        badge: "Great Service",
        coordinate: {
          lat: "25.117794",
          lon: "55.196512"
        },
        cost: 200,
        id: "e421a602dc204308a619be4bb43e3c34",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/150819_14070513020020161477.jpg",
        name: "Flora Al Barsha Hotel",
        neighbourhood: "Al Barsha",
        rating: 7.9,
        star_rating: 0,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "0",
          region: "",
          streetAddress: "8th Str Port Saeed District F"
        },
        badge: "In Room Dining",
        coordinate: {
          lat: "25.253543",
          lon: "55.332519"
        },
        cost: 148.49,
        id: "0257264dfe404a39b6b3920b0cef6250",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/150819_14070513020020161477 (1).jpg",
        name: "ibis Deira City Centre",
        neighbourhood: "Deira",
        rating: 9.8,
        star_rating: 3,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "Nad Al Sheba",
          locality: "Dubai",
          postalCode: "9305",
          region: "",
          streetAddress: "Meydan Racecourse,  Al Meydan Road"
        },
        badge: "In Room Dining",
        coordinate: {
          lat: "25.157425",
          lon: "55.30139"
        },
        cost: 449,
        id: "5165746d7cd0422c861484d4dcabb906",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/150835_14032312170018819788.jpg",
        name: "The Meydan Hotel",
        neighbourhood: "Dubai",
        rating: 8.4,
        star_rating: 5,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "PO Box 114843",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "Palm Island, The West Crescent"
        },
        badge: "Excellent Breakfast",
        coordinate: {
          lat: "25.098368",
          lon: "55.132584"
        },
        cost: 1840,
        id: "5f6d0a92ff9e43ef857e0b31a1fdf3de",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/150835_14052519450019563419.jpg",
        name: "One&Only The Palm",
        neighbourhood: "Palm Jumeirah",
        rating: 8.9,
        star_rating: 5,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "Deira",
          locality: "Dubai",
          postalCode: "4483",
          region: "",
          streetAddress: "Salahuddin Street"
        },
        badge: "Clean Rooms",
        coordinate: {
          lat: "25.270252",
          lon: "55.325102"
        },
        cost: 207,
        id: "c8365a8f01c5488eae04d7827ef13e7d",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/150835_14052519460019563437.jpg",
        name: "Asiana Hotel Dubai",
        neighbourhood: "Deira",
        rating: 7.3,
        star_rating: 5,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "Sheikh Zayed Road"
        },
        badge: "Great Service",
        coordinate: {
          lat: "25.226203",
          lon: "55.284586"
        },
        cost: 550,
        id: "7d382e8af3584c7cb64f65665e38a221",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/150835_18020118310061469782.jpg",
        name: "Fairmont Dubai",
        neighbourhood: "Trade Center",
        rating: 9.4,
        star_rating: 5,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "126452",
          region: "",
          streetAddress: "Sheikh Zayed Road"
        },
        badge: "Family Friendly",
        coordinate: {
          lat: "25.211214",
          lon: "55.277389"
        },
        cost: 300,
        id: "b4b70761e90d49c1aea5292a1877d38d",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/150842_13061002480012788875.jpg",
        name: "Rose Rayhaan by Rotana",
        neighbourhood: "DIFC",
        rating: 7.9,
        star_rating: 4,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "P.O. Box 450605",
          locality: "Dubai",
          postalCode: "450605",
          region: "",
          streetAddress: "Al Barsha"
        },
        badge: "Great Service",
        coordinate: {
          lat: "25.113238",
          lon: "55.204536"
        },
        cost: 185,
        id: "361972deadbe4509aa5844c565c3cceb",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/150842_15111219320037696578.jpg",
        name: "Abidos Hotel Apartment - Al Barsha - Dubai",
        neighbourhood: "Al Barsha",
        rating: 8.7,
        star_rating: 4,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "Deira",
          locality: "Dubai",
          postalCode: "120328",
          region: "",
          streetAddress: "Near Al Rigga Metro Station"
        },
        badge: "Free Dinner",
        coordinate: {
          lat: "25.265223",
          lon: "55.32232"
        },
        cost: 165,
        id: "8857e33b022140bf82f8ca66ab5a9afc",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/150842_16061613250043645479.jpg",
        name: "Flora Grand Hotel",
        neighbourhood: "Al Muraqqabat",
        rating: 7.3,
        star_rating: 4,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "The Oberoi Centre, Business Bay"
        },
        badge: "In Room Dining",
        coordinate: {
          lat: "25.187137",
          lon: "55.263879"
        },
        cost: 525,
        id: "72cc1b9d31d842b6a7f1ec39a71cbe33",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/150842_17011818120050394092.jpg",
        name: "The Oberoi",
        neighbourhood: "Downtown Dubai",
        rating: 8.9,
        star_rating: 5,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "Bay Square 5, Business Bay"
        },
        badge: "In Room Dining",
        coordinate: {
          lat: "25.186721",
          lon: "55.280758"
        },
        cost: 222,
        id: "5950460a3ac64275945a32b4a01a544e",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/153648_16050219110041988501.jpg",
        name: "DoubleTree by Hilton Dubai - Business Bay",
        neighbourhood: "Downtown Dubai",
        rating: 8,
        star_rating: 4,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "555614",
          region: "",
          streetAddress: "2 Al Nessnass Street, Jumeirah 3"
        },
        badge: "Clean Rooms",
        coordinate: {
          lat: "25.180644",
          lon: "55.222881"
        },
        cost: 325,
        id: "88668cae046944b08c269f9fa343075f",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/153648_16050219140041988565.jpg",
        name: "Roda Beach Resort",
        neighbourhood: "Beach & Coast",
        rating: 7.2,
        star_rating: 0,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "25570",
          region: "",
          streetAddress: "Al Muteena Street"
        },
        badge: "Great Service",
        coordinate: {
          lat: "25.273349",
          lon: "55.318951"
        },
        cost: 123.3,
        id: "523038a55d5f4cf8a5144e5b152b7eab",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/153648_16050219530041989235.jpg",
        name: "Marco Polo Hotel",
        neighbourhood: "Deira",
        rating: 9.3,
        star_rating: 4,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "Opposite Iranian Hospital",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "Al Wasl Area"
        },
        badge: "Free Dinner",
        coordinate: {
          lat: "25.231779",
          lon: "55.270296"
        },
        cost: 139.99,
        id: "aa8769be97f4440a8d4d82962a52e453",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/153648_16050220120041989653.jpg",
        name: "Al Khoory Executive Hotel",
        neighbourhood: "Beach & Coast",
        rating: 9.8,
        star_rating: 3,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "Deira",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "Al Khaleej Road"
        },
        badge: "Clean Rooms",
        coordinate: {
          lat: "25.281969",
          lon: "55.31514"
        },
        cost: 121.5,
        id: "38fd59f762ea4c05aed185531a38eeff",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/153650_15060812390028852752.jpg",
        name: "Hues Boutique Hotel",
        neighbourhood: "Deira",
        rating: 7.4,
        star_rating: 4,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "Near Dubai Airport Free Zone",
          locality: "Dubai",
          postalCode: "237844",
          region: "",
          streetAddress: "Damascus St. Al Qusais"
        },
        badge: "Free Dinner",
        coordinate: {
          lat: "25.270776",
          lon: "55.380199"
        },
        cost: 185,
        id: "f22ca069438e4ebeac8ecf388c3fd0f7",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/153650_15060812420028853041.jpg",
        name: "TIME Grand Plaza Hotel",
        neighbourhood: "Al Qusais",
        rating: 7.8,
        star_rating: 4,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "Downtown Dubai 114788",
          locality: "Dubai",
          postalCode: "114788",
          region: "",
          streetAddress: "Mohamed Bin Rashid Boulevard"
        },
        badge: "Great Service",
        coordinate: {
          lat: "25.189867",
          lon: "55.274465"
        },
        cost: 599,
        id: "e41f89550caa440690c9279753e9e1b6",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/153650_15060818030028940140.jpg",
        name: "Vida Downtown",
        neighbourhood: "Downtown Dubai",
        rating: 8.2,
        star_rating: 4,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "6237",
          region: "",
          streetAddress: "Sheikh Zayed Road, Al Barsha"
        },
        badge: "Free Dinner",
        coordinate: {
          lat: "25.112866",
          lon: "55.193337"
        },
        cost: 210,
        id: "1318a15c730d4698aa62b170cd7d2337",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/153650_15102615420037172902.jpg",
        name: "Al Khoory Hotel Apartments",
        neighbourhood: "Al Barsha",
        rating: 7,
        star_rating: 0,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "Behind Golden Sands",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "Bur Dubai Mankhool Area Street No. 13 C"
        },
        badge: "Free Dinner",
        coordinate: {
          lat: "25.251426",
          lon: "55.297654"
        },
        cost: 171,
        id: "c85181532a79410d9ce3d46ad181d5bb",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/155417_15081116040034054031.jpg",
        name: "Xclusive Casa Hotel Apartments",
        neighbourhood: "Bur Dubai",
        rating: 8.9,
        star_rating: 0,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "next to Mall of the Emirates",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "A4 Street, Al Barsha 1"
        },
        badge: "In Room Dining",
        coordinate: {
          lat: "25.117043",
          lon: "55.19632"
        },
        cost: 237.5,
        id: "36ae12ff7d594d36b58637b2861d2f96",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/155417_15081116080034054411.jpg",
        name: "MENA APARTHOTEL",
        neighbourhood: "Al Barsha",
        rating: 7.4,
        star_rating: 0,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "Deira",
          locality: "Dubai",
          postalCode: "119311",
          region: "",
          streetAddress: "Port Saeed Road"
        },
        badge: "In Room Dining",
        coordinate: {
          lat: "25.254557",
          lon: "55.328187"
        },
        cost: 165.6,
        id: "28a51b7324e04a6cb5e789e4cf9fbd00",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/155417_15081313420034199854.jpg",
        name: "Copthorne Hotel Dubai",
        neighbourhood: "Deira",
        rating: 9.8,
        star_rating: 4,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "Bay Square 5, Business Bay"
        },
        badge: "Clean Rooms",
        coordinate: {
          lat: "25.186721",
          lon: "55.280758"
        },
        cost: 240,
        id: "604be6a0908b4240b70e22141050dafd",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/155419_15062322540030541495.jpg",
        name: "DoubleTree by Hilton Dubai - Business Bay",
        neighbourhood: "Downtown Dubai",
        rating: 8.8,
        star_rating: 4,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "P O Box 10001",
          locality: "Dubai",
          postalCode: "",
          region: "",
          streetAddress: "Airport Road"
        },
        badge: "Free Dinner",
        coordinate: {
          lat: "25.249397",
          lon: "55.347909"
        },
        cost: 320,
        id: "c8fb35ac53c5469491a96564dc9883c6",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/155419_15063013180031266853.jpg",
        name: "Le Meridien Dubai Hotel & Conference Centre",
        neighbourhood: "Garhoud",
        rating: 7,
        star_rating: 5,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "Opposite Dubai World Trade Centre",
          locality: "Dubai",
          postalCode: "125511",
          region: "",
          streetAddress: "One Sheikh Zayed Road"
        },
        badge: "Family Friendly",
        coordinate: {
          lat: "25.230015",
          lon: "55.287273"
        },
        cost: 400,
        id: "b752e140365842a48bb53e7ad7c9352d",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/155419_15122821250038770630.jpg",
        name: "The H Hotel, Dubai",
        neighbourhood: "Trade Center",
        rating: 8.8,
        star_rating: 5,
        type: "hotel"
      },
      {
        address: {
          countryCode: "ae",
          countryName: "United Arab Emirates",
          extendedAddress: "",
          locality: "Dubai",
          postalCode: "53449",
          region: "",
          streetAddress: "Naser Square, Naif Road, Deira"
        },
        badge: "Excellent Breakfast",
        coordinate: {
          lat: "25.272546",
          lon: "55.309426"
        },
        cost: 130,
        id: "bc6c5364591e4ea08ef1e4d1e33221a2",
        image:
          "https://res.cloudinary.com/esanjolabs/image/upload/hotels/155419_15122901000038772801.jpg",
        name: "Golden Square Hotel Apartments",
        neighbourhood: "Naif",
        rating: 9.8,
        star_rating: 0,
        type: "hotel"
      }
    ],
    pagination: {
      page: 1,
      records: 200
    }
  };
  return new Promise(function(success) {
    setTimeout(function() {
      const existingData = [...roomsListMockData.data];
      const newArray = existingData.slice(startIndex, startIndex + itemsCount);
      success(newArray);
    }, startIndex > 0 ? 600 : 0);
  });

  // not used the provided api because of the CORS issue
  // return axios.get("https://test-api-2507.esanjo.net/hotels/v1/list")
  //   .then(response => {
  //     console.log("fetching ended", response);
  //   })
  //   .catch(error => {
  //     console.log("fetching error", error);
  //   });
};
