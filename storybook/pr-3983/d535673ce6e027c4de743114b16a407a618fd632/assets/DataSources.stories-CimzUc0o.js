import{j as r}from"./iframe-DXaJ13QU.js";import{O as b}from"./object-table-VofzUvoC.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Caxeko2g.js";import{u as g}from"./useOsdkClient-B7wuXGjj.js";import"./preload-helper-BroFP_lE.js";import"./Table-BFVnIaUX.js";import"./index-DZFr4IUe.js";import"./Dialog-BhsRLiCm.js";import"./cross-B9pf8KCz.js";import"./svgIconContainer-Cok1WmRf.js";import"./useBaseUiId-rib_Fnun.js";import"./InternalBackdrop-Zj2BFMXg.js";import"./composite-BAacjU3A.js";import"./index-DRifIPLC.js";import"./index-Dw57ybl-.js";import"./index-Cr1sYr80.js";import"./useEventCallback-DIhZQMlD.js";import"./SkeletonBar-MGki9n80.js";import"./LoadingCell-DiCXqZhH.js";import"./ColumnConfigDialog-Cnv2RkuX.js";import"./DraggableList-DWGRmIR2.js";import"./search-BhfCLASk.js";import"./Input-5PPkwes4.js";import"./useControlled-DEmQR29N.js";import"./Button-DN8eJVF0.js";import"./small-cross-BBUhfExp.js";import"./ActionButton-Cj_9HOV9.js";import"./Checkbox-BJULk6T0.js";import"./useValueChanged-CGfRbHou.js";import"./CollapsiblePanel-DPEWUotT.js";import"./MultiColumnSortDialog-DAb6n93R.js";import"./MenuTrigger-JsevVKSq.js";import"./CompositeItem-UfCVn6ij.js";import"./ToolbarRootContext-Cz-twL-R.js";import"./getDisabledMountTransitionStyles-BAol_-Lj.js";import"./getPseudoElementBounds-DlPJcayw.js";import"./chevron-down-BggCntkx.js";import"./index-BGAyhcr2.js";import"./error-Cm275nno.js";import"./BaseCbacBanner-CMuvBih-.js";import"./makeExternalStore-YZAYYspW.js";import"./Tooltip-CkUCTSSv.js";import"./PopoverPopup-BKrHCY-Q.js";import"./debounce-C3pc2scv.js";import"./tick-dOHg_t3C.js";import"./DropdownField-C6212O3_.js";import"./isEqual-BCP2gqmY.js";import"./withOsdkMetrics-hFb6ubqE.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
