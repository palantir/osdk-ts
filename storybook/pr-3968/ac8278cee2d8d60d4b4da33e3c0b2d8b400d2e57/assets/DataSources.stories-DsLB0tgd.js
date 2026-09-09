import{j as r}from"./iframe-Ca8QPFs7.js";import{O as b}from"./object-table-BQnp-YUD.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D7gSHfBn.js";import{u as g}from"./useOsdkClient-D4peXsmr.js";import"./preload-helper-COsmiGlU.js";import"./Table-f3uvHWsc.js";import"./index-TIjGnA-V.js";import"./Dialog-DwYyKS36.js";import"./cross-fEUgPw6t.js";import"./svgIconContainer-CTykICQ9.js";import"./useBaseUiId-EAvVFtG3.js";import"./InternalBackdrop-mNTf9SFF.js";import"./composite-TrXp-_T_.js";import"./index-B7VCz-93.js";import"./index-4Pm78iQf.js";import"./index-Ce6raiTT.js";import"./useEventCallback-DalbXHIL.js";import"./SkeletonBar-J8cR98yu.js";import"./LoadingCell-DaV3CQeG.js";import"./ColumnConfigDialog-CJ1DmrCD.js";import"./DraggableList-Co4aT-G4.js";import"./search-mtN4hQ3z.js";import"./Input-bPmf1b1D.js";import"./useControlled-D9cxw3en.js";import"./Button-CDLpEtAu.js";import"./small-cross-pwzIRu8R.js";import"./ActionButton-S14ncGS1.js";import"./Checkbox-BAN4WIan.js";import"./useValueChanged-8Z2upUib.js";import"./CollapsiblePanel-DuCqlcCL.js";import"./MultiColumnSortDialog-CnEQjc1h.js";import"./MenuTrigger-DRwe12ZK.js";import"./CompositeItem-Blj-310R.js";import"./ToolbarRootContext-vcNNCMZy.js";import"./getDisabledMountTransitionStyles-BOi8NXil.js";import"./getPseudoElementBounds-C_xfi5-U.js";import"./chevron-down-CLaQgAU8.js";import"./index-Bc2S_tLj.js";import"./error-iIOc5tuM.js";import"./BaseCbacBanner-CoMmKMEW.js";import"./makeExternalStore-DFNzrn-Z.js";import"./Tooltip-DQadFgFZ.js";import"./PopoverPopup-D2QR_oJe.js";import"./debounce-CPv0owLQ.js";import"./tick-DO6aTuUx.js";import"./DropdownField-BUiYJ1tm.js";import"./isEqual-CqV2anur.js";import"./withOsdkMetrics-DWYY-gQH.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
