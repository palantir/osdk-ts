import{j as r}from"./iframe-CvJ7R438.js";import{O as b}from"./object-table-C-dXUROV.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B-s66diR.js";import{u as g}from"./useOsdkClient-QthKgn3A.js";import"./preload-helper-DIeUWadq.js";import"./Table-Bpllq0pJ.js";import"./index-Yp0JQF0Q.js";import"./Dialog-DDvLQ08U.js";import"./cross-Bghy2D6j.js";import"./svgIconContainer-Do6jakIy.js";import"./useBaseUiId-DvuukT3m.js";import"./InternalBackdrop-DIMQ-6Vm.js";import"./composite-DfVEv5DW.js";import"./index-BYKE8oqY.js";import"./index-C9e5xM7h.js";import"./index-DjdEDxKf.js";import"./useEventCallback-Ceqj6vPq.js";import"./SkeletonBar-DTVxz4FG.js";import"./LoadingCell-vsektYoj.js";import"./ColumnConfigDialog-DzJfZIO5.js";import"./DraggableList-B5vRq8Cg.js";import"./search-E1Tz1S2U.js";import"./Input-DgEbo1rm.js";import"./useControlled-CupkKwbr.js";import"./Button-E3u3fwJi.js";import"./small-cross-ZhIYpIQC.js";import"./ActionButton-gsNyAvhi.js";import"./Checkbox-DHzqbM_W.js";import"./useValueChanged-DyrikMQP.js";import"./CollapsiblePanel-Cd75DTG9.js";import"./MultiColumnSortDialog-DbWlhP4_.js";import"./MenuTrigger-DGf-np7_.js";import"./CompositeItem-DpqRoFwU.js";import"./ToolbarRootContext-pG56Avmq.js";import"./getDisabledMountTransitionStyles-CsC3z-SK.js";import"./getPseudoElementBounds-Bt_46i7g.js";import"./chevron-down-B1-Mj5AF.js";import"./index-g6hJSz-5.js";import"./error-E1ZphxDs.js";import"./BaseCbacBanner-BDYCcgoT.js";import"./makeExternalStore-Q33cok2O.js";import"./Tooltip-De3XT7Ee.js";import"./isObject-B4JmPlvj.js";import"./debounce-D0MzLxIy.js";import"./tick-BQ8d0QDt.js";import"./DropdownField-DpIokx-i.js";import"./isEqual-CTycJoYm.js";import"./_baseIsEqual-CzgPLVfB.js";import"./withOsdkMetrics-ByVOuDU9.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
