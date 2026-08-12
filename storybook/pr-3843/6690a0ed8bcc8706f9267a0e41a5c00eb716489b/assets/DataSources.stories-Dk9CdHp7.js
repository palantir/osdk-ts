import{j as r}from"./iframe-BrhV0PUK.js";import{O as b}from"./object-table-Z4cmqtj5.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DZs9BrwV.js";import{u as g}from"./useOsdkClient-BYy0RPqe.js";import"./preload-helper-DCSdbV6c.js";import"./Table-Bz5nJ9Ny.js";import"./index-CYSE8e1n.js";import"./Dialog-BZ4hSjWa.js";import"./cross-CsjK0wnB.js";import"./svgIconContainer-BaPcQU1s.js";import"./useBaseUiId-ar5Lsdrx.js";import"./InternalBackdrop-DO2ikwN0.js";import"./composite-Ds9WVBvD.js";import"./index-CF0KaaTI.js";import"./index-C_GiEd2c.js";import"./index-BYkfd9Z2.js";import"./useEventCallback-DS55l13S.js";import"./SkeletonBar-BWicLY9L.js";import"./LoadingCell-C3tlvEjv.js";import"./ColumnConfigDialog-Bg4tV_Z3.js";import"./DraggableList-TdP2A-Xp.js";import"./search-sMra4T2I.js";import"./Input-DMkARyQa.js";import"./useControlled-6A1CqUP6.js";import"./isEqual-BlP1cLoz.js";import"./isObject-CbbeAem9.js";import"./Button-D7_ffq5-.js";import"./ActionButton-U-WlZ3SG.js";import"./Checkbox-CMJOfmnq.js";import"./useValueChanged-Bnxfc6U1.js";import"./CollapsiblePanel-E470J13C.js";import"./MultiColumnSortDialog-DKnzOvLW.js";import"./MenuTrigger-WGUempeG.js";import"./CompositeItem-wFOdGMSc.js";import"./ToolbarRootContext-Db_LnSee.js";import"./getDisabledMountTransitionStyles-BlAu_peX.js";import"./getPseudoElementBounds-BZ7D0NBY.js";import"./chevron-down-Be_vCZl2.js";import"./index-BoJTlJdl.js";import"./error-ZZJFbw6u.js";import"./BaseCbacBanner-Bw9MfsJv.js";import"./makeExternalStore-DaqSmfhW.js";import"./Tooltip-6rvPTKBG.js";import"./PopoverPopup-Bzkl8xuj.js";import"./toNumber-DTQ1Vb4r.js";import"./tick-D16kJw8f.js";import"./DropdownField-DUfUJeW4.js";import"./withOsdkMetrics-dDB_t-WN.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
