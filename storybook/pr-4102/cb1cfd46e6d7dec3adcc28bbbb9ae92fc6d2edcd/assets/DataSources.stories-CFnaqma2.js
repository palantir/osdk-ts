import{j as r}from"./iframe-DwrFhh8X.js";import{O as b}from"./object-table-CJzeSeXo.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BEhQtKCn.js";import{u as g}from"./useOsdkClient-BGkJfb9L.js";import"./preload-helper-CtRLQ8d2.js";import"./Table-13zpn8as.js";import"./index-2C7ws8qd.js";import"./Dialog-DS-5XWpx.js";import"./cross-CPVTirRP.js";import"./svgIconContainer-Dfv48f4w.js";import"./useBaseUiId-hjF8-Tkz.js";import"./InternalBackdrop-DmelpGzC.js";import"./composite-CQaDz_1E.js";import"./index-BkjyrkST.js";import"./index-8KaHvHT1.js";import"./index-B506KqcM.js";import"./useEventCallback-CbGT4h-v.js";import"./SkeletonBar-CMgVfScc.js";import"./LoadingCell-8g3xYOyz.js";import"./ColumnConfigDialog-q_yUURCK.js";import"./DraggableList-DI3JA3k6.js";import"./search-B4eh0B39.js";import"./Input-CETxnph3.js";import"./useControlled-BWpptLO1.js";import"./Button-DEic01Xh.js";import"./small-cross-rfi-MHsz.js";import"./ActionButton-DK21FKAO.js";import"./Checkbox-6XyOUM_K.js";import"./useValueChanged-OVYV8k4d.js";import"./CollapsiblePanel-noq47swC.js";import"./MultiColumnSortDialog-CmjG40p4.js";import"./MenuTrigger-CYKsI8ZE.js";import"./CompositeItem-Cjr-y7lk.js";import"./ToolbarRootContext-BgJLWr5w.js";import"./getDisabledMountTransitionStyles-DEaamNv3.js";import"./getPseudoElementBounds-Bjx3ag9L.js";import"./chevron-down-BBihCk-h.js";import"./index-DvIHEHIa.js";import"./error-Cw2yDStD.js";import"./BaseCbacBanner-DaIP8iL7.js";import"./makeExternalStore-BDmfTWiu.js";import"./Tooltip-D0M9LXTB.js";import"./PopoverPopup-AoPTNcjX.js";import"./debounce-Do8EHXfQ.js";import"./tick-FFgtl-J5.js";import"./DropdownField-69nLBGPA.js";import"./isEqual-f_qiuOaO.js";import"./withOsdkMetrics-BhQ--KKZ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
