import{j as r}from"./iframe-cnARutXL.js";import{O as b}from"./object-table-KIs2Y_92.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DRgZJ43X.js";import{u as g}from"./useOsdkClient-bAUKHK9v.js";import"./preload-helper-BmFSLRtI.js";import"./Table-BZDr9MPT.js";import"./index-DFLlU5DH.js";import"./Dialog-DxJLRM1k.js";import"./cross-PEBZaCxU.js";import"./svgIconContainer-BYzMgWJS.js";import"./useBaseUiId-D3qiS2j7.js";import"./InternalBackdrop-DicU1YCw.js";import"./composite-B8QB1mMF.js";import"./index-BH1BAqhj.js";import"./index-WfGsRQkJ.js";import"./index-DqmPoYcz.js";import"./useEventCallback-aBWFD298.js";import"./SkeletonBar-BQ6YS2N6.js";import"./LoadingCell-pS64WJpB.js";import"./ColumnConfigDialog-BHjWdYyi.js";import"./DraggableList-DGr317oE.js";import"./search-C7s-xGFv.js";import"./Input-DDwYvpo2.js";import"./useControlled-C2e7ttGZ.js";import"./Button-6fdr9V7a.js";import"./small-cross-zWY6BCii.js";import"./ActionButton-BDfWPIo4.js";import"./Checkbox-Cug8zVJm.js";import"./useValueChanged-CrFeGRAw.js";import"./CollapsiblePanel-CGfN3i0K.js";import"./MultiColumnSortDialog-YoqkDwqG.js";import"./MenuTrigger-CTBkW1T4.js";import"./CompositeItem-BZ25FDYT.js";import"./ToolbarRootContext-Cpm7XsDL.js";import"./getDisabledMountTransitionStyles-BkvoD3fE.js";import"./getPseudoElementBounds-BOblesbJ.js";import"./chevron-down-B7Voti3u.js";import"./index-W_p-C1mB.js";import"./error-D4N7FIX9.js";import"./BaseCbacBanner-C52atT9s.js";import"./makeExternalStore-CokpyCaz.js";import"./Tooltip-DAflEiX-.js";import"./PopoverPopup-C0e4SK-g.js";import"./debounce-CAhzqkJ2.js";import"./tick-UclQVZct.js";import"./DropdownField-CsNVs2BB.js";import"./isEqual-Cnxkpuk4.js";import"./withOsdkMetrics-Cob5tlpP.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
