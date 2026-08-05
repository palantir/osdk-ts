import{j as r}from"./iframe-CKhREHfL.js";import{O as b}from"./object-table-de7N08mm.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DfF_cvvN.js";import{u as g}from"./useOsdkClient-VcCE1wl4.js";import"./preload-helper-DBUxvamd.js";import"./Table-CInxtrnC.js";import"./index-C5QFNAxP.js";import"./Dialog-D7aHGxIH.js";import"./cross-Ctdls4x7.js";import"./svgIconContainer-xQdtq3jL.js";import"./useBaseUiId-CxNcwInf.js";import"./InternalBackdrop-Da2U-hCq.js";import"./composite-DRC4ACh_.js";import"./index-B_JObfE5.js";import"./index-Bbvw0vLy.js";import"./index-D0pO9-WJ.js";import"./useEventCallback-C911K9Dx.js";import"./SkeletonBar-CqiWnmpN.js";import"./LoadingCell-BA0b1nsh.js";import"./ColumnConfigDialog-D_XzeQ3O.js";import"./DraggableList-B7Ku7Hqn.js";import"./search-BDUioyk4.js";import"./Input-BHAHokL6.js";import"./useControlled-DU_GLnf5.js";import"./isEqual-ZzYBlkqe.js";import"./isObject-DrlOELdm.js";import"./Button-BMZmhn3e.js";import"./ActionButton-DNfv6jVQ.js";import"./Checkbox-CV09gumM.js";import"./useValueChanged-1i6JVRlt.js";import"./CollapsiblePanel-CcAu94A8.js";import"./MultiColumnSortDialog-CwfvwQk-.js";import"./MenuTrigger-CsOslwJg.js";import"./CompositeItem-BvUhxEG9.js";import"./ToolbarRootContext-CUGbrwD0.js";import"./getDisabledMountTransitionStyles-Df-fM2Dk.js";import"./getPseudoElementBounds-DDXuDbup.js";import"./chevron-down-KTtBty24.js";import"./index-ChjJkDiV.js";import"./error-DVbvZX26.js";import"./BaseCbacBanner-CNcfqMp1.js";import"./makeExternalStore-qR4iZXdH.js";import"./Tooltip-D-yEypjt.js";import"./PopoverPopup-B_epRAt2.js";import"./toNumber-BmYL_tSw.js";import"./tick-6s5dMJuy.js";import"./DropdownField-DY-Xl2eR.js";import"./withOsdkMetrics-B8apvPCk.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
