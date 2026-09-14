import{j as r}from"./iframe-NlvaTXdz.js";import{O as b}from"./object-table-sckLgGSi.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CptP3k0u.js";import{u as g}from"./useOsdkClient-FuspldWR.js";import"./preload-helper-11218VAb.js";import"./Table-tpwkwsOf.js";import"./index-B0X1kouN.js";import"./Dialog-CbrM7LOV.js";import"./cross-3E2um-ab.js";import"./svgIconContainer-Dx3Wsu_D.js";import"./useBaseUiId-Cak_Gf6y.js";import"./InternalBackdrop-81BDBXVN.js";import"./composite-BVOO1HYh.js";import"./index-zA5UJtgN.js";import"./index-BKEieiUG.js";import"./index-CVSwwXpW.js";import"./useEventCallback-DIZPvIjV.js";import"./SkeletonBar-BEPts0M1.js";import"./LoadingCell-ByZgSJdg.js";import"./ColumnConfigDialog-5g3qFlze.js";import"./DraggableList-Dc8tW3gn.js";import"./search-JCoXnDaS.js";import"./Input-ec2719nZ.js";import"./useControlled-Dr03MbeI.js";import"./Button-Cj6didcq.js";import"./small-cross-9qxQlKft.js";import"./ActionButton-D2vkEZRA.js";import"./Checkbox-E09LMdpJ.js";import"./useValueChanged-DDbbsCD3.js";import"./CollapsiblePanel-DnncBNgb.js";import"./MultiColumnSortDialog-B5eU55ys.js";import"./MenuTrigger-CFUy_u8Y.js";import"./CompositeItem--ZMxCD0o.js";import"./ToolbarRootContext-BusYBQnb.js";import"./getDisabledMountTransitionStyles-DMxebDRk.js";import"./getPseudoElementBounds-CgEw87z9.js";import"./chevron-down-dfuDLNdx.js";import"./index-Cub9R0HW.js";import"./error-CV3Wyi-T.js";import"./BaseCbacBanner-BcV7RFqw.js";import"./makeExternalStore-BJZbhgwh.js";import"./Tooltip-Bu2sAhK0.js";import"./PopoverPopup-CVjAB-qP.js";import"./debounce-BGWK8YL4.js";import"./tick-DMWwchqI.js";import"./DropdownField-BOcDuARz.js";import"./isEqual-BdTIqhZC.js";import"./withOsdkMetrics-zr1-J277.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
