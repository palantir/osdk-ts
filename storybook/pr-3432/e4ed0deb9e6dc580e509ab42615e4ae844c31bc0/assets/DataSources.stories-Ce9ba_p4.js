import{j as r}from"./iframe-w9F8Brjw.js";import{O as b}from"./object-table-B20ii03U.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BnMXSpKb.js";import{u as g}from"./useOsdkClient-DM5pv681.js";import"./preload-helper-gOuIvRG0.js";import"./Table-D6xWvbkx.js";import"./index-BX6-ktEu.js";import"./Dialog-4zHFT5hi.js";import"./cross-Bsja6aaP.js";import"./svgIconContainer-52lfJd2c.js";import"./useBaseUiId-C3CWNnun.js";import"./InternalBackdrop-DWe5YV-b.js";import"./composite-DJjHoSCt.js";import"./index-CuwPgqye.js";import"./index-DeR9tbl3.js";import"./index-XFCS0tZr.js";import"./useEventCallback-BRjx0IL1.js";import"./SkeletonBar-ib1NEa7A.js";import"./LoadingCell-Dre-6LuM.js";import"./ColumnConfigDialog-Nirjm6-T.js";import"./DraggableList-CE3kxa99.js";import"./search-CJlgZYNJ.js";import"./Input-BI7HWStD.js";import"./useControlled-1YClOBeG.js";import"./Button-C0Dxr-Rp.js";import"./small-cross-Xk1Ycd4l.js";import"./ActionButton-CtedR1c9.js";import"./Checkbox-B0jqNeGa.js";import"./useValueChanged-mPynHNuh.js";import"./CollapsiblePanel-aj87wu0f.js";import"./MultiColumnSortDialog-D1DBA-gw.js";import"./MenuTrigger-BlnZU8w2.js";import"./CompositeItem-CaktBZ-x.js";import"./ToolbarRootContext-CPJg8Zy4.js";import"./getDisabledMountTransitionStyles-DbidhjV6.js";import"./getPseudoElementBounds-DNWW3lak.js";import"./chevron-down-alluwZla.js";import"./index-yG1LfRf4.js";import"./error-rgHAMUMi.js";import"./BaseCbacBanner-CVYQc2Pt.js";import"./makeExternalStore-BPJfeWP7.js";import"./Tooltip-D4WB2rF9.js";import"./PopoverPopup-Ce3dI16V.js";import"./debounce-Ckhswbkw.js";import"./tick-DO8XqzsE.js";import"./DropdownField-BXhKp9ja.js";import"./isEqual-DxnFqG6z.js";import"./withOsdkMetrics-Brc0TCIF.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
