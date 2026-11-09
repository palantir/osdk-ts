import{j as r}from"./iframe-CwoOGB90.js";import{O as b}from"./object-table-BW9qhxFt.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-74SQjRI4.js";import{u as g}from"./useOsdkClient-CX_eol9_.js";import"./preload-helper-zjr9DTNv.js";import"./Table-CFVqUtVr.js";import"./index-CZrnOEge.js";import"./Dialog-rGFuYy_L.js";import"./cross-84LZ_c3o.js";import"./svgIconContainer-vpSdtZHg.js";import"./useBaseUiId-CG_HMXOZ.js";import"./InternalBackdrop-2kZ8nvu1.js";import"./composite-CQ1lSzH1.js";import"./index-BP83VGlc.js";import"./index-CtieK9tm.js";import"./index-CIs6h9pu.js";import"./useEventCallback-ByWQ63Gl.js";import"./SkeletonBar-B3HWXV5p.js";import"./LoadingCell-8n9ERDDX.js";import"./ColumnConfigDialog-CnguxUiQ.js";import"./DraggableList-Bso7ySjF.js";import"./search-B4Rhn5WX.js";import"./Input-Bfvllh0J.js";import"./useControlled-CyV_xO7n.js";import"./Button-CzS_tZvQ.js";import"./small-cross-CdfSHMjX.js";import"./ActionButton-BdjYmFRu.js";import"./Checkbox-CBh8ZgCe.js";import"./useValueChanged-d4U5lg5Y.js";import"./CollapsiblePanel-CzzEpLdL.js";import"./MultiColumnSortDialog-7OU1GsVB.js";import"./MenuTrigger-Ct25vTMs.js";import"./CompositeItem-uLTqCAuJ.js";import"./ToolbarRootContext-BHlqCq8I.js";import"./getDisabledMountTransitionStyles-CDwQ_97u.js";import"./getPseudoElementBounds-CxBwOVu1.js";import"./chevron-down-CzfXAkFG.js";import"./index-DRO4fLjt.js";import"./error-D1I108xZ.js";import"./BaseCbacBanner-sNaPb3A4.js";import"./makeExternalStore-BAl3wc3x.js";import"./Tooltip-DoSGgxMu.js";import"./isObject-DBuDBkaL.js";import"./debounce-DjU0zQzn.js";import"./tick-B9GD-hKF.js";import"./DropdownField-DvlmGHHn.js";import"./isEqual-l3DFcAg6.js";import"./_baseIsEqual-By1SU2HG.js";import"./withOsdkMetrics-IkpPb6vj.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
