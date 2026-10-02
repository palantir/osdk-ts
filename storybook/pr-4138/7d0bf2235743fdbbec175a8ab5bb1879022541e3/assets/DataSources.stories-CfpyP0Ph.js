import{j as r}from"./iframe-rp70fwwu.js";import{O as b}from"./object-table-JyO8eHyu.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BT0CZarV.js";import{u as g}from"./useOsdkClient-Cw47H3av.js";import"./preload-helper-EME5q9Jz.js";import"./Table-DREJSIaf.js";import"./index-B4gvWsM6.js";import"./Dialog-C8n9hMq-.js";import"./cross-DNFUYcP8.js";import"./svgIconContainer-CDe1DB3O.js";import"./useBaseUiId-DldllHCL.js";import"./InternalBackdrop-CB3wopGK.js";import"./composite-CuPJzJjA.js";import"./index-ChLpCK4q.js";import"./index-HM1ZzYao.js";import"./index-DcEXat2t.js";import"./useEventCallback-Z9CbEpN8.js";import"./SkeletonBar-DWB3vied.js";import"./LoadingCell-B1Kd8OIp.js";import"./ColumnConfigDialog-RzTfEw8Q.js";import"./DraggableList-CeOMgYa3.js";import"./search-BsQb9YNR.js";import"./Input-DVBMxCln.js";import"./useControlled-CHM7HnpL.js";import"./Button-iCfiBEgd.js";import"./small-cross-DQIE1Y4r.js";import"./ActionButton-rTM9eEX4.js";import"./Checkbox-AMJVntXX.js";import"./useValueChanged-B2lIX5Tz.js";import"./CollapsiblePanel-BdVNDfzn.js";import"./MultiColumnSortDialog-CIdGnCHv.js";import"./MenuTrigger-O6fRFI1R.js";import"./CompositeItem-Dn7oIdOY.js";import"./ToolbarRootContext-CoUfjY-d.js";import"./getDisabledMountTransitionStyles-DdvpbK1X.js";import"./getPseudoElementBounds-24IcT4YD.js";import"./chevron-down-Ba1aP0dz.js";import"./index-B9gm3rqX.js";import"./error-BMFKsVka.js";import"./BaseCbacBanner-Cwz1pVQs.js";import"./makeExternalStore-povODIJu.js";import"./Tooltip-CvmyFLlW.js";import"./PopoverPopup-BCC2iev1.js";import"./debounce-nCyeRLUU.js";import"./tick-Cg7GSAs6.js";import"./DropdownField-BAITP7Mj.js";import"./isEqual-DlTS0HA0.js";import"./withOsdkMetrics-Dg07kNzb.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
