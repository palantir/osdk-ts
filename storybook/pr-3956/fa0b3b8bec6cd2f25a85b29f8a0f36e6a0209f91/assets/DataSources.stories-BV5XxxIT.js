import{j as r}from"./iframe-DUz-OrqR.js";import{O as b}from"./object-table-w0417WkP.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BdUQYHNP.js";import{u as g}from"./useOsdkClient-BWsNL_Kz.js";import"./preload-helper-WEmf-dAi.js";import"./Table-C5BdWZ0N.js";import"./index-DPNIRnN8.js";import"./Dialog-CWBU6oUQ.js";import"./cross-CCEYas7q.js";import"./svgIconContainer-D7O_Fxw5.js";import"./useBaseUiId-faWN6al-.js";import"./InternalBackdrop-CdDLYcsS.js";import"./composite-5JSlF-Dr.js";import"./index-DYvQRBeB.js";import"./index-BiD7WpJZ.js";import"./index-qR442l2c.js";import"./useEventCallback-CxMtqjaM.js";import"./SkeletonBar-rNAt0bnX.js";import"./LoadingCell-BvcwRBBv.js";import"./ColumnConfigDialog-qGz8PZyw.js";import"./DraggableList-CvNJjWPn.js";import"./search-Bcz0i2pz.js";import"./Input-CbwTlgOh.js";import"./useControlled-CC5aVJEJ.js";import"./Button-CsUtrvR7.js";import"./small-cross-pWPsHnHo.js";import"./ActionButton-vQiUWj7m.js";import"./Checkbox-B3k8RFLk.js";import"./useValueChanged-B2lWda7M.js";import"./CollapsiblePanel-C8CGDA5F.js";import"./MultiColumnSortDialog-D7e9qUsI.js";import"./MenuTrigger-D34Pbt_d.js";import"./CompositeItem-C7hFkHG3.js";import"./ToolbarRootContext-BvHshB_C.js";import"./getDisabledMountTransitionStyles-JWaj6cbB.js";import"./getPseudoElementBounds-ckg5Ie2k.js";import"./chevron-down-b_QMdGXW.js";import"./index-BwuUX6bY.js";import"./error-DKqly0Za.js";import"./BaseCbacBanner-DNIMwCRS.js";import"./makeExternalStore-D6Z3VA3j.js";import"./Tooltip-5zdjkf3a.js";import"./PopoverPopup-BhZaHO9j.js";import"./debounce-tuaMCDN5.js";import"./tick-Bni8E4-n.js";import"./DropdownField-RUWE0tyk.js";import"./isEqual-tNX8jUnb.js";import"./withOsdkMetrics-DJx9VGp_.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
