import{j as r}from"./iframe-CZ4qo6TA.js";import{O as b}from"./object-table-Cl7osAGz.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CPjhgXvA.js";import{u as g}from"./useOsdkClient-58hcDjFk.js";import"./preload-helper-D40KpOHN.js";import"./Table-Du3ldVPy.js";import"./index-B1VXkh3r.js";import"./Dialog-C3B0-q6F.js";import"./cross-BdgbMHZq.js";import"./svgIconContainer-CMijeJNG.js";import"./useBaseUiId-DO15ulBB.js";import"./InternalBackdrop-DWj837um.js";import"./composite-CODWVvxq.js";import"./index-CZQei39W.js";import"./index-SZhdlURA.js";import"./index-CuFz-_kG.js";import"./useEventCallback-ExrAdjX-.js";import"./SkeletonBar-CJS4EpKQ.js";import"./LoadingCell-DjMywnOg.js";import"./ColumnConfigDialog-Bf6vPSqo.js";import"./DraggableList--GRLHIPj.js";import"./search-DMBvmHVz.js";import"./Input-RFD7u_HI.js";import"./useControlled-Cx3Ij5Mu.js";import"./Button-BtVUzCrS.js";import"./small-cross-QLvraUt0.js";import"./ActionButton-CsLidLTo.js";import"./Checkbox-BpqpeK9_.js";import"./useValueChanged-CVtnd4HJ.js";import"./CollapsiblePanel-DEkl0vLO.js";import"./MultiColumnSortDialog-Ch4aEIXg.js";import"./MenuTrigger-B9t6PfLv.js";import"./CompositeItem-deIgJifw.js";import"./ToolbarRootContext-Bml6QJba.js";import"./getDisabledMountTransitionStyles-DVK3xheu.js";import"./getPseudoElementBounds-BxmnbCl3.js";import"./chevron-down-BdE_cbUf.js";import"./index-Dn5MssWf.js";import"./error-CVxsYLyQ.js";import"./BaseCbacBanner-BO36fmcs.js";import"./makeExternalStore-ChVKEbDO.js";import"./Tooltip-DW57x_s5.js";import"./PopoverPopup-X1NXKjjR.js";import"./debounce-CgqyealR.js";import"./tick-C-ZfBZ86.js";import"./DropdownField-C-3zm9pF.js";import"./isEqual-CLDOcZzH.js";import"./withOsdkMetrics-BKNh995o.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
