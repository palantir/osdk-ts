import{j as r}from"./iframe-Csm-gXDM.js";import{O as b}from"./object-table-qsvVYomC.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D3mCdSen.js";import{u as g}from"./useOsdkClient-D66R8lyo.js";import"./preload-helper-B2pQoQF5.js";import"./Table-HXI6QEIq.js";import"./index-DSOkxNmo.js";import"./Dialog-CckVRK8t.js";import"./cross-D5yi1h_k.js";import"./svgIconContainer-D8CdVdTF.js";import"./useBaseUiId-BvtcsR9k.js";import"./InternalBackdrop-PYXL4FuF.js";import"./composite-Cd3ThWKg.js";import"./index-D8ourLLB.js";import"./index-DK8dF11E.js";import"./index-Bz_Scb7W.js";import"./useEventCallback-C21WKomU.js";import"./SkeletonBar-ExHoWVim.js";import"./LoadingCell-BCEMfVaW.js";import"./ColumnConfigDialog-C39UVoTn.js";import"./DraggableList-Ccj7NtyF.js";import"./search-BWu2Apub.js";import"./Input-CmyNmn-U.js";import"./useControlled-DlN8ExsH.js";import"./Button-D7cNt94b.js";import"./small-cross-TUSxa0rW.js";import"./ActionButton-D_Y5O8mn.js";import"./Checkbox-a5A6rPqQ.js";import"./useValueChanged-ARdcJoaj.js";import"./CollapsiblePanel-BL19iTTX.js";import"./MultiColumnSortDialog-B-vdD6yG.js";import"./MenuTrigger-B6OZlMQ0.js";import"./CompositeItem-BGdHymE8.js";import"./ToolbarRootContext-6VqAIkkQ.js";import"./getDisabledMountTransitionStyles-f3cbN-9y.js";import"./getPseudoElementBounds-DF7dHhi1.js";import"./chevron-down-K33gEoQm.js";import"./index-VPVf3Zil.js";import"./error-ptWpun4u.js";import"./BaseCbacBanner-CVh7jwjd.js";import"./makeExternalStore-DYZ91XmC.js";import"./Tooltip-CYtmaZF0.js";import"./PopoverPopup-CN55iEhH.js";import"./debounce-BWlbUKap.js";import"./tick-D0oIP5GF.js";import"./DropdownField-C6s4GoHW.js";import"./isEqual-Cc-7thO7.js";import"./withOsdkMetrics-BGSXyq-B.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
