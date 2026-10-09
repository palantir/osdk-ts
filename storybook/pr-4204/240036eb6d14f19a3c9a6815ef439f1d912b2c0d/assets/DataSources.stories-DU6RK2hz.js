import{j as r}from"./iframe-C2bn1_9y.js";import{O as b}from"./object-table-CQxPAmKg.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DBumWoso.js";import{u as g}from"./useOsdkClient-CRP05prZ.js";import"./preload-helper-BKCOmGZc.js";import"./Table-C4R5ME31.js";import"./index-Rse0ui84.js";import"./Dialog-Diug7YE5.js";import"./cross-D3-SLGNH.js";import"./svgIconContainer-DPC29kub.js";import"./useBaseUiId-BEW7P3cF.js";import"./InternalBackdrop-DHxqqy0U.js";import"./composite-DfH2wcee.js";import"./index-pp8KWnVv.js";import"./index-Dvlf4PX0.js";import"./index-CIcHY6Ua.js";import"./useEventCallback-DVSHSqJV.js";import"./SkeletonBar-CjAl8nh4.js";import"./LoadingCell-VuLTzYHZ.js";import"./ColumnConfigDialog-DgjE8Rki.js";import"./DraggableList-CcVbWkep.js";import"./search-BCScHNOJ.js";import"./Input-M9Th-rY9.js";import"./useControlled-BN9CT1rQ.js";import"./Button-DYwf6UQE.js";import"./small-cross-BbD3VZXI.js";import"./ActionButton-C1OuBZSx.js";import"./Checkbox-BcechQff.js";import"./useValueChanged-CitzyAfL.js";import"./CollapsiblePanel-BM0qN9C1.js";import"./MultiColumnSortDialog-BkDE4zFt.js";import"./MenuTrigger-DJvbYVk1.js";import"./CompositeItem-Dhse_QgT.js";import"./ToolbarRootContext-C-eiR_Mr.js";import"./getDisabledMountTransitionStyles-Cw6nwd_1.js";import"./getPseudoElementBounds-jQ_Lb5TR.js";import"./chevron-down-BOQ5t9w6.js";import"./index-C2JbH2_9.js";import"./error-DBJpIi5X.js";import"./BaseCbacBanner-CXDqxbSv.js";import"./makeExternalStore-DeVLvyOh.js";import"./Tooltip-AZ5zh1rm.js";import"./PopoverPopup-CtnZgejC.js";import"./debounce-VRVIwWBB.js";import"./tick-CkUSwppG.js";import"./DropdownField-Czf-9CkU.js";import"./isEqual-V1FkRnTw.js";import"./withOsdkMetrics-B5yrVNzh.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
