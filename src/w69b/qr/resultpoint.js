// javascript (closure) port (c) 2013 Manuel Braun (mb@w69b.com)
/*
 * Copyright 2008 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
goog.provide('w69b.qr.ResultPoint');

goog.scope(function() {
  /**
   * @constructor
   * @param {number} posX x pos.
   * @param {number} posY y pos.
   */
  w69b.qr.ResultPoint = function(posX, posY) {
    this.x = posX;
    this.y = posY;
  };
  var ResultPoint = w69b.qr.ResultPoint;
  var pro = ResultPoint.prototype;

  /**
   * @return {number} x pos.
   */
    pro.getX = function() {
    return this.x;
  };

  /**
   * @return {number} y pos.
   */
  pro.getY = function() {
    return this.y;
  };
});
