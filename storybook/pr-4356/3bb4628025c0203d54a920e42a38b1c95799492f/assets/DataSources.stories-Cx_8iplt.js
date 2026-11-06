import{j as r}from"./iframe-BL-M0CJv.js";import{O as b}from"./object-table-DyjahA3Z.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BBKq9AlQ.js";import{u as g}from"./useOsdkClient-Dx2Qs5xK.js";import"./preload-helper-C0zkmkXS.js";import"./Table-CwPyldrC.js";import"./index-Db0LO39w.js";import"./Dialog-X47xU8WG.js";import"./cross-x8jhhqfq.js";import"./svgIconContainer-BX2v_cR0.js";import"./useBaseUiId-TPr_qZ_1.js";import"./InternalBackdrop-DQF7Nf_d.js";import"./composite-Dx0NSDUH.js";import"./index-Bt9OIo2s.js";import"./index-DIwpmFcE.js";import"./index-H5T9X240.js";import"./useEventCallback-ClZrDBfO.js";import"./SkeletonBar-D3gneFRh.js";import"./LoadingCell-CIZRZJiV.js";import"./ColumnConfigDialog-CrhkzJOT.js";import"./DraggableList-DJESFfbU.js";import"./search-BiWkoGJW.js";import"./Input-EsCXPtCp.js";import"./useControlled-CKiiitZS.js";import"./Button-CC9Ubwa3.js";import"./small-cross-BM9iFkVs.js";import"./ActionButton-bQlrAOg4.js";import"./Checkbox-B2PO8JSa.js";import"./useValueChanged-DM3_Gsn0.js";import"./CollapsiblePanel-nIuDIxIE.js";import"./MultiColumnSortDialog-_iw8uLQh.js";import"./MenuTrigger-DKUx42mN.js";import"./CompositeItem-XRZQ4yN6.js";import"./ToolbarRootContext-D7bnZbhq.js";import"./getDisabledMountTransitionStyles-D6fdD7kD.js";import"./getPseudoElementBounds-KY_ZlW1R.js";import"./chevron-down-5PA4SDET.js";import"./index-BFvrjhEh.js";import"./error-BIo7wVIV.js";import"./BaseCbacBanner-CMUORDC1.js";import"./makeExternalStore-DG0rmoX7.js";import"./Tooltip-CZJO9zR4.js";import"./PopoverPopup-B1aR8zHS.js";import"./debounce-zXiB5GmY.js";import"./tick-Ba6iW8gF.js";import"./DropdownField-CYb_vMw7.js";import"./isEqual-CJqL8oc3.js";import"./withOsdkMetrics-BYapBjuA.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
