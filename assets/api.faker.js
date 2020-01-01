import { createSpec, faker } from '@helpscout/helix'

faker.seed(1234)

const ApartmentSpec = createSpec({
  title: faker.company.catchPhrase(),
  price: faker.random.number({ min: 50, max: 500 }),
  bedrooms: faker.random.number({ min: 1, max: 5 }),
  bathrooms: faker.random.number({ min: 1, max: 5 }),
  picture: faker.image.city(300, 200, true),
  address: {
    city: faker.address.city(),
    zip: faker.address.zipCode(),
    street: faker.address.streetName(),
    lat: faker.address.latitude(),
    long: faker.address.longitude()
  }
})

const fixtures10 = new Promise(function (resolve, reject) {
  const result = []
  try {
    for (let i = 0; i < 10; i++) {
      const fixture = ApartmentSpec.generate()
      fixture.id = i
      fixture.price *= 1000
      if (fixture.bathrooms > fixture.bedrooms) {
        [fixture.bathrooms, fixture.bedrooms] = [fixture.bedrooms, fixture.bathrooms]
      }
      result.push(fixture)
    }
  } catch (e) {
    reject(e)
  }

  // simulate network lag of 100ms and return result
  sleep(100)
  resolve(result)
})

function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export default {
  getApartments () {
    return fixtures10
  }
}
