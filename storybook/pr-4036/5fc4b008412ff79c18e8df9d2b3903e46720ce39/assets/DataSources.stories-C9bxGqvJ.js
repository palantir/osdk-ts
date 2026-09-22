import{j as r}from"./iframe-SIMpA4b3.js";import{O as b}from"./object-table-BB3Ya4ql.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DHViH3E2.js";import{u as g}from"./useOsdkClient-BVwhdVV0.js";import"./preload-helper-u9tSabE5.js";import"./Table-BjzMLano.js";import"./index-CgEuHlu2.js";import"./Dialog-BBRxEOgL.js";import"./cross-A4PXp8OO.js";import"./svgIconContainer-Bv-MZKBZ.js";import"./useBaseUiId-Cayh95iR.js";import"./InternalBackdrop-BjdByZt4.js";import"./composite-BiHSWJxn.js";import"./index-DIMo0kF5.js";import"./index-BOG0Gn7K.js";import"./index-DByXNkAP.js";import"./useEventCallback-ek73AKE3.js";import"./SkeletonBar-CONPnUxb.js";import"./LoadingCell-gqdEkAd9.js";import"./ColumnConfigDialog-DxA9qQeo.js";import"./DraggableList-BmNlZwM9.js";import"./search-94czUh6x.js";import"./Input-DI62ffjf.js";import"./useControlled-aXvE1NEk.js";import"./Button-DePizqiT.js";import"./small-cross-vpu9zUmA.js";import"./ActionButton-Cn9bBLTs.js";import"./Checkbox-DZGiW7UX.js";import"./useValueChanged-6XUEwvLB.js";import"./CollapsiblePanel-fOVUAOYi.js";import"./MultiColumnSortDialog-C_oWOlUB.js";import"./MenuTrigger-BiJqZYIa.js";import"./CompositeItem-CnRf7Dd6.js";import"./ToolbarRootContext-B55ymUvU.js";import"./getDisabledMountTransitionStyles-DJHymdjY.js";import"./getPseudoElementBounds-BOBP5ItM.js";import"./chevron-down-D2KA7jZq.js";import"./index-uzBTaDFQ.js";import"./error-CGNw4dMZ.js";import"./BaseCbacBanner-BP0Cqn0m.js";import"./makeExternalStore-DPGOJSPa.js";import"./Tooltip-CJ-HIpsM.js";import"./PopoverPopup-KmvLih8v.js";import"./debounce-DKuXkfuK.js";import"./tick-D3sBJRzy.js";import"./DropdownField-DrtQyHqD.js";import"./isEqual-B3AMbcSK.js";import"./withOsdkMetrics-DYZT3YgQ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
