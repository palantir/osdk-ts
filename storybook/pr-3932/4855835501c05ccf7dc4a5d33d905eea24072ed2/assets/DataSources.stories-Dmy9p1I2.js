import{j as r}from"./iframe-bK06rSfy.js";import{O as b}from"./object-table-CfNHyCaW.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DPgVI1PB.js";import{u as g}from"./useOsdkClient-BulRHlgi.js";import"./preload-helper-K-1boSMk.js";import"./Table-DooZ8vNL.js";import"./index-Bk-vtYHe.js";import"./Dialog-DfTgPYnF.js";import"./cross-DGM8nzKR.js";import"./svgIconContainer-C_mLXjp3.js";import"./useBaseUiId-CPLmGW2i.js";import"./InternalBackdrop-C1jV5x8E.js";import"./composite-0P-Pw-2Q.js";import"./index-BduD8wzE.js";import"./index-0oJri5g1.js";import"./index-XSfDDb8C.js";import"./useEventCallback-D4hmh2FX.js";import"./SkeletonBar-B5kg8PuZ.js";import"./LoadingCell-Bm7K6xoF.js";import"./ColumnConfigDialog-3T0mv6B3.js";import"./DraggableList-CM1Q0u6r.js";import"./search-C40Ggweq.js";import"./Input-6uol7Ijj.js";import"./useControlled-CZQizdlE.js";import"./Button-C5Cur8G2.js";import"./small-cross-UJeA-7-z.js";import"./ActionButton-DoZ9G5gm.js";import"./Checkbox-kYTxpgtk.js";import"./useValueChanged-B0rG8P_6.js";import"./CollapsiblePanel-hjau0PKS.js";import"./MultiColumnSortDialog-DTPUQzx2.js";import"./MenuTrigger-BfTDRkjm.js";import"./CompositeItem-ty0K8CzQ.js";import"./ToolbarRootContext-DZ3HHK_z.js";import"./getDisabledMountTransitionStyles-dqQKCBgX.js";import"./getPseudoElementBounds-DWTwPUeQ.js";import"./chevron-down-DULzUbtR.js";import"./index-DjjhcTLl.js";import"./error-Cj1EJ7Ed.js";import"./BaseCbacBanner-D4F9ZWBY.js";import"./makeExternalStore-By3lhuiJ.js";import"./Tooltip-CsKnunI-.js";import"./PopoverPopup-CS_hwUVd.js";import"./debounce-CysAWd9o.js";import"./tick-sjLAC5bb.js";import"./DropdownField-DLu2iZiv.js";import"./isEqual-CsFjEq6w.js";import"./withOsdkMetrics-CEyQ3Kvz.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
