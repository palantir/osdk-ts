import{j as r}from"./iframe--2o31fpS.js";import{O as b}from"./object-table-BSmGQ0OR.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CIL126ea.js";import{u as g}from"./useOsdkClient-B6Xc0VYo.js";import"./preload-helper-BGtLG4Ze.js";import"./Table-_NbnqI6p.js";import"./index-CqkP8V1G.js";import"./Dialog-CUnqqWn-.js";import"./cross-11SNaKV0.js";import"./svgIconContainer-C1D02ztO.js";import"./useBaseUiId-DkfG-pIU.js";import"./InternalBackdrop-Cl2iltkm.js";import"./composite-QRzMYoxy.js";import"./index-DVBrMkW3.js";import"./index-DYasKxPB.js";import"./index-WsSVru4g.js";import"./useEventCallback-Bfcmscgt.js";import"./SkeletonBar-dBdl3_Eb.js";import"./LoadingCell-DppxWDb1.js";import"./ColumnConfigDialog-CLPlY36r.js";import"./DraggableList-BCbhifmv.js";import"./search-DCb3eFG7.js";import"./Input-CqReJTw6.js";import"./useControlled-_9g-GziU.js";import"./Button-MFx7ttW0.js";import"./small-cross-CpBPFOEe.js";import"./ActionButton-BxnI5abi.js";import"./Checkbox-7-bZ0hUh.js";import"./useValueChanged-BmRi-Zrz.js";import"./CollapsiblePanel-CaV5vxo-.js";import"./MultiColumnSortDialog-C3WeHFR9.js";import"./MenuTrigger-iYMw9usz.js";import"./CompositeItem-jeolwUWG.js";import"./ToolbarRootContext-B7UKPIgL.js";import"./getDisabledMountTransitionStyles-Coe4unGQ.js";import"./getPseudoElementBounds-CjbEuNK7.js";import"./chevron-down-DQu-ZHpt.js";import"./index-B5Pw0m5Z.js";import"./error-CZE7-qa2.js";import"./BaseCbacBanner-a-FKKl8c.js";import"./makeExternalStore-cJzBmAO1.js";import"./Tooltip-Cb3WfA-U.js";import"./PopoverPopup-BXOF-a2w.js";import"./debounce-CbfdFUk1.js";import"./tick-BvZOjkPN.js";import"./DropdownField-DRd1vWmE.js";import"./isEqual-D5Kz6pCE.js";import"./withOsdkMetrics-BZ26a9pj.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
