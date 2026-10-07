import{j as r}from"./iframe-Cm8T158U.js";import{O as b}from"./object-table-Cb3Keis5.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Dt8OYrSP.js";import{u as g}from"./useOsdkClient-D7ijOYA2.js";import"./preload-helper-Dg6khx2b.js";import"./Table-DuOLMAs1.js";import"./index-CgyhAk5D.js";import"./Dialog-xyprgOLS.js";import"./cross-DRMZ0Z7-.js";import"./svgIconContainer-CwvpItZa.js";import"./useBaseUiId-DOlC9YEi.js";import"./InternalBackdrop-BGasJMVv.js";import"./composite-BF9l_TFl.js";import"./index-B-f--Lzy.js";import"./index-DBvuzU0Y.js";import"./index-B9yl0hZC.js";import"./useEventCallback-Dlv37ysr.js";import"./SkeletonBar-BQgWCrnN.js";import"./LoadingCell-Ch4zihh6.js";import"./ColumnConfigDialog-DMzj1S3_.js";import"./DraggableList-BxTxZMPB.js";import"./search-C5kq4KUb.js";import"./Input-CwlN5ff_.js";import"./useControlled-2KbdkYL7.js";import"./Button-CDJirsdr.js";import"./small-cross-CuC0UbdT.js";import"./ActionButton-CRZRMee5.js";import"./Checkbox-CKEyXbhH.js";import"./useValueChanged-DPtvyx-N.js";import"./CollapsiblePanel-CQcWGRlg.js";import"./MultiColumnSortDialog-_qM0Xd-W.js";import"./MenuTrigger-DMBZfMn5.js";import"./CompositeItem-DdfovVZg.js";import"./ToolbarRootContext-81tt_rrb.js";import"./getDisabledMountTransitionStyles-FM8gFJSe.js";import"./getPseudoElementBounds-Dy-hiku1.js";import"./chevron-down-CcWrtqn6.js";import"./index-D9OySAXe.js";import"./error-W0yg1EoP.js";import"./BaseCbacBanner-tcWoxYJS.js";import"./makeExternalStore-Bwp5qgF6.js";import"./Tooltip-f6_C30K5.js";import"./PopoverPopup-CIDF2QJi.js";import"./debounce-DlkYXKLI.js";import"./tick-qL-0oQVk.js";import"./DropdownField-Dl8m0YJt.js";import"./isEqual-D4LaE-Zu.js";import"./withOsdkMetrics-By5xofqX.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
