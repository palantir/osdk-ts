import{j as r}from"./iframe-Dku1rot2.js";import{O as b}from"./object-table-Cr26mFUl.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-0KLyRkUL.js";import{u as g}from"./useOsdkClient-DYuiBPOo.js";import"./preload-helper-B1jRvLNW.js";import"./Table-mlPYkczm.js";import"./index-CpbATsh6.js";import"./Dialog-CjxY1CgH.js";import"./cross-CYdU8q6K.js";import"./svgIconContainer--MRhEEk0.js";import"./useBaseUiId-BUKWDElb.js";import"./InternalBackdrop-Bv67AAf2.js";import"./composite-BePe6hVW.js";import"./index-rdZNlnOZ.js";import"./index--u9NxfUY.js";import"./index-CQ7Gwlen.js";import"./useEventCallback-DbRXf3-_.js";import"./SkeletonBar-PabXS6Px.js";import"./LoadingCell-5uF9WrXs.js";import"./ColumnConfigDialog-DFBdNJ63.js";import"./DraggableList-m6ykK22n.js";import"./search-UFTU3MKj.js";import"./Input-DJRIt2l4.js";import"./useControlled-DwMnSwB6.js";import"./Button-CGaTAwDT.js";import"./small-cross-QiwT5l_B.js";import"./ActionButton-D1LuQOA7.js";import"./Checkbox-BoLQIXFm.js";import"./useValueChanged-B2781QBM.js";import"./CollapsiblePanel-piFpbce9.js";import"./MultiColumnSortDialog-Cajh4z2b.js";import"./MenuTrigger-CNEa8F6o.js";import"./CompositeItem-BreNqiOh.js";import"./ToolbarRootContext-CXEqftjp.js";import"./getDisabledMountTransitionStyles-CDJ1MLHW.js";import"./getPseudoElementBounds-BpVmGFE2.js";import"./chevron-down-B4TAPheD.js";import"./index-DTheSZ4d.js";import"./error-setnCXRk.js";import"./BaseCbacBanner-BoCpQNO7.js";import"./makeExternalStore-rRh8-oZl.js";import"./Tooltip-Dwc5k9lz.js";import"./PopoverPopup-D-Gbzl8J.js";import"./debounce-CA9_8DL0.js";import"./tick-CVroU8tN.js";import"./DropdownField-Dhuq6WVc.js";import"./isEqual-chWnWDxq.js";import"./withOsdkMetrics-n7CfGLfD.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
