import{j as r}from"./iframe-DPxX1jR-.js";import{O as b}from"./object-table-6p4neQQt.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BQyVZFza.js";import{u as g}from"./useOsdkClient-BjyL2cyC.js";import"./preload-helper-Bl3woUlG.js";import"./Table-DQT7xoCm.js";import"./index-D6OGPiBG.js";import"./Dialog-DfzPTpFX.js";import"./cross-BO6SlDqo.js";import"./svgIconContainer-DQ5sgBjC.js";import"./useBaseUiId-BKCJofKJ.js";import"./InternalBackdrop-BDTL8dMK.js";import"./composite-BcAnYQh9.js";import"./index-B-sWsLH5.js";import"./index-DQPQvAfC.js";import"./index-DSDqA_Ss.js";import"./useEventCallback-Bvjybx93.js";import"./SkeletonBar-BGjKDv0N.js";import"./LoadingCell-BPcqwqea.js";import"./ColumnConfigDialog-BMebv_uz.js";import"./DraggableList-BEhiYx7J.js";import"./search-B5aBIEi3.js";import"./Input-DFF83YG7.js";import"./useControlled-C7cllYbm.js";import"./Button-DQXd7O9l.js";import"./small-cross-BDDqqJMU.js";import"./ActionButton-1Q3tX4Fy.js";import"./Checkbox-DcG_vN9W.js";import"./useValueChanged-i5EMwMR_.js";import"./CollapsiblePanel-HGrFWplr.js";import"./MultiColumnSortDialog-F8EVd4m9.js";import"./MenuTrigger-CbBbJ5Lv.js";import"./CompositeItem-rTVyKIYC.js";import"./ToolbarRootContext-B53u_0Lg.js";import"./getDisabledMountTransitionStyles-DXbjzshq.js";import"./getPseudoElementBounds-CjxlBCdr.js";import"./chevron-down-DxRPC7K7.js";import"./index-CmhRQ5VM.js";import"./error-ChO0zkiL.js";import"./BaseCbacBanner-R2dfzvOz.js";import"./makeExternalStore-64rcfTGa.js";import"./Tooltip-BOGu4iQx.js";import"./PopoverPopup-BLHlUUDe.js";import"./debounce-DlKAS5ft.js";import"./tick-CTGvo1gM.js";import"./DropdownField-CpYwJ58e.js";import"./isEqual-CamMyuEt.js";import"./withOsdkMetrics-NcqisCon.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
