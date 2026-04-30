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
  BaseObjectViewProps,
  ObjectViewObject,
} from "@osdk/react-components/experimental/object-view";
import { BaseObjectView } from "@osdk/react-components/experimental/object-view";
import type { Meta, StoryObj } from "@storybook/react-vite";

const supplier: ObjectViewObject = {
  apiName: "Supplier",
  typeDisplayName: "Supplier",
  icon: { type: "blueprint", name: "shop", color: "#3b82f6" },
  title: "Supplier 6",
  properties: [
    {
      apiName: "supplierName",
      displayName: "Supplier Name",
      value: "Supplier 6",
      dataType: "string",
      visibility: "PROMINENT",
    },
    {
      apiName: "contactEmail",
      displayName: "Contact Email",
      value: "orders6@supplier6.com",
      dataType: "string",
    },
    {
      apiName: "country",
      displayName: "Country",
      value: "France",
      dataType: "string",
    },
    {
      apiName: "rating",
      displayName: "Rating",
      value: 3.35,
      dataType: "double",
    },
    {
      apiName: "supplierId",
      displayName: "Supplier ID",
      value: "SUP-00006",
      dataType: "string",
    },
    {
      apiName: "createdAt",
      displayName: "Created At",
      value: "2024-01-15T10:30:00.000Z",
      dataType: "datetime",
    },
  ],
};

const meta: Meta<BaseObjectViewProps> = {
  title: "Components/ObjectView/BaseObjectView",
  component: BaseObjectView,
  parameters: {
    layout: "padded",
  },
};

export default meta;

type Story = StoryObj<BaseObjectViewProps>;

export const Default: Story = {
  args: {
    object: supplier,
  },
};

export const HeaderHidden: Story = {
  args: {
    object: supplier,
    enableHeader: false,
  },
};

export const RenderHeaderOverride: Story = {
  args: {
    object: supplier,
    renderHeader: (o) => (
      <div
        style={{
          padding: 16,
          background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
          color: "white",
          fontWeight: 700,
          fontSize: 20,
        }}
      >
        Custom: {o.title}
      </div>
    ),
  },
};

export const RenderPropertyOverride: Story = {
  args: {
    object: supplier,
    renderProperty: (apiName, value) => {
      if (apiName === "rating" && typeof value === "number") {
        return <strong>★ {value.toFixed(2)}</strong>;
      }
      if (apiName === "contactEmail" && typeof value === "string") {
        return <a href={`mailto:${value}`}>{value}</a>;
      }
      return value == null ? "—" : String(value);
    },
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const ErrorState: Story = {
  args: {
    error: new Error("Network request failed: timeout"),
  },
};

export const NotFound: Story = {
  args: {
    notFound: true,
  },
};

export const SimpleEmployee: Story = {
  args: {
    object: {
      apiName: "Employee",
      typeDisplayName: "Employee",
      icon: { type: "blueprint", name: "person", color: "#f59e0b" },
      title: "Sarah Torres",
      properties: [
        {
          apiName: "name",
          displayName: "Name",
          value: "Sarah Torres",
          dataType: "string",
        },
      ],
    },
  },
};
