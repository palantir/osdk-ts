import{j as r}from"./iframe-DY5oFFGp.js";import{O as b}from"./object-table-BzZQIJps.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BIfTc7Hf.js";import{u as g}from"./useOsdkClient-SMvNaXFe.js";import"./preload-helper-BXi2a6I0.js";import"./Table-TJd2tkZN.js";import"./index-oMhfC8Kw.js";import"./Dialog-CBajenF5.js";import"./cross-CrLmq7i6.js";import"./svgIconContainer-FemtaYki.js";import"./useBaseUiId-BY-XTexC.js";import"./InternalBackdrop-CGBqK3GB.js";import"./composite-DcO2MQSU.js";import"./index-CgbXm8hK.js";import"./index-BKhB25n7.js";import"./index-DfdK9p_z.js";import"./useEventCallback-DMWfU_RW.js";import"./SkeletonBar-BujnrZlh.js";import"./LoadingCell-CYSwsJAw.js";import"./ColumnConfigDialog-CXuIBguu.js";import"./DraggableList-DuVo9fyY.js";import"./search-fXpFyeuf.js";import"./Input-nNrj-1aN.js";import"./useControlled-Dzg4K4oI.js";import"./isEqual-BsqP0w72.js";import"./isObject-CH_C7Tpz.js";import"./Button-3kT2y51o.js";import"./ActionButton-CARaLbew.js";import"./Checkbox-BHclowAu.js";import"./useValueChanged-BhrMLCu8.js";import"./CollapsiblePanel-D_javXPT.js";import"./MultiColumnSortDialog-CuX6PlQZ.js";import"./MenuTrigger-WQlSInls.js";import"./CompositeItem-mas1MCsD.js";import"./ToolbarRootContext-Dt5uDgd5.js";import"./getDisabledMountTransitionStyles-DT47_0Y1.js";import"./getPseudoElementBounds-DjDSW00Z.js";import"./chevron-down-ClPPaZyK.js";import"./index-D67MIB25.js";import"./error-TrJIu1GL.js";import"./BaseCbacBanner-DCDS0E4U.js";import"./makeExternalStore-BILayTtp.js";import"./Tooltip-Dk4L6ju7.js";import"./PopoverPopup-BlPqN4M8.js";import"./toNumber-ndB2Z0w9.js";import"./tick-BIyw1OVe.js";import"./DropdownField-zJdovfER.js";import"./withOsdkMetrics-C7WGUV66.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
