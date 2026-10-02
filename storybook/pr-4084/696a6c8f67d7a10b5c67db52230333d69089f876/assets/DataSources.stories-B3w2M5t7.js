import{j as r}from"./iframe-Btqvg51n.js";import{O as b}from"./object-table-Kr1LIz9k.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BXhTadTj.js";import{u as g}from"./useOsdkClient-CDUGXlsx.js";import"./preload-helper-syhdZDkE.js";import"./Table-C-PPsSqH.js";import"./index-BD28I-pc.js";import"./Dialog-Bb1DWAWa.js";import"./cross-4sLVfr-a.js";import"./svgIconContainer-DO6E7UDs.js";import"./useBaseUiId-BkjQeUzK.js";import"./InternalBackdrop-XTodM-Lf.js";import"./composite-DISAoOje.js";import"./index-C-bm7M0d.js";import"./index-DI6u9RXJ.js";import"./index-C1ab4uqR.js";import"./useEventCallback-Birv-DIv.js";import"./SkeletonBar-g4Zrl_9a.js";import"./LoadingCell-BKaFduDq.js";import"./ColumnConfigDialog-BUzzW8EJ.js";import"./DraggableList-CZHyxGin.js";import"./search-CS3jZQxq.js";import"./Input-DshYp2Vv.js";import"./useControlled-sKyg4XQp.js";import"./Button-Cjefz3Ec.js";import"./small-cross-DDu4FjQa.js";import"./ActionButton-DPOxkhPL.js";import"./Checkbox-B2j86Kyh.js";import"./useValueChanged-CGpXR8sb.js";import"./CollapsiblePanel-P1TD94b_.js";import"./MultiColumnSortDialog-C6PMzrn_.js";import"./MenuTrigger-D40aaK9L.js";import"./CompositeItem-QpGH5PhM.js";import"./ToolbarRootContext-AyD5CGSz.js";import"./getDisabledMountTransitionStyles-Dj_QuE4i.js";import"./getPseudoElementBounds-DXcg_kO_.js";import"./chevron-down-HGlEUxE6.js";import"./index-DFfg-m3O.js";import"./error-BHl0yOWM.js";import"./BaseCbacBanner-DvqMmJ1G.js";import"./makeExternalStore-D879CjGU.js";import"./Tooltip-C9dIavbW.js";import"./PopoverPopup-Dknz7An3.js";import"./debounce-BAYS4VQz.js";import"./tick-BmuiIbFi.js";import"./DropdownField-DQbsKt9D.js";import"./isEqual-tsaj_REN.js";import"./withOsdkMetrics-D8UgdzXc.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
