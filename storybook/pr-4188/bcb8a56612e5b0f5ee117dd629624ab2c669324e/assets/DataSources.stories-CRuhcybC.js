import{j as r}from"./iframe-BpcZw0Qh.js";import{O as b}from"./object-table-DUmT7cvP.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-ChnAuK3k.js";import{u as g}from"./useOsdkClient-BPiM2Ufk.js";import"./preload-helper-bs_ZWCVp.js";import"./Table-s-iRKnNU.js";import"./index-RyqdaqZt.js";import"./Dialog-C1FgKXrl.js";import"./cross-BQZa2Kkg.js";import"./svgIconContainer-B6eNnREq.js";import"./useBaseUiId-BsFMaRmq.js";import"./InternalBackdrop-CephDmCg.js";import"./composite-b_Vir_Qy.js";import"./index-j_Bq1Wxb.js";import"./index-hOxH3DWt.js";import"./index-9jDzRHbg.js";import"./useEventCallback-Dyo7s63d.js";import"./SkeletonBar-CFFQOHPZ.js";import"./LoadingCell-D1RU1IJM.js";import"./ColumnConfigDialog-BR1gNZ0z.js";import"./DraggableList-DwApawfg.js";import"./search-C5aLdI-z.js";import"./Input-B-pxSN65.js";import"./useControlled-BaPgI88u.js";import"./Button-xX1VEK25.js";import"./small-cross-B0G2BYVi.js";import"./ActionButton-CSQPpyYl.js";import"./Checkbox-D3OGLlT9.js";import"./useValueChanged-DyTrIZ4q.js";import"./CollapsiblePanel-BGTJ0O0p.js";import"./MultiColumnSortDialog-Cl67X5Ew.js";import"./MenuTrigger-toVLb17l.js";import"./CompositeItem-CiXh4i5Q.js";import"./ToolbarRootContext-Bafsun3r.js";import"./getDisabledMountTransitionStyles-DAuYWGeR.js";import"./getPseudoElementBounds-CMoxeRLZ.js";import"./chevron-down-0qsj7SKJ.js";import"./index-BvmVuSqJ.js";import"./error-DJy30QKE.js";import"./BaseCbacBanner-BbbKJkgD.js";import"./makeExternalStore-vOLbyGHJ.js";import"./Tooltip-CrVqygHA.js";import"./PopoverPopup-CiGvhW0c.js";import"./debounce-BUHFTaie.js";import"./tick-BLie4KaX.js";import"./DropdownField-BY-KWr1H.js";import"./isEqual-B9mRJgu4.js";import"./withOsdkMetrics-OlYBoQiq.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
