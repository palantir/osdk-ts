import{j as r}from"./iframe-J2J3YjE0.js";import{O as b}from"./object-table-CM_J-_4H.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CQlLqQSC.js";import{u as g}from"./useOsdkClient-CymuhabP.js";import"./preload-helper-DSYd8WXZ.js";import"./Table-Cw2yfldV.js";import"./index-BE32fXoe.js";import"./Dialog-Cii-cuRI.js";import"./cross-BUvQ63LS.js";import"./svgIconContainer-DBFfWUAc.js";import"./useBaseUiId-B5sE9yG5.js";import"./InternalBackdrop-BtDoipoP.js";import"./composite-lU6DBoNY.js";import"./index-Cm0SXZ2J.js";import"./index-CIPMrj_t.js";import"./index-DMjr37OC.js";import"./useEventCallback-xXkmYxnE.js";import"./SkeletonBar-Bl4uTwbL.js";import"./LoadingCell-D9RGNs2z.js";import"./ColumnConfigDialog-DfqTinFZ.js";import"./DraggableList-CuF55wpC.js";import"./search-BPhUZmyj.js";import"./Input-Cf887hhU.js";import"./useControlled-DPJfrFUK.js";import"./isEqual-Cis8o_Aq.js";import"./isObject-DgpSn9uj.js";import"./Button-DUn4JLDk.js";import"./ActionButton-COpXEK9s.js";import"./Checkbox-D7BE7lQJ.js";import"./useValueChanged-DSXfrb5B.js";import"./CollapsiblePanel-q-0v4uOT.js";import"./MultiColumnSortDialog-BIGBffeM.js";import"./MenuTrigger-BDeWypFN.js";import"./CompositeItem-fqkCbF8k.js";import"./ToolbarRootContext-DjaLauMl.js";import"./getDisabledMountTransitionStyles-C3z6f6ys.js";import"./getPseudoElementBounds-DOHlHTJk.js";import"./chevron-down-BIUs-Nx1.js";import"./index-CpYQjE-4.js";import"./error-BkUEB81u.js";import"./BaseCbacBanner-ChZtpJcU.js";import"./makeExternalStore-DXZk6z9e.js";import"./Tooltip-CVoKdfvR.js";import"./PopoverPopup-DKjF0w-d.js";import"./toNumber-BNj2hc5a.js";import"./tick-C4OBoyql.js";import"./DropdownField-BD0qZeCh.js";import"./withOsdkMetrics-BiH7dj1l.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
