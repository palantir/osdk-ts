import{j as r}from"./iframe-gEsDMi5m.js";import{O as b}from"./object-table-WOXcTE-C.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CH-SKMNc.js";import{u as g}from"./useOsdkClient-BZ8qdmVU.js";import"./preload-helper-BAXfB12u.js";import"./Table-CEXYRF_J.js";import"./index-CYY6Rkvu.js";import"./Dialog-DAZ5iGgx.js";import"./cross-CApI6DkL.js";import"./svgIconContainer-me1vP-AK.js";import"./useBaseUiId-nOXd_pux.js";import"./InternalBackdrop-BU6W6YCn.js";import"./composite-CaWSGe7j.js";import"./index-CN74APF8.js";import"./index-CAdYCXPf.js";import"./index-n8Ri0MhW.js";import"./useEventCallback-BQHn974L.js";import"./SkeletonBar-BLp97GCo.js";import"./LoadingCell-D8gIru7I.js";import"./ColumnConfigDialog-BRkQ-tNM.js";import"./DraggableList-wBCEtgnC.js";import"./search-B644haYO.js";import"./Input-H1RJGFEs.js";import"./useControlled-G7jSLqSi.js";import"./isEqual-D9zzbew2.js";import"./isObject-BkpyQSqe.js";import"./Button-CAn4HIMi.js";import"./ActionButton-mczlm1qe.js";import"./Checkbox-CbOgMaWQ.js";import"./useValueChanged-BqgGQC4Z.js";import"./CollapsiblePanel-CqXCUz-t.js";import"./MultiColumnSortDialog-DGwhoAnv.js";import"./MenuTrigger-OdnTgWoD.js";import"./CompositeItem-D-qmf9CK.js";import"./ToolbarRootContext-k6OAp5FQ.js";import"./getDisabledMountTransitionStyles-CjAvwRuw.js";import"./getPseudoElementBounds-CqcGhrGg.js";import"./chevron-down-BmqaLTjs.js";import"./index-p-vwnn75.js";import"./error-CiVDGDzV.js";import"./BaseCbacBanner-BcjMpWny.js";import"./makeExternalStore-Dg55qf4I.js";import"./Tooltip-qZVOkPg3.js";import"./PopoverPopup-CMykBH5O.js";import"./toNumber-DLwRWhwE.js";import"./tick-BQd7Ks22.js";import"./DropdownField-Bllgl6RO.js";import"./withOsdkMetrics-BRj5Yz7R.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
