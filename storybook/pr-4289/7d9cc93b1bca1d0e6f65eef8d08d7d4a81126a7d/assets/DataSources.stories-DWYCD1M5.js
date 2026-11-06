import{j as r}from"./iframe-CYWKmKsr.js";import{O as b}from"./object-table-CYu743XN.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BYXU-Mgb.js";import{u as g}from"./useOsdkClient-KfXWcl-D.js";import"./preload-helper-CZxqSgr4.js";import"./Table-B7FNh3h6.js";import"./index-BjhNRAAe.js";import"./Dialog-C0XHXV-E.js";import"./cross-DwHZ8wsx.js";import"./svgIconContainer-uvoYHEep.js";import"./useBaseUiId-CUYHUXgP.js";import"./InternalBackdrop-o-O31_oB.js";import"./composite-BLYmi_ZT.js";import"./index-BIzhtmMD.js";import"./index-CV_T3ZWx.js";import"./index-E5eoVw6A.js";import"./useEventCallback-CEYn9Z7G.js";import"./SkeletonBar-BmvrkymP.js";import"./LoadingCell-Dhlo7QCt.js";import"./ColumnConfigDialog-vj0c16i5.js";import"./DraggableList-DgsnRl74.js";import"./search-DEjEejFg.js";import"./Input-DhtTH-yg.js";import"./useControlled-Cmfvaful.js";import"./Button-Dsxz3sQ9.js";import"./small-cross-Bq0Rd3mQ.js";import"./ActionButton-D6ugCtzY.js";import"./Checkbox-BJCnezq_.js";import"./useValueChanged-CyYxoKaI.js";import"./CollapsiblePanel-CNqItG4o.js";import"./MultiColumnSortDialog-DkqN_a2d.js";import"./MenuTrigger-CJ_KappX.js";import"./CompositeItem-DES--d3v.js";import"./ToolbarRootContext-D-OgFfxn.js";import"./getDisabledMountTransitionStyles-jsr2iyKL.js";import"./getPseudoElementBounds-CdbUSWec.js";import"./chevron-down-CS2_34kJ.js";import"./index-BAMyMGOv.js";import"./error-D0LuxI0-.js";import"./BaseCbacBanner-B2BRkW3t.js";import"./makeExternalStore-BcIe4sBs.js";import"./Tooltip-d1W559-2.js";import"./isObject-BtxB2d-s.js";import"./debounce-FzhUUz5q.js";import"./tick-D7vMFMoW.js";import"./DropdownField-D7boWEU7.js";import"./isEqual-BMzS8efs.js";import"./_baseIsEqual-DJxltLfr.js";import"./withOsdkMetrics-C5qHzwaF.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
