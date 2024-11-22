export default function NavItem({data, raw, active}) {

    return(
        <>
            <div className="flex w-4/5 items-center py-5">
                <div className={`${active === raw ? "rounded-full h-8 aspect-square bg-Lightblue flex justify-evenly items-center mx-4" : "rounded-full h-8 aspect-square border border-white flex justify-evenly items-center mx-4"}`}>
                <p className={`${active === raw ? "text-base text-Marineblue font-medium" : "text-base text-white font-medium"}`}>{raw + 1}</p>
                </div>
                <div className="flex flex-col">
                <p className="text-white font-normal text-sm">{data.id}</p>
                <h1 className="text-white font-bold">{data.name}</h1>
                </div>
            </div>
        </>
    )
}