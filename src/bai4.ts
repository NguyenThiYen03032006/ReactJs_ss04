 
function check(temp: string| number): string {
    if(typeof temp ==='string'){
        return `${temp.length} ky tu`
    }else if(typeof temp ==='number'){
        if(temp%2==0){
            return `Day la so chan`
        }else{
            return `Day la so le`
        }
    }else{
        return `Du lieu dau vao khong hop le`
    }
}

    console.log(check('demo123'))
    console.log(check('10'))