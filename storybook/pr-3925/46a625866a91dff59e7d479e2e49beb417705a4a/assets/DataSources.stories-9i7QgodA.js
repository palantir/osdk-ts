import{j as r}from"./iframe-CqkLHc_c.js";import{O as b}from"./object-table-B9dqwhdI.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-sQzG_l8k.js";import{u as g}from"./useOsdkClient-Qcf5HYkT.js";import"./preload-helper-tK9KftsW.js";import"./Table-DOVpPfje.js";import"./index-BkdZmWk5.js";import"./Dialog-C8N5WYt2.js";import"./cross-BK5qmSmv.js";import"./svgIconContainer-Blo0ZtB6.js";import"./useBaseUiId-tebTh8Gp.js";import"./InternalBackdrop-LvsrBsqm.js";import"./composite-BYm3d5-q.js";import"./index-BPryo7yS.js";import"./index-ESRslAge.js";import"./index-Ca6LKe_B.js";import"./useEventCallback-BsCHvJZO.js";import"./SkeletonBar-9APJB1is.js";import"./LoadingCell-f9yIWNSo.js";import"./ColumnConfigDialog-CWbkHkwR.js";import"./DraggableList-CN06qLYh.js";import"./search-PNHKhQFY.js";import"./Input-CDogb2Gc.js";import"./useControlled-DG0f7MEe.js";import"./Button-B3Rn0blP.js";import"./small-cross-Culy_LL-.js";import"./ActionButton-Bf3mWBEe.js";import"./Checkbox-BBJ7O-tN.js";import"./useValueChanged-BYnUcR2q.js";import"./CollapsiblePanel-ChwSKAp7.js";import"./MultiColumnSortDialog-Bty7oBui.js";import"./MenuTrigger-CO6djv8h.js";import"./CompositeItem-DLFLEE2w.js";import"./ToolbarRootContext-BoN7sVx8.js";import"./getDisabledMountTransitionStyles-CSpIiX34.js";import"./getPseudoElementBounds-Bn-J1iOt.js";import"./chevron-down-Dm_-uRNW.js";import"./index-DkCpc9rG.js";import"./error-DVJcn8Pc.js";import"./BaseCbacBanner-jCxZY6l4.js";import"./makeExternalStore-Cg161Yxc.js";import"./Tooltip-4vAmB5ER.js";import"./PopoverPopup-CR7zdJhd.js";import"./debounce-CBvYKhdg.js";import"./tick-DWazel4t.js";import"./DropdownField-w8MQJ0vm.js";import"./isEqual-BdDkPSGJ.js";import"./withOsdkMetrics-DbuLeRiC.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
