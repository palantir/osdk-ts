import{j as r}from"./iframe-E4YUsTVF.js";import{O as b}from"./object-table-DWM0-L5g.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers--ARrpISY.js";import{u as g}from"./useOsdkClient-COGErPcP.js";import"./preload-helper-DS93hH50.js";import"./Table-5CsWYwnt.js";import"./index-33WajHAP.js";import"./Dialog-Cl3CkdMS.js";import"./cross-B0teiHtj.js";import"./svgIconContainer-BpDOXtMt.js";import"./useBaseUiId-Cmr5xOLR.js";import"./InternalBackdrop-6uJFTnu9.js";import"./composite-BPb4GIr2.js";import"./index-BD5alyvs.js";import"./index-C6lnPhSr.js";import"./index-BOSZpFJm.js";import"./useEventCallback-s63RPRIc.js";import"./SkeletonBar-COMgymc7.js";import"./LoadingCell-Bn9Rt80S.js";import"./ColumnConfigDialog-C1-Mg0Dr.js";import"./DraggableList-BBZ0k5a3.js";import"./search-C6TyODke.js";import"./Input-DzBskEWR.js";import"./useControlled-DcS_dYjp.js";import"./Button-D8Hq8qlo.js";import"./small-cross-DNql_UiE.js";import"./ActionButton-BNsdbYhX.js";import"./Checkbox-B1QYVWe8.js";import"./useValueChanged-_zlf4vQL.js";import"./CollapsiblePanel-CG_xY-4r.js";import"./MultiColumnSortDialog-DslMmcvG.js";import"./MenuTrigger-Bq0YGNRA.js";import"./CompositeItem-Dy6HQ5ii.js";import"./ToolbarRootContext-Z5Mk8e8P.js";import"./getDisabledMountTransitionStyles-nCIeRxS6.js";import"./getPseudoElementBounds-BB4Ow9wc.js";import"./chevron-down-BXAN807d.js";import"./index-C0oG0k9r.js";import"./error-C7OFda1X.js";import"./BaseCbacBanner-qUBT9zEy.js";import"./makeExternalStore-BPwvobNb.js";import"./Tooltip-FSxkyrOa.js";import"./PopoverPopup-Dp3SH3RM.js";import"./debounce-Dxqh-VtF.js";import"./tick-CpUkHDlc.js";import"./DropdownField-F9-Dgqve.js";import"./isEqual-DuvhWdoj.js";import"./withOsdkMetrics-BjBJAZAm.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
