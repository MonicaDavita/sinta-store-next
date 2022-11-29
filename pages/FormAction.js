export default function FormAction({
    handleSubmit,
    type='Button',
    action='submit',
    text
}){
    return(
        <>
        {
            type==='Button' ?
            <div className="flex flex-col items-center">
            <button
                type={action}
                className='group relative w-3/4 flex justify-center py-2 px-4 mb-6 border border-transparent text-sm font-medium rounded-md text-white bg-amber-700 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 mt-5'
                onSubmit={handleSubmit}
            >

                {text}
            </button>
            </div>
            :
            <></>
        }
        </>
    )
}