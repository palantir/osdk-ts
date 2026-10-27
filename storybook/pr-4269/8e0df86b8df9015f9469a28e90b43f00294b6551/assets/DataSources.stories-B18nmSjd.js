import{j as r}from"./iframe-CSjrP8vI.js";import{O as b}from"./object-table-CT8zBU9b.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DpJUJNB2.js";import{u as g}from"./useOsdkClient-DS20s_-p.js";import"./preload-helper-Cx2hoj0m.js";import"./Table-Bz2vcI-y.js";import"./index-CqYglBD0.js";import"./Dialog-ebHFZ4K-.js";import"./cross-Ds3xYnVZ.js";import"./svgIconContainer-B7BQRztY.js";import"./useBaseUiId-DcgW2BGe.js";import"./InternalBackdrop-DRh1UujG.js";import"./composite-CAXBU4pD.js";import"./index-BedFYm95.js";import"./index-BN7bp0b2.js";import"./index-B4CwIOCa.js";import"./useEventCallback-CRfAaycK.js";import"./SkeletonBar-CUZm-PKw.js";import"./LoadingCell-CLME_5DX.js";import"./ColumnConfigDialog-CjkSAnDu.js";import"./DraggableList-DDDC3Ohe.js";import"./search-BM_j1Cww.js";import"./Input-DG23LIw2.js";import"./useControlled-W118GxB4.js";import"./Button-nWxTMLuc.js";import"./small-cross-B5v1tapE.js";import"./ActionButton-DYIYoWW6.js";import"./Checkbox-C9mjcyeE.js";import"./useValueChanged-Bqlwrqtn.js";import"./CollapsiblePanel-B6tadX4-.js";import"./MultiColumnSortDialog-DF0ODZMw.js";import"./MenuTrigger-BR3Xx0z3.js";import"./CompositeItem-C2wpcQLE.js";import"./ToolbarRootContext-Skd8opG_.js";import"./getDisabledMountTransitionStyles-Cc4xA-eS.js";import"./getPseudoElementBounds-D0jv3We1.js";import"./chevron-down-xJOpychc.js";import"./index-v62Ii5_v.js";import"./error-Du9W1yMi.js";import"./BaseCbacBanner-BzKHkrOU.js";import"./makeExternalStore-DptFAV08.js";import"./Tooltip-Cg04CKbW.js";import"./PopoverPopup-BsQv3X8u.js";import"./debounce-BFRee1ws.js";import"./tick-BEtFRrY5.js";import"./DropdownField-DG8Fepg7.js";import"./isEqual-D0FZ_3QJ.js";import"./withOsdkMetrics-sMcDJBip.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
