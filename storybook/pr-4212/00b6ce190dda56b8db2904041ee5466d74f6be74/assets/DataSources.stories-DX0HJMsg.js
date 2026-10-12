import{j as r}from"./iframe-De0JvUDI.js";import{O as b}from"./object-table-QpxGEIzu.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BoRFEHII.js";import{u as g}from"./useOsdkClient-DKAeWvuz.js";import"./preload-helper-DW0Viam7.js";import"./Table-DA5xr5v4.js";import"./index-D2ucVBaK.js";import"./Dialog-bdLZ2FJb.js";import"./cross-D3NokT3S.js";import"./svgIconContainer-C40TH68P.js";import"./useBaseUiId-ClfRKfDN.js";import"./InternalBackdrop-BdrWkdLQ.js";import"./composite-Un7w28gc.js";import"./index-DSWLkZGL.js";import"./index-DRUMpWwL.js";import"./index-DPn3VSK_.js";import"./useEventCallback-CU5U5yco.js";import"./SkeletonBar-CWa0WbiQ.js";import"./LoadingCell-Cxk8ytcA.js";import"./ColumnConfigDialog-DW7uPPVa.js";import"./DraggableList-Bo93aEiY.js";import"./search-MoU8b7Yy.js";import"./Input-C_CGkTkl.js";import"./useControlled-CRrAgDjk.js";import"./Button-Bn-SxZv6.js";import"./small-cross--9BOpqr2.js";import"./ActionButton-DqBp-oot.js";import"./Checkbox-B-C0PSHq.js";import"./useValueChanged-B_zks5LA.js";import"./CollapsiblePanel-TSUxngdh.js";import"./MultiColumnSortDialog-B0i_cXtV.js";import"./MenuTrigger-Ckk1btDP.js";import"./CompositeItem-w6RFopZN.js";import"./ToolbarRootContext-Bxy7ajQD.js";import"./getDisabledMountTransitionStyles-BkAZ14rI.js";import"./getPseudoElementBounds-6gBn4IJF.js";import"./chevron-down-Yz9bQ-ge.js";import"./index-POBaPims.js";import"./error-D8UWFeng.js";import"./BaseCbacBanner-D6AKgLpj.js";import"./makeExternalStore-CvSmdJRq.js";import"./Tooltip-DXEGgoGu.js";import"./PopoverPopup-DNrWS3x8.js";import"./debounce-C6Uj-jcf.js";import"./tick-CabygoeH.js";import"./DropdownField-Bkm-lwWx.js";import"./isEqual-B1nIHKd3.js";import"./withOsdkMetrics-DlBld6qB.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
