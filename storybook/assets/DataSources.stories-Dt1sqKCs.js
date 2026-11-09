import{j as r}from"./iframe-YacpH74x.js";import{O as b}from"./object-table-CzLcdutJ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Cw1ow4jB.js";import{u as g}from"./useOsdkClient-BV0fBL9y.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-2LzXwrqd.js";import"./index-BEoxUJoA.js";import"./Dialog-DCpNjqMS.js";import"./cross-CMJXQf2R.js";import"./svgIconContainer-BUTn-dCB.js";import"./useBaseUiId-4SFOUSCG.js";import"./InternalBackdrop-DDtJr629.js";import"./composite-DelgFzsG.js";import"./index-C1Y9ReN9.js";import"./index-LgDXHTpd.js";import"./index-1dtThzIn.js";import"./useEventCallback-DDDkCV7z.js";import"./SkeletonBar-BBSYPOGa.js";import"./LoadingCell-DWVtc3pf.js";import"./ColumnConfigDialog-DA6q_x97.js";import"./DraggableList-DBygpyD8.js";import"./search-BkFAurUd.js";import"./Input-CU1bZoi8.js";import"./useControlled-CNlO3TEz.js";import"./Button-CZyYceU0.js";import"./small-cross-REHTtvDB.js";import"./ActionButton-DUE8wiZa.js";import"./Checkbox-D0RH7vMl.js";import"./useValueChanged-BoESC3Qa.js";import"./CollapsiblePanel-DjUqTnvZ.js";import"./MultiColumnSortDialog-CQ-vPwoW.js";import"./MenuTrigger-lR-8lec2.js";import"./CompositeItem-T4MrQSqM.js";import"./ToolbarRootContext-BntDugl_.js";import"./getDisabledMountTransitionStyles-B7EUIZcg.js";import"./getPseudoElementBounds-CG4o1vUb.js";import"./chevron-down-Ce1omtAP.js";import"./index-D-e4FuV7.js";import"./error-D9NpDKzr.js";import"./BaseCbacBanner-9NQw6BEw.js";import"./makeExternalStore-wqA1Cewh.js";import"./Tooltip-B6tb3JER.js";import"./isObject-WXcao9eA.js";import"./debounce-B9DyVsKD.js";import"./tick-GVLywL7s.js";import"./DropdownField-v0enRbIn.js";import"./isEqual-CRPrjyFp.js";import"./_baseIsEqual-DTo6H5VA.js";import"./withOsdkMetrics-nLoJ6ux7.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
