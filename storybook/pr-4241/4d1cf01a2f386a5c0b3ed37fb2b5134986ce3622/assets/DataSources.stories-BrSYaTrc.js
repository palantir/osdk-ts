import{j as r}from"./iframe-DfEkohu4.js";import{O as b}from"./object-table-BN1-u8MV.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DgiUgE0s.js";import{u as g}from"./useOsdkClient-CcG1MUqc.js";import"./preload-helper-DFhwYWPX.js";import"./Table-D2cJLHUH.js";import"./index-BScMX4pI.js";import"./Dialog-DcZzoWRJ.js";import"./cross-BPfWpbhR.js";import"./svgIconContainer-52IA31OT.js";import"./useBaseUiId-B77SsLeT.js";import"./InternalBackdrop-DXqBVLJs.js";import"./composite-Bps_FR72.js";import"./index-JsvBI6N5.js";import"./index-DeVDv3z2.js";import"./index-hIEvmrlT.js";import"./useEventCallback-DfD6b3pP.js";import"./SkeletonBar-DVdvzFwN.js";import"./LoadingCell-C83u4qPQ.js";import"./ColumnConfigDialog-BnmliCoh.js";import"./DraggableList-89VWJX01.js";import"./search-B6VKD1Dj.js";import"./Input-BPcgfpFu.js";import"./useControlled-BtbuRmOW.js";import"./Button-hRgK4Dbu.js";import"./small-cross-DDNeE2US.js";import"./ActionButton-BGdEaaKW.js";import"./Checkbox-DBVre3dS.js";import"./useValueChanged-DA_n1_wF.js";import"./CollapsiblePanel-Cfd-QJkm.js";import"./MultiColumnSortDialog-ezrWLSmU.js";import"./MenuTrigger-6H-bl2y6.js";import"./CompositeItem-Efavp-9X.js";import"./ToolbarRootContext-CElxzA4r.js";import"./getDisabledMountTransitionStyles-BYqMdHQa.js";import"./getPseudoElementBounds-ibDNbMG2.js";import"./chevron-down-BPKdn-wb.js";import"./index-CFbhSp4o.js";import"./error-CvHPy682.js";import"./BaseCbacBanner-LKGdtPKp.js";import"./makeExternalStore-D77TIE_F.js";import"./Tooltip-CU1xiDOq.js";import"./PopoverPopup-uQDnUDEP.js";import"./debounce-CtoYG2yf.js";import"./tick-CjKE3w4f.js";import"./DropdownField-BqAebNxN.js";import"./isEqual-DyTTXjjH.js";import"./withOsdkMetrics-CSBiz8Z-.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
