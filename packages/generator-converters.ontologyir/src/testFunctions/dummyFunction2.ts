interface MyParam {
    param1: string;
    param2?: string;
    param3?: string | undefined;
}

export default function(param: MyParam): MyParam {
    return param;
}