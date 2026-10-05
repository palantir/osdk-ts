import{j as r}from"./iframe-DM2lbhq3.js";import{O as b}from"./object-table-BahOgCWX.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BeGlrbgb.js";import{u as g}from"./useOsdkClient-BLFd6qg6.js";import"./preload-helper-CVlRJCQ4.js";import"./Table-D8aaq1ON.js";import"./index-BxgMbwQW.js";import"./Dialog-D6Sy0Hei.js";import"./cross-C6M-wOmQ.js";import"./svgIconContainer-DawECmqq.js";import"./useBaseUiId-D_FvUqqy.js";import"./InternalBackdrop-hyoEPQMb.js";import"./composite-iccYdnrf.js";import"./index-CCN1yxkK.js";import"./index-Bpwngerd.js";import"./index-BBAnTYss.js";import"./useEventCallback-CKRLND5s.js";import"./SkeletonBar-B2B70iHE.js";import"./LoadingCell-Cpy76GMo.js";import"./ColumnConfigDialog-d9r3q5wS.js";import"./DraggableList-BJxXS1Me.js";import"./search-B5W8bLyf.js";import"./Input-CY0qF8uS.js";import"./useControlled-Ca36YxvC.js";import"./Button-XbpukpvP.js";import"./small-cross-BKA-Ml9N.js";import"./ActionButton-_pm_iS5i.js";import"./Checkbox-CsYoJ4b7.js";import"./useValueChanged-BxW-Xkhx.js";import"./CollapsiblePanel-DpDskcR4.js";import"./MultiColumnSortDialog-D-GYz7Kr.js";import"./MenuTrigger-BKsdj5VU.js";import"./CompositeItem-BFuIVpH0.js";import"./ToolbarRootContext-Bg6hLVB6.js";import"./getDisabledMountTransitionStyles-CcD-BZKR.js";import"./getPseudoElementBounds-CzHg-ye1.js";import"./chevron-down-DyskK5Yf.js";import"./index-BCS5K0iy.js";import"./error-DJU2sF2P.js";import"./BaseCbacBanner-DdVdOUAf.js";import"./makeExternalStore-BiR7BXmk.js";import"./Tooltip-DbczZTzH.js";import"./PopoverPopup-CX9LkjiZ.js";import"./debounce-vAXahSDb.js";import"./tick-_p_7zkXC.js";import"./DropdownField-d-diOJrZ.js";import"./isEqual-CZuKKajL.js";import"./withOsdkMetrics-URzhtFq2.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
