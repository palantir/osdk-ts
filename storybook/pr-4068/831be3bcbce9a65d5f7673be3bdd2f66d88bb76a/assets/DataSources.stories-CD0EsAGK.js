import{j as r}from"./iframe-ClmmZ3bm.js";import{O as b}from"./object-table-DsatPqbe.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C0ajL7r7.js";import{u as g}from"./useOsdkClient-CKzk92mD.js";import"./preload-helper-BZo60ewl.js";import"./Table-D1bwUrEg.js";import"./index-DIDi76XU.js";import"./Dialog-CIfkEYR7.js";import"./cross-BZIbyAfw.js";import"./svgIconContainer-CXmUB5_k.js";import"./useBaseUiId-WUEu06gE.js";import"./InternalBackdrop-3GGPa-k1.js";import"./composite-DFQP3WzO.js";import"./index-BVYmTNrb.js";import"./index-Bq9s53kA.js";import"./index-Z45XLqZB.js";import"./useEventCallback-BNKXZA_K.js";import"./SkeletonBar-zmrRzeWk.js";import"./LoadingCell-moQ8ecqY.js";import"./ColumnConfigDialog-CjawNvRx.js";import"./DraggableList-au3wpCID.js";import"./search-BSdPNEqM.js";import"./Input-prqFStI6.js";import"./useControlled-DgsYzmvX.js";import"./Button-BC65lBcv.js";import"./small-cross-Hnp_Cop5.js";import"./ActionButton-CmUSS7TV.js";import"./Checkbox-Bo232Iw9.js";import"./useValueChanged-BYcMVQkQ.js";import"./CollapsiblePanel-DLONQ99q.js";import"./MultiColumnSortDialog-Dvdstylu.js";import"./MenuTrigger-CQM2fZ-t.js";import"./CompositeItem-By3QnrLx.js";import"./ToolbarRootContext-BOxraJ6v.js";import"./getDisabledMountTransitionStyles-NPU84L0j.js";import"./getPseudoElementBounds-BgBAgWR8.js";import"./chevron-down-cWg0tuLd.js";import"./index-BYMK15VD.js";import"./error-joC9U9D6.js";import"./BaseCbacBanner-DvElSbKs.js";import"./makeExternalStore-BNsO-POR.js";import"./Tooltip-L4sylTo8.js";import"./PopoverPopup-DNr0L3gG.js";import"./debounce-XQlAyE-7.js";import"./tick-CId6S-tg.js";import"./DropdownField-CnAzqUOi.js";import"./isEqual-DQPARruA.js";import"./withOsdkMetrics-3RKVNbyO.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
