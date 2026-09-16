import{j as r}from"./iframe-CRcSxZM8.js";import{O as b}from"./object-table-uBn8zBa_.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-kf-BXrzD.js";import{u as g}from"./useOsdkClient-BMdzqGfU.js";import"./preload-helper-ZugcXPGT.js";import"./Table-CeizOyHS.js";import"./index-g1O5dw2n.js";import"./Dialog-DVOZgr_y.js";import"./cross-C5cQzVwl.js";import"./svgIconContainer-BqvfQ7m-.js";import"./useBaseUiId-CR1J1kR-.js";import"./InternalBackdrop-fCyetKcK.js";import"./composite-BjyHBRpa.js";import"./index-Xkx1Z8NF.js";import"./index-DYDBkDSv.js";import"./index-bGeYwVt0.js";import"./useEventCallback-b4efgYNg.js";import"./SkeletonBar-DF8L9OI9.js";import"./LoadingCell-DSxJ4lXT.js";import"./ColumnConfigDialog-BK0vGz9A.js";import"./DraggableList-DyMfJ-4v.js";import"./search-D6xupaDO.js";import"./Input-CNRyhWNO.js";import"./useControlled-DQ_eI8kZ.js";import"./Button-BJQF3YiE.js";import"./small-cross-DOBXkRH7.js";import"./ActionButton-Bd8xK1wy.js";import"./Checkbox-CSgH1SYO.js";import"./useValueChanged-1Q-vBWTO.js";import"./CollapsiblePanel-CJg7yaup.js";import"./MultiColumnSortDialog-oQ4vf-Ce.js";import"./MenuTrigger-D8y_stY7.js";import"./CompositeItem-Bm_HuJxQ.js";import"./ToolbarRootContext-Ca7X_ytn.js";import"./getDisabledMountTransitionStyles-_vmGqUmn.js";import"./getPseudoElementBounds-C1tiKeFn.js";import"./chevron-down-D5oDo9t-.js";import"./index-DLIQOwa5.js";import"./error-Dn8wlh4f.js";import"./BaseCbacBanner-CPk0CIOw.js";import"./makeExternalStore-C137KZPA.js";import"./Tooltip-CEnfBt0P.js";import"./PopoverPopup-BFEF8WU9.js";import"./debounce-CipQE0Vz.js";import"./tick-B26TJQOE.js";import"./DropdownField-Cr1UeBNB.js";import"./isEqual-BUgFxM2N.js";import"./withOsdkMetrics-D8xbJlmg.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
