import{j as r}from"./iframe-DNLO30Ww.js";import{O as b}from"./object-table-sgCBFiy6.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BSZWDOTZ.js";import{u as g}from"./useOsdkClient-BWnKxiQN.js";import"./preload-helper-DMPS02wq.js";import"./Table-CvdSvmR6.js";import"./index-BXPwi4ll.js";import"./Dialog-BZZOdUSR.js";import"./cross-DyXX2kzu.js";import"./svgIconContainer-BhTCIoRp.js";import"./useBaseUiId-BD76vFJo.js";import"./InternalBackdrop-CgHl6qqD.js";import"./composite-Dh6pm8eM.js";import"./index-ByST95mm.js";import"./index-SmrZ48_U.js";import"./index-D6M7-y6_.js";import"./useEventCallback-CqB29WRK.js";import"./SkeletonBar-Dzoc_fkT.js";import"./LoadingCell-C_ceOiHB.js";import"./ColumnConfigDialog-CjYS5qyG.js";import"./DraggableList-B3aeQJdM.js";import"./search-BPhsSIu0.js";import"./Input-ChfQp7iv.js";import"./useControlled-DrtjR5iX.js";import"./Button-G1G-2Ckd.js";import"./small-cross-BAGSfF0m.js";import"./ActionButton-DPUhH6Lo.js";import"./Checkbox-CZW1Pp-G.js";import"./useValueChanged-DCJA7BE8.js";import"./CollapsiblePanel-BPvxPRY4.js";import"./MultiColumnSortDialog-uD75VtMT.js";import"./MenuTrigger-Cz4PIlaQ.js";import"./CompositeItem-C2jJgszn.js";import"./ToolbarRootContext-CSBtcNyO.js";import"./getDisabledMountTransitionStyles-CaxoHLLt.js";import"./getPseudoElementBounds-C7vUDRr2.js";import"./chevron-down-DkxMLSoH.js";import"./index-DAQea2-r.js";import"./error-DXYf62L2.js";import"./BaseCbacBanner-aHxz9-6a.js";import"./makeExternalStore-DaD-3fW6.js";import"./Tooltip-BOZFqeeI.js";import"./PopoverPopup-Tdg4qabi.js";import"./debounce-spsT2235.js";import"./tick-BmhstWDK.js";import"./DropdownField-Cqy_ppKQ.js";import"./isEqual-2hh4sGtV.js";import"./withOsdkMetrics-CAvqvWGd.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
