import{j as r}from"./iframe-Djf7Pdxr.js";import{O as b}from"./object-table-DFZPT3wI.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BNEWRs11.js";import{u as g}from"./useOsdkClient-Crp_QmkC.js";import"./preload-helper-bqmPmNVM.js";import"./Table-CUYanXua.js";import"./index-q-X2FPlx.js";import"./Dialog-CqoD48et.js";import"./cross-DFIWw1bP.js";import"./svgIconContainer-BOlRpQyp.js";import"./useBaseUiId-CFhAQZOZ.js";import"./InternalBackdrop-CkSj7F1A.js";import"./composite-IAQwOYh1.js";import"./index-Br-LNr6E.js";import"./index-B_8x8Udt.js";import"./index-LG6ddP-y.js";import"./useEventCallback-B4USqeZP.js";import"./SkeletonBar-Di0gRprg.js";import"./LoadingCell-nhC1WRnp.js";import"./ColumnConfigDialog-qIiF7Qmm.js";import"./DraggableList-B59aQ1_o.js";import"./search-Ddeiu8tt.js";import"./Input-BOeBxQZ8.js";import"./useControlled-DBGPJ9YV.js";import"./Button-DSU1CbLm.js";import"./small-cross-DLOt1VKh.js";import"./ActionButton-Deev-KTG.js";import"./Checkbox-CwEaVyEP.js";import"./useValueChanged-BePRkA2B.js";import"./CollapsiblePanel-CfVuO8FY.js";import"./MultiColumnSortDialog-DwWScOiH.js";import"./MenuTrigger-CRUWzkdL.js";import"./CompositeItem-CA-IJTMc.js";import"./ToolbarRootContext-DMoWDH_V.js";import"./getDisabledMountTransitionStyles-DC6748tP.js";import"./getPseudoElementBounds-CrTEc-vZ.js";import"./chevron-down-CuR5Ei1Z.js";import"./index-3wqM3UEs.js";import"./error-D2_XhANl.js";import"./BaseCbacBanner-5-cpvsaG.js";import"./makeExternalStore-D2eKyzGX.js";import"./Tooltip-B7UeItRk.js";import"./PopoverPopup-aCIXJynx.js";import"./debounce-Dwy6RrjG.js";import"./tick-CwOgbQYe.js";import"./DropdownField-BbRr8BI8.js";import"./isEqual-BXTqGgF_.js";import"./withOsdkMetrics-Bs-xSy0E.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
