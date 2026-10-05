import{j as r}from"./iframe-BmTfPnlj.js";import{O as b}from"./object-table-DuwyKVEZ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-7RlycNPD.js";import{u as g}from"./useOsdkClient-Cv-kkUDW.js";import"./preload-helper-Bt_1BQmW.js";import"./Table-BQzYY4p1.js";import"./index-Bm1AuuXK.js";import"./Dialog-CLdygFMh.js";import"./cross-1FUbPxXE.js";import"./svgIconContainer-B7k9FdbM.js";import"./useBaseUiId-CCBNiAGi.js";import"./InternalBackdrop-D1OaTL7l.js";import"./composite-EJeYuU8b.js";import"./index-CXPEIkSW.js";import"./index-SU5jaKKw.js";import"./index-CpTFd5F4.js";import"./useEventCallback-CthUr-8o.js";import"./SkeletonBar-xGbITfKH.js";import"./LoadingCell-im-jO5xv.js";import"./ColumnConfigDialog-DMDJcMq5.js";import"./DraggableList-B9SvoxHN.js";import"./search-CB8fQpSi.js";import"./Input-DCbUCzbU.js";import"./useControlled-DnL-NKvx.js";import"./Button-B5eSVAk7.js";import"./small-cross-C79mcn34.js";import"./ActionButton-cPylYcIf.js";import"./Checkbox-BWJ9MvvS.js";import"./useValueChanged-DFht__m8.js";import"./CollapsiblePanel-Gfd_BnuO.js";import"./MultiColumnSortDialog-BQzltBiA.js";import"./MenuTrigger-B34U6tOS.js";import"./CompositeItem-BMTpDb-Q.js";import"./ToolbarRootContext-BGVsEm7y.js";import"./getDisabledMountTransitionStyles-BN0kS-V3.js";import"./getPseudoElementBounds-DXAkgdW7.js";import"./chevron-down-BcbzO8DN.js";import"./index-CIA5CVhr.js";import"./error-DAivNTLD.js";import"./BaseCbacBanner-DpXuSF7U.js";import"./makeExternalStore-D35ZSxQs.js";import"./Tooltip-BF_5RxMC.js";import"./PopoverPopup-DP_BVDXy.js";import"./debounce-rwBGYxkZ.js";import"./tick-BZF5qhIw.js";import"./DropdownField-CWmI2VfS.js";import"./isEqual-9M4q6ORL.js";import"./withOsdkMetrics-NcWgtcUH.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
