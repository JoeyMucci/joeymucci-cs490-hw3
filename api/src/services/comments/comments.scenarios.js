export const standard = defineScenario({
  comment: {
    jane: {
      data: {
        name: 'Jane Doe',
        body: 'I like trees',
        post: {
          create: {
            title: 'Redwood Leaves',
            body: 'The quick brown fox jumped over the lazy dog.',
            user: {
              create: {
                id: 77,
                name: 'Kurenrofl',
                email: 'lmeo@k12.edu',
                hashedPassword:
                  'ad9xxx042fe9f954419361eeeb775d8a12f3975a3722953fd8e326dd108d5645',
                salt: '1c99de412b219e9abf4665xx3211a9ce',
                resetToken: null,
                resetTokenExpiresAt: null,
                roles: 'admin',
              },
            },
          },
        },
      },
    },
    john: {
      data: {
        name: 'John Doe',
        body: 'Hug a tree today',
        post: {
          create: {
            title: 'Root Systems',
            body: 'The five boxing wizards jump quickly.',
            user: {
              create: {
                id: 199,
                name: 'merrenrofl',
                email: 'lmfao@k12.edu',
                hashedPassword:
                  'ad9xxx042f69f154419361eeeb775d8a12f3975a3722953fd8e326dd108d5645',
                salt: '1c99deaa12b19e9abf4665xx3211adce',
                resetToken: null,
                resetTokenExpiresAt: null,
                roles: 'admin',
              },
            },
          },
        },
      },
    },
  },
})

export const postOnly = defineScenario({
  post: {
    bark: {
      data: {
        title: 'Bark',
        body: "A tree's bark is worse than its bite",
        user: {
          create: {
            id: 1001,
            name: 'Karenroflw',
            email: 'lmao@k12.eduq',
            hashedPassword:
              'ad9xxx042fe9f154413361eeeb775d8a12f3975a3722953fd8e326dd108d5645',
            salt: '1c99de412b21929abf4665xx3211adce',
            resetToken: null,
            resetTokenExpiresAt: null,
            roles: 'admin',
          },
        },
      },
    },
  },
})
