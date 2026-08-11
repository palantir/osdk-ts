import{j as r}from"./iframe-DVYnRpdj.js";import{O as b}from"./object-table-D2LKbGoh.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BXL7w_qs.js";import{u as g}from"./useOsdkClient-BJpIsQwT.js";import"./preload-helper-jWAjn0tL.js";import"./Table-Dxj1ILvb.js";import"./index-CH1L1VNU.js";import"./Dialog-CWjOSvXy.js";import"./cross-B9-dwz-Y.js";import"./svgIconContainer-CTL4p5cf.js";import"./useBaseUiId-BwB1POS7.js";import"./InternalBackdrop-N9SofBTy.js";import"./composite-C4ay5osQ.js";import"./index-CNxR8hD1.js";import"./index-5JSg7TKC.js";import"./index-D-sIGuKb.js";import"./useEventCallback-VFhsdas6.js";import"./SkeletonBar-C9zAaSl2.js";import"./LoadingCell-DN0DKMXJ.js";import"./ColumnConfigDialog-B55nyHVt.js";import"./DraggableList-DtigIKar.js";import"./search--hEGkwmt.js";import"./Input-qR3cLgNT.js";import"./useControlled-BTTM4wRl.js";import"./isEqual-BgqmPc7Z.js";import"./isObject-DKcO7n6l.js";import"./Button-BvmdrF_3.js";import"./ActionButton-C2gtk3D2.js";import"./Checkbox-xgTkB24d.js";import"./useValueChanged-Cxtk_s41.js";import"./CollapsiblePanel-BHoiEa8Y.js";import"./MultiColumnSortDialog-BzrGwEIf.js";import"./MenuTrigger-BxwoC8_m.js";import"./CompositeItem-C6n7AP2m.js";import"./ToolbarRootContext-DrMZ4IJS.js";import"./getDisabledMountTransitionStyles-DfQCDxjZ.js";import"./getPseudoElementBounds-CyipiQbQ.js";import"./chevron-down-KrczOSzf.js";import"./index-CFnWEuFo.js";import"./error-IFx71VBh.js";import"./BaseCbacBanner-BjCczzKS.js";import"./makeExternalStore-Cytkrsbu.js";import"./Tooltip-VzwiJ3X5.js";import"./PopoverPopup-Bz8q9iux.js";import"./toNumber-Ca0I2YME.js";import"./tick-BDn1wXHc.js";import"./DropdownField-DegXtX4D.js";import"./withOsdkMetrics-RqRZ8y66.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
