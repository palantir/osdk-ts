import{j as r}from"./iframe-BVSi64oE.js";import{O as b}from"./object-table-BUfh-0cO.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DqFBLvtZ.js";import{u as g}from"./useOsdkClient-D_sxubmW.js";import"./preload-helper-BU1z3h6W.js";import"./Table-ByCJSYQA.js";import"./index-CuytY3fR.js";import"./Dialog-DRQ9HBjw.js";import"./cross-BSD5cpOi.js";import"./svgIconContainer-DOaF4Z7d.js";import"./useBaseUiId-CqqBN_pD.js";import"./InternalBackdrop-VS02Mzpv.js";import"./composite-iCAL7ZoF.js";import"./index-XyA3IOnM.js";import"./index-De4RyO4Q.js";import"./index-DUkSDzym.js";import"./useEventCallback-BcINQZvV.js";import"./SkeletonBar-BTvQIWmF.js";import"./LoadingCell-B6ep17sU.js";import"./ColumnConfigDialog-DUAoYgYr.js";import"./DraggableList-DvSKYvbS.js";import"./search-DCcotSfq.js";import"./Input-9e4VYX3J.js";import"./useControlled-oPybVTav.js";import"./Button-BWzl1MwA.js";import"./small-cross-VuonqlHg.js";import"./ActionButton-B1cEW1Xi.js";import"./Checkbox-loiJC6ut.js";import"./useValueChanged-DLdh8GlI.js";import"./CollapsiblePanel-iyQmEFH5.js";import"./MultiColumnSortDialog-CORMbeTK.js";import"./MenuTrigger-CVT83sfS.js";import"./CompositeItem-D9Lav6h_.js";import"./ToolbarRootContext-nMjJNdxo.js";import"./getDisabledMountTransitionStyles-DOr5eM0I.js";import"./getPseudoElementBounds-m7eRXhrV.js";import"./chevron-down-B1I3Tews.js";import"./index-DhvfxU91.js";import"./error-DNoXedqp.js";import"./BaseCbacBanner-DnPVzRzm.js";import"./makeExternalStore-BZP7re_5.js";import"./Tooltip-qdMmTZin.js";import"./isObject-CZdk459R.js";import"./debounce-BY-7KZ0_.js";import"./tick-Bve-lzI5.js";import"./DropdownField-BS4JU7i-.js";import"./isEqual-Dd4C4IGQ.js";import"./_baseIsEqual-B22c0qJi.js";import"./withOsdkMetrics-DG2TDFRU.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
