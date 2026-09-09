import{j as r}from"./iframe-9-OswRKS.js";import{O as b}from"./object-table-wpL3Cm1K.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CxruYxlN.js";import{u as g}from"./useOsdkClient-B_1Wh43n.js";import"./preload-helper-DYL5InEO.js";import"./Table-CvGw4i9O.js";import"./index-SvIFWBde.js";import"./Dialog-C30pJrHD.js";import"./cross-C9OnvPLu.js";import"./svgIconContainer-DVdpIesk.js";import"./useBaseUiId-CXx1U6Z5.js";import"./InternalBackdrop-B8-pARTC.js";import"./composite-BDc56zIL.js";import"./index-HMIJrenA.js";import"./index-D2h7VYDA.js";import"./index-CgAEYrry.js";import"./useEventCallback-Jrhf3FEf.js";import"./SkeletonBar-B0TH4rTw.js";import"./LoadingCell-OeZp9zKS.js";import"./ColumnConfigDialog-CKJWMH1q.js";import"./DraggableList-IWsi11_u.js";import"./search-DPzUsQds.js";import"./Input-0npSrlPh.js";import"./useControlled-CGEFCoiG.js";import"./Button-gzjofzeF.js";import"./small-cross-zc5ZGHVz.js";import"./ActionButton-mnEAQH7e.js";import"./Checkbox-QBMXMF1z.js";import"./useValueChanged-D0cvyeOe.js";import"./CollapsiblePanel-DZN0B05J.js";import"./MultiColumnSortDialog-Qc0ZudeP.js";import"./MenuTrigger-Ql2c4oyO.js";import"./CompositeItem-TZo4ZNUL.js";import"./ToolbarRootContext-DtmptTL0.js";import"./getDisabledMountTransitionStyles-B9CzyLp8.js";import"./getPseudoElementBounds-CkUMfr4i.js";import"./chevron-down-B8yYoTwv.js";import"./index-D44_FbgA.js";import"./error-BLLqk3sD.js";import"./BaseCbacBanner-BSIiSJcU.js";import"./makeExternalStore-D5luXUgx.js";import"./Tooltip-BCzkmJcH.js";import"./PopoverPopup-KmKJk9qz.js";import"./debounce-Bb1Cpy72.js";import"./tick-DBm-RnL7.js";import"./DropdownField-BZtIeQpR.js";import"./isEqual-CSlBgnD1.js";import"./withOsdkMetrics-DVJybCh6.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
