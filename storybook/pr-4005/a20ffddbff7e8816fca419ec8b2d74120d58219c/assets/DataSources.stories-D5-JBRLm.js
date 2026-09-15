import{j as r}from"./iframe-_9fkTt32.js";import{O as b}from"./object-table-Ds0LSr_A.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-h6edaBcw.js";import{u as g}from"./useOsdkClient-_fcxm1-q.js";import"./preload-helper-C1KDN5-b.js";import"./Table-BfH3AYXS.js";import"./index-cWweuLXs.js";import"./Dialog-DDti5sW6.js";import"./cross-CLyRJbq3.js";import"./svgIconContainer-Bj9lR9eQ.js";import"./useBaseUiId-B9cqL2iw.js";import"./InternalBackdrop-ChDAtvSF.js";import"./composite-Cv5hA45I.js";import"./index-Bmp8eXG6.js";import"./index-B3Qi-0mZ.js";import"./index-CVU17NaB.js";import"./useEventCallback-DviACpK2.js";import"./SkeletonBar-NFYkElve.js";import"./LoadingCell-C3KVxeej.js";import"./ColumnConfigDialog-BLvSWbg7.js";import"./DraggableList-my9KWtYo.js";import"./search-2EBlNsrp.js";import"./Input-BJm5qzbn.js";import"./useControlled-MrPxBQF8.js";import"./Button-BQ2hDtz9.js";import"./small-cross-BsjnHbCi.js";import"./ActionButton-UeHjpWA6.js";import"./Checkbox-CQp1icRm.js";import"./useValueChanged-DtU61oMW.js";import"./CollapsiblePanel-CX7PBUWu.js";import"./MultiColumnSortDialog-Db5boUS7.js";import"./MenuTrigger-BtF80pzz.js";import"./CompositeItem-_4ruefbl.js";import"./ToolbarRootContext-BGC6f2SR.js";import"./getDisabledMountTransitionStyles-DZsAnPct.js";import"./getPseudoElementBounds-Bjiyc-Ax.js";import"./chevron-down-YT2yainA.js";import"./index-DOjV8DU-.js";import"./error-BJKVIKgH.js";import"./BaseCbacBanner-EYfAEeto.js";import"./makeExternalStore-vS9m26hr.js";import"./Tooltip-BO96ovIJ.js";import"./PopoverPopup-DDdOTGgE.js";import"./debounce-BM4LBZIr.js";import"./tick-B_jFaN4q.js";import"./DropdownField-D3_R9BRa.js";import"./isEqual-Db12H7kj.js";import"./withOsdkMetrics-lqXp9PIO.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
