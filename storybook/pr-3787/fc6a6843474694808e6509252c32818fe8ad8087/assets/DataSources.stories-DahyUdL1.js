import{j as r}from"./iframe-m5MS_AOj.js";import{O as b}from"./object-table-BC9fkns5.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-aYhUXMaN.js";import{u as g}from"./useOsdkClient-Czt1KuT1.js";import"./preload-helper-Cwc8v1fY.js";import"./Table-CIjlWIk4.js";import"./index-DLmK-3wj.js";import"./Dialog-70BG_zV_.js";import"./cross-CnvlWWQf.js";import"./svgIconContainer-CN2kOMHj.js";import"./useBaseUiId-Qy_uNuRZ.js";import"./InternalBackdrop-DkxaVrHk.js";import"./composite-URT0CF0y.js";import"./index-fzOrEoIw.js";import"./index-oqW8MMnv.js";import"./index-DJe0xhy4.js";import"./useEventCallback-DOc1-vE_.js";import"./SkeletonBar-iBmjJTol.js";import"./LoadingCell-CHS72waR.js";import"./ColumnConfigDialog-BmKaIgQQ.js";import"./DraggableList-BcK0Le42.js";import"./search-CcRTPglH.js";import"./Input-o1S0gnyB.js";import"./useControlled-22a6dTFJ.js";import"./isEqual-CfIEN4pK.js";import"./isObject-CsjcMZtm.js";import"./Button-DMilPMm4.js";import"./ActionButton-DLuP9c_H.js";import"./Checkbox-_jhKYKoR.js";import"./useValueChanged-BKB40wxe.js";import"./CollapsiblePanel-B98BpceP.js";import"./MultiColumnSortDialog-XlWsTK6k.js";import"./MenuTrigger-Bi21pepp.js";import"./CompositeItem-W4eWSFb6.js";import"./ToolbarRootContext-Nqff0oCy.js";import"./getDisabledMountTransitionStyles-LU9Dun1Q.js";import"./getPseudoElementBounds-DvApA5Pd.js";import"./chevron-down-CGfzs9sc.js";import"./index-BRTVPirF.js";import"./error-Cg5wTyY6.js";import"./BaseCbacBanner-B5_ySqf0.js";import"./makeExternalStore-BIok_NyR.js";import"./Tooltip-D8W5By2S.js";import"./PopoverPopup-B4LNmDrb.js";import"./toNumber-BCgQEwY4.js";import"./tick-bUBGlmQ7.js";import"./DropdownField-B72e_7Tx.js";import"./withOsdkMetrics-C6tQjPwh.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
