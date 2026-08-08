import{j as r}from"./iframe-DwwwCC6C.js";import{O as b}from"./object-table-DPyHPO17.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DCHVk6o_.js";import{u as g}from"./useOsdkClient-8ik6ClBo.js";import"./preload-helper-CHeXMtL9.js";import"./Table-DMSZMB9x.js";import"./index-Bo0Iv6FV.js";import"./Dialog-CUCjM59r.js";import"./cross-DX-af3rE.js";import"./svgIconContainer-CSoVrkYq.js";import"./useBaseUiId-CZ9XDqRm.js";import"./InternalBackdrop-CtG9Yk_x.js";import"./composite-DfMqq-fG.js";import"./index-BXI3vB4C.js";import"./index-C52ZOjUy.js";import"./index-D_gN4F37.js";import"./useEventCallback-DqP-H7f3.js";import"./SkeletonBar-DbOpLk0i.js";import"./LoadingCell-CCqD1hLo.js";import"./ColumnConfigDialog-BouHnPXW.js";import"./DraggableList-CcSswccG.js";import"./search-BnyzrUJU.js";import"./Input-BhNFMKKD.js";import"./useControlled-BcVv-ZTG.js";import"./isEqual-DZTJuL8t.js";import"./isObject-BjmRrlcS.js";import"./Button-BCCIcLrr.js";import"./ActionButton-BfXEHjES.js";import"./Checkbox-AzAPsSVp.js";import"./useValueChanged-B9wF4oG3.js";import"./CollapsiblePanel-BThdNMuc.js";import"./MultiColumnSortDialog-CtC31J5w.js";import"./MenuTrigger-BVeC_mz2.js";import"./CompositeItem-DAp3hpF7.js";import"./ToolbarRootContext-CaO_OTwi.js";import"./getDisabledMountTransitionStyles-BR9fzpqA.js";import"./getPseudoElementBounds-BJ8H2qr0.js";import"./chevron-down-7IYAudlr.js";import"./index-BxuS-qLp.js";import"./error-B-KG3RMb.js";import"./BaseCbacBanner-BEiFPc_o.js";import"./makeExternalStore-Dx2-l_X3.js";import"./Tooltip-DTdL678B.js";import"./PopoverPopup-jTLGppvT.js";import"./toNumber-B54xZib1.js";import"./tick-Bg05TusO.js";import"./DropdownField-DHmmjWGf.js";import"./withOsdkMetrics-CL_C78R_.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
