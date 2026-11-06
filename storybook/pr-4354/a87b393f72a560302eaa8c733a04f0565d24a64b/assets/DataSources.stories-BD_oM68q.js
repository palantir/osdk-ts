import{j as r}from"./iframe-CMoZd53O.js";import{O as b}from"./object-table-B64XDPLb.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CfYKqiTT.js";import{u as g}from"./useOsdkClient-Bd2KZ-42.js";import"./preload-helper-Bvb7-fL5.js";import"./Table-D89PqbJQ.js";import"./index-BRB1GWD7.js";import"./Dialog-DxzEyTMa.js";import"./cross-CaFf6aAK.js";import"./svgIconContainer-SBUhRCLt.js";import"./useBaseUiId-Qhb38DP0.js";import"./InternalBackdrop-CI4NflJZ.js";import"./composite-ltKATKpa.js";import"./index-D19nvIzc.js";import"./index-C8cm2zeY.js";import"./index-r2odiPSn.js";import"./useEventCallback-DmmmsQD4.js";import"./SkeletonBar-Bb_eLXH3.js";import"./LoadingCell-3HVcMKXE.js";import"./ColumnConfigDialog-BQ4r2gKD.js";import"./DraggableList-qUW-lzdm.js";import"./search-DX4bcztW.js";import"./Input-M24j8YBw.js";import"./useControlled-BxfFaTP6.js";import"./Button-BA8xBSZI.js";import"./small-cross-DxRqsWYU.js";import"./ActionButton-Da5m8m-t.js";import"./Checkbox-C8ThQ8oz.js";import"./useValueChanged-DM2V32Pl.js";import"./CollapsiblePanel-Dd0lgXNb.js";import"./MultiColumnSortDialog-BJ6kBSXR.js";import"./MenuTrigger-x8kLwg7c.js";import"./CompositeItem-Djz6OTaL.js";import"./ToolbarRootContext-dQ-vGvin.js";import"./getDisabledMountTransitionStyles-Dcud9JWR.js";import"./getPseudoElementBounds-D2DVxAFX.js";import"./chevron-down-BCXbJ6WN.js";import"./index-fQcFOjTC.js";import"./error-CjE7xCZl.js";import"./BaseCbacBanner-vACh-Wv-.js";import"./makeExternalStore-BA3QwJHc.js";import"./Tooltip-Bop0VDhD.js";import"./isObject-CebNioKg.js";import"./debounce-Dcl3ILN3.js";import"./tick-Fvi9O2LX.js";import"./DropdownField-BmedYyFU.js";import"./isEqual-WnOi-718.js";import"./_baseIsEqual-FpV28sjW.js";import"./withOsdkMetrics-DG_FiXeR.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
