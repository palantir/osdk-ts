import{j as r}from"./iframe-Bx-FSmYs.js";import{O as b}from"./object-table-Cv1yp6hD.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-99bkgdoj.js";import{u as g}from"./useOsdkClient-4GcPKkIA.js";import"./preload-helper-DgijergL.js";import"./Table-Dbp6APwZ.js";import"./index-xwvc2Shv.js";import"./Dialog-TQR3WEGg.js";import"./cross-BOo5QBm9.js";import"./svgIconContainer-CBLTX1NK.js";import"./useBaseUiId-BGi2L2nz.js";import"./InternalBackdrop-B8hquDAO.js";import"./composite-mmpRjkxT.js";import"./index-CIkpzaA0.js";import"./index-Ye47VGO5.js";import"./index-xtICGEp3.js";import"./useEventCallback-BGLusK4B.js";import"./SkeletonBar-BFUHP2GD.js";import"./LoadingCell-vwI2MB3B.js";import"./ColumnConfigDialog-1hcgSYsk.js";import"./DraggableList-DsHzmqx-.js";import"./search-CdlZ7Qxj.js";import"./Input-Cv-wNC9i.js";import"./useControlled-DFOJ9xFP.js";import"./Button--MuiOxa3.js";import"./small-cross-C5HaUcq8.js";import"./ActionButton-D6Z09ARR.js";import"./Checkbox-DBH3W9y2.js";import"./useValueChanged-CaNUz0pS.js";import"./CollapsiblePanel-D8RgHLfO.js";import"./MultiColumnSortDialog-NOQ-MfWj.js";import"./MenuTrigger-D8gV95KI.js";import"./CompositeItem-CMA7rFte.js";import"./ToolbarRootContext-DpyqD2o0.js";import"./getDisabledMountTransitionStyles-CvhueaJp.js";import"./getPseudoElementBounds-tUYGl_H1.js";import"./chevron-down-Buw4ucuN.js";import"./index-BY0uRhrX.js";import"./error-DdvC7qFd.js";import"./BaseCbacBanner-Ch_sTin_.js";import"./makeExternalStore-CCy_wMev.js";import"./Tooltip-LQkFV94i.js";import"./PopoverPopup-CKS7Qwq2.js";import"./debounce-D3Ov_i6N.js";import"./tick-DWhWBN2e.js";import"./DropdownField-BNciL4Ne.js";import"./isEqual-ErNB6Z1g.js";import"./withOsdkMetrics-UuLHfX-P.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
