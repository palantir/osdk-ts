import{j as r}from"./iframe-DFW0mMZ1.js";import{O as b}from"./object-table-R7dnPyqi.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DL_AB-8D.js";import{u as g}from"./useOsdkClient-DekGKRLB.js";import"./preload-helper-Qawhc3UJ.js";import"./Table-DGsPlPM-.js";import"./index-o6yCYR6Q.js";import"./Dialog-C851Z3bl.js";import"./cross-BkPI5BMI.js";import"./svgIconContainer-VOBSJ15n.js";import"./useBaseUiId-CXLWSjxr.js";import"./InternalBackdrop-CuZzUJfU.js";import"./composite-C9QpehYt.js";import"./index-Ntq27F76.js";import"./index-CJTfQw-N.js";import"./index-COaiIhBP.js";import"./useEventCallback-CNw5BQ-r.js";import"./SkeletonBar-DShy_z54.js";import"./LoadingCell-gwaRAxxy.js";import"./ColumnConfigDialog-BSY2ydJx.js";import"./DraggableList-DklvKyYU.js";import"./search-B2NWGFRm.js";import"./Input-Bw8rrVtq.js";import"./useControlled-CgydVt6m.js";import"./Button-6FT0QBh6.js";import"./small-cross-B_2v8d0f.js";import"./ActionButton-v9LYexkg.js";import"./Checkbox-vEixf8ZR.js";import"./useValueChanged-Dudyqn1D.js";import"./CollapsiblePanel-qGqB2tFy.js";import"./MultiColumnSortDialog-DwG_JyW0.js";import"./MenuTrigger-BxsGm8l-.js";import"./CompositeItem-CKYwdTed.js";import"./ToolbarRootContext-BwtTYckl.js";import"./getDisabledMountTransitionStyles-C9arfdOC.js";import"./getPseudoElementBounds-Ds-CW1SQ.js";import"./chevron-down-s8opNKgU.js";import"./index-B7I1fXI4.js";import"./error-B3Dge2Yv.js";import"./BaseCbacBanner-Bo49Hg5y.js";import"./makeExternalStore-DQcTHSYH.js";import"./Tooltip-BX7Zc18a.js";import"./PopoverPopup-CzvtrhU_.js";import"./debounce-OIwexpuG.js";import"./tick-DsrTm1u4.js";import"./DropdownField-UijvkKFV.js";import"./isEqual-DYRLDjBa.js";import"./withOsdkMetrics-CjCOoV_f.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
