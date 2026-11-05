import{j as r}from"./iframe-ClYhC0-S.js";import{O as b}from"./object-table-Dqu58rUu.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-x1Vup-_y.js";import{u as g}from"./useOsdkClient-C5IVuxHo.js";import"./preload-helper-CNkkVcag.js";import"./Table-C4Oz59hI.js";import"./index-Bmj0xk3d.js";import"./Dialog-B3za_J3t.js";import"./cross-C_2oyR03.js";import"./svgIconContainer-9bIBfj8h.js";import"./useBaseUiId-Dd8fT170.js";import"./InternalBackdrop-BvLY_ojf.js";import"./composite-BwqNvQ0F.js";import"./index-D8PsRgog.js";import"./index-CI-u4eDt.js";import"./index-BMLvSUmF.js";import"./useEventCallback-DNonn3MU.js";import"./SkeletonBar-BZOsAT84.js";import"./LoadingCell-sf3vBVse.js";import"./ColumnConfigDialog-CW2Pt_n3.js";import"./DraggableList-C1XdGFJ9.js";import"./search-BBIKhGWf.js";import"./Input-D8CWVoNO.js";import"./useControlled-4Gm1FEJo.js";import"./Button-Dg23Hvs4.js";import"./small-cross-aEaqetZ9.js";import"./ActionButton-DNeWdOgS.js";import"./Checkbox-BEAZN8rt.js";import"./useValueChanged-6OE2Wa-N.js";import"./CollapsiblePanel-CGTT3k_x.js";import"./MultiColumnSortDialog-BCKeJgV_.js";import"./MenuTrigger-DajGnyRI.js";import"./CompositeItem-CPrfZrML.js";import"./ToolbarRootContext-DAdrKT5D.js";import"./getDisabledMountTransitionStyles-DrhK1CmR.js";import"./getPseudoElementBounds-CqY0Dp1D.js";import"./chevron-down-DJbVh1LY.js";import"./index-cVgcsKtQ.js";import"./error-BD_aaRfa.js";import"./BaseCbacBanner-DiaW3k_F.js";import"./makeExternalStore-BHHGj5YL.js";import"./Tooltip-Cq73361T.js";import"./isObject-BxkrbndP.js";import"./debounce-Ck8WOOl2.js";import"./tick-BT7qCCyz.js";import"./DropdownField-DcyfDtmr.js";import"./isEqual-_vvRFbmo.js";import"./_baseIsEqual-BnmLXaSx.js";import"./withOsdkMetrics-BvbgqpCV.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};
