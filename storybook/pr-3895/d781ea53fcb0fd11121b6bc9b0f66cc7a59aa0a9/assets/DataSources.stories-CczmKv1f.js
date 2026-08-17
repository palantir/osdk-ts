import{j as r}from"./iframe-j08fV6dz.js";import{O as b}from"./object-table-D0aqCmoe.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CbWZoXVV.js";import{u as g}from"./useOsdkClient-DBxZJFUJ.js";import"./preload-helper-BGl13g2I.js";import"./Table-DGpvKX3S.js";import"./index-CWHssFJB.js";import"./Dialog-Bx1tL4sT.js";import"./cross-CoN6-ekW.js";import"./svgIconContainer-YCYSEUhp.js";import"./useBaseUiId-CplXrATv.js";import"./InternalBackdrop-DZLfLAx9.js";import"./composite-D8eTqwE5.js";import"./index-C5nt5hOV.js";import"./index-kp1WZsxE.js";import"./index-Bq-uEYwJ.js";import"./useEventCallback-B4fw5bnT.js";import"./SkeletonBar-D7gl1oaW.js";import"./LoadingCell-QeinshAp.js";import"./ColumnConfigDialog-DC855AY_.js";import"./DraggableList-BabylKSA.js";import"./search-ClQdTzkO.js";import"./Input-DhrpnbAE.js";import"./useControlled-CHR2SRbk.js";import"./Button-DpHwku46.js";import"./small-cross-B4PHUogj.js";import"./ActionButton-BEQq70gP.js";import"./Checkbox-DO2v6AWI.js";import"./useValueChanged-DtEqK2bI.js";import"./CollapsiblePanel-BooDUqDc.js";import"./MultiColumnSortDialog-CzL3h7dk.js";import"./MenuTrigger-DjCmUySM.js";import"./CompositeItem-BGXPo5gO.js";import"./ToolbarRootContext-CtzwSIgo.js";import"./getDisabledMountTransitionStyles-CBnNedNN.js";import"./getPseudoElementBounds-Bdf_5u_d.js";import"./chevron-down-Doe0Cvk6.js";import"./index-DHqM0ir-.js";import"./error-D_bwL8by.js";import"./BaseCbacBanner-CPz003VT.js";import"./makeExternalStore-D_d4tJsc.js";import"./Tooltip-C6gafiZv.js";import"./PopoverPopup-DBdryem6.js";import"./debounce-DRljlDql.js";import"./tick-DOh48VMM.js";import"./DropdownField-B_PRVOpm.js";import"./isEqual-MzBwduGE.js";import"./withOsdkMetrics-d653yHww.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
