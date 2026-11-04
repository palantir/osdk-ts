import{j as r}from"./iframe-BlJB-hqv.js";import{O as b}from"./object-table-Dx1_sm97.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CODx54U8.js";import{u as g}from"./useOsdkClient-DYR-Y9ga.js";import"./preload-helper-AMj6u5EH.js";import"./Table-BX9S7ZEB.js";import"./index-B5X20bPi.js";import"./Dialog-ByzDHqcR.js";import"./cross-DteZeQw8.js";import"./svgIconContainer-LeVtNk5w.js";import"./useBaseUiId-D_Y5M0eI.js";import"./InternalBackdrop-CnwxfMrX.js";import"./composite-DR-h0Lzn.js";import"./index-8mNQJ1FG.js";import"./index-BqrWcgCk.js";import"./index-DVOW4T_z.js";import"./useEventCallback-C5iZzYF4.js";import"./SkeletonBar-CHb4nNBx.js";import"./LoadingCell-B3nzhONR.js";import"./ColumnConfigDialog-ClVyxpxj.js";import"./DraggableList-CSu-P_zf.js";import"./search-VsI7BQQc.js";import"./Input-DoCeanz4.js";import"./useControlled-CETXoNMf.js";import"./Button-bd2H5948.js";import"./small-cross-CpwYw5hd.js";import"./ActionButton-DPyl9ZnK.js";import"./Checkbox-3vpggLtq.js";import"./useValueChanged-BP2yugp1.js";import"./CollapsiblePanel-1SWkbhUw.js";import"./MultiColumnSortDialog-BJARPMsx.js";import"./MenuTrigger-LXD8Yc6w.js";import"./CompositeItem-BMH16CTX.js";import"./ToolbarRootContext-Br80IfNP.js";import"./getDisabledMountTransitionStyles-D0uVHRDQ.js";import"./getPseudoElementBounds-DnmAl4RP.js";import"./chevron-down-CGFUoA8B.js";import"./index-CEuYTBSI.js";import"./error-DWdskqLp.js";import"./BaseCbacBanner-etN_nGS3.js";import"./makeExternalStore-CrrUaLlQ.js";import"./Tooltip-M7jHN8Vr.js";import"./PopoverPopup-BJoZOrql.js";import"./debounce-Cy2hjM5h.js";import"./tick-Cjvc8nAS.js";import"./DropdownField-DOhdXC82.js";import"./isEqual-DU3uQxt6.js";import"./withOsdkMetrics-BbC1R7NS.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
