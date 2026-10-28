import{j as r}from"./iframe-CMYq_tcz.js";import{O as b}from"./object-table-chC0aMy3.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C9WLi7aX.js";import{u as g}from"./useOsdkClient-BF6Arrdj.js";import"./preload-helper-CM9HDmHc.js";import"./Table-HbIDX6wp.js";import"./index-xVeJSQI1.js";import"./Dialog-BVb0pQgK.js";import"./cross-dRI083CA.js";import"./svgIconContainer-exLH2FjZ.js";import"./useBaseUiId-DSFxpXlB.js";import"./InternalBackdrop-BcLUyUm4.js";import"./composite-DiZpwFe_.js";import"./index-BY7tovu0.js";import"./index-BFodXj3S.js";import"./index-CbXc65Z2.js";import"./useEventCallback-Ce6dWKw4.js";import"./SkeletonBar-Tsn6iOqu.js";import"./LoadingCell-CydlYTU4.js";import"./ColumnConfigDialog-jtuM7b8R.js";import"./DraggableList-BYvbYXgI.js";import"./search-QHRMuF2d.js";import"./Input-C2JC1_0u.js";import"./useControlled-Cizv6LhD.js";import"./Button-Cx35rN_X.js";import"./small-cross-DgdOOgoQ.js";import"./ActionButton-L6DUuvD5.js";import"./Checkbox-BHMoxAgM.js";import"./useValueChanged-BCgyiXw4.js";import"./CollapsiblePanel-DQ-gJg9V.js";import"./MultiColumnSortDialog-qD0rIV6_.js";import"./MenuTrigger-BrBgYbtl.js";import"./CompositeItem-zd83RHVO.js";import"./ToolbarRootContext-BkwDgNb_.js";import"./getDisabledMountTransitionStyles-UwTH6edI.js";import"./getPseudoElementBounds-eVkaC__S.js";import"./chevron-down-BNRseUEV.js";import"./index-C0T6zzR8.js";import"./error-BMW1MkdC.js";import"./BaseCbacBanner-pp-M4p2X.js";import"./makeExternalStore-DnxSotUN.js";import"./Tooltip-DibPgXFy.js";import"./PopoverPopup-BZ8d3rO1.js";import"./debounce-BQrMOEs3.js";import"./tick-BWkBomqM.js";import"./DropdownField-BI-yI3jd.js";import"./isEqual-BJnJYBP9.js";import"./withOsdkMetrics-KpOnxc9_.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
