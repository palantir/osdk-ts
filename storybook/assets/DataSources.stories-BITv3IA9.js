import{j as r}from"./iframe-BUQyUD8m.js";import{O as b}from"./object-table-Ds9LqJDs.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-oOH_4Zlw.js";import{u as g}from"./useOsdkClient-DrmKPxO2.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CrxmGslj.js";import"./index-BICsXjCE.js";import"./Dialog-Cicf7a4d.js";import"./cross-1uLQRGRH.js";import"./svgIconContainer-o4oAXi-V.js";import"./useBaseUiId-U_k4td6p.js";import"./InternalBackdrop-ClRX3Efv.js";import"./composite-CELzk-qp.js";import"./index-BurFCGWb.js";import"./index-4mhiFuK4.js";import"./index-_XREHo1x.js";import"./useEventCallback-Dj7v-W5e.js";import"./SkeletonBar-kkhCK0VO.js";import"./LoadingCell-VGLxO3xD.js";import"./ColumnConfigDialog-Dx4DSbQ8.js";import"./DraggableList-BV4M3Ozp.js";import"./search-DagSNO5e.js";import"./Input-CtsEUXGl.js";import"./useControlled-CPowlOFs.js";import"./isEqual-DXPWwiqu.js";import"./isObject-BxdRw410.js";import"./Button-DEbL0EP0.js";import"./ActionButton--7yshnrs.js";import"./Checkbox-CW-A1aF1.js";import"./useValueChanged-Bc7io6Ho.js";import"./CollapsiblePanel-CNXYFAyn.js";import"./MultiColumnSortDialog-5NdKS9sN.js";import"./MenuTrigger-M7-KqOvt.js";import"./CompositeItem-iT1BpgJw.js";import"./ToolbarRootContext-CxUHg0mL.js";import"./getDisabledMountTransitionStyles-B8Q4G4Fv.js";import"./getPseudoElementBounds-XI3ORFf2.js";import"./chevron-down-DiBQFFuK.js";import"./index-CvJx8Lxg.js";import"./error-TXaSC1XE.js";import"./BaseCbacBanner--ZmoOtG1.js";import"./makeExternalStore-7rJI6eRL.js";import"./Tooltip-Dvh5BE71.js";import"./PopoverPopup-DAQjKvSK.js";import"./toNumber-BpqP-OeJ.js";import"./tick--S61-hA-.js";import"./DropdownField-9xytAn4v.js";import"./withOsdkMetrics-Pgtowb3-.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
