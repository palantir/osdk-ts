import{j as r}from"./iframe-BTO3ph4q.js";import{O as b}from"./object-table-ZtjQh0D1.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DcGxTHFL.js";import{u as g}from"./useOsdkClient-NkKMF8Dg.js";import"./preload-helper-CtN9PVAK.js";import"./Table-D1saxuSL.js";import"./index-x3hFww3S.js";import"./Dialog-twcDSStr.js";import"./cross-O3i2QmOd.js";import"./svgIconContainer-CevlEVVg.js";import"./useBaseUiId-1MvsnHF0.js";import"./InternalBackdrop-B8D4UxU4.js";import"./composite-7kQ7OmSD.js";import"./index-CyMmgwkh.js";import"./index-BtRkO4nr.js";import"./index-OkUz4tnS.js";import"./useEventCallback-DVIoo-le.js";import"./SkeletonBar-DnIcD4-7.js";import"./LoadingCell-Dr1yP9hd.js";import"./ColumnConfigDialog-CzpHCp2S.js";import"./DraggableList-kTaWSR77.js";import"./search-DuX0harO.js";import"./Input-D7e4vYID.js";import"./useControlled-D3IlQblQ.js";import"./Button-CQHuz0SR.js";import"./small-cross-BntLkeb7.js";import"./ActionButton-vd1tLPE-.js";import"./Checkbox-CIBOJMyv.js";import"./useValueChanged-RARJ6Fyz.js";import"./CollapsiblePanel-CADx3q8o.js";import"./MultiColumnSortDialog-D6_aaGU_.js";import"./MenuTrigger-Bx-NfINM.js";import"./CompositeItem-D4n0rGlc.js";import"./ToolbarRootContext-0OHqE9f1.js";import"./getDisabledMountTransitionStyles-C7iSZ93K.js";import"./getPseudoElementBounds-DUZbWFdi.js";import"./chevron-down-BJp9RPDS.js";import"./index-DiCFXBX4.js";import"./error-Z9A5zRFa.js";import"./BaseCbacBanner-Ds7WPPqk.js";import"./makeExternalStore-D6jtgBE4.js";import"./Tooltip-tv9WXm6u.js";import"./PopoverPopup-CUZk9_WB.js";import"./debounce-BQY7DgD2.js";import"./tick-B6zWYNj2.js";import"./DropdownField-CtnJsT3u.js";import"./isEqual--Y75NqJ1.js";import"./withOsdkMetrics-B5F2x99w.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
