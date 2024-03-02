
/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://makecode.microbit.org/blocks/custom
*/

enum MyEnum {
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon="" block="明るさと温度"
//% groups=["BOSON","GROVE","Gravity"]
namespace akarusatoondo {
    //% block
    //% block="温度[℃] %pin || %format"
    //% group="BOSON"
    //% weight=1000
    export function gettempBOSON( pin: AnalogPin ): number {
        return Math.round((100 * pins.analogReadPin(pin) * (3.3 / 10.24)) * 3.3 / 10.24) / 100;
    }
    //% block
    //% block="湿度[\\%] %pin || %format"
    //% group="BOSON"
    //% weight=990
    export function gethumiBOSON(pin: AnalogPin): number {
        return pins.analogReadPin(pin) / 10;
    }
    //% block
    //% block="明るさ[\\%] %pin || %format"
    //% group="BOSON"
    //% weight=980
    export function getlightBOSON( pin: AnalogPin ): number {
        return Math.round(100 * pins.analogReadPin(pin) * 100.0 / 1023.0) / 100;
    }
    //% block
    //% block="温度[℃]（AHT20/DHT20） || %format"
    //% group="GROVE"
    //% weight=1000
    export function gettempAHT20(): number {
        return grove.aht20ReadTemperatureC();
    }
    //% block
    //% block="湿度[\\%]（AHT20/DHT20） || %format"
    //% group="GROVE"
    //% weight=990
    export function gethumiAHT20(): number {
        return grove.aht20ReadHumidity()
    }
    //% block
    //% block="明るさ[\\%]（V1.2） %pin || %format"
    //% group="GROVE"
    //% weight=980
    export function getlightGROVE(pin: AnalogPin): number {
        return Math.round(100 * pins.analogReadPin(pin) * 100.0 / 1023.0) / 100;
    }
    //% block
    //% block="温度[℃]（V3） %pin || %format"
    //% group="Gravity"
    //% weight=1000
    export function gettempGravityV3(pin: AnalogPin): number {
        return Math.round(100 * (pins.analogReadPin(pin)*3.3)/10.24) / 100;
    }
    //% block
    //% block="温度[℃]（BME） %pin || %format"
    //% group="Gravity"
    //% weight=1000
    export function gettempGravityBME(pin: AnalogPin): number {
        return parseFloat( NaturalScience.readBME280Data(NaturalScience.BME280Data.Temperature) );       
    }
    //% block
    //% block="湿度[\\%]（BME） %pin || %format"
    //% group="Gravity"
    //% weight=990
    export function gethumiGravityBME(pin: AnalogPin): number {
        return parseFloat(NaturalScience.readBME280Data(NaturalScience.BME280Data.Humidity));
    }
    //% block
    //% block="明るさ[\\%]（V2） %pin || %format"
    //% group="Gravity"
    //% weight=980
    export function getlightV2(pin: AnalogPin): number {
        return Math.round(100 * pins.analogReadPin(pin) * 100.0 / 1023.0) / 100;
    }
}
