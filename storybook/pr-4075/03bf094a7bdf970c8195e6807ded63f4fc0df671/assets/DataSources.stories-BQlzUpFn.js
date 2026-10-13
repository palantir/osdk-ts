import{j as r}from"./iframe-DkDai4TH.js";import{O as b}from"./object-table-CKGq-Yt0.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CljPS4n3.js";import{u as g}from"./useOsdkClient-CDwu3CFW.js";import"./preload-helper-JjUJzXXj.js";import"./Table-CBsiQDO9.js";import"./index-DY9rgq0e.js";import"./Dialog-x7L3Jod8.js";import"./cross-CAMMsTtN.js";import"./svgIconContainer-Cn4a8-GP.js";import"./useBaseUiId-BSkkBPAh.js";import"./InternalBackdrop-BgXmZwAB.js";import"./composite-CiXUPQeJ.js";import"./index-BmkcSWO6.js";import"./index-Lc08usjZ.js";import"./index-BwIhbgz8.js";import"./useEventCallback-BdoVLZK3.js";import"./SkeletonBar-d-dHv_j1.js";import"./LoadingCell-D2qX3LGd.js";import"./ColumnConfigDialog-CJl5tyvK.js";import"./DraggableList-CAN0mdih.js";import"./search-BHsfUlEN.js";import"./Input-Gi5Qq_w9.js";import"./useControlled-IY8Qa8dX.js";import"./Button-DKQFkDWL.js";import"./small-cross-DufbcP5m.js";import"./ActionButton-BfkacCWq.js";import"./Checkbox-B_asvOXP.js";import"./useValueChanged-BTwI4cyE.js";import"./CollapsiblePanel-EPxbZj4y.js";import"./MultiColumnSortDialog-CQaLv06I.js";import"./MenuTrigger-ClPp8RLZ.js";import"./CompositeItem-CMeIJ5rV.js";import"./ToolbarRootContext-BkXkRhp8.js";import"./getDisabledMountTransitionStyles-BtJBdJGG.js";import"./getPseudoElementBounds-C0JH-KZ8.js";import"./chevron-down-Do0LaDJ6.js";import"./index-CTVvDnPL.js";import"./error-CLEog6-B.js";import"./BaseCbacBanner-I9lKXzUo.js";import"./makeExternalStore-DYuRaPVt.js";import"./Tooltip-n8ZLzRPP.js";import"./PopoverPopup-D8lgugCY.js";import"./debounce-q25jq-DY.js";import"./tick-BTFlyx2h.js";import"./DropdownField-tN5gNLvn.js";import"./isEqual-Dc02W0EF.js";import"./withOsdkMetrics-CNRukvHq.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
