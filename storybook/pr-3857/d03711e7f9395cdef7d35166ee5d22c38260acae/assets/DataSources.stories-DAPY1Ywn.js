import{j as r}from"./iframe-TSCXHIvh.js";import{O as b}from"./object-table-g4jUaBrr.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BsdlZ7k0.js";import{u as g}from"./useOsdkClient-BjJ_4Cbd.js";import"./preload-helper-CyN_qzqo.js";import"./Table-7IyhMdYF.js";import"./index-CGNWdjig.js";import"./Dialog-BrSEEWIj.js";import"./cross-qV010Wi5.js";import"./svgIconContainer-Bphs_oGH.js";import"./useBaseUiId-BRdTeBe9.js";import"./InternalBackdrop-zmDDK70c.js";import"./composite-C_xrzc_v.js";import"./index-DJNFZ_0Y.js";import"./index-CyvvuY01.js";import"./index-365hR3Tz.js";import"./useEventCallback-Q-BuKhlk.js";import"./SkeletonBar-Cn6bvStP.js";import"./LoadingCell-Dc7JZgB1.js";import"./ColumnConfigDialog-B_KblGDd.js";import"./DraggableList-BA7ztIjM.js";import"./search-CbBOTsc7.js";import"./Input-CKK_09LY.js";import"./useControlled-BlC2AddR.js";import"./isEqual-CUbPxmeV.js";import"./isObject-CdyqwF5E.js";import"./Button-DshrbGne.js";import"./ActionButton-BqiSBwhf.js";import"./Checkbox-BOW9gfJ4.js";import"./useValueChanged-D5zyQZ_8.js";import"./CollapsiblePanel-Bv1oor-z.js";import"./MultiColumnSortDialog-BfUJH6qF.js";import"./MenuTrigger-Dzncy3J5.js";import"./CompositeItem-0AIS0Bnl.js";import"./ToolbarRootContext-msQZFx_W.js";import"./getDisabledMountTransitionStyles-DAAaOP18.js";import"./getPseudoElementBounds-DZOzu6Xp.js";import"./chevron-down-BoPRMOEq.js";import"./index-CG_ja6Hi.js";import"./error-B7F78YrU.js";import"./BaseCbacBanner-DMzPVCj_.js";import"./makeExternalStore-B-opuCj0.js";import"./Tooltip-h74fXVzi.js";import"./PopoverPopup-CD6nvj94.js";import"./toNumber-DiHLMfvy.js";import"./tick-B8NR-l3z.js";import"./DropdownField-CA23MMyB.js";import"./withOsdkMetrics-q66YyN3A.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
