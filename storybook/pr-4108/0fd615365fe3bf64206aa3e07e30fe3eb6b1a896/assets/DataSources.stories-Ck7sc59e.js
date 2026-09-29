import{j as r}from"./iframe-CziGYRZ5.js";import{O as b}from"./object-table-DG9OK9f3.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CHEvXy09.js";import{u as g}from"./useOsdkClient-ixR0tRCy.js";import"./preload-helper-gc9urLS2.js";import"./Table-C23fV-A4.js";import"./index-FTgGsQkL.js";import"./Dialog-C-zQIvLm.js";import"./cross-BHNWGXzB.js";import"./svgIconContainer-DFNJwVrV.js";import"./useBaseUiId-DlaJxT3G.js";import"./InternalBackdrop-CmQk3LXX.js";import"./composite-BvX1_pb1.js";import"./index-DvwMpTX4.js";import"./index-BgvYMuxB.js";import"./index-Dh3a3xZV.js";import"./useEventCallback-C84SdZch.js";import"./SkeletonBar-D7G546qA.js";import"./LoadingCell-DBzmQTYP.js";import"./ColumnConfigDialog-CxR2Z5wP.js";import"./DraggableList-COGcPqti.js";import"./search-cETe_cym.js";import"./Input-B_f-YNqg.js";import"./useControlled-Cl0l9Mrk.js";import"./Button-DfO3Y95R.js";import"./small-cross-BvEW3fuD.js";import"./ActionButton-CuomlX14.js";import"./Checkbox-CrQuAGol.js";import"./useValueChanged-OL0F_VvO.js";import"./CollapsiblePanel-D1R6dB3U.js";import"./MultiColumnSortDialog-Dh80iJ_F.js";import"./MenuTrigger-DOwjC9Dr.js";import"./CompositeItem-Bv09Xrw7.js";import"./ToolbarRootContext-YLrOIXIR.js";import"./getDisabledMountTransitionStyles-DXKrtJSh.js";import"./getPseudoElementBounds-Cbnbi5z8.js";import"./chevron-down-BzHtNLP_.js";import"./index-C3TtPejY.js";import"./error-q8pihEMG.js";import"./BaseCbacBanner-CTW6b3Om.js";import"./makeExternalStore-CKEXKIUu.js";import"./Tooltip-xz9w5Bgx.js";import"./PopoverPopup-C9gHOQmg.js";import"./debounce-B8aqKZgz.js";import"./tick-D6YJJ1hj.js";import"./DropdownField-DPVN1Ym_.js";import"./isEqual-CXjQlmNo.js";import"./withOsdkMetrics-B4ICqk1s.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
