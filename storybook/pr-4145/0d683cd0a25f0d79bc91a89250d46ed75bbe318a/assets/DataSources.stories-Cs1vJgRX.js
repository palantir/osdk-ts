import{j as r}from"./iframe-D4DE_xCy.js";import{O as b}from"./object-table-g6VGtRMd.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CtXTVDrN.js";import{u as g}from"./useOsdkClient-Dq4Nep3C.js";import"./preload-helper-B6-3aPT9.js";import"./Table-EWARVZic.js";import"./index-D326T4JO.js";import"./Dialog-BF6fe3fI.js";import"./cross-DXk5c3Hx.js";import"./svgIconContainer-jzN4JDBP.js";import"./useBaseUiId-BXESL0ei.js";import"./InternalBackdrop-LoBq40Ym.js";import"./composite-Dnv2BJfH.js";import"./index-DjBeJPFN.js";import"./index-DpB5XU9M.js";import"./index-BGyff1g6.js";import"./useEventCallback-Z4zWj0DE.js";import"./SkeletonBar-DOfR0REZ.js";import"./LoadingCell-Cp8Oh-gF.js";import"./ColumnConfigDialog-DmmOy8gz.js";import"./DraggableList-BT3g7YEB.js";import"./search-DMWfSMTs.js";import"./Input-BdkDXHFP.js";import"./useControlled-C35ONjfY.js";import"./Button-ByxF5usp.js";import"./small-cross-CNDGm87l.js";import"./ActionButton-D5oyS5dM.js";import"./Checkbox-BwYysanO.js";import"./useValueChanged-f4hwQLIJ.js";import"./CollapsiblePanel-A6BmXTdr.js";import"./MultiColumnSortDialog-kRefOv0N.js";import"./MenuTrigger-CNPytmAJ.js";import"./CompositeItem-Dl-hENiN.js";import"./ToolbarRootContext-DpJnwIQq.js";import"./getDisabledMountTransitionStyles-BKMXDL5b.js";import"./getPseudoElementBounds-mvlACyB9.js";import"./chevron-down-9HoUrmLz.js";import"./index-CVC749TS.js";import"./error-BbjQgfT9.js";import"./BaseCbacBanner-DrmZ6hu-.js";import"./makeExternalStore-BrutYjE5.js";import"./Tooltip-BR6r3LZL.js";import"./PopoverPopup-s43YRtvQ.js";import"./debounce-zunEXKGq.js";import"./tick-BC_4-l9I.js";import"./DropdownField-CN5yaMV7.js";import"./isEqual-Bh_n2tIz.js";import"./withOsdkMetrics-DNRznGfV.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
