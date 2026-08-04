import{j as r}from"./iframe-eW0Hkx5D.js";import{O as b}from"./object-table-BfM-RhWz.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BWpCOQfu.js";import{u as g}from"./useOsdkClient-DPj6Xj16.js";import"./preload-helper-BrSVUlNp.js";import"./Table-DJEveXkn.js";import"./index-D2RKhBA_.js";import"./Dialog-wzBp4l1t.js";import"./cross-BDzkJdpr.js";import"./svgIconContainer-DncqIZzb.js";import"./useBaseUiId-DF1sZBey.js";import"./InternalBackdrop-iYnFgdG3.js";import"./composite-usGAMPIR.js";import"./index-el9I9AU6.js";import"./index-DxrGtqe2.js";import"./index-Ce6kNSeo.js";import"./useEventCallback-B4Mnv5M-.js";import"./SkeletonBar-C5_iPS56.js";import"./LoadingCell-9a3BgmQe.js";import"./ColumnConfigDialog-DnbMGILk.js";import"./DraggableList-CkY-PQrW.js";import"./search-Uy7nbnTV.js";import"./Input-D6VOqKfH.js";import"./useControlled-DyHt7C5v.js";import"./isEqual-CnInsNgD.js";import"./isObject-Bfk74yGT.js";import"./Button-COXaioI0.js";import"./ActionButton-DrmAvEU8.js";import"./Checkbox-BcIymDaH.js";import"./useValueChanged-DfVz66Q7.js";import"./CollapsiblePanel-6tYRFBFM.js";import"./MultiColumnSortDialog-DdmowEKs.js";import"./MenuTrigger-DHcaFLQp.js";import"./CompositeItem-6Fe6wWN7.js";import"./ToolbarRootContext-BjqmUCcn.js";import"./getDisabledMountTransitionStyles-Bzmw5-JY.js";import"./getPseudoElementBounds-BquPH41g.js";import"./chevron-down-D8531Sp8.js";import"./index-Cw13LNzi.js";import"./error-EIPWSpKZ.js";import"./BaseCbacBanner-D-aN3uiT.js";import"./makeExternalStore-BTGS1fMn.js";import"./Tooltip-ivLdiLw3.js";import"./PopoverPopup-BwtdOo4G.js";import"./toNumber-DE3-i91E.js";import"./tick-2EgyxYOL.js";import"./DropdownField-Bc6nqXg7.js";import"./withOsdkMetrics-U1NMWhqT.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
