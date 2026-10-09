import{j as r}from"./iframe-Cul2E1vG.js";import{O as b}from"./object-table-CIO2ioDr.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-3qavP2eu.js";import{u as g}from"./useOsdkClient-DJKFKBMb.js";import"./preload-helper--6M4Khrx.js";import"./Table-Bum8c-iM.js";import"./index-Bn5VDq5b.js";import"./Dialog-DlflpEpN.js";import"./cross-C6zh1HjN.js";import"./svgIconContainer-mVJAcMp8.js";import"./useBaseUiId-BQIQ8jck.js";import"./InternalBackdrop-m5F5-2dG.js";import"./composite-SNvyYtRl.js";import"./index-cnCRVpDv.js";import"./index-B39_Zfhs.js";import"./index-BgP6GmOx.js";import"./useEventCallback-DWZk488X.js";import"./SkeletonBar-XecFs5pz.js";import"./LoadingCell-TNVaOATH.js";import"./ColumnConfigDialog-DOH9iw-n.js";import"./DraggableList-CHj5NpTN.js";import"./search-BwSeGY7Y.js";import"./Input-DRePQ-W6.js";import"./useControlled-CzFr7QRD.js";import"./Button-oDRXfShn.js";import"./small-cross-DLuZoUhq.js";import"./ActionButton-BcIcAh2z.js";import"./Checkbox-DVjhvMN4.js";import"./useValueChanged-B-W2cV9q.js";import"./CollapsiblePanel-BalN1idY.js";import"./MultiColumnSortDialog-CFEpc927.js";import"./MenuTrigger-KvGWfiFl.js";import"./CompositeItem-CvRXWH1T.js";import"./ToolbarRootContext-3DRfEU0Q.js";import"./getDisabledMountTransitionStyles-D8gt5JL7.js";import"./getPseudoElementBounds-Bzvith0Z.js";import"./chevron-down-zZ58BLda.js";import"./index-C8CW-UMA.js";import"./error-Bp_j0tyg.js";import"./BaseCbacBanner-DueaaImF.js";import"./makeExternalStore-Dw-8aD8B.js";import"./Tooltip-DXd-c-BV.js";import"./PopoverPopup-DOy0S3uG.js";import"./debounce-DapI4ZKL.js";import"./tick-CiTQftSD.js";import"./DropdownField-BbPTQMjY.js";import"./isEqual-Cm_OyyYX.js";import"./withOsdkMetrics-Cv3w3vr0.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
