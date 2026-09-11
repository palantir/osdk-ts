import{j as r}from"./iframe-DwYLkjIm.js";import{O as b}from"./object-table-BRMo9PT7.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BvHdSa7q.js";import{u as g}from"./useOsdkClient-CvE3Z_Kn.js";import"./preload-helper-ATh-df95.js";import"./Table-y0ybaHJA.js";import"./index-BjvNbQ5u.js";import"./Dialog-DKHilDA3.js";import"./cross-8A5W1-mq.js";import"./svgIconContainer-BO0D2b3B.js";import"./useBaseUiId-BLNd3-C8.js";import"./InternalBackdrop-CBy2FAi9.js";import"./composite-DkREeV9G.js";import"./index-DaP8hSau.js";import"./index-Cp5k1JkI.js";import"./index-p-dFHzM9.js";import"./useEventCallback-4trSpKTf.js";import"./SkeletonBar-aHlWFS-g.js";import"./LoadingCell-Dag5XFeY.js";import"./ColumnConfigDialog-DGLQZzbo.js";import"./DraggableList-B2wOd5-0.js";import"./search-DbuZ2eC4.js";import"./Input-COaOuFmv.js";import"./useControlled-B5ZJB9TM.js";import"./Button-De4eCp5V.js";import"./small-cross-BiHBSsw2.js";import"./ActionButton-Caxnbj33.js";import"./Checkbox-CYd1lgcd.js";import"./useValueChanged-ylpPqAwL.js";import"./CollapsiblePanel-D-S6GrQY.js";import"./MultiColumnSortDialog-CsPkz6N4.js";import"./MenuTrigger-BQNp3kuJ.js";import"./CompositeItem-CqCnARzh.js";import"./ToolbarRootContext-y1EgqHY_.js";import"./getDisabledMountTransitionStyles-1qMTk6J5.js";import"./getPseudoElementBounds-CDBWfCMY.js";import"./chevron-down-gw5VoLqI.js";import"./index-C80pQDpv.js";import"./error-CtWk7aa4.js";import"./BaseCbacBanner-DtYOs5vo.js";import"./makeExternalStore-BtQFwu78.js";import"./Tooltip-BhjeiN-x.js";import"./PopoverPopup-C4uWpPvG.js";import"./debounce-DNHX5f7v.js";import"./tick-CLGgnUMt.js";import"./DropdownField-SIQhHfOo.js";import"./isEqual-CfZs5aOK.js";import"./withOsdkMetrics-BwdGT6RG.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
