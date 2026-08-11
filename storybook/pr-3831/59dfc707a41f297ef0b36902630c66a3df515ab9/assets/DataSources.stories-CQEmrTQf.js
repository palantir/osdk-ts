import{j as r}from"./iframe-Da5478sC.js";import{O as b}from"./object-table-DtiJO51Q.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DjtNAOYe.js";import{u as g}from"./useOsdkClient-BRPJd27D.js";import"./preload-helper-DIyxpJKV.js";import"./Table-CMNOjmkQ.js";import"./index-DNUZO8F_.js";import"./Dialog-DBKDuyse.js";import"./cross-CnU_MB9h.js";import"./svgIconContainer-C6HFRanw.js";import"./useBaseUiId-D_WzVsv0.js";import"./InternalBackdrop-COzQqh_O.js";import"./composite-DnOwfSyn.js";import"./index-BxjGMzYA.js";import"./index-Dg9rFNqX.js";import"./index-BnogVFR6.js";import"./useEventCallback-gkM1vPOl.js";import"./SkeletonBar-DKwwkyqs.js";import"./LoadingCell-CgwHE-u8.js";import"./ColumnConfigDialog-CfPFnbZz.js";import"./DraggableList-CmqONMxF.js";import"./search-CeQH1KSS.js";import"./Input-C8_9EasY.js";import"./useControlled-CbcU3cLx.js";import"./isEqual-flbVqJAh.js";import"./isObject-OhMF8RZ7.js";import"./Button-u_Jmn4Ee.js";import"./ActionButton-CKvKYF4x.js";import"./Checkbox-Dm9tg9z2.js";import"./useValueChanged-D8Ryr8am.js";import"./CollapsiblePanel-BBT7QUlS.js";import"./MultiColumnSortDialog-6FGuFXtY.js";import"./MenuTrigger-DJohB7N6.js";import"./CompositeItem-BYPj8kaj.js";import"./ToolbarRootContext-DU3i--I5.js";import"./getDisabledMountTransitionStyles-DgJLPqi4.js";import"./getPseudoElementBounds-Blt9baCd.js";import"./chevron-down-DDVlB3SF.js";import"./index-2vHiu-ON.js";import"./error-CuOqzkrV.js";import"./BaseCbacBanner-C9AocZ2s.js";import"./makeExternalStore-DxUA_WKV.js";import"./Tooltip-BRr5t85E.js";import"./PopoverPopup-B6NhKGjc.js";import"./toNumber-C4gPlVsP.js";import"./tick-CFs0YPaU.js";import"./DropdownField-CJUYNfrp.js";import"./withOsdkMetrics-BXagX8Z0.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
