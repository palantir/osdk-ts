import{j as r}from"./iframe-CwfFVXYm.js";import{O as b}from"./object-table-3hjC1a4Q.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DnOF0gkC.js";import{u as g}from"./useOsdkClient-D4ODTHFx.js";import"./preload-helper-B0i1Ccv8.js";import"./Table-CiqC9yT2.js";import"./index-12mUJC8n.js";import"./Dialog-BToK1dJZ.js";import"./cross-vHANk4GA.js";import"./svgIconContainer-CGFZMhJS.js";import"./useBaseUiId-D7i-0lUl.js";import"./InternalBackdrop-DOJpSrKf.js";import"./composite-B35ndqHm.js";import"./index-DNXZoFIr.js";import"./index-D2z71Qsm.js";import"./index-Crk-izdP.js";import"./useEventCallback-YTEY1SDl.js";import"./SkeletonBar-BTELcMSt.js";import"./LoadingCell-oWGhXH5n.js";import"./ColumnConfigDialog-_KnKOWel.js";import"./DraggableList-V2JUX2Gf.js";import"./search-CXyOr2KE.js";import"./Input-B3BLVjbw.js";import"./useControlled-CBv31JWZ.js";import"./Button-BEoayh3H.js";import"./small-cross-Kn0-K05A.js";import"./ActionButton-B9_iyqEc.js";import"./Checkbox-DUi2IRjx.js";import"./useValueChanged-DnLqpX89.js";import"./CollapsiblePanel-shOVr1N_.js";import"./MultiColumnSortDialog-OCs0OixQ.js";import"./MenuTrigger-CDYnPChJ.js";import"./CompositeItem-BPiFovJv.js";import"./ToolbarRootContext-mV67Z_2Q.js";import"./getDisabledMountTransitionStyles-C_Pdyoj5.js";import"./getPseudoElementBounds-nE2iYe28.js";import"./chevron-down-CYWunexi.js";import"./index-DTmUBa4U.js";import"./error-BbOajjO4.js";import"./BaseCbacBanner-CaF6WltH.js";import"./makeExternalStore-D75zw0dv.js";import"./Tooltip-ChZSMVBv.js";import"./PopoverPopup-C1H_pV3d.js";import"./debounce-T3lrOezK.js";import"./tick-CBvk4wqY.js";import"./DropdownField-B644qOm6.js";import"./isEqual-DxZ23_bo.js";import"./withOsdkMetrics-Ojccrccx.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
