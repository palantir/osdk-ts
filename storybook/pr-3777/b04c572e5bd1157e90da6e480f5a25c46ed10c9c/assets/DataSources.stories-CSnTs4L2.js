import{j as r}from"./iframe-B_IZKh8P.js";import{O as b}from"./object-table-BHBx1xhg.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-9DoOUHLY.js";import{u as g}from"./useOsdkClient-CKgeSwaI.js";import"./preload-helper-BSCxhMTJ.js";import"./Table-DWUB0BEu.js";import"./index-CnhyFb-r.js";import"./Dialog-Wm4jDDQn.js";import"./cross-hQMC7b3L.js";import"./svgIconContainer-Xsv1xEak.js";import"./useBaseUiId-Dr3xYZYx.js";import"./InternalBackdrop-CIvkvTEF.js";import"./composite-D9C4oNf8.js";import"./index-Cn6YA2O8.js";import"./index-CEu3xKdf.js";import"./index-Cz_FWict.js";import"./useEventCallback-psQhNNLf.js";import"./SkeletonBar-BOURZeYg.js";import"./LoadingCell-BsE1Vi6S.js";import"./ColumnConfigDialog-ByQeOPmB.js";import"./DraggableList-BkTfh7dw.js";import"./search-Bd9-hZh2.js";import"./Input-fcRS9Kmg.js";import"./useControlled-DNbx2H9c.js";import"./isEqual-CBO4YZX2.js";import"./isObject-BTbytGDT.js";import"./Button-BzbSQLjH.js";import"./ActionButton-DP2zPa-7.js";import"./Checkbox-hXQtnFKJ.js";import"./useValueChanged-DbQ39FoL.js";import"./CollapsiblePanel-BnA8neuU.js";import"./MultiColumnSortDialog-36rP3VXm.js";import"./MenuTrigger-5jncTReB.js";import"./CompositeItem-CFKw5_bq.js";import"./ToolbarRootContext-B8yBsSST.js";import"./getDisabledMountTransitionStyles-tSHMiDPJ.js";import"./getPseudoElementBounds-Bx5ztzSJ.js";import"./chevron-down-D7PGg54t.js";import"./index-C0Lj84kX.js";import"./error-SgZGkoCP.js";import"./BaseCbacBanner-CxEqfA_Y.js";import"./makeExternalStore-BAf1vw2Z.js";import"./Tooltip-Bepjyqd3.js";import"./PopoverPopup-BAI0fNYY.js";import"./toNumber-CZGRdJWc.js";import"./tick-B0vH2GvX.js";import"./DropdownField-DMPNyaBc.js";import"./withOsdkMetrics-Ch4rRkhY.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
