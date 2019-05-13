//
//  TestReporterBridge.m
//  CavyDirectory
//
//  Created by Abigail McPhillips on 13/05/2019.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_REMAP_MODULE(TestReporter, TestReporter, NSObject)

RCT_EXTERN_METHOD(testsFinished:(NSDictionary*)report)

@end
