import{j as r}from"./iframe-CC13kVkc.js";import{O as b}from"./object-table-BoQNsJEO.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CSOuQhXo.js";import{u as g}from"./useOsdkClient-C-mmpbXU.js";import"./preload-helper-iiwGnqeP.js";import"./Table-CUY0THro.js";import"./index-DU2P82bW.js";import"./Dialog-Cl4AcAGv.js";import"./cross-Gw99IDXX.js";import"./svgIconContainer-BM4AiPUS.js";import"./useBaseUiId-HgrihVGX.js";import"./InternalBackdrop-LVRDcyBz.js";import"./composite-CQT3GPGa.js";import"./index-C0gqvA1S.js";import"./index-DWN_AYu3.js";import"./index-CZ_sbyW4.js";import"./useEventCallback-Dzvd6DP5.js";import"./SkeletonBar-CqLQslyN.js";import"./LoadingCell-ZQEvmqLg.js";import"./ColumnConfigDialog-VYNi19lW.js";import"./DraggableList-Ca43qavx.js";import"./search-DATCmuXl.js";import"./Input-B8esvYJ8.js";import"./useControlled-C8Ss_1q9.js";import"./Button-DChBnEps.js";import"./small-cross-ChcGFzGy.js";import"./ActionButton-D0sOWk1d.js";import"./Checkbox-CUTYqxzh.js";import"./useValueChanged-B8UU_UBm.js";import"./CollapsiblePanel-M2FwY9nP.js";import"./MultiColumnSortDialog-BuKMp48F.js";import"./MenuTrigger-DHFrirSL.js";import"./CompositeItem-DZfCHwau.js";import"./ToolbarRootContext-CWcw0hmq.js";import"./getDisabledMountTransitionStyles-qFjzV3aO.js";import"./getPseudoElementBounds-D0x7-dwB.js";import"./chevron-down-SXnOgnm5.js";import"./index-BbGmio58.js";import"./error-C04PUB1J.js";import"./BaseCbacBanner-CEdNT__P.js";import"./makeExternalStore-2iYjMQbd.js";import"./Tooltip-C0FVSqb3.js";import"./PopoverPopup-CH4QvDfI.js";import"./debounce-B0ThbaZi.js";import"./tick-BfjgS0G2.js";import"./DropdownField-3R-_B0eM.js";import"./isEqual-CFkoNCQV.js";import"./withOsdkMetrics-DYDVQvXv.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
