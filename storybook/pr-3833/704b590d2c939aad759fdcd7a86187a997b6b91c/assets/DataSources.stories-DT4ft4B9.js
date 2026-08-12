import{j as r}from"./iframe-CE9D4JEg.js";import{O as b}from"./object-table-J6bL-P4e.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CovUKXQh.js";import{u as g}from"./useOsdkClient-Aujm3-Il.js";import"./preload-helper-DZkFqKXe.js";import"./Table-5jH2bIn9.js";import"./index-CqAb3zQU.js";import"./Dialog-CDgqCLwb.js";import"./cross-CEfizOG4.js";import"./svgIconContainer-CzB6UxLW.js";import"./useBaseUiId-By_k7w7S.js";import"./InternalBackdrop-BOutezVR.js";import"./composite-D8GuK9Lq.js";import"./index-C8x2Wal6.js";import"./index-TKpJPc24.js";import"./index-D4tIaWwP.js";import"./useEventCallback-B_j4s6Cv.js";import"./SkeletonBar-DS0akx8X.js";import"./LoadingCell-DkEjHWfP.js";import"./ColumnConfigDialog-BvKTDTH8.js";import"./DraggableList-DoEE1uR1.js";import"./search-Bd6q-htL.js";import"./Input-CP1qtpJz.js";import"./useControlled-3ExL0cgK.js";import"./isEqual-DhHPnCYC.js";import"./isObject-CvU8D3uq.js";import"./Button-C41nBApG.js";import"./ActionButton-DTiUKEcJ.js";import"./Checkbox-Df3pitEk.js";import"./useValueChanged-BS0Dmr34.js";import"./CollapsiblePanel-D1FzsCIw.js";import"./MultiColumnSortDialog-BtVN3bJQ.js";import"./MenuTrigger-D9NVy_PN.js";import"./CompositeItem-CbXGTBfN.js";import"./ToolbarRootContext-BEi2Iys0.js";import"./getDisabledMountTransitionStyles-DvxCzkJC.js";import"./getPseudoElementBounds-Dsw-FRYL.js";import"./chevron-down-C7EWI--r.js";import"./index-BrXNTpWP.js";import"./error-CQamlZ8D.js";import"./BaseCbacBanner-BTdzruE_.js";import"./makeExternalStore-Dl3CPFxJ.js";import"./Tooltip-BRZH-K7d.js";import"./PopoverPopup-Bo5NYsVr.js";import"./toNumber-pBmfXEHq.js";import"./tick-CvGUey2M.js";import"./DropdownField-GrpqsGo0.js";import"./withOsdkMetrics-CFMrDZ49.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
