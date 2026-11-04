import{j as r}from"./iframe-DiEwqi1M.js";import{O as b}from"./object-table-B_D_jyR9.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-gjtp64rV.js";import{u as g}from"./useOsdkClient-BaTJ5QdO.js";import"./preload-helper-ClSjrKqp.js";import"./Table-Dt7fi-sz.js";import"./index-C5HZMqqF.js";import"./Dialog-Om0xpTNO.js";import"./cross-CTKZHD3L.js";import"./svgIconContainer-DEpavXsM.js";import"./useBaseUiId-BzjC-o1k.js";import"./InternalBackdrop-DxnLPPQZ.js";import"./composite-DPWnr1eN.js";import"./index-Cz06B6jq.js";import"./index-lRW4o_Vc.js";import"./index-CSzmMYde.js";import"./useEventCallback-B63epV8V.js";import"./SkeletonBar-7gs1ucKw.js";import"./LoadingCell-B9gNVpt4.js";import"./ColumnConfigDialog-K-WD4deq.js";import"./DraggableList-BxLmL8UF.js";import"./search-rt5xI3z4.js";import"./Input-DNKlbqfx.js";import"./useControlled-BF2DtUKW.js";import"./Button-C4dfwxaK.js";import"./small-cross-BDLukEIX.js";import"./ActionButton-CcZqKb4G.js";import"./Checkbox-DBiOsgWD.js";import"./useValueChanged-CNrcq4Bg.js";import"./CollapsiblePanel-6U2IaLzh.js";import"./MultiColumnSortDialog-95Z_ah8k.js";import"./MenuTrigger-DLZZizgQ.js";import"./CompositeItem-DTryuWNv.js";import"./ToolbarRootContext-D-rTQkYB.js";import"./getDisabledMountTransitionStyles-BCI44SNh.js";import"./getPseudoElementBounds-Jk7AP9A0.js";import"./chevron-down-D04sNIFr.js";import"./index-3NYfUjbF.js";import"./error-CTX_J0NI.js";import"./BaseCbacBanner-7ReEBEn7.js";import"./makeExternalStore-QP4ecZbg.js";import"./Tooltip-UrBb9NBS.js";import"./PopoverPopup-ByyKD9PW.js";import"./debounce-7cRIuX0l.js";import"./tick-DyH69Fpo.js";import"./DropdownField-AFS21FgE.js";import"./isEqual-2EaPlMu5.js";import"./withOsdkMetrics-CwH_Tict.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
