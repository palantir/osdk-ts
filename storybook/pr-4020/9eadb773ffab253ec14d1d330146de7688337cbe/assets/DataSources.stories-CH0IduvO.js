import{j as r}from"./iframe-DwHN39Jj.js";import{O as b}from"./object-table-DffhlyGO.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Cr7tupQf.js";import{u as g}from"./useOsdkClient-C2Vmxc_K.js";import"./preload-helper-TQIKMTBe.js";import"./Table-wolDvqJe.js";import"./index-Bnvv13O1.js";import"./Dialog-BBNsESMo.js";import"./cross-DiSoPuVQ.js";import"./svgIconContainer-D3xSNEvE.js";import"./useBaseUiId-BuiLz8Kz.js";import"./InternalBackdrop-Ct27ouGs.js";import"./composite-BHUO4-On.js";import"./index-yATLLLgy.js";import"./index-DdofC8Tl.js";import"./index-BCjzN-kH.js";import"./useEventCallback-Dgfv8zRH.js";import"./SkeletonBar-B2OK7PfD.js";import"./LoadingCell-DREadf8T.js";import"./ColumnConfigDialog-CHJeGomQ.js";import"./DraggableList-BkZnJPMZ.js";import"./search-60c5efTm.js";import"./Input-C40ac1xS.js";import"./useControlled-B5wlEGdC.js";import"./Button-BYP0P9Ib.js";import"./small-cross-DyCNle2m.js";import"./ActionButton-DjDKHZFu.js";import"./Checkbox-BSX5bz10.js";import"./useValueChanged-2oQS-uEU.js";import"./CollapsiblePanel-D9qMD8XV.js";import"./MultiColumnSortDialog-PDW2qhn_.js";import"./MenuTrigger-DTllJkLA.js";import"./CompositeItem-BQu1HqMn.js";import"./ToolbarRootContext-C0072MJ6.js";import"./getDisabledMountTransitionStyles-BgNKG7FQ.js";import"./getPseudoElementBounds-D0-vuA8S.js";import"./chevron-down-DzHcaasw.js";import"./index-st8A3vYR.js";import"./error-B0Y2Fvc9.js";import"./BaseCbacBanner-B6x908m9.js";import"./makeExternalStore-DbPOioRC.js";import"./Tooltip-BQlEvxbG.js";import"./PopoverPopup-Bogu5QY8.js";import"./debounce-B2i6LMnR.js";import"./tick-TwV86bBe.js";import"./DropdownField-DQTgwTYN.js";import"./isEqual-DuJXPvSG.js";import"./withOsdkMetrics-CvR6KWeT.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
