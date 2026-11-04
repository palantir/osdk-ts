import{j as r}from"./iframe-BbZZXiGk.js";import{O as b}from"./object-table-BkL1V447.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BsXPsUuV.js";import{u as g}from"./useOsdkClient-BfVtNRTC.js";import"./preload-helper-CeJCQ8zy.js";import"./Table-GhUoiVcZ.js";import"./index-CZbf2fy9.js";import"./Dialog-0Rvjl7dG.js";import"./cross-CrdY7Kh8.js";import"./svgIconContainer-DdiK9vAR.js";import"./useBaseUiId-DJIunILb.js";import"./InternalBackdrop-Cbjv4LYd.js";import"./composite-DhB3hKwn.js";import"./index-D53mexCV.js";import"./index-Bz754pyr.js";import"./index-IygjZw6i.js";import"./useEventCallback-CuURf1p5.js";import"./SkeletonBar-gxgKc7X3.js";import"./LoadingCell-3dgNbREz.js";import"./ColumnConfigDialog-DtuJX_GE.js";import"./DraggableList-BW5a4ZJ4.js";import"./search-C7y_2xxv.js";import"./Input-Dg2k6Vdc.js";import"./useControlled-DQq0royT.js";import"./Button-is2LXBbi.js";import"./small-cross-DtcbYqVr.js";import"./ActionButton-23xZ25Q2.js";import"./Checkbox-Dz-CobTI.js";import"./useValueChanged-BK-w6RqQ.js";import"./CollapsiblePanel-CopIOFuI.js";import"./MultiColumnSortDialog-BZjrzObQ.js";import"./MenuTrigger-BPO1dH_z.js";import"./CompositeItem-Ond9knTH.js";import"./ToolbarRootContext-CLYVvxH8.js";import"./getDisabledMountTransitionStyles-D4i8pPNj.js";import"./getPseudoElementBounds-Cbzb4WBf.js";import"./chevron-down-1BEbhpzA.js";import"./index-DBQej_XT.js";import"./error-BZHgnJR4.js";import"./BaseCbacBanner-CcToPE2i.js";import"./makeExternalStore-DcV0xPVd.js";import"./Tooltip-B4XteE65.js";import"./PopoverPopup-DNp54wST.js";import"./debounce-CjaLM3Rn.js";import"./tick-C_vFiyHk.js";import"./DropdownField-v3cEN56r.js";import"./isEqual-Baat9Vrc.js";import"./withOsdkMetrics-D_eGSjjb.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
