import{j as r}from"./iframe-BFWJZaOo.js";import{O as b}from"./object-table-BrOjHsw0.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Br-NiQOk.js";import{u as g}from"./useOsdkClient-BFoXoZmC.js";import"./preload-helper-BB-wZWHQ.js";import"./Table-CHxO4yLR.js";import"./index-XqSw18dv.js";import"./Dialog-B3g8_s7J.js";import"./cross-Bdxg6WL4.js";import"./svgIconContainer-D508kkfI.js";import"./useBaseUiId-D0TRwsGc.js";import"./InternalBackdrop-BAFY0J2d.js";import"./composite-BuqSO83P.js";import"./index-13lJ30rX.js";import"./index-CxTEg5iL.js";import"./index-BcEf8-4C.js";import"./useEventCallback-BPxPY2CN.js";import"./SkeletonBar-a1qesNFL.js";import"./LoadingCell-CY9OtzsA.js";import"./ColumnConfigDialog-B1HvDR0n.js";import"./DraggableList-6t1KEroR.js";import"./search-CoXqkvjq.js";import"./Input-CT8p6Er9.js";import"./useControlled-B54yZwri.js";import"./Button-BucLG5Fq.js";import"./small-cross-7Nm747z7.js";import"./ActionButton-BceFUcJP.js";import"./Checkbox-Bwid83ut.js";import"./useValueChanged-CUBMtNnf.js";import"./CollapsiblePanel-CgWuuhBS.js";import"./MultiColumnSortDialog-B_C0FqaD.js";import"./MenuTrigger-B2Wk1N1n.js";import"./CompositeItem-BYv_HkoB.js";import"./ToolbarRootContext-t3ZlqxTu.js";import"./getDisabledMountTransitionStyles-sSKvelZe.js";import"./getPseudoElementBounds-5meTCtdo.js";import"./chevron-down-jCzULGyN.js";import"./index-DhrvNfiG.js";import"./error-ov0Da29u.js";import"./BaseCbacBanner-Cw-h5evd.js";import"./makeExternalStore-BBLYkrLM.js";import"./Tooltip-sgBLHLbz.js";import"./PopoverPopup-anP8KZpL.js";import"./debounce-BVuWn6Kv.js";import"./tick-BwPdqsm5.js";import"./DropdownField-DUTW3bKH.js";import"./isEqual-C01EUI8T.js";import"./withOsdkMetrics-Dvr0Y_2G.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
