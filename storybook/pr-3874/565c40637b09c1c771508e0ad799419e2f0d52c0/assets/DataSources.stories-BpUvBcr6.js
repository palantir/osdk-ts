import{j as r}from"./iframe-CEoeK06g.js";import{O as b}from"./object-table-PCq9mE--.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Da1QfIGA.js";import{u as g}from"./useOsdkClient-BIAe_nCU.js";import"./preload-helper-D0HY9C8v.js";import"./Table-CiBk8Kuj.js";import"./index-CbcAYo9G.js";import"./Dialog-Do5jMUdN.js";import"./cross-D1VoGJpt.js";import"./svgIconContainer-CtUSixF7.js";import"./useBaseUiId-DlA3_oGO.js";import"./InternalBackdrop-CVkNWXpf.js";import"./composite-DO_ZxZQ1.js";import"./index-CDp82B90.js";import"./index-BWMfSkVY.js";import"./index-ki59gnJf.js";import"./useEventCallback-DdW65cyv.js";import"./SkeletonBar-Dm0Xea2F.js";import"./LoadingCell-BE7MH8sz.js";import"./ColumnConfigDialog-D5MKgIYZ.js";import"./DraggableList-DShl7tzb.js";import"./search-Dv4SY-Fw.js";import"./Input-BNn8L34r.js";import"./useControlled-BAISDtcI.js";import"./Button-xvTdbQWs.js";import"./small-cross-a5SRE8gl.js";import"./ActionButton-CUfdyyWy.js";import"./Checkbox-DeqDc74u.js";import"./useValueChanged-BCvrXU65.js";import"./CollapsiblePanel-D5OwgvzE.js";import"./MultiColumnSortDialog-D7XhxwMe.js";import"./MenuTrigger-C8ZuGGuG.js";import"./CompositeItem-Hmlr3-VY.js";import"./ToolbarRootContext-DAZXfHsD.js";import"./getDisabledMountTransitionStyles-yz_wdS6E.js";import"./getPseudoElementBounds-OONeQKhP.js";import"./chevron-down-CM7IFICS.js";import"./index-D39DbJ__.js";import"./error-gl_nrOic.js";import"./BaseCbacBanner-BSA1h8ba.js";import"./makeExternalStore-B-qUAwEg.js";import"./Tooltip-BXxrMAtC.js";import"./PopoverPopup-Cwf1wOPM.js";import"./debounce-D18MSEXa.js";import"./tick-B8IBu5LL.js";import"./DropdownField-C-5y2i30.js";import"./isEqual-DcYqH4l4.js";import"./withOsdkMetrics-CNrGK-H6.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
