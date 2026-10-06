import{j as r}from"./iframe-BJzSfC9S.js";import{O as b}from"./object-table-BMCTAiyf.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B0VWGP4I.js";import{u as g}from"./useOsdkClient-CQVwNPHy.js";import"./preload-helper-C5ZXn0m1.js";import"./Table-BIkC33Zx.js";import"./index-RBTsKrCd.js";import"./Dialog-O7xuo_XA.js";import"./cross-C1sOYIrW.js";import"./svgIconContainer-CuAg_aag.js";import"./useBaseUiId-xJC8-ZJA.js";import"./InternalBackdrop-jeH2RH2w.js";import"./composite-CJkKobo9.js";import"./index-XpV3If0y.js";import"./index-BJ-crEmJ.js";import"./index-huqfVkjH.js";import"./useEventCallback-w7WB5s1Y.js";import"./SkeletonBar-7o_3NyMD.js";import"./LoadingCell-CgxR8vsD.js";import"./ColumnConfigDialog-B6PrK4cc.js";import"./DraggableList-DjcDEt3p.js";import"./search-BtII_V1C.js";import"./Input-DtZovt6p.js";import"./useControlled-CHkHsIux.js";import"./Button-VqVSA-sW.js";import"./small-cross-CuZoKliA.js";import"./ActionButton-LG9rRmUw.js";import"./Checkbox-9l2II2-R.js";import"./useValueChanged-3Zyk1ZQA.js";import"./CollapsiblePanel-B8KUeZV_.js";import"./MultiColumnSortDialog-B3CRa72v.js";import"./MenuTrigger-DMuAXtcy.js";import"./CompositeItem-Dy9HP9ud.js";import"./ToolbarRootContext-BYj16EhM.js";import"./getDisabledMountTransitionStyles-C9ZXU9C3.js";import"./getPseudoElementBounds-DGHyT3Ys.js";import"./chevron-down-i7BRJyaV.js";import"./index-C7z7F6oT.js";import"./error-B8K_QQqb.js";import"./BaseCbacBanner-D5GYp1r1.js";import"./makeExternalStore-BYmjIu_q.js";import"./Tooltip-Bgn1Cxp6.js";import"./PopoverPopup-X5gFNrqC.js";import"./debounce-DNvbPKFV.js";import"./tick-C6e3lIMM.js";import"./DropdownField-BKTfgTvj.js";import"./isEqual-BEG_D5ZZ.js";import"./withOsdkMetrics-Dv0OE5bl.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
