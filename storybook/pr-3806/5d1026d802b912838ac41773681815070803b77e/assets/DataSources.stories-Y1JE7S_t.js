import{j as r}from"./iframe-DrKqnq_q.js";import{O as b}from"./object-table-Bbr7gxWR.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-7Q2pIiWX.js";import{u as g}from"./useOsdkClient-3odUhMKY.js";import"./preload-helper-qHDf4bMQ.js";import"./Table-Bvm4eDXb.js";import"./index-oqhI0w-j.js";import"./Dialog-Cv3pb4do.js";import"./cross-BpfGUZC-.js";import"./svgIconContainer-2L2lvnX_.js";import"./useBaseUiId-BUFR3R_E.js";import"./InternalBackdrop-D8DYQnLb.js";import"./composite-T0CUtM4R.js";import"./index-3em6fiz2.js";import"./index-DUKrIkwM.js";import"./index-Bhqm6Xwr.js";import"./useEventCallback-VcvUG8kv.js";import"./SkeletonBar-BOE9V_sT.js";import"./LoadingCell-CkW06zTq.js";import"./ColumnConfigDialog-BppvF4xo.js";import"./DraggableList-CEOtdXhw.js";import"./search-BpFzV3Uw.js";import"./Input-C3Gx_MN3.js";import"./useControlled-CzpQezbz.js";import"./isEqual-Dgb9H6ef.js";import"./isObject-CP825mKv.js";import"./Button-CxnSYTOO.js";import"./ActionButton-B48LzOD2.js";import"./Checkbox-CSw-kctn.js";import"./useValueChanged-DWsQYSJN.js";import"./CollapsiblePanel-DFSRW_5T.js";import"./MultiColumnSortDialog-BNe5q3gF.js";import"./MenuTrigger-1bEqtenk.js";import"./CompositeItem-D1W5a8R6.js";import"./ToolbarRootContext-CVGyCRId.js";import"./getDisabledMountTransitionStyles-C5iaED36.js";import"./getPseudoElementBounds-CHI2pP8V.js";import"./chevron-down-BpeVjwjl.js";import"./index-BP4U2YmN.js";import"./error-ByTGymY6.js";import"./BaseCbacBanner-BuK2t43v.js";import"./makeExternalStore-BwpiJv42.js";import"./Tooltip-CWD8QRyp.js";import"./PopoverPopup-tH08bNf5.js";import"./toNumber-D9cLtQUL.js";import"./tick-DNZ7pV74.js";import"./DropdownField-D3eXa2F6.js";import"./withOsdkMetrics-CCERPSNj.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
