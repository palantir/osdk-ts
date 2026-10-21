import{j as r}from"./iframe-Z5B59nHv.js";import{O as b}from"./object-table-OfsX1fbr.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B4n7FY0i.js";import{u as g}from"./useOsdkClient-XgUCld_F.js";import"./preload-helper-B3LVR9LX.js";import"./Table-Bzx7BvY8.js";import"./index-cU0AVaQf.js";import"./Dialog-Bj0impzk.js";import"./cross-Cwrmhou9.js";import"./svgIconContainer-B_Sf7Uoj.js";import"./useBaseUiId-DN7B2pea.js";import"./InternalBackdrop-CT8QE5xx.js";import"./composite-Dna_oWev.js";import"./index-Csf5-H5s.js";import"./index-CwXTPSTU.js";import"./index-D5bko_OX.js";import"./useEventCallback-BOlmFfw4.js";import"./SkeletonBar-CDx-ZXnH.js";import"./LoadingCell-DJfiyKpX.js";import"./ColumnConfigDialog-Be0hyoWQ.js";import"./DraggableList-CRkefje3.js";import"./search-CH0ng29D.js";import"./Input-Bu230jB_.js";import"./useControlled-BQV59h-A.js";import"./Button-C8Wmmv8l.js";import"./small-cross-CTkkul48.js";import"./ActionButton-CQFbOgwD.js";import"./Checkbox-0LwzsijX.js";import"./useValueChanged-CM_W6cBg.js";import"./CollapsiblePanel-CkovPae2.js";import"./MultiColumnSortDialog-BQJBi4i8.js";import"./MenuTrigger-ec0LmwbP.js";import"./CompositeItem-jpYgtvmQ.js";import"./ToolbarRootContext-Bs124fL_.js";import"./getDisabledMountTransitionStyles-Ca4we0Dc.js";import"./getPseudoElementBounds-CnpaCKEL.js";import"./chevron-down-nfT9szK9.js";import"./index-DMp4QYwj.js";import"./error-DocjYaCq.js";import"./BaseCbacBanner-4T2a86qp.js";import"./makeExternalStore-rak7eNYQ.js";import"./Tooltip-Cs-Vtp60.js";import"./PopoverPopup-CC0rhnhV.js";import"./debounce-D-eTCzZU.js";import"./tick-C0PU8pW9.js";import"./DropdownField-CZiGi09a.js";import"./isEqual-C2OAKHDP.js";import"./withOsdkMetrics-DB3Tu-8Y.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
