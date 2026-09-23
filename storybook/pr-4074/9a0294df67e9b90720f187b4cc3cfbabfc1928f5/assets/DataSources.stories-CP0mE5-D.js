import{j as r}from"./iframe-BGhobRtu.js";import{O as b}from"./object-table-COtS4Qnz.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BefoDj5O.js";import{u as g}from"./useOsdkClient-DzPyphix.js";import"./preload-helper-pGzP1r6a.js";import"./Table-QJqNuUM-.js";import"./index-vtFPCgDX.js";import"./Dialog-BdhR34Gc.js";import"./cross-CuYz6VCw.js";import"./svgIconContainer-B7bAtHsS.js";import"./useBaseUiId-DQZ7iRRg.js";import"./InternalBackdrop-BuZZp4vX.js";import"./composite-N1fMxm4N.js";import"./index-qA_bivHa.js";import"./index-C0Y6HNv7.js";import"./index-4ZAX8LQC.js";import"./useEventCallback-IjK4E44x.js";import"./SkeletonBar-is7FW6bL.js";import"./LoadingCell-CAE1DLa0.js";import"./ColumnConfigDialog-CWqi8rZq.js";import"./DraggableList-U86vXP5Q.js";import"./search-CD-rabLl.js";import"./Input-C3PEeUtQ.js";import"./useControlled-Dp1hI4GV.js";import"./Button-DAz_khhf.js";import"./small-cross-sN4wSsnF.js";import"./ActionButton-CGHRv_-b.js";import"./Checkbox-aid0nh5t.js";import"./useValueChanged-COn_Wnb4.js";import"./CollapsiblePanel-DLLULbui.js";import"./MultiColumnSortDialog-R3tQGeIC.js";import"./MenuTrigger-BoRN7fZ3.js";import"./CompositeItem-C8P235hg.js";import"./ToolbarRootContext-DV_dajLa.js";import"./getDisabledMountTransitionStyles-DUpLtIxq.js";import"./getPseudoElementBounds-D0oEP3_T.js";import"./chevron-down-DAtIJVst.js";import"./index-EPx86zSw.js";import"./error-CFVPudD2.js";import"./BaseCbacBanner-CaTQcvxF.js";import"./makeExternalStore-Imo5q4ya.js";import"./Tooltip-DUd70Gw0.js";import"./PopoverPopup-uv4NdOtP.js";import"./debounce-ChAiSJEZ.js";import"./tick-CgJs5kuo.js";import"./DropdownField-DMnr6Z_R.js";import"./isEqual-JnfXh9I5.js";import"./withOsdkMetrics-qR-yFxPK.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
