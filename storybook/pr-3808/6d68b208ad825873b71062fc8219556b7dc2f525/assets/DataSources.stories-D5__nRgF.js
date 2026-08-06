import{j as r}from"./iframe-DPcQ5jr3.js";import{O as b}from"./object-table-Cvi2wsSZ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D7NBK87q.js";import{u as g}from"./useOsdkClient-79jhrNfk.js";import"./preload-helper-DaFFMXPg.js";import"./Table-JBCu0p6N.js";import"./index-BszcYN5m.js";import"./Dialog-DF8bCGRt.js";import"./cross-Ex3v7yAY.js";import"./svgIconContainer-knuh2bP-.js";import"./useBaseUiId-BfxjoMWT.js";import"./InternalBackdrop-BzDztsGv.js";import"./composite-cfOgAKY3.js";import"./index-Pgg50vLk.js";import"./index-D9X45JE7.js";import"./index-Iri7IIar.js";import"./useEventCallback-CaNhgfml.js";import"./SkeletonBar-C16aZ_fC.js";import"./LoadingCell-D9M7rjOe.js";import"./ColumnConfigDialog-Xzoir5jn.js";import"./DraggableList-B30YwC0o.js";import"./search-B1p0IMpD.js";import"./Input-D9StspzA.js";import"./useControlled-DdUaVlhi.js";import"./isEqual-CjzuMNVr.js";import"./isObject-CCdIJM0g.js";import"./Button-C7yoanwN.js";import"./ActionButton-DmcXermo.js";import"./Checkbox-DoBj_QBg.js";import"./useValueChanged-DgXaNmo2.js";import"./CollapsiblePanel-CwlNVmFC.js";import"./MultiColumnSortDialog-D5QJrZUi.js";import"./MenuTrigger-DxZ_38mw.js";import"./CompositeItem-DWSmEBV1.js";import"./ToolbarRootContext-DmbNoojd.js";import"./getDisabledMountTransitionStyles-2mqSuo-H.js";import"./getPseudoElementBounds-BxPMf3nx.js";import"./chevron-down-CMCQfOjD.js";import"./index-m3p1lG2O.js";import"./error-68oFQ-J3.js";import"./BaseCbacBanner-CWBS5cM7.js";import"./makeExternalStore-KDZTlrjP.js";import"./Tooltip-C-kXwqkE.js";import"./PopoverPopup-7zJxTzug.js";import"./toNumber-ClsUi4f1.js";import"./tick-CLohUieJ.js";import"./DropdownField-Ih0KYJXy.js";import"./withOsdkMetrics-Bg5F8JCY.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
