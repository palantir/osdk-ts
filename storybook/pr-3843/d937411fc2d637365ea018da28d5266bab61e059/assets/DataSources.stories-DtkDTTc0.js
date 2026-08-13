import{j as r}from"./iframe-D4PY-PnJ.js";import{O as b}from"./object-table-DpmToVs7.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DJ9vI7Sa.js";import{u as g}from"./useOsdkClient-D1yJRK_G.js";import"./preload-helper-01voB3Td.js";import"./Table-B3vWMM1P.js";import"./index-C3ze-A25.js";import"./Dialog-Zgls7Bxd.js";import"./cross-BCNCJ4zW.js";import"./svgIconContainer-BBFbqrO9.js";import"./useBaseUiId-CT5Nuzm7.js";import"./InternalBackdrop-1vKt8Vay.js";import"./composite-BW0oHWLe.js";import"./index-BmSitOna.js";import"./index-OJ7CE0nE.js";import"./index-WAJmZC5y.js";import"./useEventCallback-FrdIwkmw.js";import"./SkeletonBar-DdkRgmzO.js";import"./LoadingCell-DdSLSeFs.js";import"./ColumnConfigDialog-BBmjh2p4.js";import"./DraggableList-D8Qf2YDv.js";import"./search-DhGWTixT.js";import"./Input-DpVdAlwI.js";import"./useControlled-B0YZSF-a.js";import"./isEqual-xzqRc28g.js";import"./isObject-CWtFi4BZ.js";import"./Button-CRplF3wT.js";import"./ActionButton-BeCuIR_r.js";import"./Checkbox-C_rAo4wk.js";import"./useValueChanged-Csp7SvyO.js";import"./CollapsiblePanel-B5lJeWgz.js";import"./MultiColumnSortDialog-DQiVtXjC.js";import"./MenuTrigger-DW0TOV8C.js";import"./CompositeItem-C6S-nciI.js";import"./ToolbarRootContext-Dopp7FRe.js";import"./getDisabledMountTransitionStyles-v9LzkhPA.js";import"./getPseudoElementBounds-Cwc8lUx9.js";import"./chevron-down-D22F0u6Z.js";import"./index-1VGocKKR.js";import"./error-CsEWfIK9.js";import"./BaseCbacBanner-C4bkZKIf.js";import"./makeExternalStore-D4y_vvzd.js";import"./Tooltip-CkDFs6wN.js";import"./PopoverPopup-D3jFDXDL.js";import"./toNumber-1gZb9On-.js";import"./chevron-right-Cvh61v0W.js";import"./tick-BshIKwLK.js";import"./DropdownField-4Ot8i-6P.js";import"./withOsdkMetrics-CAIkKNTM.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};
