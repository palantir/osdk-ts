import{j as r}from"./iframe-DDq7u4il.js";import{O as b}from"./object-table-BpfBfRhb.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-42bz-yqQ.js";import{u as g}from"./useOsdkClient-CqKydsqX.js";import"./preload-helper-DchmjQ8j.js";import"./Table-DgOUC1xc.js";import"./index-CRwX66Ho.js";import"./Dialog-H1aqqX4z.js";import"./cross-CnhzJciY.js";import"./svgIconContainer-gjlLDHcU.js";import"./useBaseUiId-DoF2emQC.js";import"./InternalBackdrop-BqfOZCoa.js";import"./composite-24zZeo5k.js";import"./index-wbPw0NdA.js";import"./index-i_VEQr3c.js";import"./index-Dj1wYsHv.js";import"./useEventCallback-CNAdD9HF.js";import"./SkeletonBar-Dmhi5wAM.js";import"./LoadingCell-D4_EgMjp.js";import"./ColumnConfigDialog-DBf4F70r.js";import"./DraggableList-CsH0LNO-.js";import"./search-DW3qWj6H.js";import"./Input-Daps5nhV.js";import"./useControlled-8csFG6-s.js";import"./isEqual-DcN7ZSuF.js";import"./isObject-CNVAtxoQ.js";import"./Button-0qAbUNya.js";import"./ActionButton-BIE8JzJ4.js";import"./Checkbox-DH04k5OL.js";import"./useValueChanged-fBovsQG2.js";import"./CollapsiblePanel-BEveHXGD.js";import"./MultiColumnSortDialog-DFcpSVXu.js";import"./MenuTrigger-Cg7MUzeK.js";import"./CompositeItem-CgZOI2Nx.js";import"./ToolbarRootContext-Cnr8zXiz.js";import"./getDisabledMountTransitionStyles-dF3SUEWY.js";import"./getPseudoElementBounds--4cOuUe2.js";import"./chevron-down-B0rjx85Q.js";import"./index-CyhobMXH.js";import"./error-CVPt2IGW.js";import"./BaseCbacBanner-lUy58fLg.js";import"./makeExternalStore-BGBbZ4XE.js";import"./Tooltip-tEX9kJ8I.js";import"./PopoverPopup-CH6pXruS.js";import"./toNumber-BnYLNr0W.js";import"./tick-BnJ5UWFD.js";import"./DropdownField-wcZcgik2.js";import"./withOsdkMetrics-BzGj8Zi1.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
