import{j as r}from"./iframe-DiX2626k.js";import{O as b}from"./object-table-D3gr3Mpc.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B4aG4PaC.js";import{u as g}from"./useOsdkClient-5SwITSvW.js";import"./preload-helper-CgOT8OGd.js";import"./Table-DtbOZWAd.js";import"./index-C_a3B7P8.js";import"./Dialog-D_br3pPB.js";import"./cross-ChthWFmt.js";import"./svgIconContainer-BHXjiRCE.js";import"./useBaseUiId-Dw9BhH-r.js";import"./InternalBackdrop-cTMtjssL.js";import"./composite-BiL7kwGo.js";import"./index-BU1sDqZl.js";import"./index-BN-4XXfM.js";import"./index-DPWlnP4D.js";import"./useEventCallback-CA_JVHJ1.js";import"./SkeletonBar-DSeMrJwC.js";import"./LoadingCell-Bh3S_WfL.js";import"./ColumnConfigDialog-CJtUG27g.js";import"./DraggableList-CZ1MIVA8.js";import"./search-Ch6GmwTu.js";import"./Input-0BqYVGVX.js";import"./useControlled-CxjPKzUJ.js";import"./isEqual-DEKGYxXe.js";import"./isObject-CXcvN3kl.js";import"./Button-DcxIJd10.js";import"./ActionButton-zWukBAep.js";import"./Checkbox-BXFMQuBS.js";import"./useValueChanged-BN-eh1-G.js";import"./CollapsiblePanel-CfY2wZ25.js";import"./MultiColumnSortDialog-CGkw4JOQ.js";import"./MenuTrigger-th41DMhC.js";import"./CompositeItem-ZBpRCkxX.js";import"./ToolbarRootContext-DHdMmgSm.js";import"./getDisabledMountTransitionStyles-DLljnWq6.js";import"./getPseudoElementBounds-BnlTiciN.js";import"./chevron-down-BU7zIy-t.js";import"./index-q-Uvoyav.js";import"./error-BCYvkDQZ.js";import"./BaseCbacBanner-BjACYSVj.js";import"./makeExternalStore-BnR4KHg7.js";import"./Tooltip-BiefMEZh.js";import"./PopoverPopup-B1Yhtsuj.js";import"./toNumber-iY1WLnn2.js";import"./tick-BXKWEd6P.js";import"./DropdownField-7lSUVTV7.js";import"./withOsdkMetrics-D26ty9CF.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
