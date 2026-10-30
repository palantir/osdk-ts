import{j as r}from"./iframe-B4a1M7YQ.js";import{O as b}from"./object-table-2X9QP0q2.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-09QE49HH.js";import{u as g}from"./useOsdkClient-DD3NhrHw.js";import"./preload-helper-DKPqJros.js";import"./Table-D2A1KUQC.js";import"./index-CEnsUSRk.js";import"./Dialog-Bw23pK5d.js";import"./cross-DdxU_GSh.js";import"./svgIconContainer-dKO81zeU.js";import"./useBaseUiId-BdmpNM9R.js";import"./InternalBackdrop-BtAeuuiJ.js";import"./composite-DYFcQXK_.js";import"./index-BGoKHZOt.js";import"./index-Bzr9bqEh.js";import"./index-XdpKPQSA.js";import"./useEventCallback-DbS-KTli.js";import"./SkeletonBar-CoaC5jIf.js";import"./LoadingCell-BF6eywfe.js";import"./ColumnConfigDialog-CxsVoMF7.js";import"./DraggableList-CJ0FnAyO.js";import"./search-ByNZE4lU.js";import"./Input-CQ1CPhUS.js";import"./useControlled-BwTzIPm3.js";import"./Button-aRzyNEAE.js";import"./small-cross-CY8ArLck.js";import"./ActionButton-DV-INWIy.js";import"./Checkbox-CvNcg_qU.js";import"./useValueChanged-ZI0WYR1b.js";import"./CollapsiblePanel-CDlqlorI.js";import"./MultiColumnSortDialog-B2G2U5oE.js";import"./MenuTrigger-BvDNyLIe.js";import"./CompositeItem-DufHQAne.js";import"./ToolbarRootContext-BOcgfqza.js";import"./getDisabledMountTransitionStyles-DeBE4Hc-.js";import"./getPseudoElementBounds-Bbqo73FW.js";import"./chevron-down-DCl-dnpE.js";import"./index-C8n7J5dc.js";import"./error-B-p2MHss.js";import"./BaseCbacBanner-CNc9r1Cu.js";import"./makeExternalStore-bi4xmOXE.js";import"./Tooltip-D5NT58HG.js";import"./PopoverPopup-COmRgKxn.js";import"./debounce-CJ5ryzx7.js";import"./tick-B-sbOJgF.js";import"./DropdownField-DgXTbQeA.js";import"./isEqual-Bs27NS_2.js";import"./withOsdkMetrics-BXRIKmAl.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
