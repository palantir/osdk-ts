import{j as r}from"./iframe-2mhl-t7p.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-85UQZMQE.js";import{O as b}from"./object-table-eg2Ovt-Q.js";import{u as g}from"./useOsdkClient-DfVrbY5l.js";import"./preload-helper-2-bSzNok.js";import"./Table-D--gYOqV.js";import"./index-DLwVeEDH.js";import"./Dialog-DKS_NXyx.js";import"./cross-BxadJhVG.js";import"./svgIconContainer-CyuT4HfV.js";import"./useBaseUiId-Bh3N5ha8.js";import"./InternalBackdrop-DXMaIFV2.js";import"./composite-BrIxwnLH.js";import"./index-OPTHOOv0.js";import"./index-Bu--4y7I.js";import"./index-Tjhqt3OQ.js";import"./useEventCallback-CNFNRke6.js";import"./SkeletonBar-b_mwkMRo.js";import"./LoadingCell-DY7vryxa.js";import"./ColumnConfigDialog-B7qteAZY.js";import"./DraggableList-BVtyyBy7.js";import"./search-D7Fjt3EB.js";import"./Input-I-tMjIxS.js";import"./useControlled-DUeDJrRa.js";import"./Button-UyWDtgNb.js";import"./small-cross-D0judFsk.js";import"./ActionButton-Cpo6HN-_.js";import"./Checkbox-DAHGkPTP.js";import"./useValueChanged-C24owQWg.js";import"./CollapsiblePanel-BpstIy43.js";import"./MultiColumnSortDialog-CgFzhLaC.js";import"./MenuTrigger-Cj3O9yW6.js";import"./CompositeItem-5J0YQgr0.js";import"./ToolbarRootContext-BOy6SvVL.js";import"./getDisabledMountTransitionStyles-DF28N6ey.js";import"./getPseudoElementBounds-CLW-4ULW.js";import"./chevron-down-e01h8LWn.js";import"./index-CJy79Nz_.js";import"./error-BiztdMkG.js";import"./BaseCbacBanner-C4A370vT.js";import"./makeExternalStore-D2tKT-RY.js";import"./Tooltip-DXYTZf_a.js";import"./PopoverPopup-DXkzJyEf.js";import"./debounce-OjmEHQ7v.js";import"./tick-BjY98-U-.js";import"./DropdownField-DIj8_iWU.js";import"./isEqual-Cmq5HL7k.js";import"./withOsdkMetrics-OSElLXNz.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
