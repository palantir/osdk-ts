import{j as r}from"./iframe-DAHj67mi.js";import{O as b}from"./object-table-CF1_mpNc.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-oImt5-Ae.js";import{u as g}from"./useOsdkClient-DSpnlmuA.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-C5TxACGe.js";import"./index-jtr0hjnV.js";import"./Dialog-DLC6pff3.js";import"./cross-BvmJ2kUU.js";import"./svgIconContainer-R6fLsDAI.js";import"./useBaseUiId-C8n2JbgI.js";import"./InternalBackdrop-BZgwOFWU.js";import"./composite-BjTY1dgM.js";import"./index-B2dUJ_mM.js";import"./index-BOzM1AoU.js";import"./index-BoBv6Oh5.js";import"./useEventCallback-B1gHHm4j.js";import"./SkeletonBar-DhFCtk-U.js";import"./LoadingCell-B2AiaHPg.js";import"./ColumnConfigDialog-BJ25K1mH.js";import"./DraggableList-MixG4jS2.js";import"./search-DlMMVas5.js";import"./Input-BqNeXUfN.js";import"./useControlled-wTpIHr1L.js";import"./Button-D3ukGqLV.js";import"./small-cross-DGpFJ7WA.js";import"./ActionButton-bdH5SZoM.js";import"./Checkbox-Cc1-PZPa.js";import"./useValueChanged-K_Rdj1zl.js";import"./CollapsiblePanel-rgTr9UFW.js";import"./MultiColumnSortDialog-DocotWMb.js";import"./MenuTrigger-Bc_s6vOl.js";import"./CompositeItem-ylUTChcd.js";import"./ToolbarRootContext-D0N5miEu.js";import"./getDisabledMountTransitionStyles-DLcvNa0d.js";import"./getPseudoElementBounds-DVEYMREJ.js";import"./chevron-down-CDzCov52.js";import"./index-B0icYv8E.js";import"./error-kGSlj1sb.js";import"./BaseCbacBanner-Dn4fA3fP.js";import"./makeExternalStore-CclpbdPf.js";import"./Tooltip-DigvRnDG.js";import"./PopoverPopup-UX8-cCYh.js";import"./Select-D2Soavwn.js";import"./tick-tJ7_3KbK.js";import"./DropdownField-FJYu2uWa.js";import"./useDebouncedCallback-C7UP5udY.js";import"./isEqual-B_3QYyrr.js";import"./_baseIsEqual-1hDRXEi_.js";import"./stableSerialize-BlYl1Cik.js";import"./withOsdkMetrics-DRVx42Qf.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,ge={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
