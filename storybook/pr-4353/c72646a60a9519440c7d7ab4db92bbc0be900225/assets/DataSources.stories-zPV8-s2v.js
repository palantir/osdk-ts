import{j as r}from"./iframe-Dg2rP9Po.js";import{O as b}from"./object-table-D0DMCmzF.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D_n5pGGO.js";import{u as g}from"./useOsdkClient-ecHM5SMR.js";import"./preload-helper-C62MX-HV.js";import"./Table-DOz1Ura5.js";import"./index-Bk_L59vo.js";import"./Dialog-CKxIsWON.js";import"./cross-ByHx960q.js";import"./svgIconContainer-CrwUJVFh.js";import"./useBaseUiId-BrByyFcr.js";import"./InternalBackdrop-BhWyWYDG.js";import"./composite-DwarrJ_d.js";import"./index-D51t4EhI.js";import"./index-BTK-QJaX.js";import"./index-BuWg-_ox.js";import"./useEventCallback-y6eWXZb0.js";import"./SkeletonBar-Dyoh3Oqn.js";import"./LoadingCell-Du-JRye8.js";import"./ColumnConfigDialog-DCoEngsL.js";import"./DraggableList-Dt8o8fPU.js";import"./search-7S2iycUI.js";import"./Input-CLdANV8F.js";import"./useControlled-CPVhNzyr.js";import"./Button-3owJgmEd.js";import"./small-cross-DW-MJuWV.js";import"./ActionButton-vxF6e2oH.js";import"./Checkbox-BB_EHT7U.js";import"./useValueChanged-BFNbOulV.js";import"./CollapsiblePanel-Cdh4aus9.js";import"./MultiColumnSortDialog-BzJiY7K7.js";import"./MenuTrigger-DG7QOV05.js";import"./CompositeItem-Iitq3-0I.js";import"./ToolbarRootContext-DWEMgL85.js";import"./getDisabledMountTransitionStyles-BVaUCF8Y.js";import"./getPseudoElementBounds-B2mLNmmG.js";import"./chevron-down-DghOfrxO.js";import"./index-eL-YB9kv.js";import"./error-CpY5WHNo.js";import"./BaseCbacBanner-BcDeBoVZ.js";import"./makeExternalStore-CyhjwBot.js";import"./Tooltip-BYn5P6nw.js";import"./PopoverPopup-BUDSqNW1.js";import"./debounce-C5ixXv23.js";import"./tick-D-NdcMXs.js";import"./DropdownField-B07IQ1gj.js";import"./isEqual-BMQjVVox.js";import"./withOsdkMetrics-DWMO9N5k.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
