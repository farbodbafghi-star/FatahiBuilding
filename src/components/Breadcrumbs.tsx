import Link from "next/link";

// Visible breadcrumb trail. The last item is the current page and is not a link.
export default function Breadcrumbs({
  items,
  className = "",
}: {
  items: { name: string; path?: string }[];
  className?: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className={`text-[11px] font-light tracking-[0.15em] text-white/45 ${className}`}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, i) => (
          <li key={item.name} className="flex items-center gap-x-2">
            {item.path ? (
              <Link href={item.path} className="hover:text-beige transition-colors duration-300">
                {item.name}
              </Link>
            ) : (
              <span aria-current="page" className="text-white/70">
                {item.name}
              </span>
            )}
            {i < items.length - 1 ? <span aria-hidden="true">/</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
