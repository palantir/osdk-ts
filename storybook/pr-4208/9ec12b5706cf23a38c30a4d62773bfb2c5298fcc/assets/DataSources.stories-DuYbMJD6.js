import{j as r}from"./iframe-RocwcLA1.js";import{O as b}from"./object-table-BrowN1D4.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D5uQYOhy.js";import{u as g}from"./useOsdkClient-6Q8tx1W_.js";import"./preload-helper-Bi11_lQh.js";import"./Table-BeLYz7uY.js";import"./index-CPYhK6Tm.js";import"./Dialog-CuZ5OQb1.js";import"./cross-BgyJlmiP.js";import"./svgIconContainer-DLWtp0BU.js";import"./useBaseUiId-CBnRLDYk.js";import"./InternalBackdrop-DmC9pE0x.js";import"./composite-CcO-1qH0.js";import"./index-BnYAAGls.js";import"./index-CYrtNoCb.js";import"./index-CqKREmsT.js";import"./useEventCallback-CTQI-oGY.js";import"./SkeletonBar-DsYTpZqP.js";import"./LoadingCell-ObbDg5k5.js";import"./ColumnConfigDialog-B_Lr4FBf.js";import"./DraggableList-Ddkm9W7N.js";import"./search-vjT1hCHx.js";import"./Input-CcAG7gXy.js";import"./useControlled-Bbowgw5B.js";import"./Button-BNn-NlyQ.js";import"./small-cross-Dl_P2df6.js";import"./ActionButton-BCQKfrqp.js";import"./Checkbox-Ck2XR2UN.js";import"./useValueChanged-BedL59h3.js";import"./CollapsiblePanel-CmwuXWb4.js";import"./MultiColumnSortDialog-DLBjnobr.js";import"./MenuTrigger-CkSTpP0b.js";import"./CompositeItem-CRCvuWR7.js";import"./ToolbarRootContext-Cn6bmXqK.js";import"./getDisabledMountTransitionStyles-Cz_F6_AI.js";import"./getPseudoElementBounds-Dgc6Xv0e.js";import"./chevron-down-C7FnpsrF.js";import"./index-DmXTiMr0.js";import"./error-DACjt9aW.js";import"./BaseCbacBanner-DURaiKed.js";import"./makeExternalStore-B-sos_Fc.js";import"./Tooltip-CaSy6w0D.js";import"./PopoverPopup-CewEisyu.js";import"./debounce-V1uFoEkK.js";import"./tick-ZxNKxEMa.js";import"./DropdownField-i887lUmw.js";import"./isEqual-DMqshNMZ.js";import"./withOsdkMetrics-D9G4bz54.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
