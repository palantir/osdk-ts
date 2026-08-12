import{j as r}from"./iframe-BBL_-HCt.js";import{O as b}from"./object-table-BmKlloX9.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-vLTBq_Dp.js";import{u as g}from"./useOsdkClient-BvBcPbsV.js";import"./preload-helper-gXeNWTZD.js";import"./Table-cJaqAje1.js";import"./index-D4yzeBJ6.js";import"./Dialog-YuX7ZT5R.js";import"./cross-BTBqqo2m.js";import"./svgIconContainer-C5h8dyp4.js";import"./useBaseUiId-IvbF4hDj.js";import"./InternalBackdrop-DTy2ZHe8.js";import"./composite-B4fmYlB2.js";import"./index-DkKFi5X-.js";import"./index-OLnc9ViJ.js";import"./index-Bx4Gz6DB.js";import"./useEventCallback-CocVgKNZ.js";import"./SkeletonBar-I3AIrJSM.js";import"./LoadingCell-Qti4cjBX.js";import"./ColumnConfigDialog-CPKYJxyh.js";import"./DraggableList-B0AxtbTM.js";import"./search-BqwbKAei.js";import"./Input-C1KaTSDP.js";import"./useControlled-DMuu4KBX.js";import"./isEqual-CZkBWFXq.js";import"./isObject-CFBQ1AJA.js";import"./Button-SEe7AN0N.js";import"./ActionButton-ClXsh96F.js";import"./Checkbox-g6M20mN7.js";import"./useValueChanged-CUC42A35.js";import"./CollapsiblePanel-BgjBiotn.js";import"./MultiColumnSortDialog-D5o4hdua.js";import"./MenuTrigger-BGcEy2Om.js";import"./CompositeItem-CT2M5Fdg.js";import"./ToolbarRootContext-BVwYgSHG.js";import"./getDisabledMountTransitionStyles-NF2f_rkY.js";import"./getPseudoElementBounds-DSxCnEgg.js";import"./chevron-down-Bg0k9Oko.js";import"./index-CeI-2DnP.js";import"./error-BeEhm9we.js";import"./BaseCbacBanner-nrt-v66T.js";import"./makeExternalStore-DqPT6bfI.js";import"./Tooltip-DrP5_NWc.js";import"./PopoverPopup-DH9A1tKJ.js";import"./toNumber-DNWrL45z.js";import"./tick-Coq7YcBM.js";import"./DropdownField-DKNinG1T.js";import"./withOsdkMetrics-DYro2wY1.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
