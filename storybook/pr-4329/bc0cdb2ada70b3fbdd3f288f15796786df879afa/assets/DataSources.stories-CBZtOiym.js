import{j as r}from"./iframe-D9LEKPHA.js";import{O as b}from"./object-table-B1AfggZM.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-zkhyuCkI.js";import{u as g}from"./useOsdkClient-CcWL-FKN.js";import"./preload-helper-Dxzd1OZD.js";import"./Table-DXZyWBeX.js";import"./index-DzK_y6C8.js";import"./Dialog-CWnr_w5m.js";import"./cross-C3SLdrCX.js";import"./svgIconContainer-e-ufemnI.js";import"./useBaseUiId-CBbaApFb.js";import"./InternalBackdrop-GJoSUQP4.js";import"./composite-CGRnG1Ww.js";import"./index-DXKCvCyZ.js";import"./index-Bc3q1fMe.js";import"./index-DsxzOZNt.js";import"./useEventCallback-DDtAALNo.js";import"./SkeletonBar-Dyau828r.js";import"./LoadingCell-CAS6H_28.js";import"./ColumnConfigDialog-A5yV7I5q.js";import"./DraggableList-a_S_NMQt.js";import"./search-CA19qJZK.js";import"./Input-D7T3_Ui_.js";import"./useControlled-3uaONOlZ.js";import"./Button-CFsy2fIN.js";import"./small-cross-suCAhOQB.js";import"./ActionButton-Bf8hi2D9.js";import"./Checkbox-k2zGxl_k.js";import"./useValueChanged-CGf07a8j.js";import"./CollapsiblePanel-D4Wj2a6a.js";import"./MultiColumnSortDialog-DkEgg_lY.js";import"./MenuTrigger-hlDUsPJn.js";import"./CompositeItem-C_PTfcmx.js";import"./ToolbarRootContext-CATQRVeE.js";import"./getDisabledMountTransitionStyles-CBkqgZFm.js";import"./getPseudoElementBounds-BqSDvjTD.js";import"./chevron-down-5k8pvBL_.js";import"./index-vYt4oG90.js";import"./error-CuQM1-tZ.js";import"./BaseCbacBanner-BDhY3mYb.js";import"./makeExternalStore-CH14MzlW.js";import"./Tooltip-BTJQl-Kl.js";import"./isObject-D93Vzkd_.js";import"./debounce-BbpvLq-c.js";import"./tick-CbRcQjZj.js";import"./DropdownField-BGcI4SWd.js";import"./isEqual-CFExKmCm.js";import"./_baseIsEqual-O2ApXnqd.js";import"./withOsdkMetrics-CQaJkAGj.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />`}}},render:t=>{const T=g()(i).where({jobProfile:"Marketing Manager"});return r.jsx("div",{className:"object-table-container",style:{height:"600px"},children:r.jsx(b,{...t,objectType:i,objectSet:T})})},play:async({canvasElement:t})=>{const e=d(t);await e.findAllByText("Marketing Manager"),await n(e.getAllByText("Marketing Manager").length).toBeGreaterThan(1),await n(e.queryByText("Content Manager")).not.toBeInTheDocument()}},o={args:{objectType:u},parameters:{docs:{description:{story:"Pass an interface type instead of an object type. The table shows the interface's properties (email, name, employeeNumber) and any object implementing the interface will be displayed."},source:{code:`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />`}}},render:t=>r.jsx("div",{className:"object-table-container",style:{height:"600px"},children:r.jsx(b,{...t})}),play:async({canvasElement:t})=>{const e=d(t);await e.findByText(h),await n(e.getByText("Name")).toBeInTheDocument(),await n(e.getByText("Email")).toBeInTheDocument()}};var c,s,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      source: {
        code: \`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />\`
      }
    }
  },
  render: args => {
    const client = useOsdkClient();
    const employeeObjectSet = client(Employee).where({
      jobProfile: "Marketing Manager"
    });
    return <div className="object-table-container" style={{
      height: "600px"
    }}>
        <ObjectTable {...args} objectType={Employee} objectSet={employeeObjectSet} />
      </div>;
  },
  // The object set is filtered to \`jobProfile: "Marketing Manager"\`
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Wait for the (MSW-mocked) rows to load.
    await canvas.findAllByText("Marketing Manager");
    await expect(canvas.getAllByText("Marketing Manager").length).toBeGreaterThan(1);
    await expect(canvas.queryByText("Content Manager")).not.toBeInTheDocument();
  }
}`,...(m=(s=a.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var p,l,y;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    objectType: WorkerInterface as unknown as typeof Employee
  },
  parameters: {
    docs: {
      description: {
        story: "Pass an interface type instead of an object type. The table shows the interface's " + "properties (email, name, employeeNumber) and any object implementing the interface " + "will be displayed."
      },
      source: {
        code: \`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // The interface exposes name/email/employeeNumber; objects implementing it
  // (Employees) render with those mapped properties (name ← fullName).
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Interface "name" maps to the Employee's fullName.
    await canvas.findByText(TARGET_DATA);

    // The interface's columns are shown by their display names.
    await expect(canvas.getByText("Name")).toBeInTheDocument();
    await expect(canvas.getByText("Email")).toBeInTheDocument();
  }
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};
