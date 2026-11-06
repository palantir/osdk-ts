import{j as r}from"./iframe-Ck95bxu4.js";import{O as b}from"./object-table-yfo4r35p.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B066FeIB.js";import{u as g}from"./useOsdkClient-BanL0364.js";import"./preload-helper-KA9de6lE.js";import"./Table-BfpJ92cE.js";import"./index-Cif5jAEJ.js";import"./Dialog-CxNG9xUy.js";import"./cross-D4AVy5in.js";import"./svgIconContainer-CPHbIRji.js";import"./useBaseUiId-CWyLFOC8.js";import"./InternalBackdrop-BN5IDP0f.js";import"./composite-Yh1yynjC.js";import"./index-BhAq9v2h.js";import"./index-QaBJUBwA.js";import"./index-jkcmc-OQ.js";import"./useEventCallback-B4j9PWJ8.js";import"./SkeletonBar-8iEwSFxF.js";import"./LoadingCell-D9PdMFhW.js";import"./ColumnConfigDialog-M8P9_gve.js";import"./DraggableList-AYfFvqAw.js";import"./search-BS_g30el.js";import"./Input-s6yy9vkz.js";import"./useControlled-B8TEOr6k.js";import"./Button-PWPX_ks7.js";import"./small-cross-B8CohMqi.js";import"./ActionButton-r8oP0f9s.js";import"./Checkbox-D7ynqdrt.js";import"./useValueChanged-B4fSJG4I.js";import"./CollapsiblePanel-D4YJo7Ff.js";import"./MultiColumnSortDialog-CEzGqhr_.js";import"./MenuTrigger-BPdJ6fv_.js";import"./CompositeItem-B10VO3gZ.js";import"./ToolbarRootContext-BRWZ8sOA.js";import"./getDisabledMountTransitionStyles-D5C9DTmw.js";import"./getPseudoElementBounds-skEh5NHv.js";import"./chevron-down-bheQQ_PQ.js";import"./index-K_6WRtRx.js";import"./error-RnJ96IVH.js";import"./BaseCbacBanner-DjBChTmW.js";import"./makeExternalStore-BMm4gCLi.js";import"./Tooltip-rzDvG8SV.js";import"./isObject-1wBlTIbM.js";import"./debounce-xVAvVgAm.js";import"./tick-CkjrrKLh.js";import"./DropdownField-nQt9qvfV.js";import"./isEqual-DPuwhVwN.js";import"./_baseIsEqual-TosI8jgs.js";import"./withOsdkMetrics-Dr6WHfBD.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
