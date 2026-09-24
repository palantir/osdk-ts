import{j as r}from"./iframe-n8xc1zmR.js";import{O as b}from"./object-table-CiBALKRZ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-sp0n53u5.js";import{u as g}from"./useOsdkClient-CCi5QoY_.js";import"./preload-helper-Bmsyery-.js";import"./Table-B4GdGFKt.js";import"./index-BAcQGlbN.js";import"./Dialog-DMtSaZZF.js";import"./cross-CxpUurAd.js";import"./svgIconContainer-Cfmf2PdM.js";import"./useBaseUiId-eETnIy-K.js";import"./InternalBackdrop-CCcuqGEC.js";import"./composite-DIEyOfVG.js";import"./index-MqtyKuec.js";import"./index-DV7yKC3H.js";import"./index-Cv8iH0sa.js";import"./useEventCallback-kGheuRwD.js";import"./SkeletonBar-D74l1Ztx.js";import"./LoadingCell-CMixqtDR.js";import"./ColumnConfigDialog-2BkdEepz.js";import"./DraggableList-C8LN0UDD.js";import"./search-CHlDi3Oa.js";import"./Input-BlStQB_U.js";import"./useControlled-D5Gxa7cz.js";import"./Button-xMD57DxE.js";import"./small-cross-BNKugY-f.js";import"./ActionButton-CSMbtnor.js";import"./Checkbox-DD1ns08A.js";import"./useValueChanged-BZIGOI0A.js";import"./CollapsiblePanel-BpdatoOf.js";import"./MultiColumnSortDialog-Gt0xpNTA.js";import"./MenuTrigger-DdA8vxhc.js";import"./CompositeItem-Bg5j4iyb.js";import"./ToolbarRootContext-BJkBQG1i.js";import"./getDisabledMountTransitionStyles-BNw6DyHr.js";import"./getPseudoElementBounds-CLnV32FM.js";import"./chevron-down-ut1JXVy2.js";import"./index-_yWg9Pvu.js";import"./error-B1cmPXwp.js";import"./BaseCbacBanner-Cw7Gzt9H.js";import"./makeExternalStore-DsKbnpVD.js";import"./Tooltip-C0vBpqP0.js";import"./PopoverPopup-CnDxdF7U.js";import"./debounce-DHLI8XQh.js";import"./tick-Cgr5wt1D.js";import"./DropdownField-CS8LcZCX.js";import"./isEqual-vs4Fv33M.js";import"./withOsdkMetrics-BgaQEVHI.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
