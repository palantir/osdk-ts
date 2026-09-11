import{j as r}from"./iframe-DNRgqJZG.js";import{O as b}from"./object-table-B1zfwLTo.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-K9kUQvmZ.js";import{u as g}from"./useOsdkClient-CgS_42xe.js";import"./preload-helper-B4MzypZ7.js";import"./Table-DvySJjkE.js";import"./index--r_AATYa.js";import"./Dialog-BNjSvDg6.js";import"./cross-fnGpeSL_.js";import"./svgIconContainer-RGbg_3In.js";import"./useBaseUiId-k1HsK5LP.js";import"./InternalBackdrop-C6yPahMN.js";import"./composite-BhLw2OB1.js";import"./index-D50m2_yv.js";import"./index-Bb2PTGBq.js";import"./index-J6FCVwwh.js";import"./useEventCallback-DAfTLw81.js";import"./SkeletonBar-BdIO37It.js";import"./LoadingCell-QYznWNAb.js";import"./ColumnConfigDialog-7M7EMVoR.js";import"./DraggableList-HRlKPnGS.js";import"./search-2pDcyK1J.js";import"./Input-DaU9Iq4Y.js";import"./useControlled-B0UDo4VH.js";import"./Button-DrBYvyjr.js";import"./small-cross-BtT2butt.js";import"./ActionButton-Dmy_y5QF.js";import"./Checkbox-B5bGmpU-.js";import"./useValueChanged-D_w674cM.js";import"./CollapsiblePanel-BlCOPMVs.js";import"./MultiColumnSortDialog-COKmoD-h.js";import"./MenuTrigger-Dj5N9rlo.js";import"./CompositeItem-GzRDip0q.js";import"./ToolbarRootContext-DAyCAc-p.js";import"./getDisabledMountTransitionStyles-4L_cObYh.js";import"./getPseudoElementBounds-DyKgoU5n.js";import"./chevron-down-BGaiaEhj.js";import"./index-CsEQ4i91.js";import"./error-DII-yisC.js";import"./BaseCbacBanner-B4tV7sGj.js";import"./makeExternalStore-D4vVBx2o.js";import"./Tooltip-DHSrIuxD.js";import"./PopoverPopup-TzHKm3nq.js";import"./debounce-BA7m7sn4.js";import"./tick-DfDE1bdF.js";import"./DropdownField-Cu20yd1p.js";import"./isEqual-D-Z5npp3.js";import"./withOsdkMetrics-B_v8QCh0.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
