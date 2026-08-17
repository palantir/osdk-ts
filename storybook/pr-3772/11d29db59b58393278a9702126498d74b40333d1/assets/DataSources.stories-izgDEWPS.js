import{j as r}from"./iframe-BFuSGtb4.js";import{O as b}from"./object-table-DIDlqmGN.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-3yRhxw7T.js";import{u as g}from"./useOsdkClient-CmlJgVuI.js";import"./preload-helper-vKgnz1L2.js";import"./Table-D_tIUI_h.js";import"./index-BvJhM8Nl.js";import"./Dialog-Ba75vVzI.js";import"./cross-BgMco_KD.js";import"./svgIconContainer-BjNM3mFN.js";import"./useBaseUiId-r6vSLRg9.js";import"./InternalBackdrop-D7Zjn0JH.js";import"./composite-B2dxckkZ.js";import"./index-C9p7LPrR.js";import"./index-DuqoT3Af.js";import"./index-CtKwAVJH.js";import"./useEventCallback-b3jrFQtV.js";import"./SkeletonBar-C5xn974V.js";import"./LoadingCell-z1RIh6FB.js";import"./ColumnConfigDialog-8XqN-0j6.js";import"./DraggableList-BnOKpmts.js";import"./search-CmZO1BAH.js";import"./Input-2D_wjpim.js";import"./useControlled-HR5zxcvB.js";import"./Button-B6iuwea3.js";import"./small-cross-DyS1PJUB.js";import"./ActionButton-BodBsvDl.js";import"./Checkbox-hwN15EQ0.js";import"./useValueChanged-svOgCIYj.js";import"./CollapsiblePanel-BE3lHqTd.js";import"./MultiColumnSortDialog-CRH8YgbT.js";import"./MenuTrigger-B9gdjT_B.js";import"./CompositeItem-CfQdryXv.js";import"./ToolbarRootContext-infwX91F.js";import"./getDisabledMountTransitionStyles-AfkUr7I7.js";import"./getPseudoElementBounds-DFBrl2s7.js";import"./chevron-down-B0DZKVpj.js";import"./index-D9SzM9i_.js";import"./error-Cd0VNhT4.js";import"./BaseCbacBanner-DWkxryeY.js";import"./makeExternalStore-B3u7TgQ1.js";import"./Tooltip-BHcAgbri.js";import"./PopoverPopup-CUYl0njo.js";import"./debounce-kGXPhJ8y.js";import"./tick-D5bi3_r5.js";import"./DropdownField-DQ6QS32M.js";import"./isEqual-BmzUKNpD.js";import"./withOsdkMetrics-CJ-ARXZP.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
