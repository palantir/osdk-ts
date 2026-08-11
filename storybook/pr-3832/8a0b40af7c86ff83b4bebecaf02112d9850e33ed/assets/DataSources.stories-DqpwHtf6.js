import{j as r}from"./iframe-CCe3oj1_.js";import{O as b}from"./object-table-CROb0HRq.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B800cruj.js";import{u as g}from"./useOsdkClient-Dn8nHjzs.js";import"./preload-helper-DFkWM7QD.js";import"./Table-DoIqAcaB.js";import"./index-BPyzy7qu.js";import"./Dialog-BFaMtkwF.js";import"./cross-BDTGYN03.js";import"./svgIconContainer-BcG3A1s1.js";import"./useBaseUiId-DWTWML2t.js";import"./InternalBackdrop-1uHa4FUe.js";import"./composite-DqbFj3tO.js";import"./index-DTGTU5kW.js";import"./index-CkYleNx0.js";import"./index-CQvhHm5l.js";import"./useEventCallback-QjNDkh9X.js";import"./SkeletonBar-BNlO8cb5.js";import"./LoadingCell-D34UfXj6.js";import"./ColumnConfigDialog-aR_PIIpd.js";import"./DraggableList-DrokCpor.js";import"./search-CNcIQLsn.js";import"./Input-B1ejoj9_.js";import"./useControlled-AVWP1zK_.js";import"./isEqual-BwtxOLUF.js";import"./isObject-BSF7yE2W.js";import"./Button-DYv7LQZU.js";import"./ActionButton-BWTIEXpg.js";import"./Checkbox-CjAK5ooC.js";import"./useValueChanged-CLC9UCU3.js";import"./CollapsiblePanel-BP-T8vPY.js";import"./MultiColumnSortDialog-DZt2E2UT.js";import"./MenuTrigger-CMuSifoI.js";import"./CompositeItem-DcCJzpjE.js";import"./ToolbarRootContext-D_9Dq2Dw.js";import"./getDisabledMountTransitionStyles-TfqTWo-i.js";import"./getPseudoElementBounds-DgTPtVsI.js";import"./chevron-down-5Odr2hDD.js";import"./index-DpZ-Ikd6.js";import"./error-gLdyLM8b.js";import"./BaseCbacBanner-CbF4nqNt.js";import"./makeExternalStore-ee2D0j5X.js";import"./Tooltip-C9jv0QeK.js";import"./PopoverPopup-B1NzfUu_.js";import"./toNumber-CAcNYWAx.js";import"./tick-qjntkw8T.js";import"./DropdownField-Bdf2R4vw.js";import"./withOsdkMetrics-BE4radvo.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
