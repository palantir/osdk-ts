import{j as r}from"./iframe-BNOKRHpm.js";import{O as b}from"./object-table-DxskSANI.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B0m1PSk_.js";import{u as g}from"./useOsdkClient-CvNBJB2G.js";import"./preload-helper-CFKbXbX-.js";import"./Table-CP40vGo6.js";import"./index-XA3M--in.js";import"./Dialog-VzJ2GhTk.js";import"./cross-C6ouYwXO.js";import"./svgIconContainer-DfI3Swo4.js";import"./useBaseUiId-CUrQf0BS.js";import"./InternalBackdrop-Ba206NVe.js";import"./composite-miZnHh1r.js";import"./index-BRkADXm4.js";import"./index-DRg9zoeK.js";import"./index-CbdrAR84.js";import"./useEventCallback-BJLSqFt5.js";import"./SkeletonBar-CJCawi6C.js";import"./LoadingCell-CfWkjve0.js";import"./ColumnConfigDialog-B4XsetrV.js";import"./DraggableList-DJyAsJHK.js";import"./search-Dgaav2uF.js";import"./Input-BgXBkyZH.js";import"./useControlled-CFad5hXR.js";import"./Button-BuIgOk8v.js";import"./small-cross-BFmen-Bm.js";import"./ActionButton-CgO8w1uL.js";import"./Checkbox-tApvN24W.js";import"./useValueChanged-BwGMDP-K.js";import"./CollapsiblePanel-DOor5ooD.js";import"./MultiColumnSortDialog-B4nfMeQm.js";import"./MenuTrigger-G5dTVs-D.js";import"./CompositeItem-BXx4pExx.js";import"./ToolbarRootContext-B2tiH_2Q.js";import"./getDisabledMountTransitionStyles-WnO-c-MQ.js";import"./getPseudoElementBounds-C64LTfyN.js";import"./chevron-down-BEJwekoL.js";import"./index--hzNwQqO.js";import"./error-BlVam3Jf.js";import"./BaseCbacBanner-BCfdVX3j.js";import"./makeExternalStore-DzLhNxCL.js";import"./Tooltip-CY2sOn3Y.js";import"./PopoverPopup-CwX1wf7p.js";import"./debounce-sLe2cVh8.js";import"./tick-ck2iZb7i.js";import"./DropdownField-BXHMhMxP.js";import"./isEqual-BA4SbdaQ.js";import"./withOsdkMetrics-Bvubum1o.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
