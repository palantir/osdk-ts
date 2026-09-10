import{j as r}from"./iframe-BlpejkzI.js";import{O as b}from"./object-table-ChJ31fZG.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DLfaNZqh.js";import{u as g}from"./useOsdkClient-CkQ9QpN3.js";import"./preload-helper-BA1cUfXb.js";import"./Table-PgtqjWX6.js";import"./index-CpPkHQnY.js";import"./Dialog-Doi--yEE.js";import"./cross-DiWsYg3r.js";import"./svgIconContainer-aKnF_69u.js";import"./useBaseUiId-BUVwvBQZ.js";import"./InternalBackdrop-DKB_eEnM.js";import"./composite-CdbN3ck3.js";import"./index-BdLU453s.js";import"./index-DVMy9f1T.js";import"./index-DOZcBLPY.js";import"./useEventCallback-BDK4Z8u2.js";import"./SkeletonBar-XgXRifQ0.js";import"./LoadingCell-BYMft5lE.js";import"./ColumnConfigDialog-mvsnwW1S.js";import"./DraggableList-v9pQbaC3.js";import"./search-IpDNvhGA.js";import"./Input-eoJV0GlP.js";import"./useControlled-CKCXNsan.js";import"./Button-DfGArVBU.js";import"./small-cross-CbD0uJgb.js";import"./ActionButton-mHtuKYOM.js";import"./Checkbox-DBxKcnus.js";import"./useValueChanged-CD7wCe1x.js";import"./CollapsiblePanel-Bxo4k_hM.js";import"./MultiColumnSortDialog-C5OH7rob.js";import"./MenuTrigger-DFA0EQYQ.js";import"./CompositeItem-D29vF932.js";import"./ToolbarRootContext-CBW-R_pU.js";import"./getDisabledMountTransitionStyles-Bq97lFh4.js";import"./getPseudoElementBounds-CclledTt.js";import"./chevron-down-DDoBjNkd.js";import"./index-CKx3u1TT.js";import"./error-CNoirV31.js";import"./BaseCbacBanner-BvjBpfm0.js";import"./makeExternalStore-CmmUlmnz.js";import"./Tooltip-B1OUttcu.js";import"./PopoverPopup-Bm6cnNyX.js";import"./debounce-7JU4VUDc.js";import"./tick-_qvOZWIW.js";import"./DropdownField-BsA-cNSp.js";import"./isEqual-BKVrBEvt.js";import"./withOsdkMetrics-CHL30NBG.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
