import{j as r}from"./iframe-BtrE9oAk.js";import{O as b}from"./object-table-D-m31t1G.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BG4AFja8.js";import{u as g}from"./useOsdkClient-Cng8MMf4.js";import"./preload-helper-Ck9jHBT4.js";import"./Table-BIBZ5jl8.js";import"./index-DTswWCN-.js";import"./Dialog-DKIHG2Ba.js";import"./cross-BpApkSFN.js";import"./svgIconContainer-CMgWIhhO.js";import"./useBaseUiId-DZ_AJh1G.js";import"./InternalBackdrop-DBd41QYf.js";import"./composite-DJfjq7Qz.js";import"./index-BiKdeyQ9.js";import"./index-DAqFPrmn.js";import"./index-B0IzT3xV.js";import"./useEventCallback-CRqKCUPu.js";import"./SkeletonBar-FkO2CaFD.js";import"./LoadingCell-b3e9No3V.js";import"./ColumnConfigDialog-D3psN8jr.js";import"./DraggableList-DHebKqrE.js";import"./search-DH4c7KHc.js";import"./Input-DP5nsCAr.js";import"./useControlled-BzxnQPZx.js";import"./Button-Dt_Nxhrh.js";import"./small-cross-BEsKiWDj.js";import"./ActionButton-D8YPh8JC.js";import"./Checkbox-CDub8AJh.js";import"./useValueChanged-BUerDF1m.js";import"./CollapsiblePanel-CVBxOGW4.js";import"./MultiColumnSortDialog-BK3bY81l.js";import"./MenuTrigger-n_2nDWz3.js";import"./CompositeItem-KY2ZDv1b.js";import"./ToolbarRootContext-CiVShHn0.js";import"./getDisabledMountTransitionStyles-BPDURfHU.js";import"./getPseudoElementBounds-DJUliXcW.js";import"./chevron-down-CGlt-RaH.js";import"./index-Bsvjejoj.js";import"./error-CWqhrvJ7.js";import"./BaseCbacBanner-BZjXIBV8.js";import"./makeExternalStore-iXyWkOaZ.js";import"./Tooltip-CLiO1emX.js";import"./isObject-BsxAo1Me.js";import"./debounce-nhdj0_a1.js";import"./tick-C2899HhT.js";import"./DropdownField-dLbZrCEg.js";import"./isEqual-Cq9_D6IN.js";import"./_baseIsEqual-jr9aZD60.js";import"./withOsdkMetrics-BliYF0M9.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
