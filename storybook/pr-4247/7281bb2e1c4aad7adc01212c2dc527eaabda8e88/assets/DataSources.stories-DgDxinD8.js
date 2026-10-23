import{j as r}from"./iframe-Bfa633nI.js";import{O as b}from"./object-table-CSJb6QQI.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BopUDl54.js";import{u as g}from"./useOsdkClient-yvB3K87Q.js";import"./preload-helper-S8ArRewN.js";import"./Table-R1_6S3Bc.js";import"./index-CAFX3a2o.js";import"./Dialog-B11A-NQW.js";import"./cross-CO8lPM-Y.js";import"./svgIconContainer-CMg2uk3-.js";import"./useBaseUiId-DkL2EsGI.js";import"./InternalBackdrop-BkK8ufDF.js";import"./composite-MyhD4oE7.js";import"./index-CyqiMZNC.js";import"./index-g_La0Psk.js";import"./index-D18CgaCd.js";import"./useEventCallback-DqyAn3HD.js";import"./SkeletonBar-Q9lR3jGv.js";import"./LoadingCell-CukCo_Qp.js";import"./ColumnConfigDialog-D1KFMTQ9.js";import"./DraggableList--tFdoGM9.js";import"./search-DBXxF15B.js";import"./Input-vSvt0OGa.js";import"./useControlled-DE-SX_fd.js";import"./Button-bQTkGamX.js";import"./small-cross-dpPEHUzg.js";import"./ActionButton-DjVRKWVw.js";import"./Checkbox-D8QHegc2.js";import"./useValueChanged-BMAglr7j.js";import"./CollapsiblePanel-CgpMYvLN.js";import"./MultiColumnSortDialog-Cq87ZCTh.js";import"./MenuTrigger-bATh7p8G.js";import"./CompositeItem-BHvcBU4g.js";import"./ToolbarRootContext-rfZwmAj4.js";import"./getDisabledMountTransitionStyles-CdY-VY1I.js";import"./getPseudoElementBounds-DASAzYI8.js";import"./chevron-down-sNl64qaM.js";import"./index-BnocMrsR.js";import"./error-jmH2Pe7J.js";import"./BaseCbacBanner-WLoGuysJ.js";import"./makeExternalStore-D8-WR8za.js";import"./Tooltip-CGVIqFa_.js";import"./PopoverPopup-Bli7SJMu.js";import"./debounce-UGU4ubXF.js";import"./tick-BpRcty2P.js";import"./DropdownField-DBLuDlNB.js";import"./isEqual-DrwA24xd.js";import"./withOsdkMetrics-BKztbHSk.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
