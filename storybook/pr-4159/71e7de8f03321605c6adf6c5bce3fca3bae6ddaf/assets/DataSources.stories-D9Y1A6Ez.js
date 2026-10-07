import{j as r}from"./iframe-CEat60Hp.js";import{O as b}from"./object-table-BCLmmaTi.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-aw_1Zku1.js";import{u as g}from"./useOsdkClient-BR1Urz0Q.js";import"./preload-helper-LGTzr2gM.js";import"./Table-Bub_W-mz.js";import"./index-DyITJqpd.js";import"./Dialog-DROKoGMC.js";import"./cross-D-uWfUMG.js";import"./svgIconContainer-CN1a-FY8.js";import"./useBaseUiId-ClM_1fTm.js";import"./InternalBackdrop-B4asx7Ai.js";import"./composite-Ce22aUj6.js";import"./index-BKoym7aL.js";import"./index-C_WLSqh0.js";import"./index-DndZj0Gs.js";import"./useEventCallback-BnyMPdTZ.js";import"./SkeletonBar-BrLmTLmg.js";import"./LoadingCell-DXyX9_yJ.js";import"./ColumnConfigDialog-BO4pL0eI.js";import"./DraggableList-Bl_9-C_6.js";import"./search-COfQ1bXD.js";import"./Input-By_gu53Z.js";import"./useControlled-CZHKBSyi.js";import"./Button-CCDq6dgu.js";import"./small-cross-CUzjSNDu.js";import"./ActionButton-B24-6bCU.js";import"./Checkbox-CiKag_ve.js";import"./useValueChanged-CmG-WmUh.js";import"./CollapsiblePanel-BnqmfXh-.js";import"./MultiColumnSortDialog-BiFc0ET9.js";import"./MenuTrigger-CBcFJ7OF.js";import"./CompositeItem-ChZ-XSJC.js";import"./ToolbarRootContext-MdE91PHa.js";import"./getDisabledMountTransitionStyles-BGMhA--N.js";import"./getPseudoElementBounds-Bm7AaELE.js";import"./chevron-down-CbnQEPHn.js";import"./index-DO0PQOk2.js";import"./error-Us6LDG_u.js";import"./BaseCbacBanner-_8RGnGge.js";import"./makeExternalStore-DYDIpdrC.js";import"./Tooltip-DYd7gvd4.js";import"./PopoverPopup-CE6K_Cw0.js";import"./debounce-9GnBlJ2l.js";import"./tick-jmlbvTuh.js";import"./DropdownField-dGzl7MKn.js";import"./isEqual-DcvmIx5z.js";import"./withOsdkMetrics-CSdFZ0uc.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
