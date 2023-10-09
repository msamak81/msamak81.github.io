export const SocialMedia = {
    listTitle: 'Manage your social media accounts',
    list:[
        {
            id:1,
            label :'facebook',
            subHeader : 'manage your Facebook account',
            socialNetwork: 'facebook',
            ngModelName: 'facebookAccount',
            iconName:'logo-facebook',
            url : 'https://www.facebook.com/'
        },
        {
            id:2,
            label :'X (Formerly twitter)',
            subHeader : 'manage your X (Formerly twitter) account',
            socialNetwork: 'x',
            ngModelName:'xAccount',
            iconName:'logo-twitter',
            url : 'https://twitter.com/'
        },
        {
            id:3,
            label :'Instagram',
            subHeader : 'manage your Instagram account',
            socialNetwork: 'instagram',
            ngModelName:'instagramAccount',
            iconName:'logo-instagram',
            url : 'https://www.instagram.com/'
        },
        {
            id:4,
            label :'Snapchat',
            subHeader : 'manage your Snapchat account',
            socialNetwork: 'snapchat',
            ngModelName:'snapchatAccount',
            iconName:'logo-snapchat',
            url : 'https://www.snapchat.com/'
        },
    ]
}
