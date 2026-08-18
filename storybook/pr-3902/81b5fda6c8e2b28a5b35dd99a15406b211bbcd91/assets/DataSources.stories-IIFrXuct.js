import{j as r}from"./iframe-DabUi6cR.js";import{O as b}from"./object-table-ymMlcQgH.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-q7CMti3C.js";import{u as g}from"./useOsdkClient-BKe3IUPd.js";import"./preload-helper-PB9vrEtI.js";import"./Table-DFKaFrlP.js";import"./index-KZryrGBD.js";import"./Dialog-Bd5BvEg0.js";import"./cross-DpDPaZbd.js";import"./svgIconContainer-Cp8yewAh.js";import"./useBaseUiId-BcNRpk_N.js";import"./InternalBackdrop-BiZjaMMl.js";import"./composite-UkAyjKG8.js";import"./index-CwspG28F.js";import"./index-BAuYPfKF.js";import"./index-Dya5ymfL.js";import"./useEventCallback-DiBk_LO1.js";import"./SkeletonBar-BGVqshhW.js";import"./LoadingCell-WvDyMqYo.js";import"./ColumnConfigDialog-D8-TlFTa.js";import"./DraggableList-B34GVoSc.js";import"./search-D7BhxQDO.js";import"./Input-DrQQ_TlW.js";import"./useControlled-B3zNFnxK.js";import"./Button-CKSInnXQ.js";import"./small-cross-CVw0DqOB.js";import"./ActionButton-CdLhG2br.js";import"./Checkbox-CuTNiBRG.js";import"./useValueChanged-DXzV-qE-.js";import"./CollapsiblePanel-B8htkGGF.js";import"./MultiColumnSortDialog-CLe_WPlF.js";import"./MenuTrigger-CD41BN-2.js";import"./CompositeItem-B-6r7oQp.js";import"./ToolbarRootContext-B5UjH-Re.js";import"./getDisabledMountTransitionStyles-D6QtuiIc.js";import"./getPseudoElementBounds-BiAo1PpW.js";import"./chevron-down-D7NMZO3V.js";import"./index-CWyEHriK.js";import"./error-DzTcu7K-.js";import"./BaseCbacBanner-CyTcZJb2.js";import"./makeExternalStore-BVTB5n8V.js";import"./Tooltip-Cq_bI-7a.js";import"./PopoverPopup-8lBrunDg.js";import"./debounce-Bk1lW-Sn.js";import"./tick-DycZFHqw.js";import"./DropdownField-FDF5bp47.js";import"./isEqual-BT_PX-GP.js";import"./withOsdkMetrics-DxxH3flz.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
