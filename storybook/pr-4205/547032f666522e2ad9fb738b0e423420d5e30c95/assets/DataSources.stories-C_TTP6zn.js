import{j as r}from"./iframe-DxLh3JbF.js";import{O as b}from"./object-table-CXV1HhY7.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DgF-PAar.js";import{u as g}from"./useOsdkClient-D-0q6D8B.js";import"./preload-helper-CtguWtZv.js";import"./Table-BlGlUSq2.js";import"./index-DKwvuwmq.js";import"./Dialog-D9QNYHK2.js";import"./cross-Bq7Vu5_q.js";import"./svgIconContainer-DVtbzSvb.js";import"./useBaseUiId-C0U6w1uv.js";import"./InternalBackdrop-CYZKR22v.js";import"./composite-BnT-JfoG.js";import"./index-lMNDx7C7.js";import"./index-CcJor5Xx.js";import"./index-JqNwC6gS.js";import"./useEventCallback-BB6FPyf8.js";import"./SkeletonBar-B3S-zvqX.js";import"./LoadingCell-VgpctpOH.js";import"./ColumnConfigDialog-Dz9ehfgV.js";import"./DraggableList-Y8hfAJUC.js";import"./search-6md9DSSP.js";import"./Input-Be22pwJh.js";import"./useControlled-CezKSMA-.js";import"./Button-DkhW4pYf.js";import"./small-cross-CmZIK1pw.js";import"./ActionButton-B_sTpPMt.js";import"./Checkbox-BSTTht3J.js";import"./useValueChanged-ZKInf5vA.js";import"./CollapsiblePanel-Bdhi8tcN.js";import"./MultiColumnSortDialog-c9m8g-xN.js";import"./MenuTrigger-B-SPPJK2.js";import"./CompositeItem-DzeDqabA.js";import"./ToolbarRootContext-BeQWjnov.js";import"./getDisabledMountTransitionStyles-CcKSQ82e.js";import"./getPseudoElementBounds-Xs14tMhu.js";import"./chevron-down-C2jGd_Ay.js";import"./index-2HlltdC-.js";import"./error-DE0gSpIQ.js";import"./BaseCbacBanner-BzPchdvo.js";import"./makeExternalStore-CIacUB7Y.js";import"./Tooltip-Cv44_0tC.js";import"./PopoverPopup-soj2Nfpm.js";import"./debounce-DMvnj4rJ.js";import"./tick-UzfIvE9e.js";import"./DropdownField-B27tcm_v.js";import"./isEqual-DL8SIK_A.js";import"./withOsdkMetrics-99fBVbxl.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
