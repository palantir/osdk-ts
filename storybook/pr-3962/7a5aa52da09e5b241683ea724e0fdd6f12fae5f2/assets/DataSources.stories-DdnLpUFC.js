import{j as r}from"./iframe-BMR09Kil.js";import{O as b}from"./object-table-C3iga_h5.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CJ76qXON.js";import{u as g}from"./useOsdkClient-Sc-BWgcu.js";import"./preload-helper-ibIringt.js";import"./Table-IwMRkVWK.js";import"./index-kb2gRuUI.js";import"./Dialog-DuoiCwHj.js";import"./cross-BJiHelFR.js";import"./svgIconContainer-Dz8rpqsG.js";import"./useBaseUiId-BrR-DAr4.js";import"./InternalBackdrop-9I6g5hQb.js";import"./composite-DEwDT13v.js";import"./index-BhKcBDQn.js";import"./index-DbMijjyJ.js";import"./index-UHkWCkXY.js";import"./useEventCallback-D_XJGpwY.js";import"./SkeletonBar-CI9jZmfm.js";import"./LoadingCell-CI68OwAB.js";import"./ColumnConfigDialog-Cb71Y2yT.js";import"./DraggableList-BYdz-BRt.js";import"./search-CRp3aPu6.js";import"./Input-C_38At4g.js";import"./useControlled-B61TAugk.js";import"./Button-BFYlz1Yp.js";import"./small-cross-CyEjcHAp.js";import"./ActionButton-Bi5VWO6H.js";import"./Checkbox-D0REpKya.js";import"./useValueChanged-BaQpGzAR.js";import"./CollapsiblePanel-DHQ1AqF9.js";import"./MultiColumnSortDialog-BYx3Jqz2.js";import"./MenuTrigger-D4rESh74.js";import"./CompositeItem-C-tDKeCj.js";import"./ToolbarRootContext-DfEHvgT5.js";import"./getDisabledMountTransitionStyles-pJAOA3nr.js";import"./getPseudoElementBounds-B6ICeRFa.js";import"./chevron-down-CN8cLhcC.js";import"./index-DrOIQ7Hj.js";import"./error-DuXRxQxW.js";import"./BaseCbacBanner-Ca-I1NS9.js";import"./makeExternalStore-nFkPZ8WP.js";import"./Tooltip-ht3E5gE3.js";import"./PopoverPopup-DjHK7GgL.js";import"./debounce-CAE2VCrS.js";import"./tick-B4tcRZmd.js";import"./DropdownField-CWaHSYgi.js";import"./isEqual-DMttQ-x3.js";import"./withOsdkMetrics-BoN8aVN7.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
