import{j as r}from"./iframe-B5Ajdn-Z.js";import{O as b}from"./object-table-3ayvbDRz.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BWqQDFjg.js";import{u as g}from"./useOsdkClient-B5semh5Y.js";import"./preload-helper-B5yP3JPh.js";import"./Table-Bccy-Hkd.js";import"./index-DILEzbbv.js";import"./Dialog-CUJu7QaY.js";import"./cross-BBK4wgqQ.js";import"./svgIconContainer-DoY_K777.js";import"./useBaseUiId-C1Uihcd0.js";import"./InternalBackdrop-Cqris0fZ.js";import"./composite-CnqlIWYg.js";import"./index-DVmTRqee.js";import"./index-0i5GjvBZ.js";import"./index-Cpe77fYH.js";import"./useEventCallback-B2QaC4UY.js";import"./SkeletonBar-Kw7gcQkG.js";import"./LoadingCell-DeDiXoLe.js";import"./ColumnConfigDialog-Xum0Hvj9.js";import"./DraggableList-Dwk2htXy.js";import"./search-BuV2lV03.js";import"./Input-BBXfcLrJ.js";import"./useControlled-UxmqIdoS.js";import"./Button-CF8mdfVJ.js";import"./small-cross-DPps9k0B.js";import"./ActionButton-BTL1_xvj.js";import"./Checkbox-CS9i4mqN.js";import"./useValueChanged-CifUOmFK.js";import"./CollapsiblePanel-Dt-j0qol.js";import"./MultiColumnSortDialog-D_wD-lKR.js";import"./MenuTrigger-Cy_7_0_z.js";import"./CompositeItem-CVzNQNnm.js";import"./ToolbarRootContext-BWtD2D4r.js";import"./getDisabledMountTransitionStyles-D8H2JrcK.js";import"./getPseudoElementBounds-Bk-nLSGa.js";import"./chevron-down-BAJRL46i.js";import"./index-xivGH17H.js";import"./error-DVp4qBBx.js";import"./BaseCbacBanner-BnTCPLBo.js";import"./makeExternalStore-2_jyxYjq.js";import"./Tooltip-Bhg5Xees.js";import"./PopoverPopup-BCkS-3aI.js";import"./debounce-DMWFSr1X.js";import"./tick-B-THAU8k.js";import"./DropdownField-DrMdgMG0.js";import"./isEqual-DVVHwUtv.js";import"./withOsdkMetrics-Bk1GhbZz.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
