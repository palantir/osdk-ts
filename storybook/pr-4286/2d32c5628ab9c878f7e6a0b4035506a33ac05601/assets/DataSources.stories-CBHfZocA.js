import{j as r}from"./iframe-KThmj19P.js";import{O as b}from"./object-table-jytBJMWC.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DbSacC0r.js";import{u as g}from"./useOsdkClient-CNuNhGD2.js";import"./preload-helper-Cw3n3hSQ.js";import"./Table-D8GgoVcl.js";import"./index-8dp596C-.js";import"./Dialog-Dzi6uxVP.js";import"./cross-DgJrOo32.js";import"./svgIconContainer-BadPSwg5.js";import"./useBaseUiId-CO0UXqZj.js";import"./InternalBackdrop-ChJvd0mJ.js";import"./composite-DhtQTRu3.js";import"./index-x3jhKnXC.js";import"./index-DlUZDviY.js";import"./index-BDhUGLnw.js";import"./useEventCallback-BfVLO6-q.js";import"./SkeletonBar-B9s5jXE0.js";import"./LoadingCell-B3jp8Y5c.js";import"./ColumnConfigDialog-Oge2l_eU.js";import"./DraggableList-vCl6DQV2.js";import"./search-WKJE02Vc.js";import"./Input-DjgUB-Rn.js";import"./useControlled-Cit5AGWi.js";import"./Button-C5g5AH7h.js";import"./small-cross-BaTPq9PI.js";import"./ActionButton-D6GsiQH8.js";import"./Checkbox-5PSmCHau.js";import"./useValueChanged-BTUlUlPU.js";import"./CollapsiblePanel-BCle4Obe.js";import"./MultiColumnSortDialog-xMkOKsWL.js";import"./MenuTrigger-BVEdcOp-.js";import"./CompositeItem-B-b-pN3u.js";import"./ToolbarRootContext-BtS_uykU.js";import"./getDisabledMountTransitionStyles-B3VVxFZG.js";import"./getPseudoElementBounds-BrM6yGow.js";import"./chevron-down-C1Y2Cd7i.js";import"./index-BzpGTle2.js";import"./error-BU9XZpJG.js";import"./BaseCbacBanner-kwcHIsZg.js";import"./makeExternalStore-BCV4KITu.js";import"./Tooltip-DQdCr4CI.js";import"./PopoverPopup-C7b8KTlQ.js";import"./debounce-CRIHmV_F.js";import"./tick-B1qLCmei.js";import"./DropdownField-eYleBuTJ.js";import"./isEqual-DoyI84Cq.js";import"./withOsdkMetrics-hz19pnqZ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
