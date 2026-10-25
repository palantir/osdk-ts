import{j as r}from"./iframe-8ifTlOPI.js";import{O as b}from"./object-table-ndrVNxgt.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BCiNFdCn.js";import{u as g}from"./useOsdkClient-CfP7K8UM.js";import"./preload-helper-qjA7iF_h.js";import"./Table-DYqI_6aW.js";import"./index-zP_CtKeM.js";import"./Dialog-Cf488IT9.js";import"./cross-CL785k1k.js";import"./svgIconContainer-D_TXE4Bb.js";import"./useBaseUiId-Cwh1jhj-.js";import"./InternalBackdrop-DcUvvNEJ.js";import"./composite-B4CIj8hm.js";import"./index-CoyaXW0G.js";import"./index-DwMFEFqg.js";import"./index-pH-MRX5y.js";import"./useEventCallback-DNuPjnYr.js";import"./SkeletonBar-CAFjcspr.js";import"./LoadingCell-BFD54Tcr.js";import"./ColumnConfigDialog-DiJLTN8d.js";import"./DraggableList-B5V2tPlo.js";import"./search-cZtZgUJN.js";import"./Input-CMGBsI9h.js";import"./useControlled-CyFBz6dn.js";import"./Button-CkeTq1uo.js";import"./small-cross-B646WFen.js";import"./ActionButton-CxCutMvr.js";import"./Checkbox-Bgh6nR7u.js";import"./useValueChanged-TYhdJ9yM.js";import"./CollapsiblePanel-Dr80mgLX.js";import"./MultiColumnSortDialog-DTt_dWd5.js";import"./MenuTrigger-P1EkmwDH.js";import"./CompositeItem-DP3maplG.js";import"./ToolbarRootContext-BVL9-YVY.js";import"./getDisabledMountTransitionStyles-CisZNLPx.js";import"./getPseudoElementBounds-BktluGq2.js";import"./chevron-down-BBwBJyH3.js";import"./index-DPyB-hEV.js";import"./error-CEWX4lms.js";import"./BaseCbacBanner-hOsFxdZf.js";import"./makeExternalStore-BjHpzMBx.js";import"./Tooltip-D1NVsbbj.js";import"./PopoverPopup-DyGtJCKe.js";import"./debounce-BDQ7N1x4.js";import"./tick-FRfoFGPl.js";import"./DropdownField-Bmo9g9ce.js";import"./isEqual-tZEY_fLF.js";import"./withOsdkMetrics-C5cd7yWV.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
