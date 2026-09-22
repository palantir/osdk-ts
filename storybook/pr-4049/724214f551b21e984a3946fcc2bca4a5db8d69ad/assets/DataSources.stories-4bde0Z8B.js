import{j as r}from"./iframe-DcYOqu2U.js";import{O as b}from"./object-table-BUJ0UBkR.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B1NzyFTH.js";import{u as g}from"./useOsdkClient-DO7IEPKY.js";import"./preload-helper-S82--H9u.js";import"./Table-CdVuFRqi.js";import"./index-DiVuESi1.js";import"./Dialog-dtOt9m2Z.js";import"./cross-CDM50iQ0.js";import"./svgIconContainer-yWnKapjH.js";import"./useBaseUiId-BCzIH_us.js";import"./InternalBackdrop-CeJDAv-U.js";import"./composite-z-1xLKDd.js";import"./index-EYomkAWT.js";import"./index-0CesUQZv.js";import"./index-CknGzI9c.js";import"./useEventCallback-CcAOlUNX.js";import"./SkeletonBar-FDu5_K5F.js";import"./LoadingCell-DJEPgpK8.js";import"./ColumnConfigDialog-D87oUpOB.js";import"./DraggableList-BbaAj1ue.js";import"./search-DkFuHynJ.js";import"./Input-BDRGIKaZ.js";import"./useControlled-BUaPb3-r.js";import"./Button-_cT9fEiv.js";import"./small-cross-BTclTiS1.js";import"./ActionButton-CVvGpKcN.js";import"./Checkbox-Dc7MwXnE.js";import"./useValueChanged-CZEDJKXE.js";import"./CollapsiblePanel-DdleFq3w.js";import"./MultiColumnSortDialog-SDf46NGq.js";import"./MenuTrigger-B5vFtVv3.js";import"./CompositeItem-DDIaKXMB.js";import"./ToolbarRootContext-_iXFA-YU.js";import"./getDisabledMountTransitionStyles-csMlkapf.js";import"./getPseudoElementBounds-B3R2Xnt1.js";import"./chevron-down-CJhuOc7o.js";import"./index-DC8s7Au8.js";import"./error-CugXhAIj.js";import"./BaseCbacBanner-DvXGe8XZ.js";import"./makeExternalStore-DkFMYs8N.js";import"./Tooltip-CZmshqBI.js";import"./PopoverPopup-VAITxfkO.js";import"./debounce-B7Bz9Zmz.js";import"./tick-9LlYbapO.js";import"./DropdownField-DfYmYHBy.js";import"./isEqual-BBhQjzID.js";import"./withOsdkMetrics-D3ra-NNv.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
