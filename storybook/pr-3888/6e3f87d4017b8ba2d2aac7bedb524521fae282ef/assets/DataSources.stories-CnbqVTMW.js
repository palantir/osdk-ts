import{j as r}from"./iframe-3nC60a4v.js";import{O as b}from"./object-table-CV-F6wRx.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C5da-N8F.js";import{u as g}from"./useOsdkClient-yREfglk8.js";import"./preload-helper-CtQiSH5M.js";import"./Table-kq55NlgD.js";import"./index--5KTZ4Ep.js";import"./Dialog-BiWAkt-w.js";import"./cross-CMAuZjpn.js";import"./svgIconContainer-Hgjanp0y.js";import"./useBaseUiId-BM6_UXz4.js";import"./InternalBackdrop-BiiOafg8.js";import"./composite-BrRtjrgR.js";import"./index-CLrFIYZg.js";import"./index-DzaKOe1M.js";import"./index-CocS6_I5.js";import"./useEventCallback-ywBwLJd_.js";import"./SkeletonBar-CiKIs5AX.js";import"./LoadingCell-DqkoVxAw.js";import"./ColumnConfigDialog-_767sJGS.js";import"./DraggableList-BQ1mmbNV.js";import"./search-DQ5LXzk6.js";import"./Input-ChkMuz1l.js";import"./useControlled-Ba8inJDj.js";import"./Button-Cnm3S-R_.js";import"./small-cross-KPK1DvK4.js";import"./ActionButton-DJqZpL4G.js";import"./Checkbox-Db399nrU.js";import"./useValueChanged-CGG_8xpf.js";import"./CollapsiblePanel-Cpc-708g.js";import"./MultiColumnSortDialog-lsuxLQhA.js";import"./MenuTrigger-Q6-vCaVA.js";import"./CompositeItem-BEbKblcQ.js";import"./ToolbarRootContext-BdFb43yO.js";import"./getDisabledMountTransitionStyles-kg_yOzXE.js";import"./getPseudoElementBounds-CmEHJYzZ.js";import"./chevron-down-D0HgWRzj.js";import"./index-CsKQS3Xc.js";import"./error-mCE2N3tZ.js";import"./BaseCbacBanner-CqS2gRe5.js";import"./makeExternalStore-0l0defH5.js";import"./Tooltip-DhpiXHiy.js";import"./PopoverPopup-CF0wadjB.js";import"./debounce-CyQSshlk.js";import"./tick-DXiaINGh.js";import"./DropdownField-DjbTnSu5.js";import"./isEqual-DBChHJW0.js";import"./withOsdkMetrics-BFnBWSw3.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
