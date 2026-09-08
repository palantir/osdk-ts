import{j as r}from"./iframe-Ba48eLUQ.js";import{O as b}from"./object-table-Cc5o22dm.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B4YVVarD.js";import{u as g}from"./useOsdkClient-Bo-oAXnj.js";import"./preload-helper-BcQJohn9.js";import"./Table-DasDiIGO.js";import"./index-Biav_Ly4.js";import"./Dialog-BkRI-Gh0.js";import"./cross-CZ3u7Zqk.js";import"./svgIconContainer-Dsy6R3Hn.js";import"./useBaseUiId-BqKeDKog.js";import"./InternalBackdrop-mjZPCf-I.js";import"./composite--55ShNCx.js";import"./index-mue2Ao73.js";import"./index-D49E4xW3.js";import"./index-Btzr8NAV.js";import"./useEventCallback-DAMcGMad.js";import"./SkeletonBar-BU-AQLAZ.js";import"./LoadingCell-Cbi1YDrG.js";import"./ColumnConfigDialog-CoMhZSPA.js";import"./DraggableList-CxwNGygN.js";import"./search-6WIx7b7M.js";import"./Input-J_HicyGE.js";import"./useControlled-Ci9ghEUN.js";import"./Button-DS_jYoZ2.js";import"./small-cross-8kU3x62z.js";import"./ActionButton-DL_leNOj.js";import"./Checkbox-D6r5q9c3.js";import"./useValueChanged-CEkuFjgw.js";import"./CollapsiblePanel-wpg_ooMH.js";import"./MultiColumnSortDialog-C09lEdUu.js";import"./MenuTrigger-CZ9J3ztO.js";import"./CompositeItem-vF0jzrVV.js";import"./ToolbarRootContext-yUsbv0N5.js";import"./getDisabledMountTransitionStyles-A33dEllz.js";import"./getPseudoElementBounds-COwLqwqt.js";import"./chevron-down-Dcg5i-52.js";import"./index-D7LGUR6n.js";import"./error-BM0l7F7K.js";import"./BaseCbacBanner-B7P9dWFP.js";import"./makeExternalStore-CTyMzwZg.js";import"./Tooltip-lY5sugsw.js";import"./PopoverPopup-BneJBWwl.js";import"./debounce-C6KffEiQ.js";import"./tick-fCO77waV.js";import"./DropdownField-Bwr07i8-.js";import"./isEqual-D13mUSuI.js";import"./withOsdkMetrics-Cul3xOyv.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
