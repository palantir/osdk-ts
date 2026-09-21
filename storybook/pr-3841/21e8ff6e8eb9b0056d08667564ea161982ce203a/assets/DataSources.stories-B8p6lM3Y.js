import{j as r}from"./iframe-CPDW-PQM.js";import{O as b}from"./object-table-DTqjU_D_.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DzLTzGgw.js";import{u as g}from"./useOsdkClient-i81o04a7.js";import"./preload-helper-DLPPZvQy.js";import"./Table-BUuLX7nP.js";import"./index-BD9zYiqo.js";import"./Dialog-DDyKfg5y.js";import"./cross-DR7gxXwq.js";import"./svgIconContainer-C7wqaI1B.js";import"./useBaseUiId-B5I3_RDX.js";import"./InternalBackdrop-DdjQtzae.js";import"./composite-p-h0KAPd.js";import"./index-fIzLT5CY.js";import"./index-BTWFHyEC.js";import"./index-B7g8W8Zp.js";import"./useEventCallback-CD0AM3jl.js";import"./SkeletonBar-CXBL3BvT.js";import"./LoadingCell-CjHZr7dQ.js";import"./ColumnConfigDialog-BIYXL1ew.js";import"./DraggableList-ChfPDfFa.js";import"./search-BZvDdvYt.js";import"./Input-CD_gqaHO.js";import"./useControlled-i4DTbWgc.js";import"./Button-CRJqCk8i.js";import"./small-cross-CSCn7V4Z.js";import"./ActionButton-J4pZ9dww.js";import"./Checkbox-Cq2SeKPb.js";import"./useValueChanged-f6yxC0pT.js";import"./CollapsiblePanel-CoH06yjt.js";import"./MultiColumnSortDialog-BGYn-b00.js";import"./MenuTrigger-ChgVJvO_.js";import"./CompositeItem-BKuiG4wu.js";import"./ToolbarRootContext-OaLx1XI9.js";import"./getDisabledMountTransitionStyles-Dto8xlJk.js";import"./getPseudoElementBounds-Dfn0jdGk.js";import"./chevron-down-BhbuOWem.js";import"./index-DF93-j-r.js";import"./error-BojBsd96.js";import"./BaseCbacBanner-BvfEUDY_.js";import"./makeExternalStore-EbQWCuwR.js";import"./Tooltip-B-fohL4X.js";import"./PopoverPopup-BdxYHBaz.js";import"./debounce-XSxzF9O8.js";import"./tick-BD10YuUL.js";import"./DropdownField-DJ9z17_O.js";import"./isEqual-CousIfvQ.js";import"./withOsdkMetrics-BSyWaS_D.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
