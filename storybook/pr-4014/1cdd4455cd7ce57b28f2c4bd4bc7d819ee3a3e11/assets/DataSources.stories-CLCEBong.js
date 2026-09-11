import{j as r}from"./iframe-uT48rLM_.js";import{O as b}from"./object-table-CpKuor12.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-nWVIbdXn.js";import{u as g}from"./useOsdkClient-DFYM3hyp.js";import"./preload-helper-yoQuylqU.js";import"./Table-Br0TYzk7.js";import"./index-CSvzskdp.js";import"./Dialog-DHFdNQrv.js";import"./cross-Bjaf7ehU.js";import"./svgIconContainer-p9hJC-XV.js";import"./useBaseUiId-9T64UX1j.js";import"./InternalBackdrop-B72hZeRt.js";import"./composite-DezEwUvA.js";import"./index-5wHFC5Fm.js";import"./index-BEQpnWE2.js";import"./index-B1GAZ9iL.js";import"./useEventCallback-Df-FKJT2.js";import"./SkeletonBar-oqZO1ZHs.js";import"./LoadingCell-C5KPxmDc.js";import"./ColumnConfigDialog-DgKPZlhI.js";import"./DraggableList-Bnzwsr1Q.js";import"./search-DQlds2Tm.js";import"./Input-CQKdcBRU.js";import"./useControlled-DuOdWxX8.js";import"./Button-C6gEU1e5.js";import"./small-cross-CisrNWlM.js";import"./ActionButton-7h418o9p.js";import"./Checkbox-SFA35Btf.js";import"./useValueChanged-znQA4Tbz.js";import"./CollapsiblePanel-CF6AHuns.js";import"./MultiColumnSortDialog-niDuA6Gj.js";import"./MenuTrigger-9TSMCP-s.js";import"./CompositeItem-BxuJPWc4.js";import"./ToolbarRootContext-DjYPc8nU.js";import"./getDisabledMountTransitionStyles-CluzbFfS.js";import"./getPseudoElementBounds-C4USjkgg.js";import"./chevron-down-DEgdTzUt.js";import"./index-BSbxg0rW.js";import"./error-BQiQ2GDM.js";import"./BaseCbacBanner-biYADY_e.js";import"./makeExternalStore-DTuIZdzn.js";import"./Tooltip-DQOQ2Q12.js";import"./PopoverPopup-_zY_9-mc.js";import"./debounce-BNAPXfSi.js";import"./tick-CU7R8lm8.js";import"./DropdownField-BTmtksts.js";import"./isEqual-BdznznjE.js";import"./withOsdkMetrics-zU8fQ91E.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
