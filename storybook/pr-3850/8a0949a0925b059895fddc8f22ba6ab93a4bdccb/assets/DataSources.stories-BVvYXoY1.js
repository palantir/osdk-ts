import{j as r}from"./iframe-BAHulxpJ.js";import{O as b}from"./object-table-CNB57-cJ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DcZ0_Kz0.js";import{u as g}from"./useOsdkClient-BAgJREz7.js";import"./preload-helper-5aV3zbER.js";import"./Table-CxL2p-Va.js";import"./index-BQXofWlU.js";import"./Dialog-B6iU_o4S.js";import"./cross-B9q1-ifJ.js";import"./svgIconContainer-Cm-IMBSr.js";import"./useBaseUiId-4VVoMa3J.js";import"./InternalBackdrop-CRYKoqsR.js";import"./composite-CNE1JcBa.js";import"./index-DoA2rgK3.js";import"./index-WmCUx70V.js";import"./index-C5Lb6-VW.js";import"./useEventCallback-DpFCqp0u.js";import"./SkeletonBar-C0G3PmlI.js";import"./LoadingCell-C0BQjoN8.js";import"./ColumnConfigDialog-BiAKAKR-.js";import"./DraggableList-Y69Q8-LB.js";import"./search-OXklcGGP.js";import"./Input-BrRAx9lQ.js";import"./useControlled-DIFuATpA.js";import"./isEqual-ZCjsuvSA.js";import"./isObject-WPnHXGM7.js";import"./Button-CQQZwN_7.js";import"./ActionButton-BpQl9awy.js";import"./Checkbox-BfpNu74p.js";import"./useValueChanged-CJW4fpp5.js";import"./CollapsiblePanel-CoqkMeOl.js";import"./MultiColumnSortDialog-B8lY0q26.js";import"./MenuTrigger-CB6VXfFB.js";import"./CompositeItem-CzEEDLGh.js";import"./ToolbarRootContext-D5ZmFT_T.js";import"./getDisabledMountTransitionStyles-CoaV92BZ.js";import"./getPseudoElementBounds-4MRkHXcX.js";import"./chevron-down-pYaR9_5X.js";import"./index-B0GpXZaG.js";import"./error-CcsT2Wai.js";import"./BaseCbacBanner-DT8aZfxT.js";import"./makeExternalStore-Cb1RY-_V.js";import"./Tooltip-Tx9hRxwB.js";import"./PopoverPopup-DyAxudiR.js";import"./toNumber-DqdJyyKm.js";import"./tick-BDvW4uz3.js";import"./DropdownField-msHCB7CJ.js";import"./withOsdkMetrics-Bp9A7LOQ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
