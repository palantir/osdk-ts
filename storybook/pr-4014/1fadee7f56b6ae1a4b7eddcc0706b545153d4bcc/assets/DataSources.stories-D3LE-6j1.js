import{j as r}from"./iframe-Ch3dDQ73.js";import{O as b}from"./object-table-BpQCrLuw.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BkZbZgoj.js";import{u as g}from"./useOsdkClient-BEOsOU0g.js";import"./preload-helper-Dt5E_MQT.js";import"./Table-bPK54u9G.js";import"./index-BPSQkvlq.js";import"./Dialog-Du7U6i8w.js";import"./cross-BwedcRbE.js";import"./svgIconContainer-DsDanRUJ.js";import"./useBaseUiId-BuMyPGEd.js";import"./InternalBackdrop-DnrpHvoH.js";import"./composite-79LVsM0Q.js";import"./index-CJDfC3kZ.js";import"./index-BcAKrfT8.js";import"./index-DvNjnhsf.js";import"./useEventCallback-DzSeWiWA.js";import"./SkeletonBar-DU3E93Ca.js";import"./LoadingCell-CJX5iyhd.js";import"./ColumnConfigDialog-Bk603sCJ.js";import"./DraggableList-DPPyeJcQ.js";import"./search-Dq24XcYb.js";import"./Input-CyFa-sRf.js";import"./useControlled-Uo30Ht4a.js";import"./Button-BdllNL1h.js";import"./small-cross-COqMeQyn.js";import"./ActionButton-Bq5mCozF.js";import"./Checkbox-Dkxayd1k.js";import"./useValueChanged-D8drAKML.js";import"./CollapsiblePanel-C-zvQjZV.js";import"./MultiColumnSortDialog-DdFD_LY1.js";import"./MenuTrigger-BW8bySv0.js";import"./CompositeItem-yRGsM-I0.js";import"./ToolbarRootContext-BL4WdLNX.js";import"./getDisabledMountTransitionStyles-BnreKSZO.js";import"./getPseudoElementBounds-aMC_66Nd.js";import"./chevron-down-DtSbmNQ9.js";import"./index-BVJ9nyHd.js";import"./error-C6gNYlkP.js";import"./BaseCbacBanner-DMvkn6aU.js";import"./makeExternalStore-9OgJXISf.js";import"./Tooltip-BdV_g6Rg.js";import"./PopoverPopup-CDUt_0V_.js";import"./debounce-Bj0CUW6Z.js";import"./tick-CdmQNoN2.js";import"./DropdownField-BwlReH7s.js";import"./isEqual-D4DZ3_5E.js";import"./withOsdkMetrics-D3LSYI9p.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
