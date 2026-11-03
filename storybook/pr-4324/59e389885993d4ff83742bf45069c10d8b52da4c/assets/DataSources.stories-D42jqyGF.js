import{j as r}from"./iframe-Beajvbu-.js";import{O as b}from"./object-table-CuoJIEfJ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CuKR3B2m.js";import{u as g}from"./useOsdkClient-DkQyt0z3.js";import"./preload-helper-dZkoR4F_.js";import"./Table-CtvDlE9v.js";import"./index-AV0Zt5q4.js";import"./Dialog-DMm-bMz7.js";import"./cross-KOMA-dmo.js";import"./svgIconContainer-BOWvIcxU.js";import"./useBaseUiId-D9Gk7Ps8.js";import"./InternalBackdrop-CaxlX099.js";import"./composite-B77JxL2r.js";import"./index-DJbbiMo-.js";import"./index-DHfuPCUx.js";import"./index-CigOb2f9.js";import"./useEventCallback-BvQAVvQb.js";import"./SkeletonBar-DjvCRCop.js";import"./LoadingCell-DbRYftPe.js";import"./ColumnConfigDialog-5LIRF41O.js";import"./DraggableList-CZImoszn.js";import"./search-WL4FSHko.js";import"./Input-CusKMl7d.js";import"./useControlled-BgXewBwk.js";import"./Button-D4EG1oUS.js";import"./small-cross-CBKgWU-e.js";import"./ActionButton-RaZCtRc3.js";import"./Checkbox-CdIuKuvS.js";import"./useValueChanged-C6EHjupA.js";import"./CollapsiblePanel-DRA-iOzD.js";import"./MultiColumnSortDialog-Ck0ZUaLR.js";import"./MenuTrigger-BAbau4x_.js";import"./CompositeItem-Dxfd76IV.js";import"./ToolbarRootContext-DQCYszJ6.js";import"./getDisabledMountTransitionStyles-2F0S6DHA.js";import"./getPseudoElementBounds-BvsNaSZR.js";import"./chevron-down-BTZVhACL.js";import"./index-BEqze36e.js";import"./error-DahJGZf3.js";import"./BaseCbacBanner-CQ2IL9VX.js";import"./makeExternalStore-t469AycL.js";import"./Tooltip-C0_dK_lR.js";import"./PopoverPopup-CLmwgmKW.js";import"./debounce-DMOv5NrL.js";import"./tick-ByR4FmU5.js";import"./DropdownField-B3UK3okG.js";import"./isEqual-CPDtqAuK.js";import"./withOsdkMetrics-QZ1lgR_i.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
