export type Reservation = {
  id: number;
  voucher?: string;
  status: "CANCELLED" | "CANCEL_PENDING" | "PAID";

  optionalEquipment: {
    childSeat: number;
    infantSeat: number;
    boosterSeat: number;
    gps: boolean;
  };

  client: {
    addressLine1: string;
    addressLine2: string;
    city: string;
    countryCode: string;
    driverAge: number;
    emailAddress: string;
    faxNumber: string;
    firstName: string;
    language: string;
    lastName: string;
    name: string;
    originCountryCode: string;
    passengers: number;
    phoneNumber: string;
    salutation: string;
    zipCode: string;
    state: string;
  };

  car: {
    id: number;
    name: string;
    ac: boolean;
    doors: number;
    freeAdditionalDriver: boolean;
    freeShuttleBus: boolean;
    freeUpgrade: boolean;
    fuelReturn: "FULL" | "EMPTY" | "FULLY_CHARGED_ELECTRIC";
    fuelType: "PETROL" | "DIESEL" | "HYBRID" | "ELECTRIC";
    gpsIncluded: boolean;
    image: string;
    thumbnail: string;
    offerId: number;
    onAirport: boolean;
    operator: {
      id: number;
      logo: string;
      name: string;
      rating: number;
    };
    passengers: number;
    price: string;
    transmissionType: "MANUAL" | "AUTO";

    unlimitedKm: boolean;
    snowChains: boolean;
    winterTyres: boolean;
  };

  pickup: {
    addressLine1: string;
    addressLine2?: string;
    addressLine3?: string;
    city: string;
    dateTime: Date;
    name?: string;
    office: {
      id: number;
      coordinates: {
        lat: string;
        long: string;
      };
    };
    fax: string;
    telephone: string;
  };

  offer: {
    id: number;
    depositAmount: string;
    feeList: {
      airportFee: {
        amount: number;
        includedInRate: boolean;
      };
      dropFee: {
        amount: number;
        includedInRate: boolean;
      };
    };
    insurance: {
      refundableExcess: boolean;
      wheelsGlass: boolean;
      theftProtection: boolean;
      fireProtection: boolean;
      liability: boolean;
      collisionDamage: boolean;
      roofUndercarriageKey: boolean;
      zeroExcess: boolean;
      additionalItems: boolean;
      breakdown: boolean;
    };
    insuranceType: "INCLUSIVE" | "FULL_PROTECTION";
    officeId: number;
    paymentMethod: string;
    price: number;
  };
};
