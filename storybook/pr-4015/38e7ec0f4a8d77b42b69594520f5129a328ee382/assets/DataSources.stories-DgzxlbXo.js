import{j as r}from"./iframe-DP2XT2Ax.js";import{O as b}from"./object-table-CWd3XKCa.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BhhBmJG3.js";import{u as g}from"./useOsdkClient-CAkDS70D.js";import"./preload-helper-MSxHh9cg.js";import"./Table-oBozEYgN.js";import"./index-CZwfuIm2.js";import"./Dialog-D2jP7-9g.js";import"./cross-BST2eW_7.js";import"./svgIconContainer-CYYVNj4c.js";import"./useBaseUiId-FZoWw8m8.js";import"./InternalBackdrop-BhboBOxC.js";import"./composite-CmPQztny.js";import"./index-RJE3YwuO.js";import"./index-B2FT6Zn5.js";import"./index-DbIKPCqv.js";import"./useEventCallback-Dg6K2X_Q.js";import"./SkeletonBar-DH4NDkMn.js";import"./LoadingCell-ClVBOB9X.js";import"./ColumnConfigDialog-og7pKw1Q.js";import"./DraggableList-C1eYiUo8.js";import"./search-DHZrW8_w.js";import"./Input-1UPAFlWH.js";import"./useControlled-C4scXiay.js";import"./Button-BVtJyzoK.js";import"./small-cross-CtLGGmA4.js";import"./ActionButton-uv8s5IRm.js";import"./Checkbox-Beu4Oh0H.js";import"./useValueChanged-RoL-GB64.js";import"./CollapsiblePanel-DPIs0k4c.js";import"./MultiColumnSortDialog-xHpIpjzv.js";import"./MenuTrigger-CFNU6crv.js";import"./CompositeItem-AXDbFh92.js";import"./ToolbarRootContext-BZtQONnf.js";import"./getDisabledMountTransitionStyles-DDs7xAlw.js";import"./getPseudoElementBounds-QeoJL95h.js";import"./chevron-down-CzZnZ__S.js";import"./index-DTkzCssz.js";import"./error-BbJX9_-G.js";import"./BaseCbacBanner-pjzVuofY.js";import"./makeExternalStore-Db1GWq1p.js";import"./Tooltip-aqIVw1KW.js";import"./PopoverPopup-C_ncCoFL.js";import"./debounce-Dj81RInU.js";import"./tick-C2-r-ZD3.js";import"./DropdownField-CtHib4R8.js";import"./isEqual-DLffGPnv.js";import"./withOsdkMetrics-l-VjWGrr.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
