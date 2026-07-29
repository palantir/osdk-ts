import{j as r}from"./iframe-B_Qcr1FE.js";import{O as b}from"./object-table-DAA5lgbe.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BVb4Hz2g.js";import{u as g}from"./useOsdkClient-vEHou9o8.js";import"./preload-helper-ByylHqff.js";import"./Table-CFY175rH.js";import"./index-CuAfhbdX.js";import"./Dialog-B0AhWfDq.js";import"./cross-B_bL67RS.js";import"./svgIconContainer-HOxgQzaL.js";import"./useBaseUiId-BT7nsgc0.js";import"./InternalBackdrop-CkOigyzD.js";import"./composite-CK1N4h6C.js";import"./index-DDNYXikC.js";import"./index-D-jbiCY8.js";import"./index-DndWxBJo.js";import"./useEventCallback-9h2GBVBE.js";import"./SkeletonBar-DC7q-eBJ.js";import"./LoadingCell-DGSHxikO.js";import"./ColumnConfigDialog-eZ62lZti.js";import"./DraggableList-5VzGzIxf.js";import"./search-Cnc343lq.js";import"./Input-CnRDzw12.js";import"./useControlled-i58fxNEc.js";import"./isEqual-B-H1SIym.js";import"./isObject--dikM3Fl.js";import"./Button-Cn245j1w.js";import"./ActionButton-CS8C28oW.js";import"./Checkbox-BQt3oBJx.js";import"./useValueChanged-C6rWrf7-.js";import"./CollapsiblePanel-7PrGdLma.js";import"./MultiColumnSortDialog-I8lvNBXl.js";import"./MenuTrigger-T5mh7LLG.js";import"./CompositeItem-IwhuMT6y.js";import"./ToolbarRootContext-IZR9f2eY.js";import"./getDisabledMountTransitionStyles-CWpIDhsc.js";import"./getPseudoElementBounds-B_Pqjac0.js";import"./chevron-down-DmIABeew.js";import"./index-CtHaTe0V.js";import"./error-i48OCe6N.js";import"./BaseCbacBanner-Bl1vz49-.js";import"./makeExternalStore-CzaoHCck.js";import"./Tooltip-imI0x-7c.js";import"./PopoverPopup-C2ytPyDe.js";import"./toNumber-DSbbqKW3.js";import"./tick-BTdonOzt.js";import"./DropdownField-MTaxgVGj.js";import"./withOsdkMetrics-8G_3-O2s.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
