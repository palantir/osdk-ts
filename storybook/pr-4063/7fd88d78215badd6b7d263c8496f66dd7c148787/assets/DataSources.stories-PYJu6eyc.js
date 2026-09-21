import{j as r}from"./iframe-BdwSD-4g.js";import{O as b}from"./object-table-Dkf_Wsl_.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Cek4CQLT.js";import{u as g}from"./useOsdkClient-BNfS8Hn2.js";import"./preload-helper-Q7k08PSu.js";import"./Table-PC-pI0ZM.js";import"./index-DOSkW-9K.js";import"./Dialog-C2jm4GPq.js";import"./cross-ALmhnM-F.js";import"./svgIconContainer-DA4wNVnR.js";import"./useBaseUiId-Dw0luXrm.js";import"./InternalBackdrop-D1YI8GOv.js";import"./composite-5NyIARcH.js";import"./index-Af48Q6og.js";import"./index-FAuKkFnB.js";import"./index-CxgrbPDy.js";import"./useEventCallback-DfqzSU5_.js";import"./SkeletonBar-D6TZf1Z5.js";import"./LoadingCell-CptRX9Y8.js";import"./ColumnConfigDialog-CzZ4BQy7.js";import"./DraggableList-C1r11s45.js";import"./search-zOT-eX5y.js";import"./Input-DFvD33w1.js";import"./useControlled-D1Q7B9_S.js";import"./Button-DT6t-JAZ.js";import"./small-cross-vRrhE9Ne.js";import"./ActionButton-CSVrvW6D.js";import"./Checkbox-p54CWvtE.js";import"./useValueChanged-CIIin2AA.js";import"./CollapsiblePanel-XzAfxH9Z.js";import"./MultiColumnSortDialog-C4bbbTVf.js";import"./MenuTrigger-CuNIwuZO.js";import"./CompositeItem-_wAlG9yG.js";import"./ToolbarRootContext-BvaeGVZU.js";import"./getDisabledMountTransitionStyles-B9XqalxW.js";import"./getPseudoElementBounds-BdDow4jC.js";import"./chevron-down-Dn6L64Ru.js";import"./index-gxw3sShd.js";import"./error-BrVGJ7z5.js";import"./BaseCbacBanner-C59qxhDp.js";import"./makeExternalStore-BaL0IM38.js";import"./Tooltip-BeEpEYbq.js";import"./PopoverPopup-CkTzI9ep.js";import"./debounce-Bij6cuiB.js";import"./tick-BCAUztTc.js";import"./DropdownField-BLDXBK7q.js";import"./isEqual-B34gs6iF.js";import"./withOsdkMetrics-De7Bt3A9.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
