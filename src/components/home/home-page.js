import Link from "next/link";
import Image from "next/image";

const HomePage = ({data}) => {
    return (
        <>
        {data.map((t) => (
          <Link key={t.id} href={`/tourist-sites/${t.id}`} passHref>
            <Image width={200} height={200} alt={t.id} src={t.image}/>
            <h2>{t.title}</h2><p>{t.description}</p>
          </Link>
    
        ))}
      </>
    );
}

export default HomePage