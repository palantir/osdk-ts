import{j as r}from"./iframe-DmJLQBd5.js";import{O as b}from"./object-table-E43KJI_n.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-G1Ic3xIa.js";import{u as g}from"./useOsdkClient-Bl8Z_uxW.js";import"./preload-helper-CoTlAjbz.js";import"./Table-DwTOTD2I.js";import"./index-V2vu0DX-.js";import"./Dialog-dllkLaXF.js";import"./cross-DNMFTXiP.js";import"./svgIconContainer-BIOjXbdo.js";import"./useBaseUiId-9PouUcpY.js";import"./InternalBackdrop-5gsghqXD.js";import"./composite-JydS1iwf.js";import"./index-BtdR2Hou.js";import"./index-D21gG2VV.js";import"./index-cuoVkR4F.js";import"./useEventCallback-byBYDvcL.js";import"./SkeletonBar-B9L_DStn.js";import"./LoadingCell-DcXqZJAC.js";import"./ColumnConfigDialog-DqG9YoD3.js";import"./DraggableList-C5manxDx.js";import"./search-DRPDmTbF.js";import"./Input-DND4jSO6.js";import"./useControlled-Brt8x5-e.js";import"./isEqual-DmiAgtts.js";import"./isObject-BWf8MA5A.js";import"./Button-CMc7chm1.js";import"./ActionButton-B4zZjGVU.js";import"./Checkbox-iqbJKU2o.js";import"./useValueChanged-CjIBuOlm.js";import"./CollapsiblePanel-6Z1QE5xZ.js";import"./MultiColumnSortDialog-X5jJ1kgE.js";import"./MenuTrigger-BkSsBu17.js";import"./CompositeItem-CI5jeQ9i.js";import"./ToolbarRootContext-D0YLC8MO.js";import"./getDisabledMountTransitionStyles-DLPDieqM.js";import"./getPseudoElementBounds-BBE3_y7N.js";import"./chevron-down--IKdXKG2.js";import"./index-D6zsaxaR.js";import"./error-8IdCo3sJ.js";import"./BaseCbacBanner-CUODHxmz.js";import"./makeExternalStore-ChPwoXju.js";import"./Tooltip-CVp9JHdj.js";import"./PopoverPopup-48aZ5vF1.js";import"./toNumber-Ize7j_rT.js";import"./tick-DKvhNy2w.js";import"./DropdownField-BOHi3o6l.js";import"./withOsdkMetrics-DhjGq0fZ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
