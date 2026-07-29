import{j as r}from"./iframe-BTIka0mU.js";import{O as b}from"./object-table-Dn1D4m5-.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-a_qwkpSV.js";import{u as g}from"./useOsdkClient-BQFCB37k.js";import"./preload-helper-px61uG1k.js";import"./Table-_U89uYE2.js";import"./index-BSUZmBMj.js";import"./Dialog-CTd2WPT7.js";import"./cross-Y1xE6j58.js";import"./svgIconContainer-_rcFoVfV.js";import"./useBaseUiId-C1-4UPjr.js";import"./InternalBackdrop-CeFBNfZq.js";import"./composite-_RYTITLD.js";import"./index-DJWApIIr.js";import"./index-BZqP7QHW.js";import"./index-BT9Z6v1L.js";import"./useEventCallback-C71sRmII.js";import"./SkeletonBar-CZabTLyj.js";import"./LoadingCell-Ci9j6m_n.js";import"./ColumnConfigDialog-DBGT53TU.js";import"./DraggableList-aQo2-qEs.js";import"./search-klzOiLLV.js";import"./Input-CHu4cTHa.js";import"./useControlled-CL1DBA2V.js";import"./isEqual--t9zKOFS.js";import"./isObject-CxBV9Ohn.js";import"./Button-C_wYQPHZ.js";import"./ActionButton-DKaLVnbU.js";import"./Checkbox-CgcbYrKi.js";import"./useValueChanged-Bz-meo30.js";import"./CollapsiblePanel-D9Wl1m7m.js";import"./MultiColumnSortDialog-BqVx8qLY.js";import"./MenuTrigger-CFDVbb7D.js";import"./CompositeItem-H6HgtU07.js";import"./ToolbarRootContext-DPmgZ9H3.js";import"./getDisabledMountTransitionStyles-Ba7aUPdV.js";import"./getPseudoElementBounds-ooqE2e_e.js";import"./chevron-down-CYoX06Sv.js";import"./index-Cz1dZR80.js";import"./error-GBqEqKOX.js";import"./BaseCbacBanner-Cx_zyMgv.js";import"./makeExternalStore-1GNwblPW.js";import"./Tooltip-C7QOXrku.js";import"./PopoverPopup-BU_dnZfL.js";import"./toNumber-DMQQ3TFc.js";import"./tick-C8bpK66h.js";import"./DropdownField-P907ZQhX.js";import"./withOsdkMetrics-BCXnSjLq.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
