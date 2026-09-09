import{j as r}from"./iframe-B8cnvOYh.js";import{O as b}from"./object-table-D-LWbXTb.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D4at_ghw.js";import{u as g}from"./useOsdkClient-CNX5cvgx.js";import"./preload-helper-LnHSiiGM.js";import"./Table-BYjDr92W.js";import"./index-B3ykqjKt.js";import"./Dialog-DVh-Zb-K.js";import"./cross-CRSXtga6.js";import"./svgIconContainer-DXuXKKtJ.js";import"./useBaseUiId-BfhiVoPE.js";import"./InternalBackdrop-DBB8A_Xe.js";import"./composite-CpLfOjCv.js";import"./index-Br3P2ZZs.js";import"./index-Btox6Sl3.js";import"./index-BriJK3jE.js";import"./useEventCallback-CWz421aU.js";import"./SkeletonBar-DpIUlSQd.js";import"./LoadingCell-BCv072HP.js";import"./ColumnConfigDialog-DnBpPcxy.js";import"./DraggableList-BoTdqZSG.js";import"./search-Dy-VZ8UW.js";import"./Input-DjBLxYPn.js";import"./useControlled-Bd_oVfJe.js";import"./Button-BXcD7GGd.js";import"./small-cross-CAHXVf7A.js";import"./ActionButton-B9jE2LPd.js";import"./Checkbox-DidiGCmH.js";import"./useValueChanged-W50UaXFT.js";import"./CollapsiblePanel-DYmS8znM.js";import"./MultiColumnSortDialog-CnZm94rC.js";import"./MenuTrigger-BDTwbkqs.js";import"./CompositeItem-BZ4KTjXl.js";import"./ToolbarRootContext-GOwsslzm.js";import"./getDisabledMountTransitionStyles-BS_53I9A.js";import"./getPseudoElementBounds-nJ_aPL17.js";import"./chevron-down-CKQT8552.js";import"./index-BDYln6VT.js";import"./error-Bttrd0IT.js";import"./BaseCbacBanner-HEWQu21Z.js";import"./makeExternalStore-D8SbLzm4.js";import"./Tooltip-C7t2fm4N.js";import"./PopoverPopup-ZEHuNINK.js";import"./debounce-C4M36uj5.js";import"./tick-C0_exER5.js";import"./DropdownField-kPr-3fnd.js";import"./isEqual-D-yBf61h.js";import"./withOsdkMetrics-Dc0ezLCb.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
