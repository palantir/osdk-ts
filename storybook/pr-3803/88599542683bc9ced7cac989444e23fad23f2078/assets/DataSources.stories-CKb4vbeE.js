import{j as r}from"./iframe-DNE97pGZ.js";import{O as b}from"./object-table-Ch4_sTh9.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Y520gR_B.js";import{u as g}from"./useOsdkClient-BrXtYIpC.js";import"./preload-helper-BahKFp3m.js";import"./Table-BD9ncpKN.js";import"./index-Bp-5OsF-.js";import"./Dialog-Cm_ILZ3B.js";import"./cross-Dx5ZxZuM.js";import"./svgIconContainer-CRfNt06m.js";import"./useBaseUiId-Cp65BJC6.js";import"./InternalBackdrop-BxL756Oz.js";import"./composite-CzLwjv4f.js";import"./index-Dp0A1Fy8.js";import"./index-D5b6Elzx.js";import"./index-BAUv7mXt.js";import"./useEventCallback-BaQLMphi.js";import"./SkeletonBar-Co-Wxcoj.js";import"./LoadingCell-BBXYQi2G.js";import"./ColumnConfigDialog-BJA0l5H2.js";import"./DraggableList-CwyZFsMX.js";import"./search-BNuo8zTf.js";import"./Input-BzjIqYHe.js";import"./useControlled-B0ujXEQq.js";import"./isEqual-D4o4vl7l.js";import"./isObject-DMCyQLYZ.js";import"./Button-DHAmSgJm.js";import"./ActionButton-C282nnu4.js";import"./Checkbox-DhzT-hSX.js";import"./useValueChanged-CY7hmMGH.js";import"./CollapsiblePanel-BcSoQpGZ.js";import"./MultiColumnSortDialog-Cy2FrPls.js";import"./MenuTrigger-CW7TDS3C.js";import"./CompositeItem-Bs6wEv0j.js";import"./ToolbarRootContext-DBqoJQeM.js";import"./getDisabledMountTransitionStyles-DrWPn2zD.js";import"./getPseudoElementBounds-BeRBlX2G.js";import"./chevron-down-DzX2K_Xp.js";import"./index-BrQsf66R.js";import"./error-Cc9LB0hd.js";import"./BaseCbacBanner-aK3rWsBf.js";import"./makeExternalStore-BUUHdmfH.js";import"./Tooltip-1mDazhLH.js";import"./PopoverPopup-XyeYTvL6.js";import"./toNumber-CL_SRDQ3.js";import"./tick-DKvNgte2.js";import"./DropdownField-BkAFc6vL.js";import"./withOsdkMetrics-B6lPkcGy.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
