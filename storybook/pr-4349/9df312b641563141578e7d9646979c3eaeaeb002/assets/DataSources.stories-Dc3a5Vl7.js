import{j as r}from"./iframe-BqTu4XiU.js";import{O as b}from"./object-table-CZfwSZu4.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D6yh7q7a.js";import{u as g}from"./useOsdkClient-CY3-Qcbp.js";import"./preload-helper-CLwPNuFm.js";import"./Table-OBAT8geJ.js";import"./index-n4P62ULA.js";import"./Dialog-DBk-Vi-C.js";import"./cross-Bf-ZTIWt.js";import"./svgIconContainer-ssNd1Mel.js";import"./useBaseUiId-DOa2ktQ_.js";import"./InternalBackdrop-BWQJzTSw.js";import"./composite-Uju8Gyxg.js";import"./index-DPw1J95l.js";import"./index-XmYkAd4i.js";import"./index-C7HdEQi2.js";import"./useEventCallback-CSmK-UP6.js";import"./SkeletonBar-Cm27X7lR.js";import"./LoadingCell-BolsaO9m.js";import"./ColumnConfigDialog-BCdjNuhe.js";import"./DraggableList-Dnf99Feo.js";import"./search-CGymVd3o.js";import"./Input-CyJM7H_A.js";import"./useControlled-BTMI3vML.js";import"./Button-B0Jsn_TB.js";import"./small-cross-CbYqYfDd.js";import"./ActionButton-B-w92oTU.js";import"./Checkbox-D8VV1CyH.js";import"./useValueChanged-MQHCd7Zh.js";import"./CollapsiblePanel-7y2KhLQa.js";import"./MultiColumnSortDialog-DL-19dfG.js";import"./MenuTrigger-Djp-RtLd.js";import"./CompositeItem-2LiZgC-6.js";import"./ToolbarRootContext-I9KV8qho.js";import"./getDisabledMountTransitionStyles-Dm1GabcS.js";import"./getPseudoElementBounds-DFuKTwTc.js";import"./chevron-down-BzSkZyB8.js";import"./index-B8t3MqHb.js";import"./error-gQVPInMQ.js";import"./BaseCbacBanner-BQLkMW-Q.js";import"./makeExternalStore-CD6czKDm.js";import"./Tooltip-Ce85HlPx.js";import"./isObject-ck1XpDGo.js";import"./debounce-CinR7-WT.js";import"./tick-vL6Zu8Fr.js";import"./DropdownField-CSfoNHLP.js";import"./isEqual-BCgrOiLo.js";import"./_baseIsEqual-D26Zmm1G.js";import"./withOsdkMetrics-BmTAUVUD.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};
