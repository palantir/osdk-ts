import{j as r}from"./iframe-9L4vMhG3.js";import{O as b}from"./object-table-DlLw0Dw8.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Dz0UI9rV.js";import{u as g}from"./useOsdkClient-B0jbpyHy.js";import"./preload-helper-BmqcIEn7.js";import"./Table-CiEgzwih.js";import"./index-_pdaMpiB.js";import"./Dialog-CEYM9xS_.js";import"./cross-BpNWdRWr.js";import"./svgIconContainer-D9lmXivJ.js";import"./useBaseUiId-D-sjda76.js";import"./InternalBackdrop-Cen5tzmJ.js";import"./composite-Bx4vMELY.js";import"./index-Dxea6VRI.js";import"./index-B9Ie_NWS.js";import"./index-DPjA9htS.js";import"./useEventCallback-CQVpKJiq.js";import"./SkeletonBar-DG_ilxDz.js";import"./LoadingCell-CTXKMQu7.js";import"./ColumnConfigDialog-EKNQe5rB.js";import"./DraggableList-DjUTDOw-.js";import"./search-Xcg7LzRX.js";import"./Input-Bux853dQ.js";import"./useControlled-CD9rYDgT.js";import"./isEqual-Dd0SMg4R.js";import"./isObject-bWt81XNR.js";import"./Button-drHfdObt.js";import"./ActionButton-UywGJSCF.js";import"./Checkbox-D94n2NGO.js";import"./useValueChanged-C7jgUmnL.js";import"./CollapsiblePanel-DYm1U3zT.js";import"./MultiColumnSortDialog-Tl8jPhNb.js";import"./MenuTrigger-CXgtBZpD.js";import"./CompositeItem-BfdUBqPa.js";import"./ToolbarRootContext-DnGH9Ipt.js";import"./getDisabledMountTransitionStyles-CPYcuQBc.js";import"./getPseudoElementBounds-cc7gm7GG.js";import"./chevron-down-B91fbDl5.js";import"./index-DAKTJ6F7.js";import"./error-XbW8w7e0.js";import"./BaseCbacBanner-DI9IEL2s.js";import"./makeExternalStore-DlzWWYhg.js";import"./Tooltip-CX_775Pp.js";import"./PopoverPopup-D4s4p01u.js";import"./toNumber-C7Jq7yzN.js";import"./tick-jg97K6ah.js";import"./DropdownField-3bMQt7y0.js";import"./withOsdkMetrics-CRdZIZCN.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
