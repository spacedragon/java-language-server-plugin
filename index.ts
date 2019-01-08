/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import path from 'path';

export default function (kibana :any) {
  return new kibana.Plugin({
    id: 'javaLanguageServer',
    require: ['elasticsearch', 'kibana'],
    name: 'java_language_server',
    config(Joi: any) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },
    init(server: any) {
      server.expose('install', {
        path: path.join(__dirname, 'jdt-language-server'),
      })
    }
  });
}
