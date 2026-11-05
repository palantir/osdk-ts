import{j as r}from"./iframe-BGZow3KJ.js";import{O as b}from"./object-table-Dy50goam.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CDqm2KXd.js";import{u as g}from"./useOsdkClient-hMBV3ED4.js";import"./preload-helper-CV0-5wxc.js";import"./Table-DA1FfOaK.js";import"./index-BDJbf4mz.js";import"./Dialog-B1qY-5Ke.js";import"./cross-Dn--TE22.js";import"./svgIconContainer-GlJoQzna.js";import"./useBaseUiId-BlZeP_kj.js";import"./InternalBackdrop-B_sB-beZ.js";import"./composite-CN_PLOWp.js";import"./index-BuHLiRGy.js";import"./index-C3aV2ZJb.js";import"./index-DEaxfkN8.js";import"./useEventCallback-mWSDmhwd.js";import"./SkeletonBar-DU-7laho.js";import"./LoadingCell-BY7lFPHu.js";import"./ColumnConfigDialog-BzmNhDRK.js";import"./DraggableList-BWanF9g_.js";import"./search-xttomfsG.js";import"./Input-BSDEuHVc.js";import"./useControlled-C-Ujr0_X.js";import"./Button-B8_EYdXY.js";import"./small-cross-DO6-UyiL.js";import"./ActionButton-BWeIxwPs.js";import"./Checkbox-D68JXFmj.js";import"./useValueChanged-Bau6PUUH.js";import"./CollapsiblePanel-CwHNwtms.js";import"./MultiColumnSortDialog-CN1uErBY.js";import"./MenuTrigger--QqhK-w2.js";import"./CompositeItem-BUIK-kSM.js";import"./ToolbarRootContext-CqO-yoJp.js";import"./getDisabledMountTransitionStyles-BTYArxOj.js";import"./getPseudoElementBounds-D5IsxrGd.js";import"./chevron-down-4eRxImwL.js";import"./index-D9ncN4SR.js";import"./error-C57Ogh7g.js";import"./BaseCbacBanner-COW4ued-.js";import"./makeExternalStore-C3raoZ1p.js";import"./Tooltip-BRxp8-5A.js";import"./PopoverPopup-CUF3E2YZ.js";import"./debounce-B9ghShVf.js";import"./tick-Du4Lzmue.js";import"./DropdownField-CnC7UHHW.js";import"./isEqual-CLKX9Iv1.js";import"./withOsdkMetrics-D6t-dwVR.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
