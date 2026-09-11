import{j as r}from"./iframe-C6LBpvuI.js";import{O as b}from"./object-table-CcXLtHpK.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DiDIf9sE.js";import{u as g}from"./useOsdkClient-AeGVvXbC.js";import"./preload-helper-D5MgSTAG.js";import"./Table-BeBUCyGA.js";import"./index-NiT3c2LR.js";import"./Dialog-kUY69VQz.js";import"./cross-_DiJsQ5N.js";import"./svgIconContainer-Bqb8q1fz.js";import"./useBaseUiId-D9K-3OOp.js";import"./InternalBackdrop-HhBDZuEq.js";import"./composite-CIL5RRbh.js";import"./index-CPv3k7C8.js";import"./index-DwcGPrXk.js";import"./index-CqMyNaRs.js";import"./useEventCallback-Wk0zbhyA.js";import"./SkeletonBar-BOpMWE3t.js";import"./LoadingCell-HYA-UBCw.js";import"./ColumnConfigDialog-Be7bd5l3.js";import"./DraggableList-XKOi4747.js";import"./search-CkHqN668.js";import"./Input-CYIsQ-Xl.js";import"./useControlled-35bEpDbg.js";import"./Button-DcSoFPNd.js";import"./small-cross-Ca0z12yL.js";import"./ActionButton-DvSfUpHb.js";import"./Checkbox-C9O8Ucdp.js";import"./useValueChanged-D_yZ0Mm1.js";import"./CollapsiblePanel-BArtnZVf.js";import"./MultiColumnSortDialog-DM5iE9d8.js";import"./MenuTrigger-C0vCR4Gx.js";import"./CompositeItem-Cmb1U36q.js";import"./ToolbarRootContext-DJRyp8mD.js";import"./getDisabledMountTransitionStyles-De_VSn36.js";import"./getPseudoElementBounds-CW1Mk6S7.js";import"./chevron-down-Bw9bT84C.js";import"./index-vMfLr8EK.js";import"./error-CGV30LyY.js";import"./BaseCbacBanner-DV1fw0IM.js";import"./makeExternalStore-qoO0AqK1.js";import"./Tooltip-Bz3b9lQY.js";import"./PopoverPopup-DeYL1cwn.js";import"./debounce-Bq6Y-sFM.js";import"./tick-BwKNHXqA.js";import"./DropdownField-BxCBScnI.js";import"./isEqual-7tmA05Zq.js";import"./withOsdkMetrics-Dgn4gd8E.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
