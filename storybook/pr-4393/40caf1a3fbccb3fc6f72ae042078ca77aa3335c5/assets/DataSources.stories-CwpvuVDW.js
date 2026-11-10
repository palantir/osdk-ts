import{j as r}from"./iframe-CfbjiUO2.js";import{O as b}from"./object-table-0X7ZW0yx.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BPF5q57T.js";import{u as g}from"./useOsdkClient-Cth9whbI.js";import"./preload-helper-9qFOutGb.js";import"./Table-Cq3Sqb6_.js";import"./index-DhEKv3k8.js";import"./Dialog-CdVAhUr7.js";import"./cross-CDv3c9ZT.js";import"./svgIconContainer-n1-XLaqe.js";import"./useBaseUiId-KkzZtg6c.js";import"./InternalBackdrop-Cj0yGS8w.js";import"./composite-BLsaDnsq.js";import"./index-DeN7WaWx.js";import"./index-Cdt2HnwD.js";import"./index-Vop21I5L.js";import"./useEventCallback-AK_04X0m.js";import"./SkeletonBar-o0aOuB0t.js";import"./LoadingCell-DnqoRZAo.js";import"./ColumnConfigDialog-oUPR49Lo.js";import"./DraggableList-BHuI1GyK.js";import"./search-BvtxNbE5.js";import"./Input-C6r2dONX.js";import"./useControlled-NF1yqRGY.js";import"./Button-BVuGahtR.js";import"./small-cross-CUl6D4zD.js";import"./ActionButton-Dc4Qt7pU.js";import"./Checkbox-YLRlOnRM.js";import"./useValueChanged-Bsmvo0qV.js";import"./CollapsiblePanel-B5IJejoA.js";import"./MultiColumnSortDialog-Dkz6CRLS.js";import"./MenuTrigger-DWA6dgqe.js";import"./CompositeItem-CXj7-nx_.js";import"./ToolbarRootContext-DEszTe9o.js";import"./getDisabledMountTransitionStyles-ApLJ3Lvx.js";import"./getPseudoElementBounds-C6fv_0nX.js";import"./chevron-down-7jPpylX5.js";import"./index-Bv3dL3pD.js";import"./error-CdqVFWE7.js";import"./BaseCbacBanner-Cnu_4zKu.js";import"./makeExternalStore-bIg36UO0.js";import"./Tooltip-79oqwAuG.js";import"./PopoverPopup-Bb7fveQO.js";import"./debounce-aqSqiTwE.js";import"./tick-CrjnM-Na.js";import"./DropdownField-C41H6ZVs.js";import"./isEqual-3dKwApqB.js";import"./withOsdkMetrics-1iZQrA2_.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const fe=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,fe as __namedExportsOrder,je as default};
