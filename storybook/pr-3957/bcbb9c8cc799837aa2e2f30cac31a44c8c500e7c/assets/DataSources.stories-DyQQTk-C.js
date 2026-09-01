import{j as r}from"./iframe-TApi_89H.js";import{O as b}from"./object-table-BTQFoSvM.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B9-jQ3yY.js";import{u as g}from"./useOsdkClient-C1l1n529.js";import"./preload-helper-sYHE9xkK.js";import"./Table-D3kE7lwv.js";import"./index-C7k_RZGy.js";import"./Dialog-Bg4zyYCG.js";import"./cross-fnS0M6qm.js";import"./svgIconContainer-C7DRNdJN.js";import"./useBaseUiId-D7C__S_-.js";import"./InternalBackdrop-BhQtLhn1.js";import"./composite-DCCTyU-Y.js";import"./index-XwwRSRPj.js";import"./index-ZB-gWh6L.js";import"./index-Dn2TvP5W.js";import"./useEventCallback-KgfsELs8.js";import"./SkeletonBar-D2swFyMU.js";import"./LoadingCell-cXm-n914.js";import"./ColumnConfigDialog-rbXzBjOW.js";import"./DraggableList-mr8Dcpod.js";import"./search-COp09I1s.js";import"./Input-BvP2l_mS.js";import"./useControlled-CD3Nk51s.js";import"./Button-5wphI9oR.js";import"./small-cross-DXF_ebkC.js";import"./ActionButton-BmfN5KEN.js";import"./Checkbox-Dg_-6R30.js";import"./useValueChanged-CNTNGm5z.js";import"./CollapsiblePanel-CaSK4355.js";import"./MultiColumnSortDialog-WFw7Y8Dr.js";import"./MenuTrigger-lHb-ZApG.js";import"./CompositeItem-DWMayDud.js";import"./ToolbarRootContext-CXJo9eGs.js";import"./getDisabledMountTransitionStyles-BmIh8Y3H.js";import"./getPseudoElementBounds-C6viFtxP.js";import"./chevron-down-Bn6U06zL.js";import"./index-s3cuk91h.js";import"./error-BnvoNHjd.js";import"./BaseCbacBanner-DkqqNNoR.js";import"./makeExternalStore-DBGeSdOF.js";import"./Tooltip-CwOwKjZa.js";import"./PopoverPopup-gXjRdvfp.js";import"./debounce-DSR4xN0n.js";import"./tick-BWPgjUrc.js";import"./DropdownField-4rIfCihF.js";import"./isEqual-DE5Efej-.js";import"./withOsdkMetrics-B-5Iqtjd.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
