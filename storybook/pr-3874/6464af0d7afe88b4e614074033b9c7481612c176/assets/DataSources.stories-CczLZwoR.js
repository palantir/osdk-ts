import{j as r}from"./iframe-BcorHIlW.js";import{O as b}from"./object-table-B4UCWN34.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BwHgMIX6.js";import{u as g}from"./useOsdkClient-DeO7tP5S.js";import"./preload-helper-BKVHm-mS.js";import"./Table-48TCEO5W.js";import"./index-B_6nd-ig.js";import"./Dialog-DAgFtXxB.js";import"./cross-Dc1AyHJB.js";import"./svgIconContainer-CELc8YnE.js";import"./useBaseUiId-BNEl6a46.js";import"./InternalBackdrop-CqIU_AG5.js";import"./composite-CnKbnVU6.js";import"./index-DJgr8Ve3.js";import"./index-D0G6bTH7.js";import"./index-DmDsZq4W.js";import"./useEventCallback-BYEh8Lbq.js";import"./SkeletonBar-BQXc3_7i.js";import"./LoadingCell-BUKaj-MN.js";import"./ColumnConfigDialog-Dhs_TrtO.js";import"./DraggableList-CxHrnm_O.js";import"./search-DFDm-vhN.js";import"./Input-BDlnjPS-.js";import"./useControlled-BLGT_C96.js";import"./Button-D2Dfqz9N.js";import"./small-cross-CdBaewXq.js";import"./ActionButton-DrT_2S6p.js";import"./Checkbox-DF42yLUz.js";import"./useValueChanged-D0_LNJKx.js";import"./CollapsiblePanel-B0ClWT18.js";import"./MultiColumnSortDialog-W7cLl08V.js";import"./MenuTrigger-D7x_HiMZ.js";import"./CompositeItem-DAtA6HT0.js";import"./ToolbarRootContext-Dnx5ruWW.js";import"./getDisabledMountTransitionStyles-HxwKF_Gp.js";import"./getPseudoElementBounds-BeqhPp8n.js";import"./chevron-down-CuN7D4lo.js";import"./index-CrslJJ0M.js";import"./error-CqYYLkEc.js";import"./BaseCbacBanner-BXOWAbH2.js";import"./makeExternalStore-BLgd-akh.js";import"./Tooltip-jSHec6Gx.js";import"./PopoverPopup-COUulOaZ.js";import"./debounce-Bdi5BoLl.js";import"./tick-CUL9CaAQ.js";import"./DropdownField-D1C-_OGE.js";import"./isEqual-BGVz6dle.js";import"./withOsdkMetrics-CeNDUVo3.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
