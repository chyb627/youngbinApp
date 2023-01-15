//
//  CalculatorModule.swift
//  youngbinapp
//
//  Created by 차영빈 on 2023/01/15.
//

import Foundation

@objc(CalculatorModule)
class CalculatorModule:NSObject {
  
  @objc(executeCalc:numberA:numberB:resolver:rejector:)
  public func executeCalc (_ action:String, numberA:Int, numberB:Int, resolver:RCTPromiseResolveBlock, rejector:RCTPromiseRejectBlock) -> Void{
    
    if(action == "plus") {
      resolver(numberA + numberB);
      return;
    }
    
    if(action == "minus") {
      resolver(numberA - numberB);
      return;
    }
    
    if(action == "multiply") {
      resolver(numberA * numberB);
      return;
    }
    
    if(action == "devide") {
      resolver(numberA / numberB);
      return;
    }
    
    rejector("Unexpected action type", action, nil);
    
  }
  
}
