import{j as r}from"./iframe-DeDsL1Xz.js";import{O as b}from"./object-table-CXBuoulD.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-E5MbsDAh.js";import{u as g}from"./useOsdkClient-CW853sZV.js";import"./preload-helper-BVBQesVt.js";import"./Table-C2qcYqvw.js";import"./index-BU8-F79N.js";import"./Dialog-D99dL4kL.js";import"./cross-jIk7qGHQ.js";import"./svgIconContainer-Aqj8Zd5l.js";import"./useBaseUiId-CQ4hkA7O.js";import"./InternalBackdrop-4afONjlA.js";import"./composite-BCcUbicN.js";import"./index-DoWEUVS1.js";import"./index-Cy0o1bod.js";import"./index-Dtahr6U8.js";import"./useEventCallback-CmDQnEvR.js";import"./SkeletonBar-1tazywhq.js";import"./LoadingCell-CmM8i9RW.js";import"./ColumnConfigDialog-DNpnrmLZ.js";import"./DraggableList-pPr8ghmD.js";import"./search-DyYzy_rN.js";import"./Input-W5uf4VNK.js";import"./useControlled-BbxyP0yd.js";import"./Button-B4hehT03.js";import"./small-cross-DQ2KEs4l.js";import"./ActionButton-DiAydvYe.js";import"./Checkbox-B58D9TWu.js";import"./useValueChanged-DBT53UD4.js";import"./CollapsiblePanel-Dk_vAxzI.js";import"./MultiColumnSortDialog-CkWr0sXr.js";import"./MenuTrigger-Dm7LqmlE.js";import"./CompositeItem-DHAlezUZ.js";import"./ToolbarRootContext-DhOdNxhK.js";import"./getDisabledMountTransitionStyles-BBa3Ka3T.js";import"./getPseudoElementBounds-DpElGvOE.js";import"./chevron-down-DuWqNP_i.js";import"./index-DG83v6db.js";import"./error-IDubZlnB.js";import"./BaseCbacBanner-DoaOzdxo.js";import"./makeExternalStore-v6gib538.js";import"./Tooltip-Ab0jMRiD.js";import"./PopoverPopup-D1st1umy.js";import"./debounce-BXSbFmiL.js";import"./tick-BDUK9RwE.js";import"./DropdownField-DNH1-jJL.js";import"./isEqual-CuyGmH72.js";import"./withOsdkMetrics-CfFdQ5R1.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
