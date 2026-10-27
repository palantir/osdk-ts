import{j as r}from"./iframe-D150H4vz.js";import{O as b}from"./object-table-DP4wjFEO.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CjsthZtH.js";import{u as g}from"./useOsdkClient-Dsa6FFc4.js";import"./preload-helper-BarckMkV.js";import"./Table-gGJNwpbp.js";import"./index-cVrSJLbz.js";import"./Dialog-GeD2sG_1.js";import"./cross-6mUh6O0a.js";import"./svgIconContainer-VUxlTV2E.js";import"./useBaseUiId-BEwnCbr0.js";import"./InternalBackdrop-D-pm-OPY.js";import"./composite-B_0CI6wq.js";import"./index-Cy-heBPu.js";import"./index-N3sDVMXC.js";import"./index-B1h1Ffvc.js";import"./useEventCallback-CBWL1hY-.js";import"./SkeletonBar-CvwasmzM.js";import"./LoadingCell-CV767y0j.js";import"./ColumnConfigDialog-BVWNFeUZ.js";import"./DraggableList-Bzc3U9HD.js";import"./search-B_D2n4ON.js";import"./Input-D0LXp2w8.js";import"./useControlled-lhlupqEn.js";import"./Button-wEOF9kbC.js";import"./small-cross-OFGcSSBP.js";import"./ActionButton-YzMno_H9.js";import"./Checkbox-CXCLecrd.js";import"./useValueChanged-CN5YLtWf.js";import"./CollapsiblePanel-CA9S5PKs.js";import"./MultiColumnSortDialog-BFMBTEvA.js";import"./MenuTrigger-CxpIKNcn.js";import"./CompositeItem-iPCNYUwO.js";import"./ToolbarRootContext-G9KEnSun.js";import"./getDisabledMountTransitionStyles-5KUPlXNs.js";import"./getPseudoElementBounds-CVhzJWTU.js";import"./chevron-down-BtdYGIbe.js";import"./index-CwtLN-AV.js";import"./error-EjSx_YOh.js";import"./BaseCbacBanner-DH3oT3a9.js";import"./makeExternalStore-BIWQlVyv.js";import"./Tooltip-BMJ7R0dC.js";import"./PopoverPopup-B10GF7su.js";import"./debounce-_Huulw1P.js";import"./tick-CYEAeUON.js";import"./DropdownField-StYPCDOl.js";import"./isEqual-Cu2b5RlF.js";import"./withOsdkMetrics-BMpR6FdW.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
