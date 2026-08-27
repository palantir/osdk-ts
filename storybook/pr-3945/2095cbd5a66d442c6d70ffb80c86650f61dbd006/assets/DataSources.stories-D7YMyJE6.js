import{j as r}from"./iframe-CymrrUap.js";import{O as b}from"./object-table-DsD5lCxR.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-cL0WYTXP.js";import{u as g}from"./useOsdkClient-Cu-liJH6.js";import"./preload-helper-ehSUgiiL.js";import"./Table-BwyEzzA3.js";import"./index-DA-oUp9z.js";import"./Dialog-CXf9IXsT.js";import"./cross-D80OmHTw.js";import"./svgIconContainer-DmC2tGob.js";import"./useBaseUiId-DBVrwlNg.js";import"./InternalBackdrop-DptHKqPi.js";import"./composite-CPmOeLm-.js";import"./index-CkbGSZqd.js";import"./index-BMFjKR_h.js";import"./index-D-TCxA9c.js";import"./useEventCallback-Ca0PZb-I.js";import"./SkeletonBar-Cy3aWI1h.js";import"./LoadingCell-DrGS4_GQ.js";import"./ColumnConfigDialog-DXZYQVA8.js";import"./DraggableList-C5fTPmAd.js";import"./search-D73uP9Os.js";import"./Input-BVeDMVsS.js";import"./useControlled-F4dJPm4K.js";import"./Button-ZWSn3dX-.js";import"./small-cross-BXC0Eg3O.js";import"./ActionButton-CkEPzh79.js";import"./Checkbox-BKGwXbsb.js";import"./useValueChanged-CfWffDr4.js";import"./CollapsiblePanel-BjlGtYv0.js";import"./MultiColumnSortDialog-NMs-Rt6h.js";import"./MenuTrigger-DnF-czQE.js";import"./CompositeItem-Dj6qYNKV.js";import"./ToolbarRootContext-BsZ0cva1.js";import"./getDisabledMountTransitionStyles-Cqy5xLfF.js";import"./getPseudoElementBounds-Cwm_P-oB.js";import"./chevron-down-DOWVkS2T.js";import"./index-BNNz_fAv.js";import"./error-xVwU37JI.js";import"./BaseCbacBanner-BA1752Gq.js";import"./makeExternalStore-3pbdXedN.js";import"./Tooltip-DmacMCn7.js";import"./PopoverPopup-9VCLlEje.js";import"./debounce-D89nRWoA.js";import"./tick-HZRn0iiz.js";import"./DropdownField-D7TDTmE3.js";import"./isEqual-B-zNnBk1.js";import"./withOsdkMetrics-CA9bgf-6.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
