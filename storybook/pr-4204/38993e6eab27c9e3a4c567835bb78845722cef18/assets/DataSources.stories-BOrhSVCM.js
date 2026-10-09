import{j as r}from"./iframe-BPD7a-d3.js";import{O as b}from"./object-table-D-tCC7x0.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DHUw_AlW.js";import{u as g}from"./useOsdkClient-jf6lJmqS.js";import"./preload-helper-BMJg2fth.js";import"./Table-X6gXC-rQ.js";import"./index-DWlOJTtZ.js";import"./Dialog-zxTOVbxW.js";import"./cross-BQBN2sBj.js";import"./svgIconContainer-9WeLc1W4.js";import"./useBaseUiId-B7NeBfTl.js";import"./InternalBackdrop-BqFiGGtG.js";import"./composite-2r4XaYyI.js";import"./index-BFdep0Pu.js";import"./index-CPwIgA5j.js";import"./index-Dc2JolBW.js";import"./useEventCallback-BLd4X65y.js";import"./SkeletonBar-DXu4hwWS.js";import"./LoadingCell-D1PldjSx.js";import"./ColumnConfigDialog-EzXdePxC.js";import"./DraggableList-Km3Db3w6.js";import"./search-DDY46Bsb.js";import"./Input-BsWtOrbL.js";import"./useControlled-DcoiTjSg.js";import"./Button-J8RQxXRy.js";import"./small-cross-DKMapFDw.js";import"./ActionButton-DQ15zJBD.js";import"./Checkbox-DKjVjgpk.js";import"./useValueChanged-CW-dzw8w.js";import"./CollapsiblePanel-DZA1hbiz.js";import"./MultiColumnSortDialog-DaToBdED.js";import"./MenuTrigger-C0rTEkZ4.js";import"./CompositeItem-CQbGZkro.js";import"./ToolbarRootContext-CvDFIQMo.js";import"./getDisabledMountTransitionStyles-GoNHsGRT.js";import"./getPseudoElementBounds-wmkfIGoM.js";import"./chevron-down-TG9TSSoU.js";import"./index-BUYfos0b.js";import"./error-DxTVaEkU.js";import"./BaseCbacBanner-CCV7S7vH.js";import"./makeExternalStore-BXsO-6Dt.js";import"./Tooltip-y6dqO2XM.js";import"./PopoverPopup-DLgHHGX6.js";import"./debounce-D2ZCRJTn.js";import"./tick-0nx9bnwa.js";import"./DropdownField-Dpdo-uvo.js";import"./isEqual-DKT0xxpO.js";import"./withOsdkMetrics-zev-jqP5.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
