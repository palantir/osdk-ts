import{j as r}from"./iframe-CwHoXHUu.js";import{O as b}from"./object-table-Cag_aHEb.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D_ly6aN2.js";import{u as g}from"./useOsdkClient-Cq22Qxjo.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-B8BrjogO.js";import"./index-CZaeEK6I.js";import"./Dialog-De2OFsHH.js";import"./cross-CbSe3IA2.js";import"./svgIconContainer-CCqCSEPy.js";import"./useBaseUiId-BPVfLfjX.js";import"./InternalBackdrop-Dp6bA82H.js";import"./composite-DnjWTUQ2.js";import"./index-Cd6vbhvO.js";import"./index-CfA2Hd3H.js";import"./index-UD_bptXF.js";import"./useEventCallback-ANOYlLcV.js";import"./SkeletonBar-BPg1Fkjv.js";import"./LoadingCell-7w5ijp3b.js";import"./ColumnConfigDialog-BLb0xQT4.js";import"./DraggableList-B9JF565r.js";import"./search-DFG6yLeC.js";import"./Input-D4zseZIs.js";import"./useControlled-Hry_0x1f.js";import"./Button-h45Z6oL5.js";import"./small-cross-hTe5W9lf.js";import"./ActionButton-o9bSj-37.js";import"./Checkbox-DCQ1bTrr.js";import"./useValueChanged-Bts0Uq_N.js";import"./CollapsiblePanel-BF_hIS1Q.js";import"./MultiColumnSortDialog-DUaw27L5.js";import"./MenuTrigger-D9Ll9dQr.js";import"./CompositeItem-D5ZABXe5.js";import"./ToolbarRootContext-Dnc8VcDU.js";import"./getDisabledMountTransitionStyles-zi3Kz6H3.js";import"./getPseudoElementBounds-BZ16Xjo9.js";import"./chevron-down-CJ7ExT0D.js";import"./index-CI3G919h.js";import"./error-fdiT2-40.js";import"./BaseCbacBanner-syPdUMGq.js";import"./makeExternalStore-BVBAkPec.js";import"./Tooltip-CbRVkG8d.js";import"./isObject-7iDi-x5O.js";import"./debounce-BaLd07FW.js";import"./tick-_yHnD8nP.js";import"./DropdownField-D6wICRIR.js";import"./isEqual-DPe1pfPj.js";import"./_baseIsEqual-5-KFDSiY.js";import"./withOsdkMetrics-D3UK9v4M.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
