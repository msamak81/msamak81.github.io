export  const  profile = {
    name: 'Mohamed Ahmed Ali',
    accountID : 20100122,
    bloodType: 'B+',
    city: 'Riyadh',
    img: './assets/images/profile/user-profile-img.jpeg',
    donationTimeLine: {
        title : 'Donation Timeline',
        details : [
            {
                date : '7/18/2023',
                hospital : {
                    name:'Alhabib hospital',
                    address : 'Rayyan, Riyadh',
                    logo : './assets/images/hospitals/habib.png'
                }
            },
            {
                date : '3/18/2023',
                hospital : {
                    name:'Alhabib hospital',
                    address : 'Rayyan, Riyadh',
                    logo : './assets/images/hospitals/habib.png'
                }
            },
            {
                date : '10/29/2022',
                hospital : {
                    name:'Hammadi hospital',
                    address : 'Nozha, Riyadh',
                    logo : './assets/images/hospitals/hammadi.png'
                }
            },
            {
                date : '4/4/2022',
                hospital : {
                    name:'Hammadi hospital',
                    address : 'Nozha, Riyadh',
                    logo : './assets/images/hospitals/hammadi.png'
                }
            }
        ]
    },
    actionList : {
        title : 'More actions',
        list : [
            {
                img:'./assets/images/home/icons/reports-icon.svg',
                name :'Medical reports',
                subHeader :'Blood test reports',
                url:'/tabs/home/reports'
            },
            {
                img:'./assets/images/home/icons/assistant-icon.svg',
                name :'Donation certificates',
                subHeader :'Download Blood donations proof',
                url:'/tabs/settings/certificates'
            },
            {
                img:'./assets/images/profile/icon-settings.svg',
                name :'Settings',
                subHeader :'Customize app experience',
                url:'/tabs/settings'
            }
        ]
    }
}
