import{j as r}from"./iframe-T8-5O5a7.js";import{O as b}from"./object-table-Cy8zQr_Q.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DGKJTYgl.js";import{u as g}from"./useOsdkClient-DEG6jAJY.js";import"./preload-helper-BmpZImld.js";import"./Table-Cx3ow3Xr.js";import"./index-Bm1P3JuR.js";import"./Dialog-D2DawJKv.js";import"./cross-B2Ff3nzN.js";import"./svgIconContainer-DTQIUstT.js";import"./useBaseUiId-CGT1eYgE.js";import"./InternalBackdrop-CVQt1P3k.js";import"./composite-3G0XmPl8.js";import"./index-CTvYrdTG.js";import"./index-BqFbX9xD.js";import"./index-4D7iDRWN.js";import"./useEventCallback-DcrwhGVh.js";import"./SkeletonBar-aRGi46qm.js";import"./LoadingCell-BCWG_WSo.js";import"./ColumnConfigDialog-9oaVEdY0.js";import"./DraggableList-ClGw9imn.js";import"./search-gRWhsC7a.js";import"./Input-CrYGG830.js";import"./useControlled-DiVYHBT1.js";import"./isEqual-CYj9ZY_T.js";import"./isObject-D4EU1_k1.js";import"./Button-C--AVR5N.js";import"./ActionButton-CZuqOpJr.js";import"./Checkbox-q3zPQoox.js";import"./useValueChanged-B48ahuZx.js";import"./CollapsiblePanel-D6ekH2vN.js";import"./MultiColumnSortDialog-lIFw4Vg5.js";import"./MenuTrigger-Cn9_5pkM.js";import"./CompositeItem-CxOclKWd.js";import"./ToolbarRootContext-D4ao5sDu.js";import"./getDisabledMountTransitionStyles-B3GPhteV.js";import"./getPseudoElementBounds-CZWI-fTU.js";import"./chevron-down-CtzoxwNt.js";import"./index-CtKLFWsO.js";import"./error-C6IIEk7L.js";import"./BaseCbacBanner-D_gnVjwt.js";import"./makeExternalStore-V4YAFWjd.js";import"./Tooltip-Cq4Hmx15.js";import"./PopoverPopup-B5NaVdq-.js";import"./toNumber-BkQhAqa5.js";import"./tick-BhtMxWAI.js";import"./DropdownField-CXEt8CUB.js";import"./withOsdkMetrics-CswUt8H_.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
