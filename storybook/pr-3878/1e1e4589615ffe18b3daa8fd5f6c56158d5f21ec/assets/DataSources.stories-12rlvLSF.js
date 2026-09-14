import{j as r}from"./iframe-D3DqoIpf.js";import{O as b}from"./object-table-5-cStO1F.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BMI-ISkN.js";import{u as g}from"./useOsdkClient-BZ2Q6Hqc.js";import"./preload-helper-Bur1EzB5.js";import"./Table-DnIRlfeH.js";import"./index-BThkDgxi.js";import"./Dialog-Dt93nrAE.js";import"./cross-CAMhptAD.js";import"./svgIconContainer-CoUDa19N.js";import"./useBaseUiId-BOGuxokK.js";import"./InternalBackdrop-CX5pFpyQ.js";import"./composite-DOJBzh5B.js";import"./index-BF36rFqh.js";import"./index-CaWcagsp.js";import"./index-CLu7smVU.js";import"./useEventCallback-BwRfc_LO.js";import"./SkeletonBar-DhPBeMf1.js";import"./LoadingCell-DYjb1NAx.js";import"./ColumnConfigDialog-B-slaITe.js";import"./DraggableList-hn4vdS_9.js";import"./search-DzOWxMYj.js";import"./Input-Ba9sqiE-.js";import"./useControlled-R3QnTpFh.js";import"./Button-D1m-bnZN.js";import"./small-cross-Cx3vpP8Z.js";import"./ActionButton-BmFxbrY9.js";import"./Checkbox-BnWvCHaF.js";import"./useValueChanged-h8m0Y_Ok.js";import"./CollapsiblePanel-CvE2FJWC.js";import"./MultiColumnSortDialog-B3C3keJ9.js";import"./MenuTrigger-Do9R63Sr.js";import"./CompositeItem-DmhK9sjv.js";import"./ToolbarRootContext-FLVSUoPt.js";import"./getDisabledMountTransitionStyles-MKKxqo0-.js";import"./getPseudoElementBounds-DoOAyvUg.js";import"./chevron-down-BYhG0KSh.js";import"./index-CAWoAfLN.js";import"./error-DmP3oCyF.js";import"./BaseCbacBanner-CCzrCVQf.js";import"./makeExternalStore-CWigMI40.js";import"./Tooltip-BFQd_OrJ.js";import"./PopoverPopup-Cv0Kt1cr.js";import"./debounce-QvYOae8J.js";import"./tick-C5EOZ80L.js";import"./DropdownField-CwjqwoqN.js";import"./isEqual-DNuZwAZe.js";import"./withOsdkMetrics-Dzhtom8t.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
