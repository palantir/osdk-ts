import{j as r}from"./iframe-D4P7etlB.js";import{O as b}from"./object-table-CmDASLiD.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-QdKU90JP.js";import{u as g}from"./useOsdkClient-CeUx27Wr.js";import"./preload-helper-C2lPWNQK.js";import"./Table-pBQAdc4d.js";import"./index--jClFyuO.js";import"./Dialog-KLia9iKn.js";import"./cross-2BDiF0Hd.js";import"./svgIconContainer-U5WzETGn.js";import"./useBaseUiId-DvebyHll.js";import"./InternalBackdrop-DGlO_IGy.js";import"./composite-EmCbbtLr.js";import"./index-CryUHWua.js";import"./index-CwQjgJZY.js";import"./index-_8-zIP07.js";import"./useEventCallback-DkNCpCyH.js";import"./SkeletonBar-BO8Ocj6J.js";import"./LoadingCell-Do7dTGvR.js";import"./ColumnConfigDialog-CohusCj_.js";import"./DraggableList-BqyQGRR3.js";import"./search-BeidNAh3.js";import"./Input-qm2XT5j9.js";import"./useControlled-Bt7GOIrD.js";import"./Button-DSmwZlqW.js";import"./small-cross-DTEPBgMK.js";import"./ActionButton-DK6o_d0J.js";import"./Checkbox-DyvnuZ96.js";import"./useValueChanged-cSUG-TZB.js";import"./CollapsiblePanel-rtSyYl_a.js";import"./MultiColumnSortDialog-q1L_KY4V.js";import"./MenuTrigger-DR872eUl.js";import"./CompositeItem-Ca01-11J.js";import"./ToolbarRootContext-BJaSUWck.js";import"./getDisabledMountTransitionStyles-CX4qj900.js";import"./getPseudoElementBounds-hPghm1P1.js";import"./chevron-down-6L8qWnzl.js";import"./index-C2PCEa1N.js";import"./error-BEbiBzi3.js";import"./BaseCbacBanner-O1ctCsiT.js";import"./makeExternalStore-B40swsdd.js";import"./Tooltip-rdRqYy6n.js";import"./isObject-XT_Sb81H.js";import"./debounce-BMR9Ivsx.js";import"./tick-BK6XBZsH.js";import"./DropdownField-CWcrlvwC.js";import"./isEqual-CO15cxJ9.js";import"./_baseIsEqual-CsrvH1cu.js";import"./withOsdkMetrics-DllWQK_5.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};
