import{j as r}from"./iframe-BfMbsuTO.js";import{O as b}from"./object-table-CXvirFHf.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CDTburFM.js";import{u as g}from"./useOsdkClient-DLOB0_Is.js";import"./preload-helper-CvOWIyqc.js";import"./Table-BCtO7Tm4.js";import"./index-DK1QCnCo.js";import"./Dialog-qbU7sNxi.js";import"./cross-CKp_r7sS.js";import"./svgIconContainer-CLqHKPGt.js";import"./useBaseUiId-Cepz8rU_.js";import"./InternalBackdrop-DXRw1dZW.js";import"./composite-BfY9eDFq.js";import"./index-DTXKD30u.js";import"./index-xWp45YNg.js";import"./index-DXRgQkgl.js";import"./useEventCallback-D2WgD8Fc.js";import"./SkeletonBar-DFlFqo-D.js";import"./LoadingCell-BSezMWI2.js";import"./ColumnConfigDialog-BbRlGI2h.js";import"./DraggableList-CHP2UEGQ.js";import"./search-BJeF5SRa.js";import"./Input-Cj0x-U8m.js";import"./useControlled-B68j-m4m.js";import"./Button-pvHRSg6_.js";import"./small-cross-djyfeFmh.js";import"./ActionButton-CytU0bca.js";import"./Checkbox-Dzhl8s6O.js";import"./useValueChanged-DyIk8Xfw.js";import"./CollapsiblePanel-CPMXApTs.js";import"./MultiColumnSortDialog-DIu64B3r.js";import"./MenuTrigger-Bm3OeSUo.js";import"./CompositeItem-CQTgHCYc.js";import"./ToolbarRootContext-Dr3KNeMK.js";import"./getDisabledMountTransitionStyles-DggBnFeQ.js";import"./getPseudoElementBounds-WGFkMGwU.js";import"./chevron-down-DCzLtESR.js";import"./index-B-v6d6PY.js";import"./error-DD1JkUFX.js";import"./BaseCbacBanner-CiZFeI-A.js";import"./makeExternalStore-C1l5Ysjg.js";import"./Tooltip-DIC1LP32.js";import"./PopoverPopup-CV-IPSFd.js";import"./debounce-7sbKsZ6D.js";import"./tick-Bur9r6Ja.js";import"./DropdownField-DhX33T-q.js";import"./isEqual-BOxWcwph.js";import"./withOsdkMetrics-mlNsH_gV.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
