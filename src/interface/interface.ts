export interface listCharactersDbz {
    items:{
        id: number,
        description: string,
        gender: string,
        image: string,
        ki: string,
        maxKi: string,
        name: string,
        race: string,
        affiliation: string,
    }[]
}

export interface listProducts {
    dataProducts:{
        category:{
            name: string,
            id: number,
            image: string,
        }[],
        description: string,
        id: number,
        price: number,
        title: string,
        images: string[]
    }[]
    
}