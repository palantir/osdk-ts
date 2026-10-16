import{j as r}from"./iframe-BoRHmw1P.js";import{O as b}from"./object-table-DRTkPZ2B.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-mzh7zcnN.js";import{u as g}from"./useOsdkClient-CMKxLvF9.js";import"./preload-helper-BwC4djfE.js";import"./Table-CV6WvzaU.js";import"./index-CKE1HitJ.js";import"./Dialog-S7w-4bYU.js";import"./cross-CXHDS3ru.js";import"./svgIconContainer-BiIenURc.js";import"./useBaseUiId-CclY9vCT.js";import"./InternalBackdrop-C0dWxoMX.js";import"./composite-NGGk8Cjx.js";import"./index-DtzOCkwB.js";import"./index-CrIjACAu.js";import"./index-DJcZ5Upx.js";import"./useEventCallback-s1Vmoh60.js";import"./SkeletonBar-BF5QQ5Lz.js";import"./LoadingCell-DSLWPUZ7.js";import"./ColumnConfigDialog-CPmcrKEX.js";import"./DraggableList-DlA04W8l.js";import"./search-DY5E4Hwb.js";import"./Input-C1OYcJfy.js";import"./useControlled-DCVjIVG_.js";import"./Button-D_pTSnh0.js";import"./small-cross-tSFsGM1S.js";import"./ActionButton-Uz6_D_U2.js";import"./Checkbox-CPnCeEYm.js";import"./useValueChanged-DZj1boR2.js";import"./CollapsiblePanel-CuhbJXth.js";import"./MultiColumnSortDialog-ztN2Cs7y.js";import"./MenuTrigger-Cb1Y06t2.js";import"./CompositeItem-BuKhldON.js";import"./ToolbarRootContext-CcVDjx55.js";import"./getDisabledMountTransitionStyles-CL6SxWwa.js";import"./getPseudoElementBounds-BowpVekl.js";import"./chevron-down-DOBMuKk4.js";import"./index-DupFExnL.js";import"./error-sO_QuGwO.js";import"./BaseCbacBanner-BrqYtPd-.js";import"./makeExternalStore-DDuoJFnu.js";import"./Tooltip-0AEySry7.js";import"./PopoverPopup-DYqs8h8g.js";import"./debounce-fg_UNTnM.js";import"./tick-DIjubJnt.js";import"./DropdownField-D0TX0D9X.js";import"./isEqual-CHt0Jf51.js";import"./withOsdkMetrics-D9OdN7A-.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
