/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type {
  CategoryMarkingGroup,
  CbacBannerData,
  PickerMarking,
  PickerMarkingCategory,
} from "@osdk/cbac-components/experimental";

export const classificationLevelCategory: PickerMarkingCategory = {
  id: "cat-classification",
  name: "Classification Level",
  description: "Overall classification level of the data",
  categoryType: "DISJUNCTIVE",
  markingType: "MANDATORY",
};

export const compartmentCategory: PickerMarkingCategory = {
  id: "cat-compartment",
  name: "Compartments",
  description: "Compartmented information access controls",
  categoryType: "CONJUNCTIVE",
  markingType: "CBAC",
};

export const releasabilityCategory: PickerMarkingCategory = {
  id: "cat-releasability",
  name: "Releasability",
  description: "Release restrictions for data sharing",
  categoryType: "CONJUNCTIVE",
  markingType: "CBAC",
};

export const mockCategories: PickerMarkingCategory[] = [
  classificationLevelCategory,
  compartmentCategory,
  releasabilityCategory,
];

export const mockMarkings: PickerMarking[] = [
  {
    id: "m-unclassified",
    categoryId: "cat-classification",
    name: "Unclassified",
    description: "Information that is not classified and can be freely shared.",
  },
  {
    id: "m-confidential",
    categoryId: "cat-classification",
    name: "Confidential",
    description:
      "Information that could cause damage to national security if disclosed.",
  },
  {
    id: "m-secret",
    categoryId: "cat-classification",
    name: "Secret",
    description:
      "Information that could cause serious damage to national security if disclosed.",
  },
  {
    id: "m-top-secret",
    categoryId: "cat-classification",
    name: "Top Secret",
    description:
      "Information that could cause exceptionally grave damage to national security if disclosed.",
  },
  {
    id: "m-alpha",
    categoryId: "cat-compartment",
    name: "ALPHA",
    description: "Access to ALPHA compartmented information.",
  },
  {
    id: "m-bravo",
    categoryId: "cat-compartment",
    name: "BRAVO",
    description: "Access to BRAVO compartmented information.",
  },
  {
    id: "m-charlie",
    categoryId: "cat-compartment",
    name: "CHARLIE",
    description: "Access to CHARLIE compartmented information.",
  },
  {
    id: "m-rel-usa",
    categoryId: "cat-releasability",
    name: "REL USA",
    description: "Releasable to United States personnel only.",
  },
  {
    id: "m-rel-allied",
    categoryId: "cat-releasability",
    name: "REL ALLIED",
    description: "Releasable to allied nation personnel.",
  },
  {
    id: "m-no-foreign",
    categoryId: "cat-releasability",
    name: "NO FOREIGN",
    description: "Not releasable to foreign nationals.",
  },
];

export const mockCategoryGroups: CategoryMarkingGroup[] = [
  {
    category: classificationLevelCategory,
    markings: mockMarkings.filter((m) => m.categoryId === "cat-classification"),
  },
  {
    category: compartmentCategory,
    markings: mockMarkings.filter((m) => m.categoryId === "cat-compartment"),
  },
  {
    category: releasabilityCategory,
    markings: mockMarkings.filter((m) => m.categoryId === "cat-releasability"),
  },
];

export const mockBannerUnclassified: CbacBannerData = {
  classificationString: "UNCLASSIFIED",
  textColor: "#FFFFFF",
  backgroundColors: ["#007A33"],
  markingIds: ["m-unclassified"],
};

export const mockBannerSecret: CbacBannerData = {
  classificationString: "SECRET // ALPHA // REL USA",
  textColor: "#FFFFFF",
  backgroundColors: ["#C8102E"],
  markingIds: ["m-secret", "m-alpha", "m-rel-usa"],
};

export const mockBannerTopSecret: CbacBannerData = {
  classificationString: "TOP SECRET // ALPHA / BRAVO // NO FOREIGN",
  textColor: "#000000",
  backgroundColors: ["#FF8C00"],
  markingIds: ["m-top-secret", "m-alpha", "m-bravo", "m-no-foreign"],
};

export const mockBannerGradient: CbacBannerData = {
  classificationString: "CONFIDENTIAL // REL ALLIED",
  textColor: "#FFFFFF",
  backgroundColors: ["#0033A0", "#4A90D9"],
  markingIds: ["m-confidential", "m-rel-allied"],
};
