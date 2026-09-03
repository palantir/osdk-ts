import{j as r}from"./iframe-Cfa7VV9b.js";import{O as b}from"./object-table-DXBlul32.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B4iWsWL2.js";import{u as g}from"./useOsdkClient-DHcLBuTj.js";import"./preload-helper-CNnDmdGh.js";import"./Table-BB0k3bQv.js";import"./index-CH9AmopW.js";import"./Dialog-w0Dm1Fh9.js";import"./cross-BEJbLhxw.js";import"./svgIconContainer-DvY8yHqi.js";import"./useBaseUiId-D_k54qol.js";import"./InternalBackdrop-BVCviyNt.js";import"./composite-CrY-lNuw.js";import"./index-Bv1S_5M0.js";import"./index-TmLVBI9S.js";import"./index-67hxxU-T.js";import"./useEventCallback-K8cd2Fnj.js";import"./SkeletonBar-Bs1-yAkF.js";import"./LoadingCell-Qob4Jpx9.js";import"./ColumnConfigDialog-DTiwSQWS.js";import"./DraggableList-BRn8YBjo.js";import"./search-BwdTmPFq.js";import"./Input-DN8AJK08.js";import"./useControlled-CjWedb3G.js";import"./Button-DTyGlfF4.js";import"./small-cross-C3IJlndA.js";import"./ActionButton-CXudEriw.js";import"./Checkbox-B7Va5HB2.js";import"./useValueChanged-B94bKY6Z.js";import"./CollapsiblePanel-DCPma9to.js";import"./MultiColumnSortDialog-D65ehaZ8.js";import"./MenuTrigger-CXYWTRNk.js";import"./CompositeItem-Hyqz3S2c.js";import"./ToolbarRootContext-b1GByVNw.js";import"./getDisabledMountTransitionStyles-D8GdmpOs.js";import"./getPseudoElementBounds-D_Rk3WjB.js";import"./chevron-down-GlFAnb1p.js";import"./index-DIAXbPaT.js";import"./error-DARJoisr.js";import"./BaseCbacBanner-DHgwbqtn.js";import"./makeExternalStore-CgLbI1f8.js";import"./Tooltip-fzl9DYcK.js";import"./PopoverPopup-BPWYYHWp.js";import"./debounce-BhgPK9RJ.js";import"./tick-C2d5tvIe.js";import"./DropdownField-s65vbGOa.js";import"./isEqual-BjpIMPRN.js";import"./withOsdkMetrics-D6ZfJzuW.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
