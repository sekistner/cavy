/**
 * @format
 */

import React, { Component } from 'react';
import { AppRegistry, NativeModules } from 'react-native';
import { name as appName } from './app.json';

import { Tester, TestHookStore } from 'cavy';

import EmployeeDirectoryApp from './app/EmployeeDirectoryApp';

import EmployeeListSpec from './specs/EmployeeListSpec';

const testHookStore = new TestHookStore();

const reporter = report => {
  NativeModules.TestReporter.testsFinished(report);
}

class AppWrapper extends Component {
  render() {
    return (
      <Tester specs={[EmployeeListSpec]}
        store={testHookStore}
        reporter={reporter}
        waitTime={1000}
        startDelay={3000}>
        <EmployeeDirectoryApp />
      </Tester>
    );
  }
}

AppRegistry.registerComponent(appName, () => AppWrapper);
