//
//  TestReporter.m
//  CavyDirectory
//
//  Created by Abigail McPhillips on 13/05/2019.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "TestReporter.h"

@implementation TestReporter

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(testsFinished:(NSDictionary *)report) {
  NSLog(@"Reported");
}

@end
