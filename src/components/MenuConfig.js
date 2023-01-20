const CONFIG_MENU = [
    {
        title: '主要功能',
        children: [

            {
                name: 'READER',
                router: 'READER',
                desc: '阅读',
                icon: 'md-document'
            },
            {
                name: 'IMAGER',
                router: 'IMAGER',
                desc: '看图',
                icon: 'md-chatbubbles'
            },
            {
                name: 'VIDEOR',
                router: 'VIDEOR',
                desc: '视频',
                icon: 'md-videocam'
            }
        ]
    },
    {
        title: '关于',
        children: [
            {
                name: 'MESSAGE',
                router: 'MESSAGE',
                desc: '版本信息及介绍',
                icon: 'md-heart'
            }
        ]
    }
]
export default CONFIG_MENU
