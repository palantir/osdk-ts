import{j as r}from"./iframe-DsISivmL.js";import{O as b}from"./object-table-D-R8-m_2.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Cll2JGxN.js";import{u as g}from"./useOsdkClient-zAtHZEwL.js";import"./preload-helper-BzOTEX4h.js";import"./Table-HjUSSdiq.js";import"./index-CA9KUbCW.js";import"./Dialog-CxNOiwWg.js";import"./cross-BGShLWmS.js";import"./svgIconContainer-Dp3EEAal.js";import"./useBaseUiId-CMSPxGM5.js";import"./InternalBackdrop-B7T_UWK7.js";import"./composite-0zr51VGP.js";import"./index-CLDUlJNg.js";import"./index-vtVyo2v8.js";import"./index-ji8x1IHY.js";import"./useEventCallback-COAm-0TE.js";import"./SkeletonBar-c-f45sOv.js";import"./LoadingCell-Ruo-nYP2.js";import"./ColumnConfigDialog-BzPFK1xr.js";import"./DraggableList-gCYQPmCE.js";import"./search-BjXP8SQo.js";import"./Input-C-IYkLA_.js";import"./useControlled-B8XvalbJ.js";import"./Button-CSztET3k.js";import"./small-cross-DPV9Jc_E.js";import"./ActionButton-DYgFtpFn.js";import"./Checkbox-CwZnYDKw.js";import"./useValueChanged-CEyGGyfc.js";import"./CollapsiblePanel-DeMaCQ59.js";import"./MultiColumnSortDialog-BLRN6IbJ.js";import"./MenuTrigger-P7xuahsz.js";import"./CompositeItem-DPkp3H9j.js";import"./ToolbarRootContext-BoW9B8ED.js";import"./getDisabledMountTransitionStyles-DyXUV0ZO.js";import"./getPseudoElementBounds-D8rG3FVx.js";import"./chevron-down-CGSFBjuL.js";import"./index-CKh5Salv.js";import"./error-33DrpFja.js";import"./BaseCbacBanner-BwGv_eo7.js";import"./makeExternalStore-Bj-L88f8.js";import"./Tooltip-DWpaGJhu.js";import"./PopoverPopup-Cxkx2QUZ.js";import"./debounce-X_5agJaU.js";import"./tick-Ccm3lDvW.js";import"./DropdownField-CvZQLsdV.js";import"./isEqual-DJpzJyhX.js";import"./withOsdkMetrics-D6_E0WHa.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
