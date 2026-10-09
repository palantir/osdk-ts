import{j as r}from"./iframe-KOHCB4Ql.js";import{O as b}from"./object-table-D8tGB2lP.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Bs65mDh4.js";import{u as g}from"./useOsdkClient-CE0gmR96.js";import"./preload-helper-C6JW-Yng.js";import"./Table-DiyuXitT.js";import"./index-BNcO0wRN.js";import"./Dialog-Pdx4pxY-.js";import"./cross-BUaadKZZ.js";import"./svgIconContainer-C4qAid9G.js";import"./useBaseUiId-CnRKbAt1.js";import"./InternalBackdrop-imINBtvi.js";import"./composite-ChHDZB6E.js";import"./index-CBKKW39b.js";import"./index-BQDXS8xb.js";import"./index-DCkGiwqv.js";import"./useEventCallback-Bb5XrgmO.js";import"./SkeletonBar-8CMS4org.js";import"./LoadingCell-BGAS2Ej2.js";import"./ColumnConfigDialog-DzQiv7Ph.js";import"./DraggableList-DatpWWqs.js";import"./search-Dd1zov5c.js";import"./Input-D6-DkH9C.js";import"./useControlled-BY7stmzf.js";import"./Button-uumGSIHU.js";import"./small-cross-CvWdYn_H.js";import"./ActionButton-D9pI43aQ.js";import"./Checkbox-CtLK0QgG.js";import"./useValueChanged-BSGCys20.js";import"./CollapsiblePanel-CHpI8fT2.js";import"./MultiColumnSortDialog-BxQvZ_d1.js";import"./MenuTrigger-CZ2N4HWH.js";import"./CompositeItem-wiNuWtyF.js";import"./ToolbarRootContext-DilrPmxZ.js";import"./getDisabledMountTransitionStyles-AK4QR3JS.js";import"./getPseudoElementBounds-DQfcxaUz.js";import"./chevron-down-InZk2kmp.js";import"./index-w7dGULd9.js";import"./error-C0G7w8jF.js";import"./BaseCbacBanner-CKj134qf.js";import"./makeExternalStore-DeVyI-Ob.js";import"./Tooltip-C7mgMzGT.js";import"./PopoverPopup-ysDfGGix.js";import"./debounce-BkPBmf3P.js";import"./tick-B2vqXtjq.js";import"./DropdownField-Bm-pLwGh.js";import"./isEqual-CKwtOA-0.js";import"./withOsdkMetrics-BvJsymAS.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
