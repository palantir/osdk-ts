import{j as r}from"./iframe-Bzybdyuo.js";import{O as b}from"./object-table-Ci06Cb6a.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Csma6mAp.js";import{u as g}from"./useOsdkClient-CgU6C7-g.js";import"./preload-helper-DvhPMCjI.js";import"./Table-s-LOx-O1.js";import"./index-C7I7uOuD.js";import"./Dialog-DKwwdXiW.js";import"./cross-CE07U7-n.js";import"./svgIconContainer-CT7GuDuE.js";import"./useBaseUiId-LiIOLQsT.js";import"./InternalBackdrop-BteoWMrF.js";import"./composite-BlLYhcU2.js";import"./index-gwzeuytQ.js";import"./index-DyzMZFsL.js";import"./index-Cj0RLd6Y.js";import"./useEventCallback-BIS3lrlS.js";import"./SkeletonBar-M1Ic1N8F.js";import"./LoadingCell-DlD1fvlw.js";import"./ColumnConfigDialog-DHll2Vtm.js";import"./DraggableList-CKJ156pY.js";import"./search-DvoFgpQI.js";import"./Input-CdTlwUNA.js";import"./useControlled-Dmv8kSAc.js";import"./isEqual-a7a6QpMS.js";import"./isObject-CbXsQEYM.js";import"./Button-BVoTv4hE.js";import"./ActionButton-HSnORvpF.js";import"./Checkbox-CrI4yRfS.js";import"./useValueChanged-BeDSHPhg.js";import"./CollapsiblePanel-DIZt_nYD.js";import"./MultiColumnSortDialog-B1OBUidD.js";import"./MenuTrigger-CH3kZWz7.js";import"./CompositeItem-Dmbp9j_U.js";import"./ToolbarRootContext-DTWuY11i.js";import"./getDisabledMountTransitionStyles-gWcg8BNd.js";import"./getPseudoElementBounds-DntOXEgl.js";import"./chevron-down-ChW0ZqRN.js";import"./index-B9kV5q7Y.js";import"./error-DxO-v6dh.js";import"./BaseCbacBanner-ywq-HhKA.js";import"./makeExternalStore-DPGXEAtz.js";import"./Tooltip-BVN02VII.js";import"./PopoverPopup-3wn-Yyju.js";import"./toNumber-UpjdYfXI.js";import"./tick-BmQSr-db.js";import"./DropdownField-BcLVRQWa.js";import"./withOsdkMetrics-BQraTyAY.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
