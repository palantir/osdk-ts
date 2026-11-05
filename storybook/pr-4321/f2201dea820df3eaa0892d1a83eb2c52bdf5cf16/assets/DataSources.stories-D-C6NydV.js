import{j as r}from"./iframe-D7WyLq_R.js";import{O as b}from"./object-table-jRD1_Lko.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BlRc5tbD.js";import{u as g}from"./useOsdkClient-Ci5CHzsk.js";import"./preload-helper-BqfBxCjy.js";import"./Table-BamzqaoI.js";import"./index-HyeIDcrc.js";import"./Dialog-Ccerh4bb.js";import"./cross-uvcs2Wcl.js";import"./svgIconContainer-B4x4BdHn.js";import"./useBaseUiId-CG-SGXYP.js";import"./InternalBackdrop-7rlgucId.js";import"./composite-D_DTOoGQ.js";import"./index-ufR6xdAx.js";import"./index-D2fZUIcR.js";import"./index-eSq-wOtL.js";import"./useEventCallback-BReO6q8q.js";import"./SkeletonBar-Be2VldqA.js";import"./LoadingCell-BsVuTR_T.js";import"./ColumnConfigDialog-Q7laFexQ.js";import"./DraggableList-Cay8cu3c.js";import"./search-s_J2wlUd.js";import"./Input-C4gz0NfF.js";import"./useControlled-Bb8KRWad.js";import"./Button-BE_yPzwR.js";import"./small-cross-B4qCwIBh.js";import"./ActionButton-BuFs1EiV.js";import"./Checkbox-DcJs6uB9.js";import"./useValueChanged-BSHUSrlL.js";import"./CollapsiblePanel-H-RuyrJq.js";import"./MultiColumnSortDialog-4e12ji_e.js";import"./MenuTrigger-Ca94hyEY.js";import"./CompositeItem-ZpmtOb_M.js";import"./ToolbarRootContext-Fnt7cK66.js";import"./getDisabledMountTransitionStyles-DFqI_LNP.js";import"./getPseudoElementBounds-OQu2StyZ.js";import"./chevron-down-CUo9ik68.js";import"./index-CJGKKiqL.js";import"./error-D2VV45CC.js";import"./BaseCbacBanner-D9RQiU4n.js";import"./makeExternalStore-DcukOp_j.js";import"./Tooltip-ColuuQlO.js";import"./isObject-CDlc3nuf.js";import"./debounce-CJeHPCAd.js";import"./tick-Dc3ISC5j.js";import"./DropdownField-BcUtsHzO.js";import"./isEqual-Cog-R91C.js";import"./_baseIsEqual-DcLozDln.js";import"./withOsdkMetrics-BvKbLnrg.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};
