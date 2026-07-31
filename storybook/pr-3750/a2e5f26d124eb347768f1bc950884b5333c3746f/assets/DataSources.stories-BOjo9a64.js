import{j as r}from"./iframe-CMhwc6yu.js";import{O as b}from"./object-table-Rq5DxrG4.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BXOduWa1.js";import{u as g}from"./useOsdkClient-BAYVrfgb.js";import"./preload-helper-CbbeoF4N.js";import"./Table-DRQCyrCZ.js";import"./index-C2NWml_0.js";import"./Dialog-D-n2VjII.js";import"./cross-CI2EuVLe.js";import"./svgIconContainer-Do_XH38C.js";import"./useBaseUiId-C-AKSjpe.js";import"./InternalBackdrop-YttCJD5R.js";import"./composite-BeSuuE0r.js";import"./index-CLTQ2YZZ.js";import"./index-CYf-jFq0.js";import"./index-CcLC40Dq.js";import"./useEventCallback-Duz16abh.js";import"./SkeletonBar-Bbh35rlF.js";import"./LoadingCell-CFWKBMe3.js";import"./ColumnConfigDialog-CzL28oxe.js";import"./DraggableList-MH7eKqEF.js";import"./search-BYZu81Ts.js";import"./Input-7eUEZAd2.js";import"./useControlled-MLlvuDBf.js";import"./isEqual-xtw4nyWu.js";import"./isObject-nzaBmHWQ.js";import"./Button-CE_QE-eV.js";import"./ActionButton-CPnmehQy.js";import"./Checkbox-8RIdGXXF.js";import"./useValueChanged-cQhh4GcD.js";import"./CollapsiblePanel-EqTeVic5.js";import"./MultiColumnSortDialog-BYxVW7s0.js";import"./MenuTrigger-Bvljeq7z.js";import"./CompositeItem-C5Pf2lIH.js";import"./ToolbarRootContext-otfQj27w.js";import"./getDisabledMountTransitionStyles-pTrQZdF3.js";import"./getPseudoElementBounds-DQ39mZJs.js";import"./chevron-down-B9twCniC.js";import"./index-DCQ6MC0R.js";import"./error-DiGCKWWT.js";import"./BaseCbacBanner-Ci7fn3Ji.js";import"./makeExternalStore-Cd3U3q8T.js";import"./Tooltip-CfcrXACM.js";import"./PopoverPopup-DMZFfjT6.js";import"./toNumber-qPcxCkKr.js";import"./tick-CTaHT6NZ.js";import"./DropdownField-B2438tnE.js";import"./withOsdkMetrics-C7tthBfr.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
