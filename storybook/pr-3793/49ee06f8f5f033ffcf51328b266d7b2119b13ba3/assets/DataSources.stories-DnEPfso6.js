import{j as r}from"./iframe-B_yUu-cX.js";import{O as b}from"./object-table-BaXjLQRs.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BB9_lYqX.js";import{u as g}from"./useOsdkClient-DoDbRZ-A.js";import"./preload-helper-DcvxkMkX.js";import"./Table-BUBz74Aj.js";import"./index-XbE7DXxD.js";import"./Dialog-J2Svzxv6.js";import"./cross-C_lKmFAq.js";import"./svgIconContainer-DK4T2FGf.js";import"./useBaseUiId-B0dhadue.js";import"./InternalBackdrop-CvqXaCs7.js";import"./composite-ATDhx_ec.js";import"./index-CYicsPED.js";import"./index-Ct6MB3Hz.js";import"./index-hv5w3w6e.js";import"./useEventCallback-B5Mj_AiL.js";import"./SkeletonBar-CyqgIe6R.js";import"./LoadingCell-yLfxuT3F.js";import"./ColumnConfigDialog-BJLVGbGu.js";import"./DraggableList-B631PcPT.js";import"./search-CKP8uFrx.js";import"./Input-CiACNLL0.js";import"./useControlled-BZUXCsnn.js";import"./isEqual-DGvw4j76.js";import"./isObject-B5MSRvat.js";import"./Button-BYTNbaL9.js";import"./ActionButton-Bc9WEdCL.js";import"./Checkbox-BdldxRYp.js";import"./useValueChanged-B3OJyAcf.js";import"./CollapsiblePanel-e4u0SMbU.js";import"./MultiColumnSortDialog-BHeomoox.js";import"./MenuTrigger-BwtcDAUn.js";import"./CompositeItem-D2vovJ6U.js";import"./ToolbarRootContext-B_rfO5vo.js";import"./getDisabledMountTransitionStyles-BUo3ak9a.js";import"./getPseudoElementBounds-Bz6nmggm.js";import"./chevron-down-Dw25Lm-O.js";import"./index-q0iON3Ea.js";import"./error-BSusmaAF.js";import"./BaseCbacBanner-Beqx_Fwp.js";import"./makeExternalStore-CwdAeWiC.js";import"./Tooltip-tkp8oS-A.js";import"./PopoverPopup-Dp7-Ury3.js";import"./toNumber-L5F8Lvmb.js";import"./tick-VhUAs6z-.js";import"./DropdownField-r7zk0GKI.js";import"./withOsdkMetrics-sJj72yX2.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
