import{j as r}from"./iframe-D6wK3EAy.js";import{O as b}from"./object-table-CJQhu3fY.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CLj6fnG5.js";import{u as g}from"./useOsdkClient-D-pULJwo.js";import"./preload-helper-9qW4f37k.js";import"./Table-CXBGIS3x.js";import"./index-C4Egst8D.js";import"./Dialog-Dc1TWSlc.js";import"./cross-DJsnF8CR.js";import"./svgIconContainer-BQ29Jrrk.js";import"./useBaseUiId-Cqe_H5Gd.js";import"./InternalBackdrop-BUrCYPsm.js";import"./composite-ITGjJkDr.js";import"./index-CaTU6vjS.js";import"./index-VMlmoRq8.js";import"./index-BT2pitud.js";import"./useEventCallback-BfW23crB.js";import"./SkeletonBar-MxpLFb1K.js";import"./LoadingCell-B2LwBLoU.js";import"./ColumnConfigDialog-DZyftQjy.js";import"./DraggableList-DLWlM7VL.js";import"./search-BHdUrAF7.js";import"./Input-D0ZybK8t.js";import"./useControlled-DDOEDrW8.js";import"./isEqual-CmvsVuZf.js";import"./isObject-BQBtOJHN.js";import"./Button-BOEdhvyt.js";import"./ActionButton-BI03wXnE.js";import"./Checkbox-CjPdw_-h.js";import"./useValueChanged-BeZW4Vsb.js";import"./CollapsiblePanel-KoDTkwo8.js";import"./MultiColumnSortDialog-COF8eH7m.js";import"./MenuTrigger-DxBIpn73.js";import"./CompositeItem-CBOlU4eU.js";import"./ToolbarRootContext-IVqSjG4F.js";import"./getDisabledMountTransitionStyles-BasdcLrs.js";import"./getPseudoElementBounds-CQdtBRvd.js";import"./chevron-down-CUkUYMVt.js";import"./index-B6SJHL1l.js";import"./error-CiM4_SXt.js";import"./BaseCbacBanner-BH0YKs-R.js";import"./makeExternalStore-CAK-_0fa.js";import"./Tooltip-xfJ6sV_6.js";import"./PopoverPopup-Bl3xjwYm.js";import"./toNumber-DK_dsH5n.js";import"./tick-BaroVa_1.js";import"./DropdownField-DS2UrcHX.js";import"./withOsdkMetrics-n3V8zZwC.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
