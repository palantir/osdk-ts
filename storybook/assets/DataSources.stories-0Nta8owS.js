import{j as r}from"./iframe-DGSVH7ih.js";import{O as b}from"./object-table-C4VpbQcw.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BtzyeO4G.js";import{u as g}from"./useOsdkClient-BZZNJHHe.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-b1v88Pr-.js";import"./index-CWCW2TNI.js";import"./Dialog-C-Shdnwc.js";import"./cross-CvX0N4CS.js";import"./svgIconContainer-Cr42efgU.js";import"./useBaseUiId-CUzGGztv.js";import"./InternalBackdrop-BiQg34oG.js";import"./composite-CZStrJl6.js";import"./index-DcV7YM_0.js";import"./index-BQRwVVvU.js";import"./index-DLMh8z7x.js";import"./useEventCallback-CR9RHm-1.js";import"./SkeletonBar-Ccy0H5G7.js";import"./LoadingCell-B_-iiokl.js";import"./ColumnConfigDialog-D9yJG8h0.js";import"./DraggableList-dRFSQN3R.js";import"./search-Ms57RDK0.js";import"./Input-BMGPA6kQ.js";import"./useControlled-DIh7B-EX.js";import"./Button-hUhDz_nK.js";import"./small-cross-CgrlmkQc.js";import"./ActionButton-gW-JXC-3.js";import"./Checkbox-DHxcmdc7.js";import"./useValueChanged-B06XAO6O.js";import"./CollapsiblePanel-BNVEM1jZ.js";import"./MultiColumnSortDialog-9T7ss7CS.js";import"./MenuTrigger-z0zhSk9n.js";import"./CompositeItem-ChK2cRHi.js";import"./ToolbarRootContext-Dx_n0qqS.js";import"./getDisabledMountTransitionStyles-DNsTJsOD.js";import"./getPseudoElementBounds-v1o8MRIa.js";import"./chevron-down-Wv7CQLfg.js";import"./index-JXPpIgsw.js";import"./error-B-lFLFVh.js";import"./BaseCbacBanner-BNO6Noip.js";import"./makeExternalStore-DBH296jI.js";import"./Tooltip-BfWuJBag.js";import"./PopoverPopup-CUzAnlgp.js";import"./Select-B9JAKdg8.js";import"./tick-CTH5_AKz.js";import"./DropdownField-BWt4U9sB.js";import"./useDebouncedCallback-6dMPohFl.js";import"./isEqual-3BX1wwaO.js";import"./_baseIsEqual-CZt1h0DB.js";import"./stableSerialize-hL56Cbf8.js";import"./withOsdkMetrics-69zOARzS.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,ge={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const ue=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,ue as __namedExportsOrder,ge as default};
