import{j as r}from"./iframe-DNO5nHhn.js";import{O as b}from"./object-table-CnuobtBz.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CEZja-so.js";import{u as g}from"./useOsdkClient-BWdcC--S.js";import"./preload-helper-DmJRiiyv.js";import"./Table-DaVBUNKS.js";import"./index-B1zYgGoG.js";import"./Dialog-COvaeWHa.js";import"./cross-DkGiXpSw.js";import"./svgIconContainer-CrvnRU9F.js";import"./useBaseUiId-VJjRPmeN.js";import"./InternalBackdrop-DLzfXrnQ.js";import"./composite-BaAus-sy.js";import"./index-DoyQeAs3.js";import"./index-GqFGt6-k.js";import"./index-Ce87FLOS.js";import"./useEventCallback-BOvCXpPp.js";import"./SkeletonBar-CPy14_Pl.js";import"./LoadingCell-DEQP3fso.js";import"./ColumnConfigDialog-Cp1GCMCd.js";import"./DraggableList-DN2DXunz.js";import"./search-D7RgJWVi.js";import"./Input-DLMSp_LN.js";import"./useControlled-DFdql7xi.js";import"./Button-RvpRTGgQ.js";import"./small-cross-BKeeryj7.js";import"./ActionButton-YeYo3Rcp.js";import"./Checkbox-D3YQCgVO.js";import"./useValueChanged-C9nCISHq.js";import"./CollapsiblePanel-BYOXGGhP.js";import"./MultiColumnSortDialog-C5fM365N.js";import"./MenuTrigger-Dfv55hnJ.js";import"./CompositeItem-50twUNd1.js";import"./ToolbarRootContext-XjIA09C4.js";import"./getDisabledMountTransitionStyles-CNFrfHKN.js";import"./getPseudoElementBounds-D5ABxTfB.js";import"./chevron-down-CoqE-c4D.js";import"./index-CXgAIFbB.js";import"./error-BkrZNArB.js";import"./BaseCbacBanner-U_SB8CX2.js";import"./makeExternalStore-BOcAXB1x.js";import"./Tooltip-DQGkuZz9.js";import"./isObject-CUrQ0YWF.js";import"./debounce-Sh9pMPZ4.js";import"./tick-BGglWVfw.js";import"./DropdownField-9n3rWcYS.js";import"./isEqual-BpKTdG-g.js";import"./_baseIsEqual-CjPifIr_.js";import"./withOsdkMetrics-1wr3AqUj.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};
