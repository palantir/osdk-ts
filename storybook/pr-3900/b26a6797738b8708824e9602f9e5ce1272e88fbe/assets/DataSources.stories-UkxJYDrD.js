import{j as r}from"./iframe-KOhODaDj.js";import{O as b}from"./object-table-DSWTbMDR.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DKMEy9Zj.js";import{u as g}from"./useOsdkClient-j0dX3qXm.js";import"./preload-helper-BODknkj-.js";import"./Table-CNDm6mjo.js";import"./index-B0nzDQgS.js";import"./Dialog-ahiGBcOB.js";import"./cross-Dgf421i8.js";import"./svgIconContainer-C65gZPep.js";import"./useBaseUiId-gSHm8V6S.js";import"./InternalBackdrop-DdOq3Puu.js";import"./composite-C_Vf-kWD.js";import"./index-DV1hfBzW.js";import"./index-D9daGdR1.js";import"./index-Cqyyg3ii.js";import"./useEventCallback-d1jn-iXH.js";import"./SkeletonBar-M71vaxj9.js";import"./LoadingCell-Crqd7-Dl.js";import"./ColumnConfigDialog-CdN84COY.js";import"./DraggableList-D--ERkhp.js";import"./search-BaFhwWB9.js";import"./Input-B02ROypI.js";import"./useControlled-DJm187qA.js";import"./Button-DhCL6Aji.js";import"./small-cross-D82pj7CN.js";import"./ActionButton-CxYw6q3v.js";import"./Checkbox-B5WPRVRc.js";import"./useValueChanged-CtNkJgXl.js";import"./CollapsiblePanel-_DkAa5xs.js";import"./MultiColumnSortDialog-CXqEow0k.js";import"./MenuTrigger-DtX4J4qI.js";import"./CompositeItem-KroluAr_.js";import"./ToolbarRootContext-CEqE4F8_.js";import"./getDisabledMountTransitionStyles-CvvFseQ6.js";import"./getPseudoElementBounds-DmQW0k5c.js";import"./chevron-down-CWcC4j17.js";import"./index-Cebj72FH.js";import"./error-BU6upqzF.js";import"./BaseCbacBanner-D-CAdumw.js";import"./makeExternalStore-mEv2XVah.js";import"./Tooltip-DOeCzjZQ.js";import"./PopoverPopup-lOn6mGJy.js";import"./debounce-DUXfBiTb.js";import"./tick-f2pTlKFj.js";import"./DropdownField-k4eRTytw.js";import"./isEqual-BqKBT1By.js";import"./withOsdkMetrics-D2FX6zR1.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
