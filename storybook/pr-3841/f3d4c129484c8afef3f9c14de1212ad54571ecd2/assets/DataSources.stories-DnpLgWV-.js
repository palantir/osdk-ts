import{j as r}from"./iframe-B8zlsrHH.js";import{O as b}from"./object-table-BpZ24KDy.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C-JQztZ7.js";import{u as g}from"./useOsdkClient-DS2yUYbO.js";import"./preload-helper-C0b0An0Y.js";import"./Table-DpbVZ_xi.js";import"./index-tfK5NBPh.js";import"./Dialog-D6_7BAu8.js";import"./cross-DaFAEeUI.js";import"./svgIconContainer-93ic9H0u.js";import"./useBaseUiId-CmAD5Nv6.js";import"./InternalBackdrop-D9A75Q7m.js";import"./composite-CqVw9i-r.js";import"./index-BDPlX1qs.js";import"./index-CVRibSdI.js";import"./index-8FJlbEEh.js";import"./useEventCallback-B8_XFHjh.js";import"./SkeletonBar-B0OBJJ-q.js";import"./LoadingCell-1YxnfUQR.js";import"./ColumnConfigDialog-BCADU03z.js";import"./DraggableList-WXseg1bu.js";import"./search-BU1Su8pV.js";import"./Input-CqRPwD_J.js";import"./useControlled-0KT-Nbfb.js";import"./Button-D-b8a2cD.js";import"./small-cross-CcSvAReI.js";import"./ActionButton-BvyKYeoC.js";import"./Checkbox-UUf41hjt.js";import"./useValueChanged-DrbNpYIS.js";import"./CollapsiblePanel-DzQiRjZ4.js";import"./MultiColumnSortDialog-BD78BEQ7.js";import"./MenuTrigger-BPAG6_e8.js";import"./CompositeItem-CS-yxRHH.js";import"./ToolbarRootContext-rZcpvLxX.js";import"./getDisabledMountTransitionStyles-CGmmOIb5.js";import"./getPseudoElementBounds-8Tn-EeOs.js";import"./chevron-down-Cv_0_uCQ.js";import"./index-9c3pIfa3.js";import"./error-3ug2VmSe.js";import"./BaseCbacBanner-c3VRF40a.js";import"./makeExternalStore-BAH7otcI.js";import"./Tooltip-DY3JvpZs.js";import"./PopoverPopup-CsbWvaPD.js";import"./debounce-4L--7xKE.js";import"./tick-BlBXVcaW.js";import"./DropdownField-QqA07BX-.js";import"./isEqual-_YTctGwj.js";import"./withOsdkMetrics-vJQGO9MO.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
