import{j as r}from"./iframe-Cg6ASuCP.js";import{O as b}from"./object-table-Bjcz7bbV.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BUCGvlFA.js";import{u as g}from"./useOsdkClient-fJTfa-DY.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DfTsClZx.js";import"./index-V7Glt-8h.js";import"./Dialog-mMmJOESS.js";import"./cross-SbgvyX3H.js";import"./svgIconContainer-DcmQCQdV.js";import"./useBaseUiId-B89yFkvR.js";import"./InternalBackdrop-mi8ZWe1N.js";import"./composite-bA2XaVwF.js";import"./index-B5FPzhRE.js";import"./index-BIztXxky.js";import"./index-CkTqgvGy.js";import"./useEventCallback-BucIXtc8.js";import"./SkeletonBar-CK58xaGD.js";import"./LoadingCell-CRmF0eo7.js";import"./ColumnConfigDialog-Cq6rALBK.js";import"./DraggableList-B-rXfia1.js";import"./search-WAfjvqtM.js";import"./Input-CWI7iTNo.js";import"./useControlled-CnGpIwtD.js";import"./isEqual-CXkZB2pT.js";import"./isObject-B2DRC6w3.js";import"./Button-KGRl-1x_.js";import"./ActionButton-CGl6msdG.js";import"./Checkbox-IOTuwp8F.js";import"./useValueChanged-2Khr2vsL.js";import"./CollapsiblePanel-Cza2zXbU.js";import"./MultiColumnSortDialog-CiuR-z3s.js";import"./MenuTrigger-BfUVXqr2.js";import"./CompositeItem-UIqmeTDm.js";import"./ToolbarRootContext-CkyWDlNb.js";import"./getDisabledMountTransitionStyles-CpoZCCtH.js";import"./getPseudoElementBounds-BUFIRwYb.js";import"./chevron-down-CS-4kcLV.js";import"./index-BifWs9Kg.js";import"./error-C4_u6BdE.js";import"./BaseCbacBanner-COg9wZkT.js";import"./makeExternalStore-CqKKW2oa.js";import"./Tooltip-Ch0Baty8.js";import"./PopoverPopup-CBNXtRDD.js";import"./toNumber-BPwhhvms.js";import"./tick-Bi_LeeaD.js";import"./DropdownField-ky6IQ2yo.js";import"./withOsdkMetrics-B9NdYHre.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
