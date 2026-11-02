import{j as r}from"./iframe-CgfdIm0T.js";import{O as b}from"./object-table-DrnlDv9c.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-dPfDVQKL.js";import{u as g}from"./useOsdkClient-B3iR8qwm.js";import"./preload-helper-C8qWAL46.js";import"./Table-DUMakJ11.js";import"./index-BeSyGo3F.js";import"./Dialog-U0YBM8su.js";import"./cross-CWciybKu.js";import"./svgIconContainer-DQ0tbGLY.js";import"./useBaseUiId-BuuF3bkV.js";import"./InternalBackdrop-qMgkwTyz.js";import"./composite-CUpx3Hda.js";import"./index-B8rhYuyr.js";import"./index-bby2SWWb.js";import"./index-BYKYJzqq.js";import"./useEventCallback-roPvTisA.js";import"./SkeletonBar-BRUSZP5d.js";import"./LoadingCell-CpCzQijd.js";import"./ColumnConfigDialog-CoKK8VcE.js";import"./DraggableList-Dr8Zz3hH.js";import"./search-DENXSVyb.js";import"./Input-BG9nzqHz.js";import"./useControlled-B0N5dBnJ.js";import"./Button-CVc3RSfH.js";import"./small-cross-DX0KVrVi.js";import"./ActionButton-CcLOh3Yb.js";import"./Checkbox-DTTupP5N.js";import"./useValueChanged-0xGZfbNw.js";import"./CollapsiblePanel-CNv0K6GO.js";import"./MultiColumnSortDialog-C6XaIndo.js";import"./MenuTrigger-DZtYSqfe.js";import"./CompositeItem-BTF_cTSf.js";import"./ToolbarRootContext-DMK8ajZX.js";import"./getDisabledMountTransitionStyles-COYOVfxZ.js";import"./getPseudoElementBounds-FnH3Aw9k.js";import"./chevron-down-CiBD6Dqi.js";import"./index-BBcDpAeT.js";import"./error-Bu8LxMV7.js";import"./BaseCbacBanner-C_N-7cgH.js";import"./makeExternalStore-BNPt347_.js";import"./Tooltip-ygywzpjU.js";import"./PopoverPopup-DlHSMVYr.js";import"./debounce-DQksQltd.js";import"./tick-hxPJxWFp.js";import"./DropdownField-BMHyrqgr.js";import"./isEqual-D3J8sFzN.js";import"./withOsdkMetrics-BU1Vym1S.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
