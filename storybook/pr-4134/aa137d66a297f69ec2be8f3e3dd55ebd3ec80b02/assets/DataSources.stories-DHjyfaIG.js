import{j as r}from"./iframe-DSCKXMMn.js";import{O as b}from"./object-table-CZbIqfQV.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BAVB9Og5.js";import{u as g}from"./useOsdkClient-BI1XigGe.js";import"./preload-helper-ByptHhz6.js";import"./Table-Cr_vfs4t.js";import"./index-C7t8d6sq.js";import"./Dialog-Dkrw2dKY.js";import"./cross-D9ih38aN.js";import"./svgIconContainer-D4l9MrWe.js";import"./useBaseUiId-C9Ey5z8I.js";import"./InternalBackdrop-DJscdhsG.js";import"./composite-CJGYUM8R.js";import"./index-CCGpCs03.js";import"./index-DTvEyVWA.js";import"./index-BEvWt0A3.js";import"./useEventCallback-B0RejaLo.js";import"./SkeletonBar-DseYvX2N.js";import"./LoadingCell-B39OstDD.js";import"./ColumnConfigDialog-CZg_lX5T.js";import"./DraggableList-CU3gmg9g.js";import"./search-D1zNkldZ.js";import"./Input-BzhFYkRc.js";import"./useControlled-D9fcHZz8.js";import"./Button-DsHbP2Ls.js";import"./small-cross-ClLnfsZa.js";import"./ActionButton-CDDQzDqj.js";import"./Checkbox-BcOWPK9W.js";import"./useValueChanged-CJeLgR2q.js";import"./CollapsiblePanel-CwSDo6aL.js";import"./MultiColumnSortDialog-Dd95rHb3.js";import"./MenuTrigger-L3QaBjKq.js";import"./CompositeItem-DuylraaY.js";import"./ToolbarRootContext-DcygcfWk.js";import"./getDisabledMountTransitionStyles-MuBPPf6T.js";import"./getPseudoElementBounds-BMTzjDxj.js";import"./chevron-down-CoJlRxaZ.js";import"./index-BNKB-ErD.js";import"./error-KXOxkvIx.js";import"./BaseCbacBanner-CwIMApuU.js";import"./makeExternalStore-BTu3d_5y.js";import"./Tooltip-BjyKOyVF.js";import"./PopoverPopup-wHBjGNnn.js";import"./debounce-CC8-tWmy.js";import"./tick-DglZI497.js";import"./DropdownField-B7i6TyJK.js";import"./isEqual-W07FZkQR.js";import"./withOsdkMetrics-DIi3nPfP.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
