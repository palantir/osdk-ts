import{j as r}from"./iframe-7zkNpsTb.js";import{O as b}from"./object-table-C0NNCCeN.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CKHD3DQO.js";import{u as g}from"./useOsdkClient-Vip7aKrf.js";import"./preload-helper-BcwadNu2.js";import"./Table-CdEtTQGj.js";import"./index-D2Ps7yda.js";import"./Dialog-BA7Fb4VQ.js";import"./cross-CuqDFG72.js";import"./svgIconContainer-WZg9oowH.js";import"./useBaseUiId-KSlThZEb.js";import"./InternalBackdrop-BHCJp7SO.js";import"./composite-BrxcTD8Y.js";import"./index-CVa5QU3-.js";import"./index-DD_YShHf.js";import"./index-B8Wuwd1p.js";import"./useEventCallback-CNj_iPP2.js";import"./SkeletonBar-DOAgUDTQ.js";import"./LoadingCell-D38BbQrv.js";import"./ColumnConfigDialog-BbhmYQ2I.js";import"./DraggableList-CdsZ4puP.js";import"./search-LTMAICSm.js";import"./Input-Qt7qv0fd.js";import"./useControlled-CgLNclS7.js";import"./Button-CF1rIE6I.js";import"./small-cross-Cqucs5l-.js";import"./ActionButton-DOn_4WcG.js";import"./Checkbox-gZaZw0kJ.js";import"./useValueChanged-CcWIuI5C.js";import"./CollapsiblePanel-BJ-_vjCN.js";import"./MultiColumnSortDialog-Dd-zb_XL.js";import"./MenuTrigger-B5MKEVCA.js";import"./CompositeItem-B9MRs6kj.js";import"./ToolbarRootContext-DK5I1UJe.js";import"./getDisabledMountTransitionStyles-DWBf3DRe.js";import"./getPseudoElementBounds-CRqDORYM.js";import"./chevron-down-R1agRcMd.js";import"./index-Bav8Bbwa.js";import"./error-CKvp5L_L.js";import"./BaseCbacBanner-BQtHX_ci.js";import"./makeExternalStore-DZpAF_p8.js";import"./Tooltip-ClphVmvg.js";import"./PopoverPopup-D-_EHFJQ.js";import"./debounce-CddDKvV0.js";import"./tick-BYcH1X9T.js";import"./DropdownField-C8ry4gZT.js";import"./isEqual-DIMXO8ep.js";import"./withOsdkMetrics-BuwNXHNi.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
