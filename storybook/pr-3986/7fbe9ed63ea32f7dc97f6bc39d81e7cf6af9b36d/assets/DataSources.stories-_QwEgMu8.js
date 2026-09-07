import{j as r}from"./iframe-NrfGywpz.js";import{O as b}from"./object-table-CSBOnXso.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-4Jj_4ndM.js";import{u as g}from"./useOsdkClient-DsjVhBsW.js";import"./preload-helper-B_PzSpqk.js";import"./Table-yN6i7lAP.js";import"./index-B4J3JGGr.js";import"./Dialog-C2AOq1lk.js";import"./cross-Caw6Pz43.js";import"./svgIconContainer-Cgk6hNay.js";import"./useBaseUiId-DgnEpncS.js";import"./InternalBackdrop-DwTNI5Cd.js";import"./composite-DA8gx3Og.js";import"./index-D-R7Oq4i.js";import"./index-ALjvoOKD.js";import"./index-D3KOsz6o.js";import"./useEventCallback-DGcpXBNW.js";import"./SkeletonBar-DEllJNlP.js";import"./LoadingCell-B5rJAwI5.js";import"./ColumnConfigDialog-5mgHcV2b.js";import"./DraggableList-mQAKFBz7.js";import"./search-DU1IM6NB.js";import"./Input-CCWHU-92.js";import"./useControlled-DTlMTcYw.js";import"./Button-DIZaR5tq.js";import"./small-cross-CqGyxp_N.js";import"./ActionButton-CKkZcYry.js";import"./Checkbox-CIZsMWNA.js";import"./useValueChanged-DybLxmI0.js";import"./CollapsiblePanel-CdmC8pOd.js";import"./MultiColumnSortDialog-NTJeK39Q.js";import"./MenuTrigger-D7_F68sm.js";import"./CompositeItem-DkX84chI.js";import"./ToolbarRootContext-DXSxTdJI.js";import"./getDisabledMountTransitionStyles-z6rzoWNn.js";import"./getPseudoElementBounds-ButHWGJx.js";import"./chevron-down-Cswe4CW9.js";import"./index-hEzcpiCN.js";import"./error-DaUrBpBS.js";import"./BaseCbacBanner-CN69LqS-.js";import"./makeExternalStore-D2ri9UvN.js";import"./Tooltip-DpVDM5M6.js";import"./PopoverPopup-hYgPs6_l.js";import"./debounce-CsnCNeb8.js";import"./tick-ZKA2ZAhf.js";import"./DropdownField-CuIAd7EW.js";import"./isEqual-BuonFklC.js";import"./withOsdkMetrics-5_2pgCwu.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
