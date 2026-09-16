import{j as r}from"./iframe-C-TWQ9Dj.js";import{O as b}from"./object-table-DHcCBiR1.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BqmMVQ_0.js";import{u as g}from"./useOsdkClient-WmdAhq3S.js";import"./preload-helper-SRiQ6y29.js";import"./Table-CS33TpiL.js";import"./index-PmPY8NSw.js";import"./Dialog-CfxjvUNn.js";import"./cross-BVZ0tu48.js";import"./svgIconContainer-lMlNb8_m.js";import"./useBaseUiId-C7aOOgXJ.js";import"./InternalBackdrop-C7xc3x3s.js";import"./composite-D--SIj9q.js";import"./index--LBhfvhY.js";import"./index-Dii1cflf.js";import"./index-D6WX8M0U.js";import"./useEventCallback-WJc4Eyq9.js";import"./SkeletonBar-Dw_l2Y16.js";import"./LoadingCell-SYLzuCyf.js";import"./ColumnConfigDialog-3RjsD2ye.js";import"./DraggableList-FsNhbosm.js";import"./search-CPuRKLWN.js";import"./Input-C724ccD9.js";import"./useControlled-CySHXj1X.js";import"./Button-CBan_F_X.js";import"./small-cross-Djhljs2G.js";import"./ActionButton-LwJEJXUG.js";import"./Checkbox-CUQfcYoc.js";import"./useValueChanged-BgM1xj6e.js";import"./CollapsiblePanel-UW9yX8mw.js";import"./MultiColumnSortDialog-BmuAXou2.js";import"./MenuTrigger-DjOjw-Xw.js";import"./CompositeItem-Dko6wR9I.js";import"./ToolbarRootContext-C8QhLNp3.js";import"./getDisabledMountTransitionStyles-CEUeKr3J.js";import"./getPseudoElementBounds-qfUTeo2P.js";import"./chevron-down-gXZSSvnY.js";import"./index-CEKrq0xG.js";import"./error-C4q3M3Sg.js";import"./BaseCbacBanner-BFXtCQzL.js";import"./makeExternalStore-Lt703n6D.js";import"./Tooltip-BcTTfVEh.js";import"./PopoverPopup-BFE0pvVh.js";import"./debounce-CYsfIW2P.js";import"./tick-C4vQIE4T.js";import"./DropdownField-HMVghVOX.js";import"./isEqual-C34Y0m9V.js";import"./withOsdkMetrics-DIyUXY1U.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
