import{j as r}from"./iframe-DTnMR0KG.js";import{O as b}from"./object-table-Dojizanr.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-GzTP_biv.js";import{u as g}from"./useOsdkClient-DfHmfWgr.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CH6pH4zG.js";import"./index-Zau0Jz6Y.js";import"./Dialog-dAT1gs52.js";import"./cross-DMx8fbm0.js";import"./svgIconContainer-Dax4Obiz.js";import"./useBaseUiId-BmGZESq6.js";import"./InternalBackdrop-BIV-x21n.js";import"./composite-CHsrvqtn.js";import"./index-B1hrThmL.js";import"./index-BhpGgSwE.js";import"./index-QRxEtHvN.js";import"./useEventCallback-BFwQjvEd.js";import"./SkeletonBar-DT-REwch.js";import"./LoadingCell-t-D5rcrQ.js";import"./ColumnConfigDialog-BhGP4yqh.js";import"./DraggableList-CDDcyTKh.js";import"./search-D15ONi4r.js";import"./Input-Cz7lC9dl.js";import"./useControlled-CA00kb2t.js";import"./Button-CiLEYhU4.js";import"./small-cross-Nd_mbPyF.js";import"./ActionButton-xXKBDS-d.js";import"./Checkbox-BUOe58vg.js";import"./useValueChanged-BpSLdBnW.js";import"./CollapsiblePanel-CnWjjEN1.js";import"./MultiColumnSortDialog-BisE-FBR.js";import"./MenuTrigger-BSvYjEqY.js";import"./CompositeItem-Bv-USTDP.js";import"./ToolbarRootContext-CVieYv4R.js";import"./getDisabledMountTransitionStyles-gB2pWUeL.js";import"./getPseudoElementBounds-x5cxEdZq.js";import"./chevron-down-CGKhWSQM.js";import"./index-Dp8wnHZj.js";import"./error-CKmqMHYj.js";import"./BaseCbacBanner-9-YD5ayU.js";import"./makeExternalStore-DeAXmBwe.js";import"./Tooltip-DMXCxB-I.js";import"./PopoverPopup-D5G1tfGx.js";import"./debounce-DTHXiRTi.js";import"./tick-B6L2Bte4.js";import"./DropdownField-DgLlFLvX.js";import"./isEqual-DJ52-f9P.js";import"./withOsdkMetrics-CSsnJEPw.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
