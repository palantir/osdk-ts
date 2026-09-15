import{j as r}from"./iframe-CvtjOOTU.js";import{O as b}from"./object-table-UmQroVW1.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BR1d7RBs.js";import{u as g}from"./useOsdkClient-BXT2chcO.js";import"./preload-helper-YYdL2GVs.js";import"./Table-mcEGYA07.js";import"./index-CO5W4Pg7.js";import"./Dialog-BofS88Np.js";import"./cross-BpzF3zqH.js";import"./svgIconContainer-lpqUMm2E.js";import"./useBaseUiId-3JVt3VnJ.js";import"./InternalBackdrop-Be9B27zu.js";import"./composite-po6w4N65.js";import"./index-DzATK-9N.js";import"./index-B4MsJewH.js";import"./index-CKTvbjkc.js";import"./useEventCallback-D1uiA1rY.js";import"./SkeletonBar-CafwHPpr.js";import"./LoadingCell-BICRbQzu.js";import"./ColumnConfigDialog-BKG3t0Fj.js";import"./DraggableList-DmZ9RDUA.js";import"./search-B0EmnwB3.js";import"./Input-LvpeWry1.js";import"./useControlled-TIKyE_eU.js";import"./Button-CirHg6K_.js";import"./small-cross-CEHkrMeL.js";import"./ActionButton-DyVOLyNI.js";import"./Checkbox-YuFQnrBu.js";import"./useValueChanged-Dx7gNUOP.js";import"./CollapsiblePanel-BWOQg1wv.js";import"./MultiColumnSortDialog-B0IJsnrx.js";import"./MenuTrigger-Dku5_OQr.js";import"./CompositeItem-B90xhnGL.js";import"./ToolbarRootContext-XjPDKw4l.js";import"./getDisabledMountTransitionStyles-CKrI2rr8.js";import"./getPseudoElementBounds-BFiPvh4n.js";import"./chevron-down-DEPGbWzo.js";import"./index-CebCVI2l.js";import"./error-CdHEMgDN.js";import"./BaseCbacBanner-D7S9BlO8.js";import"./makeExternalStore-BmjUzr6O.js";import"./Tooltip-9ewxrDzq.js";import"./PopoverPopup-CgxcL0ZR.js";import"./debounce-DcZETNZe.js";import"./tick-cNgeLKWA.js";import"./DropdownField-ClAk7Vc2.js";import"./isEqual-CKUGC3M-.js";import"./withOsdkMetrics-DL5qkExK.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
