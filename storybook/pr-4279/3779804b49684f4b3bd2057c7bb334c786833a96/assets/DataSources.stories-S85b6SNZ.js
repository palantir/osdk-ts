import{j as r}from"./iframe-Cs9u2FNJ.js";import{O as b}from"./object-table-DdFu_d1m.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DzF_sKlU.js";import{u as g}from"./useOsdkClient-FerZNXE5.js";import"./preload-helper-DEnCUJIu.js";import"./Table-xgR2ZNdx.js";import"./index-DWrTTHxb.js";import"./Dialog-DiYfLKt0.js";import"./cross-Jki0Zf7X.js";import"./svgIconContainer-bmBt8PNs.js";import"./useBaseUiId-B04InLuC.js";import"./InternalBackdrop-C4zV0J9w.js";import"./composite-DoMN_SNj.js";import"./index-B9LdyWis.js";import"./index-DSEOcFQR.js";import"./index-BckuHIFJ.js";import"./useEventCallback-BlrYGKuQ.js";import"./SkeletonBar-BfpfarXm.js";import"./LoadingCell-Bpgn57DX.js";import"./ColumnConfigDialog-CVAJC_Y2.js";import"./DraggableList-DOhOUNdv.js";import"./search-QgkUbhew.js";import"./Input-BxHTTwfQ.js";import"./useControlled-DWa2oiP8.js";import"./Button-_OIC0QgO.js";import"./small-cross-w_QEugk7.js";import"./ActionButton-DJ3NK00Y.js";import"./Checkbox-MEGJAx5w.js";import"./useValueChanged-CG7ACMRq.js";import"./CollapsiblePanel-DHVkTAOJ.js";import"./MultiColumnSortDialog-B1PY5m02.js";import"./MenuTrigger-Bh7W1M7b.js";import"./CompositeItem-D6sZhCIa.js";import"./ToolbarRootContext-BXn8yWld.js";import"./getDisabledMountTransitionStyles-CdijohRN.js";import"./getPseudoElementBounds-Bbihz1Zu.js";import"./chevron-down-D0MyTtqt.js";import"./index-C2_rmR-A.js";import"./error-92AiuNPh.js";import"./BaseCbacBanner-DZ_8gS-t.js";import"./makeExternalStore-CtNpDvOI.js";import"./Tooltip-DnZtYN8u.js";import"./PopoverPopup-CQEmEDo7.js";import"./debounce-BPwk5KM9.js";import"./tick-B-5PpNSR.js";import"./DropdownField-BnI_unVW.js";import"./isEqual-Bj-z7ObL.js";import"./withOsdkMetrics-BHorCkdK.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
