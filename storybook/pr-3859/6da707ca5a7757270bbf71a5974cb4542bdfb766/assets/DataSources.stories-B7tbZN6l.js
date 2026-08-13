import{j as r}from"./iframe-CyuT7sA8.js";import{O as b}from"./object-table-Aj5fVVVg.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BFX58Oc0.js";import{u as g}from"./useOsdkClient-DfOiBBAH.js";import"./preload-helper-96BDXHaD.js";import"./Table-Du0o3kik.js";import"./index-C_6jq-CI.js";import"./Dialog-Cv_z4LDg.js";import"./cross-C5JPqzj3.js";import"./svgIconContainer-CaGNr8BU.js";import"./useBaseUiId-B5H6aoGe.js";import"./InternalBackdrop-CURFRzbw.js";import"./composite-CZN4L-Em.js";import"./index-C900sVPn.js";import"./index-BUf8UOrQ.js";import"./index-BACbzGM8.js";import"./useEventCallback-DmUbzO5M.js";import"./SkeletonBar-DEZz7Qea.js";import"./LoadingCell-BjpJ1NOX.js";import"./ColumnConfigDialog-2mIqR4x3.js";import"./DraggableList-D6Hkxnmk.js";import"./search-CKTNg7RE.js";import"./Input-KCuhgloF.js";import"./useControlled-CNQ4xPOD.js";import"./isEqual-BynPMucz.js";import"./isObject-C3_lsIkh.js";import"./Button-DEJD33aj.js";import"./ActionButton-DbRmvcNY.js";import"./Checkbox-BVUYdzSe.js";import"./useValueChanged-DatrXVPa.js";import"./CollapsiblePanel-CSABs0sQ.js";import"./MultiColumnSortDialog-DkS8JuZG.js";import"./MenuTrigger-BXMGENMv.js";import"./CompositeItem-DgOyYKdv.js";import"./ToolbarRootContext-D-yYDS8o.js";import"./getDisabledMountTransitionStyles-DiozD-9r.js";import"./getPseudoElementBounds-X2hHhho1.js";import"./chevron-down-DH6c9NVt.js";import"./index-DhRjIIVJ.js";import"./error-wRnolQK2.js";import"./BaseCbacBanner-Dcnep55n.js";import"./makeExternalStore-vHKDZBeW.js";import"./Tooltip-7QjXpwTd.js";import"./PopoverPopup-DsPbQxq-.js";import"./debounce-WsUiF9L6.js";import"./tick-DAlwGaLf.js";import"./DropdownField-CjJ4hYdn.js";import"./withOsdkMetrics-dgGlVNih.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
