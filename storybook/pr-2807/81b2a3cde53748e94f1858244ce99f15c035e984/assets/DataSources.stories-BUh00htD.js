import{j as r}from"./iframe-Dqy8JjJj.js";import{O as b}from"./object-table-CaJfh-Qq.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C8iC1lEQ.js";import{u as g}from"./useOsdkClient-AZY6kY-P.js";import"./preload-helper-DeX6Y_0J.js";import"./Table-C7UVNOf8.js";import"./index-DbFWgCao.js";import"./Dialog-Bi2fbF72.js";import"./cross-D8pajbsG.js";import"./svgIconContainer-8GT6k8lo.js";import"./useBaseUiId-D7f72QTK.js";import"./InternalBackdrop-BvB3kYwS.js";import"./composite-LAPrz1o4.js";import"./index-Cnbuox7q.js";import"./index-C7xgb18W.js";import"./index-CSfsTwM1.js";import"./useEventCallback-AIyjUBuj.js";import"./SkeletonBar-RYI-lGdg.js";import"./LoadingCell-C99T64TC.js";import"./ColumnConfigDialog-18bqhf4t.js";import"./DraggableList-BltL_xZX.js";import"./search-6kgQ8Qok.js";import"./Input-BQAJ5Oey.js";import"./useControlled-RE_-t8KI.js";import"./isEqual-D9q06Aj3.js";import"./isObject-BlPjBZkO.js";import"./Button-BWXSx_LI.js";import"./ActionButton-CC4A3QRH.js";import"./Checkbox-BDTHiVo3.js";import"./useValueChanged-CjfW8p-V.js";import"./CollapsiblePanel-yy0-Nar2.js";import"./MultiColumnSortDialog-wo9g47cC.js";import"./MenuTrigger-D5tYArqn.js";import"./CompositeItem-B4poao_w.js";import"./ToolbarRootContext-DGtiuhh2.js";import"./getDisabledMountTransitionStyles-DcnA9LCH.js";import"./getPseudoElementBounds-DfafWptz.js";import"./chevron-down-DqBsM86l.js";import"./index-Cy83EJpp.js";import"./error-BuVC1iPd.js";import"./BaseCbacBanner-CpmxgztS.js";import"./makeExternalStore-De8hh01J.js";import"./Tooltip-CkPbslSr.js";import"./PopoverPopup-SQtzm6EV.js";import"./toNumber-BF5JM__Y.js";import"./tick-5octXHfY.js";import"./DropdownField-CO4zaPU2.js";import"./withOsdkMetrics-Dc6gOjLQ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
