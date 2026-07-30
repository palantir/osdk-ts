import{j as r}from"./iframe-Bt4Xobet.js";import{O as b}from"./object-table-ESLraP9c.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D_NfY1mS.js";import{u as g}from"./useOsdkClient-CGPWcPnj.js";import"./preload-helper-CIGldWkI.js";import"./Table-Dh8WrLMe.js";import"./index-C9QCKnRv.js";import"./Dialog-Bt16bQO_.js";import"./cross-EISoXgiZ.js";import"./svgIconContainer-BK5VnXrw.js";import"./useBaseUiId-OZ0hUE_a.js";import"./InternalBackdrop-hUtnwJGp.js";import"./composite-DDgJpTsN.js";import"./index-CZKjIZkZ.js";import"./index-CjzROSaJ.js";import"./index-BWtyZcA_.js";import"./useEventCallback-1iEm_Jcu.js";import"./SkeletonBar-Ofc__1IX.js";import"./LoadingCell-BvDgL-19.js";import"./ColumnConfigDialog-CbkPAmBR.js";import"./DraggableList-Dwm_DYuN.js";import"./search-BUQOh4mX.js";import"./Input-D-1nEW3a.js";import"./useControlled-DyGKRwST.js";import"./isEqual-EcUHdlDF.js";import"./isObject-DbxEad6g.js";import"./Button-CTrNzNt_.js";import"./ActionButton-Dkt25fua.js";import"./Checkbox-DsIqf523.js";import"./useValueChanged-CG97XxYr.js";import"./CollapsiblePanel-BrwiE-29.js";import"./MultiColumnSortDialog-DuzVdzTj.js";import"./MenuTrigger-Cyb-YEi4.js";import"./CompositeItem-DgpKcPgo.js";import"./ToolbarRootContext-DIt4thAF.js";import"./getDisabledMountTransitionStyles-B721IT_k.js";import"./getPseudoElementBounds-C1106lzn.js";import"./chevron-down-IwUW_Yhg.js";import"./index-DSNbiTi3.js";import"./error-CzuGt2Gr.js";import"./BaseCbacBanner-D2egufd4.js";import"./makeExternalStore-84IoszYF.js";import"./Tooltip-CvcctPhn.js";import"./PopoverPopup-CwvnG5I6.js";import"./toNumber-B2D77nhi.js";import"./tick-16BAGEht.js";import"./DropdownField-SRU5zi3R.js";import"./withOsdkMetrics-BjgVacGN.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
