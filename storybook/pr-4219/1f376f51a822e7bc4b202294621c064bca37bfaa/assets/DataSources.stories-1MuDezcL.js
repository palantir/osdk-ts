import{j as r}from"./iframe-BTFFJnjn.js";import{O as b}from"./object-table-gj9Lc75C.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CbVv-pjP.js";import{u as g}from"./useOsdkClient-6aibAJDm.js";import"./preload-helper-CSZsPkfX.js";import"./Table-yVCzvX5z.js";import"./index-C_Z722LV.js";import"./Dialog-DzBBRwDf.js";import"./cross-LRAZ9qps.js";import"./svgIconContainer-gp9RWo3r.js";import"./useBaseUiId-DHyYX2RX.js";import"./InternalBackdrop-BHLBjXqJ.js";import"./composite-DBRlpOlr.js";import"./index-B4NnbGlh.js";import"./index-CrQcuE9G.js";import"./index-0gaZ0R5v.js";import"./useEventCallback-D2JKsoPj.js";import"./SkeletonBar-CyQFjxNz.js";import"./LoadingCell-Sg18K7xn.js";import"./ColumnConfigDialog-CYv9Vbqr.js";import"./DraggableList-D-9GgOT5.js";import"./search-DOiBQX63.js";import"./Input-D5tlOD_j.js";import"./useControlled-DbgXwRAA.js";import"./Button-XND01Fh-.js";import"./small-cross-DcEGFbkq.js";import"./ActionButton-BOqgyglZ.js";import"./Checkbox-B0yfJxSM.js";import"./useValueChanged-BrxBLzAH.js";import"./CollapsiblePanel--hZtn4S3.js";import"./MultiColumnSortDialog-Uxi7YfUX.js";import"./MenuTrigger-Ff7CWCoo.js";import"./CompositeItem-0772M-C_.js";import"./ToolbarRootContext-BsMzvLUB.js";import"./getDisabledMountTransitionStyles-DPkci45d.js";import"./getPseudoElementBounds-C_NyFnLm.js";import"./chevron-down-C34taKQb.js";import"./index-Dw0-j0VX.js";import"./error-D1AJOnUs.js";import"./BaseCbacBanner-DUePnqQ9.js";import"./makeExternalStore-Dk37SoTO.js";import"./Tooltip-D6bixjsm.js";import"./PopoverPopup-Cc0ymlLC.js";import"./debounce-COoRFcah.js";import"./tick-BwSmQKfq.js";import"./DropdownField-CINIO7u-.js";import"./isEqual-B-bsFdvN.js";import"./withOsdkMetrics-B7f6_6X-.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
