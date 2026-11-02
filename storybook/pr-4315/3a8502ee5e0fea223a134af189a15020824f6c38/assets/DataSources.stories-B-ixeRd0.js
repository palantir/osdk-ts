import{j as r}from"./iframe-BITxIQXM.js";import{O as b}from"./object-table-CegXVBry.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DBBQwf9s.js";import{u as g}from"./useOsdkClient-_qIeBz6R.js";import"./preload-helper-CJCZF6BK.js";import"./Table-C1h4u2VM.js";import"./index-BXV9FcBB.js";import"./Dialog-DntjnMef.js";import"./cross-DYXRPDx7.js";import"./svgIconContainer-4yskBugb.js";import"./useBaseUiId-DoTbd__l.js";import"./InternalBackdrop-DCrVf-EE.js";import"./composite-CqBnb1yV.js";import"./index-UMWtaZVa.js";import"./index-DQpYD4zL.js";import"./index-EOsqRXOu.js";import"./useEventCallback-DZfqIGxY.js";import"./SkeletonBar-DV7HgVRJ.js";import"./LoadingCell-BgiGg-3m.js";import"./ColumnConfigDialog-C7ESb4to.js";import"./DraggableList-txyAYhFd.js";import"./search-Bb0Ck9Ps.js";import"./Input-DB8ShKaf.js";import"./useControlled-Yy2fJI9L.js";import"./Button-CrhbLtNZ.js";import"./small-cross-GSrdzjDe.js";import"./ActionButton-D5dP9TnG.js";import"./Checkbox-DTkNiB8m.js";import"./useValueChanged-CTDlXj4Q.js";import"./CollapsiblePanel-Bo_h6-tV.js";import"./MultiColumnSortDialog-B7VJTi5T.js";import"./MenuTrigger-uMYu-NiS.js";import"./CompositeItem-TvjrH8CY.js";import"./ToolbarRootContext-Ddl053qU.js";import"./getDisabledMountTransitionStyles-Dp8AXCtE.js";import"./getPseudoElementBounds-BjyRTRRW.js";import"./chevron-down-DVE6tSD6.js";import"./index-DoQAUbhM.js";import"./error-DxPjfWes.js";import"./BaseCbacBanner-DXyBf0Bn.js";import"./makeExternalStore-C_t-r-t8.js";import"./Tooltip-BAiOzlh0.js";import"./PopoverPopup-PaNaO8o5.js";import"./debounce-BArBmm9m.js";import"./tick-Bshl7dq7.js";import"./DropdownField-8NieERJz.js";import"./isEqual-CmQgkTco.js";import"./withOsdkMetrics-B04gc41f.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
