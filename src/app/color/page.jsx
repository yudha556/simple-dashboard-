export default function Color() {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="font-semibold text-3xl">Color</h1>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
                <div className="bg-[#F5F7F8]  text-black p-20 flex items-center justify-center shadow-2xl">#F5F7F8</div>
                <div className="bg-[#171717] text-white p-20 flex items-center justify-center shadow-2xl">#171717</div>
                <div className="bg-purple  text-black p-20 flex items-center justify-center shadow-2xl">#836FFF</div>
                <div className="bg-grey  text-black p-20 flex items-center justify-center shadow-2xl">#F4F6FF</div>
                <div className="bg-[#F3C623]  text-black p-20 flex items-center justify-center shadow-2xl">#F3C623</div>
                <div className="bg-green  text-black p-20 flex items-center justify-center shadow-2xl">#10B981</div>
                <div className="bg-red  text-black p-20 flex items-center justify-center shadow-2xl">#EF4444</div>
                <div className="bg-gold  text-black p-20 flex items-center justify-center shadow-2xl">#FACC15</div>
            </div>
        </div>

    )
}