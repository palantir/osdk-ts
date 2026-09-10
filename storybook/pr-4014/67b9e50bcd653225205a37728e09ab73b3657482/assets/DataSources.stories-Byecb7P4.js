import{j as r}from"./iframe-vYDcoh77.js";import{O as b}from"./object-table-C88r-WHY.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DYpeukaM.js";import{u as g}from"./useOsdkClient-Bc2tSKuP.js";import"./preload-helper-DSINEazd.js";import"./Table-DssIb2XA.js";import"./index-Dvlndinu.js";import"./Dialog-Di5B1QLo.js";import"./cross-Bh3JhpLG.js";import"./svgIconContainer-DRRBBWTo.js";import"./useBaseUiId-D0wGlEuT.js";import"./InternalBackdrop-Bmbg-Qqi.js";import"./composite-CbGeFR41.js";import"./index-CnEHE-8v.js";import"./index-k5xDOMrk.js";import"./index-SN9c52dU.js";import"./useEventCallback-HvgQ2Jp9.js";import"./SkeletonBar-DDd9jroq.js";import"./LoadingCell-BOe9IZBL.js";import"./ColumnConfigDialog-8IXi2hA2.js";import"./DraggableList-S-kgc1zg.js";import"./search-BbY6TLBc.js";import"./Input-D4hoKYSh.js";import"./useControlled-9JxLuZTe.js";import"./Button-C4utuT7d.js";import"./small-cross-DXqEeC7m.js";import"./ActionButton-CEGBUekT.js";import"./Checkbox-CSVANSDS.js";import"./useValueChanged-DvGgnr1I.js";import"./CollapsiblePanel-ClbxZsmn.js";import"./MultiColumnSortDialog-CFwnfwMI.js";import"./MenuTrigger-Bkb6t9HP.js";import"./CompositeItem-tKjm3ITX.js";import"./ToolbarRootContext-DC4Rn718.js";import"./getDisabledMountTransitionStyles-CPDXZ_d3.js";import"./getPseudoElementBounds-D-Q4b5_k.js";import"./chevron-down-DE4Yil-_.js";import"./index-C4jC_mo-.js";import"./error-BQSdaUYK.js";import"./BaseCbacBanner-B-S-FPnG.js";import"./makeExternalStore-C5vRMRFb.js";import"./Tooltip-7NXZ14u1.js";import"./PopoverPopup-Cgz3LCEw.js";import"./debounce-DUf2Feva.js";import"./tick-CryZzvkg.js";import"./DropdownField-CfMw9HLs.js";import"./isEqual-B7tlXMU_.js";import"./withOsdkMetrics-o2mYvA2y.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
