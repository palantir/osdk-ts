import{j as r}from"./iframe-DWecEh6Z.js";import{O as b}from"./object-table-DAMoRfJu.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DMcrTwMD.js";import{u as g}from"./useOsdkClient-BfFw3qSS.js";import"./preload-helper-Bbi2Z730.js";import"./Table-BQIL32i2.js";import"./index-6GDxt5zW.js";import"./Dialog-BTJHEOWb.js";import"./cross-DJ8vlukc.js";import"./svgIconContainer-CzZM0mPh.js";import"./useBaseUiId-DGtSF2d7.js";import"./InternalBackdrop-Dwui7Iwy.js";import"./composite-Dkoqcymr.js";import"./index-DwNzNK9a.js";import"./index-CgyINOqj.js";import"./index-D1u_zvAB.js";import"./useEventCallback-BnrirAaK.js";import"./SkeletonBar-BtmrMCoY.js";import"./LoadingCell-C2TXzPgY.js";import"./ColumnConfigDialog-DQxLvf4V.js";import"./DraggableList-Drxl4Ij8.js";import"./search-Dq1J9kTw.js";import"./Input-CalqcJQf.js";import"./useControlled-DxZ-cBby.js";import"./Button-Cipj2Ppc.js";import"./small-cross-CtR_-pfW.js";import"./ActionButton-BHq7nCiC.js";import"./Checkbox-gSoIZfAY.js";import"./useValueChanged-MajtV6Am.js";import"./CollapsiblePanel-DKsnYU-Y.js";import"./MultiColumnSortDialog-F5EwEeJC.js";import"./MenuTrigger-DQPZVbQo.js";import"./CompositeItem-K9AR25LJ.js";import"./ToolbarRootContext-D-1OWq12.js";import"./getDisabledMountTransitionStyles-DyI0iHRG.js";import"./getPseudoElementBounds-DnVQyjld.js";import"./chevron-down-C6k7Uas0.js";import"./index-B-5_Mr4U.js";import"./error-BHOwo5JQ.js";import"./BaseCbacBanner-DBe9XQkF.js";import"./makeExternalStore-BKGvKQz7.js";import"./Tooltip-CvzGGbpE.js";import"./isObject-4ImOr-SM.js";import"./debounce-BVhyQSqg.js";import"./tick-DrdvNN56.js";import"./DropdownField-CrXyCQrM.js";import"./isEqual-DnM3Sqmr.js";import"./_baseIsEqual-DJDOeQCT.js";import"./withOsdkMetrics-BTTMLJya.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
