import{j as r}from"./iframe-BTjo4hoa.js";import{O as b}from"./object-table-COqd_imt.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DsF6HNi-.js";import{u as g}from"./useOsdkClient-BVjPnTI9.js";import"./preload-helper-GDbQ32hR.js";import"./Table-BgnMVoEe.js";import"./index-DzoGtTYW.js";import"./Dialog-BRtSRW0Z.js";import"./cross-C7uzIn7X.js";import"./svgIconContainer-Ci_Sec47.js";import"./useBaseUiId-DiKKztfj.js";import"./InternalBackdrop-C3VRyl9V.js";import"./composite-DnWT1pj_.js";import"./index-DzKvpZVF.js";import"./index-B2_XxYKv.js";import"./index-CoDC80rb.js";import"./useEventCallback-C_wT4v2Q.js";import"./SkeletonBar-Been06Cr.js";import"./LoadingCell-D7jqLojg.js";import"./ColumnConfigDialog-Db1F5W2r.js";import"./DraggableList-D8um3vjp.js";import"./search-CK191Oob.js";import"./Input-C7imWp_z.js";import"./useControlled-DrQ-vlJr.js";import"./Button-BcNFr6aW.js";import"./small-cross-Brkvg0Wi.js";import"./ActionButton-tTZpGoIh.js";import"./Checkbox-w9B-XeGE.js";import"./useValueChanged-CDlZmnEp.js";import"./CollapsiblePanel-CEseDnp9.js";import"./MultiColumnSortDialog-DMotawsh.js";import"./MenuTrigger-CwoMUaEm.js";import"./CompositeItem-DqO_c0k8.js";import"./ToolbarRootContext-BmwV-jMO.js";import"./getDisabledMountTransitionStyles-ClFFQye4.js";import"./getPseudoElementBounds-DsfXOZwR.js";import"./chevron-down-Ca_e0izc.js";import"./index-Dnr1AQ4b.js";import"./error-D2oiLEA6.js";import"./BaseCbacBanner-fgj6pUDq.js";import"./makeExternalStore-Ch7iFOMP.js";import"./Tooltip-BPmE3Z94.js";import"./isObject-aHdVZCJ4.js";import"./debounce-mxu17zY-.js";import"./tick-B6UzXqFV.js";import"./DropdownField-R4jwd9Zw.js";import"./isEqual-BWdJtmMa.js";import"./_baseIsEqual-D9LRnwMe.js";import"./withOsdkMetrics-DsZGAGfW.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
