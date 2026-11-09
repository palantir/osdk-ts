import{j as r}from"./iframe-kyVM35Yw.js";import{O as b}from"./object-table-D8OhNeI7.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DbRtOTGw.js";import{u as g}from"./useOsdkClient-DYm6JtiE.js";import"./preload-helper-BwEFl8vP.js";import"./Table-BnWzUCOy.js";import"./index-C0Dea0yk.js";import"./Dialog-BcXX0CrW.js";import"./cross-C0YFkToE.js";import"./svgIconContainer-CLz_w4rV.js";import"./useBaseUiId-DRkyghGt.js";import"./InternalBackdrop-Dx6yt2XY.js";import"./composite-uhZO0Uyq.js";import"./index-B5tuGXqc.js";import"./index-Cq4C7hwK.js";import"./index-DxlcEZaF.js";import"./useEventCallback-CIPRgi3m.js";import"./SkeletonBar-BjqkVB1N.js";import"./LoadingCell-BJW-sMyd.js";import"./ColumnConfigDialog-DRBrnmt-.js";import"./DraggableList-BhTnGkHR.js";import"./search-BZ_r27kW.js";import"./Input-DdIUmJav.js";import"./useControlled-Dv9OfWlo.js";import"./Button-t3LDiAFT.js";import"./small-cross-DNKmjcOe.js";import"./ActionButton-B593_ubA.js";import"./Checkbox-DVqeNtQS.js";import"./useValueChanged-CAuHoBW5.js";import"./CollapsiblePanel-D0Ogg_Z1.js";import"./MultiColumnSortDialog-BHLFsck8.js";import"./MenuTrigger-DsnX6w12.js";import"./CompositeItem-CcZT4jH0.js";import"./ToolbarRootContext-hOfYlQDN.js";import"./getDisabledMountTransitionStyles-2PFrzZkZ.js";import"./getPseudoElementBounds-BcX2UMFr.js";import"./chevron-down-CnIiSLCf.js";import"./index-C5nN5HSw.js";import"./error-C0jSc5Zw.js";import"./BaseCbacBanner-CsPxqNag.js";import"./makeExternalStore-DOr5nas7.js";import"./Tooltip-Dvd9Tqx6.js";import"./isObject-DXUV5EWh.js";import"./debounce-DEN9d_8f.js";import"./tick-ZlXNtKJQ.js";import"./DropdownField-CiuWLNC-.js";import"./isEqual-Bi9yJZpm.js";import"./_baseIsEqual-DdLFoz5X.js";import"./withOsdkMetrics-B7MvmXC4.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};
