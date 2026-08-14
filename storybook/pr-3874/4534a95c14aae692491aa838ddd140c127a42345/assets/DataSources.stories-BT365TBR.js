import{j as r}from"./iframe-Ba8PHYqF.js";import{O as b}from"./object-table-COs1RWZm.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BnbQFuWi.js";import{u as g}from"./useOsdkClient-C-NQgoaU.js";import"./preload-helper-VSCHNqrc.js";import"./Table-BLGSYdXP.js";import"./index-CYz5sxm-.js";import"./Dialog-CW58EFG4.js";import"./cross-BMuQzm1w.js";import"./svgIconContainer-D3Vq6lhO.js";import"./useBaseUiId-CM4KZ4gx.js";import"./InternalBackdrop-C0Iw5WBU.js";import"./composite-C7C0lYaE.js";import"./index-7A66RV6v.js";import"./index-BH--vJui.js";import"./index-BgRDPYQ2.js";import"./useEventCallback-CCCfMMAc.js";import"./SkeletonBar-rCpEJ8p6.js";import"./LoadingCell-Bas8m6yo.js";import"./ColumnConfigDialog-DiDAecuK.js";import"./DraggableList-C33e8VbS.js";import"./search-CSidIbdR.js";import"./Input-DxXWxw4L.js";import"./useControlled-df092o7d.js";import"./Button-H-kX3WhQ.js";import"./small-cross-yRw1vW_l.js";import"./ActionButton-DLThXdQb.js";import"./Checkbox-cgSWlE0O.js";import"./useValueChanged-CAvtLgMA.js";import"./CollapsiblePanel-BpVH8rXR.js";import"./MultiColumnSortDialog-AD6pTiLp.js";import"./MenuTrigger-CIm9vomN.js";import"./CompositeItem-D3oTZHnf.js";import"./ToolbarRootContext-ClpWLSom.js";import"./getDisabledMountTransitionStyles-BTdqaYwA.js";import"./getPseudoElementBounds-vfCPoH5N.js";import"./chevron-down-DcdnJMhC.js";import"./index-CqwCmP3l.js";import"./error-BJ5r8zIU.js";import"./BaseCbacBanner-CC5TBrfI.js";import"./makeExternalStore-y72CzQ6c.js";import"./Tooltip-DxDRfVS3.js";import"./PopoverPopup-7FW94aDk.js";import"./debounce-BQHT7fzq.js";import"./tick-CBriDvBS.js";import"./DropdownField-Dvxz-g49.js";import"./isEqual-0UHk7APa.js";import"./withOsdkMetrics-5o3v7rv4.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
