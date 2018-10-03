import encoding from 'encoding-japanese'

export default class NemUtil {
    // Get JSON for Invoice. v:2, type:1 account, type:2 invoice.
    public static getQRcodeJson(vVal: string, typeVal: number, nameVal: string, addrVal: string, amount: number, msgVal: string) {
        const amountVal = amount * Math.pow(10, 6)
        const params = {
          type: typeVal,
          data: {
            name: nameVal,
            addr: addrVal,
            amount: amountVal,
            msg: msgVal,
          },
          v: vVal,
        }
        return encoding.codeToString(encoding.convert(this.getStr2Array(JSON.stringify(params)), 'UTF8'))
    }

    private static getStr2Array(str: string) {
        const array = []
        for (let i = 0; i < str.length; i++) {
          array.push(str.charCodeAt(i))
        }
        return array
    }
}
