import{j as r}from"./iframe-DFabC9bf.js";import{O as b}from"./object-table-CkSvgxZD.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D-kY8lpR.js";import{u as g}from"./useOsdkClient-qt8uEQ5r.js";import"./preload-helper-BLxMvu58.js";import"./Table-CnA6SAP4.js";import"./index-DgsFchdG.js";import"./Dialog-BJo6rT1Y.js";import"./cross-ey58JM4H.js";import"./svgIconContainer-CsYtoZH2.js";import"./useBaseUiId-Dxr7oR41.js";import"./InternalBackdrop-C20tnZkX.js";import"./composite-BoRXQVH0.js";import"./index-BHWOd5Tr.js";import"./index-Gxd2oAE6.js";import"./index-B8dgdXG5.js";import"./useEventCallback-Dxsnooid.js";import"./SkeletonBar-DB5TmKcA.js";import"./LoadingCell-DbPuyCqH.js";import"./ColumnConfigDialog-DqfQDf7k.js";import"./DraggableList-BYFQzYt6.js";import"./search-B_WKOos_.js";import"./Input-BZyaCDxG.js";import"./useControlled-B3kUZkdE.js";import"./Button-DIvAKpTN.js";import"./small-cross-C4IRJysc.js";import"./ActionButton-BjOTOAby.js";import"./Checkbox-BY0YL0BC.js";import"./useValueChanged-BLFxNhsm.js";import"./CollapsiblePanel-bxzaQZkR.js";import"./MultiColumnSortDialog-CuxM7pOK.js";import"./MenuTrigger-B-Ap0mFZ.js";import"./CompositeItem-DUW332tM.js";import"./ToolbarRootContext-2AVlTjyA.js";import"./getDisabledMountTransitionStyles-BTShP6Yf.js";import"./getPseudoElementBounds-DqdMi3cO.js";import"./chevron-down-jy1hrUFA.js";import"./index-aUHzwEmK.js";import"./error-f3c_sZgu.js";import"./BaseCbacBanner-BcalAL_E.js";import"./makeExternalStore-D6-6uuSf.js";import"./Tooltip-De3r9uzL.js";import"./PopoverPopup-Dpc77gDV.js";import"./debounce-kIdrhBMS.js";import"./tick-DRNk9pjM.js";import"./DropdownField-BmWQkglP.js";import"./isEqual-sHm5R8fg.js";import"./withOsdkMetrics-BCss4ydh.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
