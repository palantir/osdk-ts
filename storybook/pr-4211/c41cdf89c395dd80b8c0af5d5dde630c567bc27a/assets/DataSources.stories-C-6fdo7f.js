import{j as r}from"./iframe-VyYU4_vz.js";import{O as b}from"./object-table-qLQNuHCM.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DNLIblAn.js";import{u as g}from"./useOsdkClient-Yo8cLSm5.js";import"./preload-helper-BuqLdsok.js";import"./Table-D9gw01TB.js";import"./index-Ds9RaOEw.js";import"./Dialog-BYVV7Vxz.js";import"./cross-B8BSPVsW.js";import"./svgIconContainer-RHuD6B4X.js";import"./useBaseUiId-oAJGM4T3.js";import"./InternalBackdrop-Ks9C_KBp.js";import"./composite-D-GMalcD.js";import"./index-DGfEWUId.js";import"./index-CIaumvnO.js";import"./index-8WSLTY8y.js";import"./useEventCallback-LhuC7cwi.js";import"./SkeletonBar-pyPg3O_J.js";import"./LoadingCell-BTtjd3SD.js";import"./ColumnConfigDialog-Bawmc31o.js";import"./DraggableList-C2Qzt0AU.js";import"./search-Cp9T6kDH.js";import"./Input-Ck1mtXHC.js";import"./useControlled-DF-V1JcA.js";import"./Button-BO4-XA9w.js";import"./small-cross-BhR-tKKW.js";import"./ActionButton-BaZ1pakt.js";import"./Checkbox-ChTvZHXN.js";import"./useValueChanged-BlhavTes.js";import"./CollapsiblePanel-6lTx7MnB.js";import"./MultiColumnSortDialog-CLP9oSNu.js";import"./MenuTrigger-WG6WH2x9.js";import"./CompositeItem-BpcnF50U.js";import"./ToolbarRootContext-DNatahNZ.js";import"./getDisabledMountTransitionStyles-CZqTqyjY.js";import"./getPseudoElementBounds-CGw1_hUQ.js";import"./chevron-down-C6hF1wmk.js";import"./index-D3QHbtaM.js";import"./error-D4hrAgPV.js";import"./BaseCbacBanner-BlVyIN4U.js";import"./makeExternalStore-fugyGUCm.js";import"./Tooltip-BKVen5s5.js";import"./PopoverPopup-WQ_0bkhD.js";import"./debounce-C3KWhkea.js";import"./tick-Fs7Tv_3o.js";import"./DropdownField-BEcIoxEz.js";import"./isEqual-CuqG53Rd.js";import"./withOsdkMetrics-iTeYpiSH.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
