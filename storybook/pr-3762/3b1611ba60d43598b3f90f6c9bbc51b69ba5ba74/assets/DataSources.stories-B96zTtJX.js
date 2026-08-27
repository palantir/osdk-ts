import{j as r}from"./iframe-DIrXRTUE.js";import{O as b}from"./object-table-CRY5KDOY.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CMaj6xWH.js";import{u as g}from"./useOsdkClient-CpLorJJf.js";import"./preload-helper-BDGKLWkc.js";import"./Table-CFLtyIaQ.js";import"./index-DXhTZYa-.js";import"./Dialog-j2P3qZPM.js";import"./cross-BWlnnw7Z.js";import"./svgIconContainer-BhiIhdyU.js";import"./useBaseUiId-DggC7k7V.js";import"./InternalBackdrop-BfLi8nYY.js";import"./composite-CQGrDifO.js";import"./index-DNNp_YhZ.js";import"./index-C7mJLSNN.js";import"./index-B7BSa3qz.js";import"./useEventCallback-4SGo8iHB.js";import"./SkeletonBar-CI1EKX4F.js";import"./LoadingCell-C1PJA3Gv.js";import"./ColumnConfigDialog-D5a1NblV.js";import"./DraggableList-RVApbcSr.js";import"./search-BiMWNAZT.js";import"./Input-xU7CCW7r.js";import"./useControlled-CY4zZ4Nk.js";import"./Button-CFV4ykZ5.js";import"./small-cross-k4fEusKy.js";import"./ActionButton-C_bnaXzs.js";import"./Checkbox-DKrbFOh9.js";import"./useValueChanged-DSwICwQ7.js";import"./CollapsiblePanel-BnW8cw5D.js";import"./MultiColumnSortDialog-B5VFtizY.js";import"./MenuTrigger--qPAsE0H.js";import"./CompositeItem-DZtzCGg4.js";import"./ToolbarRootContext-BwPH-v7H.js";import"./getDisabledMountTransitionStyles-B0733LGG.js";import"./getPseudoElementBounds-C8jaYsn8.js";import"./chevron-down-ClhW5Bkg.js";import"./index-CoHjJ82-.js";import"./error-Fw0nPuQ9.js";import"./BaseCbacBanner-BD1aE8di.js";import"./makeExternalStore-CfejnPp0.js";import"./Tooltip-C08q-0U3.js";import"./PopoverPopup-CUDI852N.js";import"./debounce-BROf-_gy.js";import"./tick-Bk7NHXTh.js";import"./DropdownField-C91zL4eW.js";import"./isEqual-YCnWhj50.js";import"./withOsdkMetrics-BVdX0j6l.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
