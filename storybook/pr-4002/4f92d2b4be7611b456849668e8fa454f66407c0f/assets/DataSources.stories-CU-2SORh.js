import{j as r}from"./iframe-ooeZhevd.js";import{O as b}from"./object-table-BNZpf3v7.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-70_b9Xei.js";import{u as g}from"./useOsdkClient-niwjXdb6.js";import"./preload-helper-BnwSBXhQ.js";import"./Table-BMiiJ1dv.js";import"./index-Opepl_3W.js";import"./Dialog-whPx79dt.js";import"./cross-iJZIJRn7.js";import"./svgIconContainer-ibzsHUTw.js";import"./useBaseUiId-C4sL4iAi.js";import"./InternalBackdrop-x2qoBta4.js";import"./composite-DKgZ9LEy.js";import"./index-CYHbLiIc.js";import"./index-BCos5_Jn.js";import"./index-B9EyyIgd.js";import"./useEventCallback-EkipuQOe.js";import"./SkeletonBar-BEN-vvtf.js";import"./LoadingCell-BLOrCGFf.js";import"./ColumnConfigDialog-Bz6SjtKR.js";import"./DraggableList-DnSrmqMp.js";import"./search-DiIwZt1O.js";import"./Input-ChnU8vn2.js";import"./useControlled-Gm0PZX0G.js";import"./Button-DqC8xzBf.js";import"./small-cross-BLYu_41q.js";import"./ActionButton-W94KnoF6.js";import"./Checkbox-CNgD2rt5.js";import"./useValueChanged-DdWwkIMT.js";import"./CollapsiblePanel-Dp0b_V1p.js";import"./MultiColumnSortDialog-CzlwmuQV.js";import"./MenuTrigger-2FtXkbkY.js";import"./CompositeItem-CeghUTrN.js";import"./ToolbarRootContext-DJcBXYiU.js";import"./getDisabledMountTransitionStyles-BzrJdGmZ.js";import"./getPseudoElementBounds-DWlgx5fm.js";import"./chevron-down-BdjihE2B.js";import"./index-BYF2kMrC.js";import"./error-Cy4V0hs4.js";import"./BaseCbacBanner-CBMCJm_T.js";import"./makeExternalStore-BQ6V8XYd.js";import"./Tooltip-CXPB0dJ-.js";import"./PopoverPopup-BxQimM2r.js";import"./debounce-Bz4zrZ7K.js";import"./tick-BBpzHv2k.js";import"./DropdownField-w_-x_8X7.js";import"./isEqual-Cr1Ti8md.js";import"./withOsdkMetrics-BKB5x-AQ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
