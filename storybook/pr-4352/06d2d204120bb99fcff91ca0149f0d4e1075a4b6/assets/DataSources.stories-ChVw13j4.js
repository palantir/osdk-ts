import{j as r}from"./iframe-w4y9aXDU.js";import{O as b}from"./object-table-DKZptHFY.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C-yS2BSC.js";import{u as g}from"./useOsdkClient-Bbq68KDs.js";import"./preload-helper-CnLs-Hgu.js";import"./Table-DGXl8lCv.js";import"./index-Dt7u2oHj.js";import"./Dialog-DRi7MYpb.js";import"./cross-DXnz5KvW.js";import"./svgIconContainer-CmEhYz6E.js";import"./useBaseUiId-F1YYLfsj.js";import"./InternalBackdrop-MfBzn4fw.js";import"./composite-B-RTr01b.js";import"./index-BIFcK0O4.js";import"./index-B0uCtLgl.js";import"./index-BlxHpFGo.js";import"./useEventCallback-BXF47S9-.js";import"./SkeletonBar-BIDpA40h.js";import"./LoadingCell-LVMMQK3T.js";import"./ColumnConfigDialog-ymokFQ3x.js";import"./DraggableList-Dt_zEa3K.js";import"./search-Cp34eK_v.js";import"./Input-O7Y8xsdh.js";import"./useControlled-C9ba4gpK.js";import"./Button-o-glHusr.js";import"./small-cross-C92MDA4P.js";import"./ActionButton-U4isYHc7.js";import"./Checkbox-D55iodXx.js";import"./useValueChanged-D3XhtpAV.js";import"./CollapsiblePanel-BLYyv3wb.js";import"./MultiColumnSortDialog-DUWaEEgT.js";import"./MenuTrigger-CUAkYVeE.js";import"./CompositeItem-Cd8pgrRU.js";import"./ToolbarRootContext-D5jHJ_gp.js";import"./getDisabledMountTransitionStyles-CuTU5WjT.js";import"./getPseudoElementBounds-Bg2TtJd6.js";import"./chevron-down-BBcbr8vg.js";import"./index-OXOrABe5.js";import"./error-8BgSEFU8.js";import"./BaseCbacBanner-CBpK3U6l.js";import"./makeExternalStore-BvoAQS4K.js";import"./Tooltip-Dj27hk9q.js";import"./isObject-WnGrlPIk.js";import"./debounce-CkZWp4sm.js";import"./tick-SaijwqI0.js";import"./DropdownField-aGwR7wao.js";import"./isEqual-DiUSZu8r.js";import"./_baseIsEqual-CUKKLhLC.js";import"./withOsdkMetrics-BEOTlVIH.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
