import{j as r}from"./iframe-IwlSs7RL.js";import{O as b}from"./object-table-AK6fHNOe.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D5O8573A.js";import{u as g}from"./useOsdkClient-uiW7fCDT.js";import"./preload-helper-BSkCOlkQ.js";import"./Table-D6HHCJDL.js";import"./index-DubGe8n8.js";import"./Dialog-BBO-25m3.js";import"./cross-QYKhi7EM.js";import"./svgIconContainer-CxRFzvkj.js";import"./useBaseUiId-C6iBuDel.js";import"./InternalBackdrop-BWGQR3TW.js";import"./composite-BhDLSWJq.js";import"./index-Dtiq40Ku.js";import"./index-rVQQDG8n.js";import"./index-BEos1GHD.js";import"./useEventCallback-BemiPLPr.js";import"./SkeletonBar-BPC0qN3Q.js";import"./LoadingCell-Dc-t-6nm.js";import"./ColumnConfigDialog-lKzGqNSt.js";import"./DraggableList-CBvV7F9-.js";import"./search-B6kXKBbQ.js";import"./Input-DEK2jxOA.js";import"./useControlled-DHwVcrm_.js";import"./Button-v4BAXuzD.js";import"./small-cross-B6mridJu.js";import"./ActionButton-Y64s_uGz.js";import"./Checkbox-wH661C2t.js";import"./useValueChanged-CjTe9a5Y.js";import"./CollapsiblePanel-BNhx1-ML.js";import"./MultiColumnSortDialog-B6zldfza.js";import"./MenuTrigger-BDrTtgQd.js";import"./CompositeItem-Co7hhhjf.js";import"./ToolbarRootContext-C2NTNe0y.js";import"./getDisabledMountTransitionStyles-DW2b3ONx.js";import"./getPseudoElementBounds-x9ioFWs9.js";import"./chevron-down-DkOqeyC-.js";import"./index-Bu0grvIG.js";import"./error-IBUuPrgD.js";import"./BaseCbacBanner-Dfi6KiNH.js";import"./makeExternalStore-x7dSpV5j.js";import"./Tooltip-BgU0ufaQ.js";import"./PopoverPopup-CWcF5Zm_.js";import"./debounce-CwKNV3oF.js";import"./tick-Wvwlz1Gi.js";import"./DropdownField-Bilyp8Md.js";import"./isEqual-C45zizx2.js";import"./withOsdkMetrics-DC0QMqM3.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
