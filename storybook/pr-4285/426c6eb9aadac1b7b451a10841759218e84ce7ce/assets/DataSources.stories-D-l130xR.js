import{j as r}from"./iframe-DGqz47MG.js";import{O as b}from"./object-table-Bd4xscwF.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B5ENT9O-.js";import{u as g}from"./useOsdkClient-DMdK1qJo.js";import"./preload-helper-Cim2rGXh.js";import"./Table-BZiQqcrs.js";import"./index-Bd9LEkTw.js";import"./Dialog-CCWLfNS3.js";import"./cross-CEq_GdMU.js";import"./svgIconContainer-DOG7DxQy.js";import"./useBaseUiId-DUXwyBKc.js";import"./InternalBackdrop-CG21yzEz.js";import"./composite-Ba00gyVa.js";import"./index-D5J1M6Rk.js";import"./index-8Cs0qfIH.js";import"./index-CsvfS9SY.js";import"./useEventCallback-DSfQYw-a.js";import"./SkeletonBar-D8Tdd3Oo.js";import"./LoadingCell-CGAj37sN.js";import"./ColumnConfigDialog-DFDPI9aH.js";import"./DraggableList-C-osdfZa.js";import"./search-DRqVXkuQ.js";import"./Input-74xcLqWb.js";import"./useControlled-CzYzgIWX.js";import"./Button-BbcMUrJ0.js";import"./small-cross-DxaBc40t.js";import"./ActionButton-DTp5BPtP.js";import"./Checkbox-B49l5BI7.js";import"./useValueChanged-DHjlJWOI.js";import"./CollapsiblePanel-D3JnwVn4.js";import"./MultiColumnSortDialog-B2P3ZuoZ.js";import"./MenuTrigger-Dt6SVdup.js";import"./CompositeItem-DkRqlbxr.js";import"./ToolbarRootContext-CVWObsgJ.js";import"./getDisabledMountTransitionStyles-BhKGK1Dz.js";import"./getPseudoElementBounds-VHie68sa.js";import"./chevron-down-oASCfusG.js";import"./index-BsG8g24_.js";import"./error-CYx8FmP-.js";import"./BaseCbacBanner-CPVJF_5N.js";import"./makeExternalStore-B0og1Ieq.js";import"./Tooltip-BkDKAHSO.js";import"./isObject-lTxslFZd.js";import"./debounce-xenDYozX.js";import"./tick-CRlk3QC6.js";import"./DropdownField-Boby63HI.js";import"./isEqual-B6aP3hJm.js";import"./_baseIsEqual-Cf3-PdSX.js";import"./withOsdkMetrics-6EClZ-2k.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
