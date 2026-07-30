import{j as r}from"./iframe-CDdobGVl.js";import{O as b}from"./object-table-B8SkHDHc.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C1gk657q.js";import{u as g}from"./useOsdkClient-D640BFrj.js";import"./preload-helper-fzUqsnoB.js";import"./Table-1FYsJVtN.js";import"./index-UG7IPa_e.js";import"./Dialog-LmovP1r_.js";import"./cross-DCH_An2W.js";import"./svgIconContainer-CgDgIgq2.js";import"./useBaseUiId-DRnSBJCG.js";import"./InternalBackdrop-Dek1E__h.js";import"./composite-B7TSCQsg.js";import"./index-DuK41-3i.js";import"./index-DsQcLISu.js";import"./index-FQSBGRBE.js";import"./useEventCallback-Ci8wYTua.js";import"./SkeletonBar-aDjTru-v.js";import"./LoadingCell-DJLYTkxA.js";import"./ColumnConfigDialog-Bjj8AdKZ.js";import"./DraggableList-DRKr8B2k.js";import"./search-DhR-FEPU.js";import"./Input-B8c3wvNn.js";import"./useControlled-y0BuUqJ1.js";import"./isEqual-BrP0-CPc.js";import"./isObject-D1v0OFvi.js";import"./Button-DV2ka0Gf.js";import"./ActionButton-DAf9MUci.js";import"./Checkbox-BHRvrbWl.js";import"./useValueChanged-DqSkUFAq.js";import"./CollapsiblePanel-BLrbSiDi.js";import"./MultiColumnSortDialog-BQJL_SCe.js";import"./MenuTrigger-C9rAEmNL.js";import"./CompositeItem-BV2a_jIB.js";import"./ToolbarRootContext-eacV9sqC.js";import"./getDisabledMountTransitionStyles-DBakWkTZ.js";import"./getPseudoElementBounds-DjYJBVJl.js";import"./chevron-down-D3adfjjO.js";import"./index-Dtnd9Ao8.js";import"./error-CWlEyLzu.js";import"./BaseCbacBanner-DjgfQF4B.js";import"./makeExternalStore-BwTsluQv.js";import"./Tooltip-BUI5QaZR.js";import"./PopoverPopup-BVSi0AGn.js";import"./toNumber-BUnY8e99.js";import"./tick-D6gnufEx.js";import"./DropdownField-BRXshMDt.js";import"./withOsdkMetrics-B9eQL1mQ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
