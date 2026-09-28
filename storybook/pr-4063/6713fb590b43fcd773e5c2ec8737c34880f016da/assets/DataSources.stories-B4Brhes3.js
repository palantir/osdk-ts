import{j as r}from"./iframe-CGwmlW2r.js";import{O as b}from"./object-table-BdiaLjP_.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C7R1BQ_B.js";import{u as g}from"./useOsdkClient-Be2ZREGr.js";import"./preload-helper-CVIGiO6F.js";import"./Table-CqdlxWqq.js";import"./index-CjgswMxd.js";import"./Dialog-DOOox7qs.js";import"./cross-DQgNlB5k.js";import"./svgIconContainer-BTPb8DLH.js";import"./useBaseUiId-Bm2cFh6B.js";import"./InternalBackdrop-B-ry2Uvu.js";import"./composite-BJmQcV2t.js";import"./index-DxRKQXJQ.js";import"./index-CafwHe0h.js";import"./index-CgjmDikR.js";import"./useEventCallback-BiRgUSbg.js";import"./SkeletonBar-BMy2XXrH.js";import"./LoadingCell-BUTVej-9.js";import"./ColumnConfigDialog-Ch004eyC.js";import"./DraggableList-BAjeUcaG.js";import"./search-DcxUYSzD.js";import"./Input-pi6zEsGe.js";import"./useControlled-DsP0nmCG.js";import"./Button-DFUwv3AU.js";import"./small-cross-Dlo2xc3T.js";import"./ActionButton-Cqfuw1XW.js";import"./Checkbox-BRlEJGBQ.js";import"./useValueChanged-Bttiqhne.js";import"./CollapsiblePanel-Dbr7GgxQ.js";import"./MultiColumnSortDialog-C_hr8XYu.js";import"./MenuTrigger-CJM2cb2l.js";import"./CompositeItem-7T1omaB9.js";import"./ToolbarRootContext-CxtjwMoV.js";import"./getDisabledMountTransitionStyles-Do49NmND.js";import"./getPseudoElementBounds-DDUtEhAw.js";import"./chevron-down-CfoUsUUp.js";import"./index-Z2JS55l6.js";import"./error-CgUQsRwJ.js";import"./BaseCbacBanner-Cdi8VTcB.js";import"./makeExternalStore-B5u8APGM.js";import"./Tooltip-D5ZU9d0s.js";import"./PopoverPopup-ByMkl8rO.js";import"./debounce-ZyuHSE7w.js";import"./tick-DaMMKKEV.js";import"./DropdownField-B4moQZxn.js";import"./isEqual-CjASy58h.js";import"./withOsdkMetrics-DDzV_xju.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
