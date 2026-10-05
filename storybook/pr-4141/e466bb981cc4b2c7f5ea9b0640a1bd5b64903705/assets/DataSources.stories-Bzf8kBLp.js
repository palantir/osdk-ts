import{j as r}from"./iframe-70ZuGjkJ.js";import{O as b}from"./object-table-BBc3Fn8T.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DWQt5WSM.js";import{u as g}from"./useOsdkClient-D5Q8UXIy.js";import"./preload-helper-DK4xKHY4.js";import"./Table-aU-H_NwX.js";import"./index-CckhOj8-.js";import"./Dialog-Ct-6ZDgi.js";import"./cross-CO8zitM2.js";import"./svgIconContainer-CtTs4nyb.js";import"./useBaseUiId-CqgzcpTd.js";import"./InternalBackdrop-BAIsbWIF.js";import"./composite-E4mw46H8.js";import"./index-C6_lfWdp.js";import"./index-CDzhFE3P.js";import"./index-CPgNI8HV.js";import"./useEventCallback-Cl-1X7df.js";import"./SkeletonBar-t3va8Dsz.js";import"./LoadingCell-DR2MUXbF.js";import"./ColumnConfigDialog-B1vOObiT.js";import"./DraggableList-DZlKofNL.js";import"./search-_UcRnrjw.js";import"./Input-sBtVPl75.js";import"./useControlled-0e2XrUt8.js";import"./Button-D2KYgMT_.js";import"./small-cross-CYwlKW4r.js";import"./ActionButton-B4h22XNy.js";import"./Checkbox-C8sqlJMk.js";import"./useValueChanged-CQFhtmgn.js";import"./CollapsiblePanel-2ZNF-ZYn.js";import"./MultiColumnSortDialog-aAcEJHDq.js";import"./MenuTrigger-_GYM6HPo.js";import"./CompositeItem-A9SMjz1N.js";import"./ToolbarRootContext-DmAs8e4b.js";import"./getDisabledMountTransitionStyles-DjkGWHfc.js";import"./getPseudoElementBounds-CmYlGZ2P.js";import"./chevron-down-BPIjaHnC.js";import"./index-C1hIfcQ2.js";import"./error-Ho0rrjia.js";import"./BaseCbacBanner-ASzHDe0B.js";import"./makeExternalStore-Vi6b8A7J.js";import"./Tooltip-I-YOK7jy.js";import"./PopoverPopup-Cy9eVAix.js";import"./debounce-B50OUnXf.js";import"./tick-eYRv4TLQ.js";import"./DropdownField-B1h3MVUP.js";import"./isEqual-Cp8PtEv6.js";import"./withOsdkMetrics-DyYS57kA.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
