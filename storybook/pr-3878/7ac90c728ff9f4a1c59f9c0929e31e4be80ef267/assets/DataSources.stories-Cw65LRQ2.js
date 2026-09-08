import{j as r}from"./iframe-BrczSXWd.js";import{O as b}from"./object-table-D2NYr_bA.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Bor4BlRd.js";import{u as g}from"./useOsdkClient-CVk0RIIh.js";import"./preload-helper-C9BY0Y3l.js";import"./Table-BA80nWKR.js";import"./index-DudA86qY.js";import"./Dialog-Bih-9NwC.js";import"./cross-Ru6xXr8E.js";import"./svgIconContainer-CE-3RmSd.js";import"./useBaseUiId-BAdjTZxi.js";import"./InternalBackdrop-985pZM4u.js";import"./composite-Bm0YB8hl.js";import"./index-BNKav9tw.js";import"./index-DjqiYrmI.js";import"./index-O3AskpOE.js";import"./useEventCallback-BQlx-yAT.js";import"./SkeletonBar-BrWUMOMm.js";import"./LoadingCell-DbJ-o34E.js";import"./ColumnConfigDialog-DGgd9sJY.js";import"./DraggableList-CTf3QPXN.js";import"./search-BIr2ECst.js";import"./Input-B6lE5n2S.js";import"./useControlled-rjkFsMU4.js";import"./Button-DCegplHy.js";import"./small-cross-joSiLnnY.js";import"./ActionButton-BArH-a0x.js";import"./Checkbox-D0Mkme1h.js";import"./useValueChanged-BQ2NGAKU.js";import"./CollapsiblePanel-CsAiwkqy.js";import"./MultiColumnSortDialog-eJQvbRjM.js";import"./MenuTrigger-CL4ez-GT.js";import"./CompositeItem-BJcTRkcm.js";import"./ToolbarRootContext-BTk5x8Vt.js";import"./getDisabledMountTransitionStyles-BeD1AelW.js";import"./getPseudoElementBounds-PdvQmR0i.js";import"./chevron-down-Bqbgyapn.js";import"./index-HlCA-cEl.js";import"./error-CUc0NJXd.js";import"./BaseCbacBanner-Bh9Y43TL.js";import"./makeExternalStore-C7i3F044.js";import"./Tooltip-YOTilwd1.js";import"./PopoverPopup-rbPcompC.js";import"./debounce-DXJT-xl2.js";import"./tick-DqGJ_cyI.js";import"./DropdownField-D1lbpORr.js";import"./isEqual-CusS7w8u.js";import"./withOsdkMetrics-DGpmb3Iv.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
