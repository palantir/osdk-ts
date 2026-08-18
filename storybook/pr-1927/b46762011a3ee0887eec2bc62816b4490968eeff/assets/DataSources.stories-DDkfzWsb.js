import{j as r}from"./iframe-BOYw5zy-.js";import{O as b}from"./object-table-D81tTWvf.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Z1ify2_P.js";import{u as g}from"./useOsdkClient-r4YoKJoo.js";import"./preload-helper-rlM1gbkG.js";import"./Table-DL2T0EZB.js";import"./index-BiLXe7b8.js";import"./Dialog-DIZILVPE.js";import"./cross-CsFY0Vd9.js";import"./svgIconContainer-DR1S8Glm.js";import"./useBaseUiId-BaQZ9H47.js";import"./InternalBackdrop-jHkma8F_.js";import"./composite-B4RYJvOx.js";import"./index-DJ2EryKw.js";import"./index-0lKohxv1.js";import"./index-iucmux4F.js";import"./useEventCallback-2k-8oajA.js";import"./SkeletonBar-CGMO35AQ.js";import"./LoadingCell-CmuJvP6e.js";import"./ColumnConfigDialog-BS8J0jq7.js";import"./DraggableList-DvXNu-Bu.js";import"./search-BTWV523N.js";import"./Input-D2kKGhXI.js";import"./useControlled-jWAlfo7U.js";import"./Button-WZTUEUss.js";import"./small-cross-Bl3dZfTj.js";import"./ActionButton-BqxdywPW.js";import"./Checkbox-CqZpR2LE.js";import"./useValueChanged-DibL0JTX.js";import"./CollapsiblePanel-C3WjnvDq.js";import"./MultiColumnSortDialog-BHScrzXj.js";import"./MenuTrigger-DTKkTg9R.js";import"./CompositeItem-CFBGvBu5.js";import"./ToolbarRootContext-po-fYSto.js";import"./getDisabledMountTransitionStyles-BgyDuN12.js";import"./getPseudoElementBounds-lvyQN2rY.js";import"./chevron-down-D_OtGuxk.js";import"./index-BKNNKL9I.js";import"./error-1JPgoJzQ.js";import"./BaseCbacBanner-CkMD_K2_.js";import"./makeExternalStore-BH853qpO.js";import"./Tooltip-D-uoAdky.js";import"./PopoverPopup-DO5EffCW.js";import"./debounce-DDF3v6y6.js";import"./tick-DAhMGnUy.js";import"./DropdownField-cmZfnDUJ.js";import"./isEqual-CU0W-K1Y.js";import"./withOsdkMetrics-BaHbUuYM.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
