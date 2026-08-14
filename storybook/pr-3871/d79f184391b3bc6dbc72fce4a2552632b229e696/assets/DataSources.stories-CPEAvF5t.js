import{j as r}from"./iframe-DUEuiXsv.js";import{O as b}from"./object-table-DwqejOUI.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Bq8efsmv.js";import{u as g}from"./useOsdkClient-ZL9fjVwz.js";import"./preload-helper-Df6_8uD6.js";import"./Table-D1rmwA4c.js";import"./index-VBi3p1EG.js";import"./Dialog-CRCYXUXL.js";import"./cross-BHSnocIt.js";import"./svgIconContainer-fUfiooYh.js";import"./useBaseUiId-rUHLvqa0.js";import"./InternalBackdrop-BKw-qa39.js";import"./composite-BQlLpDbX.js";import"./index-DaaqgxZj.js";import"./index-BSBqPfD7.js";import"./index-BMX1J3aX.js";import"./useEventCallback-CKqvUveK.js";import"./SkeletonBar-BXO9jfRb.js";import"./LoadingCell-BFQbqchN.js";import"./ColumnConfigDialog-Bm7DS_h9.js";import"./DraggableList-DHvOxSWC.js";import"./search-CQkXJiT6.js";import"./Input-DJ0wEJn_.js";import"./useControlled-BNu8ROQV.js";import"./Button-CDlf2YlH.js";import"./small-cross-BIVwOlj8.js";import"./ActionButton-C0gIAKdy.js";import"./Checkbox-BWGAdML-.js";import"./useValueChanged-BaOiGEU-.js";import"./CollapsiblePanel-BP_6HlRq.js";import"./MultiColumnSortDialog-CLvYRvqp.js";import"./MenuTrigger-DgnR2Wms.js";import"./CompositeItem-Bx3c2X42.js";import"./ToolbarRootContext-D11W-0nl.js";import"./getDisabledMountTransitionStyles-BzC4jxKd.js";import"./getPseudoElementBounds-WZokc1Yz.js";import"./chevron-down-D3lkidTG.js";import"./index-CDpKmQsf.js";import"./error-DhHmTIvC.js";import"./BaseCbacBanner-DhziRTee.js";import"./makeExternalStore-LN7J9oHG.js";import"./Tooltip-jqlALrhF.js";import"./PopoverPopup-Bsnp6ds2.js";import"./debounce-B9jYhlwj.js";import"./tick-D_exLUv-.js";import"./DropdownField-CG8i5Qlw.js";import"./isEqual-BbITlJwb.js";import"./withOsdkMetrics-CPHwq3ys.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
