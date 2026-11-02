import{j as r}from"./iframe-DUqIITxH.js";import{O as b}from"./object-table-3HbuhbM-.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DYZ_Ao0Y.js";import{u as g}from"./useOsdkClient-DYmfz7qm.js";import"./preload-helper-DRNNkrJi.js";import"./Table-Qy9QycEn.js";import"./index-CfKxCZr0.js";import"./Dialog-CQKZhvmg.js";import"./cross-CNr5tSf5.js";import"./svgIconContainer-6SFRCpjB.js";import"./useBaseUiId-kMUnh5gd.js";import"./InternalBackdrop-BhomPwEy.js";import"./composite-DJRtaiwf.js";import"./index-Dsym8n4N.js";import"./index-GkXmmaX0.js";import"./index-BLlR331c.js";import"./useEventCallback-CA5SU1AH.js";import"./SkeletonBar-fzqq3kFc.js";import"./LoadingCell-dwhV2BU5.js";import"./ColumnConfigDialog-JyLsvbUN.js";import"./DraggableList-BJEUmG2J.js";import"./search-BZkb1jfI.js";import"./Input-Ck3038DH.js";import"./useControlled-DnwEhQGz.js";import"./Button-DxPOU_Mc.js";import"./small-cross-DiAkLgef.js";import"./ActionButton-w4Urkbcz.js";import"./Checkbox-BEYrixR_.js";import"./useValueChanged-QI-v-4Vm.js";import"./CollapsiblePanel-BoajmFi9.js";import"./MultiColumnSortDialog-B_lvOEVt.js";import"./MenuTrigger-Bdaly6ds.js";import"./CompositeItem-DA_aeyOT.js";import"./ToolbarRootContext-B4KY25qe.js";import"./getDisabledMountTransitionStyles-g7BSBpZk.js";import"./getPseudoElementBounds-BB5-HDV6.js";import"./chevron-down-5LJm5ghw.js";import"./index-CSve1EYF.js";import"./error-BA5REKvs.js";import"./BaseCbacBanner-BJbK-LLa.js";import"./makeExternalStore-C3reCNG-.js";import"./Tooltip-C187RPOh.js";import"./PopoverPopup-Cb4S25yO.js";import"./debounce-8IWhPKp0.js";import"./tick-BKBNrx8N.js";import"./DropdownField-D8f8SQmJ.js";import"./isEqual-B7742ZuT.js";import"./withOsdkMetrics-NmiraHl_.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
