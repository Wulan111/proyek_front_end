import React from 'react';

const Testimoni = () => {
    return (
        <div className="bg-gray-100 py-20">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-center mb-10">TESTIMONI PENGUNJUNG</h1>
                <div className="flex flex-wrap justify-center">
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                        <div className="bg-white rounded-lg p-8">
                            <p className="text-gray-800 text-lg mb-4">
                                "Saya sangat senang nasi goreng mas gondrong, rasanya gurih, asin seperti masa lalu. Terima kasih!"
                            </p>
                            <p className="text-gray-600 font-bold">Prime Samodra</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                        <div className="bg-white rounded-lg p-8">
                            <p className="text-gray-800 text-lg mb-4">
                                "masakan mas gondrong ini mengingatkan kita kepada masalalu yang manies manies."
                            </p>
                            <p className="text-gray-600 font-bold">Kresna Saputra</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                        <div className="bg-white rounded-lg p-8">
                            <p className="text-gray-800 text-lg mb-4">
                                "Gak Enak."
                            </p>
                            <p className="text-gray-600 font-bold">Anis</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimoni;
