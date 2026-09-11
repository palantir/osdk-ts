import{j as r}from"./iframe-CmbQZ_H0.js";import{O as b}from"./object-table-B5qpanxf.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BeEYIUjs.js";import{u as g}from"./useOsdkClient-xLtiSbvO.js";import"./preload-helper-Ecu5FnuN.js";import"./Table-CRH1JdfM.js";import"./index-QKQySa8F.js";import"./Dialog-BIlR81C_.js";import"./cross-6T8h1X1A.js";import"./svgIconContainer-CUFAWoTA.js";import"./useBaseUiId-M00ioKA7.js";import"./InternalBackdrop-CpiUjw4e.js";import"./composite-Cb2is0DJ.js";import"./index-DlNrqWid.js";import"./index-CnDEnPo5.js";import"./index-DCPZZ569.js";import"./useEventCallback-DpC9eqeR.js";import"./SkeletonBar-BXbXBzB8.js";import"./LoadingCell-u_w18lMh.js";import"./ColumnConfigDialog-CC4LTt-u.js";import"./DraggableList-BywbQPU9.js";import"./search-CVqyjRk8.js";import"./Input-B5NiOwJX.js";import"./useControlled-CF22MFs5.js";import"./Button-CDF-lBwk.js";import"./small-cross-BIkNXmJL.js";import"./ActionButton-BK-luMEu.js";import"./Checkbox-DV7yfsNm.js";import"./useValueChanged-sq-Bi9MD.js";import"./CollapsiblePanel-COC1FjJY.js";import"./MultiColumnSortDialog-CLzqvvaJ.js";import"./MenuTrigger-DoYNc0Qv.js";import"./CompositeItem-ByYHjWLD.js";import"./ToolbarRootContext-B1xhX1z_.js";import"./getDisabledMountTransitionStyles-nKH94PKf.js";import"./getPseudoElementBounds-1u2TW9bY.js";import"./chevron-down-BhlVnWsI.js";import"./index-B3o3BLIH.js";import"./error-Beqgpujq.js";import"./BaseCbacBanner-BOiuNJMc.js";import"./makeExternalStore-BB3Iwwej.js";import"./Tooltip-DwJa0Vj6.js";import"./PopoverPopup-Do5Thirt.js";import"./debounce-CqRFkPfJ.js";import"./tick-C2UWJ6pc.js";import"./DropdownField-B46cTE2Y.js";import"./isEqual-DV0aS7dm.js";import"./withOsdkMetrics-DoacziBi.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
