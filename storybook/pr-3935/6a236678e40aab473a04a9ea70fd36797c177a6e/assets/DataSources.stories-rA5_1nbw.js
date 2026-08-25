import{j as r}from"./iframe-SRRO8i30.js";import{O as b}from"./object-table-CmPrXxaI.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DfpCkPcY.js";import{u as g}from"./useOsdkClient-D_qW_3G5.js";import"./preload-helper-NPyRSWZ_.js";import"./Table-Dy8AtMUu.js";import"./index-DPLSpa0G.js";import"./Dialog-CSzPqIC3.js";import"./cross-jyQgcZ52.js";import"./svgIconContainer-D3SUPO2O.js";import"./useBaseUiId-8g00ulSi.js";import"./InternalBackdrop-BdDgGwHo.js";import"./composite-B29UKLrp.js";import"./index-C3IHmxZW.js";import"./index-CXi1lZFs.js";import"./index-DjLnHXAX.js";import"./useEventCallback-B5jYv6w5.js";import"./SkeletonBar-r5KpeDyu.js";import"./LoadingCell-B9b2xaD4.js";import"./ColumnConfigDialog-CMnViZr7.js";import"./DraggableList-DEWPd_9E.js";import"./search-Dwq18lHC.js";import"./Input-1ZE3LQ1g.js";import"./useControlled-ClmtJZxj.js";import"./Button-DYyi-OV6.js";import"./small-cross-Di-7UDqX.js";import"./ActionButton-mBOnt8AS.js";import"./Checkbox-Cp1jAqlX.js";import"./useValueChanged-D37_JNWO.js";import"./CollapsiblePanel-C0JW29Ik.js";import"./MultiColumnSortDialog-CluiCg7I.js";import"./MenuTrigger-D4ZP19d1.js";import"./CompositeItem-C-s0XknV.js";import"./ToolbarRootContext-CAXfGmDY.js";import"./getDisabledMountTransitionStyles-DmV333RI.js";import"./getPseudoElementBounds-DX48WjZL.js";import"./chevron-down-CG5p7RNd.js";import"./index-BAxp49FW.js";import"./error-Dr6abEJ3.js";import"./BaseCbacBanner-B5qWK0NP.js";import"./makeExternalStore-BSLUfzC5.js";import"./Tooltip-CLn2UIDD.js";import"./PopoverPopup-CE0QOG7r.js";import"./debounce-CmPQ0Jr_.js";import"./tick-Cn4oMacM.js";import"./DropdownField-DuDh3jGB.js";import"./isEqual-B1aIPHpz.js";import"./withOsdkMetrics-B4tyiiTI.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
