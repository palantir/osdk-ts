import{j as r}from"./iframe-ChtCM8dE.js";import{O as b}from"./object-table-lEWKrBl-.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CC1ef1rC.js";import{u as g}from"./useOsdkClient-B5IwJgMz.js";import"./preload-helper-Cmiw_6tL.js";import"./Table-Fo14aNVc.js";import"./index-uT5HIxUp.js";import"./Dialog-WNRQFbDj.js";import"./cross-Cx7UUYd1.js";import"./svgIconContainer-B0Hb1RBl.js";import"./useBaseUiId-BlvSRiC6.js";import"./InternalBackdrop-B9QtOURg.js";import"./composite-B9COiNPT.js";import"./index-Pe_luz3n.js";import"./index-B31cE8Rp.js";import"./index-BxGNaB71.js";import"./useEventCallback-BwYTBeHy.js";import"./SkeletonBar-BNPeEFnR.js";import"./LoadingCell-BYM8Oqmt.js";import"./ColumnConfigDialog-BfWqmt5e.js";import"./DraggableList-C6aYaLko.js";import"./search-NDA-MaEJ.js";import"./Input-CiDCxeu9.js";import"./useControlled-hlF0PwpK.js";import"./Button-CY6Mleoh.js";import"./small-cross-9UuSLKex.js";import"./ActionButton-DCP5cEeb.js";import"./Checkbox-IMcR4fv8.js";import"./useValueChanged-CTkt07aq.js";import"./CollapsiblePanel-DEfmw082.js";import"./MultiColumnSortDialog-B6ximbEt.js";import"./MenuTrigger-C09kElrQ.js";import"./CompositeItem-DamdrYTg.js";import"./ToolbarRootContext-D57ExyiR.js";import"./getDisabledMountTransitionStyles-B73YPMyD.js";import"./getPseudoElementBounds-bHysKEfO.js";import"./chevron-down-9ZFNeU84.js";import"./index-BcIK4VrX.js";import"./error-C3rrhmyZ.js";import"./BaseCbacBanner-CgvRJ2b5.js";import"./makeExternalStore-CrEYLMCO.js";import"./Tooltip-DfOSlZk9.js";import"./PopoverPopup-BYkXE_FS.js";import"./debounce-BwEiO4_c.js";import"./tick-BBG2XDQr.js";import"./DropdownField-C9V2hn37.js";import"./isEqual-COlW-oiV.js";import"./withOsdkMetrics-DVdIQmET.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
