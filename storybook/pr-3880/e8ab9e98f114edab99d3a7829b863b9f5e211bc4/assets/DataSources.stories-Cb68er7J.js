import{j as r}from"./iframe-tKy6APGZ.js";import{O as b}from"./object-table-CXOQ5-Bt.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Co-pcSI5.js";import{u as g}from"./useOsdkClient-DffW2GNh.js";import"./preload-helper-TkRVYpGj.js";import"./Table-aVr-cm8e.js";import"./index-xL2dF_iL.js";import"./Dialog-_HKqoJi0.js";import"./cross-CZNxjxTb.js";import"./svgIconContainer-Fm0Itt8L.js";import"./useBaseUiId-D4LRJH62.js";import"./InternalBackdrop-JtePeB2n.js";import"./composite-CQXmhBC2.js";import"./index-tz8HT03m.js";import"./index-DPumkzsB.js";import"./index-BURy5Q0k.js";import"./useEventCallback-BPZsErWH.js";import"./SkeletonBar-DKA6QS3d.js";import"./LoadingCell-C4FlmSc0.js";import"./ColumnConfigDialog-1wLW7wAA.js";import"./DraggableList-DzkYxRiU.js";import"./search-D28QZpbg.js";import"./Input-CNh3fqAG.js";import"./useControlled-DKIul1JY.js";import"./Button-CO7TuWo7.js";import"./small-cross-B57Jo-iY.js";import"./ActionButton-CH2f-vaq.js";import"./Checkbox-i1pzXO7M.js";import"./useValueChanged-Btmb51LF.js";import"./CollapsiblePanel-BBg5V9Fw.js";import"./MultiColumnSortDialog-VCNdJIc8.js";import"./MenuTrigger-JZuFOHD6.js";import"./CompositeItem-CPH8rcqG.js";import"./ToolbarRootContext-BNp90vCd.js";import"./getDisabledMountTransitionStyles--YjRI_nH.js";import"./getPseudoElementBounds-oj5UDNKB.js";import"./chevron-down-Dz9066r5.js";import"./index-BY_Q76g3.js";import"./error-DeDVZ0qI.js";import"./BaseCbacBanner-Ce6XNrpU.js";import"./makeExternalStore-C4vMnOBy.js";import"./Tooltip-3YSWsEh-.js";import"./PopoverPopup-CzPcYQbn.js";import"./debounce-DlATweo8.js";import"./tick-Hrp6Yd74.js";import"./DropdownField-CPXyhYMx.js";import"./isEqual-OqbIOAu3.js";import"./withOsdkMetrics-D45euEFz.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
