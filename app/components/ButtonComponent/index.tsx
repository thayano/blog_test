import Link from "next/link";
interface ButtonComponentProps {
    href: string;
    title: string;
  }
export const ButtonComponent : React.FC<ButtonComponentProps> = ({href, title}) => {
    return (
        <>
            <Link href={href} key={title} className=" hover:text-[#0AA8A7] px-1 ">
                <strong>{title}</strong>
            </Link>
        </>
    )
}