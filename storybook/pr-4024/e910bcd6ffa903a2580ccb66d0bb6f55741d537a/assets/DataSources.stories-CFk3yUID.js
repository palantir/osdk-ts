import{j as r}from"./iframe-CMAdZ-tl.js";import{O as b}from"./object-table-Dx9xL36M.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CZG_uOaL.js";import{u as g}from"./useOsdkClient-DLfNvm6T.js";import"./preload-helper-BCEvkaTh.js";import"./Table-D_DSDL0d.js";import"./index-uZXDV4-c.js";import"./Dialog-CW_CWxXG.js";import"./cross-TecNFToN.js";import"./svgIconContainer-BGo4Ffmi.js";import"./useBaseUiId-C6a-nIiQ.js";import"./InternalBackdrop-DDjtbvyl.js";import"./composite-hUzc6DpG.js";import"./index-DqPGLAB8.js";import"./index-Bi9d8J52.js";import"./index-BVbV_G_W.js";import"./useEventCallback-1slYZiXe.js";import"./SkeletonBar-BrSrSU08.js";import"./LoadingCell-D4OTFGIY.js";import"./ColumnConfigDialog-BidNcYNA.js";import"./DraggableList-Bs_dkqHq.js";import"./search-Bbf0CQIG.js";import"./Input-EDICR5v8.js";import"./useControlled-BNZjX3EY.js";import"./Button-CMbZ2dfd.js";import"./small-cross-DSzexAdf.js";import"./ActionButton-B6tCqEcW.js";import"./Checkbox-D74xxvMN.js";import"./useValueChanged-6IX2onud.js";import"./CollapsiblePanel-Hpy333SY.js";import"./MultiColumnSortDialog-BxfQROOL.js";import"./MenuTrigger-DA2yGYW4.js";import"./CompositeItem-WbzOgrFX.js";import"./ToolbarRootContext-UfxXSGbE.js";import"./getDisabledMountTransitionStyles-jvQsg8pP.js";import"./getPseudoElementBounds-k5Ib03Kp.js";import"./chevron-down--0eNTL5v.js";import"./index-BkytFj73.js";import"./error-CKKGLKp7.js";import"./BaseCbacBanner-DPtrzNX8.js";import"./makeExternalStore-Y97085jQ.js";import"./Tooltip-CzT_wPMb.js";import"./PopoverPopup-Dr43Tc4o.js";import"./debounce-jO5PmR1U.js";import"./tick-JhIa2r4T.js";import"./DropdownField-Vcml5_p5.js";import"./isEqual--xBYkPnr.js";import"./withOsdkMetrics-XprJI73J.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
