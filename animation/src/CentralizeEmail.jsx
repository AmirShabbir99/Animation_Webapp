const payload = {
    site: {
        slug: 'bathim_residential',
        name: 'Bathim Residential',
        logo_url: clientLogo,
        notification_email: 'agency@email.com',
    },

    category: Category,
    event_type: TypeOfContact,
    created_at: new Date(),

    lead: {
        title: title || '',
        firstname: FirstName || '',
        lastname: lastName || '',
        email: email || '',
        phone: phoneNumber || '',
    },

    Company: Company || '',
    message: Message || '',

    property_summary: {
        EstateId: EstateId || '',
        street_address: StreetAddress || Address || '',
        StreetNumber: StreetNumber || '',
        box: Box || '',
        zip: EstateZip || '',
        transaction_type: PropertyTransactionType || '',
        price: PropertyPrice || '',
        bedrooms: BedRooms || '',
        PropertyAddress: PropertyAddress || '',
        propertyNumber: Number || '',
        property_ref: EstateId || '',
        property_full_address: `${StreetAddress || Address || ''
            } ${StreetNumber || ''}${Box ? `/${Box}` : ''
            } - ${EstateZip || ''} ${EstateCity || ''}`,
    },
    estimation_summary: {
        year_of_construction:
            YearOfConstruction || DateOfConstruction || '',
        area_of_property: AreaOfProperty || '',
        features: FeaturesSelected || '',
        EstateId: EstateId || '',
        street_address: StreetAddress || Address || '',
        StreetNumber: StreetNumber || '',
        box: Box || '',
        zip: EstateZip || '',
        transaction_type: PropertyTransactionType || '',
        purpose: purpose || '',
        property_type: propertyType || '',
        price_min: PriceMin || '',
        price_max: PriceMax || '',
        area_min: AreaMin || '',
        area_max: AreaMax || '',
        postal_codes: PostalCodes || '',
        city: EstateCity || '',
        type: PropertyType || '',
        subtype: SubType || '',
        bedrooms: BedRooms || '',
        floor: Floor || '',
        living_area: LivingArea || '',
        features_selected: FeaturesSelected || '',
        characteristics: Characterstic || '',
    },
    criteria_summary: {
        price_min: PriceMin || '',
        price_max: PriceMax || '',
        area_min: AreaMin || '',
        area_max: AreaMax || '',
        postal_codes: PostalCodes || '',
        region: Region || '',
        purpose: purpose || '',
        property_type: propertyType || '',
        bedrooms: BedRooms || '',
        city: City || '',
        number_of_appartments_shops: NumberOfAppartmentsShops || '',
        number_of_garage_parking: NumberOfGarageParking || '',
        PCA: PCA || '',
        heating: Heating || '',
        elevator: Elevator || '',
    },

   

    RGBD: {
        privacyAccepted: privacyAccepted || '',
        receiveInfo: receiveInfo || '',
        termsAccepted: termsAccepted || '',
    },
};