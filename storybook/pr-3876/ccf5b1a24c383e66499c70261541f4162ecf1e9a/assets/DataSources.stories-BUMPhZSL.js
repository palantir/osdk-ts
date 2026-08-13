import{j as r}from"./iframe-6Uhngy72.js";import{O as b}from"./object-table-C6Uj0Pkf.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DAX1741h.js";import{u as g}from"./useOsdkClient-TrnbRu4h.js";import"./preload-helper-BuO-Wqte.js";import"./Table-CWOOYgqj.js";import"./index-D6AVV8eE.js";import"./Dialog-Cp_zujfc.js";import"./cross-BcSy3qdU.js";import"./svgIconContainer-UGK0c4xl.js";import"./useBaseUiId-BRxptNv-.js";import"./InternalBackdrop-B6plQtwS.js";import"./composite-DJDJ56jv.js";import"./index-LZISWei8.js";import"./index-QHeoXjyH.js";import"./index-DUcYp8wh.js";import"./useEventCallback-55Jmx4oa.js";import"./SkeletonBar-DWJUdzHJ.js";import"./LoadingCell-C-pV1fqW.js";import"./ColumnConfigDialog-DTcG2XGs.js";import"./DraggableList-DCtihdtv.js";import"./search-BdfvUgnd.js";import"./Input-CofwDVZ0.js";import"./useControlled-DIt55qQJ.js";import"./Button-DCQ8ovOH.js";import"./small-cross-C_sErh76.js";import"./ActionButton-Bx3EdeP6.js";import"./Checkbox-B83JJ3kM.js";import"./useValueChanged-BiRQuPMj.js";import"./CollapsiblePanel-DYVVCbmI.js";import"./MultiColumnSortDialog-BsOrp9Qv.js";import"./MenuTrigger-BvyCd2a-.js";import"./CompositeItem-DLH8bcOo.js";import"./ToolbarRootContext-fpBVACf_.js";import"./getDisabledMountTransitionStyles-VHaa4rjf.js";import"./getPseudoElementBounds-vA5019Qs.js";import"./chevron-down-BwrGawkK.js";import"./index-CsXiYC9Y.js";import"./error-CxRJmZZd.js";import"./BaseCbacBanner-D6VOHJWP.js";import"./makeExternalStore-BQsPVGuf.js";import"./Tooltip-BUoyDTBb.js";import"./PopoverPopup-3cB-7Tot.js";import"./debounce-DVmaMtUt.js";import"./tick-BL3gPeuy.js";import"./DropdownField-DobyXSx1.js";import"./isEqual-BPJoJQWG.js";import"./withOsdkMetrics-Ca-0BTyV.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
