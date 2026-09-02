import{j as r}from"./iframe-4yYB2ECu.js";import{O as b}from"./object-table-DTcObYbZ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CREqH-gE.js";import{u as g}from"./useOsdkClient-x1g8_n4T.js";import"./preload-helper-C93dm6Ya.js";import"./Table-VfWP1IQk.js";import"./index-DSqbAlFE.js";import"./Dialog-CX5vmYnC.js";import"./cross-LcX80p3m.js";import"./svgIconContainer-JfwEPNa6.js";import"./useBaseUiId-CU_4DgXR.js";import"./InternalBackdrop-D42GbSkK.js";import"./composite-Ds40WlWo.js";import"./index-Yem3TUar.js";import"./index-BWrySZaR.js";import"./index-_KzJ1Rbr.js";import"./useEventCallback-DIy1mzZ8.js";import"./SkeletonBar-DWaiSj9c.js";import"./LoadingCell-CFvcFK4R.js";import"./ColumnConfigDialog-B4LF4x1T.js";import"./DraggableList-BZ-xJ4SQ.js";import"./search-CC-mClCy.js";import"./Input-Co-1aNP1.js";import"./useControlled-Dpm9HPQO.js";import"./Button-CUx6dso9.js";import"./small-cross-CLMNS1qh.js";import"./ActionButton-Bm6voTIO.js";import"./Checkbox-vSH54gMg.js";import"./useValueChanged-BxrzaDW-.js";import"./CollapsiblePanel-BvNzcq1u.js";import"./MultiColumnSortDialog-D6QFyCHS.js";import"./MenuTrigger-Dzcj5D89.js";import"./CompositeItem-BGzjXJQa.js";import"./ToolbarRootContext-D87nWH30.js";import"./getDisabledMountTransitionStyles-BUcNtKJv.js";import"./getPseudoElementBounds-r5PlTz71.js";import"./chevron-down-xdKSBTdG.js";import"./index-BpSvWq5I.js";import"./error-Dn6Wt_DI.js";import"./BaseCbacBanner-DiHyRB4h.js";import"./makeExternalStore-d8KP81yZ.js";import"./Tooltip-BJ5zYDuF.js";import"./PopoverPopup-HEf02Bcw.js";import"./debounce-BQ23lrxx.js";import"./tick-BwiRnB-U.js";import"./DropdownField-DHrmRAfm.js";import"./isEqual-irPOZyBy.js";import"./withOsdkMetrics-DFTVZPh6.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
