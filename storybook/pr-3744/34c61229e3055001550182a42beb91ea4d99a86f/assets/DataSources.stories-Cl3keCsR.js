import{j as r}from"./iframe-CC2lhQhY.js";import{O as b}from"./object-table-Bk8sJe75.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-vYiJL-Es.js";import{u as g}from"./useOsdkClient-BUCIn1CU.js";import"./preload-helper-BGEdKx02.js";import"./Table-Dyn7jCHO.js";import"./index-DxrvvjMw.js";import"./Dialog-CLh_XWkX.js";import"./cross-BobJNvWM.js";import"./svgIconContainer-CemqUq4J.js";import"./useBaseUiId-CxU7p3iL.js";import"./InternalBackdrop-CVxZg2o4.js";import"./composite-B5KpWypz.js";import"./index-B4bU-WIO.js";import"./index-G7k4NUeX.js";import"./index--6Hdbxki.js";import"./useEventCallback-B2k3oSuK.js";import"./SkeletonBar-BEjckKsG.js";import"./LoadingCell-A4598RHi.js";import"./ColumnConfigDialog-yMj5LoE_.js";import"./DraggableList-CjtZ2GfF.js";import"./search-D1VlmriO.js";import"./Input-BHBF2dwA.js";import"./useControlled-Sp81BiS-.js";import"./isEqual-i6EUZMbe.js";import"./isObject-BVuUAFQC.js";import"./Button-JlKjTSlm.js";import"./ActionButton-CQ0jgdFe.js";import"./Checkbox-Syfedny6.js";import"./useValueChanged-Cvc2Q3RS.js";import"./CollapsiblePanel-DQ1FJNF1.js";import"./MultiColumnSortDialog-DaExg-Du.js";import"./MenuTrigger-ClJV1NnD.js";import"./CompositeItem-CzQFGjti.js";import"./ToolbarRootContext-CvAXAcRN.js";import"./getDisabledMountTransitionStyles-BdLwLQ0g.js";import"./getPseudoElementBounds-xl3NSj_d.js";import"./chevron-down-CeE9KY4s.js";import"./index-BVqzMWPJ.js";import"./error-wpAeIqc3.js";import"./BaseCbacBanner-Cih_iG3k.js";import"./makeExternalStore-DBYDyAtT.js";import"./Tooltip-CVR67wXj.js";import"./PopoverPopup-DdPQi5RD.js";import"./toNumber-D5qJ0LSR.js";import"./tick-kTuzUJV2.js";import"./DropdownField-l2hEEO-i.js";import"./withOsdkMetrics-D7Ls77C5.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
