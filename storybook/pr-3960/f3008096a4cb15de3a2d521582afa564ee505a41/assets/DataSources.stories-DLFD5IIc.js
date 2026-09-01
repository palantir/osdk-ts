import{j as r}from"./iframe-D_WpdUHL.js";import{O as b}from"./object-table-kllJGXjw.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BnsmIueM.js";import{u as g}from"./useOsdkClient-Cu_yIzUf.js";import"./preload-helper-BfbLhjw5.js";import"./Table-1fsqVHtg.js";import"./index-CZE7Riyb.js";import"./Dialog-DgfJI68m.js";import"./cross-CvDy6iFc.js";import"./svgIconContainer-CBQMj0qb.js";import"./useBaseUiId-CTUJE0Sx.js";import"./InternalBackdrop-YtJWzUwb.js";import"./composite-CC5HrOOE.js";import"./index-BmV5pGaZ.js";import"./index-CvQQbIo-.js";import"./index-D1vvkKN2.js";import"./useEventCallback-DWrs0j0M.js";import"./SkeletonBar-B89WeM2h.js";import"./LoadingCell-BE6ispjy.js";import"./ColumnConfigDialog-veCJ1eMU.js";import"./DraggableList-C2Br_rsW.js";import"./search-N03HR__x.js";import"./Input-DIOuBl2R.js";import"./useControlled-Mrcysr82.js";import"./Button-DJB9EV9F.js";import"./small-cross-wSfax76M.js";import"./ActionButton-DfWIAF9R.js";import"./Checkbox-BiQ39D9A.js";import"./useValueChanged-DUe6FFiE.js";import"./CollapsiblePanel-CWxv4vq_.js";import"./MultiColumnSortDialog-BtKXIU3H.js";import"./MenuTrigger-CO_wZNdS.js";import"./CompositeItem-515r1Apy.js";import"./ToolbarRootContext-DsstPgFG.js";import"./getDisabledMountTransitionStyles-DiSs_8Nu.js";import"./getPseudoElementBounds-CHMLBxAW.js";import"./chevron-down-CDMlXncd.js";import"./index-aaeJHi0G.js";import"./error-DK46kd3k.js";import"./BaseCbacBanner-D2ZdXYVv.js";import"./makeExternalStore-DRPBrMWd.js";import"./Tooltip-CBK5IfeG.js";import"./PopoverPopup-JNywrunc.js";import"./debounce-SIPxKEJx.js";import"./tick-DZdrjQ9O.js";import"./DropdownField-Ce2ZxPcD.js";import"./isEqual-DiME9bkD.js";import"./withOsdkMetrics-ICzHztvp.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
