import{j as r}from"./iframe-CtNJDH5G.js";import{O as b}from"./object-table-B52x9VZ2.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CuyNUunH.js";import{u as g}from"./useOsdkClient-6noYeR_d.js";import"./preload-helper-B6Bov_yH.js";import"./Table-Dsg8rYNI.js";import"./index-z2XYq7ra.js";import"./Dialog-CDLtTXw8.js";import"./cross-BmTxvcx-.js";import"./svgIconContainer-C1uz_o6R.js";import"./useBaseUiId-2S0D4Wex.js";import"./InternalBackdrop-qjgvext-.js";import"./composite-B1yphZ5b.js";import"./index-BwJWoqxS.js";import"./index-DpRvis3c.js";import"./index-DSDVI0tN.js";import"./useEventCallback-D2_O1PtJ.js";import"./SkeletonBar-CAViw2Ph.js";import"./LoadingCell-C7DV2Dkh.js";import"./ColumnConfigDialog-CScSLge6.js";import"./DraggableList-CGR_3SSW.js";import"./search-JAqzsTe5.js";import"./Input-BTkkuHQL.js";import"./useControlled-CST_0_q3.js";import"./isEqual-Bvjnl5yW.js";import"./isObject-C2EW0xoh.js";import"./Button-Be9aku2m.js";import"./ActionButton-GN3WMfyu.js";import"./Checkbox-DMeMsCzD.js";import"./useValueChanged-CK9L4fih.js";import"./CollapsiblePanel--WvP7msJ.js";import"./MultiColumnSortDialog-CZB_vWa7.js";import"./MenuTrigger-c3igAaqW.js";import"./CompositeItem-rxULTRxY.js";import"./ToolbarRootContext-p83rW4-4.js";import"./getDisabledMountTransitionStyles-HPK60DLM.js";import"./getPseudoElementBounds-uqHOXtkO.js";import"./chevron-down-BDWvu0E4.js";import"./index-BgHP8oNq.js";import"./error-TzMVm4P5.js";import"./BaseCbacBanner-MPdW9-vk.js";import"./makeExternalStore-ZIQANtwN.js";import"./Tooltip-CFXn8FEX.js";import"./PopoverPopup-DiPuw5VV.js";import"./toNumber-CW-bxiXL.js";import"./tick-DlqKfDkY.js";import"./DropdownField-BMJj-U5h.js";import"./withOsdkMetrics-qjYcIJv8.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
