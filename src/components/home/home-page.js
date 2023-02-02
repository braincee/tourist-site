import Link from "next/link";
import Image from "next/image";

const HomePage = ({data}) => {
    return (
        <div className="home-body">
          <h2>REGIONS IN GHANA</h2>
        {data.map((t) => (
          <Link key={t.id} href={`/tourist-sites/${t.id}`} passHref className="home-card">
            <div className="image"><Image width={500} height={300} alt={t.id} src={t.image}/></div>
            <div><h2>{t.title}</h2><p className="description">{t.description}</p>
            <ul className="list">
                <li>Area: {t.area}</li>
                <li>Captial: {t.capital}</li>
                <li>District: {t.district}</li>
                <li>Population: {t.population}</li>
                <li>Language: {t.language}</li>
               </ul>
            </div>
          </Link>
    
        ))}
      </div>
    );
}

export default HomePage