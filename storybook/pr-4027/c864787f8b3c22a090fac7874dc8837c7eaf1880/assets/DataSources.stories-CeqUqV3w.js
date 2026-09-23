import{j as r}from"./iframe-Cmp4Wz_P.js";import{O as b}from"./object-table-BPdeyYsH.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-kjA2dV0U.js";import{u as g}from"./useOsdkClient-fBoD-PC4.js";import"./preload-helper-Da0vPE9s.js";import"./Table-DNUmj-uA.js";import"./index-xjnGmoVb.js";import"./Dialog-DuVE7T5Z.js";import"./cross-Cpc_V52N.js";import"./svgIconContainer-Clw7VTOr.js";import"./useBaseUiId-BcNPDCTs.js";import"./InternalBackdrop-eb4yl9Hp.js";import"./composite-hwQ1nQqf.js";import"./index-DCv1fgBH.js";import"./index-C0uAgYnw.js";import"./index-CoENTDGw.js";import"./useEventCallback-DuquQoKZ.js";import"./SkeletonBar-DFEJB6KG.js";import"./LoadingCell-DRsdLwys.js";import"./ColumnConfigDialog-BnFADnlc.js";import"./DraggableList-YiYJFEtj.js";import"./search-DwQ9m9I4.js";import"./Input-Dxt6Zigl.js";import"./useControlled-CRN5n83g.js";import"./Button-CjafA2QB.js";import"./small-cross-DEp431Nj.js";import"./ActionButton-BC90jPtT.js";import"./Checkbox-CgFZ_Aad.js";import"./useValueChanged-DQAltEsb.js";import"./CollapsiblePanel-DSx0PiCY.js";import"./MultiColumnSortDialog-CJP6cm7P.js";import"./MenuTrigger--u72VZFy.js";import"./CompositeItem-CC2Ai5yy.js";import"./ToolbarRootContext-_b46dMtv.js";import"./getDisabledMountTransitionStyles-CSh_Lmpf.js";import"./getPseudoElementBounds-BZ5_UdIs.js";import"./chevron-down-DQjw3lMC.js";import"./index-DLqh48ip.js";import"./error-BUufFz3W.js";import"./BaseCbacBanner-BhaFZekH.js";import"./makeExternalStore-C1wNmiU_.js";import"./Tooltip-DCubWUo4.js";import"./PopoverPopup-qOkFvw8W.js";import"./debounce-eMFzGMlT.js";import"./tick-CevBPgG7.js";import"./DropdownField-dSwdlAau.js";import"./isEqual-Cb-GYmP-.js";import"./withOsdkMetrics-t52t2MsY.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
