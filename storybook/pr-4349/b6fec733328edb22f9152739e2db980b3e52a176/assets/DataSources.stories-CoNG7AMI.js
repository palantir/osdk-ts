import{j as r}from"./iframe-6rmEYQ4q.js";import{O as b}from"./object-table-C3g8Rgsf.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-KFYjzkcG.js";import{u as g}from"./useOsdkClient-DmHqy9pL.js";import"./preload-helper-CQFwNwom.js";import"./Table-DUEsztjk.js";import"./index-DHYmSSVn.js";import"./Dialog-B4_gKkCj.js";import"./cross-D-Hg8nzG.js";import"./svgIconContainer-BTOejcjp.js";import"./useBaseUiId-DutMLbwr.js";import"./InternalBackdrop-DgOuuiso.js";import"./composite-6RMh68ZK.js";import"./index-DTFmmgtm.js";import"./index--7GUs8pc.js";import"./index-Cushj5su.js";import"./useEventCallback-Byxoa0dh.js";import"./SkeletonBar-DOUZ-mE8.js";import"./LoadingCell-5tJCvwxm.js";import"./ColumnConfigDialog-DmAEs3Ph.js";import"./DraggableList-BazWYHtA.js";import"./search-BHn0KTJN.js";import"./Input-DHCuHilz.js";import"./useControlled-HeurI7_b.js";import"./Button-B5wqsid8.js";import"./small-cross-CHICJ2XI.js";import"./ActionButton-BV9UuRgT.js";import"./Checkbox-DlXCmFqY.js";import"./useValueChanged-DNZRcsJs.js";import"./CollapsiblePanel-CDBbZZyU.js";import"./MultiColumnSortDialog-DvErCYRD.js";import"./MenuTrigger-BIbOF5Wa.js";import"./CompositeItem-DuBtWhAd.js";import"./ToolbarRootContext-4ImLkhxO.js";import"./getDisabledMountTransitionStyles-B3ra-kQw.js";import"./getPseudoElementBounds-DlcOVO-y.js";import"./chevron-down-DJM0Z3o9.js";import"./index-O1VLMwtD.js";import"./error-D2aG_W_b.js";import"./BaseCbacBanner-Cr9-xR0n.js";import"./makeExternalStore-D4L5Wrb5.js";import"./Tooltip-C2F6IU3H.js";import"./isObject-SiaksReL.js";import"./debounce-fovSx1xM.js";import"./tick-qf7hH7wH.js";import"./DropdownField-BIgaE5lU.js";import"./isEqual-LTMCApQW.js";import"./_baseIsEqual-CvZHeATj.js";import"./withOsdkMetrics-23-xBZ5M.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
