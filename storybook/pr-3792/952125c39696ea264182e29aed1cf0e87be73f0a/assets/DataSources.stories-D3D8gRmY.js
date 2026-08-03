import{j as r}from"./iframe-ChCYWkFC.js";import{O as b}from"./object-table-B8V5n9QI.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-WJfmEe8t.js";import{u as g}from"./useOsdkClient-D1FULPKE.js";import"./preload-helper-2e0CXzEG.js";import"./Table-DdOs5DiG.js";import"./index-Be19pAzV.js";import"./Dialog-DiAl1dGe.js";import"./cross-BkiSPzBk.js";import"./svgIconContainer-C2FhCoFe.js";import"./useBaseUiId-D7_MSijo.js";import"./InternalBackdrop-CzrE4rQX.js";import"./composite-Dsg-9HAA.js";import"./index-D9paw9rd.js";import"./index-CeE-gYem.js";import"./index-Sj4nune6.js";import"./useEventCallback-C5Q-Fk9J.js";import"./SkeletonBar-CZyrUc0Z.js";import"./LoadingCell-D2VM2uWE.js";import"./ColumnConfigDialog-BN4-d9R6.js";import"./DraggableList-xXmrPcMZ.js";import"./search-D9jFpevZ.js";import"./Input-BD-LZGDG.js";import"./useControlled-Cy91VBio.js";import"./isEqual-CUS8mcyZ.js";import"./isObject-D0a6_sYT.js";import"./Button-DPenXW8U.js";import"./ActionButton-lOa1i4jD.js";import"./Checkbox-CRTz6qdh.js";import"./useValueChanged-DJZIY-Cm.js";import"./CollapsiblePanel-BhUHDzpm.js";import"./MultiColumnSortDialog-Br-y3SjY.js";import"./MenuTrigger-ClS1UY1q.js";import"./CompositeItem-BwVCbGsl.js";import"./ToolbarRootContext-Bp-TiK-m.js";import"./getDisabledMountTransitionStyles-CcH0c07C.js";import"./getPseudoElementBounds-aG8uwwHI.js";import"./chevron-down-sfySf6B-.js";import"./index-DvYGmwtE.js";import"./error-lNGXoKCc.js";import"./BaseCbacBanner-BYdLPlbE.js";import"./makeExternalStore-BdUDleba.js";import"./Tooltip-DHh8c6jU.js";import"./PopoverPopup-CHAYmNQc.js";import"./toNumber-B5PO3x__.js";import"./tick-Du832I-m.js";import"./DropdownField-CTYOA5hJ.js";import"./withOsdkMetrics-CuxbWZN_.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
