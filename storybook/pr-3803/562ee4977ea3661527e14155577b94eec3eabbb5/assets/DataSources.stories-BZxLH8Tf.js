import{j as r}from"./iframe-fAfbdLhf.js";import{O as b}from"./object-table-CaYd998O.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CCmXLI2a.js";import{u as g}from"./useOsdkClient-CwPXDR0m.js";import"./preload-helper-DWDN4VMu.js";import"./Table-C3JmlKo7.js";import"./index-CBwRWuPv.js";import"./Dialog-DCz7cHV2.js";import"./cross-ByzYitNg.js";import"./svgIconContainer-BBjFJa49.js";import"./useBaseUiId-DE9gu32f.js";import"./InternalBackdrop-BS8Cja_X.js";import"./composite-CtiB8fcn.js";import"./index-UPhMUfRS.js";import"./index-DpDZejss.js";import"./index-Dy9UXDXz.js";import"./useEventCallback-r0z5W8b6.js";import"./SkeletonBar-McMludcc.js";import"./LoadingCell-fGiZV1sq.js";import"./ColumnConfigDialog-C7OjEVZo.js";import"./DraggableList-CWadax09.js";import"./search-eStI4uI5.js";import"./Input-xMPnLU6F.js";import"./useControlled-BUpGFmgH.js";import"./isEqual-C83scye-.js";import"./isObject-BRg54IAs.js";import"./Button-D_3jmW16.js";import"./ActionButton-DGnJ6gFM.js";import"./Checkbox-DtOU4wvJ.js";import"./useValueChanged-BN058uvs.js";import"./CollapsiblePanel-BezM9uDM.js";import"./MultiColumnSortDialog-CutVSKHs.js";import"./MenuTrigger-BAXI7yhJ.js";import"./CompositeItem-AttJnCul.js";import"./ToolbarRootContext-CAvhaC10.js";import"./getDisabledMountTransitionStyles-CBMJ1zoA.js";import"./getPseudoElementBounds-6yubEjwS.js";import"./chevron-down-D5pYynjB.js";import"./index-9zEFE1EL.js";import"./error-1ACuOiBT.js";import"./BaseCbacBanner-BYgUg6SG.js";import"./makeExternalStore-CPFS4LBF.js";import"./Tooltip-CJvP9DJK.js";import"./PopoverPopup-GwDVfPwB.js";import"./toNumber-R8DRtlO1.js";import"./tick-Cef6tuE-.js";import"./DropdownField-DtiVj4Pt.js";import"./withOsdkMetrics-gL21sZFb.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
