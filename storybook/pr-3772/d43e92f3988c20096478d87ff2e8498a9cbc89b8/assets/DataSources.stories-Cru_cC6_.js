import{j as r}from"./iframe-CUYHvNfN.js";import{O as b}from"./object-table-DrGBp4DX.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DhZcnt2T.js";import{u as g}from"./useOsdkClient-BQEFDs2E.js";import"./preload-helper-tFZfyB41.js";import"./Table-Ci_Ol0tX.js";import"./index-CZ6Ua3PK.js";import"./Dialog-uScMynOw.js";import"./cross-s4aUx31-.js";import"./svgIconContainer-IAPv6aZQ.js";import"./useBaseUiId-eg1Lg5JC.js";import"./InternalBackdrop-Cur2i6RC.js";import"./composite-DN1Fq3ZM.js";import"./index-BYkORrIW.js";import"./index-Y2zZPE2J.js";import"./index-ZjqTklcj.js";import"./useEventCallback-DyIer7gt.js";import"./SkeletonBar-DZPPGB8l.js";import"./LoadingCell-Zdm3xRwY.js";import"./ColumnConfigDialog-CKfvEO-s.js";import"./DraggableList-vUUsBjlu.js";import"./search-DPxb-PyW.js";import"./Input-DGyagt2e.js";import"./useControlled-CPWUvLNJ.js";import"./Button-BjUF2wxD.js";import"./small-cross-CUJfuqdj.js";import"./ActionButton-B7SOf25_.js";import"./Checkbox-B_FjLsKV.js";import"./useValueChanged-UoQ6tBed.js";import"./CollapsiblePanel-B8lwZmSu.js";import"./MultiColumnSortDialog-D5jORJfI.js";import"./MenuTrigger-gbiYyiHU.js";import"./CompositeItem-C1TWAJDR.js";import"./ToolbarRootContext-D9L-Ml2A.js";import"./getDisabledMountTransitionStyles-BLtyVkg2.js";import"./getPseudoElementBounds-CdcOai2P.js";import"./chevron-down-CUbAZ-_p.js";import"./index-DID_2L9u.js";import"./error-CVq7I-wU.js";import"./BaseCbacBanner-DRX8yyDx.js";import"./makeExternalStore-D3VLDVl3.js";import"./Tooltip-DaDQwg-t.js";import"./PopoverPopup-Bbqol7Np.js";import"./debounce-DC_Wzb4i.js";import"./tick-eEgrLbkE.js";import"./DropdownField-DZRbqgAH.js";import"./isEqual-V57JVfEj.js";import"./withOsdkMetrics-D-VDYdk6.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
