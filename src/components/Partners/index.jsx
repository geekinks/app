import clsx from 'clsx'
import Link from '@docusaurus/Link'
import styles from './styles.module.css'

const PartnersList = [
    {
        pic: require('@site/static/img/gdg.png').default,
        url: 'https://gdg.community.dev/gdg-gombe/'
    },
    {
        pic: require('@site/static/img/opls.png').default,
        url: 'https://github.com/open-source-learners'
    },
    {
        pic: require('@site/static/img/Pantami.jpg').default,
        url: 'https://nacos.io/'
    },
    
]

function Partner({pic, url}) {
    return (
   <div className={clsx('col col-demo')}>
     <div className="avatar avatar--vertical">
        <Link href={url}>
            <img
            className="avatar__photo avatar__photo--xl"
            src={pic}
            alt="Partner Avatar"
            />        
        </Link>
    </div>

   </div>
    )
}
   


export default function Partners() {
    return (
        <section className={styles.diver}>
            <div className="container">
                <div className="row">
                    {PartnersList.map((props, idx) => (
                        <Partner key={idx} {...props} />
                    ))}
                                 
                </div>
            </div>
        </section>
    );
}