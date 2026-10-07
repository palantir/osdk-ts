import{j as r}from"./iframe-BMLtitQA.js";import{O as b}from"./object-table-y9i5UT5J.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CpWPTwDL.js";import{u as g}from"./useOsdkClient-DL7Kf8Sx.js";import"./preload-helper-B7zvwNzg.js";import"./Table-DH-wZ72m.js";import"./index-BKoaBi8s.js";import"./Dialog-3laZpvVQ.js";import"./cross-B9AlOyDj.js";import"./svgIconContainer-DG_uvfKl.js";import"./useBaseUiId-Bv7ijZL9.js";import"./InternalBackdrop-CHrkdZLj.js";import"./composite-0pBAMAMm.js";import"./index-1wGhlHyg.js";import"./index-G040djXj.js";import"./index-AqEp1dK7.js";import"./useEventCallback-DBFZ4mZ7.js";import"./SkeletonBar-BrybbI32.js";import"./LoadingCell-C_9ZXwvH.js";import"./ColumnConfigDialog-nYNMKvUs.js";import"./DraggableList-BaEa-CAp.js";import"./search-CINj6xtb.js";import"./Input-D3mEoBXJ.js";import"./useControlled-BSRFoePA.js";import"./Button-eAAIImFA.js";import"./small-cross-Cu-xAWUl.js";import"./ActionButton-BE8P3Fn6.js";import"./Checkbox-BR1FtCPB.js";import"./useValueChanged-3DIww79j.js";import"./CollapsiblePanel-DJu6yMtL.js";import"./MultiColumnSortDialog-llKG8jOZ.js";import"./MenuTrigger-y3laeChq.js";import"./CompositeItem-FfLXXCMg.js";import"./ToolbarRootContext-C3i3QER6.js";import"./getDisabledMountTransitionStyles-CmHRQiW3.js";import"./getPseudoElementBounds-C6QupuvE.js";import"./chevron-down-BmGdKwgH.js";import"./index-Dq5rNNxI.js";import"./error-DwpvxQx3.js";import"./BaseCbacBanner--wPp9JQT.js";import"./makeExternalStore-6yj2j-8e.js";import"./Tooltip-Bk1044gE.js";import"./PopoverPopup-CFeC_ntr.js";import"./debounce-CQ_Rs17S.js";import"./tick-BiexrdJO.js";import"./DropdownField-Dinvefr-.js";import"./isEqual-B25MsUYt.js";import"./withOsdkMetrics-Bco6NPuI.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
