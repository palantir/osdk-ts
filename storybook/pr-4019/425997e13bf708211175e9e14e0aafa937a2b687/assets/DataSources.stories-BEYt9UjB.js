import{j as r}from"./iframe-CN_vvEvV.js";import{O as b}from"./object-table-DX7CTvjQ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BccLqAuu.js";import{u as g}from"./useOsdkClient-DrtQRBcg.js";import"./preload-helper-WuzznOu3.js";import"./Table-xHkxr4dJ.js";import"./index-Yn_grBDh.js";import"./Dialog-DFIKjt_b.js";import"./cross-BTNfX9AB.js";import"./svgIconContainer-Cuv7eTan.js";import"./useBaseUiId-D6GNKrv7.js";import"./InternalBackdrop-cUW2sy_R.js";import"./composite-Dgt1ShdF.js";import"./index-DmpSrWu6.js";import"./index-BZSZGkip.js";import"./index-CCC1qb5m.js";import"./useEventCallback-CKtb97LM.js";import"./SkeletonBar-DfT678KI.js";import"./LoadingCell-DO8BK_3m.js";import"./ColumnConfigDialog-jxRXajs0.js";import"./DraggableList-EI0d774X.js";import"./search-BL454ash.js";import"./Input-D-TN7H1o.js";import"./useControlled-DY8zlZhG.js";import"./Button-GYys4WHS.js";import"./small-cross-Bnuet9W-.js";import"./ActionButton-DNB_8X09.js";import"./Checkbox-CgSh6FsU.js";import"./useValueChanged-BAUdQdKF.js";import"./CollapsiblePanel-Btx1XCpX.js";import"./MultiColumnSortDialog-Cq5nIQkj.js";import"./MenuTrigger-BJCiSHbj.js";import"./CompositeItem-CUoXO_HL.js";import"./ToolbarRootContext-DFFN_XcR.js";import"./getDisabledMountTransitionStyles-BMjHeHnL.js";import"./getPseudoElementBounds-Blrc2Fw3.js";import"./chevron-down-CuRI24Zn.js";import"./index-e9J7zdgf.js";import"./error-DJd0ydtA.js";import"./BaseCbacBanner-pbTMe1h8.js";import"./makeExternalStore-DNuR4f-v.js";import"./Tooltip-CEURmlww.js";import"./PopoverPopup-B_u8qz4L.js";import"./debounce-DK3ARArn.js";import"./tick-DRndoMTx.js";import"./DropdownField-D5NveR3K.js";import"./isEqual-Z4hf267W.js";import"./withOsdkMetrics-C7EoGoEb.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
