import{j as r}from"./iframe-DpUFwGwm.js";import{O as b}from"./object-table-CSsf7wx7.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-X4GtRQZ5.js";import{u as g}from"./useOsdkClient-Dec5bd1s.js";import"./preload-helper-D7G3iNMY.js";import"./Table-nlH2SQUj.js";import"./index-BRNwf_dL.js";import"./Dialog-aU2zLBm5.js";import"./cross-BOdVaiDd.js";import"./svgIconContainer-DnMlbACY.js";import"./useBaseUiId-BCiTIIVN.js";import"./InternalBackdrop-CcB5ZdVo.js";import"./composite-Cj7Gyck6.js";import"./index-ySwYaDEc.js";import"./index-DauVYyRU.js";import"./index-1ybkaqeD.js";import"./useEventCallback-C_1b83KE.js";import"./SkeletonBar-B7RRaHio.js";import"./LoadingCell-B0fS22kl.js";import"./ColumnConfigDialog-DPX5_-xD.js";import"./DraggableList-C_PZjvkP.js";import"./search-BkAszfZ6.js";import"./Input-B7COcDHt.js";import"./useControlled-raZDZG7g.js";import"./Button-DfSDbPeQ.js";import"./small-cross-B-9K90Gm.js";import"./ActionButton-DopPp6r9.js";import"./Checkbox-Bz7CDvbc.js";import"./useValueChanged-BVjsLDJ4.js";import"./CollapsiblePanel-DV0xAGpE.js";import"./MultiColumnSortDialog-zSQJj82d.js";import"./MenuTrigger-DUfBpM0w.js";import"./CompositeItem-CN8uA6ij.js";import"./ToolbarRootContext-DKuVgI34.js";import"./getDisabledMountTransitionStyles-DXafZfY4.js";import"./getPseudoElementBounds-C6e9H8MY.js";import"./chevron-down-CYVMAiKh.js";import"./index-B-mDfD20.js";import"./error-B3ctmJqj.js";import"./BaseCbacBanner-Ck2b17wK.js";import"./makeExternalStore-Cx_BHKOC.js";import"./Tooltip-DYGDXGf_.js";import"./PopoverPopup-EnybrYm9.js";import"./debounce-DchhwRiM.js";import"./tick-B9gaIQRk.js";import"./DropdownField-DmDMqc8s.js";import"./isEqual-BLIZs3oM.js";import"./withOsdkMetrics-D7Wb3D4v.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
