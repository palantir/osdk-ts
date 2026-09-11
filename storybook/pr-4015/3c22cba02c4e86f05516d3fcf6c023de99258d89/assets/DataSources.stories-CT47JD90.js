import{j as r}from"./iframe-ME9jEV4B.js";import{O as b}from"./object-table-DZvMa9AR.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DZWWH8kO.js";import{u as g}from"./useOsdkClient-Dx8qUr5J.js";import"./preload-helper-CAlbxuMw.js";import"./Table-DarKb3zl.js";import"./index-BwQPjFr5.js";import"./Dialog-CohVxkkM.js";import"./cross-BDVa-Vs8.js";import"./svgIconContainer-C0iDRr5R.js";import"./useBaseUiId-BRBkTzbz.js";import"./InternalBackdrop-w_eWpjif.js";import"./composite-DGm-qDkX.js";import"./index-BfDcgSaT.js";import"./index-By_4WpJv.js";import"./index-D8F1bo2b.js";import"./useEventCallback-DhdZk0w1.js";import"./SkeletonBar-M59GNBZ4.js";import"./LoadingCell-BoyYep22.js";import"./ColumnConfigDialog-ClXNNF41.js";import"./DraggableList-Dr5DtKR-.js";import"./search-Dg6pBwm_.js";import"./Input-CE0w_ENc.js";import"./useControlled-BiaTOKvQ.js";import"./Button-Da4t_kgJ.js";import"./small-cross-D6DBal5p.js";import"./ActionButton-CEmm2wPj.js";import"./Checkbox-D8y-Sj5L.js";import"./useValueChanged-hB8TkC-G.js";import"./CollapsiblePanel-DquoQgDU.js";import"./MultiColumnSortDialog-s4qegvXX.js";import"./MenuTrigger-BG3JFXMo.js";import"./CompositeItem-CxooWEv2.js";import"./ToolbarRootContext-DM1MG67c.js";import"./getDisabledMountTransitionStyles-CzotrHFI.js";import"./getPseudoElementBounds-DGRmUR-d.js";import"./chevron-down-6_LddkfR.js";import"./index-D7oNMiqq.js";import"./error-Y3Mhwjiz.js";import"./BaseCbacBanner-Lj1wfOnk.js";import"./makeExternalStore-DFLhgaAs.js";import"./Tooltip-BEcZHd4g.js";import"./PopoverPopup-DfqLPctH.js";import"./debounce-BRk1tey9.js";import"./tick-BEcsmCA5.js";import"./DropdownField-CaUmxcLV.js";import"./isEqual-js4cgbNJ.js";import"./withOsdkMetrics-DcyxtP_A.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
