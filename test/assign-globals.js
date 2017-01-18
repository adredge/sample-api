"use strict"

const chai = require('chai')
//const chaiAsPromised = require('chai-as-promised')
//const sinon = require('sinon')

//require('sinon-as-promised')
//chai.use(chaiAsPromised)

Object.assign(global, {
  assert: chai.assert,
  expect: chai.expect,
  //sinon,
})

//process.on('uncaughtException', function (err) {
//  console.error('uncaughtException')
//  console.error(err.stack)
//})
//
//process.on('unhandledRejection', function (err) {
//  console.error('unhandledRejection')
//  console.error(err.stack)
//})
