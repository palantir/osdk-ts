import{j as r}from"./iframe-DyhO41Rj.js";import{O as b}from"./object-table-CnkMaw8t.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Da7B6pvy.js";import{u as g}from"./useOsdkClient-CaJv5Gl-.js";import"./preload-helper-CIbx8URd.js";import"./Table-DdVB3AgN.js";import"./index-DwI7CQqH.js";import"./Dialog-CNd6Q5dO.js";import"./cross-CrdS3els.js";import"./svgIconContainer-DEkY-HLY.js";import"./useBaseUiId-Bew9-MTU.js";import"./InternalBackdrop-FIq_NBf8.js";import"./composite-Brg7gMZI.js";import"./index-UqD0hRj3.js";import"./index-DR9hE8qy.js";import"./index-EkCVf_dq.js";import"./useEventCallback-7-xYdRK3.js";import"./SkeletonBar-Bpd-j5zt.js";import"./LoadingCell-BvfQZvK_.js";import"./ColumnConfigDialog-e1j5Aaw0.js";import"./DraggableList-CEQggg39.js";import"./search-D8ph0Tmj.js";import"./Input-dlG_yuK1.js";import"./useControlled-BDcMaUKC.js";import"./Button-fa-PaPuc.js";import"./small-cross-DjI62rJX.js";import"./ActionButton-DMioYdTS.js";import"./Checkbox-DUBSVtNO.js";import"./useValueChanged-CMrkkb4b.js";import"./CollapsiblePanel-C9_ojemY.js";import"./MultiColumnSortDialog-Bu_hNZRG.js";import"./MenuTrigger-Du-AWTD8.js";import"./CompositeItem-B1D8TqxB.js";import"./ToolbarRootContext-CekAQhO_.js";import"./getDisabledMountTransitionStyles-DgZyOtdd.js";import"./getPseudoElementBounds-BJc2NM_P.js";import"./chevron-down-D6leDeN-.js";import"./index-DVDXXnZb.js";import"./error-DLjCGmmk.js";import"./BaseCbacBanner-svJHwMB0.js";import"./makeExternalStore-CEyr08K1.js";import"./Tooltip-BFvNQrGe.js";import"./isObject-Bu43GTjb.js";import"./debounce-IRvapgvb.js";import"./tick-DgUcKmPU.js";import"./DropdownField-vXp1_pry.js";import"./isEqual-DB1uUQ8K.js";import"./_baseIsEqual-C1rqwiMB.js";import"./withOsdkMetrics-rGISHWN9.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
