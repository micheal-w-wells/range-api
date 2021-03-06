//
// MyRA
//
// Copyright © 2018 Province of British Columbia
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// Created by Jason Leach on 2018-05-28.
//

/* eslint-disable no-param-reassign */

'use strict';

const table = 'ref_agreement_exemption_status';

exports.seed = async (knex) => {
  const ref = [
    {
      code: 'N',
      description: 'Not Exempt',
      active: true,
    },
    {
      code: 'PA',
      description: 'Preparing and Obtaining Approval',
      active: true,
    },
    {
      code: 'OA',
      description: 'Obtaining Approval',
      active: true,
    },
  ].map((item, index) => ({ ...item, id: index + 1 }));

  await knex.schema.raw(`TRUNCATE TABLE ${table} RESTART IDENTITY CASCADE`);
  await knex(table).insert(ref);
};
