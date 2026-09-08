import{j as r}from"./iframe-BXNko62s.js";import{O as b}from"./object-table-BQNnLDn7.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-4n18uZN6.js";import{u as g}from"./useOsdkClient-Cn5D3g-o.js";import"./preload-helper-Bj6UNjqi.js";import"./Table-D7LzyEaH.js";import"./index-BraeF99A.js";import"./Dialog-Ro4O5HA1.js";import"./cross-CxMC5EUY.js";import"./svgIconContainer-DY8ASQOr.js";import"./useBaseUiId-Ca98QWO9.js";import"./InternalBackdrop-BbBElhcW.js";import"./composite-C9CWzIa9.js";import"./index-BFgBDgmk.js";import"./index-CCQ5u4Ue.js";import"./index-BJy_f7fa.js";import"./useEventCallback-DgeT9ZNj.js";import"./SkeletonBar-D1qxCam4.js";import"./LoadingCell-B0CJVPiT.js";import"./ColumnConfigDialog-DNqQ-Oum.js";import"./DraggableList-IBkcEZag.js";import"./search-0j6eRv30.js";import"./Input-DXEo1WM0.js";import"./useControlled-B2FQFptp.js";import"./Button-Cb25ceXV.js";import"./small-cross-C8K6sWXT.js";import"./ActionButton-BE6hJp0R.js";import"./Checkbox-BIQR1PfE.js";import"./useValueChanged-BQ311yh_.js";import"./CollapsiblePanel-Cyvbu1GF.js";import"./MultiColumnSortDialog-CvcuatNu.js";import"./MenuTrigger-Dd2kzYgY.js";import"./CompositeItem-BnI6v8nN.js";import"./ToolbarRootContext-BpFYZMLv.js";import"./getDisabledMountTransitionStyles-DcJvx271.js";import"./getPseudoElementBounds-8XCyV84c.js";import"./chevron-down-Za9QV_62.js";import"./index-hSkBF6vZ.js";import"./error-CgTFtvP9.js";import"./BaseCbacBanner-3-2aKYTm.js";import"./makeExternalStore-BdN3LE2k.js";import"./Tooltip-Cy_tDvEN.js";import"./PopoverPopup-fmJe70Q9.js";import"./debounce-DTLh2Ef3.js";import"./tick-qSbAdot2.js";import"./DropdownField--_gkEn_J.js";import"./isEqual-CEZhzjj7.js";import"./withOsdkMetrics-BmO3Nivv.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
