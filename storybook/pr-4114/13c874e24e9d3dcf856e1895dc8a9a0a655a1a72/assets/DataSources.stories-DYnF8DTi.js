import{j as r}from"./iframe-BDrYxAnj.js";import{O as b}from"./object-table-BBe01rOp.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B1M6SyX-.js";import{u as g}from"./useOsdkClient-BlyxCpjB.js";import"./preload-helper-BbEpp3I7.js";import"./Table-D-vzxeIM.js";import"./index-BPEebEts.js";import"./Dialog-DPBerO6L.js";import"./cross-DN7w6x3L.js";import"./svgIconContainer-Ds5xgQa8.js";import"./useBaseUiId-CAXuqLAY.js";import"./InternalBackdrop-DWYHvnmi.js";import"./composite-DYyfkGU2.js";import"./index-BrKxc1O3.js";import"./index-7qmIIDvp.js";import"./index-CGlFVnJg.js";import"./useEventCallback-dV43fwqZ.js";import"./SkeletonBar-3MDKkZoz.js";import"./LoadingCell-CwbuJPcu.js";import"./ColumnConfigDialog-BTONJoiK.js";import"./DraggableList-CmS4ByL1.js";import"./search-bZxTGR19.js";import"./Input-C01z3l8s.js";import"./useControlled-BxTCkN_B.js";import"./Button-BXNKdTW4.js";import"./small-cross-BCuonOce.js";import"./ActionButton-Dt_BEibG.js";import"./Checkbox-Gd7yqC4V.js";import"./useValueChanged-BIKs48bW.js";import"./CollapsiblePanel-CSDsM7aL.js";import"./MultiColumnSortDialog-qJwWzLXC.js";import"./MenuTrigger-CWq-RERI.js";import"./CompositeItem-Bmk8s39S.js";import"./ToolbarRootContext-GKsQXXvO.js";import"./getDisabledMountTransitionStyles-CpLEVLsZ.js";import"./getPseudoElementBounds-BKXXIJ8q.js";import"./chevron-down-DSLDVHXx.js";import"./index-5OHDQhQD.js";import"./error-Bic94l6Q.js";import"./BaseCbacBanner-DIZLSVF8.js";import"./makeExternalStore-BknbLg4s.js";import"./Tooltip-F1ZDXICZ.js";import"./PopoverPopup-Du5q3SlO.js";import"./debounce-BunXjI-p.js";import"./tick-BobOfkxj.js";import"./DropdownField-c9rafbuP.js";import"./isEqual-DhVMvS_4.js";import"./withOsdkMetrics-O05I0Pm6.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
