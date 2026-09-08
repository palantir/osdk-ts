import{j as r}from"./iframe-hmluRZS5.js";import{O as b}from"./object-table-CONt86Aj.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BGBno1DZ.js";import{u as g}from"./useOsdkClient-CWJVsVp6.js";import"./preload-helper-DlYZq8_X.js";import"./Table-BgJ9BZ78.js";import"./index-DlmwBpMI.js";import"./Dialog-Dv_N4vZX.js";import"./cross-CF7Ek918.js";import"./svgIconContainer-Cr9UBTnz.js";import"./useBaseUiId-Ce6hVQyf.js";import"./InternalBackdrop-Di9g7CqC.js";import"./composite-Cz3P8fmc.js";import"./index-eMB_Bo_f.js";import"./index-Bc2sNs6_.js";import"./index-BK3acCXu.js";import"./useEventCallback-BdILOtut.js";import"./SkeletonBar-BBfDZCsO.js";import"./LoadingCell-PyopswjO.js";import"./ColumnConfigDialog-Bp9aFBFm.js";import"./DraggableList-UHVJUl4j.js";import"./search-CyNzQTjU.js";import"./Input-uUNDzlAG.js";import"./useControlled-CWtQ2etk.js";import"./Button-UcoIXCLv.js";import"./small-cross-DpGTHJxS.js";import"./ActionButton-BKy_pzqj.js";import"./Checkbox-BySPL-Yn.js";import"./useValueChanged-CzefFM-U.js";import"./CollapsiblePanel-D12S4ZDi.js";import"./MultiColumnSortDialog-D-iCjK2K.js";import"./MenuTrigger-F11Vn7_-.js";import"./CompositeItem-Bger7i4K.js";import"./ToolbarRootContext-BviESwyl.js";import"./getDisabledMountTransitionStyles-DeVJ0eo9.js";import"./getPseudoElementBounds-DrhntXY7.js";import"./chevron-down-BV1ESAvw.js";import"./index-CYwmlkYY.js";import"./error-B495uG_z.js";import"./BaseCbacBanner-Zj8kZ8T9.js";import"./makeExternalStore-DOooQeVW.js";import"./Tooltip-CkY5JgKY.js";import"./PopoverPopup-CFU_wLXE.js";import"./debounce-DA5oIsgA.js";import"./tick-QOD6m0sZ.js";import"./DropdownField-D2ft0pJb.js";import"./isEqual-DaXwjBhd.js";import"./withOsdkMetrics-BsviGqu5.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
