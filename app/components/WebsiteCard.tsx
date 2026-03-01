type WebsiteCardProps = {
    name: string;
    url: string;
    description: string;
  };
  
  export default function WebsiteCard({
    name,
    url,
    description,
  }: WebsiteCardProps) {
    return (
      <div className="bg-zinc-900 p-6 rounded-xl hover:bg-zinc-800 transition">
        <h3 className="text-2xl font-semibold mb-3">{name}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">Visit Website</a>
      </div>
    );
  }