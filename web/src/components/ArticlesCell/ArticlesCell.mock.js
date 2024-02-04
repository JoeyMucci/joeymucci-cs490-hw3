// Define your own mock data here:
export const standard = () => {
  return {
    articles: [
      {
        id: 1,
        title: 'First Post',
        body: `Neutra tacos hot chicken prism raw denim, put a bird on it enamel pin post-ironic vape cred DIY. Street art next level umami squid. Hammock hexagon glossier 8-bit banjo. Neutra la croix mixtape echo park four loko semiotics kitsch forage chambray. Semiotics salvia selfies jianbing hella shaman. Letterpress helvetica vaporware cronut, shaman butcher YOLO poke fixie hoodie gentrify woke heirloom.`,
        user: {
          create: {
            id: 10,
            name: 'Karenlmao',
            email: 'bruh@lmao.org',
            hashedPassword:
              'ad9tttttttttt54419361eeeb775d8a12f3975a3722953fd8e326dd108d5645',
            salt: '1c99de412b219ttttf4665293211adce',
            resetToken: null,
            resetTokenExpiresAt: null,
            roles: 'admin',
          },
        },
        createdAt: '2020-01-01T12:34:56Z',
      },
      {
        id: 2,
        title: 'Second Post',
        body: `Master cleanse gentrify irony put a bird on it hexagon enamel pin. Pop-up man braid artisan pug tilde synth lo-fi. Ethical tofu portland keytar waistcoat. Pabst authentic hammock chillwave twee trust fund. Lyft humblebrag ramps irony unicorn.`,
        user: {
          create: {
            id: 888,
            name: 'wwrenlmao',
            email: 'herb@lmao.org',
            hashedPassword:
              'da9tttttttttt54419361eeeb775d8a12f3975a3722953fd8e326dd108d5645',
            salt: 'c199de412b219ttttf4665293211adce',
            resetToken: null,
            resetTokenExpiresAt: null,
            roles: 'admin',
          },
        },
        createdAt: '2020-01-01T12:34:56Z',
      },
    ],
  }
}
