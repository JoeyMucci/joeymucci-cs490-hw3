export const standard = defineScenario({
  post: {
    one: {
      data: {
        title: 'String',
        body: 'String',
        user: {
          create: {
            id: 8787,
            name: 'Kawnlmao',
            email: 'bruh@ao.org',
            hashedPassword:
              'ad9tttttttttt54456361eeeb775d8a12f3975a3722953fd8e326dd108d5645',
            salt: '1c99de412b219tt56f4665293211adce',
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
            id: 7878,
            name: 'Kggggl',
            email: 'lmo@k12.edu',
            hashedPassword:
              'ad9tttttttttt54456361errb775d8a12f3975a3722953fd8e326dd108d5645',
            salt: '1c99de412b219e9abf4555xx3211adce',
            resetToken: null,
            resetTokenExpiresAt: null,
            roles: 'admin',
          },
        },
      },
    },
  },
})
