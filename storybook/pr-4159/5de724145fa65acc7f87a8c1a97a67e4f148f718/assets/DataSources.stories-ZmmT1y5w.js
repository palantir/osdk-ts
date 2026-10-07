import{j as r}from"./iframe-BkonaQ0V.js";import{O as b}from"./object-table-DQRry3AB.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CgHAq6xX.js";import{u as g}from"./useOsdkClient-BSF82BLH.js";import"./preload-helper-wgqeRAml.js";import"./Table-B7e1ZhoA.js";import"./index-CygiEJb6.js";import"./Dialog-DBnPtZV1.js";import"./cross-CkDGtOaH.js";import"./svgIconContainer-B_Cau1X9.js";import"./useBaseUiId-DnbkQC4-.js";import"./InternalBackdrop-Cih9MBeb.js";import"./composite-CFHemZO9.js";import"./index-CBL-z8ep.js";import"./index-ct3tIu0S.js";import"./index-CpL6Ija4.js";import"./useEventCallback-B9xx7Ssa.js";import"./SkeletonBar-BnNg27Cz.js";import"./LoadingCell-Dhy8klPf.js";import"./ColumnConfigDialog-D9SM7fc_.js";import"./DraggableList-CYtRZi8h.js";import"./search-J0YUGWpH.js";import"./Input-BP09pCNP.js";import"./useControlled-DJSj5exZ.js";import"./Button-uS_BewGO.js";import"./small-cross-Ds0-Yg5S.js";import"./ActionButton-CMP6VOQi.js";import"./Checkbox-BtZ_gIR0.js";import"./useValueChanged-BRpmqW3_.js";import"./CollapsiblePanel-r9bycGf3.js";import"./MultiColumnSortDialog-B9pEUzuv.js";import"./MenuTrigger-4ZXDXskl.js";import"./CompositeItem-Bl9Mb02l.js";import"./ToolbarRootContext-C3x2oEG2.js";import"./getDisabledMountTransitionStyles-CaY-5WcQ.js";import"./getPseudoElementBounds-CJ3hgKhp.js";import"./chevron-down-BvYaF6aU.js";import"./index-CcaHmPI_.js";import"./error-DnbjG5aU.js";import"./BaseCbacBanner-BiMj7cVS.js";import"./makeExternalStore-CxsJ8F0x.js";import"./Tooltip-BUWMYkhF.js";import"./PopoverPopup-Ck4dFzY0.js";import"./debounce-DpSqLCDy.js";import"./tick-DKukE1zV.js";import"./DropdownField-BXi0zmhU.js";import"./isEqual-CJO4zUtQ.js";import"./withOsdkMetrics-DYHyomoB.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
