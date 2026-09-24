import{j as r}from"./iframe-CWCaAWug.js";import{O as b}from"./object-table-DNhheKF7.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DOgjFED7.js";import{u as g}from"./useOsdkClient-BEPV8xbi.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-D7PEFPsb.js";import"./index-BCUxEitH.js";import"./Dialog-D0tQayuO.js";import"./cross-DIjpr0JB.js";import"./svgIconContainer-B05glsOt.js";import"./useBaseUiId-BW_UtI62.js";import"./InternalBackdrop-T6iq9MEL.js";import"./composite-BR9g6bcx.js";import"./index-BWfbtsx7.js";import"./index-j1R37CPf.js";import"./index-BU_p4HZd.js";import"./useEventCallback-BlDNNPjw.js";import"./SkeletonBar-AwAWP3QT.js";import"./LoadingCell-DGngu3K1.js";import"./ColumnConfigDialog-qTe30KBW.js";import"./DraggableList-DUGUB3sg.js";import"./search-CqQdgI04.js";import"./Input-BfCxIW-2.js";import"./useControlled-BTf1PsUt.js";import"./Button-DiqPmqG4.js";import"./small-cross-BB4Y9Jap.js";import"./ActionButton-DMHzSnUh.js";import"./Checkbox-3wkD7hFA.js";import"./useValueChanged-BEwxMfrB.js";import"./CollapsiblePanel-CahaDsZJ.js";import"./MultiColumnSortDialog-CSXBKDEz.js";import"./MenuTrigger-DBWzCSvu.js";import"./CompositeItem-DoJwIv2T.js";import"./ToolbarRootContext-BlDQXh6V.js";import"./getDisabledMountTransitionStyles-2GoPE3mv.js";import"./getPseudoElementBounds-DBJhYukF.js";import"./chevron-down-TdN2wngs.js";import"./index-BctpQ9zM.js";import"./error-B3tx7_Th.js";import"./BaseCbacBanner-7JilAzUJ.js";import"./makeExternalStore-DuyB91Wg.js";import"./Tooltip-CYwiJioN.js";import"./PopoverPopup-BMHfvJBq.js";import"./debounce-Cn_0io8o.js";import"./tick-C2bp2J2X.js";import"./DropdownField-BfsjfsE0.js";import"./isEqual-CuLZYDbS.js";import"./withOsdkMetrics-IvetZHLX.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
