import{j as r}from"./iframe-BIPFZdnt.js";import{O as b}from"./object-table-C3Ew3ETh.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-aYcgr9Me.js";import{u as g}from"./useOsdkClient-CE591Hai.js";import"./preload-helper-DULsO4Op.js";import"./Table-CqgE67re.js";import"./index-6cFzeUf5.js";import"./Dialog-CDsBkrX4.js";import"./cross-B2RfYXui.js";import"./svgIconContainer-OcBsH039.js";import"./useBaseUiId-B393kpwA.js";import"./InternalBackdrop-PONnvURB.js";import"./composite-nxEx2m3K.js";import"./index-B2oB8T93.js";import"./index-WnBH7n6a.js";import"./index-Br3v5DWH.js";import"./useEventCallback-Dscbje0V.js";import"./SkeletonBar-DbVyxO5b.js";import"./LoadingCell-BksaunVj.js";import"./ColumnConfigDialog-AIUYrbfs.js";import"./DraggableList-CQbRnG-N.js";import"./search-BgTvK5dn.js";import"./Input-DY9incTR.js";import"./useControlled-dYV3UboW.js";import"./isEqual-B9hIYsbF.js";import"./isObject-DrwUnXlP.js";import"./Button-DvODXE55.js";import"./ActionButton-Dgq0eVpD.js";import"./Checkbox-gAl3Zh-r.js";import"./useValueChanged-BFUbQ0vt.js";import"./CollapsiblePanel-88atgMcL.js";import"./MultiColumnSortDialog-DYXxAhzI.js";import"./MenuTrigger-CF5lnnzD.js";import"./CompositeItem-C9VVNI4z.js";import"./ToolbarRootContext-QEEdrt7Q.js";import"./getDisabledMountTransitionStyles-CuTEhDyu.js";import"./getPseudoElementBounds-BnG6WxCG.js";import"./chevron-down-DgPtyBzm.js";import"./index-BfX4-kUd.js";import"./error-Fv9LpI3F.js";import"./BaseCbacBanner-CAXXbZKG.js";import"./makeExternalStore-DP3axzc1.js";import"./Tooltip-CP5eHo2R.js";import"./PopoverPopup-CeUFsCnB.js";import"./toNumber-DG2bVepK.js";import"./tick-DrAlrCM7.js";import"./DropdownField-P2KR5l-Z.js";import"./withOsdkMetrics-nVQK5dsv.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
