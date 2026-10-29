import{j as r}from"./iframe-DuvqzVxr.js";import{O as b}from"./object-table-ACOy5fIY.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DNXPsfvA.js";import{u as g}from"./useOsdkClient-Da4jyrei.js";import"./preload-helper-B8Qd9CCZ.js";import"./Table-t_ayPNbZ.js";import"./index-CAuUDW48.js";import"./Dialog-YTWXeUoK.js";import"./cross-D-jw0QJK.js";import"./svgIconContainer-D3ZSKuHH.js";import"./useBaseUiId-CfATFv1v.js";import"./InternalBackdrop-CLiFzfHC.js";import"./composite-CdnuQNOj.js";import"./index-Bs6MnhUR.js";import"./index-BfNHcsKt.js";import"./index-CmRTjbwa.js";import"./useEventCallback-Db_vpyOg.js";import"./SkeletonBar-BLNTNrn1.js";import"./LoadingCell-CsMzBol1.js";import"./ColumnConfigDialog-DMAc6Z0z.js";import"./DraggableList-C54BtvoC.js";import"./search-BeCT36MA.js";import"./Input-Wm8tLy-0.js";import"./useControlled-DqFDREqa.js";import"./Button-D-ya50CL.js";import"./small-cross-D2srWpyH.js";import"./ActionButton-DXzxj-c5.js";import"./Checkbox-DnX7hc9m.js";import"./useValueChanged-CIvJaurU.js";import"./CollapsiblePanel-Bp6GY39F.js";import"./MultiColumnSortDialog-wNvsXQUr.js";import"./MenuTrigger-Dq_Lo_bz.js";import"./CompositeItem-Dls_a94V.js";import"./ToolbarRootContext-BTKqEH_P.js";import"./getDisabledMountTransitionStyles-D5mHC2vC.js";import"./getPseudoElementBounds-D85lzNV4.js";import"./chevron-down-DD8mUth2.js";import"./index-fBn-5OyE.js";import"./error-BIPDQryL.js";import"./BaseCbacBanner-93_WTKD8.js";import"./makeExternalStore-pWtHUq0J.js";import"./Tooltip-DFnQGaCd.js";import"./PopoverPopup-B1BeyJb-.js";import"./debounce-498a9Eyo.js";import"./tick-CYXQ7A8e.js";import"./DropdownField-CE0ndGls.js";import"./isEqual-ClyUabIX.js";import"./withOsdkMetrics-39xkLVPI.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
