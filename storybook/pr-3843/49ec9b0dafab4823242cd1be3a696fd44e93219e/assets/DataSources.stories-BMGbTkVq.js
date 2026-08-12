import{j as r}from"./iframe-BkwEqmSq.js";import{O as b}from"./object-table-TH5w0ohv.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DcyYSJF7.js";import{u as g}from"./useOsdkClient-CUzqemF4.js";import"./preload-helper-MCr5wq_M.js";import"./Table-XAj1eNJ_.js";import"./index-DVW2Aiqe.js";import"./Dialog-CNJAJjh6.js";import"./cross-B56sfghs.js";import"./svgIconContainer-CB5tgpNi.js";import"./useBaseUiId-CVhcNOwH.js";import"./InternalBackdrop-BW_Fh5ka.js";import"./composite-DEnckzcf.js";import"./index-CcQ72eda.js";import"./index-DRtYq8s7.js";import"./index-R9Q-yxnj.js";import"./useEventCallback-mxsKsguF.js";import"./SkeletonBar-zrDLmD62.js";import"./LoadingCell-CSxVDz4m.js";import"./ColumnConfigDialog-DBfPfDSr.js";import"./DraggableList-2eAIh112.js";import"./search-DHn2yg3a.js";import"./Input-BtbblvMI.js";import"./useControlled-Tz_Ckt-9.js";import"./isEqual-CkRoP2e3.js";import"./isObject-CjPaUCcr.js";import"./Button-BQo7qXQ1.js";import"./ActionButton-B57iWbGd.js";import"./Checkbox-Cv3GRsWI.js";import"./useValueChanged-CO42ZUx-.js";import"./CollapsiblePanel-vCFw-oDK.js";import"./MultiColumnSortDialog-Bzkmnwn_.js";import"./MenuTrigger-kgTyu6wu.js";import"./CompositeItem-B2o5Yurs.js";import"./ToolbarRootContext-Cf2pD7ow.js";import"./getDisabledMountTransitionStyles-CgyOu_YU.js";import"./getPseudoElementBounds-BI5Djy6Y.js";import"./chevron-down-OyX7j9kx.js";import"./index-DOxRJGP0.js";import"./error-BxIC2Wcp.js";import"./BaseCbacBanner-OOsF9RDB.js";import"./makeExternalStore-SZ3-wHy1.js";import"./Tooltip-WAe8FeGa.js";import"./PopoverPopup-7nXi6RKO.js";import"./toNumber-CZtIvmY8.js";import"./tick-D3FOvlN4.js";import"./DropdownField-CWFIhDoe.js";import"./withOsdkMetrics-B6cmau_u.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
