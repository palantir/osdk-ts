import{j as r}from"./iframe-Dhbpz2gi.js";import{O as b}from"./object-table-Dpo2P-g6.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CY1pWwG6.js";import{u as g}from"./useOsdkClient-SDPeNtQ5.js";import"./preload-helper-pmClhyIA.js";import"./Table-J8K4yk_n.js";import"./index-DSV0RL80.js";import"./Dialog-BmWUCtql.js";import"./cross-CFyO1iLs.js";import"./svgIconContainer-D2dXNiPy.js";import"./useBaseUiId-CACE2Sja.js";import"./InternalBackdrop-CU5AdZzY.js";import"./composite-DOBXXfvc.js";import"./index-Ca39Bid0.js";import"./index-CnSMSR0R.js";import"./index-Dew5d4z1.js";import"./useEventCallback-CJaRWzg5.js";import"./SkeletonBar-ChcHrYnF.js";import"./LoadingCell-BoW2Y8wi.js";import"./ColumnConfigDialog-B2HY3zjN.js";import"./DraggableList-Be3kaJ6G.js";import"./search-u8YFrvlf.js";import"./Input-BnzP7kbL.js";import"./useControlled-VMxlV8-z.js";import"./Button-BBeJRgfu.js";import"./small-cross-B_L6MZIl.js";import"./ActionButton-ChCcvaQX.js";import"./Checkbox-DdSzOZ2q.js";import"./useValueChanged-BOsd1GIT.js";import"./CollapsiblePanel-nyUJPFc3.js";import"./MultiColumnSortDialog-BsSa66WB.js";import"./MenuTrigger-6Wgnx2Z6.js";import"./CompositeItem-lexcaFgm.js";import"./ToolbarRootContext-Bg810oqs.js";import"./getDisabledMountTransitionStyles-Bh-dMn6q.js";import"./getPseudoElementBounds-DAcEjJ_C.js";import"./chevron-down-CiaZa2yM.js";import"./index-DXREmQu7.js";import"./error-BXnEUtGZ.js";import"./BaseCbacBanner-Ij4tkuzU.js";import"./makeExternalStore-BBmrBF7y.js";import"./Tooltip-BEukUHQs.js";import"./PopoverPopup-Dd7ELU_i.js";import"./debounce-zud5xvpI.js";import"./tick-CIrlrYqM.js";import"./DropdownField-Bykj9lDw.js";import"./isEqual-Cq-efSCm.js";import"./withOsdkMetrics-D8w7KGDl.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
