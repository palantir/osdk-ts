import{j as r}from"./iframe-CKmaUc-O.js";import{O as b}from"./object-table-CRq62ily.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DGfKHGU_.js";import{u as g}from"./useOsdkClient-f9FemdTv.js";import"./preload-helper-CscS6U7X.js";import"./Table-DVRQ-sPW.js";import"./index-CMcZnLz6.js";import"./Dialog-DNkjnae2.js";import"./cross-BALXh9IB.js";import"./svgIconContainer-CegWez8t.js";import"./useBaseUiId-DsDyRBiU.js";import"./InternalBackdrop-SJx0AGfQ.js";import"./composite-C562XDt6.js";import"./index-CIKf3xy6.js";import"./index-BF7pzJIv.js";import"./index-Ka4ymreY.js";import"./useEventCallback-eYCSyrAU.js";import"./SkeletonBar-GS2ZmJl1.js";import"./LoadingCell-B3NoxlTE.js";import"./ColumnConfigDialog-Bgys4H3m.js";import"./DraggableList-CsIjoI6-.js";import"./search-B7xiKcCh.js";import"./Input-XPh25gf6.js";import"./useControlled-DVLJsOQ5.js";import"./Button-DLg7_PpI.js";import"./small-cross-Dl7lp_Ey.js";import"./ActionButton-CydCOtLn.js";import"./Checkbox-DHJNj8N9.js";import"./useValueChanged-Dt88yFTw.js";import"./CollapsiblePanel-DoBfbSRB.js";import"./MultiColumnSortDialog-D4tUSbul.js";import"./MenuTrigger-DWmokvBm.js";import"./CompositeItem-1GI0eeCe.js";import"./ToolbarRootContext-D4A7F4rM.js";import"./getDisabledMountTransitionStyles-6j8GTRV3.js";import"./getPseudoElementBounds-ByMpPU3O.js";import"./chevron-down-B6FJc6l4.js";import"./index-Bn4FIY15.js";import"./error-CuBhF1J1.js";import"./BaseCbacBanner-eO_zya7z.js";import"./makeExternalStore-XgONOm1-.js";import"./Tooltip-ETl6TcVi.js";import"./PopoverPopup-Xkx8d3Rm.js";import"./toNumber-DcvlfLHl.js";import"./tick-CyHVd6Ks.js";import"./DropdownField-1f0jHJ9c.js";import"./withOsdkMetrics-DyRjXdKi.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,Te={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const je=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,je as __namedExportsOrder,Te as default};
