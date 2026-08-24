import{j as r}from"./iframe-ClI_suoI.js";import{O as b}from"./object-table-Dc3bm7wL.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D59CCQx8.js";import{u as g}from"./useOsdkClient-B-EWrqMY.js";import"./preload-helper-D0Vsi6i3.js";import"./Table-Do37un_W.js";import"./index-BOKiLQxP.js";import"./Dialog-QlvwO9cL.js";import"./cross-BQ8MM7XW.js";import"./svgIconContainer-CUHjWuFL.js";import"./useBaseUiId-Dc6nwPYL.js";import"./InternalBackdrop-BUi2iTEd.js";import"./composite-BJOTlA1D.js";import"./index-l7ila5kK.js";import"./index-BM0PuGji.js";import"./index-B1mNthSM.js";import"./useEventCallback-DVEB68OM.js";import"./SkeletonBar-D6U2O75A.js";import"./LoadingCell-chWRAdnb.js";import"./ColumnConfigDialog-Cmo1wVkn.js";import"./DraggableList-BKBY8rPP.js";import"./search-DE3wrgSm.js";import"./Input-DBdXXl4r.js";import"./useControlled-Blt5oj3t.js";import"./Button-COPur_kS.js";import"./small-cross-DWTE1D7g.js";import"./ActionButton-pbm-2r65.js";import"./Checkbox-S9UuBkvE.js";import"./useValueChanged-B3aVy-K-.js";import"./CollapsiblePanel-BMyuJGmo.js";import"./MultiColumnSortDialog-CF8In-U-.js";import"./MenuTrigger-BSLJomwL.js";import"./CompositeItem-BOlADeZN.js";import"./ToolbarRootContext-BRzHaDW7.js";import"./getDisabledMountTransitionStyles-CXvh3y62.js";import"./getPseudoElementBounds-Df-qZ214.js";import"./chevron-down-BZBtwvY3.js";import"./index-iFSHL4p3.js";import"./error-p2VRCnQK.js";import"./BaseCbacBanner-DV_F8c5m.js";import"./makeExternalStore-BDP9Ow_W.js";import"./Tooltip-DgpP4QJ4.js";import"./PopoverPopup-9ckP_Vcx.js";import"./debounce-DPHlWhp3.js";import"./tick-DSX_6FCY.js";import"./DropdownField-By-ew9Op.js";import"./useDebouncedCallback-CbNUArZs.js";import"./withOsdkMetrics-DG46gbmI.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
