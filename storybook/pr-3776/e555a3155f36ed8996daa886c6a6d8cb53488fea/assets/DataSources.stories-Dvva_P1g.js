import{j as r}from"./iframe-B88mVS7j.js";import{O as b}from"./object-table-DNn1aq8t.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DwNVATy4.js";import{u as g}from"./useOsdkClient-ra61qNU0.js";import"./preload-helper-Uh0wBuM7.js";import"./Table-C9amQtpi.js";import"./index-CHR_FX06.js";import"./Dialog-BqiW6w-x.js";import"./cross-Btk_mk5d.js";import"./svgIconContainer-DzGpDek4.js";import"./useBaseUiId-B57MJH3J.js";import"./InternalBackdrop-AjIOHMnw.js";import"./composite-CMcpDiPw.js";import"./index-CW2oecwS.js";import"./index-kGWOF-P0.js";import"./index-C3DNoegO.js";import"./useEventCallback-BOjwi_-M.js";import"./SkeletonBar-eH1Cw7eQ.js";import"./LoadingCell-n-qnNa3r.js";import"./ColumnConfigDialog-CUbQ3dGA.js";import"./DraggableList-CRSNi5y7.js";import"./search-SYzB7163.js";import"./Input-CF934myu.js";import"./useControlled-DYXt92Xk.js";import"./isEqual-DQCuYCo-.js";import"./isObject-DTjtTHQp.js";import"./Button-BdjBpoPj.js";import"./ActionButton-BvVwXU_I.js";import"./Checkbox-N1OTZTa9.js";import"./useValueChanged-Be0DaIrx.js";import"./CollapsiblePanel-BuNMefI-.js";import"./MultiColumnSortDialog-8UVxX1bE.js";import"./MenuTrigger-VK-rUh4l.js";import"./CompositeItem-B9Z5xrKg.js";import"./ToolbarRootContext-pC6zktu4.js";import"./getDisabledMountTransitionStyles-C2ONeXVG.js";import"./getPseudoElementBounds-BX0gj9Cd.js";import"./chevron-down-CgY_yXxx.js";import"./index-BEsZpRLK.js";import"./error-TTEpjfmJ.js";import"./BaseCbacBanner-DRiogddk.js";import"./makeExternalStore-Cu3F9xH0.js";import"./Tooltip-CNxWZpwW.js";import"./PopoverPopup-JIs4CT0a.js";import"./toNumber-CCDIu-4N.js";import"./tick-D1eJMyLY.js";import"./DropdownField-B_ROMpHU.js";import"./withOsdkMetrics-D0OzWSyM.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
