import{j as r}from"./iframe-DjtcYyzQ.js";import{O as b}from"./object-table-Cx1-aOJU.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-4iuChe0L.js";import{u as g}from"./useOsdkClient-B-T-pdfR.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DHuR451x.js";import"./index-CQV6Rnc6.js";import"./Dialog-y15XJOsn.js";import"./cross-B6N8rLM4.js";import"./svgIconContainer-JU7cmdzA.js";import"./useBaseUiId-kxFdZqtD.js";import"./InternalBackdrop-CpQyJmy1.js";import"./composite-B_imHkJV.js";import"./index-CBxdpb96.js";import"./index-D8ZMhwwx.js";import"./index-C3TnBhfz.js";import"./useEventCallback-6rPOrUpt.js";import"./SkeletonBar-BgTk6Y9n.js";import"./LoadingCell-M9yCnm6K.js";import"./ColumnConfigDialog-BahuG4eK.js";import"./DraggableList-D-6R4oYR.js";import"./search-DFIZPiTI.js";import"./Input-eiOZqsyQ.js";import"./useControlled-DggWxDeY.js";import"./isEqual-CHBEhNJy.js";import"./isObject-BLUbfgBE.js";import"./Button-yoR8DJA2.js";import"./ActionButton-aTqycEsf.js";import"./Checkbox-CKKTGtLY.js";import"./useValueChanged-C91I9lSd.js";import"./CollapsiblePanel-BE0pKmrr.js";import"./MultiColumnSortDialog-BE-Xqeny.js";import"./MenuTrigger-qUgny5m-.js";import"./CompositeItem-pjHtEKS0.js";import"./ToolbarRootContext-DHGJfn9d.js";import"./getDisabledMountTransitionStyles-C83r2vCZ.js";import"./getPseudoElementBounds-D-8MIy1t.js";import"./chevron-down-E7YHgJne.js";import"./index-BGI_7tkx.js";import"./error-DLG18jLw.js";import"./BaseCbacBanner-Be-6Cqba.js";import"./makeExternalStore-CDqT4QNq.js";import"./Tooltip-D6VePCFP.js";import"./PopoverPopup-qaWHhtAH.js";import"./toNumber-ptw9YKMz.js";import"./tick-DVtbxPft.js";import"./DropdownField-CVFWI8Ck.js";import"./withOsdkMetrics-m3U67gAP.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
