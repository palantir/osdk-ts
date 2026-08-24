import{j as r}from"./iframe-jCChBqpD.js";import{O as b}from"./object-table-CKx7vRdd.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BVr05glv.js";import{u as g}from"./useOsdkClient-Bljk_PUl.js";import"./preload-helper-BjtDmjUW.js";import"./Table-BzxaaTkw.js";import"./index-BDYSe5T3.js";import"./Dialog-Cvzcs2Vo.js";import"./cross-BFiMfS60.js";import"./svgIconContainer-V036n2V3.js";import"./useBaseUiId-BgwIkJaa.js";import"./InternalBackdrop-B4keXGQY.js";import"./composite-C4cjwLVl.js";import"./index-DHVDL356.js";import"./index-CzoHWjtt.js";import"./index-DLZ_Dkwd.js";import"./useEventCallback-Ca3owwPd.js";import"./SkeletonBar-CFmITWP2.js";import"./LoadingCell-Cevnx7ko.js";import"./ColumnConfigDialog-DPValkIe.js";import"./DraggableList-POtWMylI.js";import"./search-BXUdOqpE.js";import"./Input-mP6whCaC.js";import"./useControlled-Cy4C8mUF.js";import"./Button-DYAz7KKI.js";import"./small-cross-CAvDrfoI.js";import"./ActionButton-BVjk_BMh.js";import"./Checkbox-C0yLsfQ2.js";import"./useValueChanged-BXkOTGUI.js";import"./CollapsiblePanel-BDGrQUPM.js";import"./MultiColumnSortDialog-Dfy90Vxq.js";import"./MenuTrigger-BDAnLdLA.js";import"./CompositeItem-InY95CWo.js";import"./ToolbarRootContext-BWHl3dWP.js";import"./getDisabledMountTransitionStyles-Bymg6Wrg.js";import"./getPseudoElementBounds-RSwUcFZt.js";import"./chevron-down-FjlLjWzq.js";import"./index-38-6lZvw.js";import"./error-S_2dtwT6.js";import"./BaseCbacBanner-CZkJZTBD.js";import"./makeExternalStore-DZ2_Wte_.js";import"./Tooltip-xlXWqJAV.js";import"./PopoverPopup-ByV2ArYQ.js";import"./debounce-CBlUtCtN.js";import"./tick-CLtzdCC5.js";import"./DropdownField-mM78F7jp.js";import"./useDebouncedCallback-Qm1Fh51r.js";import"./withOsdkMetrics-CEFSBq5G.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
