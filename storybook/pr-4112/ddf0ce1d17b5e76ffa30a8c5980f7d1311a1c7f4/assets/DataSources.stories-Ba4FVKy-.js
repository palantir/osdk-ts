import{j as r}from"./iframe-D8QP41pb.js";import{O as b}from"./object-table-BYrGksL1.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-5WaxbznZ.js";import{u as g}from"./useOsdkClient-DsLeguWM.js";import"./preload-helper-rYx5aepV.js";import"./Table-BxriQm8K.js";import"./index-ptxv2enP.js";import"./Dialog-BqcUisPw.js";import"./cross-C4B55KNt.js";import"./svgIconContainer-CRypdVCt.js";import"./useBaseUiId-BoqMbBaF.js";import"./InternalBackdrop-CKHEvFzx.js";import"./composite-sgwSF-wx.js";import"./index-Cgw2ueis.js";import"./index-Dng6rJam.js";import"./index-CNNBeMhh.js";import"./useEventCallback-DdNo-ccX.js";import"./SkeletonBar-Csa-9swL.js";import"./LoadingCell-D_i2XUNr.js";import"./ColumnConfigDialog-Cd26VZI3.js";import"./DraggableList-NlKXxKYZ.js";import"./search-C3wepv5K.js";import"./Input-lEEPXcpp.js";import"./useControlled-G3ngQ_8d.js";import"./Button-CyBwq7g0.js";import"./small-cross-BtPSf5__.js";import"./ActionButton-Bvgk-75l.js";import"./Checkbox-EtH8CkIm.js";import"./useValueChanged-9pWqBbjF.js";import"./CollapsiblePanel-Cxlgd4Ev.js";import"./MultiColumnSortDialog-ZgWNUGdf.js";import"./MenuTrigger-BJGTKCX4.js";import"./CompositeItem-nSbVFhm7.js";import"./ToolbarRootContext-DDihycVp.js";import"./getDisabledMountTransitionStyles-EIaHnfB3.js";import"./getPseudoElementBounds-DtmmKYOt.js";import"./chevron-down-7YXmtC0t.js";import"./index-BOgqeeRL.js";import"./error-D-e6D9Uk.js";import"./BaseCbacBanner-BwQAputt.js";import"./makeExternalStore-DKTVVSUo.js";import"./Tooltip-oiN_I4PZ.js";import"./PopoverPopup-CzD111vI.js";import"./debounce-tZf_e5M0.js";import"./tick-DIslqI7R.js";import"./DropdownField-BxbakFzB.js";import"./isEqual-DlOUWIw3.js";import"./withOsdkMetrics-nBhke6l1.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
