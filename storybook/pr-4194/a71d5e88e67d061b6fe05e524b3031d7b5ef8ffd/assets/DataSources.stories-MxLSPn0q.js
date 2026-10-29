import{j as r}from"./iframe-BGwIwWEh.js";import{O as b}from"./object-table-BbALfnP_.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C4h19QMI.js";import{u as g}from"./useOsdkClient-B5DU8aU4.js";import"./preload-helper-DaJMqj_l.js";import"./Table-DV7qKTD_.js";import"./index-IqKqgeW3.js";import"./Dialog-60LtrDUL.js";import"./cross-CCJ4Erjw.js";import"./svgIconContainer-o0yAa7DN.js";import"./useBaseUiId-Bx0PVkvu.js";import"./InternalBackdrop-BceHrAMg.js";import"./composite-B2YG03DA.js";import"./index-CbmIHl_7.js";import"./index-Bo6Tdt1f.js";import"./index-DVuyxqwK.js";import"./useEventCallback-Bp5P_gp0.js";import"./SkeletonBar-Cicsnuhb.js";import"./LoadingCell-C7ev7AcJ.js";import"./ColumnConfigDialog-DYQQN3rc.js";import"./DraggableList-DZJjmD7T.js";import"./search-BpQNC6sv.js";import"./Input-D41ZdIt3.js";import"./useControlled-DZytncd1.js";import"./Button-BhV9_fzg.js";import"./small-cross-DWE0gQPB.js";import"./ActionButton-BX1OZitO.js";import"./Checkbox-CS9_YEgp.js";import"./useValueChanged-DzKjeiR-.js";import"./CollapsiblePanel-CuJlxl5T.js";import"./MultiColumnSortDialog-wpz2VgHC.js";import"./MenuTrigger-D1DOTVk2.js";import"./CompositeItem-D-aFyv1W.js";import"./ToolbarRootContext-BU6MqSEl.js";import"./getDisabledMountTransitionStyles-fuWoY_wo.js";import"./getPseudoElementBounds-DNrhWm0z.js";import"./chevron-down-Bm6Tj7Z6.js";import"./index-CTSacj2z.js";import"./error-D5T_pCuL.js";import"./BaseCbacBanner-Z8GzQNLS.js";import"./makeExternalStore-BRaFC0yj.js";import"./Tooltip-D5vtKM_y.js";import"./PopoverPopup-DYOwTnyz.js";import"./debounce-BJo4Ztyn.js";import"./tick-DNfwJYjk.js";import"./DropdownField-QuxoTji1.js";import"./isEqual-CJsdcYTp.js";import"./withOsdkMetrics-_pxO3ZE7.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
