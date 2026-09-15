import{j as r}from"./iframe-BcjmHG5Y.js";import{O as b}from"./object-table-C4pgDWQ3.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Cvt5mzt-.js";import{u as g}from"./useOsdkClient-9RXKzpNA.js";import"./preload-helper-CevB4zUw.js";import"./Table-DERF2Y3g.js";import"./index-WgcqtCT6.js";import"./Dialog-DzlZ0ulb.js";import"./cross-DoMlZBaZ.js";import"./svgIconContainer-CoM5Z7Ve.js";import"./useBaseUiId-CYrtGdJE.js";import"./InternalBackdrop-Dy54GwQQ.js";import"./composite-D6B2PGWO.js";import"./index-CsMXJwKN.js";import"./index-DpV3ZQ0J.js";import"./index-DSYJPx0N.js";import"./useEventCallback-Du9FLIz2.js";import"./SkeletonBar-Casjd6QM.js";import"./LoadingCell-pP6K6nBy.js";import"./ColumnConfigDialog-5r56BsKv.js";import"./DraggableList-DZrWEZ51.js";import"./search-jO8my80A.js";import"./Input-e_01wq9D.js";import"./useControlled-6NYxLXP3.js";import"./Button-DJfJDABU.js";import"./small-cross-BpYV_lGq.js";import"./ActionButton-U9wgeBuw.js";import"./Checkbox-TgEXnci4.js";import"./useValueChanged-66Q9-4Wr.js";import"./CollapsiblePanel-UzBakrGh.js";import"./MultiColumnSortDialog-Dynlb7gM.js";import"./MenuTrigger-BvOL2z14.js";import"./CompositeItem-DLw_ttOE.js";import"./ToolbarRootContext-DAX0lKDl.js";import"./getDisabledMountTransitionStyles-DOxn78aT.js";import"./getPseudoElementBounds-B6Q-orcE.js";import"./chevron-down-yt_M0O0c.js";import"./index-BuLxCPA9.js";import"./error-CYyfg8wo.js";import"./BaseCbacBanner-scUD9TTF.js";import"./makeExternalStore-qC0Amdtu.js";import"./Tooltip-BL83qiDs.js";import"./PopoverPopup-D9ZDT7jF.js";import"./debounce-B2HXz_6i.js";import"./tick-CSVnmAXo.js";import"./DropdownField-Depe1xc5.js";import"./isEqual-I_c9bwSC.js";import"./withOsdkMetrics-C3Z8dnVY.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
