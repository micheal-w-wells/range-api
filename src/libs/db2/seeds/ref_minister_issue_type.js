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
// Created by Jason Leach on 2018-06-01.
//

/* eslint-disable no-param-reassign */

'use strict';

const table = 'ref_minister_issue_type';

exports.seed = async (knex) => {
  const ref = [
    {
      name: 'Community Watershed',
      active: true,
    },
    {
      name: 'Conservation Areas',
      active: true,
    },
    {
      name: 'First Nations Values',
      active: true,
    },
    {
      name: 'Fish - Wildlife',
      active: true,
    },
    {
      name: 'Livestock Distribution',
      active: true,
    },
    {
      name: 'Rangeland Health',
      active: true,
    },
    {
      name: 'Recreation - Visual',
      active: true,
    },
    {
      name: 'Riparian',
      active: true,
    },
    {
      name: 'Other',
      active: true,
    },
  ].map((item, index) => ({ ...item, id: index + 1 }));

  await knex(table).delete();
  await knex(table).insert(ref);
};
