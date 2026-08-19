import{j as r}from"./iframe-DMCinZdR.js";import{O as b}from"./object-table-CWBnrHhx.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D7bcbw2P.js";import{u as g}from"./useOsdkClient-HbedtQt7.js";import"./preload-helper-BCg2fv9s.js";import"./Table-LtgmsszG.js";import"./index-Cn1vMB8x.js";import"./Dialog-lkRAWS3Z.js";import"./cross-CcPjSvKf.js";import"./svgIconContainer-De7fNnjX.js";import"./useBaseUiId-BeT3oypJ.js";import"./InternalBackdrop-DdnNDztF.js";import"./composite-yv0I3xy5.js";import"./index-YxjRsNBV.js";import"./index-DvMnSwXX.js";import"./index-Db-Y2AMC.js";import"./useEventCallback-BeOJzBKk.js";import"./SkeletonBar-BkZPaYD6.js";import"./LoadingCell-CIeGigir.js";import"./ColumnConfigDialog-B3u-p7yM.js";import"./DraggableList-B3QVX3Cw.js";import"./search-CjEQMDkw.js";import"./Input-wY3__TYn.js";import"./useControlled-DU_OOF2s.js";import"./Button-DPfft23P.js";import"./small-cross-DvtylMEA.js";import"./ActionButton-CF7SnFNB.js";import"./Checkbox-B0X6lu94.js";import"./useValueChanged-BnW5wBJz.js";import"./CollapsiblePanel-BPN8nR8T.js";import"./MultiColumnSortDialog-Da8rV0Qy.js";import"./MenuTrigger-BWlRwIPv.js";import"./CompositeItem-zAhJ8rlm.js";import"./ToolbarRootContext-Bgke2_pO.js";import"./getDisabledMountTransitionStyles-DkCCt5VQ.js";import"./getPseudoElementBounds-Dwn15gm-.js";import"./chevron-down-Brw6_9zU.js";import"./index-GmGknXw_.js";import"./error-3Qx0C84K.js";import"./BaseCbacBanner-CBoCpMa-.js";import"./makeExternalStore-DypcUv4D.js";import"./Tooltip-CWCf5amX.js";import"./PopoverPopup-DMOv5d-q.js";import"./debounce-D0Ct84sS.js";import"./tick-DVS2p6T6.js";import"./DropdownField-Cspf7eME.js";import"./isEqual-DPMSqT0P.js";import"./withOsdkMetrics-DZCo0Bwa.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
