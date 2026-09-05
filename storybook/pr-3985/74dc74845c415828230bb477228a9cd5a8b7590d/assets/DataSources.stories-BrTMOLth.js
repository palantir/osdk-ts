import{j as r}from"./iframe-B0aax5t4.js";import{O as b}from"./object-table-CrSjyILN.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D9ljwqjn.js";import{u as g}from"./useOsdkClient-Bk4AmunN.js";import"./preload-helper-B_i0Odcu.js";import"./Table-C8ig-ejt.js";import"./index-CA_7V0ln.js";import"./Dialog-BP_aLww7.js";import"./cross-C3BbzJF1.js";import"./svgIconContainer-DSeQyMEd.js";import"./useBaseUiId-C9EFBUqt.js";import"./InternalBackdrop-YHaUWllu.js";import"./composite-Cu5vApVf.js";import"./index-FaCZN02u.js";import"./index-BOMUn4js.js";import"./index-Crxx3EiI.js";import"./useEventCallback-81QtWnOW.js";import"./SkeletonBar-DvtukVW0.js";import"./LoadingCell-CgaGKxH-.js";import"./ColumnConfigDialog-CIctkUBq.js";import"./DraggableList-CQExoIKz.js";import"./search-7EK0E19p.js";import"./Input-DuNf2WGN.js";import"./useControlled-Cjro_C_L.js";import"./Button-DcLOyqPK.js";import"./small-cross-BXeSo4Fh.js";import"./ActionButton-B3wz3E9S.js";import"./Checkbox-CopBKgc0.js";import"./useValueChanged-DrFFTdCP.js";import"./CollapsiblePanel-BouT-1X2.js";import"./MultiColumnSortDialog-D65JRXoT.js";import"./MenuTrigger-_QNNWd1o.js";import"./CompositeItem-DhB66LbS.js";import"./ToolbarRootContext-D_WwjLAe.js";import"./getDisabledMountTransitionStyles-DopRS8uM.js";import"./getPseudoElementBounds-CxIE0dVy.js";import"./chevron-down-59Pc7DyK.js";import"./index-DhaocRdq.js";import"./error-DSukmTRO.js";import"./BaseCbacBanner-B0R2rA0w.js";import"./makeExternalStore-C8fdPEkr.js";import"./Tooltip-D1IoO4LU.js";import"./PopoverPopup-Dawl7HJi.js";import"./debounce-DhQIUNPS.js";import"./tick-CGBQp0dn.js";import"./DropdownField-ELR4mU-J.js";import"./isEqual-BU7ie3df.js";import"./withOsdkMetrics-BMYYjUQJ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
