import{j as r}from"./iframe-CwsgVFCh.js";import{O as b}from"./object-table-C338F0bO.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B5Qlev3E.js";import{u as g}from"./useOsdkClient-C7m-TFMr.js";import"./preload-helper-CFSh68y9.js";import"./Table-DcT1TpTg.js";import"./index-5CttHDeo.js";import"./Dialog-Bt_1mYPz.js";import"./cross-BQFX_VX8.js";import"./svgIconContainer--s4psY3b.js";import"./useBaseUiId-D1XXa7jM.js";import"./InternalBackdrop-BYzrstKF.js";import"./composite-Db_ix37N.js";import"./index-a2I8F2uY.js";import"./index-D0vP1fQ0.js";import"./index-TPNwtvZJ.js";import"./useEventCallback-DyJVdp0X.js";import"./SkeletonBar-CinRKwk8.js";import"./LoadingCell-C68LxTQT.js";import"./ColumnConfigDialog-DzEv6HHg.js";import"./DraggableList-BCv3SQ5l.js";import"./search-DAKGrLou.js";import"./Input-B-wPEXqD.js";import"./useControlled-CqLyQtsI.js";import"./Button-BSlSVUqe.js";import"./small-cross-BDslcscW.js";import"./ActionButton-DkVTFO3n.js";import"./Checkbox-Dh8iT8_Q.js";import"./useValueChanged-D7ydevuv.js";import"./CollapsiblePanel-Cw7sZI2N.js";import"./MultiColumnSortDialog-CZjB73DR.js";import"./MenuTrigger-C5d97H-v.js";import"./CompositeItem-DIa4PUtj.js";import"./ToolbarRootContext-Dw0uD7co.js";import"./getDisabledMountTransitionStyles-C_NRg-Tj.js";import"./getPseudoElementBounds-DpaMjhZC.js";import"./chevron-down-BMdcdoDb.js";import"./index-qogJWmY0.js";import"./error-CmS0UiVl.js";import"./BaseCbacBanner-C-IUGGMI.js";import"./makeExternalStore-Dc3Ewax5.js";import"./Tooltip-XPKwMzcZ.js";import"./PopoverPopup-BIZlm-w6.js";import"./debounce-Chi5i-8k.js";import"./tick-Dx_dQdyQ.js";import"./DropdownField-FtqUvMk5.js";import"./isEqual-C5Sf6OVH.js";import"./withOsdkMetrics-aGd8eMoT.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
