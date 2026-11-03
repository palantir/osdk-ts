import{j as r}from"./iframe-DdFNuve9.js";import{O as b}from"./object-table-DQTsbNm4.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-NCnoJtUg.js";import{u as g}from"./useOsdkClient-DWubOs8f.js";import"./preload-helper-BF0zHEQ9.js";import"./Table-B_ldMpC3.js";import"./index-COFBYoj0.js";import"./Dialog-CZKykb2z.js";import"./cross-B7UPksVb.js";import"./svgIconContainer-BqEjzz1q.js";import"./useBaseUiId-DrBZRYC3.js";import"./InternalBackdrop-B8Hewn_Z.js";import"./composite-C6KVf4LM.js";import"./index-CoKG21UB.js";import"./index-LHJitHOy.js";import"./index-D1P0vuc0.js";import"./useEventCallback-DY4RU0bI.js";import"./SkeletonBar-jb0OzX38.js";import"./LoadingCell-Bs4kfMYn.js";import"./ColumnConfigDialog-B8X5q4A3.js";import"./DraggableList-5BhBxM5G.js";import"./search-CL3Pgcnj.js";import"./Input-CnU8KDdl.js";import"./useControlled-S1lUya7y.js";import"./Button-iraM8Bjb.js";import"./small-cross-CdiQ7hdd.js";import"./ActionButton-BvxY4KIJ.js";import"./Checkbox-D2Qv3ic4.js";import"./useValueChanged-CEIVp2aj.js";import"./CollapsiblePanel-CjIgVUOq.js";import"./MultiColumnSortDialog-Ddd38VEM.js";import"./MenuTrigger-Bc8702_S.js";import"./CompositeItem-D3i9R6e9.js";import"./ToolbarRootContext-lq7yZP_w.js";import"./getDisabledMountTransitionStyles-B_So2Fld.js";import"./getPseudoElementBounds-DJL0g8Q1.js";import"./chevron-down-BQgLyWBH.js";import"./index-CWvJ-sqM.js";import"./error-BFEjzhDR.js";import"./BaseCbacBanner-BzE4b8i3.js";import"./makeExternalStore-C_cS4qu3.js";import"./Tooltip-DS6i2lfZ.js";import"./PopoverPopup-DSz7COAo.js";import"./debounce-D6YkW0bB.js";import"./tick-DllXzrp2.js";import"./DropdownField-CAgPW_N_.js";import"./isEqual-CIzLxBkl.js";import"./withOsdkMetrics-DBiHNDc8.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
