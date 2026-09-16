import{j as r}from"./iframe-DQjaRBUi.js";import{O as b}from"./object-table-HcfFLFjd.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CH1EDCAx.js";import{u as g}from"./useOsdkClient-muvg_G4O.js";import"./preload-helper-B51_55sC.js";import"./Table-DNn5HplO.js";import"./index-a9fHowso.js";import"./Dialog-x-ohr3Xi.js";import"./cross-CzaogkbO.js";import"./svgIconContainer-P1Q9eNRM.js";import"./useBaseUiId-CsxSSmlu.js";import"./InternalBackdrop-CGlx2QtJ.js";import"./composite-h2wwgXba.js";import"./index-4Rz5xHWo.js";import"./index-4wWSGius.js";import"./index-CmZITiK9.js";import"./useEventCallback-NOj49XSF.js";import"./SkeletonBar-kfcTeHsF.js";import"./LoadingCell-BFabjyGm.js";import"./ColumnConfigDialog-DbijqrEN.js";import"./DraggableList-L_mP90gV.js";import"./search-Dh1WJUP1.js";import"./Input-CsAKN6EM.js";import"./useControlled-BLfmFiCd.js";import"./Button-DgMUmpJg.js";import"./small-cross-CFXecDDy.js";import"./ActionButton-DKLUDny4.js";import"./Checkbox-B2EtQtdS.js";import"./useValueChanged-ldsEspGn.js";import"./CollapsiblePanel-COn6Cc5t.js";import"./MultiColumnSortDialog-XY4IVXW6.js";import"./MenuTrigger-8JBd0ZP1.js";import"./CompositeItem-CKeLa0nw.js";import"./ToolbarRootContext-N17gF4sL.js";import"./getDisabledMountTransitionStyles-D9FvhRU-.js";import"./getPseudoElementBounds-BxgEvMoC.js";import"./chevron-down-BCCVuGBy.js";import"./index-T90468VQ.js";import"./error-w3bPHlOX.js";import"./BaseCbacBanner-BBLPrZ9R.js";import"./makeExternalStore-B1bL49mU.js";import"./Tooltip-BfdSll4I.js";import"./PopoverPopup-DROtk8sN.js";import"./debounce-DQESqZVa.js";import"./tick-DrIoKrNo.js";import"./DropdownField-CvsinZmL.js";import"./isEqual-Dw4zfL1A.js";import"./withOsdkMetrics-DnZQS4XI.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
