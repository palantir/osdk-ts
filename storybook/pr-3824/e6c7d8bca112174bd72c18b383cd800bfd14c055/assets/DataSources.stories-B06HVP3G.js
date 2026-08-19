import{j as r}from"./iframe-CFnZv6W6.js";import{O as b}from"./object-table-Bjjj8n_l.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DCPNbmgp.js";import{u as g}from"./useOsdkClient-C-GCPnL_.js";import"./preload-helper-DaeNTAOB.js";import"./Table-GJdNKuHh.js";import"./index-CVGV4KeD.js";import"./Dialog-w2kTwReC.js";import"./cross-C-tbaQSm.js";import"./svgIconContainer-Ds9wq937.js";import"./useBaseUiId-BHfosarc.js";import"./InternalBackdrop-B6eJf4h8.js";import"./composite-DpDQBUJx.js";import"./index-DxTVc7UT.js";import"./index-DqFASQeC.js";import"./index-DH3Lt-T4.js";import"./useEventCallback-CDzNiTKq.js";import"./SkeletonBar-DTeIxuG5.js";import"./LoadingCell-bclLlGod.js";import"./ColumnConfigDialog-BsoTMV0c.js";import"./DraggableList-CkGcCJHd.js";import"./search-CtPaFwvz.js";import"./Input-vKjFw9JB.js";import"./useControlled-C4TNuFLH.js";import"./Button-DWKNQBaA.js";import"./small-cross-D-8SDjlK.js";import"./ActionButton-BG_gQsLt.js";import"./Checkbox-DEsFYHqM.js";import"./useValueChanged-DGrgz3RO.js";import"./CollapsiblePanel-C1_1ATE6.js";import"./MultiColumnSortDialog-CN0GVjqJ.js";import"./MenuTrigger-X7sAyzkO.js";import"./CompositeItem-DPJBvKky.js";import"./ToolbarRootContext-CVCFeaES.js";import"./getDisabledMountTransitionStyles-COvsik1i.js";import"./getPseudoElementBounds-BeF4-PN3.js";import"./chevron-down-CzFq3N2b.js";import"./index-BSlJchRS.js";import"./error-Dr-3Rs7Z.js";import"./BaseCbacBanner-C3IHannt.js";import"./makeExternalStore-Di8vK866.js";import"./Tooltip-4s0ejNja.js";import"./PopoverPopup-Bn_YebPn.js";import"./debounce-CrW4vDcQ.js";import"./tick-Dmm-IbHN.js";import"./DropdownField-CJnnFWVL.js";import"./isEqual-DE3KBIZr.js";import"./withOsdkMetrics-BPf1l7aJ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
