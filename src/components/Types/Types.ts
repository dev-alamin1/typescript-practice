// card types
export type cardProps = {
    children:string | React.ReactNode
    style: React.CSSProperties
}

// user info type
export type userDemoInfo = {
    user :{
    name:string
    age?:number
    phone?:number
    isActive?:boolean
    bangladeshi?: boolean

    }
}


export type UserType = {
   
    users:{
        name:string
        age:number 
        bangladeshi: boolean
    }[]

}

