import{j as r}from"./iframe-CrxwL2-E.js";import{O as b}from"./object-table-CdCKGQ1U.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Dg5a6x5J.js";import{u as g}from"./useOsdkClient-BA2LnazC.js";import"./preload-helper-D8KRM-Lu.js";import"./Table-B42d_fP5.js";import"./index-CnRzHgPn.js";import"./Dialog-D9K-Kurk.js";import"./cross-tJCZU9dn.js";import"./svgIconContainer-BZaQ0M_F.js";import"./useBaseUiId-CHWsF01c.js";import"./InternalBackdrop-DA84w9Xz.js";import"./composite-D_Dq2ROx.js";import"./index-Bk2-PvCo.js";import"./index-C9NLr5O0.js";import"./index-D9YXYt3K.js";import"./useEventCallback-BcRGgLnB.js";import"./SkeletonBar-BLCNwj4V.js";import"./LoadingCell-vFBraOHC.js";import"./ColumnConfigDialog-CiSmf7C5.js";import"./DraggableList-C3pcPIXV.js";import"./search-KIDsIAAK.js";import"./Input-WST8cByM.js";import"./useControlled-CMyIOoxO.js";import"./Button-BPy55ub1.js";import"./small-cross-CMkmo5Aj.js";import"./ActionButton-BQ5ayi6b.js";import"./Checkbox-BB2uWGgx.js";import"./useValueChanged-DuqgSL6S.js";import"./CollapsiblePanel-CEbB2UNo.js";import"./MultiColumnSortDialog-x4LFZ01l.js";import"./MenuTrigger-DA2hCRC6.js";import"./CompositeItem-DXFhogU1.js";import"./ToolbarRootContext-Bp3YN5W7.js";import"./getDisabledMountTransitionStyles-B7vaymp7.js";import"./getPseudoElementBounds-Dd8-3VJH.js";import"./chevron-down-DTO6IXlJ.js";import"./index-BrHupWVl.js";import"./error-CIWz4OVj.js";import"./BaseCbacBanner-BJR98Az1.js";import"./makeExternalStore-BiTIhgiy.js";import"./Tooltip-C8FjudTm.js";import"./PopoverPopup-CXhQbr-D.js";import"./debounce-DK8acQf4.js";import"./tick-D-sBs8EZ.js";import"./DropdownField-BYVn9WPt.js";import"./isEqual-D0Kz1RWM.js";import"./withOsdkMetrics-CQbNyfnl.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
