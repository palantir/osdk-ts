import{j as r}from"./iframe-DZKZRMfI.js";import{O as b}from"./object-table-BsWjOEgt.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CLPF0nZ2.js";import{u as g}from"./useOsdkClient-BeGqXuUC.js";import"./preload-helper-CyDM0kIy.js";import"./Table-U9dRKIWF.js";import"./index-UHNo6JXh.js";import"./Dialog-C9zFjDwL.js";import"./cross-7qoEAdfk.js";import"./svgIconContainer-C1JqEOuF.js";import"./useBaseUiId-BrAP3Vhg.js";import"./InternalBackdrop-Bd1Fm7m7.js";import"./composite-Wbt-b0Wx.js";import"./index-BcZyi5e5.js";import"./index-GUxQVV6o.js";import"./index-DuUfF7np.js";import"./useEventCallback-ZFvhVecb.js";import"./SkeletonBar-B4noTuJE.js";import"./LoadingCell-jvnZxHuU.js";import"./ColumnConfigDialog-CWL9Lvpm.js";import"./DraggableList-QUK3qw-p.js";import"./search-BMN_5avI.js";import"./Input-DAp8ZrwB.js";import"./useControlled-Dg2uTPRC.js";import"./isEqual-B35GUBBd.js";import"./isObject-CZrcnf8_.js";import"./Button-Clu6RzPE.js";import"./ActionButton-DV1gQ_3M.js";import"./Checkbox-DvrL_Cuc.js";import"./useValueChanged-CES4Mr1K.js";import"./CollapsiblePanel-ChxW3qwi.js";import"./MultiColumnSortDialog-Bnt2nhz5.js";import"./MenuTrigger-DM0YWJsi.js";import"./CompositeItem-BToRPTQx.js";import"./ToolbarRootContext-DRj1zGHd.js";import"./getDisabledMountTransitionStyles-BKGiXkNj.js";import"./getPseudoElementBounds-CnkNCKmG.js";import"./chevron-down-B-VJcggY.js";import"./index-CzSoEYKc.js";import"./error-BGz2U_dj.js";import"./BaseCbacBanner-DlYIXUuu.js";import"./makeExternalStore-BdBWg-q-.js";import"./Tooltip-m2lNKbbq.js";import"./PopoverPopup-rf4F-xS_.js";import"./toNumber-C0YbIGo7.js";import"./tick-Cf7fJ5Zm.js";import"./DropdownField-Cmzd4G9b.js";import"./withOsdkMetrics-hhq9mBBz.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
