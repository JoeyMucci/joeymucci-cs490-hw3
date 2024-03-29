export const standard = defineScenario({
  post: {
    one: {
      data: {
        title: 'String',
        body: 'String',
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
      },
    },
    two: {
      data: {
        title: 'String',
        body: 'String',
        user: {
          create: {
            id: 100,
            name: 'Karenrofl',
            email: 'lmao@k12.edu',
            hashedPassword:
              'ad9xxx042fe9f154419361eeeb775d8a12f3975a3722953fd8e326dd108d5645',
            salt: '1c99de412b219e9abf4665xx3211adce',
            resetToken: null,
            resetTokenExpiresAt: null,
            roles: 'admin',
          },
        },
      },
    },
  },
})
