import{j as r}from"./iframe-B7BuLFiB.js";import{O as b}from"./object-table-BdJFYC6r.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DwFmadhL.js";import{u as g}from"./useOsdkClient-u-hSR58p.js";import"./preload-helper-QLvxqcYm.js";import"./Table-CG9FECAd.js";import"./index-DX9kLxYV.js";import"./Dialog-D0VMHAuM.js";import"./cross-MuA-PJqQ.js";import"./svgIconContainer-CeTYDBJc.js";import"./useBaseUiId-DGtSh3tx.js";import"./InternalBackdrop-S6ToeWiE.js";import"./composite-BgM6qzfH.js";import"./index-C-D0HXuy.js";import"./index-yPQ50wIw.js";import"./index-Bl6JFfFg.js";import"./useEventCallback-DqHq7xQA.js";import"./SkeletonBar-DCOs-m_E.js";import"./LoadingCell-BFPiOHIX.js";import"./ColumnConfigDialog--fuh7-Zw.js";import"./DraggableList-Z2iXNaNk.js";import"./search-DkIDRVCE.js";import"./Input-BWeaR93e.js";import"./useControlled-o41jjuGU.js";import"./isEqual-Bfeyaww4.js";import"./isObject-gYLe_8iC.js";import"./Button-Bi6KGg8Q.js";import"./ActionButton-DbdfUvrp.js";import"./Checkbox-CCQs_fPo.js";import"./useValueChanged-SYgJfDFB.js";import"./CollapsiblePanel-DfVBUEh5.js";import"./MultiColumnSortDialog-BEohunJJ.js";import"./MenuTrigger-CATqDpCy.js";import"./CompositeItem-Dbzwk1gQ.js";import"./ToolbarRootContext-B_UViE6P.js";import"./getDisabledMountTransitionStyles-CN_eJQFG.js";import"./getPseudoElementBounds-q-JNZLO4.js";import"./chevron-down--mwsi3L9.js";import"./index-6UAs54zO.js";import"./error-PJbSWXrD.js";import"./BaseCbacBanner-CJIqzZ3F.js";import"./makeExternalStore-Cn4EfxAL.js";import"./Tooltip-CR3iIqg2.js";import"./PopoverPopup-Cmh7-q5k.js";import"./toNumber-SXtvtwgI.js";import"./tick-Cpg-N9k1.js";import"./DropdownField-oTCVHpkW.js";import"./withOsdkMetrics-Clj4ukky.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
