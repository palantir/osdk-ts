import{j as r}from"./iframe-Bhux-jL2.js";import{O as b}from"./object-table-CA16_MIj.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C9j6v578.js";import{u as g}from"./useOsdkClient-B-RCP7CA.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-D5A3MZPg.js";import"./index-CqpPyV6t.js";import"./Dialog-BYvkDmOC.js";import"./cross-CUQYhxA4.js";import"./svgIconContainer-DLxw3PxE.js";import"./useBaseUiId-De8pklpX.js";import"./InternalBackdrop-1Uep-6OD.js";import"./composite-pG-5UHC0.js";import"./index-Dq01vjvQ.js";import"./index-DbS2jUPU.js";import"./index-DkYiUypd.js";import"./useEventCallback-Cjzrema4.js";import"./SkeletonBar-D1FlFldy.js";import"./LoadingCell-DRoK-x5w.js";import"./ColumnConfigDialog-DKYIaNjP.js";import"./DraggableList-CoaIImom.js";import"./search-jbt_qsn3.js";import"./Input-Cz3DPiZR.js";import"./useControlled-B8x__iZM.js";import"./Button-CMvjR2Al.js";import"./small-cross-Dc7PW3MT.js";import"./ActionButton-D5iMXjgf.js";import"./Checkbox-D4zGkPrI.js";import"./useValueChanged-CSfjLy1S.js";import"./CollapsiblePanel-DGcKBfeQ.js";import"./MultiColumnSortDialog-eH_q_TBq.js";import"./MenuTrigger-BBZstzo2.js";import"./CompositeItem-x-GueMXE.js";import"./ToolbarRootContext-BAnbUtNA.js";import"./getDisabledMountTransitionStyles-DSrXhE1l.js";import"./getPseudoElementBounds-B5CqKbrh.js";import"./chevron-down-_Dmt60i4.js";import"./index-fIrfSYEO.js";import"./error-mg2-r6Xs.js";import"./BaseCbacBanner-uoC7ilO6.js";import"./makeExternalStore-fmuI2lu4.js";import"./Tooltip-CmR5c3KM.js";import"./PopoverPopup-C9A-63Ov.js";import"./debounce-C9UrikDA.js";import"./tick-BGANEUAQ.js";import"./DropdownField-D_Ub0nmh.js";import"./isEqual-FW8TNQ2z.js";import"./withOsdkMetrics-D-lmPy0A.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
