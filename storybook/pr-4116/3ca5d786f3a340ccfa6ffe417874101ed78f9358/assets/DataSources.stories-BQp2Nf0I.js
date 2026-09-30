import{j as r}from"./iframe-DxVz5dus.js";import{O as b}from"./object-table-DOOpOjxQ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DOf8suvE.js";import{u as g}from"./useOsdkClient-DWdsPkLC.js";import"./preload-helper-dij9S3RJ.js";import"./Table-D-CEaVeb.js";import"./index-C_W-VT0S.js";import"./Dialog-BDHH0maw.js";import"./cross-IXW3xmZm.js";import"./svgIconContainer-ftSbGeci.js";import"./useBaseUiId-BWXYzcoK.js";import"./InternalBackdrop-B1SYraZj.js";import"./composite-BDVlfNwN.js";import"./index-ClRjmnyd.js";import"./index-gok66sxW.js";import"./index-BiJTgGJY.js";import"./useEventCallback-CX0aAoan.js";import"./SkeletonBar-DERF-gsY.js";import"./LoadingCell-CvxZL9kC.js";import"./ColumnConfigDialog-J_BbbcKh.js";import"./DraggableList-L-6Y09gw.js";import"./search-C5WRo3gI.js";import"./Input-BLn4Lqlk.js";import"./useControlled-laJEGVBG.js";import"./Button-DkKQyNy7.js";import"./small-cross-DNkarUz2.js";import"./ActionButton-B5XzNvTu.js";import"./Checkbox-5nk_Ef0z.js";import"./useValueChanged-C6gCry8f.js";import"./CollapsiblePanel-emSmjH55.js";import"./MultiColumnSortDialog-CLj_cEaP.js";import"./MenuTrigger-m_qywH2D.js";import"./CompositeItem-DZxjvmIc.js";import"./ToolbarRootContext-BhnwoH5s.js";import"./getDisabledMountTransitionStyles-jz6kYw7l.js";import"./getPseudoElementBounds-DLZHdgfT.js";import"./chevron-down-CJ_JWdST.js";import"./index-DQFNyqTE.js";import"./error-l8hi8NpA.js";import"./BaseCbacBanner-DAlbmB8O.js";import"./makeExternalStore-6HRE-tXR.js";import"./Tooltip-CIQ48OAI.js";import"./PopoverPopup-DDubBzbx.js";import"./debounce-HK4ZQpWE.js";import"./tick-B2s8zm1S.js";import"./DropdownField-CXyq1EI7.js";import"./isEqual-BBaINTWv.js";import"./withOsdkMetrics-BUQXNERU.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
