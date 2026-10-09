import{j as r}from"./iframe-DIQwlBGw.js";import{O as b}from"./object-table-B0kYPHpZ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DjO-0UMb.js";import{u as g}from"./useOsdkClient-DggWHq9a.js";import"./preload-helper-DCZh2qZU.js";import"./Table-BPo3rkv8.js";import"./index-BMg1YwPI.js";import"./Dialog-CLjd9I5R.js";import"./cross-D0qgRA8s.js";import"./svgIconContainer-nWXxjIgM.js";import"./useBaseUiId-mRekfqkE.js";import"./InternalBackdrop-C6DbQw29.js";import"./composite-B2M76Ume.js";import"./index-DtMGyB9I.js";import"./index-BuSKlV2e.js";import"./index-UQtK-RIQ.js";import"./useEventCallback-DxY1G1xy.js";import"./SkeletonBar-DVtZv4Je.js";import"./LoadingCell-Dqa7QJ7Z.js";import"./ColumnConfigDialog-BiMopCab.js";import"./DraggableList-9SOspmbc.js";import"./search-Tzmhdcy6.js";import"./Input-BemJFGwg.js";import"./useControlled-CIA12Xby.js";import"./Button-VL7ULnuX.js";import"./small-cross-D_-B7wlF.js";import"./ActionButton-xUfD7fn9.js";import"./Checkbox-BI1kwAKI.js";import"./useValueChanged-CKkyYd23.js";import"./CollapsiblePanel-BXhFX321.js";import"./MultiColumnSortDialog-ByVpX3ed.js";import"./MenuTrigger-B3Zw-U0E.js";import"./CompositeItem-D6nOF9ZG.js";import"./ToolbarRootContext-D5pzp3U-.js";import"./getDisabledMountTransitionStyles-CVqdgNzh.js";import"./getPseudoElementBounds-BT2tDun_.js";import"./chevron-down-Be7rb41D.js";import"./index-DjZsV1fi.js";import"./error-Bhb1P9AB.js";import"./BaseCbacBanner-D7HQfyCk.js";import"./makeExternalStore-C-tnPbL7.js";import"./Tooltip-DwcbeITg.js";import"./PopoverPopup-BXkqjOaY.js";import"./debounce-jcF6p9SO.js";import"./tick-sIrdoQr_.js";import"./DropdownField-33Sq78Ta.js";import"./isEqual-CTj4d5Eb.js";import"./withOsdkMetrics-CrDHFYla.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
