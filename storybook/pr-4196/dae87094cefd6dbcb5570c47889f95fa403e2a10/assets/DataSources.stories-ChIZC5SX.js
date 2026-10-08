import{j as r}from"./iframe-BZFzj4I7.js";import{O as b}from"./object-table-CaOanD_r.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C6tRiJTW.js";import{u as g}from"./useOsdkClient-C4NEBTtT.js";import"./preload-helper-D4VtoqvU.js";import"./Table-D69G7tsa.js";import"./index-C9BOu-GC.js";import"./Dialog-BmAlFTcT.js";import"./cross-8Ktod3hp.js";import"./svgIconContainer-BgU1NuNe.js";import"./useBaseUiId-CynpPIak.js";import"./InternalBackdrop-CG54fetj.js";import"./composite-DOYm4spg.js";import"./index-CRbxC94q.js";import"./index-ZJ1zgTXq.js";import"./index-Bk8XfLzk.js";import"./useEventCallback-BCUiY9N8.js";import"./SkeletonBar-bkE9C5Ws.js";import"./LoadingCell-gLcFJ4DB.js";import"./ColumnConfigDialog-BiLqNN8I.js";import"./DraggableList-kJQ0KOz4.js";import"./search-CtmR8qHz.js";import"./Input-CNdZYHeG.js";import"./useControlled-ed2KW_CI.js";import"./Button-BADC2rqt.js";import"./small-cross-BAxJVgQG.js";import"./ActionButton-Dex_JIm4.js";import"./Checkbox-JZjDJOin.js";import"./useValueChanged-CuuuHRpO.js";import"./CollapsiblePanel-CGkaJLnK.js";import"./MultiColumnSortDialog-D4GOkhgz.js";import"./MenuTrigger-Cc6fQlb_.js";import"./CompositeItem-V8rmNgwr.js";import"./ToolbarRootContext-BpRFBWvV.js";import"./getDisabledMountTransitionStyles-Ch4NQ1Hm.js";import"./getPseudoElementBounds-DpgopoMm.js";import"./chevron-down-B4Kaehlj.js";import"./index-dwA92LAO.js";import"./error-DXjyDcZg.js";import"./BaseCbacBanner-DJu3ij19.js";import"./makeExternalStore-CONCRK9u.js";import"./Tooltip-kv_sqmri.js";import"./PopoverPopup-BZRml7yC.js";import"./debounce-BbAGx_Mx.js";import"./tick-CiH7fOUu.js";import"./DropdownField-DUmhDtNd.js";import"./isEqual-CYFWBjNz.js";import"./withOsdkMetrics-LbVHGHvS.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
