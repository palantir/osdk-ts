import{j as r}from"./iframe-BOPH40aM.js";import{O as b}from"./object-table-CwbcJ0co.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BPva97H0.js";import{u as g}from"./useOsdkClient-B8kqEZV4.js";import"./preload-helper-Dk7sOnp6.js";import"./Table-DDg19h3D.js";import"./index-C6HCGinX.js";import"./Dialog-D5Vta0XL.js";import"./cross-Dyy1QuxQ.js";import"./svgIconContainer-C74jhUFY.js";import"./useBaseUiId-FmUF_HCn.js";import"./InternalBackdrop-DXhiZMhg.js";import"./composite-D2Y_yGja.js";import"./index-BdcQoi5s.js";import"./index-Dn6uDsye.js";import"./index-5cDTy_56.js";import"./useEventCallback-DFtwstmX.js";import"./SkeletonBar-BFZg22dk.js";import"./LoadingCell-DktVzcvW.js";import"./ColumnConfigDialog--5UMrtN6.js";import"./DraggableList-D--051Oi.js";import"./search-CzcjumOg.js";import"./Input-IJOIjizp.js";import"./useControlled-D0weT_xr.js";import"./Button-BEu920XA.js";import"./small-cross-G4HnNcP3.js";import"./ActionButton-Av230VXe.js";import"./Checkbox-Dp3MELm6.js";import"./useValueChanged--LsWGCe4.js";import"./CollapsiblePanel-CKq8a2Q7.js";import"./MultiColumnSortDialog-puJirV83.js";import"./MenuTrigger-DJNmOI8Y.js";import"./CompositeItem-BrrSAdxA.js";import"./ToolbarRootContext-BQh3Vmwb.js";import"./getDisabledMountTransitionStyles-ZNI7YJ6O.js";import"./getPseudoElementBounds-CX_DMQ51.js";import"./chevron-down-BwPY74Fq.js";import"./index-DIdLImiR.js";import"./error-CQh9rOC1.js";import"./BaseCbacBanner-BMq0Yx7G.js";import"./makeExternalStore-CDJtVkjz.js";import"./Tooltip-Bi19yJDJ.js";import"./PopoverPopup-D_yfhwEP.js";import"./debounce-DNlMjLPc.js";import"./tick-dQV5Bvko.js";import"./DropdownField-BTKnt1ZR.js";import"./isEqual-Bhet0e8P.js";import"./withOsdkMetrics-CxsZe37o.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
