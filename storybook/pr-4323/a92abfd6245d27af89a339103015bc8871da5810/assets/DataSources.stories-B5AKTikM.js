import{j as r}from"./iframe-DQCdqfg5.js";import{O as b}from"./object-table-D2fFBTXM.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C0mo33VC.js";import{u as g}from"./useOsdkClient-DpwLfZR6.js";import"./preload-helper-BnuMKywq.js";import"./Table-eSFOwLQi.js";import"./index-vgggs2zv.js";import"./Dialog-Be0MXF1L.js";import"./cross-BM5-gN2O.js";import"./svgIconContainer-DQ3vDY3d.js";import"./useBaseUiId-uJtwceXU.js";import"./InternalBackdrop-mKo4eMuU.js";import"./composite-CLQo-Wfa.js";import"./index-BsqPh63C.js";import"./index-TXPEMxyc.js";import"./index-DkmdKJbM.js";import"./useEventCallback-DI2LvAvB.js";import"./SkeletonBar-BMXSVux8.js";import"./LoadingCell-DAvwNT84.js";import"./ColumnConfigDialog-GU-s4XaF.js";import"./DraggableList-vr-wvdOw.js";import"./search-BVksAAy0.js";import"./Input-BTifrhUx.js";import"./useControlled-ChMbt_Fz.js";import"./Button-DNN3wzC1.js";import"./small-cross-B8kNhtpM.js";import"./ActionButton-8qbOBxU2.js";import"./Checkbox-DSNDjp2T.js";import"./useValueChanged-BB3_bFNq.js";import"./CollapsiblePanel-B0RAMB_a.js";import"./MultiColumnSortDialog-CXJqFtZO.js";import"./MenuTrigger-SW6vTO-P.js";import"./CompositeItem-BV9j03E3.js";import"./ToolbarRootContext-DIjdh_Ow.js";import"./getDisabledMountTransitionStyles-BryvnPSi.js";import"./getPseudoElementBounds-SCb5Bi3b.js";import"./chevron-down-s9at5FCB.js";import"./index-C7x5V-MA.js";import"./error-LGbg2EdJ.js";import"./BaseCbacBanner-CIJ1yjYq.js";import"./makeExternalStore-DhC3eF_c.js";import"./Tooltip-F2HH1cxW.js";import"./PopoverPopup-CvC35ehe.js";import"./debounce-DHf3w8rI.js";import"./tick-BNBx5Vf4.js";import"./DropdownField-NOLN6HRJ.js";import"./isEqual-oQJ7iNOI.js";import"./withOsdkMetrics-B1flG_2m.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
