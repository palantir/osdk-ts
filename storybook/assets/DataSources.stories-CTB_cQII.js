import{j as r}from"./iframe-C5F37WDS.js";import{O as b}from"./object-table-BEbUX7TV.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-8cJHrfm3.js";import{u as g}from"./useOsdkClient-CmCMz8RV.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CfGkAxhR.js";import"./index-DPmfEXn1.js";import"./Dialog-BtED4amM.js";import"./cross-CPshxXyQ.js";import"./svgIconContainer-D5Hoa2ds.js";import"./useBaseUiId-BGreBnEl.js";import"./InternalBackdrop-B09mEpfb.js";import"./composite-CGgdtCoR.js";import"./index-_URA0IQM.js";import"./index-DUd2_GTy.js";import"./index-kMdysijy.js";import"./useEventCallback-CnBtcH3P.js";import"./SkeletonBar-COnO3nFT.js";import"./LoadingCell-DK_o9OZw.js";import"./ColumnConfigDialog-CQnK5DVU.js";import"./DraggableList-BAlDHBgE.js";import"./search-KDPiG0C3.js";import"./Input-CoBEe8YJ.js";import"./useControlled-BmU56l0K.js";import"./Button-eBDyeEgi.js";import"./small-cross-DpbbqTEW.js";import"./ActionButton-B_JHD4Kz.js";import"./Checkbox-BQWkwBpa.js";import"./useValueChanged-Dyau8co3.js";import"./CollapsiblePanel-CZBHX6_H.js";import"./MultiColumnSortDialog-WUpno4wH.js";import"./MenuTrigger-BMhQEcnk.js";import"./CompositeItem-CkXf7jgb.js";import"./ToolbarRootContext-DTMhtNND.js";import"./getDisabledMountTransitionStyles-DT_lvr6t.js";import"./getPseudoElementBounds-DbutmOr_.js";import"./chevron-down--665Ugn9.js";import"./index-EP0qYko_.js";import"./error-BZcVMBoG.js";import"./BaseCbacBanner-S5UlBrJi.js";import"./makeExternalStore-BJFp2_WD.js";import"./Tooltip-Qr9uHTcA.js";import"./PopoverPopup-B2-_t_Ne.js";import"./debounce-CpEt3hrx.js";import"./tick-B0_SpxmY.js";import"./DropdownField-BAopx9eZ.js";import"./isEqual-CGhyDF2H.js";import"./withOsdkMetrics-BPZHiAPa.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
