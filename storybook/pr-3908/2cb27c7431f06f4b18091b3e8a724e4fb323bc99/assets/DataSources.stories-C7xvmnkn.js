import{j as r}from"./iframe-jVZSa0_O.js";import{O as b}from"./object-table-pRHX98Mv.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BzMIhOoI.js";import{u as g}from"./useOsdkClient-DXW6J2KM.js";import"./preload-helper-B0JsgF0Q.js";import"./Table-nVgjXAUi.js";import"./index-cz87o1u2.js";import"./Dialog-DVswX8WH.js";import"./cross-D_kf2VMY.js";import"./svgIconContainer-CCkoUGO-.js";import"./useBaseUiId-Dh7cbX1i.js";import"./InternalBackdrop-CNizCF8V.js";import"./composite-B1R1VOU-.js";import"./index-CFlWgQDO.js";import"./index-DRJcVra2.js";import"./index-D68UoJcu.js";import"./useEventCallback-BFzCFepw.js";import"./SkeletonBar-D52KZgWC.js";import"./LoadingCell-xEbKxsbK.js";import"./ColumnConfigDialog-CSIk7lHh.js";import"./DraggableList-gx-jNQAx.js";import"./search-y5GiQxVJ.js";import"./Input-DE-dqgbb.js";import"./useControlled-PPoFg-g2.js";import"./Button-ruj5eHNw.js";import"./small-cross-DW-_vWg4.js";import"./ActionButton-MDw6R0lF.js";import"./Checkbox-7WJWAj1Q.js";import"./useValueChanged-lRBuZxnF.js";import"./CollapsiblePanel-BwEkY4as.js";import"./MultiColumnSortDialog-DOQ54144.js";import"./MenuTrigger-ClD5MLDz.js";import"./CompositeItem-Bdw-jz1U.js";import"./ToolbarRootContext-W1O_4HxY.js";import"./getDisabledMountTransitionStyles-CPsauNSR.js";import"./getPseudoElementBounds-CZyxgjLi.js";import"./chevron-down-vgR9jQm9.js";import"./index-DprOP2mE.js";import"./error-BkWT_eOO.js";import"./BaseCbacBanner-DOO_uje4.js";import"./makeExternalStore-D0xCnJrG.js";import"./Tooltip-nvYgD8vA.js";import"./PopoverPopup-BkH3GWX-.js";import"./debounce-29zvw66V.js";import"./tick-y1p0xcrN.js";import"./DropdownField-B7ayEcBh.js";import"./isEqual-kMY5ydKZ.js";import"./withOsdkMetrics-C6vVTJkI.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
