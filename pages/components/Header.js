import Link from 'next/link';


export default function Header({
    heading,
    toSignin,
    paragraph,
    linkName,
    linkUrl="#"
}){
    return(
        <div className="mt-10 mb-15">
            <div className="flex justify-center">
                <img 
                    alt=""
                    className="h-20 w-24"
                    src="https://user-images.githubusercontent.com/90395844/194926376-b4960f2f-fe92-46bf-992e-40bbecc7935f.png"/>
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-amber-700">
                {heading}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-800">
            {paragraph} {' '}
            <br></br>
            {toSignin} {' '}
            <Link href={linkUrl} className="font-medium text-amber-600 hover:text-amber-700">
                {linkName}
            </Link>
            </p>
        </div>
    )
}