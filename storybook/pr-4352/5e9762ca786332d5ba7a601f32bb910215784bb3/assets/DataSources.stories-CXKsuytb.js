import{j as r}from"./iframe-B7iXMeep.js";import{O as b}from"./object-table-B9UZXCXn.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-u3FCBkL8.js";import{u as g}from"./useOsdkClient-B0C9p8qN.js";import"./preload-helper-BZFSoYNL.js";import"./Table-Pt4boUVr.js";import"./index-B9IPxHLp.js";import"./Dialog-BKfzE-yo.js";import"./cross-DxJs6dla.js";import"./svgIconContainer-6zXBkUlH.js";import"./useBaseUiId-D1eq_nvb.js";import"./InternalBackdrop-dELTuav9.js";import"./composite-vYr7iKxA.js";import"./index-DO_Xy6GM.js";import"./index-BCuE63Ls.js";import"./index-C7X42qv-.js";import"./useEventCallback-lGcIidgf.js";import"./SkeletonBar-DM6oPXtG.js";import"./LoadingCell-BO8IZx3f.js";import"./ColumnConfigDialog-Syoe0F7T.js";import"./DraggableList-dU0OXsyp.js";import"./search-CC1z-TYa.js";import"./Input-CXcN1OqN.js";import"./useControlled-BhUv2c2y.js";import"./Button-Cs7xUkhF.js";import"./small-cross-DuRTpqsB.js";import"./ActionButton-BT5QM3LR.js";import"./Checkbox-BMFNKKb2.js";import"./useValueChanged-Ca_viAtG.js";import"./CollapsiblePanel-meNR4Xwz.js";import"./MultiColumnSortDialog-D862tvOA.js";import"./MenuTrigger-HqcNVrC9.js";import"./CompositeItem-B2vumib4.js";import"./ToolbarRootContext-U7XGc6m3.js";import"./getDisabledMountTransitionStyles-CJVOz_Wf.js";import"./getPseudoElementBounds-3y1P965l.js";import"./chevron-down-S3M-k2gy.js";import"./index-igxynrzH.js";import"./error-BqkMjiz6.js";import"./BaseCbacBanner-DNqGS3n1.js";import"./makeExternalStore-myfZT6Ru.js";import"./Tooltip-SwHBo8I_.js";import"./isObject-C8naLxpN.js";import"./debounce-BhHOqNYV.js";import"./tick-Ddmq0CLi.js";import"./DropdownField-oRa3_E0o.js";import"./isEqual-BvYKqMbJ.js";import"./_baseIsEqual-D0ACkd8L.js";import"./withOsdkMetrics-Be4NSs13.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
