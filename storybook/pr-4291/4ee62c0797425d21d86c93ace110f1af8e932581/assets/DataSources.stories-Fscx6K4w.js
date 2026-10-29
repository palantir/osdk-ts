import{j as r}from"./iframe-CrKPlwEU.js";import{O as b}from"./object-table-CvR6OxpR.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-_T2psJzS.js";import{u as g}from"./useOsdkClient-TsA83w7k.js";import"./preload-helper-haeFzdUn.js";import"./Table-DgE5klJe.js";import"./index-CpV23X_V.js";import"./Dialog-D19FsKBo.js";import"./cross-BOaN4EGV.js";import"./svgIconContainer-DeM85DcU.js";import"./useBaseUiId-3D9LSptD.js";import"./InternalBackdrop-CANy3XAr.js";import"./composite-chiYjW3e.js";import"./index-CuiFjKJ6.js";import"./index-Tf0Q6mNY.js";import"./index-FzYKWb4a.js";import"./useEventCallback-CrnEc3ig.js";import"./SkeletonBar-DHBToYCm.js";import"./LoadingCell-CEYS61L0.js";import"./ColumnConfigDialog-BRK66Wau.js";import"./DraggableList-DYCS6jmS.js";import"./search-Djn1cGPu.js";import"./Input-D5pWgixZ.js";import"./useControlled-BeRVPSrG.js";import"./Button-C2XUaQth.js";import"./small-cross-CeyGDtbC.js";import"./ActionButton-Dk7pYVbj.js";import"./Checkbox-DddYpv7L.js";import"./useValueChanged-B9MjiZal.js";import"./CollapsiblePanel-CkSGM0Jv.js";import"./MultiColumnSortDialog-9ZoqMut-.js";import"./MenuTrigger-BExeNii_.js";import"./CompositeItem-CWEcL4Np.js";import"./ToolbarRootContext-CqOU07W6.js";import"./getDisabledMountTransitionStyles-DT-8seTh.js";import"./getPseudoElementBounds-Bvl6KZtn.js";import"./chevron-down-B-Yd5sHs.js";import"./index-Dr_M4lxK.js";import"./error-DbcL_3Bp.js";import"./BaseCbacBanner-BTtW5FAV.js";import"./makeExternalStore-Drk2huTh.js";import"./Tooltip-C4p1lLDJ.js";import"./PopoverPopup-Ce9yvUeR.js";import"./debounce-l8Bh5wEB.js";import"./tick-Ciq_5nwQ.js";import"./DropdownField-CU7FI4gK.js";import"./isEqual-C8BY78Y6.js";import"./withOsdkMetrics-CM1wTx4W.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
