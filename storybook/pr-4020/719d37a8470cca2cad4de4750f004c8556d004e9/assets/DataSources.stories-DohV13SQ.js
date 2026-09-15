import{j as r}from"./iframe-B0400XAV.js";import{O as b}from"./object-table-BZ5Kdgrh.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D1ytSi7_.js";import{u as g}from"./useOsdkClient-J40VcFnd.js";import"./preload-helper-Bn7pmSUb.js";import"./Table-BALaECP2.js";import"./index-DZ4vxiLW.js";import"./Dialog-SWkd_Wiv.js";import"./cross-DQqnupWk.js";import"./svgIconContainer-JRfXSFeh.js";import"./useBaseUiId-B9k80gJ8.js";import"./InternalBackdrop-DmO0kWzU.js";import"./composite-BH1fXSiW.js";import"./index-C_9Kpq7B.js";import"./index-2o5KGJI0.js";import"./index-Ej3jcQKp.js";import"./useEventCallback-JQnAZWI3.js";import"./SkeletonBar-DJor0eXp.js";import"./LoadingCell-BOFJCCyC.js";import"./ColumnConfigDialog-d3dN9wSL.js";import"./DraggableList-B_mWzcV5.js";import"./search-BeppLusu.js";import"./Input-BRGSYo1e.js";import"./useControlled-DjWHSFCM.js";import"./Button-YA4JYpq1.js";import"./small-cross-ESv-X2fK.js";import"./ActionButton-BrvBwGrb.js";import"./Checkbox-CJMelRTO.js";import"./useValueChanged-BsB5HN0-.js";import"./CollapsiblePanel-B3Zzdgcc.js";import"./MultiColumnSortDialog-BN_ENW3e.js";import"./MenuTrigger-CKvR1G5L.js";import"./CompositeItem-CoJRCpBo.js";import"./ToolbarRootContext--iPu1vj7.js";import"./getDisabledMountTransitionStyles-CGuB9paQ.js";import"./getPseudoElementBounds-DLMLBgRr.js";import"./chevron-down-CEDiPbvm.js";import"./index-C8DuxpD6.js";import"./error-BZwgl63S.js";import"./BaseCbacBanner-BeF2ijdW.js";import"./makeExternalStore-B2IR-Z_q.js";import"./Tooltip-0d-ScaQ8.js";import"./PopoverPopup-1szLhiqM.js";import"./debounce-D1VOMgMZ.js";import"./tick-DHoO3CIv.js";import"./DropdownField-CdBamLDl.js";import"./isEqual-CdJIThGs.js";import"./withOsdkMetrics-CZrqSehW.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
