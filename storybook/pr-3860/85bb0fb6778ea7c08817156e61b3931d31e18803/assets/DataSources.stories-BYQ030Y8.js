import{j as r}from"./iframe-NiFGfRsz.js";import{O as b}from"./object-table-Co0kMHVr.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DqsMUJt1.js";import{u as g}from"./useOsdkClient-BQHNmPmn.js";import"./preload-helper-DCFXQM4X.js";import"./Table-D9-6YVBO.js";import"./index-Dp7XOyO-.js";import"./Dialog-DajmNvWm.js";import"./cross-CFFQ0sQ5.js";import"./svgIconContainer-B-51rSqm.js";import"./useBaseUiId-BZ0T_Y09.js";import"./InternalBackdrop-DAi-KTzQ.js";import"./composite-DizwB12a.js";import"./index-vXDAK5tU.js";import"./index-BN_cMd1l.js";import"./index-cWSUoc8b.js";import"./useEventCallback-tF3gctSP.js";import"./SkeletonBar-BlLnyVx8.js";import"./LoadingCell-B6hvHZ1V.js";import"./ColumnConfigDialog-BfgxV-wF.js";import"./DraggableList-CPfbGln-.js";import"./search-X81DnpVg.js";import"./Input-gKc9tvRQ.js";import"./useControlled-BmoBTadd.js";import"./Button-D8xL5lB5.js";import"./small-cross-CeI0m1pY.js";import"./ActionButton-CfUr3RjE.js";import"./Checkbox-BOLEvp6U.js";import"./useValueChanged-B2_iof2Z.js";import"./CollapsiblePanel-BYCYtPW9.js";import"./MultiColumnSortDialog-NC5qXB_v.js";import"./MenuTrigger-q94kD1PH.js";import"./CompositeItem-bzaX9daE.js";import"./ToolbarRootContext-CC3NWZjB.js";import"./getDisabledMountTransitionStyles-BUiwQ7FC.js";import"./getPseudoElementBounds-CBkbD7R-.js";import"./chevron-down-h41veWCf.js";import"./index-kWkA5eh9.js";import"./error-CZNtpaf8.js";import"./BaseCbacBanner-BISX0EDQ.js";import"./makeExternalStore-jd4qdjld.js";import"./Tooltip-DHIqFccA.js";import"./PopoverPopup-B4aC61JR.js";import"./toNumber-CVExGNiV.js";import"./tick-BD0BHmQw.js";import"./DropdownField-Cz9pU8vl.js";import"./withOsdkMetrics-DdyqXqjN.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,Te={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
