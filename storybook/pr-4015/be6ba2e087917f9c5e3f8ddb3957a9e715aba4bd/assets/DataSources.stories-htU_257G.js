import{j as r}from"./iframe-BEJEJisA.js";import{O as b}from"./object-table-jm4sFZ3T.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BRJqw9dl.js";import{u as g}from"./useOsdkClient-Bpe-a7b_.js";import"./preload-helper-CTiopNJo.js";import"./Table-CUdKx4h7.js";import"./index-1N58UMzJ.js";import"./Dialog-BV1lMZPE.js";import"./cross-BjrVNHd5.js";import"./svgIconContainer-DsO6erGI.js";import"./useBaseUiId-Ew8LxSgO.js";import"./InternalBackdrop-DL9JbYUF.js";import"./composite-KwTbpSJb.js";import"./index-DCG3LK_H.js";import"./index-BMTQnMoQ.js";import"./index-B8J0Ow83.js";import"./useEventCallback-iVAQTX4_.js";import"./SkeletonBar-BhyVfmzi.js";import"./LoadingCell-mpz5oyrA.js";import"./ColumnConfigDialog-CmuQ8xtx.js";import"./DraggableList-ZC8q1xoS.js";import"./search-CrTCcvos.js";import"./Input-Dc1pIxfK.js";import"./useControlled-FA-c2Sau.js";import"./Button-BNegRBwl.js";import"./small-cross-DdmfQPNc.js";import"./ActionButton-2ogOV1x4.js";import"./Checkbox-DcD-s01f.js";import"./useValueChanged-acF7yMok.js";import"./CollapsiblePanel-DoZ_BIG5.js";import"./MultiColumnSortDialog-Qjze1ita.js";import"./MenuTrigger-f6q_Afz4.js";import"./CompositeItem-B4OpLzis.js";import"./ToolbarRootContext-NNa6yEkX.js";import"./getDisabledMountTransitionStyles-DfEIWT8z.js";import"./getPseudoElementBounds-BcQdcw-B.js";import"./chevron-down-USDozdCe.js";import"./index-BgY1n9at.js";import"./error-C4eZ36G4.js";import"./BaseCbacBanner-EAHHvgHQ.js";import"./makeExternalStore-DJsapvxx.js";import"./Tooltip-BgKnrnJ_.js";import"./PopoverPopup-Dj8W7Cn3.js";import"./debounce-r6XyHjgC.js";import"./tick-BPxV61Pe.js";import"./DropdownField-ED9pk3ub.js";import"./isEqual-D8fQwqRZ.js";import"./withOsdkMetrics-Cs8owx7q.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
