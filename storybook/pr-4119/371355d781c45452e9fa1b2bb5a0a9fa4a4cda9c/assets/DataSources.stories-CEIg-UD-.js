import{j as r}from"./iframe-CrH6Yrlk.js";import{O as b}from"./object-table-BPcfv3yy.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CqjNipEr.js";import{u as g}from"./useOsdkClient-JKeEr8fH.js";import"./preload-helper-DWN1nqfF.js";import"./Table-CW_7u1wJ.js";import"./index-BLeB2LZ4.js";import"./Dialog-B2Toa9ee.js";import"./cross-Djpe7veO.js";import"./svgIconContainer-BOBFAYEP.js";import"./useBaseUiId-DxKrUPMo.js";import"./InternalBackdrop-tytdnIli.js";import"./composite-ffO3RfE4.js";import"./index-Dnjnym33.js";import"./index-BXkTUwMI.js";import"./index-DJX0kPHb.js";import"./useEventCallback-Df7dMb-i.js";import"./SkeletonBar-BggMzaAo.js";import"./LoadingCell-AZ9SDyIy.js";import"./ColumnConfigDialog-B63qw4h6.js";import"./DraggableList-4ck5OTAl.js";import"./search-C_RAyaII.js";import"./Input-CO-EhnoV.js";import"./useControlled-BHyUcUtS.js";import"./Button-ChVjuzMV.js";import"./small-cross-Cp0wS207.js";import"./ActionButton-CAVnXpdM.js";import"./Checkbox-Dq_71KbB.js";import"./useValueChanged-C8WmnglJ.js";import"./CollapsiblePanel-CNe4nG1I.js";import"./MultiColumnSortDialog-BeVa_ST7.js";import"./MenuTrigger-CVFoNL-1.js";import"./CompositeItem-BB8cOYaX.js";import"./ToolbarRootContext-BfVZ25NV.js";import"./getDisabledMountTransitionStyles-LOYR3VUX.js";import"./getPseudoElementBounds-ZRt3Q6Bd.js";import"./chevron-down-Do4cSabx.js";import"./index-ow98vrD3.js";import"./error-Bb5TXnmt.js";import"./BaseCbacBanner-C8xIu8HD.js";import"./makeExternalStore-CiLIO8iU.js";import"./Tooltip-DRTjcE2d.js";import"./PopoverPopup-BR1F8fHw.js";import"./debounce-rtZgYy1G.js";import"./tick-CQI3-0jK.js";import"./DropdownField-1LHzPopr.js";import"./isEqual-Df-8D6e-.js";import"./withOsdkMetrics-B1PE_2r3.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
