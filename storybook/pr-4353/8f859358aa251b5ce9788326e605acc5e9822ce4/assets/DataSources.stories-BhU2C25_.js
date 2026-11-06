import{j as r}from"./iframe-BS0M2hwP.js";import{O as b}from"./object-table-7WjT7lpV.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-ChCt7jD0.js";import{u as g}from"./useOsdkClient-BxlQ8pCq.js";import"./preload-helper-C0HkGCdU.js";import"./Table-B88OXfMx.js";import"./index-CPPTt-fG.js";import"./Dialog-BP0H6HGJ.js";import"./cross-DzypzeyC.js";import"./svgIconContainer-NUXlWCmy.js";import"./useBaseUiId-77uYocVy.js";import"./InternalBackdrop-hDcB9FVt.js";import"./composite-Dtpk2934.js";import"./index-C8CN-2yF.js";import"./index-CnbN8-s2.js";import"./index-Cd_-CKig.js";import"./useEventCallback-CgXNOiJD.js";import"./SkeletonBar-D1-iix8R.js";import"./LoadingCell-BFik17i5.js";import"./ColumnConfigDialog-CGpO-jVp.js";import"./DraggableList-CKhydpzb.js";import"./search-DzKPAVbq.js";import"./Input-C2-Y_50j.js";import"./useControlled-C2cZAxJ2.js";import"./Button-Ba1VM7tv.js";import"./small-cross-DmunPPRL.js";import"./ActionButton-B-OGv12r.js";import"./Checkbox-KsdEkqmQ.js";import"./useValueChanged-DN5r-FMv.js";import"./CollapsiblePanel-BCL9LE3M.js";import"./MultiColumnSortDialog-BrDCJ6OQ.js";import"./MenuTrigger-TfSdmOH4.js";import"./CompositeItem-BonvX_5i.js";import"./ToolbarRootContext-3PBXuwUh.js";import"./getDisabledMountTransitionStyles-B7XR0ec5.js";import"./getPseudoElementBounds-CEDHgaG-.js";import"./chevron-down-OJJdZYcx.js";import"./index-CEsGU-7z.js";import"./error-B91-GI1R.js";import"./BaseCbacBanner-DXyM0xsn.js";import"./makeExternalStore-BO2WwozP.js";import"./Tooltip-D4cxOObb.js";import"./PopoverPopup-DpckpHOT.js";import"./debounce-DAswCS-u.js";import"./tick-B7id9DB4.js";import"./DropdownField-BSb2qsUX.js";import"./isEqual-DhYjGK75.js";import"./withOsdkMetrics-DDHgU96d.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
