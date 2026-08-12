import{j as r}from"./iframe-acnc8jNP.js";import{O as b}from"./object-table-DCXf91CR.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DwMPNbM_.js";import{u as g}from"./useOsdkClient-Ddp12YXU.js";import"./preload-helper-C0AHc0KZ.js";import"./Table-BUScjFao.js";import"./index-B2HcsiAS.js";import"./Dialog-HaPlI8uU.js";import"./cross-Bv8-5PKG.js";import"./svgIconContainer-DjMgejtG.js";import"./useBaseUiId-W2eivYCg.js";import"./InternalBackdrop-DEpxkWNz.js";import"./composite-DX6f7iaw.js";import"./index-BRGNHgC5.js";import"./index-BZeQ4uGI.js";import"./index-DIXvuYY6.js";import"./useEventCallback-D6SuZGFS.js";import"./SkeletonBar-DUBCMOxI.js";import"./LoadingCell-zw8kua-H.js";import"./ColumnConfigDialog-LAbRKII0.js";import"./DraggableList-BgUJx3xd.js";import"./search-D7Py9QCX.js";import"./Input-D_7AcYF3.js";import"./useControlled-CL58-5q6.js";import"./isEqual-C5oNx3i8.js";import"./isObject--zvNkZur.js";import"./Button-xirM2J2C.js";import"./ActionButton-DUgA3cC-.js";import"./Checkbox-CWlt2fz8.js";import"./useValueChanged-mNBps3Y1.js";import"./CollapsiblePanel-D_KXlm7t.js";import"./MultiColumnSortDialog-UIRp81gn.js";import"./MenuTrigger-kvlxu44D.js";import"./CompositeItem-uY-l1SPS.js";import"./ToolbarRootContext-D5eO9Pgy.js";import"./getDisabledMountTransitionStyles-DYJIGaAY.js";import"./getPseudoElementBounds-BJR6wqVc.js";import"./chevron-down-C9q_0P71.js";import"./index-B43oBquw.js";import"./error-Cxeuitdp.js";import"./BaseCbacBanner-BkMUSz5_.js";import"./makeExternalStore-C2yWrJUB.js";import"./Tooltip-BLq25BG6.js";import"./PopoverPopup-Dq0wusve.js";import"./toNumber-Bq_nqWh9.js";import"./tick-W5cBIuY2.js";import"./DropdownField-Bhkpabkk.js";import"./withOsdkMetrics-D-f8kfgF.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
