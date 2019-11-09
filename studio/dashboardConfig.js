export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dc6e1ae6c1592792940513b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-4pcjj7wc',
                  apiId: '8bfcb5af-d115-4125-a1fb-7026221b8aed'
                },
                {
                  buildHookId: '5dc6e1aeb25fc4bc929f9cf2',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-p8r7yn13',
                  apiId: '99386f02-4bda-4ecb-9051-f1deada0f109'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/GeorgeWS/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-p8r7yn13.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
