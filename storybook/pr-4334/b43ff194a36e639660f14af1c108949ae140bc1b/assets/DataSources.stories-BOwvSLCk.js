import{j as r}from"./iframe-hYuZ0Daw.js";import{O as b}from"./object-table-Bofbk_iR.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-2io5Ob6E.js";import{u as g}from"./useOsdkClient-D4ryqRY6.js";import"./preload-helper-57_0CTpI.js";import"./Table-cFRBmRJ2.js";import"./index-C5Pc6OCn.js";import"./Dialog-BYdhvTEy.js";import"./cross-h0YrhL7d.js";import"./svgIconContainer-D3B1FGG8.js";import"./useBaseUiId-C66Z_YyS.js";import"./InternalBackdrop-jDrrqOsA.js";import"./composite-fETYQEVT.js";import"./index-DCXcCpux.js";import"./index-BzM9XWI0.js";import"./index-fk41aGRq.js";import"./useEventCallback-Bd-msYrl.js";import"./SkeletonBar-jiOUAN0d.js";import"./LoadingCell-CFpl7Izp.js";import"./ColumnConfigDialog-CFE8zval.js";import"./DraggableList-Biqz3FxX.js";import"./search-De2ktKMh.js";import"./Input-BtSxbTtJ.js";import"./useControlled-DfUelnOD.js";import"./Button-BT_Xkrjb.js";import"./small-cross-CuLqv6Wz.js";import"./ActionButton-BrTsNB-1.js";import"./Checkbox-CkDIq4mU.js";import"./useValueChanged-tK-0Emor.js";import"./CollapsiblePanel-CttdpkNm.js";import"./MultiColumnSortDialog-CStIP5Wq.js";import"./MenuTrigger-DbTPPL2i.js";import"./CompositeItem-DDypA9GI.js";import"./ToolbarRootContext-BfU0Mx90.js";import"./getDisabledMountTransitionStyles-nL3e7Gnd.js";import"./getPseudoElementBounds-ChxMx6wv.js";import"./chevron-down-BZn2JFfs.js";import"./index-DmRE2MXK.js";import"./error-C958vJ-j.js";import"./BaseCbacBanner-CN8ED5hd.js";import"./makeExternalStore-CDcr6d7h.js";import"./Tooltip-Db1h8c5N.js";import"./PopoverPopup-BN84gK9-.js";import"./debounce-Qi9LJiOf.js";import"./tick-C4J5qXpt.js";import"./DropdownField-CotoRe-f.js";import"./isEqual-C6sOs1uU.js";import"./withOsdkMetrics-Bun4Nw5t.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
